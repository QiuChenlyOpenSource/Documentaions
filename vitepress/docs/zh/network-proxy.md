---
title: 网络代理配置指南（QiuChenNetProxy）
description: QiuChenNetProxy 节点导入、证书验证、策略组、DNS、订阅与规则的图文配置指南
outline: [2, 3]
---

# NetProxy GUI 配置指南

打开QiuChenNetProxy，左侧进入节点，点击添加节点或编辑节点。

## 1. 开始：先配置节点，再选择出口

从左侧进入「节点」。手动节点、订阅节点按来源展示，搜索框可查名称、服务器、协议和来源。

![节点页面](/images/network-proxy/gui/01-nodes.png)

创建单个节点使用工具栏「添加节点」。已有手动节点可直接右键选择编辑节点，也可选中后从顶部节点操作编辑。订阅节点由其来源管理，不能把订阅节点当作手动节点随意编辑或删除。

配置节点不会自动把所有流量切到它。保存后需要在「策略组」选择成员，再决定全局出口和选路模式；规则模式还要检查目标域名命中的策略。

## 2. 导入分享链接

在新增或编辑表单顶部，将完整分享链接粘贴到「粘贴节点链接」，点击「解析并填入配置」。

![分享链接入口](/images/network-proxy/gui/02-share-link.png)

例如：

```text
trojan://authentication-password@proxy.example.com:443?sni=proxy.example.com&pcs=aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&type=tcp#示例节点
```

其中：

- `authentication-password` 填入「认证 → 密码」。
- `proxy.example.com:443` 填入「服务器」和「端口」。
- `sni` 填入「传输 → SNI」。
- `pcs` 填入「证书指纹（pcs）」；验证方式自动选择「固定证书 SHA256」。
- `#` 后名称作为新建节点名。编辑已有节点时保留其原名称，避免导入后无意改变组引用。

核对服务器、端口、密码、SNI 和证书指纹，确认后点击「添加」或「保存」。字段提示错误时，按提示修改。

上例的 `a` 指纹只是格式示范。真实节点使用分享者提供的完整原始链接，不能照抄示例凭据。

## 3. 手动填写：每个控件对应什么

| GUI 控件 | 原生 JSON 字段 | 填法 |
| --- | --- | --- |
| 名称 | `name` | 唯一且非空的节点名，组成员按它引用 |
| 协议 | `type` | 选择服务端实际协议，不由名字猜测 |
| 服务器 | `host` | 服务地址或 IP，不填协议前缀和路径 |
| 端口 | `port` | 1–65535 的整数，必须是客户端连接的端口 |
| 用户名 | `username` | HTTP、SOCKS5、SSH 服务要求的用户名 |
| 密码或 PSK | `password` | 节点认证凭据；**不填 pcs** |
| UUID | `uuid` | VLESS、VMess、TUIC 的用户身份 |
| 加密方法 | `method` | SS 或 ShadowTLS 内层对应的算法 |
| 承载 | `network` | 服务端实际承载，如 TCP、WS、HTTPUpgrade、H2、gRPC、XHTTP、mKCP |
| TLS | `tls` | 普通承载是否 TLS；Trojan、AnyTLS、Hy2、TUIC 自身的 TLS 路径仍按协议执行 |
| SNI | `sni` | 服务端 TLS 身份，可能与连接 IP 不同 |
| ALPN | `alpn` | 按逗号分隔，例如 `h2,http/1.1`；留空使用承载默认值 |
| 路径 | `path` | WS/HTTPUpgrade/H2/XHTTP 的路径；gRPC 填服务名 |
| HTTP Host | `wsHost` | 对端要求的 HTTP Host，供 WS/HTTPUpgrade 等 HTTP 承载使用 |
| 附加 HTTP 头 | `wsHeaders` | 按 `名称: 值` 填写，以逗号分隔；可设置 User-Agent 等附加头 |
| UDP 中继 | `udp` | 开启协议支持的 UDP 数据面 |
| 出口网口 | `interface` | 一般留空；需要固定出口时选择真实网口，指定接口不可用时连接失败 |
| Mux 协议、Mux 最大流 | `muxProtocol`、`muxMaxStreams` | 支持此扩展的协议使用，不能代替 Snell 的顺序连接复用 |

选择哪个协议，认证与专用字段就按该协议显示。完整可复制例子见 [按协议完整 JSON 示例](./network-proxy-configuration#按协议完整-json-示例)。

ALPN 在 JSON 中填写字符串数组，例如 `["h2", "http/1.1"]`。HTTPUpgrade 使用 `http/1.1`，H2/gRPC 使用 `h2`，HTTP3 使用 `h3`，这些承载自动匹配对应值；普通 TLS 按填写的列表协商。分享链接中的 `alpn=h2%2Chttp%2F1.1` 对应 `["h2", "http/1.1"]`。

### 本机节点

其他软件在本机提供代理时，「服务器」填 `127.0.0.1`，「端口」填该软件的监听端口，「出口网口」留空。不要把本机地址绑定到 Wi-Fi 或有线网口，也不要填写 QiuChenNetProxy 自己的代理监听端口。

例如另一款软件提供 SOCKS5 服务 `127.0.0.1:1080`：

```json
{
  "name": "本机 SOCKS5",
  "type": "socks5",
  "host": "127.0.0.1",
  "port": 1080
}
```

保存后，在策略组中选择「本机 SOCKS5」。全局默认出口保持原设置即可。HTTP 代理访问本机 Web 服务时，同样使用服务的真实地址和端口；目标命中 DIRECT 后会按本机路由访问。

### 常见协议的必填项

| 协议 | 重点 |
| --- | --- |
| Trojan、AnyTLS | 地址、端口、认证密码、SNI、证书验证方式 |
| SS | 地址、端口、加密方法、密码或 SS2022 Base64 密钥 |
| Snell | 地址、端口、PSK、版本、适用模式；复用和 UDP 按服务端能力选择 |
| VLESS、VMess | 地址、端口、UUID、承载、TLS；VLESS 的 Reality 与 Vision 填专用项 |
| Hy2 | 地址、端口、认证密码、SNI、证书验证；混淆与跳跃另按服务端参数 |
| TUIC | UUID 与密码都要正确，另核对拥塞控制和 UDP 模式 |
| HTTP、SOCKS5 | 地址、端口；有认证再填用户名和密码 |
| SSH | 地址、端口、用户名；密码或私钥认证；私钥口令与登录密码分开 |
| WireGuard | 本地私钥、对端公钥、本地隧道地址，可选预共享密钥 |
| ShadowTLS | 外层密码与服务名、内层算法和内层密码分别配置 |
| DIRECT | 不填代理服务器与认证；可指定出口网口 |

VLESS 的 `Security`、`Flow`、Reality 公钥、Short ID、握手指纹与 Encryption 按服务端要求填写；SSH 使用私钥时填写私钥路径与口令。WireGuard 和 Snell 的字段在各自专用配置区填写。

`echConfig`、Hy2 的 `obfsPassword/portHopping`、TUIC 的 `congestionControl/udpRelayMode`、VMess 的 `vmessSecurity`、ShadowTLS 的 `shadowTlsPassword` 等没有单独输入框的高级字段，请通过原生 JSON 或支持它们的来源导入。各字段的填法见 [配置文件指南](./network-proxy-configuration)。

### HTTPUpgrade 与 VLESS 高级配置

在「承载」选择 HTTPUpgrade，对应 `network="httpupgrade"`。路径填写 `path`，HTTP Host 填写 `wsHost`，附加 HTTP 头填写 `wsHeaders`，ALPN 填写 `http/1.1` 或留空；TLS 与 SNI 分别使用 `tls`、`sni`。

![HTTPUpgrade 承载与 HTTP 字段](/images/network-proxy/gui/15-httpupgrade-transport.png)

未填写 User-Agent 时使用 `Mozilla/5.0`，可通过 `wsHeaders` 中的 `User-Agent: 值` 修改。HTTP Host 使用专用输入框；附加头中不要填写 `Host`、`Connection`、`Upgrade`、`Sec-WebSocket-Key`、`Sec-WebSocket-Version`。头名称须为合法 HTTP token，头名称和值不得包含 CRLF。

VLESS 的握手指纹填写 `fingerprint`，例如 `chrome`。HTTPUpgrade 使用 TCP 上的 HTTP/1.1 升级，ALPN 固定为 `http/1.1`。`path` 按服务端路由填写，可包含非根路径和查询参数；服务端按实际路由配置路径。

![VLESS 高级配置](/images/network-proxy/gui/16-vless-advanced.png)

Vision 节点的 `Flow` 选择 `xtls-rprx-vision`，`Encryption` 填服务端提供的完整 `encryption` 参数。

密码填写节点认证凭据，`pcs` 填写服务端叶证书指纹。证书验证使用 `tlsVerify=system/pinned/skip`；固定模式的指纹填写 `pinnedPeerCertSha256`。

公开完整节点示例：

```json
{
  "name": "VLESS-HTTPUpgrade示例",
  "type": "vless",
  "host": "proxy.example.com",
  "port": 443,
  "uuid": "b831381d-6324-4d53-ad4f-8cda48b30811",
  "tls": true,
  "tlsVerify": "system",
  "sni": "edge.example.com",
  "network": "httpupgrade",
  "path": "/transport/edge?source=configuration-guide",
  "wsHost": "edge.example.com",
  "wsHeaders": "User-Agent: guide-client,X-Client: configuration-guide",
  "alpn": ["http/1.1"],
  "fingerprint": "chrome",
  "flow": "xtls-rprx-vision",
  "encryption": "mlkem768x25519plus.native.0rtt.1iegZ5U6hTQy_D4Wscuw5FthVzSw7ll5hmMvog2wLDo"
}
```

地址、UUID 和 Encryption 均为演示值，实际按服务端提供的完整参数填写，不能用于公网节点身份。

## 4. 证书验证：三种方式怎么选

普通 TLS 节点向下滚动到「证书验证」。选择实际服务端的身份验证方式：

| GUI 选择 | `tlsVerify` | 验证方式 |
| --- | --- | --- |
| 系统证书与主机名 | `system` | 验证系统信任链和服务身份；自签证书通常失败 |
| 固定证书 SHA256 | `pinned` | 实际叶证书 DER 的 SHA256 必须匹配至少一个配置指纹 |
| 跳过证书验证 | `skip` | 使用 TLS，但不核对服务端证书身份 |

新建节点默认系统验证。导入 `pcs` 后自动选择固定模式。已有节点未设置验证方式时使用跳过验证，编辑时按服务端证书选择所需模式。

### 4.1 系统证书与主机名

公开 CA 证书且 SNI 正确时选择此项：

![系统证书验证](/images/network-proxy/gui/02-system-certificate.png)

对应节点片段：

```json
{
  "tlsVerify": "system",
  "sni": "proxy.example.com"
}
```

`host` 是拨号地址，`sni` 是证书身份。服务器可以填写 IP、SNI 填证书上的域名。不要为解决普通自签证书错误而把随机域名填进 SNI。

### 4.2 固定证书 SHA256 与 pcs

分享链接提供 `pcs` 或管理员提供可信的叶证书指纹时，选择「固定证书 SHA256」并填写完整 64 位十六进制：

![固定证书输入](/images/network-proxy/gui/03-pinned-certificate.png)

对应节点片段：

```json
{
  "tlsVerify": "pinned",
  "pinnedPeerCertSha256": [
    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
  ]
}
```

多证书轮换时每行一个指纹，保存为字符串数组。指纹匹配的是完整叶证书 DER，不是 ClientHello 的 `fingerprint`、Reality 公钥、SPKI 公钥哈希或 MITM 的 CA。

固定模式可用于与该指纹一致的自签证书。指纹不匹配时测试会失败，请核对分享者提供的完整指纹。

### 4.3 跳过证书验证

选择后会显示「此模式不核对服务端证书身份」，同时清除不生效的固定指纹列表。

![显式跳过证书验证](/images/network-proxy/gui/05-skip-certificate.png)

对应节点片段：

```json
{
  "tlsVerify": "skip"
}
```

服务端提供可信 `pcs` 时，选择固定证书 SHA256 并填写该指纹。选择跳过验证时不填写固定指纹。

### 4.4 输入无效时如何修正

空固定列表、长度不足、非十六进制、字段类型错误或模式冲突会阻止保存，并显示具体原因：

![非法指纹提示](/images/network-proxy/gui/06-invalid-certificate.png)

修正为完整值后才能添加或保存。已填好的密码无需改动，因为密码和证书固定是两个独立字段。

Reality 使用协议公钥认证，Snell、ShadowTLS 使用各自协议设置；这些不按普通 TLS 的证书固定处理。切换协议或承载时，表单会清理不适用的证书设置。

## 5. 测试与保存

点击「测试」检查当前填写的节点；确认后点击「添加」或「保存」。保存成功后，编辑器关闭并刷新节点列表。

手动配置的典型顺序：

1. 输入或解析节点。
2. 核对地址、认证、SNI、ALPN、承载和验证方式。
3. 点击「测试」；失败时按错误提示检查配置。
4. 添加或保存。
5. 重新编辑节点，核对模式和指纹仍存在。
6. 在策略组选择它，并确认当前出口与规则。

![保存后节点页面](/images/network-proxy/gui/08-saved-node.png)

测试地址由配置中的 `test.proxyUrl` 指定。需要更换测试目标时，在配置文件中修改此项。

如果连接后立即关闭或没有目标响应，核对 `password/uuid`、协议类型和服务端账号。

## 6. 策略组与出口选择

左侧「策略组」展示组类型、当前节点、成员、测试周期、容差和手动固定状态。

![策略组](/images/network-proxy/gui/09-policies.png)

「手动选择」组选成员即选择出口；自动组选择成员后会固定该选择，测速继续，但不自动改选，直到清除手动固定。查看「当前出口」标志确认使用哪个组。

菜单栏中，Proxy 右侧显示直接选中的策略组名称。展开 Proxy 后点击组名即可选择，二级成员仅点击选择，不含三级展开。

下图中，Proxy 选择了 `sub0`，显示的 `77 ms` 来自该组的当前成员。

![浅色菜单中的策略组选择](/images/network-proxy/gui/17-strategy-menu-light.png)

![深色菜单中的策略组选择](/images/network-proxy/gui/18-strategy-menu-dark.png)

对应完整片段：

```json
{
  "mode": "global",
  "proxy": "主要出口",
  "proxyGroups": [
    {
      "name": "主要出口",
      "type": "select",
      "proxies": ["示例节点"],
      "selected": "示例节点"
    }
  ]
}
```

此片段要合并到包含名为 `示例节点` 的 `proxies` 数组的配置中。`proxy` 填组名，`selected` 填成员名，不能互换。

自动测速组使用 `type=url-test`，备用组 `fallback`，分担组 `load-balance`；来源动态展开使用订阅或来源集合。详细参数与例子见配置文件指南。

## 7. DNS：上游与 Fake-IP

「DNS」查看当前上游数、协议、单次超时、Fake-IP 地址池和系统兜底状态；下方是实际域名访问记录。配置上游时核对协议与身份字段：

![DNS 页面](/images/network-proxy/gui/10-dns.png)

```json
{
  "dns": {
    "upstream": [
      {
        "proto": "doh",
        "url": "https://1.1.1.1/dns-query",
        "insecure": false
      },
      {
        "proto": "dot",
        "host": "223.5.5.5",
        "port": 853,
        "sni": "dns.alidns.com",
        "insecure": false
      }
    ],
    "timeoutMs": 3000,
    "fakeIpRange": "198.18.0.0/15",
    "fakeIp6Prefix": "fd00::",
    "fallbackSystem": true
  }
}
```

DNS `insecure` 只属于 DNS 上游，与节点的 `tlsVerify` 分开。DoH 填完整 URL；DoT/DoQ 填真实地址、端口和 SNI。Fake-IP 用于业务域名映射，不能把 Fake-IP 结果手抄到公网节点服务器地址。

## 8. 订阅与来源集合

「订阅」区分远程 URL 和本地文件，可设置更新周期、排除规则、启用状态并查看节点。来源关闭保留配置与缓存；删除来源会影响引用它的集合与组。

![订阅页面](/images/network-proxy/gui/11-subscriptions.png)

```json
{
  "subscriptions": [
    {
      "name": "主要订阅",
      "url": "https://subscription.example.com/list",
      "updateInterval": 3600,
      "enabled": true,
      "isLocal": false,
      "excludeFilters": ["剩余流量", "到期时间"]
    }
  ],
  "subscriptionCollections": [
    {
      "name": "全部来源",
      "includeAllSubscriptions": true,
      "subscriptions": []
    }
  ]
}
```

排除规则是正则，不是密码或订阅令牌输入。更新时间单位秒；本地来源的 URL 字段保存文件绝对路径。集合引用的是来源，不是把当下节点名字写死。

## 9. 规则：顺序决定命中

「规则」展示顺序、类型、匹配内容和策略。先检查目标命中哪条，再调整出口，避免仅切节点却被更靠前的直连规则覆盖。

![规则页面](/images/network-proxy/gui/12-rules.png)

```json
{
  "rules": [
    {
      "type": "DOMAIN-SUFFIX",
      "pattern": "example.cn",
      "policy": "DIRECT"
    },
    {
      "type": "FINAL",
      "policy": "主要出口"
    }
  ]
}
```

FINAL 放最后。规则的 `policy` 是 DIRECT、REJECT、PROXY、节点或策略组名称；不是服务器地址。AND 条件、规则集、网口和能力约束等见配置指南，不使用旧的位置数组。

## 10. 设置、入站与端口转发

「设置」显示连接状态、Helper 安装状态、数据目录与配置文件路径，也提供配置重载和本地工具安装入口。

![设置页面](/images/network-proxy/gui/13-settings.png)

对外 HTTP/SOCKS5 入站与出站节点分开：

```json
{
  "inboundProxy": {
    "http": {
      "enable": true,
      "listen": "127.0.0.1",
      "port": 7890,
      "user": "local-user",
      "pass": "local-inbound-password"
    },
    "socks5": {
      "enable": true,
      "listen": "127.0.0.1",
      "port": 7891
    }
  }
}
```

这里 user/pass 是应用连接本机代理时的认证，不是远端节点密码。127.0.0.1 仅本机；0.0.0.0 对外接口监听。配置入口按当前 GUI 的代理/入站设置页面使用，不能把入站端口填到节点远端服务器。

「端口转发」每条规则显示监听端口、目标、协议、出站和启停：

![端口转发](/images/network-proxy/gui/14-port-forwards.png)

```json
{
  "portForwards": [
    {
      "proto": "tcp",
      "listenPort": 2222,
      "targetHost": "ssh.example.com",
      "targetPort": 22,
      "via": "主要出口",
      "enabled": true
    }
  ]
}
```

监听与目标端口是两回事。`via` 选 DIRECT 或已有节点/组。启用后会真正监听端口，先确认该端口没有其他服务占用。

## 11. 保存后的检查清单

| 检查项 | 应看到的结果 |
| --- | --- |
| 原始分享解析 | 密码、SNI、pcs 分别进入对应位置 |
| 固定证书模式 | 下拉显示固定 SHA256，列表有合法值 |
| 再次编辑 | 名称、认证、承载和证书设置与保存前一致 |
| 连接测试 | 显示测试结果；失败时按提示检查 |
| 策略组 | 当前成员是所需节点 |
| 规则模式 | 目标命中预期 policy |
| 系统代理或 TUN | 实际使用方式与启用状态一致 |
| 实际使用 | 网页和所需应用经所选出口正常访问 |
