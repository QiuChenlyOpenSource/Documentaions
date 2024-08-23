# Adobe

<link-summary>要注入 Adobe 系列将多 1 步</link-summary>

## 常见问题 {#faqs}

### Adobe PS CC 2024 / Lightroom CC 启动时崩溃 {#ps-lr-crash-on-startup}

如果你的 Lrc 启动后立即退出，那么大概率是你的账号没有试用过。

此补丁通过删除试用期状态来运行，确保即使试用期过后也不会收到任何弹窗。
但是，激活试用是补丁有效运行的必要条件。

[//]: # (![Lrc Trial.png]&#40;LrcTrial.png&#41;)

### Lightroom 提示脱机时不可搜索 {#cannot-search-when-offline}

初步发现是 Surge 之类的代理工具阻止了请求，如果出现这个情况重启代理即可。

[//]: # (![surge.png]&#40;surge.png&#41;)

### 提示“想要访问你的钥匙串中的密钥”? {#request-keychain-access}

![request-keychain-access-noshadow.png](request-keychain-access-noshadow.png){width="400"}

这是应用程序自己的数据，由于重新签名后会导致签名信息不匹配，你输入用户密码后点击始终允许即可。

## 我该安装哪个版本？ {#version-selection}

从官方 Adobe CC 云中直接在线安装最新版本，或前往官网搜索离线安装包，确保你的账号试用过产品。

## 是否安装 Adobe Genius Service？ {#adobe-genius-service}

![install-adobe-ags-noshadow.png](install-adobe-ags-noshadow.png){width="500"}

相信你知道该怎么选

<procedure title="我不会 🤡" id="idiot" collapsible="true">
    <step>勾选 “不再显示此对话框”</step>
    <step>选择 “拒绝”</step>
</procedure>

## “This non-genius app” 弹窗 {#non-genius-app}

![adobe-this-is-non-genuine-app-noshadow.png](adobe-this-is-non-genuine-app-noshadow.png){width="500"}

在代理工具中手动阻止所有 `*.adobe.io` 域。添加规则 `DOMAIN-SUFFIX`，值为 `adobe.io`。

但是，如果你使用 Photoshop，请确保允许 `photo.adobe.io`，否则应用程序在打开时会崩溃。

如果你使用 Lr 或 Lrc，还应将 `lcs-cops.adobe.io` 添加到允许域列表中。

| Type          | Payload             | Policy              | Remark            |
|---------------|---------------------|---------------------|-------------------|
| DOMAIN        | `photos.adobe.io`   | `DIRECT` or `Proxy` | 若不放行 PS 将崩溃       |
| DOMAIN        | `lcs-cops.adobe.io` | `DIRECT` or `Proxy` | 若不放行 Lr 或 Lrc 将崩溃 |
| DOMAIN-SUFFIX | `adobe.io`          | `REJECT`            |                   |

[//]: # (![Adobe屏蔽]&#40;../images/image-9.png&#41;)
