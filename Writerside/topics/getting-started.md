# 快速上手

本节旨在为正常智力的人类提供使用指导。

## 先决条件 {#prerequisite}

首先，你需要确认你的设备环境。

- 使用 MacBook Pro 2015 及以上机型
- 搭载 macOS >= 10.15
- 已安装 Python 3

[//]: # (此外，请确保你：)

[//]: # ()

[//]: # (CEFR 分数达到 B1（中级，雅思 4.0 - 5.0）或以上)

如果你在使用过程中遇到任何问题，可以参考 [报告问题](report-an-issue.md) 部分在 GitHub 上提出详细问题。

## 常规使用 {#general}

> 目前基于 SwiftUI 的 [InjectGUI](https://github.com/wibus-wee/InjectGUI) 已经发布，但还处于快速开发迭代阶段，其中部分功能可能并不稳定。<br/>
> 尝试 InjectGUI 遇到问题后可以向 Wibus 的仓库中提交 [issues](https://github.com/wibus-wee/InjectGUI/issues)，并回退到命令行注入模式。
> 
> Python 版本的 `秋城落叶_启动.command` 脚本目前还只是过渡阶段， 所以如果遇到问题，请向 QuChenly 提交 [issues](report-an-issue.md)。
> {style="note"}

输入 `y` 自动解决所有问题，打开 App 即可享受。

1. 直接克隆或下载仓库或直接点击下载本项目的 [最新版本 zip](https://github.com/QiuChenly/InjectLib/archive/refs/heads/main.zip)
2. 解压后打开文件夹，双击`秋城落叶_启动.command`文件并输入你的 Mac 密码。
3. 当扫描完成后，你需要做的就是:
    - 扫描完成后，依次输入 `y/n` 决定是否破解当前扫描到的 App。
    - 如果不是需要注入的 App，按 <shortcut>⏎ Enter</shortcut> 跳过。
    - 输入 `y` 自动解决所有问题，打开 App 即可享受。

### 对于程序员或喜欢研究的小伙伴 {#manual}

确保你已安装 [Git](https://git-scm.com/)，并且已切换到正确的工作目录。在终端中运行以下命令：

```Bash
git clone https://github.com/QiuChenly/InjectLib.git
```

这一指令将会自动克隆 InjectLib 仓库，你将会看到与下面类似的文本：

```Bash
正克隆到 'InjectLib'...
remote: Enumerating objects: 584, done.
remote: Counting objects: 100% (209/209), done.
remote: Compressing objects: 100% (92/92), done.
remote: Total 584 (delta 130), reused 142 (delta 105), pack-reused 375
接收对象中: 100% (584/584), 42.47 MiB | 5.21 MiB/s, 完成.
处理 delta 中: 100% (303/303), 完成.
```

现在 InjectLib 已经被克隆到你尊贵的 Mac 上了，通过以下命令即可直接运行注入。

```Bash
cd InjectLib
python3 main.py
```

## 怎样才能知道当前支持的 App 状态？ {#support-status}

请访问 [App 支持状态一览表](app-support-list.md) 查阅。

<note>
该表并不一定实时最新，其中描述的内容会因实际情况而发生改变，也可能存在与事实不一致的描述，仅供参考。
</note>
## 特殊的 App 说明 {#special-app}

- [Adobe](adobe.md)
- [Setapp](setapp.md)
- [Sublime](sublime.md)
- [Parallels Desktop 19](parallels-desktop-19.md)
- [Emby Server](emby-server.md)
