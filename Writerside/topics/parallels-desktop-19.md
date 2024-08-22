# Parallels Desktopp

## Parallels Desktopp 19.1.0 激活必读 {#parallels-desktop-19_1_0}

<link-summary>Parallels Desktopp 19.1.0 激活必读</link-summary>

1. 注入后已经不需要原始人启动就可以直接运行了。
2. 不要command+q强制退出应用，否则注入库没有足够的机会切换文件导致下一次打开的时候显示为未激活。
3. 正常使用，退出时点退出按钮退出应用程序即可，不要乱秀操作。
4. 出现盗版使用提示，屏蔽域名 `desktop.parallels.com` 即可。

> 灵感和解决思路来自于:
>
> [https://github.com/trueToastedCode/ParallelsLab/tree/main](https://github.com/trueToastedCode/ParallelsLab/tree/main)
>
> 非常感谢 [@trueToastedCode](https://github.com/trueToastedCode) 提出的想法和美妙设计，Parallels Desktop 19.1 的破解正是
> @trueToastedCode 的努力研究成果！

## Parallels Desktopp 19.3.1 激活必读 {#parallels-desktop-19_3_1}

> 如果你需要的是 19.1.0，请转到[上一章节](#parallels-desktop-19_1_0)。
> {style="warning"}

### 须知

1. 支持的版本仅为 19.3.1，仅限 Intel 架构
2. Windows 下出现的 Genius Copy 弹框是安装的 Tool 中一个 DLL 检查导致的，后期会提供修改好的 DLL 文件.
3. 如果想使用网络，需要使用 Root 权限绕过苹果的 vm.* 证书签名限制。苹果提供了一个虚拟化框架但是仅提供给某些经过认证的开发者签名。
4. 如果你关闭了 SIP 的话，是可以无视 root 启动的，但是目前没有做兼容，后面会兼容已关闭 SIP 的机器。目前仅以开启了 SIP
   的机器为标准。

### 致谢

1. 感谢来自 MSJ 论坛的 [@CorporateGreed](https://www.macserialjunkie.com/forum/memberlist.php?mode=viewprofile&u=225172)
   。作者 Paragreed 提供的破解思路和部分代码。
2. 参考资料: [MSJ](https://www.macserialjunkie.com/forum/viewtopic.php?p=1174691#p1174691)

### 使用方法

1. 正常运行注入脚本即可。
   注意这里会提示两次，如果你安装的是 19.3.1 就在第二个这里输入 <shortcut>y</shortcut> 确认即可。
2. 如何在开启 SIP 的情况下免密码以 root 权限启动 Parallels Desktop 核心组件以使用网络？
    1. 打开 "自动操作" App。
    2. 复制并修改以下代码中的 “password” 换成你的电脑开机密码。
       ```Shell
       (echo "password" | sudo -S -b /Applications/Parallels\ Desktop.app/Contents/MacOS/prl_client_app &)
       ```
    3. 搜索 `shell` 并点击，会自动创建一个事件。
    4. 可以点击右上角的 “运行” 按钮测试一下能否正常运行 Parallels Desktop，如果没有问题就按下 <shortcut>⌘ Command +
       S</shortcut> 保存。
    5. 起个名字，保存到你喜欢的位置并固定到程序坞中，点击即可无感启动 Parallels Desktop！
