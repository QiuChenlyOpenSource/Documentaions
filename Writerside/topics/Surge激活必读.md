# Surge 激活必读
**老有聪明人自己没搞好出问题来问我该怎么办 不是我的问题我怎么知道怎么办？你不问开发者你问我？傻逼吧你？**

纯小白另可参见:

1. [Wolffya 编写的小白参考说明](https://github.com/wolffya/InjectLib1/blob/main/readme.md)
2. [LanYunDev 编写的Surge一键激活脚本](https://github.com/QiuChenlyOpenSource/91QiuChen/blob/main/Surge%E4%B8%80%E9%94%AE%E8%84%9A%E6%9C%AC)

Surge正式版 & Beta版下载地址: [下载地址](https://www.nssurge.com/mac/v5/appcast-signed-beta.xml)

Surge盗版用户请**支持正版**。\
我对开发者致敬说个早上好也被某些无脑用户过度解读是嘲讽开发者是吧？那我直接说操你妈是不是你全家骨灰都被我扬了？\
Surge是非常好的一个产品，我发我的补丁 你支持你自己的正版，who care u? \
有的人不要两头带节奏 在正版群对开发者那边截图破解版嘲笑还打着为开发者着想的幌子拱火 另一边下破解版在别的电脑上用\
这种人你的米线很低我就不评价了 但是你的🐎肯定必死。\

对开发者团队我无意冒犯，早上好。\

目前错误已全部修正。\
之前安装过旧版本的用户进Surge后先卸载一遍Helper帮助程序才能正常安装帮助程序挂上代理。点击安装帮助程序没反应的不是破解的问题，能不能先去点一下卸载帮助程序呢？\
如果你因为某些软件缺陷第一反应质疑是破解的问题，那么我只能说“SB 你是对的 都是破解的问题 你说的太对了 完全不是你的问题
完全不是原始软件的问题”因为跟蠢货争论只会浪费我的生命。\

## Surge Mac 助手程序（Helper）异常处理方式

**该处理方式以及以下给出的任何代码均为Surge官方教程**

如果 Surge Mac 助手程序（Helper）异常，会导致无法设置系统代理和无法开启增强模式。（使用 CleanMyMac 或其他清理软件强行清理可能导致该问题）

请参照以下步骤修复：

1. 打开 Surge Mac 的设置界面，选择高级，选择移除助手程序（Remove Helper）。
2. 输入你的系统密码。
3. 点击打开终端（Open Terminal）。
4. 在终端窗口处再次输入系统密码并回车。
5. 重启电脑。
6. 打开 Surge，尝试勾选设置为系统代理，输入系统密码重新安装助手程序。

如果依然不正常工作，且之前有使用过某些清理软件禁用 helper，请尝试执行

```bash
sudo /bin/launchctl load -w /Library/LaunchDaemons/com.nssurge.surge-mac.helper.plist
```

由于 macOS 是开发性系统，十分复杂，如果仍然不能正常工作，可能需要尝试重置整个系统。