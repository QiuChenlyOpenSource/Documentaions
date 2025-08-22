# App 支持状态一览表

<link-summary>App 支持状态一览｜✅ 61</link-summary>

## 主要的App

- **MAS:** App需要在 Mac App Store 中下载
- **通杀:** 指在一定范围内的版本都可以使用这个破解方法。如果失效请[向我们报告](report-an-issue.md)。
- **版本号:** 仅用于参考，表示支持的最低版本，因为部分 App 任何版本都是通杀的。
- **Telegram 资讯发布群:** https://t.me/+VvqTr-2EFaZhYzA1
- **Telegram 资讯发布频道:** https://t.me/qiuchenlymac
- 本页面App如有失效请在github issues中提单。由于开发者的个人能力实在微薄，难免疏漏，欢迎各位帮忙补充本文档的不足之处。

> **版本号不一定实时更新。**
>
> 所有 App 均在 **SIP Enable** 的情况下测试通过。
>
> 使用本补丁的Mac强制要求启用SIP，禁止关闭SIP使用。SIP未启用导致出现的任何问题禁止报告。
>
> 如果你发现版本号可以被点击，那就说明你可以通过点击直接下载我们建议的 App 版本进行注入。
> {style="note"}

## QiuChenly维护 {id="qiuchenly_1"}

### 多媒体

| App       | 版本                                                                                                                              | Arm | x86 | 备注 |
|-----------|---------------------------------------------------------------------------------------------------------------------------------|-----|-----|----|
| Infuse    | [MAS Latest](https://apps.apple.com/cn/app/infuse-%E6%99%BA%E8%83%BD%E8%A7%86%E9%A2%91%E6%92%AD%E6%94%BE%E5%99%A8/id1136220934) | ✅   | ✅   |    |
| SenPlayer | 5.6.0-5.6.5                                                                                                                     | ✅   | ✅   |    |

### Navicat Apps

| App             |   版本   | 通杀 | Arm | x86 |  备注  |
|-----------------|:------:|:--:|:---:|:---:|:----:|
| Navicat Premium | 官网版本通杀 | ✅  |  ✅  |  ✅  | 官网版本 |

### ProxyMan Apps

本app将会单独发布破解后的dmg。

| App      |     版本      | 通杀 | Arm | x86 |   备注    |
|----------|:-----------:|:--:|:---:|:---:|:-------:|
| ProxyMan | 官网/Setapp版本 | ✅  | ✅️  |  ✅  | 官网版一并支持 |

### Office Apps

| App        |  版本   | 通杀 | Arm | x86 |                                      备注                                      |
|------------|:-----:|:--:|:---:|:---:|:----------------------------------------------------------------------------:|
| Word       | 商店最新版 | ✅  | ✅️  |  ✅  |    [下载地址](https://apps.apple.com/cn/app/microsoft-word/id462054704?mt=12)    |
| Excel      | 商店最新版 | ✅  |  ✅  |  ✅  |   [下载地址](https://apps.apple.com/cn/app/microsoft-excel/id462058435?mt=12)    |
| PowerPoint | 商店最新版 | ✅  |  ✅  |  ✅  | [下载地址](https://apps.apple.com/cn/app/microsoft-powerpoint/id462062816?mt=12) |

#### office MAS商店版本食用须知

1. 由于采用Office内部代码逻辑错误来通杀激活所有版本，所以存在一个问题：打开后无法关闭/退出三件套，但保存文件等功能不受影响。后面有时间优化。

### 违法翻墙

| App   | 版本                                                                      | Arm | x86 | 备注                                               |
|-------|-------------------------------------------------------------------------|----:|----:|--------------------------------------------------|
| Stash | [3.1.0, 4.0.0](https://mac-release-static.stash.ws/Stash-build-372.zip) |   ✅ |   ✅ | [更新地址](https://mac-release.stash.ws/appcast.xml) |
| Surge | Surge 5/6 所有版本                                                          |   ✅ |   ✅ | 通杀                                               |

#### Surge须知:

1. 如果你关闭SIP，则可以使用“上帝之眼”来自动在后台激活启动Surge，可以使用增强模式，通杀所有最新版。
   但这种方式有一定的优缺点:
    1. 支持最新版Surge 6
    2. 支持使用增强模式接管系统

   缺点:
    1. 偶尔会打不开Surge, 强制退出再打开就可以了。(少见)
2. 如果你不想关闭SIP，你可以用本仓库代码直接注入Surge，但版本有两个选择：
    1. 使用Surge 2838版本, 支持增强模式。
    2. 使用Surge 6最新版本, 无法使用增强模式。

   根据你的选择不同，你需要另有取舍。

有关上帝之眼的安装信息，请访问:
解压的仓库zip文件夹/上帝之眼/readme.md 文件查阅安装方式 或
访问[在线镜像](https://git.sr.ht/~qiuchenly/CoreInject/tree/c7030974c23c1b9541827af865afab7b808656fe/item/%E4%B8%8A%E5%B8%9D%E4%B9%8B%E7%9C%BC/readme.md)
网页.

### Other Apps

| App                                        |                                                                                   版本                                                                                    | Arm | x86 |                         备注                         |
|--------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:---:|:---:|:--------------------------------------------------:|
| Macs Fan Control                           |                                                     [Latest](https://crystalidea.com/downloads/macsfancontrol.zip)                                                      |  ✅  |  ✅  |                                                    |
| DevUtils                                   |                                                           [Latest](https://devutils.com/archives/appcast.xml)                                                           |  ✅  |  ✅  |                    功能可用 激活状态懒得改                    |
| MP3Tag                                     |                                                          [1.9.2](https://updates.mp3tag.app/Mp3tag-1.9.2.zip)                                                           |  ✅  |  ✅  |                      序列号随便输入                       |
| Bartender 5                                |                                                [5.3.6, 5.3.8](https://www.macbartender.com/B2/updates/TestAppcastB5.xml)                                                |  ✅  |  ✅  |                                                    |
| 花见壁纸                                       |                 [Latest](https://apps.apple.com/cn/app/%E8%8A%B1%E8%A6%8B-4k%E5%8A%A8%E6%80%81%E5%A3%81%E7%BA%B8%E5%BC%95%E6%93%8E/id1456235760?mt=12)                  |  ✅  |  ✅  |                                                    | 
| Paste                                      |                                                                                  4.1.2                                                                                  |  ✅  |  ✅  |                      全新算法，杀！                       |
| TablePlus                                  |                                                        [通杀](https://tableplus.com/release/osx/tableplus_latest)                                                         |  ✅  |  ✅  |                                                    |
| Transmit 5                                 |                                                                                  5.9.2                                                                                  |  ✅  |  ✅  |                   需要从App Store下载                   |
| Widgetter                                  | [通杀](https://apps.apple.com/cn/app/widgetter-%E5%B0%8F%E5%B7%A5%E5%85%B7-%E6%A1%8C%E9%9D%A2%E5%A3%81%E7%BA%B8-%E4%B8%BB%E9%A2%98-%E5%B1%8F%E4%BF%9D/id1553223588?mt=12) |  ✅  |  ✅  |                    MAS下载 激活全部功能                    |
| QCAD-Intel                                 |                                            [3.28.2](https://www.qcad.org/archives/qcad/qcad-3.28.2-trial-macos-10.14-13.dmg)                                            |  ❌  |  ✅  |                       ARM懒得弄                       |
| Bandizip 365                               |                                                                                  7.34                                                                                   |  ✅  |  ✅  |                        订阅版                         |
| Bandizip                                   |                                                                                  7.28                                                                                   |  ✅  |  ✅  |                        买断版                         |
| Typora                                     |                                                             [通杀](https://download.typora.io/mac/Typora.dmg)                                                             |  ✅  |  ✅  |                                                    |
| Medis                                      |                                                            [3100](https://api.getmedis.com/medis-latest.zip)                                                            |  ✅  |  ✅  |                      仅支持3100                       |
| Camtasia 2023                              |                                                      [2023.3.4(124306)通杀](https://www.techsmith.com/camtasia.html)                                                      |  ✅  |  ✅  |                      通殺不要問為什麼                      |
| UlyssesMac                                 |          [MAS版本](https://apps.apple.com/us/app/ulysses-%E5%86%99%E4%BD%9C-%E7%AC%94%E8%AE%B0-%E6%97%A5%E8%AE%B0-%E5%8D%9A%E5%AE%A2/id1225570693?l=zh-Hans-CN)           |  ✅  |  ✅  |                  苹果应用商店版本,后续版本通杀                   |
| MindMac                                    |                                         [官网版本](https://github.com/MindMacApp/MindMac/releases/download/1.8.7/MindMac_1.8.7.dmg)                                         |  ✅  |  ✅  |                  随便输入邮箱激活码6位以上即可                   |
| MediaMate                                  |                                                               [通杀](https://wouter01.github.io/MediaMate/)                                                               |  ✅  |  ✅  |                  注入后使用生成的序列号直接激活                   |
| LuminarNeo Mas版本                           |                                        [1.22.0-通杀](https://apps.apple.com/cn/app/luminar-neo-ai-photo-editor/id1584373150?mt=12)                                        |  ✅  |  ✅  |               直接注入即可激活。如果没有意外后续版本通杀。               |
| Sensei 系统信息查看工具                            |                                                            [通杀](https://s3.amazonaws.com/cindori/Sensei.dmg)                                                            |  ✅  |  ✅  |                  随便输入邮箱激活码6位以上即可                   |
| Setapp 全系列                                 |                                     [当前仅限Setapp-99版本](https://dl.devmate.com/com.setapp.DesktopClient/99/1739545743/Setapp-99.zip)                                      |  ✅  |  ✅  |                 [必读说明](setapp.md)                  |
| MarginNote 3                               |                                                     [通杀](https://dist.marginnote.cn/marginnote3.xml?test=1&beta=1)                                                      |  ✅  |  ✅  |                无法使用云同步 签名后的app通病 无解                |
| Parallels Desktop 20.2.0 + Parallels Tools |                                                             [版权问题,请点击访问TG下载](https://t.me/qiuchenlymac/568)                                                             |  ✅  |  ✅  |                    版权！版权！NMSL！                     |
| xmind                                      |                                                              [25.01.01061](https://t.me/qiuchenlymac/507)                                                               |  ✅  |  ✅  |                    版权！版权！NMSL！                     |
| MacFanControl Windows 版本                   |                                                                      https://t.me/qiuchenlymac/590                                                                      |  ❌  |  ✅  |               这是windows下的直装破解版本 别下错了               |
| Final Cut Pro Trial                        |                [11.0.1](https://secure-appldnld.apple.com/Final_Cut_Pro_X/072-44727-20250131-13ba994a-32a9-412f-9660-8512c1592a94/FinalCutProTrial.dmg)                 |  ✅  |  ✅  |                      后续版本通杀破解                      |
| Logic Pro                                  |                     [11.1.2](https://secure-appldnld.apple.com/LogicPro/052-95157-20250122-9153EDA5-989A-44DC-AFA4-D82D95708122/LogicProTrial.dmg)                      |  ✅  |  ✅  |                      后续版本通杀破解                      |
| Parallels Desktop                          |                                                             [20.3.0-20.4.1](https://t.me/qiuchenlymac/568)                                                              |  ✅  |  ✅  |    支持版本：20.3.0, 20.3.1, 20.3.2, 20.4.0, 20.4.1     |
| 亿图图示 EdrawMax                              |                                              [14.1.3](https://cc-download.edrawsoft.cn/cbs_down/edraw-max_cn_full5381.dmg)                                              |  ✅  |  ✅  |                                                    |
| 亿图脑图 MindMaster                            |                                             [12.2.4](https://cc-download.edrawsoft.cn/cbs_down/mindmaster_cn_full5379.dmg)                                              |  ✅  |  ✅  |                                                    |
| 亿图项目管理软件 EdrawProj                         |                                              [3.7.1](https://cc-download.edrawsoft.cn/cbs_down/edrawproj_cn_full5383.dmg)                                               |  ✅  |  ✅  |                                                    |
| CleanMyMac 5                               |                                                                                Setapp版本                                                                                 |  ✅  |  ✅  | 用Setapp下载再注入，这是注入说明: https://t.me/qiuchenlymac/577 |
| TablePlus                                  |                                                                                Setapp版本                                                                                 |  ✅  |  ✅  |                    用Setapp下载再注入                    |
| iStat Menus                                |                                                                              Setapp版本 7.10                                                                              |  ✅  |  ✅  | 用Setapp下载再注入，这是注入说明: https://t.me/qiuchenlymac/579 |

### Adobe 系列应用

| App               | 版本                                                                    | Arm | x86 | 备注     |
|-------------------|-----------------------------------------------------------------------|-----|-----|--------|
| Photoshop         | [通杀](https://www.adobe.com/products/photoshop.html)                   | ✅   | ✅   | 支持所有版本 |
| Illustrator       | [通杀](https://www.adobe.com/products/illustrator.html)                 | ✅   | ✅   | 支持所有版本 |
| After Effects     | [通杀](https://www.adobe.com/products/aftereffects.html)                | ✅   | ✅   | 支持所有版本 |
| Premiere Pro      | [通杀](https://www.adobe.com/products/premiere.html)                    | ✅   | ✅   | 支持所有版本 |
| Lightroom         | [通杀](https://www.adobe.com/products/photoshop-lightroom.html)         | ✅   | ✅   | 支持所有版本 |
| Lightroom Classic | [通杀](https://www.adobe.com/products/photoshop-lightroom-classic.html) | ✅   | ✅   | 支持所有版本 |
| Media Encoder     | [通杀](https://www.adobe.com/products/media-encoder.html)               | ✅   | ✅   | 支持所有版本 |
| InDesign          | [通杀](https://www.adobe.com/products/indesign.html)                    | ✅   | ✅   | 支持所有版本 |
| InCopy            | [通杀](https://www.adobe.com/products/incopy.html)                      | ✅   | ✅   | 支持所有版本 |
| Audition          | [通杀](https://www.adobe.com/products/audition.html)                    | ✅   | ✅   | 支持所有版本 |
| Animate           | [通杀](https://www.adobe.com/products/animate.html)                     | ✅   | ✅   | 支持所有版本 |
| Acrobat Pro       | [通杀](https://www.adobe.com/products/acrobat-pro.html)                 | ✅   | ✅   | 支持所有版本 |
| Distiller         | [通杀](https://www.adobe.com/products/acrobat/distiller.html)           | ✅   | ✅   | 支持所有版本 |

#### Adobe 产品使用说明

**重要提示：**
1. **无需试用** - Adobe产品安装后直接注入即可使用，不需要先试用
2. **无需登录账户** - 不要登录任何Adobe账户，直接使用即可
3. **支持所有版本** - 包括最新版本和未来版本，通杀所有Adobe产品
4. **离线使用** - 注入后可以完全离线使用，无需网络连接

**使用方法：**
1. 下载并安装Adobe产品（任意版本）
2. 使用InjectLib注入对应产品
3. 直接打开使用，无需任何额外操作

**注意事项：**
- 不要登录Adobe Creative Cloud账户
- 不要点击试用按钮
- 注入后即可正常使用所有功能
- 支持神经滤镜等高级功能（需要离线安装）

### Autodesk 系列应用

| App     | 版本                                                                     | Arm | x86 | 备注             |
|---------|------------------------------------------------------------------------|-----|-----|----------------|
| Maya    | [2024/2026版本](https://www.autodesk.com/products/maya/overview)         | ✅   | ✅   | 支持多个版本，需要注入主程序 |
| AutoCAD | [2024/2025/2026版本](https://www.autodesk.com/products/autocad/overview) | ✅   | ✅   | 支持多个版本，需要注入主程序 |

### 开发工具

| App                 | 版本                                                      | Arm | x86 | 备注              |
|---------------------|---------------------------------------------------------|-----|-----|-----------------|
| Hopper Disassembler | [5.16.0-5.18.1](https://hopperapp.com/)                 | ✅   | ✅   | 仅限QiuChenly特供版本 |
| IDA Pro             | [9.0.241217, 9.1.250226](https://hex-rays.com/ida-pro/) | ✅   | ✅   | 需要额外脚本处理        |
| IDA Free            | [最新版本](https://hex-rays.com/ida-free/)                  | ✅   | ✅   | 需要额外脚本处理        |

### 屏幕录制工具

| App            | 版本                                              | Arm | x86 | 备注       |
|----------------|-------------------------------------------------|-----|-----|----------|
| ScreenSage Pro | [最新版本](https://screensage.app/)                 | ✅   | ✅   | 支持所有版本   |
| Camtasia 2023  | [最新版本](https://www.techsmith.com/camtasia.html) | ✅   | ✅   | 需要额外脚本处理 |

## X1a0He维护

| App         | 版本                                                                         | Arm | x86 | 备注 |
|-------------|----------------------------------------------------------------------------|:---:|:---:|----|
| BuhoCleaner | [Latest](https://www.drbuho.com/buho-public-files/buhocleaner/appcast.xml) |  ✅  |  ✅  |    |

### Nektony Apps

| App                       |                                               版本                                               | Arm | x86 | 备注 |
|---------------------------|:----------------------------------------------------------------------------------------------:|:---:|:---:|:--:|
| App Cleaner & Uninstaller |      [Latest](https://download.nektony.com/pro-support/v3/app-cleaner/update/update.xml)       |  ✅  |  ✅  |    |
| MacCleaner Pro            |    [Latest](https://download.nektony.com/pro-support/v3/mac-cleaner-pro/update/update.xml)     |  ✅  |  ✅  |    |
| Duplicate File Finder     | [Latest](https://download.nektony.com/pro-support/v3/duplicates-finder-site/update/update.xml) |  ✅  |  ✅  |    |
| Disk Space Analyzer       |      [Latest](https://download.nektony.com/pro-support/v3/disk-expert/update/update.xml)       |  ✅  |  ✅  |    |

### Sublime Apps

| App           |                                                                        版本                                                                         | Arm | x86 | 备注 |
|---------------|:-------------------------------------------------------------------------------------------------------------------------------------------------:|:---:|:---:|:--:|
| Sublime Text  | [Latest Dev](https://www.sublimetext.com/updates/4/dev_update_check) & [Latest Stable](https://www.sublimetext.com/updates/4/stable_update_check) |  ✅  |  ✅  |    |
| Sublime Merge |  [Latest Dev](https://www.sublimemerge.com/updates/dev_update_check) & [Latest Stable](https://www.sublimemerge.com/updates/stable_update_check)  |  ✅  |  ✅  |    |
| MWeb Pro      |                                               [Latest](https://cdn.mwebapp.cn/sparkle/appcast.xml)                                                |  ✅  |  ✅  |    |

### 其他 Apps

| App                         |                                                                     版本                                                                      | Arm | x86 |       备注       |
|-----------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------:|:---:|:---:|:--------------:|
| CleanShot                   |                                     [4.6.2](https://updates.getcleanshot.com/v3/CleanShot-X-4.6.2.dmg)                                      |  ✅  |  ✅  |                |
| Autodesk CAD 2025.x         |    [2025.x](https://trial2.autodesk.com/NetSWDLD/2025/ACDMAC/5B190BA4-3356-3152-AA97-BE2E484F6F3D/ESD/Autodesk_AutoCAD_2025.1_macOS.dmg)    |  ✅  |  ✅  | 2025+2026测试版通杀 |
| Autodesk CAD 2026 正式版       |                            [2026稳定版](https://mega.nz/file/la8VjaLb#VapCO6j-I4YDjstSEbLphIJblyEqAQYJek_DCQWqYWc)                             |  ✅  |  ✅  |      注入通杀      |
| Autodesk Maya 2024.2 Update | [2024.2 Update](https://dds.autodesk.com/NetSWDLD/2024/MAYA/F7AB6D63-1270-31AE-8B47-C2FBE41B09F0/SFX/Autodesk_Maya_2024_2_Update_macOS.dmg) |  ✅  |  ✅  |     新版本没弄      |
| Moment                      |                           [通杀](https://fireball.studio/api/release_manager/downloads/studio.fireball.moment.dmg)                            |  ✅  |  ✅  |                |

## 其他贡献者

| App | 版本 | ARM64 | Intel | 备注 | 维护者 |
|-----|----|------:|------:|----|-----|

## SetApp

- 如果某个App出现激活问题，可以提issues并在评论区at维护者。

| 名称                  | 版本 | Arm | x86 | 备注                | 维护者       |
|---------------------|----|-----|-----|-------------------|-----------|
| SetApp 大部分 App 注入通杀 | /  | ✅   | ✅   | [特殊说明](setapp.md) | QiuChenly |

## Adobes

#### 当前QiuChenly支持的:

需要注意:

1. 不要登录自己账户。
2. PhotoShop神经滤镜可以离线安装使用。使用方法：https://t.me/qiuchenlymac/533
3. 所有版本可以离线使用。
4. 新版本如无意外均通杀。不要再问新版本能不能破解了。
5. 使用xiaohe写的AdobeDownload下载器下载完直接安装即可，无需使用官方Adobe CC登录账号绕过试用。当前破解的所有版本均不需要试用，注入即可激活。

| Adobe               | 版本             | ARM64 | Intel | 特殊说明 全家桶全部支持打开SIP下使用 | 维护者                                       | 维护状态 |
|:--------------------|:---------------|:-----:|:-----:|:---------------------|:------------------------------------------|:-----|
| Adobe Media Encoder | 2025 25.1      |   ✅   |   ✅   | 无需登录账户可以正常使用         | [QiuChenly](https://github.com/QiuChenly) | ✅    | 
| Adobe After Effects | 2025 25.1      |   ✅   |   ✅   | 无需登录账户可以正常使用         | [QiuChenly](https://github.com/QiuChenly) | ✅    | 
| Adobe Animate       | 2024 24.0.7    |   ✅   |   ✅   | 无需登录账户可以正常使用         | [QiuChenly](https://github.com/QiuChenly) | ✅    | 
| Adobe Audition      | 2025 25.0      |   ✅   |   ✅   | 无需登录账户可以正常使用         | [QiuChenly](https://github.com/QiuChenly) | ✅    | 
| Adobe Premiere Pro  | 2025 25.1      |   ✅   |   ✅   | 无需登录账户可以正常使用         | [QiuChenly](https://github.com/QiuChenly) | ✅    | 
| Adobe Acrobat DC    | 25.001.20432.7 |   ✅   |   ✅   | 无需登录账户可以正常使用         | [QiuChenly](https://github.com/QiuChenly) | ✅    | 
| Adobe InCopy        | 2025 20.2      |   ✅   |   ✅   | 无需登录账户可以正常使用         | [QiuChenly](https://github.com/QiuChenly) | ✅    | 
| Adobe InDesign      | 2025 20.2      |   ✅   |   ✅   | 无需登录账户可以正常使用         | [QiuChenly](https://github.com/QiuChenly) | ✅    | 
| Adobe Illustrator   | 2025 29.3.1    |   ✅   |   ✅   | 无需登录账户可以正常使用         | [QiuChenly](https://github.com/QiuChenly) | ✅    | 
| Adobe Photoshop     | 2025 26.4.1    |   ✅   |   ✅   | 无需登录账户可以正常使用         | [QiuChenly](https://github.com/QiuChenly) | ✅    | 
| Adobe Lightroom     | CC 8.2         |   ✅   |   ✅   | 无需登录账户可以正常使用         | [QiuChenly](https://github.com/QiuChenly) | ✅    | 
| Adobe Lightroom     | Classic 14.2   |   ✅   |   ✅   | 无需登录账户可以正常使用         | [QiuChenly](https://github.com/QiuChenly) | ✅    | 

## 停止维护 ❌

| 名称                                              |                                                                                                                         版本                                                                                                                          | Arm | x86 | 备注         |
|:------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|-----|:---:|:-----------|
| Elpass                                          |                                                                                                  [下载地址](https://elpass.app/macos/appcast-beta.xml)                                                                                                  | ✅   |  ✅  | 懒          |
| Affinity Photo 2                                |                                                                                   [MAS Latest](https://apps.apple.com/cn/app/affinity-photo-2/id1616822987?mt=12)                                                                                   | ✅   |  ✅  | 懒          |
| Affinity Designer 2                             |                                                                                 [MAS Latest](https://apps.apple.com/cn/app/affinity-designer-2/id1616831348?mt=12)                                                                                  | ✅   |  ✅  | 懒          |
| Affinity Publisher 2                            |                                                                                 [MAS Latest](https://apps.apple.com/cn/app/affinity-publisher-2/id1606941598?mt=12)                                                                                 | ✅   |  ✅  | 懒          |
| iShot                                           | [MAS Latest](https://apps.apple.com/cn/app/ishot-%E4%BC%98%E7%A7%80%E7%9A%84%E6%88%AA%E5%9B%BE%E8%B4%B4%E5%9B%BE%E5%BD%95%E5%B1%8F%E5%BD%95%E9%9F%B3ocr%E7%BF%BB%E8%AF%91%E5%8F%96%E8%89%B2%E6%A0%87%E6%B3%A8%E5%B7%A5%E5%85%B7/id1485844094?mt=12) | ✅   |  ✅  | 懒          |
| 解优2                                             |                                      [MAS Latest](https://apps.apple.com/cn/app/%E8%A7%A3%E4%BC%98-2-%E4%B8%93%E4%B8%9A%E7%9A%84-7z-rar-zip-%E8%A7%A3%E5%8E%8B%E7%BC%A9%E5%B7%A5%E5%85%B7/id1525983573?mt=12)                                       | ✅   |  ✅  | 懒          |
| Omi录屏专家                                         |                                   [MAS Latest](https://apps.apple.com/cn/app/%E5%BD%95%E5%B1%8F%E4%B8%93%E5%AE%B6omi-%E5%B1%8F%E5%B9%95%E5%BD%95%E5%88%B6%E7%BC%96%E8%BE%91%E8%BD%AF%E4%BB%B6/id1592987853?mt=12)                                   | ✅   |  ✅  | 懒          |
| OmniPlayer                                      |                                                     [MAS Latest](https://apps.apple.com/cn/app/omni-player-%E9%AB%98%E6%B8%85%E5%BD%B1%E9%9F%B3%E6%92%AD%E6%94%BE%E5%99%A8/id1470926410?mt=12)                                                      | ✅   |  ✅  | 懒          |
| Xnip                                            |                                                                          [通殺](https://apps.apple.com/cn/app/xnip-%E6%88%AA%E5%9B%BE-%E6%A0%87%E6%B3%A8/id1221250572?mt=12)                                                                          | ✅   |  ✅  | 通殺不要問為什麼   |
| Surge                                           |                                                                                                        [2589](https://t.me/qiuchenlymac/365)                                                                                                        | ✅   |  ✅  | SB太多，自用不发了 |
| com.edrawsoft.edrawmax/com.edrawsoft.mindmaster |                                                                                                                       自己去官网下                                                                                                                        | ✅   |  ✅  | 我用不到       |
