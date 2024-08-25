# 打开 App 提示 “文件已损坏”

<link-summary>打开 App 提示 “文件已损坏” 该怎么办？</link-summary>

![file-is-damaged](file-is-damaged-noshadow.png){width="500"}

- “应用程序” 已损坏，无法打开。您应该将它移到废纸篓。
- “应用程序” 将对您的电脑造成伤害。您应该将它移到废纸篓。
- “应用程序” 已损坏，无法打开。你应该推出磁盘映像。
- 无法打开 “应用程序”，因为 Apple 无法检查其是否包含恶意软件。
- 无法打开 “应用程序”，因为它来自身份不明的开发者。


> 以下指令中涉及到文件路径 `"/Applications/Application.app"` 的都可直接从 Finder 中拖入终端自动填充。
>
> **开始操作前，请先确保已授予终端 “完全磁盘访问” 权限**
> {style="note"}

## 移除隔离属性

```Shell
sudo xattr -dr com.apple.quarantine /Applications/Application.app
```

## 本地签名

```Shell
# 安装 Command Line Tools for Xcode
# 若已安装可跳过
xcode-select --install

# 本地签名
sudo codesign --force --deep --sign - /Applications/Application.app
```

## 右键打开

在 Finder 中找到 .app 文件，按住 <shortcut>⌥ option</shortcut> 并 <shortcut>右键单击</shortcut>，在弹出的菜单中单击 `打开`

## 禁用 Gatekeeper

<resource src="gatekeeper-killer.mobileconfig"/>

下载后在 `系统设置` → `已下载的配置文件` → `Gatekeeper Killer` → `安装…` 安装即可

### 安装此配置文件后将修改的配置： {#configurations-will-be-modified, collapsible="true"}
- 安全性 `com.apple.security`
    - 禁用 “自动重新启用 Gatekeeper”
- 系统策略：控制 `com.apple.systempolicy.control`
    - 禁用 “启用 Gatekeeper”