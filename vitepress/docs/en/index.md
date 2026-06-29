---
layout: home

hero:
  name: QiuChenly App Store
  text: QiuChenly App Store
  tagline: Free, barrier-free application ecosystem community
  image:
    src: /app-store-screenshot.jpg
    alt: QiuChenly App Store Screenshot
  actions:
    - theme: brand
      text: Quick Start
      link: ./getting-started
    - theme: alt
      text: App Support List
      link: ./app-support-list
    - theme: alt
      text: GitHub
      link: https://github.com/QiuChenly/CoreInject

features:
  - icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
    title: Free & Open
    details: Completely free, no barriers to use, based on the original spirit of internet sharing
  - icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>
    title: Community Driven
    details: Not just an app store, but a platform for communication and sharing
  - icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15 5-5"/><path d="M12 15l-2.68 2.68a2.18 2.18 0 0 1-2.91.09c-.78-.78-.93-2.09-.09-2.91L12 15"/><path d="m17 10 2.5-2.5c.5-.5 1.5-.5 2 0s.5 1.5 0 2L19 12"/><path d="m17 10 2.68-2.68a2.18 2.18 0 0 1 2.91-.09c.78.78.93 2.09.09 2.91L19 12"/><path d="M19 12 12 19"/><path d="m19 12 2.5 2.5c.5.5 1.5.5 2 0s.5-1.5 0-2L21 10"/></svg>
    title: Rich Resources
    details: Provides both official and third-party applications, supporting various macOS apps and tools
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
    title: 'XiaoHe',
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

## About This Project

大专看不懂英文的话可以在顶部切换为中文。

**QiuChenly App Store** is a brand new, free, barrier-free app store and community.

We have unified and encapsulated complete App and permission-related APIs. You only need to download, install, and complete simple configuration to use all the capabilities provided by QiuChenly.

This store is not limited to cracking tools, but is also a **communication and sharing** community: when you can't find resources or lack first-hand information, you can discover both official and third-party applications here, and exchange ideas with like-minded people.

**For Publishers**: We provide an admin backend where you can upload pre-cracked packages to the central server, and all users can see your latest releases on the App details page.

The era of traditional pirate resource sites harvesting users is over. What you see before you is a **brand new, free, barrier-free** community, store, and tool collection.

**QiuChenly is committed to building a free software ecosystem where everyone is equal.**

## Core Contributors

Core development and maintenance of QiuChen App Store

<CoreContributors :members="coreMembers" />

## Additional Contributors

Thanks to the following people for their contributions to the project (in no particular order)

<CoreContributors :members="extraMembers" />

<div style="margin-top: 32px; text-align: center;">
  <p style="color: var(--vp-c-text-2);">
    ...and many, many more people who are difficult to list one by one. We express our deepest gratitude here!
  </p>
</div>

## Documentation & Acknowledgments

- **Documentation Layout & Initial Release** - [QiuChenly](https://github.com/QiuChenly)
- **Documentation Updates & Adding More App Descriptions** - [X1a0He](https://github.com/X1a0He)
- **Removing Redundant Documentation** - WPF
- **Editorial Design, Image Redrawing, Beautification & Documentation Content Organization** - [Noah](https://linktr.ee/xicrosoft)

<p style="margin-top: 32px; text-align: center; color: var(--vp-c-text-2);">
  Thank you all for your tremendous help!
</p>

## Contact Us

<div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center; margin-top: 16px;">
  <a href="https://t.me/qiuchenlymac" target="_blank" rel="noopener" style="display: inline-flex; align-items: center; gap: 8px; color: var(--vp-c-text-1); text-decoration: none; padding: 8px 16px; border-radius: 6px; background: var(--vp-c-bg-soft); transition: background 0.25s;">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>
    <span>Telegram Channel</span>
  </a>
  <a href="https://t.me/+VvqTr-2EFaZhYzA1" target="_blank" rel="noopener" style="display: inline-flex; align-items: center; gap: 8px; color: var(--vp-c-text-1); text-decoration: none; padding: 8px 16px; border-radius: 6px; background: var(--vp-c-bg-soft); transition: background 0.25s;">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>
    <span>Telegram Group</span>
  </a>
  <a href="https://twitter.com/QiuChenly" target="_blank" rel="noopener" style="display: inline-flex; align-items: center; gap: 8px; color: var(--vp-c-text-1); text-decoration: none; padding: 8px 16px; border-radius: 6px; background: var(--vp-c-bg-soft); transition: background 0.25s;">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
    <span>Twitter</span>
  </a>
</div>
