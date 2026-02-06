---
title: 打开 App 提示 "文件已损坏"
description: 解决 App 提示文件已损坏的问题
---

# 打开 App 提示 "文件已损坏"

- "应用程序" 已损坏，无法打开。您应该将它移到废纸篓。
- "应用程序" 将对您的电脑造成伤害。您应该将它移到废纸篓。
- "应用程序" 已损坏，无法打开。你应该推出磁盘映像。
- 无法打开 "应用程序"，因为 Apple 无法检查其是否包含恶意软件。
- 无法打开 "应用程序"，因为它来自身份不明的开发者。

::: tip
以下指令中涉及到文件路径 `"/Applications/Application.app"` 的都可直接从 Finder 中拖入终端自动填充。

**开始操作前，请先确保已授予终端 "完全磁盘访问" 权限**
:::

## 移除隔离属性

```bash
sudo xattr -dr com.apple.quarantine /Applications/Application.app
```

## 本地签名

```bash
# 安装 Command Line Tools for Xcode
# 若已安装可跳过
xcode-select --install

# 本地签名
sudo codesign --force --deep --sign - /Applications/Application.app
```

## 右键打开

在 Finder 中找到 .app 文件，按住 **⌥ option** 并 **右键单击**，在弹出的菜单中单击 `打开`
