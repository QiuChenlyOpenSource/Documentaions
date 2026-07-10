---
title: Installation & Setup
description: QiuChenly App Store installation and configuration guide
---

# Installation & Setup

## Download Package {#download}

### Method 1: GitHub Releases (Recommended)

1. Open the [GitHub Releases page](https://github.com/QiuChenly/CoreInject/releases)
2. Find the latest version (tag format `1.0.57.20250601...`)
3. Download `QiuChenAppStore.dmg`

### Method 2: Telegram Channel

1. Open the [Telegram channel @qiuchenlymac](https://t.me/qiuchenlymac)
2. Search for the `#Release` tag to get the latest package

After downloading you will get a DMG package (the file name looks like `QiuChenAppStore-v1.3.0-2026-06-29.dmg`):

![Downloaded DMG package](/images/network-proxy/image.png)

## Installation Steps {#install-steps}

### Step 1: Remove Quarantine Attribute

macOS marks files downloaded from the internet as "quarantined". You must clear this first:

1. Open **Terminal** (in `Launchpad` → `Other` → `Terminal`, or press `⌘ + Space` and search for `Terminal`)
2. Enter the following command (replace the path with your actual path):
   ```bash
   xattr -cr /Volumes/QiuChenAppStore/QiuChenAppStore.dmg
   ```

> **Tip**: You can also drag the dmg file directly into the terminal window and the path will be filled in automatically.

![Running xattr -cr in Terminal to remove the quarantine attribute](/images/network-proxy/image-1.png)

### Step 2: Mount DMG and Install

1. Double-click the `.dmg` file. A mounted disk will appear on the desktop or in the Finder sidebar.
2. Drag `QiuChenAppStore.app` into the `Applications` folder.
3. Wait for the copy to complete (approximately 5-10 seconds).

![Drag the app into Applications after mounting the DMG](/images/network-proxy/image-2.png)

### Step 3: First Launch

1. Open **Launchpad** (pinch with four fingers on the trackpad, or press `F4`)
2. Click the `QiuChenAppStore` icon
3. On first launch, a system security prompt will appear. Click **"Open"**.

::: warning If you see "Cannot verify developer"
Go to **System Settings** → **Privacy & Security** → scroll to the bottom, and click **"Open Anyway"**.
:::

On first launch the app plays a Genshin-style WebGL opening animation:

![Genshin-style opening animation](/images/network-proxy/image-3.png)

Click **"Tap to Enter"** in the door animation to enter the app:

![The "Tap to Enter" door animation](/images/network-proxy/image-5.png)

### Step 4: Install Daemon

After the first launch, the app will automatically display a daemon installation wizard:

1. Enter your **Mac login password** in the dialog
2. Click **"Install"**
3. Wait for the progress bar to complete (approximately 5-15 seconds)
4. Once installed, all feature modules will appear on the left side

![Prompt to install the Daemon](/images/network-proxy/image-4.png)

The daemon (`QiuChenlyDaemon`) is a background service responsible for:
- Scanning installed applications
- Performing app injection
- Managing download tasks
- Providing music playback service
- Running the network proxy engine

### Step 5: Grant Permissions

On first use, you need to grant two critical permissions:

**Full Disk Access**:
1. Click the **"Open System Settings"** button on the guide page
2. In **Privacy & Security** → **Full Disk Access**
3. Enable the toggles for `QiuChenAppStore` and `QiuChenlyDaemon`
4. Enter your password to confirm

![Full Disk Access guide page](/images/network-proxy/image-6.png)

The app opens System Settings and the file location at the same time. Enable **"QiuChenly App Store Daemon.app"** (i.e. `HayakuDaemon.app`) in the list. If prompted to quit, choose "Quit & Reopen":

![Enabling Full Disk Access for the daemon in System Settings](/images/network-proxy/image-7.png)

::: tip Can't find the daemon in the list?
Click "+" to add it manually: go to **Macintosh HD → Library → Application Support → Hayaku** and select `HayakuDaemon.app`. If the toggle is on but access still fails, remove it with "−" and add it again with "+".
:::

**App Management** (macOS 14+):
1. In **Privacy & Security** → **App Management**
2. Enable the toggles for `QiuChenAppStore` and `QiuChenlyDaemon`

## Setup Wizard {#wizard}

After completing permission authorization on first launch, you will enter the setup wizard:

1. **Language Selection**: Choose the interface language from the dropdown (default: follow system)
2. **Download Path**: Set the default download location (must be a full absolute path; `~` is not allowed)
3. Click **"Finish Setup"** to enter the main interface

![Setup wizard: language and download path](/images/network-proxy/image-8.png)

## Launchpad Integration {#launcher}

QiuChenly App Store provides a custom launchpad (experimental feature):

- Enable it in **Manage** → **System Settings** → **Experimental Features**
- Once enabled, it takes over `⌘ + Space` and four-finger gestures
- Quickly search for apps and execute commands

## Updating the App {#update}

QiuChenly App Store supports automatic update checking:

1. Go to **Manage** → **System Settings** → **Update**
2. Enable **"Check for updates automatically"**
3. Select the update channel: **Stable** or **Include beta**

When a new version is available, a **"{n} app(s) have new versions"** notification will appear at the top of the home page. Click to update.

## Daemon Management {#daemon-management}

The daemon (HayakuDaemon) is the background service of QiuChenly App Store, responsible for core features such as app scanning, injection, download management and music playback.

Process name: `HayakuDaemon`
Bundle ID: `com.qiuchenly.hayaku.daemon`
Install path: `/Library/Application Support/Hayaku/HayakuDaemon.app`

### Check Status

Run in Terminal:

```bash
launchctl list | grep hayaku
```

If the daemon is running normally, it will show the process ID and status. You can also open **Activity Monitor** and search for `HayakuDaemon` to confirm the process exists.

### Restart the Daemon

```bash
# Stop
sudo launchctl bootout system/com.qiuchenly.hayaku.daemon

# Start
sudo launchctl bootstrap system /Library/LaunchDaemons/com.qiuchenly.hayaku.daemon.plist
sudo launchctl kickstart -k system/com.qiuchenly.hayaku.daemon
```

### Force Uninstall the Daemon

```bash
sudo launchctl unload /Library/LaunchDaemons/com.qiuchenly.hayaku.daemon.plist
sudo rm -rf "/Library/Application Support/Hayaku"
sudo rm -f /Library/LaunchDaemons/com.qiuchenly.hayaku.daemon.plist
sudo tccutil reset All com.qiuchenly.hayaku.daemon
```

After uninstalling, reopening QiuChenAppStore will automatically prompt you to reinstall it.

### Reset TCC Permissions

If permissions are misbehaving (e.g. cannot access disk), reset the system permission grants:

```bash
sudo tccutil reset All com.qiuchenly.hayaku.daemon
```

After running this, you must re-grant permissions in **System Settings → Privacy & Security**.

## Viewing Logs {#logs}

### Daemon Logs

Daemon logs are written to `/var/log/` and `/tmp/`:

```bash
# Tail the log in real time
tail -f /var/log/hayaku_daemon.log

# View the error log
cat /var/log/hayaku_daemon_error.log

# Tail the temporary log
tail -f /tmp/HayakuDaemon.log
```

### Console Logs

Open the macOS **Console** app (in `Applications/Utilities`) and search for `hayaku` or `QiuChenly` to see all related system logs.

### HTTP API Port

The daemon provides an HTTP API on local port `15200`. You can visit `http://localhost:15200` in a browser to verify the service responds normally.

## Troubleshooting {#troubleshooting}

| Issue | Solution |
|------|---------|
| "File is damaged" on open | Run `xattr -cr /Applications/QiuChenAppStore.app` |
| Daemon installation failed | Make sure Full Disk Access is granted, restart Mac and try again |
| Apps not detected | Check whether Full Disk Access is enabled |
| App crashes after injection | Confirm SIP is enabled, check whether the app version is in the supported list |
| Cannot connect to daemon | Check status with `launchctl list \| grep hayaku`; if absent, [restart the daemon](#restart-the-daemon) |
| Injection/download errors | Check the [Daemon logs](#daemon-logs) to pinpoint the cause |
