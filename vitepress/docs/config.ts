import { createRequire } from 'module'
import { defineAdditionalConfig, type DefaultTheme } from 'vitepress'

const require = createRequire(import.meta.url)
const pkg = require('vitepress/package.json')

export default defineAdditionalConfig({
  description: 'CoreInject - macOS Injection Framework Documentation',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/': { base: '/', items: sidebarMain() }
    },

    editLink: {
      pattern: 'https://github.com/QiuChenly/Documentaions/edit/main/vitepress/docs/:path',
      text: 'Edit this page on GitHub'
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © QiuChenly'
    }
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    { text: 'Home', link: '/' },
    { text: 'Quick Start', link: '/getting-started' },
    { text: 'App Support List', link: '/app-support-list' },
    { text: 'FAQs', link: '/faqs' }
  ]
}

function sidebarMain(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Getting Started',
      collapsed: false,
      items: [
        {
          text: 'Quick Start',
          link: 'getting-started',
          collapsed: false,
          items: [
            { text: 'Installation & Setup', link: 'installation' },
            { text: 'App Management', link: 'app-management' },
            { text: 'Adobe Center', link: 'adobe-center' },
            { text: 'Download Manager', link: 'download-manager' },
            { text: 'Bilibili Download', link: 'bilibili-download' },
            { text: 'Music Player', link: 'music-player' },
            { text: 'Native Video Player', link: 'video-player' },
            { text: 'Network Proxy', link: 'network-proxy' },
            { text: 'Community & Messages', link: 'community' },
            { text: 'Settings', link: 'settings' },
          ]
        },
        {
          text: 'Special App Instructions',
          collapsed: false,
          items: [
            { text: 'Adobe', link: 'special-apps/adobe' },
            { text: 'Setapp', link: 'special-apps/setapp' },
            { text: 'Sublime', link: 'special-apps/sublime' },
            { text: 'Parallels Desktop', link: 'special-apps/parallels-desktop-19' },
            { text: 'MediaMate', link: 'special-apps/media-mate' },
            { text: 'Emby Server', link: 'special-apps/emby-server' }
          ]
        }
      ]
    },
    {
      text: 'Reference',
      collapsed: false,
      items: [
        { text: 'App Support Status', link: 'app-support-list' }
      ]
    },
    {
      text: 'Help',
      collapsed: false,
      items: [
        { text: 'FAQs', link: 'faqs' },
        {
          text: 'FAQ Subpages',
          collapsed: false,
          items: [
            { text: 'File is Damaged', link: 'faqs/file-is-damaged' },
            { text: 'Keychain Access', link: 'faqs/request-keychain-access' }
          ]
        },
        { text: 'Report an Issue', link: 'report-an-issue' }
      ]
    },
    {
      text: 'Others',
      collapsed: false,
      items: [
        { text: 'Some Complaints', link: 'some-complaints' },
        { text: 'Classic Quotes', link: 'classic-quotes' }
      ]
    }
  ]
}
