---
title: 快速上手
description: QiuChenly 应用商店使用指南
---

# QiuChenly 应用商店

QiuChenly 应用商店 是一个功能丰富的 macOS 应用管理平台，集应用注入破解、Adobe 全套件管理、高速下载器、音乐播放器、透明代理、社区论坛等功能于一体。

## 系统要求 {#prerequisite}

- macOS 15.0 (Sequoia) 或更高版本
- 支持 Intel (x86_64) 和 Apple Silicon (arm64)
- **必须启用 SIP (System Integrity Protection)**
- 需要管理员密码和完全磁盘访问权限

## 快速安装 {#quick-install}

```bash
# 1. 下载 DMG 后清除隔离属性
xattr -cr /Volumes/QiuChenAppStore/QiuChenAppStore.dmg

# 2. 挂载 DMG，将 QiuChenAppStore.app 拖入 /Applications/

# 3. 首次启动，按提示安装守护进程并授权权限
```


## App 支持状态 {#support-status}

查看 [App 支持状态一览表](./app-support-list) 了解所有支持注入的应用。

## 特殊应用 {#special-apps}

以下应用有特殊操作流程：

- [Adobe 系列](./special-apps/adobe)
- [Setapp 全系列](./special-apps/setapp)
- [Sublime Text / Merge](./special-apps/sublime)
- [Emby Server](./special-apps/emby-server)
- [Parallels Desktop](./special-apps/parallels-desktop-19)
- [MediaMate](./special-apps/media-mate)

## 常见问题 {#faq}

遇到问题先查 [FAQ](./faqs)：

- 提示「文件已损坏」
- 钥匙串访问弹窗
- 权限错误（FDA/App Management）
- 签名失败
- 恶意软件警告

## 反馈 {#feedback}

- [GitHub Issues](https://github.com/QiuChenly/CoreInject/issues)
- [Telegram 频道](https://t.me/qiuchenlymac)
- [Telegram 群组](https://t.me/+VvqTr-2EFaZhYzA1)
