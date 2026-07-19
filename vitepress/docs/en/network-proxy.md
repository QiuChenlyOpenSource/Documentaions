---
title: Network Proxy (QiuChen Proxy)
description: QiuChen App Store QiuChen Proxy transparent proxy engine usage guide
---

# Network Proxy (QiuChen Proxy)

QiuChenly App Store includes the QiuChen Proxy engine, which implements L3 transparent proxying based on a utun virtual network interface, providing Surge-like network takeover capabilities.

> **Status**: Experimental feature, under active development.

This page focuses on configuring and using the QiuChen Proxy engine itself: [enable the engine](#enable) → follow the [Quick Start](#quickstart) three steps to import a subscription and get rules working, then on to advanced features such as [policy-group switching](#policy), [connection inspection](#inspect), [LAN gateway](#gateway) and [port forwarding](#portforward).

::: tip Haven't installed the app yet?
This page assumes you have already installed and initialized QiuChenly App Store. For downloading the app, removing the quarantine attribute, installing the daemon, granting Full Disk Access and the first-run setup, see [Installation & Setup](./installation) first.
:::

## Enabling the Proxy Engine {#enable}

Go to **Manage → System Settings → Experimental Features** and turn on the **"Enable QiuChenly Proxy"** toggle. The daemon's built-in netproxy engine automatically handles the utun virtual NIC and globally takes over system traffic — **effective immediately, no restart, no password required**. Configuration is stored in the `~/.qiuchenly/` directory and hot reloads automatically.

![Turning on the "Enable QiuChenly Proxy" toggle](/images/network-proxy/image-10.png)

::: tip Turn off the opening animation
If you don't want the Genshin-style door animation on every launch, disable "Opening Animation (Genshin)" in **Manage → System Settings → Interface**.
:::

![Disabling the opening animation in Interface settings](/images/network-proxy/image-9.png)

## Quick Start {#quickstart}

Once the proxy engine is on, three steps get you running: **open the management UI → add a subscription → configure rules**.

### Step 1: Open the Proxy Management GUI

Go to **Apps → Featured Collections** and click the **"QiuChenly Proxy"** card to open the native proxy management interface.

![Opening QiuChenly Proxy from "Apps → Featured Collections"](/images/network-proxy/image-11.png)

The main interface provides modules such as Overview, Connection Inspection, Nodes, Policy Groups, Rules, Port Forwarding, DNS and Gateway. The menu-bar icon also offers a quick panel where you can see real-time up/down speeds, the current node, and switch nodes quickly.

![Proxy management main interface and menu-bar quick panel](/images/network-proxy/image-12.png)

### Step 2: Add a Subscription

1. In the left navigation, open the **Subscriptions** page and click **"Add Subscription"**
2. Enter the subscription URL, update interval (seconds) and a name, then click **Save**

![Add subscription: fill in URL, interval and name](/images/network-proxy/image-13.png)

Nodes in the subscription are parsed and imported automatically, and the node count and protocol distribution are shown (e.g. `VLESS 61 · HYSTERIA2 25 · SS 2`).

![Subscription imported, showing node count and protocol distribution](/images/network-proxy/image-14.png)

> If it doesn't refresh immediately after importing, switch pages once to see the latest data.

### Step 3: Configure Rules

After importing, the system uses the default rule group. To make "all non-domestic traffic go through the proxy", go to the **Rules** page, change the **FINAL** fallback rule's policy to **PROXY** and save:

- **CN (GEOIP) → DIRECT**: thanks to the built-in GEOIP database, domestic IPs connect directly
- **FINAL → PROXY**: all other traffic goes through the proxy

![Changing the FINAL fallback rule to PROXY](/images/network-proxy/image-15.png)

After enabling, system traffic is routed automatically by rule — domestic sites connect directly, blocked sites go through the proxy.

### Verify the Proxy Works

Open a browser and visit `https://www.google.com`. If it loads normally, the proxy is working. The proxy management interface shows real-time connection logs and traffic statistics.

### Troubleshooting

- **Cannot open foreign sites**: check whether the subscription nodes are valid; run a manual speed test in the node list
- **Domestic sites are slow**: check whether the direct-connect rules are correct and whether domestic DNS is configured
- **Proxy toggle is greyed out**: confirm the daemon is running (`launchctl list | grep hayaku`)

## Policy Groups & Node Switching {#policy}

Every subscription is treated as a **policy group**. Besides the subscription groups, the only built-in group is **Manual (SELECT)** — all other policy groups (auto-select, fallback, AI reachability, Git over SSH, etc.) are created by you as needed: on the **Policy Groups page → New Group**, the group editor's **"Presets…"** dropdown fills in common configurations with one click (group types: `select` / `url-test` / `fallback` / `load-balance` / `geo` / `ssh-test` / `reach-test`); just rename the group, tick its member nodes and save.

![Policy group list](/images/network-proxy/image-16.png)

In the menu-bar quick panel, click "Switch" to set the current outbound to your subscription policy group or any member within it.

![Switching the outbound policy group from the menu bar](/images/network-proxy/image-17.png)

While switching the outbound you can also run a **latency test** on nodes to pick a low-latency, stable node.

![Switching the outbound and running a latency test on nodes](/images/network-proxy/image-18.png)

> The Manual policy group lets you pull in stable nodes from other groups for quick switching of common destinations. If you'd rather not fiddle with it, keep the defaults.

## Connection Inspection {#inspect}

**Connection Inspection** shows the process, target, outbound and direction of every connection in real time, and distinguishes three attribution categories: **local machine / LAN device / external**. Thanks to the built-in GEOIP database, all CN traffic connects directly.

![Connection Inspection: real-time connection list with GEOIP direct connect](/images/network-proxy/image-19.png)

If the default rules aren't granular enough, right-click a connection for **targeted control**: add a rule by **domain / IP / port / process**, or block a domain / IP directly.

![Right-click a connection: add a rule by domain/IP/port/process, or block it](/images/network-proxy/image-20.png)

## Outbound Proxy & LAN Gateway {#gateway}

There are two ways to let other devices on the LAN (iPhone / Android / PC) go through this machine's proxy.

::: warning DHCP is not fully tested
As of now, the **DHCP** feature on the Gateway page has not been fully tested. Do not enable it on your own, to avoid breaking your network in a way that's hard to recover from.
:::

### Option 1: Expose HTTP / SOCKS5 Externally

Go to **Settings → Outbound Proxy Service**, switch the listener to **"Open to External"**, and enable HTTP / SOCKS5 (default ports `7890` / `7891`; HTTP and SOCKS5 share one listener, only the port differs). Other devices just point their proxy at `<this machine's IP>:<port>`.

![Settings → Outbound Proxy Service, switched to Open to External](/images/network-proxy/image-21.png)

### Option 2: L3 Transparent Forwarding Takeover

Go to the **Gateway** page, enable **L3 Transparent Forwarding**, and check the outward-facing LAN NIC.

![Enabling L3 Transparent Forwarding on the Gateway page](/images/network-proxy/image-22.png)

Then configure the network manually on the other device: **set the gateway to the LAN IP of this Mac (the one with L3 forwarding on)**, and set DNS to any public DNS — all traffic will be taken over by the Mac.

For example, on iPhone, configure IPv4 manually — set the router (gateway) to the Mac's IP:

![iPhone manual IPv4 configuration, gateway pointing to the Mac](/images/network-proxy/image-25.png)

Set DNS to any public DNS (e.g. `8.8.8.8`):

![iPhone manual DNS configuration](/images/network-proxy/image-26.png)

Once configured, on the Mac side you can see the "forwarded" traffic from the LAN device and its full decision chain (input → mode → matched rule → group selection → final state) in **Connection Inspection**.

![Forwarded LAN-device traffic and its decision chain in Connection Inspection](/images/network-proxy/image-27.png)

> After takeover, all traffic from LAN devices still follows the rules to the corresponding proxy protocol.

## Port Forwarding {#portforward}

There's a complete inbound / outbound port-forwarding management system built in — think of it as an ultra-lightweight frpc on your Mac, supporting advanced tricks like port mapping. Since the core is custom-built, almost any forwarding is possible.

Go to the **Port Forwarding** page, click "Add Forward", and fill in the protocol, listen port, target host and target port:

![Adding a port-forwarding rule](/images/network-proxy/image-23.png)

Using the screenshot as an example: listen on local port `80`, and any packet other machines send to this IP's port `80` is forwarded to the target machine `192.168.1.233` port `8080`. It works for LAN devices too, and the **toggle is effective immediately without rebuilding other forwards**.

## Manually Adding Nodes {#addnode}

If you have a special individual node, you can add it manually to the Manual group on the **Nodes** page. Stable support for all protocols is implemented.

![Manually adding a node, with full protocol support](/images/network-proxy/image-24.png)

Supported protocols: `ss` / `snell` / `trojan` / `vmess` / `vless` / `socks5` / `http` / `hy2` / `anytls` / `tuic` / `wireguard` / `ssh`. Real-world stability still depends on continued feedback from everyone.

## Core Capabilities {#capabilities}

### L3 Transparent Forwarding

- Implements L3 transparent proxy based on **utun virtual network interface**
- No need to manually configure system proxy
- Automatic detection in multi-NIC environments, independent IPv6 handling
- Decoupled from DHCP; no need to manually enter CIDR

### Inbound Proxy

LAN devices can connect through the following methods:

- **HTTP Proxy** + **SOCKS5 Proxy**, combined port with automatic protocol detection

### Outbound Protocols

All outbound protocols are developed in-house and can be used directly in nodes / subscriptions:

| Protocol | Notes |
|------|------|
| **VLESS** | Lightweight protocol, supports Vision flow control and Reality |
| **VMess** | V2Ray core protocol, AEAD encryption |
| **Trojan** | TLS camouflage proxy |
| **Shadowsocks** | Classic AEAD encrypted proxy (aes-128-gcm / aes-256-gcm / chacha20-ietf-poly1305) |
| **Snell** | Surge-specific protocol (v4 / v5) |
| **Hysteria2** | High-speed QUIC-based protocol, supports Salamander obfuscation and port hopping |
| **TUIC** | Lightweight QUIC-based protocol |
| **AnyTLS** | Arbitrary TLS traffic camouflage |
| **WireGuard** | Modern VPN tunnel protocol |
| **SSH** | SSH secure tunnel |
| **SOCKS5** | Standard SOCKS5, optionally over TLS |
| **HTTP** | HTTP tunnel proxy |

### Transport & Security Options {#security}

Each protocol can layer the following transport and security options as needed:

- **Transports**: TCP/TLS, WebSocket (wss), gRPC, HTTP/2, HTTP/3 (QUIC), xhttp / SplitHTTP, mKCP, HTTPUpgrade
- **TLS & camouflage**: TLS 1.3, Reality (no domain or certificate required), browser-fingerprint mimicry, ECH (encrypted SNI), VLESS encryption
- **Anti-blocking**: Salamander obfuscation, port hopping, mKCP header obfuscation

### Performance {#perf}

A self-developed network core, optimized for long-lived connections and large flows:

- Connection reuse (mux) — reuses connections and avoids repeated handshakes
- Stable sustained high-throughput transfers; large uploads / downloads don't stall

### Rule-Based Routing

- Domain rule matching
- IP CIDR rule matching
- Process-level traffic splitting (which app goes through which proxy)
- Supports rule groups and policy groups

### DNS System

- Built-in DNS server that hijacks and unifies system DNS
- **Fake-IP** mode (IPv4 + IPv6): instant responses so routing decides on the domain rather than the IP, avoiding a resolve round-trip
- **Encrypted upstreams**: DoH (DNS over HTTPS) / DoT (DNS over TLS) / plain UDP
- Ordered multi-upstream failover + result caching
- DNS requests are routed based on rules

### Connection Inspection

- **Device OUI vendor reverse lookup**: Identify LAN device manufacturers
- **Device type classification**: Phone/Computer/IoT device
- **App path resolution**: Process-level traffic attribution
- Three traffic device categories: Local machine / LAN device / External

### ARP Hardening

Gratuitous ARP prevents IP conflicts and maintains network stability in transparent gateway mode.

## Usage Scenarios {#scenarios}

### Local Transparent Proxy

Once enabled, all local traffic is automatically taken over and routed according to rules.

### LAN Gateway Mode

Use your Mac as a soft router: set other devices' (phone/tablet/PC) gateway to your machine's IP, or manually configure an HTTP/SOCKS5 proxy pointing to your machine. See [Outbound Proxy & LAN Gateway](#gateway) for details.

## Configuration {#config}

Configuration files are located in the `~/.qiuchenly/` directory:

- Supports hot reload (changes take effect automatically after modifying configuration)
- JSON format
- Contains node list, rule groups, policy groups, DNS settings

## Notes {#notes}

- QiuChen Proxy runs as an independent daemon separate from the main app
- If you encounter issues, try disabling and re-enabling QiuChenly Proxy in **Manage → System Settings → Experimental Features**
- Supports persistent hot toggle (maintains the last toggle state after restart)
