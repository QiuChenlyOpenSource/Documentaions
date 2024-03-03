# 如何向QiuChenly报告崩溃问题

**这是一份报告示例.**

## 提Issues示例
你只需要点击右上角的复制按钮，然后粘贴到Issues中，修改对应的数据/贴上你的详细截图即可。

```
## Bug 描述

测试发现 xxxx 皆无法激活

本机信息：
    ```
    System:
    OS: macOS xx
    CPU: xxx
    Memory: xx GB
    SIP: off/on
    黑白苹果?: 黑苹果
    如果是黑苹果，请提供更多信息: 
        是否修改了nvram的内核启动参数: 是，我用的是xxxx -v alc-layout-id=xx等
        SIP状态: off/on
        是否使用了OpenCore LegecyPatcher等需要修改系统文件的工具: 是，我用了xxx，且关闭了xxx
        还有什么需要补充的环境信息吗: 有 我的电脑xxxxxxxx
    ```

## 复现

打开上述软件，输入xxxx后，点击xxxx，软件发生闪退/崩溃。

许可证信息示例如下：

    ```
    xxxxx
    xxxxxxx
    ```

## 期望行为
xxxxx

[截图]

## 实际行为
xxxxx

[截图]

## 其他说明

其中测试的时候 xxx 的崩溃日志如下：[crash_log.log](https://github.com/QiuChenlyOpenSource/91QiuChen/files/14393365/crash_log.log)

终端也有报错返回：

    ```
    *** Terminating app due to uncaught exception 'NSInvalidArgumentException', reason: '*** -[__NSCFString rangeOfString:options:range:locale:]: nil argument'
    *** First throw call stack:
    (
    0   CoreFoundation                      0x0000000185a20570 __exceptionPreprocess + 176
    1   libobjc.A.dylib                     0x0000000185511eb4 objc_exception_throw + 60
    2   Foundation                          0x0000000186a5f704 -[NSPathStore2 copy] + 0
    3   Foundation                          0x0000000186a7b4e8 -[NSString containsString:] + 56
    4   Paddle                              0x00000001018457a8 ___ZN50RwI6cJc1aAXTegoQg8YY8d1P5TAR1XVECn1DguoRXOwe6hSIEI50qglNWOtHZo6tTe9LHbwJNVbrGgCe6X15VE9hDLhh5jV5gmSkGvEP8NSStringP12NSDictionaryU13block_pointerFvP50Kiw9LIHkjapxVTINBrPMxayBIkhCSpcaPMD4N9a
    5   CFNetwork                           0x000000018abfbd5c CFURLCredentialStorageCopyAllCredentials + 27992
    6   CFNetwork                           0x000000018ab8e6e0 CFURLRequestCopyAllHTTPHeaderFields + 7880
    7   libdispatch.dylib                   0x000000018571acb8 _dispatch_call_block_and_release + 32
    8   libdispatch.dylib                   0x000000018571c910 _dispatch_client_callout + 20
    9   libdispatch.dylib                   0x0000000185723ea4 _dispatch_lane_serial_drain + 748
    10  libdispatch.dylib                   0x0000000185724a08 _dispatch_lane_invoke + 432
    11  libdispatch.dylib                   0x000000018572f61c _dispatch_root_queue_drain_deferred_wlh + 288
    12  libdispatch.dylib                   0x000000018572ee90 _dispatch_workloop_worker_thread + 404
    13  libsystem_pthread.dylib             0x00000001858ca114 _pthread_wqthread + 288
    14  libsystem_pthread.dylib             0x00000001858c8e30 start_wqthread + 8
    )
    ```

## 已确保 xxx 更新到最新版本
![screenshot](https://github.com/QiuChenlyOpenSource/91QiuChen/assets/62133302/ae33dc8c-a8cf-425e-905d-d0f40f074901)
```