---
title: App Prompts "File is Damaged" When Opening
description: Resolve the issue of an App prompting that the file is damaged
---

# App Prompts "File is Damaged" When Opening

- "Application" is damaged and cannot be opened. You should move it to the Trash.
- "Application" will damage your computer. You should move it to the Trash.
- "Application" is damaged and cannot be opened. You should eject the disk image.
- "Application" cannot be opened because Apple cannot check it for malicious software.
- "Application" cannot be opened because it is from an unidentified developer.

::: tip
In the instructions below, any file path involving `"/Applications/Application.app"` can be auto-filled by dragging the file from Finder into the terminal.

**Before proceeding, please ensure that Terminal has been granted "Full Disk Access" permission.**
:::

## Remove Quarantine Attribute

```bash
sudo xattr -dr com.apple.quarantine /Applications/Application.app
```

## Local Code Signing

```bash
# Install Command Line Tools for Xcode
# Skip this step if already installed
xcode-select --install

# Local code signing
sudo codesign --force --deep --sign - /Applications/Application.app
```

## Right-Click to Open

Find the .app file in Finder, hold **⌥ option** and **right-click**, then select `Open` from the popup menu.
