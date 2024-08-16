# Setapp激活必读

**SetApp使用问题解答**

## App自动更新提示Sign不匹配

手动找最新版下，这个问题没有解决的必要性。
[SetApp Spark更新地址](https://store.setapp.com/updates/beta.xml)

## 特殊说明

由于Setapp是主打在线服务，我们提供了一个一键登录的链接，你可以执行注入后点击这个链接直接登录SetApp，我已经在代码中自动处理了大部分的事情。\
[点击登录SetApp](setapp://system/sign_in?access_token=fuckingyoutoken&user_email=qiuchenly@outlook.com)

## 注入说明
1. 请你先用 [App Cleaner & Uninstaller](https://download.nektony.com/pro-support/v3/app-cleaner/update/update.xml) 完全卸载 Setapp，不要用 BuhoCleaner 卸载
2. 到上面的 [SetApp Spark更新地址](https://store.setapp.com/updates/beta.xml) 下载最新版
3. 下载完将 Setapp 拖入到 「Application」或 「应用程序」，不要打开，不要打开，不要打开
4. 直接运行注入，Setapp 和 SetappAgent都要注入，只要你看到Setapp开头的都要注入
5. 注入完成后打开，如果提示已损坏，先看下面的步骤，然后再在「Application」或 「应用程序」右键打开
6. 看到QiuChenly弹窗即表示成功，没看到就是注入失败，懂？

> 如果你不想卸载，那就按照以下步骤执行
> - 退出你的Setapp，怎么退？不是 Command + Q，而是在Setapp里找到右上角的头像，点击后选择退出
> - 打开你的终端，输入
> ```Bash
> open $HOME/Library/Application\ Support
> ```
> 找到 Setapp 文件夹，Command + delete 删掉
> 重新注入

**看到QiuChenly弹窗即表示成功！！！以上步骤操作后，还不行的话，证明你是个弱智，卸载吧**

## 出现报错

![image_1.png](image_1.png)

去设置里手动允许“仍要打开”，就可以继续打开了。
![image.png](image.png)

![image_2.png](image_2.png)

## 一键登录出现密码

![image_3.png](image_3.png)
直接点击拒绝即可。

## 下载完app后，我还需要重新注入吗？

是的。下载完的app是官方版本，直接打开会报错1701，需要手动执行脚本，会自动检测到你的app，注入它即可。