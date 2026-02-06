---
title: App 想要访问钥匙串中的密钥
description: 解决 App 访问钥匙串权限问题
---

# App 想要访问钥匙串中的密钥

<img src="/images/system-interface/request-keychain-access-noshadow.png" width="400" />

这是由于重新签名后身份不匹配，导致应用程序的钥匙串访问被阻止。

这是因为 macOS 使用代码签名来验证应用程序的完整性和来源，并使用此信息来决定是否允许应用访问钥匙串中的数据。

输入开机密码并点击始终允许即可，放心使用。
