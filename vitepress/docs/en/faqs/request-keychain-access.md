---
title: App Wants to Access Keychain Secrets
description: Resolve the App keychain access permission issue
---

# App Wants to Access Keychain Secrets

<img src="/images/system-interface/request-keychain-access-noshadow.png" width="400" />

This occurs because the identity does not match after re-signing, causing the application's keychain access to be blocked.

This is because macOS uses code signing to verify the integrity and origin of applications, and uses this information to decide whether to allow the app to access data in the keychain.

Enter your login password and click "Always Allow" to proceed. It is safe to use.
