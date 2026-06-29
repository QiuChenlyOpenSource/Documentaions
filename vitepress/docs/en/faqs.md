---
title: Frequently Asked Questions
description: Answers to common issues encountered while using CoreInject
---

# Frequently Asked Questions

[What should I do when opening an App prompts "File is Damaged"?](./faqs/file-is-damaged)

[Is it normal when an App wants to access the keychain?](./faqs/request-keychain-access)

## Injection Warning: "Malware That May Harm Your Mac or Leak Privacy"

![image_4](/images/image_4.png)

Open Settings - Privacy & Security - Security, and click "Open Anyway".

![Screenshot 2025-08-29 17.47.43](/images/截屏2025-08-29%2017.47.43.png)

## Helper File Signature Failed / xxx Signature Failed

![image_5](/images/image_5.png)

You should use the original app file for injection. If an error occurs, first ensure you are operating on the official original version of the App. If you have previously modified the app or an injection error has modified the app, subsequent injections will encounter problems.

In this case, this user encountered the error because they attempted to inject an already-injected App again.

## Permission Issue Detected — Full Disk Access Required

![image_6](/images/image_6.png)
![image_7](/images/image_7.png)

In this case, disk access permission has been granted, but on some Macs you also need to grant InjectLib and Terminal "App Management" permission to modify applications.

## Permission Issue Detected

![img](/images/img.png)

1. Some observant friends may notice that a permission dialog automatically pops up, and the macOS system has automatically blocked the program modification in the top-right corner.
2. We need to add two programs: Terminal and the InjectLib binary program
3. ![img](/images/img2.png)
4. The InjectLib program can be found in the extracted repository archive
5. After adding disk permissions, you also need to allow Terminal and InjectLib's App Management permission:
6. Open Settings, find Privacy & Security, find App Management, enable the Terminal option, and manually add the InjectLib program.
7. ![img](/images/img3.png)
8. Re-open the injection program. It should now work normally. If it doesn't, restarting macOS usually solves the problem as well.
9. If you still have issues, don't ask me. It's highly likely that you messed up the operation yourself. If you can't even figure out your own Mac, what makes you think you can figure out cracked apps from others?

Also, this kind of permission issue is blocked by macOS — stop acting like it's the developer's fault.
