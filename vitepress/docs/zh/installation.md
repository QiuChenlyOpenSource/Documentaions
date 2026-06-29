---
title: 安装与启动
description: QiuChenly 应用商店安装配置详解
---

# 安装与启动

## 下载安装包 {#download}

### 方式一：GitHub Releases（推荐）

1. 打开 [GitHub Releases 页面](https://github.com/QiuChenly/CoreInject/releases)
2. 找到最新版本（标签格式 `1.0.57.20250601...`）
3. 下载 `QiuChenAppStore.dmg`

### 方式二：Telegram 频道

1. 打开 [Telegram 频道 @qiuchenlymac](https://t.me/qiuchenlymac)
2. 搜索 `#Release` 标签获取最新安装包

下载完成后会得到 DMG 安装包（文件名形如 `QiuChenAppStore-v1.3.0-2026-06-29.dmg`）：

![下载得到的 DMG 安装包](/images/network-proxy/image.png)

## 安装步骤 {#install-steps}

### 第一步：清除隔离属性

macOS 会标记从网络下载的文件为「隔离」，需先清除：

1. 打开 **终端**（在 `启动台` → `其他` → `终端`，或按 `⌘ + Space` 搜索 `Terminal`）
2. 输入以下命令（将路径替换为你的实际路径）：
   ```bash
   xattr -cr /Volumes/QiuChenAppStore/QiuChenAppStore.dmg
   ```

> **提示**：你也可以直接把 dmg 文件拖到终端窗口，路径会自动填充。

![终端执行 xattr -cr 去除隔离属性](/images/network-proxy/image-1.png)

### 第二步：挂载 DMG 并安装

1. 双击 `.dmg` 文件，会在桌面或 Finder 侧边栏出现挂载的磁盘
2. 将 `QiuChenAppStore.app` 拖入 `Applications` 文件夹
3. 等待拷贝完成（约 5-10 秒）

![挂载 DMG 后将 App 拖入「应用程序」](/images/network-proxy/image-2.png)

### 第三步：首次启动

1. 打开 **启动台**（触控板四指捏合，或按 `F4`）
2. 点击 `QiuChenAppStore` 图标
3. 首次启动会弹出系统安全提示，点击 **「打开」**

::: warning 如果提示「无法验证开发者」
进入 **系统设置** → **隐私与安全性** → 滚动到底部，点击 **「仍要打开」**。
:::

首次打开会播放原神风格的 WebGL 开场动画：

![原神风格开场动画](/images/network-proxy/image-3.png)

在开门动画中点击 **「点击进入」** 即可进入应用：

![「点击进入」开门动画](/images/network-proxy/image-5.png)

### 第四步：安装守护进程

首次启动后，应用会自动弹出守护进程安装向导：

1. 在弹窗中输入你的 **Mac 登录密码**
2. 点击 **「安装」**
3. 等待进度条完成（约 5-15 秒）
4. 安装完成后，左侧会显示所有功能模块

![提示安装 Daemon 守护进程](/images/network-proxy/image-4.png)

守护进程（`QiuChenlyDaemon`）是一个后台服务，负责：
- 扫描已安装应用
- 执行应用注入
- 管理下载任务
- 提供音乐播放服务
- 运行网络代理引擎

### 第五步：授权权限

初次使用需要授予两项关键权限：

**完全磁盘访问权限（Full Disk Access）**：
1. 点击引导页的 **「打开系统设置」** 按钮
2. 在 **隐私与安全性** → **完全磁盘访问权限** 中
3. 开启 `QiuChenAppStore` 和 `QiuChenlyDaemon` 的开关
4. 输入密码确认

![需要完全磁盘访问权限的引导页](/images/network-proxy/image-6.png)

应用会按引导同时打开系统设置与文件位置，在列表中开启 **「秋城落叶的应用商店守护进程.app」**（即 `HayakuDaemon.app`）。若提示需要退出，选择「退出并重新打开」即可：

![在系统设置中开启守护进程的完全磁盘访问权限](/images/network-proxy/image-7.png)

::: tip 列表里找不到守护进程？
点击「+」手动添加：前往 **Macintosh HD → 资源库 → Application Support → Hayaku** 选择 `HayakuDaemon.app`。如果开关已开但仍无权限，先「−」移除再「+」重新添加。
:::

**App 管理权限**（macOS 14+）：
1. 在 **隐私与安全性** → **App 管理** 中
2. 开启 `QiuChenAppStore` 和 `QiuChenlyDaemon` 的开关

## 引导页设置 {#wizard}

首次启动完成权限授权后，会进入引导设置页面：

1. **语言选择**：从下拉列表中选择界面语言（默认跟随系统）
2. **下载路径**：设置默认下载位置（需填写完整绝对路径，不能使用 `~`）
3. 点击 **「完成设置」** 进入主界面

![首次配置向导：语言与下载路径](/images/network-proxy/image-8.png)

## 启动台集成 {#launcher}

QiuChenly 应用商店 提供自研启动台（实验性功能）：

- 在 **管理** → **系统设置** → **实验性功能** 中开启
- 开启后接管 `⌘ + Space` 和四指手势
- 可快速搜索应用、执行命令

## 更新应用 {#update}

QiuChenly 应用商店 支持自动检查更新：

1. 进入 **管理** → **系统设置** → **更新**
2. 开启 **「自动检查更新」**
3. 设置检查间隔（1-1440 分钟）
4. 选择更新通道：**稳定版** 或 **包含测试版**

当有新版本时，首页顶部会显示 **「{n} 个应用有新版本」** 提示，点击即可更新。

## 守护进程管理 {#daemon-management}

守护进程（HayakuDaemon）是 QiuChenly 应用商店的后台服务，负责应用扫描、注入、下载管理、音乐播放等核心功能。

进程名：`HayakuDaemon`
Bundle ID：`com.qiuchenly.hayaku.daemon`
安装路径：`/Library/Application Support/Hayaku/HayakuDaemon.app`

### 查看状态

在终端执行：

```bash
launchctl list | grep hayaku
```

如果守护进程运行正常，会显示进程 ID 和状态。也可以打开 **活动监视器** 搜索 `HayakuDaemon` 确认进程存在。

### 重启守护进程

```bash
# 停止
sudo launchctl bootout system/com.qiuchenly.hayaku.daemon

# 启动
sudo launchctl bootstrap system /Library/LaunchDaemons/com.qiuchenly.hayaku.daemon.plist
sudo launchctl kickstart -k system/com.qiuchenly.hayaku.daemon
```

### 强制卸载守护进程

```bash
sudo launchctl unload /Library/LaunchDaemons/com.qiuchenly.hayaku.daemon.plist
sudo rm -rf "/Library/Application Support/Hayaku"
sudo rm -f /Library/LaunchDaemons/com.qiuchenly.hayaku.daemon.plist
sudo tccutil reset All com.qiuchenly.hayaku.daemon
```

卸载后重新打开 QiuChenAppStore 会自动提示重新安装。

### 重置 TCC 权限

如果权限出现问题（如无法访问磁盘），可重置系统权限授权：

```bash
sudo tccutil reset All com.qiuchenly.hayaku.daemon
```

执行后需重新在 **系统设置 → 隐私与安全性** 中授权。

## 查看日志 {#logs}

### Daemon 日志

守护进程日志写入 `/var/log/` 和 `/tmp/`：

```bash
# 实时查看日志
tail -f /var/log/hayaku_daemon.log

# 查看错误日志
cat /var/log/hayaku_daemon_error.log

# 查看临时日志
tail -f /tmp/HayakuDaemon.log
```

### 控制台日志

打开 macOS **控制台** App（在 `应用程序/实用工具` 中），搜索 `hayaku` 或 `QiuChenly` 可查看所有相关系统日志。

### HTTP API 端口

守护进程在本地 `15200` 端口提供 HTTP API 服务。可在浏览器访问 `http://localhost:15200` 验证服务是否正常响应。

## 故障排除 {#troubleshooting}

| 问题 | 解决方法 |
|------|---------|
| 打开提示「文件已损坏」 | 执行 `xattr -cr /Applications/QiuChenAppStore.app` |
| Daemon 安装失败 | 确认已授予完全磁盘访问权限，重启 Mac 后重试 |
| 扫描不到应用 | 检查完全磁盘访问权限是否已开启 |
| 注入后 App 闪退 | 确认 SIP 已启用，检查 App 版本是否在支持列表中 |
| 无法连接守护进程 | 先查看状态 `launchctl list \| grep hayaku`，如不存在则[重启守护进程](#重启守护进程) |
| 注入/下载报错 | 查看 [Daemon 日志](#daemon-日志) 定位具体错误原因 |
