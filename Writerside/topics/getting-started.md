# 快速上手

本节旨在为正常智力的人类提供使用指导。

## 先决条件 {#prerequisite}

首先，你需要确认你的设备环境。

- 使用 MacBook Pro 2015 及以上机型
- 搭载 macOS >= 10.13 (High Sierra)
- **重要：必须启用SIP (System Integrity Protection)**

如果你在使用过程中遇到任何问题，可以参考 [报告问题](report-an-issue.md) 部分在 GitHub 上提出详细问题。

## 常规使用 {#general}

1. 直接克隆或下载仓库或直接点击下载本项目的 [最新版本 仓库地址](https://git.sr.ht/~qiuchenly/CoreInject)
2. 解压后打开文件夹，双击`秋城落叶_启动.command`文件并输入你的 Mac 密码。
3. 当扫描完成后，你需要做的就是:
    - 扫描完成后，输入对应App的序号来注入你想要破解的 App。

### 对于程序员 {#manual}

确保你已安装 [Git](https://git-scm.com/)，并且已切换到正确的工作目录。在终端中运行以下命令：

```Bash
git clone https://git.sr.ht/~qiuchenly/CoreInject --depth=1
```

这一指令将会自动克隆 InjectLib 仓库，你将会看到与下面类似的文本：

```Bash
正克隆到 'CoreInject'...
remote: Enumerating objects: 584, done.
remote: Counting objects: 100% (209/209), done.
remote: Compressing objects: 100% (92/92), done.
remote: Total 584 (delta 130), reused 142 (delta 105), pack-reused 375
接收对象中: 100% (584/584), 42.47 MiB | 5.21 MiB/s, 完成.
处理 delta 中: 100% (303/303), 完成.
```

现在 CoreInject 已经被克隆到你尊贵的 Mac 上了，直接运行command文件运行:

```Bash
秋城落叶_启动.command
```

## 怎样才能知道当前支持的 App 状态？ {#support-status}

请访问 [App 支持状态一览表](app-support-list.md) 查阅。

<note>
该表并不一定实时最新，其中描述的内容会因实际情况而发生改变，也可能存在与事实不一致的描述，仅供参考。由于本文档只有QiuChenly一个人维护，难免不及时或者存在错误，请各位有能力的朋友一起纠正或提交错误更正，不胜感激。
</note>

- 最低运行要求：macOS 11.0
- Dylib编译SDK：macOS 15.0

## 特殊的 App 说明 {#special-app}

- [Adobe](adobe.md)
- [Setapp](setapp.md)
- [Sublime](sublime.md)
- [Emby Server](emby-server.md)
