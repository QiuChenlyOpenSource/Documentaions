---
title: Setapp
description: Setapp injection guide
---

# Setapp

## App auto-update prompts sign mismatch {#auto-update-sign-mismatch}

Currently recommended version: https://dl.devmate.com/com.setapp.DesktopClient/99/1739545743/Setapp-99.zip

You can also manually download the latest version, but it may be unstable: [https://store.setapp.com/updates/beta.xml](https://store.setapp.com/updates/beta.xml)

## How to log in {#how-to-login}

Since Setapp is an online service, we provide a one-click login link. After injection, simply click the button below to log into Setapp — we have already handled most things in the code automatically.

<a href="setapp://system/sign_in?access_token=fuckingyoutoken&user_email=qiuchenly@outlook.com"><img src="/images/login-setapp.svg" width="120" alt="Login Setapp" /></a>

## How to inject {#how-to-inject}

### Uninstall and reinstall

1. Use [App Cleaner & Uninstaller](https://download.nektony.com/pro-support/v3/app-cleaner/update/update.xml) to completely uninstall Setapp. Do NOT use BuhoCleaner!
2. Go to the [Setapp update URL](https://store.setapp.com/updates/beta.xml) above to download the latest version.
3. After downloading, drag Setapp into the Applications folder. Do NOT open it, do NOT open it, do NOT open it!
4. Run injection: `[com.setapp.DesktopClient/Setapp] - [3.43.3]`. The bundle ID is com.setapp.DesktopClient — make sure you select the right one.
5. Open it after injection. If it prompts that the app is damaged, please check [FAQ](../faqs/file-is-damaged)
6. If you see the QiuChenly popup, it was successful. If not, the injection failed.

### I don't want to uninstall

1. In Setapp, find the avatar in the upper right corner, click it and select Sign Out.
2. Open the `~/Library/Application Support` folder.
3. Find the Setapp folder, press **⌘ Command + ⌫ Delete** to delete the folder.
4. Run injection: `[com.setapp.DesktopClient/Setapp] - [3.43.3]`. The bundle ID is com.setapp.DesktopClient — make sure you select the right one.
5. Open it after injection. If it prompts that the app is damaged, please check [FAQ](../faqs/file-is-damaged)
6. If you see the QiuChenly popup, it was successful. If not, the injection failed.

## Do I need to re-inject after updating or downloading an app? {#reinject-after-updating-or-downloading}

Yes. The downloaded app is the official version, and opening it directly will throw error `1701`. You need to manually run the script, which will automatically detect your app and inject it.
