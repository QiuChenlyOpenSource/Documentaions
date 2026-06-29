---
title: Getting Started
description: Hayaku App Store User Guide
---

# Getting Started

Hayaku (formerly CoreInject) is a feature-rich macOS application management platform that combines app injection/cracking, Adobe suite management, high-speed downloading, a music player, transparent network proxy, community forums, and more into one integrated tool.

## System Requirements {#prerequisite}

- macOS 15.0 (Sequoia) or later
- Supports both Intel (x86_64) and Apple Silicon (arm64)
- **SIP (System Integrity Protection) must be enabled**
- Administrator password and Full Disk Access required

## Installation & Setup {#installation}

1. Download the latest `QiuChenAppStore.dmg` from [GitHub Releases](https://github.com/QiuChenly/CoreInject) or the Telegram channel
2. Open Terminal and clear quarantine attributes:
   ```bash
   xattr -cr /Volumes/QiuChenAppStore/QiuChenAppStore.dmg
   ```
3. Mount the DMG and drag `QiuChenAppStore.app` into `/Applications/`
4. On first launch, you'll be prompted to install the daemon (HayakuDaemon) — enter your admin password
5. Follow the setup wizard to complete initial configuration (language, permissions, etc.)

## Interface Overview {#overview}

The main interface has a left sidebar with the following modules:

| Module | Description |
|--------|-------------|
| **App Management** | Scan, inject, and crack installed macOS apps |
| **Adobe Center** | Online download, offline install, and management of Adobe products |
| **Download Manager** | Multi-threaded high-speed downloader (aria2-based) with resume support |
| **Music Player** | Local music library management, playback, lyrics, visualizations |
| **Network Proxy** | L3 transparent gateway, HTTP/SOCKS5 proxy, multiple outbound protocols |
| **Community Forums** | Per-app discussion boards with posts, replies, and likes |
| **Messages** | One-on-one direct messaging |
| **Profile** | Personal info, device management, security settings |
| **Settings** | Comprehensive configuration: downloads, proxy, appearance, updates, language |
| **Admin Panel** | Administrator-only: user/content/system management |

---

## App Management (Injection) {#app-management}

### Scanning Apps

Open the "App Management" page and Hayaku will automatically scan all installed apps in `/Applications`. Results are categorized by status:

- **Activatable**: Supported for injection, marked green
- **Injected**: Already cracked, marked blue
- **Unsupported**: Current version not in the support list
- **Discontinued**: No longer maintained

### Injection Process

1. Find the target app in the list
2. Verify the version is within the supported range (see [App Support List](./app-support-list))
3. Click the "Activate" button and enter your admin password
4. Wait for injection to complete (typically 3-10 seconds)
5. Open the app directly — it's now activated

::: warning Note
Close the target app before injecting. If you see a "File is Damaged" warning on first launch after injection, see [FAQ](./faqs/file-is-damaged).
:::

### Filters

The toolbar supports multiple filters:
- **All**: Show all scanned apps
- **Activatable**: Show only supported apps
- **Injected**: Show only already injected apps
- **Search**: Search by app name

---

## Adobe Center {#adobe-center}

A complete Adobe Creative Cloud product management solution.

### Online Download

1. Go to "Adobe Center" → "Online Download" tab
2. Select your target product from the list (Photoshop, Illustrator, Premiere Pro, etc.)
3. Choose version, platform (Intel/Apple Silicon), and language
4. Dependencies and optional components are automatically resolved
5. Click "Download" — files are added to the Download Manager

### Offline Installation

1. After downloading, switch to the "Offline Install" tab
2. Select the local folder containing downloaded Adobe packages
3. Set the installation path (supports non-system directories)
4. Click "Install" — dependencies are handled automatically
5. Supports resume and reinstallation

### Installed Apps Management

- View all installed Adobe apps and their versions
- Uninstall or reinstall as needed
- Auto-detect Adobe app updates

### Usage Notes

- **No trial needed**: Inject directly after installation — no trial period required
- **No Adobe account login**: Do not sign in to any Adobe account
- **All versions supported**: Including latest and future versions (universal)
- **Offline capable**: No network connection needed after injection
- Neural filters and other advanced features supported with offline installation

---

## Download Manager {#download-manager}

High-performance download manager powered by the aria2 engine.

### Key Features

| Feature | Details |
|---------|---------|
| Multi-threaded | Up to 64 concurrent threads |
| Resume | Pause/resume/retry support |
| Task Groups | Auto-group related downloads |
| Status Management | All/Downloading/Completed/Paused/Failed |
| Proxy Support | HTTP/HTTPS/SOCKS5 |
| Concurrency Control | Configurable simultaneous download count (default: 5) |

### Operations

- **Pause/Resume**: Click the button on the right side of each task
- **Retry All**: One-click retry all failed tasks from the top toolbar
- **Open Download Folder**: Quick access to downloaded files
- **Bilibili Video**: Supports Bilibili video downloads with retry

---

## Music Player {#media-player}

Hayaku includes a full-featured local music player.

### Core Features

- **Local Music Scanning**: Auto-scan music directories, organized by album/artist/folder
- **Playback Controls**: Play/pause, previous/next, progress seeking
- **Play Mode**: Sequential, shuffle, single repeat (single-button toggle)
- **Lyrics Display**: Auto-match LRC lyrics with word-level highlighting
- **Dynamic Background**: OKLab color extraction + flowing gradients + FFT beat detection
- **Menu Bar Panel**: Click the menu bar icon for a "Now Playing" popup (cover/lyrics/controls)
- **System Integration**: macOS MPNowPlayingInfoCenter integration for Lock Screen/Control Center
- **Play History**: Track play counts, recent plays, frequently played
- **Recommendations**: Smart recommendations based on play history
- **Quality Badges**: Master and Dolby Atmos indicators

### Supported Audio Formats

MP3, FLAC, AAC, ALAC, WAV, AIFF, OGG, WMA, and other mainstream formats.

### Lyrics Features

- Auto-load from local `.lrc` files
- Dual-style lyrics page (switchable)
- Word-level synchronized highlighting
- Native parsing — no frontend push needed

---

## Network Proxy (Transparent Gateway) {#netproxy}

Hayaku includes a self-developed network proxy engine (`netproxyd`) providing Surge-like transparent proxy capabilities.

### Core Capabilities

| Capability | Description |
|------------|-------------|
| **L3 Transparent Proxy** | utun-based L3 transparent proxy, no manual proxy configuration needed |
| **Multi-NIC Support** | Auto-detect multi-NIC environments with independent IPv6 handling |
| **Inbound Proxy** | Combined HTTP/SOCKS5 inbound proxy for LAN devices |
| **Multiple Outbound Protocols** | Trojan, VMess, Shadowsocks, WireGuard, SSH, and more |
| **Rule Routing** | Domain/IP/process-level routing rules |
| **DNS Proxy** | Built-in DNS server with Fake IP support |
| **Connection Inspection** | Device ownership identification, process-level traffic inspection |
| **ARP Hardening** | Gratuitous ARP to prevent IP conflicts |
| **Persistent Hot-Reload** | Configuration persistence with hot-reload support |

### Client Access Methods

- **Local Transparent Proxy**: Automatically takes over system traffic when started
- **LAN Device Proxy**: Configure other devices to use HTTP/SOCKS5 proxy pointing to this machine
- **Gateway Mode**: Operate as a LAN transparent gateway

::: tip
The network proxy module runs independently as the `netproxyd` daemon process.
Configuration is stored in `~/.qiuchenly/` by default.
:::

---

## Community Forums {#community}

### App Discussion Boards

Each installed app automatically gets its own discussion board.

- **Posting**: Supports title, content, image attachments (max 5, 10MB each) and file attachments (max 5, 20MB each)
- **Replies**: Nested replies up to 3 levels deep
- **Interactions**: Like / Dislike
- **Reporting**: Multiple report types (explicit content, fraud, spam, etc.)

---

## Messages {#messages}

One-on-one direct messaging between users:

- Conversation list management
- Real-time message notifications
- Text message support

---

## Profile {#profile}

- **Basic Info**: Nickname, email, age
- **Device Management**: Add and manage multiple devices
- **Security**: Password change, security code setup
- **Title System**: Level and experience points

---

## Settings {#settings}

| Category | Configurable Options |
|----------|---------------------|
| **Download** | Save path, concurrent tasks, thread count |
| **Updates** | Auto-check, check interval (1-1440 min), version type (stable/beta) |
| **Proxy** | HTTP/HTTPS/SOCKS5 proxy address and authentication |
| **Appearance** | Theme (light/dark/auto), language, app icon |
| **Media** | Music library path, lyrics page style |
| **Network** | Transparent proxy toggle, rule configuration |

### Supported Languages

Simplified Chinese, English, 日本語, 한국어, Русский, Deutsch, Français, Español (8 languages total).

Interface language switches in real time — no restart required.

---

## Command-Line Tools {#cli-tools}

Hayaku provides several CLI tools for advanced users.

### InjectLib (Injection Engine)

```bash
# GUI interactive mode
./InjectLib [/path/to/apps]

# Daemon background mode
./InjectLib --daemon [config.json]
```

### Genshine (iOS IPA Processing)

```bash
# IPA file injection
./InjectLib genshine packipa <IPA path> <dylib path>

# Dynamic library injection
./InjectLib genshine insert <target file> <dylib path>

# Signature check
./InjectLib genshine signChk <target file>

# Helper file repair
./InjectLib genshine <Helper file path> [BundleID]
```

---

## Admin Panel {#admin-panel}

Administrator-only modules (requires admin login):

- **User Management**: View/manage registered users
- **Post Management**: Review/delete posts
- **Forum Management**: Manage discussion boards
- **App Info Management**: Maintain app support list and version info
- **Carousel Management**: Homepage carousel content
- **Category Dictionary**: App category maintenance
- **File Management**: Manage uploaded files
- **Log Management**: System operation logs
- **Violation Management**: Handle user reports
- **IP Ban Management**: Block malicious users
- **System Settings**: Global system parameters

---

## App Support Status {#support-status}

See the [App Support Status List](./app-support-list) for all supported apps.

::: tip
This list is continuously updated. If you find apps that no longer work or discover new crackable apps,
please submit feedback via GitHub Issues or Pull Requests.
:::

## Special App Instructions {#special-apps}

The following apps have special injection or usage procedures — see their respective documentation:

- [Adobe Suite](./special-apps/adobe)
- [Setapp Suite](./special-apps/setapp)
- [Sublime Text / Merge](./special-apps/sublime)
- [Emby Server](./special-apps/emby-server)
- [Parallels Desktop](./special-apps/parallels-desktop-19)
- [MediaMate](./special-apps/media-mate)

## FAQ {#faq}

If you encounter issues, check the [FAQ](./faqs) page first, which covers:

- "File is Damaged" warning on app launch
- Keychain access prompts
- Permission errors (Full Disk Access / App Management)
- Helper file signature failures
- Malware warnings after injection

## Feedback & Community {#feedback}

- **GitHub Issues**: [Report an issue](https://github.com/QiuChenly/CoreInject/issues)
- **Telegram Channel**: [@qiuchenlymac](https://t.me/qiuchenlymac) (latest news)
- **Telegram Group**: [Join](https://t.me/+VvqTr-2EFaZhYzA1) (community discussion)
- **Twitter**: [@QiuChenly](https://twitter.com/QiuChenly)
