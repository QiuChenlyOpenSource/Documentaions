# Adobe 全家桶激活必读


## 需要屏蔽的域名说明

目前已经不需要手动屏蔽，已经自动处理。

## 错误说明

### Adobe PS CC 2024 / Lightroom CC 启动崩溃

如果你的Lrc启动就退出，那么大概率是你的账号没有试用过，没试用过的账户是会闪退的。

我的补丁原理就是让你的试用期限状态解除，所以即使到期也不会弹框。但是你必须先试用才行。

![Lrc Trial.png](LrcTrial.png)

一般需要你的账号像我这样：
![AccountTrial.png](AccountTrial.png)

一定要试用过才可以哦。

不看我说明上来就问的你掂量一下你的吗有几个。

### Lightroom 提示脱机时不可搜索

如下所示:
![lrcoffline.png](lrcoffline.png)

初步发现是Surge之类的代理工具不知道为什么锁定了请求，如果出现这个情况切换一下代理软件的开关就好了。
![surge.png](surge.png)

重新开关后发现开始正常加载。
![lrconline.png](lrconline.png)

## 我该安装哪个版本？

从官方Adobe CC云中直接在线安装最新版本，确保你的账号试用过产品。

运行注入脚本，直接启动不废话。

## 激活Adobe后出现This non-genius app提示:
![ATTENTION](../imgs/image-10.png)
**解决办法:**

不用代理工具的人想办法屏蔽下面的域名,用Surge的人解决方案简单如下:

屏蔽所有*.adobe.io的域名,
Surge手动增加规则DOMAIN-SUFFIX,值为adobe.io,但是要注意放行lcs-cops.adobe.io为DIRECT,否则App打开就会崩溃。Lr需要加入photo.adobe.io。
![Adobe屏蔽](../imgs/image-9.png)

## 激活

运行脚本注入补丁。 即可完美享受，不受时间限制。