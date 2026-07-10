---
title: 网络代理（QiuChen Proxy）
description: QiuChen 应用商店 QiuChen Proxy 透明代理引擎使用指南
---

# 网络代理（QiuChen Proxy）

QiuChenly 应用商店内置 QiuChen Proxy 代理引擎，基于 utun 虚拟网卡实现 L3 透明代理，提供类似 Surge 的网络接管能力。

> **状态**：实验性功能，持续开发中。

本页聚焦 QiuChen Proxy 代理引擎本身的配置与玩法：[启用代理引擎](#enable) → 按 [快速上手](#quickstart) 三步导入订阅并跑通规则，再到 [策略组切换](#policy)、[连接审查](#inspect)、[局域网网关](#gateway)、[端口转发](#portforward) 等进阶能力。

::: tip 还没装好应用？
本页假设你已经安装并初始化好 QiuChenly 应用商店。应用的下载、去除隔离属性、安装守护进程、授权完全磁盘访问权限、首次配置等步骤，请先参考 [安装与启动](./installation)。
:::

## 启用代理引擎 {#enable}

进入 **管理 → 系统设置 → 实验性功能**，打开 **「启用 QiuChenly 代理」** 开关。daemon 内置 netproxy 引擎会自动处理 utun 虚拟网卡并全局接管系统流量，**即时生效、无需重启、无需输入密码**。配置存储在 `~/.qiuchenly/` 目录，热重载自动生效。

![开启「启用 QiuChenly 代理」开关](/images/network-proxy/image-10.png)

::: tip 关闭每次开门动画
如果不想每次启动都播放原神开门动画，可在 **管理 → 系统设置 → 界面** 中关闭「启动动画（原神）」。
:::

![在「界面」设置中关闭启动动画](/images/network-proxy/image-9.png)

## 快速上手 {#quickstart}

代理引擎开启后，三步即可跑通：**打开管理界面 → 添加订阅 → 配置规则**。

### 第一步：打开代理管理 GUI

进入 **应用 → 特色合集**，点击 **「QiuChenly 代理」** 卡片，打开原生代理管理界面。

![从「应用 → 特色合集」打开 QiuChenly 代理](/images/network-proxy/image-11.png)

主界面提供概览、连接审查、节点、策略组、规则、端口转发、DNS、网关等模块；菜单栏图标也提供快捷面板，可查看实时上下行速率、当前节点并快速切换。

![代理管理主界面与菜单栏快捷面板](/images/network-proxy/image-12.png)

### 第二步：添加订阅

1. 在左侧导航进入 **订阅** 页，点击 **「添加订阅」**
2. 填入订阅 URL、更新间隔（秒）与名称，点击 **保存**

![添加订阅：填写 URL、间隔与名称](/images/network-proxy/image-13.png)

订阅中的节点会自动解析导入，并显示节点数量与协议分布（例如 `VLESS 61 · HYSTERIA2 25 · SS 2`）。

![订阅导入成功，显示节点数与协议分布](/images/network-proxy/image-14.png)

> 若导入后没有立即刷新，切换一下页面即可看到最新数据。

### 第三步：配置规则

订阅导入后系统使用默认规则组。要让「非国内流量全部走代理」，进入 **规则** 页，将 **FINAL** 兜底规则的策略改为 **PROXY** 并保存：

- **CN（GEOIP）→ DIRECT**：得益于内置 GEOIP 数据库，国内 IP 自动直连
- **FINAL → PROXY**：其余所有流量走代理

![将 FINAL 兜底规则改为 PROXY](/images/network-proxy/image-15.png)

开启后系统流量自动按规则路由 —— 国内网站直连，被墙网站走代理。

### 验证代理是否生效

打开浏览器访问 `https://www.google.com`，能正常打开即表示代理工作正常。在代理管理界面可查看实时连接日志和流量统计。

### 故障排查

- **无法打开外网**：检查订阅节点是否有效，在节点列表手动测速
- **国内网站变慢**：检查直连规则是否正确，国内 DNS 是否配置
- **代理开关灰色无法点击**：确认 daemon 正在运行（`launchctl list | grep hayaku`）

## 策略组与节点切换 {#policy}

每一个订阅都会被视为一个 **策略组**。除订阅组外，系统只内置 **手动（SELECT）** 组——其余策略组（自动选择、故障转移、AI 可达、Git SSH 等）全部由你按需自建：在 **策略组页 → 新建组**，组编辑器右上角的 **「预设…」下拉** 可一键填充常用配置，选完改个组名、勾选成员节点即可保存。

![策略组列表：手动 / 订阅 / 自动选择 / 故障转移](/images/network-proxy/image-16.png)

### 组类型速查 {#policy-types}

| 类型 | 行为 |
| --- | --- |
| `select` | 手选成员 |
| `url-test` | 周期测速自动切延迟最低（预设「自动选择」） |
| `fallback` | 按顺序取首个可用（预设「故障转移」） |
| `load-balance` | 可达成员按目标哈希分摊 |
| `geo` | 按出口国家筛成员（探测真实落地国） |
| `ssh-test` | 探测出口能否连 SSH（git push），只选真正可用的节点（预设「Git over SSH」） |
| `reach-test` | 对指定 URL 打真实 HTTPS 探测**地区封锁**，只选未被封的节点（预设「Claude / OpenAI / Gemini」） |

### AI 可达组（reach-test）怎么配 {#policy-reach}

以 Claude 为例：被封地区访问 `claude.ai` 不返回 403，而是 **302 跳转** 到 `https://www.anthropic.com/app-unavailable-in-region`。因此判定条件要写「状态码 + 协议头」组合：

- **探测 URL**：`https://claude.ai`
- **被封状态码**：`302`
- **被封协议头**：`Location: *app-unavailable-in-region*`（`*` 通配；也支持 `/正则/`）
- 两者**同时命中**才判被封——正常的 302 跳登录页不会误判。

其余判定字段（全部可选，空=不判该维度）：可达状态码白名单、可达正向特征串（响应须包含）、被封负向特征串（响应包含即判被封，如 OpenAI 的 `unsupported_country`）。全不配时默认「非 403/451 即可达」。

把规则里的 AI 域名（如 `DOMAIN-KEYWORD claude`）指向这个组，流量就只会走探测通过的节点。

### 无可选节点时的行为 {#policy-onempty}

`ssh-test` / `reach-test` 组在**成员还没探测完**或**全部被判不可达**时，按组编辑器里的「无可选节点时」策略处置：

- **挂起等探测（默认）**：连接先挂起并立即触发一轮探测，探出可用节点后自动放行；绝不静默直连（直连既失败又暴露访问意图）。挂起连接在连接审查页可见，超时未果自动关闭。
- **回退直连**：旧行为。
- **拒绝连接**：直接拒绝（RST）。

对应配置文件字段（`~/.qiuchenly/` 下 proxyGroups 条目）：`reachUrl` / `reachBlockStatus` / `reachBlockHeader` / `reachBlockBody` / `reachOkStatus` / `reachOkBody` / `reachTtl` / `onEmpty`（`hold`/`direct`/`reject`，空=挂起）。

在菜单栏快捷面板点击「切换」，即可把当前出口切换为自己的订阅策略组或组内任意成员。

![从菜单栏切换出口策略组](/images/network-proxy/image-17.png)

切换出口的同时可对节点进行 **延迟测速**，挑选低延迟的稳定节点使用。

![切换出口并对节点延迟测速](/images/network-proxy/image-18.png)

> 手动策略组可以把其它策略组里某些稳定节点加进来，用于常用访问的快速切换。懒得折腾的话保持默认即可。

## 连接审查 {#inspect}

**连接审查** 实时展示每条连接的进程、目标、出口与走向，并区分 **本机 / 局域网设备 / 外部** 三类归属。得益于内置 GEOIP 数据库，所有 CN 流量自动走直连。

![连接审查：实时连接列表与 GEOIP 直连](/images/network-proxy/image-19.png)

如果默认规则不够个性化，可在某条连接上右键 **独立制裁**：按 **域名 / IP / 端口 / 进程** 加规则，或直接拉黑某个域名 / IP。

![右键连接：按域名/IP/端口/进程加规则或拉黑](/images/network-proxy/image-20.png)

## 对外代理与局域网网关 {#gateway}

让内网其它设备（iPhone / Android / PC）直接走本机代理，有两种方式。

::: warning DHCP 功能未完整测试
截止目前，网关页的 **DHCP** 功能还没有经过完整测试，请不要自行启用，以免导致网络环境异常无法恢复。
:::

### 方式一：HTTP / SOCKS5 对外开放

进入 **设置 → 对外代理服务**，把监听切换为 **「对外开放」**，开启 HTTP / SOCKS5（默认端口 `7890` / `7891`，HTTP 与 SOCKS5 同一监听仅端口不同）。其它设备把代理指向 `本机IP:端口` 即可。

![设置 → 对外代理服务，切换为对外开放](/images/network-proxy/image-21.png)

### 方式二：L3 层透明转发接管

进入 **网关** 页，启用 **L3 透明转发**，并勾选对外的 LAN 网卡。

![网关页启用 L3 透明转发](/images/network-proxy/image-22.png)

然后在其它设备上手动配置网络，**网关填这台开启了 L3 转发的 Mac 的局域网 IP**，DNS 填任意公网 DNS，流量都会被 Mac 接管：

以 iPhone 为例，手动配置 IPv4 —— 路由器（网关）填 Mac 的 IP：

![iPhone 手动配置 IPv4，网关指向 Mac](/images/network-proxy/image-25.png)

DNS 填任意公网 DNS（如 `8.8.8.8`）即可：

![iPhone 手动配置 DNS](/images/network-proxy/image-26.png)

配置完成后，在 Mac 端「连接审查」即可看到来自局域网设备的「转发」流量及其完整决策链（输入 → 模式 → 命中规则 → 组选路 → 终态）。

![连接审查中可见局域网设备的转发流量与决策链](/images/network-proxy/image-27.png)

> 接管后，局域网设备的所有流量仍会按照规则走对应的代理协议。

## 端口转发 {#portforward}

内置完整的入站 / 出站端口转发管理系统，可理解为 Mac 上超轻量级的 frpc，支持端口映射等高级玩法。由于内核为自研，几乎可以做到任意转发。

进入 **端口转发** 页，点击「添加转发」，填写协议、监听端口、目标主机与目标端口：

![添加端口转发规则](/images/network-proxy/image-23.png)

以上图为例：监听本机 `80`，其它机器访问这台 IP 的 `80`，所有数据包将被转发到目标机器 `192.168.1.233` 的 `8080` 端口。对内网设备同样适用，**开关即时生效，不重建其它转发**。

## 手动添加节点 {#addnode}

如果有特殊的个别节点，可在 **节点** 页手动添加到手动分组。已实现全协议的稳定支持。

![手动添加节点，支持全协议](/images/network-proxy/image-24.png)

支持的协议：`ss` / `snell` / `trojan` / `vmess` / `vless` / `socks5` / `http` / `hy2` / `anytls` / `tuic` / `wireguard` / `ssh`。实际稳定性仍需大家在使用中持续反馈。

## 核心能力 {#capabilities}

### L3 透明转发

- 基于 **utun 虚拟网卡** 实现 L3 层透明代理
- 无需手动配置系统代理
- 多网卡环境自动识别，独立 IPv6 处理
- 与 DHCP 解耦，无需手填 CIDR

### 对外代理（入站）

局域网设备可通过以下方式接入：

- **HTTP 代理** + **SOCKS5 代理**，合一端口自动识别

### 出站协议

| 协议 | 说明 |
|------|------|
| **Trojan** | TLS 伪装代理，支持 gRPC/WS/HTTP2/QUIC 传输 |
| **VMess** | V2Ray 核心协议，支持 AEAD 加密 |
| **VLESS** | 轻量协议，支持 Vision 流控伪装 + Reality TLS 指纹隐匿 |
| **Shadowsocks** | 经典加密代理，支持多种加密算法 |
| **Hysteria2** | 基于 QUIC 的高速代理协议 |
| **TUIC** | 基于 QUIC 的轻量代理协议 |
| **Snell** | Surge 专用代理协议 |
| **WireGuard** | 现代 VPN 隧道协议 |
| **SSH** | SSH 安全隧道 |
| **SOCKS5 over TLS** | TLS 加密的 SOCKS5 |
| **AnyTLS** | 任意 TLS 流量伪装 |

传输层支持：**HTTP/2、HTTP/3 (QUIC)、gRPC、WebSocket、TLS 1.3**。

### Salamander 混淆

支持 Shadowsocks 的 Salamander 混淆插件。

### Reality TLS 隐匿

VLESS + Reality 实现 TLS 指纹伪装，无需域名和证书。

### 规则路由

- 域名规则匹配
- IP CIDR 规则匹配
- 进程级流量分流（哪个 App 走哪个代理）
- 支持规则组和策略组

### DNS 系统

- 内置 DNS 代理服务器
- **Fake IP** 模式：减少 DNS 查询延迟
- DNS 请求按规则分流

### 连接审查

- **设备 OUI 厂商反查**：识别局域网设备厂商
- **设备类型分类**：手机/电脑/IoT 设备
- **App 路径解析**：进程级流量归属
- 三类流量设备归属：本机 / 局域网设备 / 外部

### ARP 加固

Gratuitous ARP 防止 IP 冲突，透明网关模式下保持网络稳定。

## 使用场景 {#scenarios}

### 本机透明代理

开启后自动接管本机所有流量，按规则路由。

### 局域网网关模式

将 Mac 作为软路由，其它设备（手机/平板/PC）将网关设为本机 IP，或手动配置 HTTP/SOCKS5 代理指向本机。详见 [对外代理与局域网网关](#gateway)。

## 配置说明 {#config}

配置文件位于 `~/.qiuchenly/` 目录：

- 支持热重载（修改配置后自动生效）
- JSON 格式
- 包含节点列表、规则组、策略组、DNS 设置

## 注意事项 {#notes}

- QiuChen Proxy 独立于主应用，以独立守护进程运行
- 遇到问题可尝试在 **管理 → 系统设置 → 实验性功能** 中关闭再重新开启 QiuChenly 代理
- 支持持久化热开关（重启后保持上一次的开关状态）
