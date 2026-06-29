---
title: Parallels Desktop
description: Parallels Desktop activation guide
---

# Parallels Desktop

## Parallels Desktop 26 Activation — Must Read {#parallels-desktop-19_1_0}

::: warning
Currently supports the latest PD 26 for both Intel and Arm64 architectures.
:::

In the future, all Parallels Desktop releases will only be distributed as complete dmg files.
Users simply need to download the pre-cracked dmg and install it directly for an activated version, with no manual injection required.

### Notes

1. Currently supports the latest PD 26 for both Intel and Arm64 architectures
2. No noticeable issues after cracking; the experience is equivalent to a genuine license.
3. Keyboard not working? Turn off Game Mode optimization! Or restart your Mac — this is an official PD issue, don't ask me!
4. Follow the Telegram @qiuchenlymac channel for the latest firsthand information!

### Usage

Download the latest PD cracked package from the QiuChenly channel. If you can't find it, search #PD to download the latest released dmg file.

This document may not be updated in real time; please refer to the channel's related announcements.

Compared to the official dmg, the following optimizations have been made:
  1. No longer forces a check for newer versions during installation.
  2. No longer displays the user license agreement. I'm using a pirated version, so I don't need to comply with their agreement.
  3. Direct installation gives you the cracked version.

Usage notes:
After running the ARM installer, it may prompt that the developer cannot be verified. This is due to macOS security mechanisms.
The solution is simple — first click Cancel.
1. Open Settings
2. Privacy & Security - Security - Blocked - Click "Open Anyway"
3. Click install again to display a new window, then click the "Open" button.

Note: If the app shows it cannot be opened, first eject the dmg image, then run `xattr -cr xxx.dmg` on the dmg file and remount it to make it work normally.
If the problem persists, directly sign the dmg file.

### Troubleshooting
If you encounter issues installing the direct-install cracked dmg, please refer to this section.

- Apple cannot verify that "Install.app" does not contain malware that may harm your Mac or compromise your privacy.
    ![img1](/images/special-apps/img_1.png)
  - Solution steps:
  - 1. Eject the dmg image
    ![img1](/images/img_2.png)
    2. Open Terminal
    3. Run the command, copying the full dmg path:
       Hold the Option key on your keyboard and right-click the file to reveal this option.
       ![img1](/images/img_3.png)
       ```bash
       xattr -cr {copied full file path}/ParallelsDesktop_26_1_1_57288_Release_2025_10_17_direct_install_cracked.dmg
       codesign -fs - {copied full file path}/ParallelsDesktop_26_1_1_57288_Release_2025_10_17_direct_install_cracked.dmg
       ```
       Result as shown:
       ![img1](/images/img_4.png)
    4. Reopen the dmg file and proceed with installation normally.

#### Important Notes
- Prioritize dmg, tar.gz, and zip packages released on the official QiuChenly channel
- Do not arbitrarily trust or download repackaged resources from unknown third-party sources
