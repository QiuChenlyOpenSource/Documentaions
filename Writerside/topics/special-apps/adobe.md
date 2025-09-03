# Adobe

<link-summary>要注入 Adobe 系列将多 1 步</link-summary>

## 常见问题 {#faqs}

### 问题1 Adobe PS CC / Lightroom CC 启动时崩溃 {#ps-lr-crash-on-startup}

出现这个图片说明你没注入成功或者登录了自己的账号，先注销自己的账号。

![Lrc Trial.png](LrcTrial.png)

### 问题2 Lightroom 提示脱机时不可搜索 {#cannot-search-when-offline}

该问题是可能存在的一个bug，后续会修复。

![surge.png](surge.png)

### 问题3 提示“想要访问你的钥匙串中的密钥”? {#request-keychain-access}

![request-keychain-access-noshadow.png](request-keychain-access-noshadow.png){width="400"}

这是应用程序自己的数据，由于重新签名后会导致签名信息不匹配，你输入用户密码后点击始终允许即可。

## 问题4 我该安装哪个版本？ {#version-selection}

从官方 Adobe CC 云中直接在线安装最新版本，或前往官网搜索离线安装包。

## 问题5 是否安装 Adobe Genius Service？ {#adobe-genius-service}

![install-adobe-ags-noshadow.png](install-adobe-ags-noshadow.png){width="500"}

勾选 “不再显示此对话框”

选择 “拒绝”

## 问题6 “This non-genius app” 弹窗 {#non-genius-app}

![adobe-this-is-non-genuine-app-noshadow.png](adobe-this-is-non-genuine-app-noshadow.png){width="500"}

早就修复这个问题了，你要是还遇到说明你没用最新版本代码。

## 问题7 Apple无法验证“InstallAdobe.command”是否包含可能危害Mac安全或泄漏隐私的恶意软件。
![image_8.png](image_8.png)
这是因为从网络上下载的脚本导致的。

解决办法:
1. 点击完成
2. 打开设置
3. 找到安全与隐私
4. ![image_9.png](image_9.png)
   点击仍要打开
5. ![image_10.png](image_10.png)
   提示"Apple无法验证其是否包含可能危害Mac安全或泄漏隐私的恶意软件。除非你确定其来源可靠，否则请勿打开。",不管他，点击"仍要打开"
6. ![image_11.png](image_11.png)
   输入macOS密码认证即可。

## 问题8 “Adobe After Effects 2025”已损坏，无法打开。 | “xxx”已损坏，无法打开。
![image_14.png](image_14.png)
如图所示，这是macOS系统安全检查导致的。
解决办法:
1. 点击 打开 按钮。
2. ![image_15.png](image_15.png)
   就行了。
3. 如果没有反应,那就参考"问题7"中在设置里仍要打开即可。

# 安装Adobe Installer 离线产品部署
![image_12.png](image_12.png)
由于需要sudo权限，提示Password:时请输入你的Mac密码。

1. 选择你需要安装的产品（这取决于你下载的离线安装包中有哪些版本 ）
2. 选择你需要的语言（这取决于打包者的下载行为，qiuchenly建议下载时直接下载所有语言包）
3. 开始安装
   ![image_13.png](image_13.png)
   注意, 出现下述内容是Adobe在检查App文件完整性, 正常现象无需理会:
   ```bash
   Scan completed and software is allowed by system policy.
   Progress: 109695216/109695216
   Scan completed and software is allowed by system policy.
   ```


