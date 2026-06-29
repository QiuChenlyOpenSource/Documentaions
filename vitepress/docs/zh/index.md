---
layout: home

hero:
  name: QiuChenly App Store
  text: QiuChenly 应用商店
  tagline: 自由、无门槛的应用生态社区
  image:
    src: /app-store-screenshot.jpg
    alt: QiuChenly App Store 界面截图
  actions:
    - theme: brand
      text: 快速开始
      link: ./getting-started
    - theme: alt
      text: App 支持列表
      link: ./app-support-list
    - theme: alt
      text: GitHub
      link: https://github.com/QiuChenly/CoreInject

features:
  - icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
    title: 自由开放
    details: 完全免费，无门槛使用，基于互联网最原始的共享精神
  - icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>
    title: 社区驱动
    details: 不仅是应用商店，更是交流与分享的社区平台
  - icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15 5-5"/><path d="M12 15l-2.68 2.68a2.18 2.18 0 0 1-2.91.09c-.78-.78-.93-2.09-.09-2.91L12 15"/><path d="m17 10 2.5-2.5c.5-.5 1.5-.5 2 0s.5 1.5 0 2L19 12"/><path d="m17 10 2.68-2.68a2.18 2.18 0 0 1 2.91-.09c.78.78.93 2.09.09 2.91L19 12"/><path d="M19 12 12 19"/><path d="m19 12 2.5 2.5c.5.5 1.5.5 2 0s.5-1.5 0-2L21 10"/></svg>
    title: 丰富资源
    details: 提供正版与第三方应用，支持多种 macOS App 和工具
---

<script setup>
import CoreContributors from '../components/CoreContributors.vue'

const coreMembers = [
  {
    avatar: 'https://github.com/QiuChenly.png',
    name: 'QiuChenly',
    tag: '半步本科巅峰境界',
    title: '秋城落叶',
    links: [
      { icon: 'github', link: 'https://github.com/QiuChenly' }
    ]
  },
  {
    avatar: 'https://github.com/X1a0He.png',
    name: 'X1a0He',
    title: '小何',
    links: [
      { icon: 'github', link: 'https://github.com/X1a0He' }
    ]
  }
]

const extraMembers = [
  {
    avatar: 'https://github.com/wibus-wee.png',
    name: 'wibus-wee',
    tag: '大专',
    tagVariant: 'gradient',
    links: [
      { icon: 'github', link: 'https://github.com/wibus-wee' }
    ]
  },
  {
    avatar: 'https://github.com/LanYunDev.png',
    name: 'LanYunDev',
    links: [
      { icon: 'github', link: 'https://github.com/LanYunDev' }
    ]
  },
  {
    avatar: 'https://github.com/Antibioticss.png',
    name: 'Antibioticss',
    links: [
      { icon: 'github', link: 'https://github.com/Antibioticss' }
    ]
  },
  {
    avatar: 'https://github.com/wolffya.png',
    name: 'wolffya',
    links: [
      { icon: 'github', link: 'https://github.com/wolffya' }
    ]
  },
  {
    avatar: 'https://github.com/oilrich25.png',
    name: 'oilrich25',
    links: [
      { icon: 'github', link: 'https://github.com/oilrich25' }
    ]
  }
]
</script>

## 关于本项目

**QiuChenly App Store** 是一个全新、自由、无门槛的应用商店与社区。

我们已将完整 App 与权限相关 API 统一封装，您只需下载安装、完成简单配置，即可使用 QiuChenly 提供的全部能力。

本商店不限于破解工具，更是**交流与分享**的社区：找不到资源、缺一手消息时，可以在这里发现正版与第三方应用，并与志同道合者交流心得。

**面向发布者**：我们提供管理员后台，您可将打包好的预破解包上传至中央服务器，所有用户都能在 App 详情页看到您发布的最新作品。

传统盗版资源站收割的时代已经过去。您眼前的是一个**全新、自由、无门槛**的社区、商店与工具集合。

**QiuChenly，致力于人人平等的自由软件生态构建。**

## 核心贡献者

QiuChen App Store 的核心开发与维护

<CoreContributors :members="coreMembers" />

## 额外贡献者

感谢以下伙伴为项目做出的贡献（排名不分前后）

<CoreContributors :members="extraMembers" />

<div style="margin-top: 32px; text-align: center;">
  <p style="color: var(--vp-c-text-2);">
    ...还有许多许多人，实在难以一一列出，在此表示深深的感谢！
  </p>
</div>

## 文档编撰 & 致谢

- **文档排布与初始发布** - [QiuChenly](https://github.com/QiuChenly)
- **更新文档、添加更多 App 描述** - [X1a0He](https://github.com/X1a0He)
- **删除部分冗余文档信息** - WPF
- **Editorial Design、图片重绘、美化梳理文档内容** - [Noah](https://linktr.ee/xicrosoft)

<p style="margin-top: 32px; text-align: center; color: var(--vp-c-text-2);">
  感谢各位的倾力帮助！
</p>

## 联系我们

<div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center; margin-top: 16px;">
  <a href="https://t.me/qiuchenlymac" target="_blank" rel="noopener" style="display: inline-flex; align-items: center; gap: 8px; color: var(--vp-c-text-1); text-decoration: none; padding: 8px 16px; border-radius: 6px; background: var(--vp-c-bg-soft); transition: background 0.25s;">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>
    <span>Telegram 频道</span>
  </a>
  <a href="https://t.me/+VvqTr-2EFaZhYzA1" target="_blank" rel="noopener" style="display: inline-flex; align-items: center; gap: 8px; color: var(--vp-c-text-1); text-decoration: none; padding: 8px 16px; border-radius: 6px; background: var(--vp-c-bg-soft); transition: background 0.25s;">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>
    <span>Telegram 群组</span>
  </a>
  <a href="https://twitter.com/QiuChenly" target="_blank" rel="noopener" style="display: inline-flex; align-items: center; gap: 8px; color: var(--vp-c-text-1); text-decoration: none; padding: 8px 16px; border-radius: 6px; background: var(--vp-c-bg-soft); transition: background 0.25s;">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
    <span>Twitter</span>
  </a>
</div>
