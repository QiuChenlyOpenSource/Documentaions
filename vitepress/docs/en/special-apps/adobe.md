---
title: Adobe
description: Adobe series app injection guide
---

# Adobe

## FAQs {#faqs}

### Q1: Adobe PS CC / Lightroom CC crashes on startup {#ps-lr-crash-on-startup}

If you see this image, it means the injection failed or you are logged into your own account. Sign out of your account first.

![Lrc Trial](/images/achieved/LrcTrial.png)

### Q2: Lightroom says "Cannot search when offline" {#cannot-search-when-offline}

This is a potential bug that will be fixed later.

![surge](/images/achieved/surge.png)

### Q3: "Wants to access the key in your keychain"? {#request-keychain-access}

<img src="/images/system-interface/request-keychain-access-noshadow.png" width="400" />

This is the app's own data. Due to the signature mismatch after re-signing, enter your user password and click "Always Allow".

## Q4: Which version should I install? {#version-selection}

Install the latest version directly from the official Adobe CC cloud, or go to the official website to search for an offline installer.

## Q5: Should I install Adobe Genius Service? {#adobe-genius-service}

<img src="/images/application-interface/install-adobe-ags-noshadow.png" width="500" />

Check "Don't show this dialog again"

Select "Decline"

## Q6: "This non-genuine app" popup {#non-genius-app}

<img src="/images/application-interface/adobe-this-is-non-genuine-app-noshadow.png" width="500" />

This issue has been fixed long ago. If you still encounter it, it means you are not using the latest version.

## Q7: Apple cannot verify that "InstallAdobe.command" does not contain malware that may harm your Mac or compromise your privacy.

![image_8](/images/image_8.png)

This is caused by scripts downloaded from the internet.

Solution:
1. Click Done
2. Open Settings
3. Go to Security & Privacy
4. ![image_9](/images/image_9.png)
   Click "Open Anyway"
5. ![image_10](/images/image_10.png)
   The prompt says "Apple cannot verify that it does not contain malware that may harm your Mac or compromise your privacy. Do not open it unless you are certain it comes from a trusted source." Ignore it and click "Open Anyway"
6. ![image_11](/images/image_11.png)
   Enter your macOS password to authenticate.

## Q8: "Adobe After Effects 2025" is damaged and cannot be opened. | "xxx" is damaged and cannot be opened.

![image_14](/images/image_14.png)

As shown, this is caused by macOS system security checks.

Solution:
1. Click the Open button.
2. ![image_15](/images/image_15.png)
   That's it.
3. If there is no response, refer to "Q7" and select "Open Anyway" in Settings.

## Q9: "Adobe Illustrator 2025" is damaged and cannot be opened. / "xxxx" is damaged and cannot be opened.

![image_16](/images/image_16.png)

Astute readers will notice this is different from Q8 — there is no Open button.

Solution:
1. Click the OK button.
2. ![image_17](/images/image_17.png)
   First open Settings, go to Security & Privacy.

   Find Security, click the "Open Anyway" button.
3. ![image_18](/images/image_18.png)
   Enter your administrator password to authenticate.
4. ![image_19](/images/image_19.png)
   The familiar screen appears. Click "Open" to run normally.
5. ![image_20](/images/image_20.png)
   Successfully opened

# Installing Adobe Installer Offline Product Deployment

![image_12](/images/image_12.png)

Since sudo privileges are required, enter your Mac password when prompted with "Password:".

1. Select the product you want to install (this depends on which versions are included in the offline installer you downloaded)
2. Select the language you need (this depends on the packager's download behavior; qiuchenly recommends downloading all language packs at once)
3. Start installation
   ![image_13](/images/image_13.png)
   Note: The following content indicates Adobe is checking the app file integrity, which is normal and can be ignored:
   ```bash
   Scan completed and software is allowed by system policy.
   Progress: 109695216/109695216
   Scan completed and software is allowed by system policy.
   ```
