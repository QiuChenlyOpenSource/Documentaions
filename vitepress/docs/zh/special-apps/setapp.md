---
title: Setapp
description: Setapp 注入说明
---

# Setapp

## App 自动更新提示 Sign 不匹配 {#auto-update-sign-mismatch}

当前推荐版本: https://dl.devmate.com/com.setapp.DesktopClient/99/1739545743/Setapp-99.zip

你也可以手动下载最新版本，但不稳定：[https://store.setapp.com/updates/beta.xml](https://store.setapp.com/updates/beta.xml)

## 如何登录 {#how-to-login}

由于 Setapp 是线上服务，我们提供了一键登录链接，注入后直接点击下方按钮即可登录 Setapp，我们已经在代码里自动处理了大部分事情。

<a href="setapp://system/sign_in?access_token=fuckingyoutoken&user_email=qiuchenly@outlook.com"><img src="/images/login-setapp.svg" width="120" alt="Login Setapp" /></a>

## 如何注入 {#how-to-inject}

### 卸载后重新安装

1. 使用 [App Cleaner & Uninstaller](https://download.nektony.com/pro-support/v3/app-cleaner/update/update.xml) 彻底卸载 Setapp，切勿使用 BuhoCleaner！
2. 前往上述 [SetApp 更新地址](https://store.setapp.com/updates/beta.xml) 下载最新版本。
3. 下载完成后，将 Setapp 拖入 Application 中，不要打开，不要打开，不要打开！
4. 运行注入: `[com.setapp.DesktopClient/Setapp] - [3.43.3]`.包名为com.setapp.DesktopClient别看错了。
5. 注入完成后打开，如果提示损坏，请查看 [FAQ](../faqs/file-is-damaged)
6. 如果看到 QiuChenly 弹窗，说明成功，如果没有看到，说明注入失败。

### 我不想卸载

1. 在 Setapp 里找到右上角的头像，点击后选择退出。
2. 打开 `~/Library/Application Support` 文件夹。
3. 找到 Setapp 文件夹，**⌘ Command + ⌫ Delete** 删除文件夹。
4. 运行注入: `[com.setapp.DesktopClient/Setapp] - [3.43.3]`.包名为com.setapp.DesktopClient别看错了。
5. 注入完成后打开，如果提示损坏，请查看 [FAQ](../faqs/file-is-damaged)
6. 如果看到 QiuChenly 弹窗，说明成功，如果没有看到，说明注入失败。

## 更新或下载完 App 后，我还需要重新注入吗？ {#reinject-after-updating-or-downloading}

是的。下载完的 App 是官方版本，直接打开会报错 `1701`。需要手动执行脚本，会自动检测到你的 App，注入它即可。
