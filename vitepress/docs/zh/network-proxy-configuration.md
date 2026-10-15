---
title: 代理节点与完整配置参考
description: QiuChenNetProxy 节点协议、TLS 验证、完整 JSON 配置与本地 Docker 场景说明
outline: [2, 3]
---

# NetProxy 节点 JSON 与 Docker 配置教程

GUI 操作见 [GUI 配置指南](./network-proxy)。本文中的 `.example`、`.test`、密码、UUID 和证书指纹均为示例，使用时替换为服务端提供的值。JSON 不支持注释或尾随逗号。

Docker 启动文件在 **`test/netproxy/compose/`**。每个场景都有独立的 `compose.yaml`、匹配的服务端配置、`node.json`、完整的 `client-config.json` 与 README。根目录 README 列出场景目录及端口。

## 直接启动一个协议

以Snell v6为例，从仓库根执行：

```console
python3 test/netproxy/compose/prepare.py --only snell-v6-default
docker compose -f test/netproxy/compose/snell-v6-default/compose.yaml up -d
docker compose -f test/netproxy/compose/snell-v6-default/compose.yaml logs -f proxy
```

客户端节点直接使用 **`test/netproxy/compose/snell-v6-default/node.json`**。它和服务端PSK、版本、模式、宿主端口已经配好，保留文件里的端口。节点里的`host=127.0.0.1`表示Docker与客户端运行在同一台机器。

停止：

```console
docker compose -f test/netproxy/compose/snell-v6-default/compose.yaml down
```

其他协议只把上述目录名换成`hy2`、`tuic`、`vless-ws`、`vmess-h2`等。静态端口互不冲突，可同时启动多个场景。`compose.yaml`使用标准YAML，其中的`command`就是服务实际启动参数；代理节点和完整客户端配置使用JSON。

### 三种文件不要混淆

| 文件 | 给谁使用 | 内容 |
|---|---|---|
| `server.json`或`snell.conf`、`sshd_config` | Docker服务端 | 服务监听地址、认证、传输与出站设置 |
| `node.json` | Hayaku客户端单个节点 | 连接服务的宿主地址/端口、密码、UUID、模式和传输字段 |
| `client-config.json` | Hayaku客户端完整配置 | `proxies`数组、明确的出口策略组，以及本地HTTP17900/SOCKS17901入站 |

服务端容器监听通常是`18443`；客户端连接的是Compose发布后的`181xx`宿主端口。不要把容器内端口误写成节点端口。

这些是公开测试凭据，默认仅绑定宿主`127.0.0.1`。迁到另一台Docker主机时修改节点`host`，并将Compose的发布地址从`127.0.0.1`改为可达地址；如果改密码或UUID，服务端与节点两边同时改。

## 单个节点与完整配置怎么写

单个VLESS WebSocket节点示例，实际端口请复制对应目录的`node.json`：

```json
{
  "name": "本地VLESS WS测试",
  "type": "vless",
  "host": "127.0.0.1",
  "port": 18117,
  "uuid": "b831381d-6324-4d53-ad4f-8cda48b30811",
  "network": "ws",
  "tls": true,
  "sni": "proxy.test",
  "wsHost": "proxy.test",
  "path": "/proxy"
}
```

完整配置的形状如下。顶层`proxy`指向**策略组名称**，该组的`selected`才是节点名称：

```json
{
  "mode": "global",
  "proxy": "测试出口",
  "proxies": [
    {
      "name": "本地VLESS WS测试",
      "type": "vless",
      "host": "127.0.0.1",
      "port": 18117,
      "uuid": "b831381d-6324-4d53-ad4f-8cda48b30811",
      "network": "ws",
      "tls": true,
      "sni": "proxy.test",
      "wsHost": "proxy.test",
      "path": "/proxy"
    }
  ],
  "proxyGroups": [
    {
      "name": "测试出口",
      "type": "select",
      "proxies": ["本地VLESS WS测试"],
      "selected": "本地VLESS WS测试"
    }
  ],
  "inboundProxy": {
    "http": {"enable": true, "listen": "127.0.0.1", "port": 17900},
    "socks5": {"enable": true, "listen": "127.0.0.1", "port": 17901}
  }
}
```

目录内的完整配置已经写好这三个关系，不需要自己拼。对新独立客户端实例，用命令行`-c <client-config.json>`选择配置；若复用现有GUI/daemon，把对应单节点加入手动节点并选择它，避免直接覆盖正在运行的整份配置。

通过 `node-add` 添加节点时，请求体写为 `{"node":"节点JSON字符串"}`；`node` 使用 JSON 字符串。

## 共用节点字段

| 字段 | 类型 | 含义 |
|---|---|---|
| `name` | 字符串 | 节点名称，不能为空；策略组引用它 |
| `type` | 字符串 | 下表的节点类型 |
| `host` | 字符串 | 服务端地址；单机Docker示例为127.0.0.1 |
| `port` | 数字 | 宿主发布端口，写数字而非带引号字符串 |
| `username`、`password` | 字符串 | HTTP/SOCKS/SSH等认证；SS/Snell/Trojan等密码 |
| `uuid` | 字符串 | VLESS、VMess、TUIC用户身份 |
| `udp` | 布尔 | 是否启用该协议支持的 UDP 中继 |
| `tls` | 布尔 | TCP承载是否使用TLS；HY2/TUIC自身使用QUIC TLS |
| `sni` | 字符串 | TLS或Reality的服务名，需匹配服务端设置 |
| `alpn` | 字符串数组 | 例如 `["h2", "http/1.1"]`；省略或空数组使用承载默认值 |
| `interface` | 字符串 | 可选出口网卡；留空按目标路由选择，指定后必须使用该接口 |

GUI 的 ALPN 输入按逗号分隔，例如 `h2,http/1.1`，留空使用承载默认值。分享 URI 中的 `alpn=h2%2Chttp%2F1.1` 对应 JSON 数组 `["h2", "http/1.1"]`。HTTPUpgrade 使用 `http/1.1`，H2/gRPC 使用 `h2`，HTTP3 使用 `h3`，这些承载自动匹配对应值；普通 TLS 按填写的列表协商。

### 本机节点和出口网卡怎么填

本机服务的地址填 `127.0.0.1` 或 `::1`，出口网卡留空。客户端会使用回环路由；全局选择的 Wi-Fi 或有线默认出口不会覆盖本机访问。访问其他设备时填写其实际地址，同样可以先将出口网卡留空。

下面的本机 SOCKS5 节点可直接加入 `proxies`：

```json
{
  "name": "本机 SOCKS5",
  "type": "socks5",
  "host": "127.0.0.1",
  "port": 1080
}
```

需要固定出口时，填写本机真实存在且已启用的接口，例如：

```json
{
  "name": "指定出口的 Trojan",
  "type": "trojan",
  "host": "proxy.example.com",
  "port": 443,
  "password": "服务端提供的密码",
  "tls": true,
  "sni": "proxy.example.com",
  "tlsVerify": "system",
  "interface": "en0"
}
```

接口名不存在、未启用、与目标冲突时连接会失败。回环目标不要填写 `en0`；需要显式指定回环接口时，macOS 填 `lo0`，Linux 填 `lo`。本机节点端口也不能指向客户端自己正在使用的代理入口。

### Docker 文件位置

测试证书位于 `build/test/netproxy/compose/certs/`，容器运行目录、临时文件与缓存位于 `build/test/netproxy/compose/runtime/<场景>/<服务>/`。Snell 官方工具位于 `Toolchain/snell-server/<版本>/`；运行 `prepare.py` 会校验并复用已有版本。

测试服务的 YAML、节点 JSON 和服务端配置保留在 `test/netproxy/compose/<场景>/`。修改节点密码、UUID、协议版本或传输路径时，服务端对应字段也要一起修改。

## 14种节点类型的参数对应

| 正式`type` | 需要关注的字段 | 配套目录 |
|---|---|---|
| `direct` | 直连，不填代理地址/凭据 | `direct` |
| `http` | `host/port/username/password` | `http` |
| `socks5` | `host/port`，认证时加`username/password`；TLS版本加`tls/sni` | `socks5`、`socks5-auth`、`socks5-tls` |
| `ssh` | `username/password`；公钥方式用`sshKeyPath`或`sshKeyPem`，加密私钥可带`sshPassphrase` | `ssh`是密码登录与TCP转发 |
| `ss` | `method/password`；插件承载字段见后表 | `ss-*`、`ss2022-*` |
| `snell` | `version/password/snellMode/snellReuse/udp` | `snell-v5-*`、`snell-v6-*` |
| `trojan` | `password/tls/sni` | `trojan` |
| `vless` | `uuid`；传输、TLS、Vision、Reality或Encryption见后表 | `vless-*` |
| `vmess` | `uuid/vmessSecurity`，传输与TLS字段 | `vmess-*` |
| `anytls` | `password/tls/sni` | `anytls` |
| `hy2` | `password/sni/udp`，Salamander另有`obfsPassword` | `hy2`、`hy2-salamander` |
| `tuic` | `uuid/password/sni/udp/congestionControl/udpRelayMode` | `tuic` |
| `shadowtls` | 外层`password/sni/shadowTlsVersion`，内层`method/shadowTlsPassword` | `shadowtls-*` |
| `wireguard` | `privateKey/peerPublicKey/localAddress`，可带`presharedKey` | `wireguard` |

## 传输／算法扩展字段

| 场景 | 客户端字段 | 需要与服务端对齐的值 |
|---|---|---|
| SS传统AEAD | `method` | `aes-128-gcm`、`aes-256-gcm`、`chacha20-ietf-poly1305` |
| SS2022 | `method/password` | `2022-blake3-aes-128-gcm`密钥16字节Base64；AES256和ChaCha为32字节Base64 |
| SS2022 EIH | `password` | `服务端身份密钥:已登记用户密钥`；该用户也必须出现在服务端`users` |
| SS WebSocket插件 | `network="ws"`、`path`、`wsHost` | v2ray-plugin服务端`server;path=/ray;host=proxy.test;mux=0` |
| SS simple-obfs | `ssObfs="http"`或`"tls"`、`ssObfsHost` | 服务端obfs-server对应模式；这不是节点`tls`开关 |
| WebSocket | `network="ws"`、`path`、`wsHost`、`tls/sni` | URI路径、Host与TLS设置 |
| HTTP/2 | `network="h2"`、`path`、`sni` | 服务端httpSettings路径、Host、ALPN h2 |
| gRPC | `network="grpc"`、`path`、`sni` | `path`填服务名`proxy`，不是带斜杠的URL |
| HTTPUpgrade | `network="httpupgrade"`、`path`、`wsHost`、`wsHeaders`、`tls`、`alpn`、`fingerprint` | 服务端 Upgrade 路径与 Host；ALPN 使用 `http/1.1`，VLESS 填服务端要求的握手指纹 |
| mKCP | `network="mkcp"`、`headerType`、`seed` | 普通`headerType=none`；掩码示例为srtp及固定种子 |
| XHTTP | `network="xhttp"`、`path`、**`mode`** | `packet-up`、`stream-up`、`stream-one`；字段在节点对象中 |
| XHTTP HTTP/3 | 上述字段加`xhttpH3=true/tls/sni` | 服务端TLS ALPN h3、UDP发布；当前目录示例packet-up |
| VLESS Vision | `flow="xtls-rprx-vision"`、`tls/sni` | 服务端该用户也配置相同flow |
| VLESS Reality | `security="reality"`、`publicKey`、`shortId`、`sni`、`fingerprint` | 服务端私钥对应公钥、相同shortId及允许的serverName |
| VLESS Encryption | `encryption` | 对应服务端`decryption`配对串；目录含native/xorpub/random固定测试密钥 |
| VMess加密 | `vmessSecurity` | `aes-128-gcm`或`chacha20-poly1305`；示例为AES128 |
| HY2 Salamander | `obfsPassword` | 服务端salamander密码；不要写成`ssObfs` |
| TUIC拥塞 | `congestionControl` | 可选 cubic、new_reno、bbr，按服务端要求选择 |
| TUIC UDP承载 | `udpRelayMode` | `native`为DATAGRAM、`quic`为可靠单向流；目录默认native |
| Snell版本与模式 | `version=5/6`、`snellMode` | v6有default/unshaped/unsafe-raw；42项profile由PSK派生 |
| Snell复用／用户字段 | `snellReuse`、`snellUserKey` | 复用开关；userKey若填写需服务端同样设置 |
| Snell v5 HTTP混淆 | `snellObfs="http"`、`snellObfsHost`、`snellObfsUri` | 服务端obfs=http；v6不允许这些混淆配置 |
| Snell v5 native QUIC | `udp=true`、`snellUdpPort` | v5默认目录同端口另发布UDP；v6普通UDP使用TCP节点端口 |
| ShadowTLS v3 | `shadowTlsVersion=3`、`password`、`sni`、`method`、`shadowTlsPassword` | 外层用户密码与内层SS密钥分开；服务端detour到inner |
| WireGuard | `privateKey`、`peerPublicKey`、`localAddress` | 客户端私钥、服务端公钥和10.203.0.2；服务端peer登记客户端公钥 |

### HTTPUpgrade 与 VLESS 高级配置

HTTPUpgrade 使用 `network="httpupgrade"`，`path` 填 Upgrade 路径，`wsHost` 填 HTTP Host，`wsHeaders` 填附加 HTTP 头，`alpn` 填 `["http/1.1"]` 或留空数组；TLS 与 SNI 分别使用 `tls`、`sni`。在 GUI 中选择 HTTPUpgrade 后填写对应控件，操作示意见 [GUI 配置指南](./network-proxy#httpupgrade-与-vless-高级配置)。

`wsHeaders` 按 `名称: 值` 填写，以逗号分隔。未填写 User-Agent 时使用 `Mozilla/5.0`，可通过 `User-Agent: 值` 修改。HTTP Host 使用 `wsHost`；附加头中不要填写 `Host`、`Connection`、`Upgrade`、`Sec-WebSocket-Key`、`Sec-WebSocket-Version`。头名称须为合法 HTTP token，头名称和值不得包含 CRLF。

VLESS 的握手指纹填写 `fingerprint`，例如 `chrome`。HTTPUpgrade 使用 TCP 上的 HTTP/1.1 升级，ALPN 固定为 `http/1.1`。`path` 按服务端路由填写，可包含非根路径和查询参数；服务端按实际路由配置路径。

Vision 节点的 `flow` 填 `xtls-rprx-vision`，`encryption` 填服务端提供的完整参数。

`password` 填节点认证凭据，分享参数 `pcs` 填服务端叶证书指纹。证书验证使用 `tlsVerify=system/pinned/skip`；固定模式的指纹填写 `pinnedPeerCertSha256`。

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

**两个`mode`不同：**引擎顶层`mode="global"`是选路模式；XHTTP节点里的`mode="stream-one"`是承载模式。

节点 JSON 使用 `host/port/password` 等原生字段，证书验证填写 `tlsVerify` 与 `pinnedPeerCertSha256`。`server/server_port/pass/alterId/skip-cert-verify` 等外部格式字段不要直接写入节点 JSON。Docker 示例使用本地自签证书；已有节点省略验证模式时使用跳过验证，新建 GUI 节点默认 `system`。


## TLS 证书验证与 pcs：先分清三个字段

| 参数 | 填什么 | 用途 |
| --- | --- | --- |
| `password` | 服务端认证密码；分享链接 `trojan://密码@服务器` 中的密码 | Trojan 认证，不是证书指纹 |
| `fingerprint` | ClientHello 拟态名称，例如 `chrome`、`firefox`、`safari` | 与当前承载能力对应的握手拟态，不是证书身份 |
| 分享链接 `pcs` | 服务端**叶证书完整 DER** 的 SHA256，64 位十六进制 | 导入时转为原生 `pinnedPeerCertSha256` 数组并选 `pinned` |

`pcs` 既不填在密码里，也不填在 `fingerprint` 里。它与 VLESS Reality 的 `publicKey` 也不同。

### 系统信任：公开 CA 证书

服务端证书由系统信任 CA 签发、未过期，且匹配 `sni`。IP 地址要匹配证书 IP SAN；DNS 名要匹配 DNS SAN。`host` 是连接地址，可以是 IP；`sni` 是验证的服务身份。

```json
{
  "name": "Trojan 系统验证",
  "type": "trojan",
  "host": "proxy.example.com",
  "port": 443,
  "password": "replace-with-authentication-password",
  "tls": true,
  "network": "tcp",
  "sni": "proxy.example.com",
  "tlsVerify": "system"
}
```

### 固定证书：自签证书或指定身份

`pinned` 模式在 TLS 握手内比较实际叶证书 DER 的 SHA256。匹配才发业务认证和目标数据；不要求该叶证书同时获得系统 CA 信任。指纹必须来自你信任的服务端配置或管理员。下面重复 `a` 的值仅演示格式，不是真证书。

```json
{
  "name": "Trojan 固定证书",
  "type": "trojan",
  "host": "proxy.example.com",
  "port": 443,
  "password": "replace-with-authentication-password",
  "tls": true,
  "network": "tcp",
  "sni": "proxy.example.com",
  "tlsVerify": "pinned",
  "pinnedPeerCertSha256": [
    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
  ]
}
```

可以配置多个叶证书指纹进行轮换，匹配任意一个即可。每行一个对应 GUI 多行输入。JSON 必须使用字符串数组，不能用一个逗号拼接字符串。大小写输入会规范为小写，非法长度或非十六进制字符拒绝保存。

```json
{
  "tlsVerify": "pinned",
  "pinnedPeerCertSha256": [
    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"
  ]
}
```

上例是**合并到单个节点内的片段**，不是完整配置。只填写固定列表、省略 `tlsVerify` 时使用 `pinned`。固定模式必须有指纹；证书重新签发后要更新叶证书指纹。

从服务端本地证书文件计算：

```console
openssl x509 -in server-cert.pem -outform DER | openssl dgst -sha256
```

### 跳过证书验证

```json
{
  "name": "Trojan 显式跳过",
  "type": "trojan",
  "host": "proxy.example.com",
  "port": 443,
  "password": "replace-with-authentication-password",
  "sni": "proxy.example.com",
  "tlsVerify": "skip"
}
```

此模式保留 TLS 加密，不核对服务端证书身份。使用 `skip` 或 `system` 时，省略 `pinnedPeerCertSha256`；使用 `pinned` 时再填写证书指纹数组。

### 分享链接与原生配置的对应

```text
trojan://authentication-password@proxy.example.com:443?security=tls&sni=proxy.example.com&pcs=aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&type=tcp#示例节点
```

解析结果：

```json
{
  "name": "示例节点",
  "type": "trojan",
  "host": "proxy.example.com",
  "port": 443,
  "password": "authentication-password",
  "tls": true,
  "sni": "proxy.example.com",
  "tlsVerify": "pinned",
  "pinnedPeerCertSha256": [
    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
  ]
}
```

分享 `allowInsecure=1` 是显式跳过，`0` 是严格系统信任；与 `pcs` 冲突时拒绝。外部 Clash 的 `skip-cert-verify` 和 `certificate-fingerprint` 只在导入时转换，原生 JSON 不保留别名。未声明验证选项的旧分享保持存量语义，建议在 GUI 明确选择。

普通 TLS 身份配置适用于 Trojan、AnyTLS、TLS SOCKS5、VLESS/VMess 普通 TLS 承载、SS 的 TLS WebSocket 插件，以及 Hy2/TUIC。Reality 填写公钥与 shortId；ShadowTLS 和 Snell 使用各自的认证设置。

## 检查 Docker 节点连通性

服务端项目内提供`origin:8080`：

- GET `/`返回简单文本。
- GET `/blob`返回当前启动生成的随机50MiB。
- GET `/metadata`返回该正文长度和SHA256。
- POST `/upload`返回实际收到的SHA256与字节数。
- `origin:5300`为 UDP 回显。

宿主通过目录README给出的`281xx`端口可以直连目标，对照走代理与直连结果。多数代理协议在服务端解析目标，目标主机可写`origin`。DIRECT使用宿主目标端口；WireGuard由客户端解析目标，测试时使用目标容器IP：

```console
docker inspect --format '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' \
  "$(docker compose -f test/netproxy/compose/wireguard/compose.yaml ps -q origin)"
```

把输出的 IP 用于 `http://该IP:8080/`，经本地 HTTP 17900 或 SOCKS5 17901 入站请求。

Snell v6的42项参数、13类策略与108组合的字段含义、实际取值及组合清单另见[参数与策略说明](./network-proxy-snell-v6)和[完整CSV](/downloads/network-proxy/Snell_v6_108组合清单.csv)。

## 按协议完整 JSON 示例

下列节点对应各 Compose 目录，端口、凭据为公开示例。每个块都是单个 `proxies` 元素，不是整份 `config.json`；连接实际节点时替换服务器与身份参数。自签演示使用 `skip`，固定证书按前节配置 `pinned`。

### 直连

不填写服务器或认证；interface 可选，DIRECT 表示内置直连，与命名直连节点不同。

```json
{
  "name": "direct",
  "type": "direct"
}
```

### HTTP CONNECT

连接 HTTP 代理服务；username/password 只在代理要求认证时填，普通 HTTP CONNECT 不是 HTTPS 代理。

```json
{
  "name": "http",
  "host": "127.0.0.1",
  "port": 18101,
  "type": "http",
  "udp": false,
  "username": "tester",
  "password": "netproxy-compose-test-20261011"
}
```

### SOCKS5

username/password 由 SOCKS5 服务端配置决定；无认证时删两项。需要 TLS 承载时参考 socks5-tls 的 tls、sni 和 tlsVerify。

```json
{
  "name": "socks5-auth",
  "host": "127.0.0.1",
  "port": 18103,
  "type": "socks5",
  "udp": true,
  "username": "tester",
  "password": "netproxy-compose-test-20261011"
}
```

### SSH TCP 转发

username 是系统登录用户；password 与 sshKeyPath/sshKeyPem 依服务端登录方式选择；sshPassphrase 是私钥口令，不是登录密码。

```json
{
  "name": "ssh",
  "host": "127.0.0.1",
  "port": 18105,
  "type": "ssh",
  "username": "tester",
  "password": "netproxy-compose-test-20261011"
}
```

### Shadowsocks AEAD

method 为实际服务端加密算法，password 为对应密码；SS2022 用固定长度 Base64 密钥。

```json
{
  "name": "ss-aes256",
  "host": "127.0.0.1",
  "port": 18109,
  "type": "ss",
  "password": "netproxy-compose-test-20261011",
  "method": "aes-256-gcm"
}
```

### Snell

version 只能 4、5、6；snellMode 仅 v6 有 default、unshaped、unsafe-raw，旧版只有 default；snellReuse 为顺序会话复用，不能当并发 mux。

```json
{
  "name": "snell-v6-default",
  "host": "127.0.0.1",
  "port": 18150,
  "type": "snell",
  "password": "snell-official-fixture-20261010",
  "version": 6,
  "snellMode": "default",
  "snellReuse": true,
  "udp": true
}
```

### Trojan

password 为认证密码。普通 Trojan 始终 TLS；为自签服务配置 pinned 和实际证书指纹。

```json
{
  "name": "trojan",
  "host": "127.0.0.1",
  "port": 18106,
  "type": "trojan",
  "password": "netproxy-compose-test-20261011",
  "tls": true,
  "sni": "proxy.test",
  "tlsVerify": "skip"
}
```

### VLESS WebSocket

uuid 为用户身份；network、path、wsHost 和服务端承载对应；tlsVerify 作用于普通外层 TLS。

```json
{
  "name": "vless-ws",
  "host": "127.0.0.1",
  "port": 18117,
  "type": "vless",
  "uuid": "b831381d-6324-4d53-ad4f-8cda48b30811",
  "tls": true,
  "sni": "proxy.test",
  "network": "ws",
  "path": "/proxy",
  "wsHost": "proxy.test",
  "tlsVerify": "skip"
}
```

### VMess HTTP2

uuid 为身份，vmessSecurity 为数据段算法；network=h2 的 TLS 与服务器 ALPN、路径保持一致。

```json
{
  "name": "vmess-h2",
  "host": "127.0.0.1",
  "port": 18128,
  "type": "vmess",
  "uuid": "b831381d-6324-4d53-ad4f-8cda48b30811",
  "vmessSecurity": "aes-128-gcm",
  "tls": true,
  "sni": "proxy.test",
  "network": "h2",
  "path": "/proxy",
  "wsHost": "proxy.test",
  "tlsVerify": "skip"
}
```

### AnyTLS

password 认证，tls/sni 表达服务端身份；muxProtocol 不等于 AnyTLS 内建会话机制。

```json
{
  "name": "anytls",
  "host": "127.0.0.1",
  "port": 18107,
  "type": "anytls",
  "password": "netproxy-compose-test-20261011",
  "tls": true,
  "sni": "proxy.test",
  "tlsVerify": "skip"
}
```

### Hysteria2

QUIC 自带 TLS；password 是 HTTP3 认证密码，udp 开启实际 UDP 中继；obfsPassword 是 Salamander 密码。

```json
{
  "name": "hy2",
  "host": "127.0.0.1",
  "port": 18142,
  "type": "hy2",
  "password": "netproxy-compose-test-20261011",
  "sni": "proxy.test",
  "udp": true,
  "tlsVerify": "skip"
}
```

### TUIC v5

uuid 与 password 同时用于认证；congestionControl 是 cubic、new_reno 或 bbr；udpRelayMode 是 native 或 quic。

```json
{
  "name": "tuic",
  "host": "127.0.0.1",
  "port": 18144,
  "type": "tuic",
  "uuid": "b831381d-6324-4d53-ad4f-8cda48b30811",
  "password": "netproxy-compose-test-20261011",
  "sni": "proxy.test",
  "udp": true,
  "udpRelayMode": "native",
  "congestionControl": "cubic",
  "tlsVerify": "skip"
}
```

### ShadowTLS v3

password 为外层密码，shadowTlsPassword 为内层 SS 密码，method 为内层算法；不是把所有密码填一个字段。

```json
{
  "name": "shadowtls-aes256",
  "host": "127.0.0.1",
  "port": 18146,
  "type": "shadowtls",
  "password": "netproxy-compose-test-20261011",
  "method": "2022-blake3-aes-256-gcm",
  "shadowTlsVersion": 3,
  "shadowTlsPassword": "AAECAwQFBgcICQoLDA0ODxAREhMUFRYXGBkaGxwdHh8=",
  "sni": "proxy.test"
}
```

### WireGuard

privateKey 为客户端私钥，peerPublicKey 为服务端公钥，presharedKey 为可选共享密钥；localAddress 为隧道本地地址。

```json
{
  "name": "wireguard",
  "host": "127.0.0.1",
  "port": 18153,
  "type": "wireguard",
  "privateKey": "ERITFBUWFxgZGhscHR4fICEiIyQlJicoKSorLC0uLzA=",
  "peerPublicKey": "Xwm3+XpAtQIgaXBktDsnQRsHpKof4FNwsnUZgmmD0w0=",
  "localAddress": "10.203.0.2"
}
```

### SSH 私钥认证

```json
{
  "name": "SSH 私钥",
  "type": "ssh",
  "host": "ssh.example.com",
  "port": 22,
  "username": "proxy-user",
  "sshKeyPath": "/Users/your-user/.ssh/id_ed25519",
  "sshPassphrase": "replace-only-if-key-is-encrypted"
}
```

私钥使用 `sshKeyPath` 文件路径或 `sshKeyPem` 内联内容，建议只填一种；同时填写时使用文件路径。内联 PEM 必须是合法 JSON 字符串，换行写为 `\n`。

### VLESS Reality 与 Vision

```json
{
  "name": "VLESS Reality Vision",
  "type": "vless",
  "host": "reality.example.com",
  "port": 443,
  "uuid": "b831381d-6324-4d53-ad4f-8cda48b30811",
  "network": "tcp",
  "security": "reality",
  "tls": true,
  "sni": "cover.example.com",
  "publicKey": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
  "shortId": "0123456789abcdef",
  "fingerprint": "chrome",
  "flow": "xtls-rprx-vision",
  "tlsVerify": "skip"
}
```

示例公钥只是满足格式的占位值，不可连接。Reality 的 `tlsVerify=skip` 表示不应用普通 PKI 身份策略；Reality 公钥认证仍执行。`publicKey` 是服务端 Reality 公钥，`shortId` 与服务端登记值一致。Vision 由 `flow` 启用，不能仅把名字中写上 Vision。

### XHTTP、mKCP、ECH、mux 的节点片段

以下每个对象是**合并到对应节点的字段片段**，单独不能作为可连接节点。XHTTP 的 `mode` 与顶层选路 `mode` 分别属于节点和配置根。

```json
{
  "network": "xhttp",
  "path": "/proxy",
  "wsHost": "transport.example.com",
  "mode": "stream-one",
  "scMaxEachPostBytes": 1048576,
  "xhttpH3": false
}
```

`mode` 选择 `packet-up`、`stream-up`、`stream-one`；`xhttpH3` 启用 QUIC HTTP3 承载。最大 POST 字节数只在实际分包模式里生效，0 使用协议默认。

```json
{
  "network": "mkcp",
  "headerType": "srtp",
  "seed": "replace-with-server-seed",
  "tls": false
}
```

`headerType` 可取 `none`、`srtp`、`utp`、`wechat`、`wechat-video`、`wireguard`、`dtls`，必须与对端掩码一致；mKCP 不是普通 TCP TLS 承载，不能仅勾 TLS 期待自动变换协议。

```json
{
  "echConfig": "BASE64_ECHCONFIGLIST_FROM_SERVER",
  "encryption": "VLESS_ENCRYPTION_STRING_FROM_SERVER",
  "muxProtocol": "smux",
  "muxMaxStreams": 16
}
```

`echConfig` 填服务端 ECHConfigList 的 Base64，`encryption` 填 VLESS Encryption 完整参数。按服务端支持情况填写这些扩展。`muxProtocol` 可取 `smux`、`yamux`，空或省略不启用；按对应承载支持的协议选择。

### Hy2 与 TUIC 调优

```json
{
  "obfsPassword": "replace-with-salamander-password",
  "portHopping": "20000-20100",
  "upMbps": 100,
  "downMbps": 200
}
```

`portHopping` 是字符串范围，范围内端口须由同一服务端监听并与其跳跃策略一致。`upMbps/downMbps` 为带宽字段，当前不启用 Brutal 带宽控制。

```json
{
  "congestionControl": "bbr",
  "udpRelayMode": "quic"
}
```

TUIC `native` 使用 QUIC DATAGRAM，`quic` 使用可靠单向流；按服务端支持的模式选择。

## 整份配置：字段、关系与运行方式

JSON 使用 `true/false` 布尔和不带引号的数字。通过 GUI 保存配置时，避免同时用文本编辑器修改同一文件。新独立进程通过 `-c` 指定配置路径，现有实例可从 `config-path` 控制命令查询实际路径；系统 `base.json` 的 `dataDir` 决定默认配置目录。

| 顶层字段 | 类型、默认或可选值 | 作用与填法 |
| --- | --- | --- |
| `mode` | `rule`、`global`、`direct`；默认 rule | 按规则、全局代理或直连 |
| `proxy` | 策略组名称 | 全局出口以及规则 PROXY 的选择来源，不是服务器域名 |
| `outbound` | 默认 DIRECT | 旧基础默认出站；日常选路使用 mode、proxy 和规则 |
| `proxies` | 节点对象数组 | 手动节点，各节点 name 唯一 |
| `proxyGroups` | 策略组对象数组 | 显式节点、子组和订阅展开的集合 |
| `dns` | 对象 | 上游、Fake-IP 与超时 |
| `rules` | 具名对象数组 | 按顺序匹配，FINAL 放最后 |
| `subscriptions` | 对象数组 | 远程订阅或本地来源 |
| `subscriptionCollections` | 对象数组 | 订阅来源集合，保持来源引用而非节点快照 |
| `ruleSets` | 对象数组 | 外部规则集合与命中 policy |
| `capabilityProbes` | 对象数组 | ssh、reach、country 能力探测 |
| `inboundProxy` | http、socks5 两对象 | 对外显式代理监听与入站认证 |
| `portForwards` | 对象数组 | TCP、UDP 端口转发 |
| `router` | 对象，缺省关闭 | 网口、LAN、DHCP、隔离与限速 |
| `httpProcess` | 对象，MITM 缺省关闭 | 错误页、MITM、rewrite、脚本；不是节点证书信任 |
| `mtu` | 数字，默认 9000 | TUN 报文 MTU；需要按实际链路条件调节 |
| `tunLocalIp` | 字符串，默认 10.0.0.6 | TUN 本地地址 |
| `egressInterface` | 字符串，空为自动 | 全局物理出口，例如 en0；节点 interface 可指定单节点出口 |
| `bypassPrivate` | 布尔，默认 true | 用户规则后、FINAL 前插入私网直连，显式规则仍可覆盖 |
| `geoip` | MMDB 文件路径 | GEOIP 匹配数据库，空则不启用其查询能力 |
| `statsDb` | SQLite 路径 | 历史持久化，空则不写数据库 |
| `latencyTtl` | 秒，默认 86400；0 不过期 | 测速显示结果有效期，不是重测周期 |
| `probeConcurrency` | 默认 1024，最小 1 | 探测同时并发上限 |
| `probeBudgetPerMin` | 默认 30，最小 1 | 后台每分钟探测预算 |
| `probeYieldConns` | 默认 8，最小 0 | 用户连接繁忙时降低后台预算的阈值 |
| `probeMinInterval` | 秒，默认 60，最小 1 | 自适应探测最小周期 |
| `probeMaxInterval` | 秒，默认 1800 | 最大周期，不低于最小周期 |
| `test` | 对象 | 默认测试目标，详见下面片段 |

### 可复制的完整最小配置

```json
{
  "mode": "rule",
  "proxy": "主要出口",
  "bypassPrivate": true,
  "proxies": [
    {
      "name": "Trojan 主节点",
      "type": "trojan",
      "host": "proxy.example.com",
      "port": 443,
      "password": "replace-with-authentication-password",
      "tls": true,
      "sni": "proxy.example.com",
      "tlsVerify": "system"
    }
  ],
  "proxyGroups": [
    {
      "name": "主要出口",
      "type": "select",
      "proxies": ["Trojan 主节点"],
      "selected": "Trojan 主节点"
    }
  ],
  "dns": {
    "upstream": [
      {"proto": "doh", "url": "https://1.1.1.1/dns-query", "insecure": false},
      {"proto": "udp", "host": "223.5.5.5", "port": 53}
    ],
    "timeoutMs": 3000,
    "fakeIpRange": "198.18.0.0/15",
    "fakeIp6Prefix": "fd00::",
    "fallbackSystem": true
  },
  "rules": [
    {"type": "DOMAIN-SUFFIX", "pattern": "example.cn", "policy": "DIRECT"},
    {"type": "FINAL", "policy": "主要出口"}
  ],
  "inboundProxy": {
    "http": {"enable": true, "listen": "127.0.0.1", "port": 7890},
    "socks5": {"enable": true, "listen": "127.0.0.1", "port": 7891}
  },
  "test": {
    "proxyUrl": "http://www.gstatic.com/generate_204",
    "connectivityUrl": "http://connectivitycheck.platform.hicloud.com/generate_204",
    "udpTarget": "www.apple.com@64.6.64.6"
  }
}
```

替换服务器、密码、SNI 后才能连接。自签服务器改用固定模式及服务端 `pcs`。`proxy` 指向 `主要出口`，它的 `selected` 指向 `Trojan 主节点`，不要交换。

### DNS 配置

| 字段 | 填法 |
| --- | --- |
| `upstream[].proto` | udp、dot、doh、doq |
| `host/port` | UDP、DoT、DoQ 的上游真实地址与端口；典型 53、853、853 |
| `url` | DoH 完整 HTTPS URL，包含查询路径 |
| `sni` | DoT、DoQ 的服务身份；不是业务节点 SNI |
| `insecure` | DNS 上游是否跳过证书验证，默认 false；与节点 tlsVerify 分别配置 |
| `timeoutMs` | 单次查询超时毫秒 |
| `fakeIpRange/fakeIp6Prefix` | IPv4 Fake-IP 范围与 IPv6 前缀 |
| `fallbackSystem` | 是否保留从当前网络获取的系统 DNS 末位兜底 |

```json
{
  "dns": {
    "upstream": [
      {"proto": "dot", "host": "223.5.5.5", "port": 853, "sni": "dns.alidns.com", "insecure": false},
      {"proto": "doq", "host": "94.140.14.14", "port": 853, "sni": "dns.adguard-dns.com", "insecure": false}
    ],
    "timeoutMs": 3000,
    "fallbackSystem": true
  }
}
```

### 订阅与集合

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
    },
    {
      "name": "本地节点",
      "url": "/Users/your-user/.qiuchenly/nodes.txt",
      "updateInterval": 0,
      "enabled": true,
      "isLocal": true,
      "excludeFilters": []
    }
  ],
  "subscriptionCollections": [
    {"name": "全部来源", "includeAllSubscriptions": true, "subscriptions": []}
  ]
}
```

`isLocal=true` 时 url 是文件路径；false 时是订阅 URL。`updateInterval` 单位秒，0 表示不按周期自动拉取。`excludeFilters` 是正则数组，任一匹配会排除节点；不要填匹配所有节点的空正则。关闭来源保留其配置与缓存，不等于删除。集合的 `subscriptions` 是订阅名称数组；`includeAllSubscriptions=true` 动态纳入来源，不写死当前节点名单。

### 策略组：手选、自动测速、备用与区域

```json
{
  "proxyGroups": [
    {
      "name": "自动低延迟",
      "type": "url-test",
      "proxies": [],
      "useCollections": ["全部来源"],
      "filter": "香港|新加坡",
      "excludeFilter": "备用",
      "url": "http://www.gstatic.com/generate_204",
      "updateInterval": 300,
      "tolerance": 50,
      "manualOverride": false
    },
    {
      "name": "区域出口",
      "type": "geo",
      "use": ["主要订阅"],
      "proxies": [],
      "countries": ["SG", "JP"],
      "updateInterval": 600
    }
  ]
}
```

这是要与上面的订阅与集合定义**合并**的片段，不能仅保留 useCollections 却删掉集合声明。

| 组字段 | 取值及意义 |
| --- | --- |
| `type` | select 手选；url-test 测速；fallback 顺序备用；load-balance 分担；geo 区域筛选；ssh-test、reach-test 为专用筛选组 |
| `proxies` | 明确的节点名或子组名，不是 URL 或 host |
| `use` | 订阅名数组 |
| `useCollections` | 来源集合名数组 |
| `filter/excludeFilter` | ECMAScript 正则；排除优先，空不筛选 |
| `selected` | 手选成员的名字 |
| `url` | 代理端到端测速目标；当前延迟路径使用 HTTP 目标 |
| `updateInterval` | 秒；0 使用类别默认周期 |
| `tolerance` | 毫秒；低于容差差异避免频繁切换 |
| `manualOverride` | true 钉住 selected；仍会探测，但不自动改选 |
| `countries` | geo 的 ISO 两位国家码数组 |
| `sshHost/sshPort` | ssh-test 服务目标，默认 github.com:22 |
| `reachUrl` | reach-test 的完整目标 URL |
| `reachOkStatus/reachOkBody` | 正向状态码列表、正文特征 |
| `reachBlockStatus/reachBlockBody/reachBlockHeader` | 封锁判定，例如状态码与 Location 同时匹配 |

### 规则与规则集

```json
{
  "rules": [
    {"type": "DOMAIN", "pattern": "api.example.com", "policy": "主要出口"},
    {"type": "DOMAIN-SUFFIX", "pattern": "example.cn", "policy": "DIRECT"},
    {"type": "PROCESS-NAME", "pattern": "Example.app", "policy": "主要出口"},
    {"type": "IP-CIDR", "pattern": "192.168.0.0/16", "policy": "DIRECT"},
    {"type": "GEOIP", "pattern": "CN", "policy": "DIRECT"},
    {"type": "FINAL", "policy": "主要出口"}
  ],
  "ruleSets": [
    {
      "name": "域名规则集",
      "url": "https://rules.example.com/domains.txt",
      "behavior": "domain",
      "policy": "REJECT",
      "updateInterval": 86400,
      "enabled": true
    }
  ]
}
```

规则从前往后，先匹配先处理。`policy` 使用 DIRECT、REJECT、REJECT-DROP、PROXY、节点名或已存在组名。`egress` 可指定网卡；`require` 可声明 ssh、reach 或 country 能力约束，必须有对应探测数据。规则对象不是旧位置数组。`behavior=domain` 是域名/IP 列表，`classical` 是带类型的规则文本，不由文件后缀猜测。

### 全局能力探测

```json
{
  "capabilityProbes": [
    {"kind": "ssh", "host": "github.com", "port": 22, "updateInterval": 300},
    {
      "kind": "reach",
      "url": "https://api.example.com/health",
      "okStatus": "200,401",
      "blockStatus": "403,451",
      "blockBody": "region blocked",
      "updateInterval": 300
    },
    {"kind": "country", "updateInterval": 600}
  ]
}
```

SSH 只提供 host/port；reach 的 `okBody`、`blockHeader` 可补充判定。这里描述的是“能否满足目标要求”，不是通用 HTTP 延迟测速。空清单不做这些能力探测。

### 入站代理与端口转发

```json
{
  "inboundProxy": {
    "http": {"enable": true, "listen": "127.0.0.1", "port": 7890, "user": "local-user", "pass": "local-inbound-password"},
    "socks5": {"enable": true, "listen": "127.0.0.1", "port": 7891, "user": "local-user", "pass": "local-inbound-password"}
  },
  "portForwards": [
    {"proto": "tcp", "listenPort": 2222, "targetHost": "ssh.example.com", "targetPort": 22, "via": "主要出口", "enabled": true},
    {"proto": "udp", "listenPort": 15353, "targetHost": "223.5.5.5", "targetPort": 53, "via": "DIRECT", "enabled": false}
  ]
}
```

入站 user/pass 是别人连接本机代理时的认证，与出站节点 username/password 分开。`listen` 是 IPv4；127.0.0.1 仅本机，0.0.0.0 全部接口。端口 0 关闭该入站；portForwards 的监听与目标端口必须 1..65535，proto 可为 tcp、udp、both。`via` 是组或节点出站选择，DIRECT 直连。启用项会实际监听端口，避免复制后占用未知服务。

### 路由器与 LAN

```json
{
  "router": {
    "enabled": false,
    "interLanIsolate": false,
    "nics": [
      {"iface": "en0", "role": "wan", "enabled": false},
      {
        "iface": "en7",
        "role": "lan",
        "enabled": false,
        "lan": {
          "mode": "serve",
          "subnetIp": "192.168.50.1",
          "netmask": "255.255.255.0",
          "poolStart": "192.168.50.100",
          "poolEnd": "192.168.50.200",
          "leaseSecs": 86400,
          "dnsMode": "fakeip",
          "ipv6Mode": "off",
          "nat": true,
          "clientIsolation": false,
          "isolationAllow": [],
          "reservations": [{"mac": "02:00:00:00:00:10", "ip": "192.168.50.10", "hostname": "example-device"}],
          "rateLimits": [{"mac": "02:00:00:00:00:10", "downKbps": 10000, "upKbps": 2000}]
        }
      }
    ]
  }
}
```

示例保持关闭，网卡名须改成你机器真实名字。role 为 off、wan、lan、hotspot；每个口有独立 enabled。LAN mode 为 serve（权威 DHCP/网关）、monitor（旁挂桥）、forward（手配地址的转发）。dnsMode 为 fakeip 或 upstream；ipv6Mode 为 off 或 ulaSlaac，后者可填 ulaPrefix。monitor 的 uplinkIf 指向上游口，dnsSnoopHijack 决定主动 DNS 接管；serve 使用地址池与保留。限速单位 Kbps，0 不限；空 mac 可以表达段级默认值。该功能会影响真实网络，应先核对拓扑与当前 DHCP 归属。

### HTTP 处理、MITM 与脚本

```json
{
  "httpProcess": {
    "failurePageEnabled": true,
    "mitm": {
      "enable": false,
      "h2": false,
      "h3": false,
      "passthroughOnPinFail": true,
      "keyAlgo": "ec",
      "leafCacheCap": 1024,
      "hostnames": ["*.example.com"],
      "hostnamesDisabled": []
    },
    "rewrites": [
      {"name": "示例请求头", "enabled": false, "kind": "header", "direction": "request", "urlRegex": "https://api\\.example\\.com/.*", "op": "header-replace", "header": "X-Example", "value": "demo"}
    ],
    "scripts": [
      {"id": "example-script", "name": "示例脚本", "lang": "ts", "hosts": ["api.example.com"], "onRequest": false, "onResponse": false, "onSchedule": false, "intervalSecs": 0, "cron": "", "enabled": false}
    ]
  }
}
```

MITM 信任自己的根 CA，与连接节点时验证服务端证书是两件事。`caCert/caKey` 是 MITM CA 的 PEM，空时由其服务生成；不在节点 pcs 输入里填写。`keyAlgo` 为 ec 或 rsa。rewrite kind 可为 url、header、body、map-local；urlRegex 是匹配完整 URL 的正则，JSON 里的反斜线必须转义。动作具体按 kind 填 `action/replacement`、`direction/op/header/value`、`dataType/data/status`，不同 kind 不共用所有字段。脚本源码以 id 对应文件保存，配置只保存元信息；不要把未保存的 source 当成已执行脚本。

## 保存、读回与排错

在 GUI 中点击「添加」或「保存」后，重新编辑节点核对字段，再到「策略组」选择该节点；规则模式下检查目标域名命中的策略。

使用控制接口时，`node-add/node-edit` 的 `node` 字段填写节点 JSON 字符串；`node-parse` 用于导入分享链接，`node-get` 用于查询保存后的节点。

```json
{
  "uri": "trojan://authentication-password@proxy.example.com:443?sni=proxy.example.com&pcs=aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#示例节点"
}
```

上例是 `POST /node-parse` 的请求体，响应包含 `ok` 与 `node` 对象。`node-edit` 的 name 表示旧节点名，node 内 name 是更新后的名称；只改已知目标，避免覆盖无关订阅或整体配置。

| 现象 | 先检查什么 |
| --- | --- |
| TLS 提示证书固定不匹配 | pcs 是否完整叶证书 SHA256、服务端是否更换证书、SNI 是否选错服务 |
| system 拒绝 self-signed | 自签不在系统信任里；有可信 pcs 时使用固定模式 |
| TLS 成功但没有业务回包 | password/uuid、协议类型、服务器账号和目标限制；不要直接归因证书 |
| 测试成功但实际浏览不通 | 当前组选择、规则、目标 TLS、DNS、入站与系统代理或 TUN 设置 |
| GUI 保存失败或按钮禁用 | 类型、端口、模式与指纹格式；pinned 列表不能为空 |
| 节点参数保存后丢失 | 用 `node-get` 查询保存后的配置，核对当前连接的服务和配置路径 |
| 导入提示未知 node-parse | 将 GUI 和后台服务更新到相同版本后重试 |
