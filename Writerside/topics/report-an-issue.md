# 报告问题

## 在 Github 上报告问题

* 前往 <https://github.com/QiuChenly/InjectLib/issues/new>
* 复制并粘贴下方模板
* 修改花括号和方括号为实际内容

````md
## Issue description

Tests found that {applicationName} cannot be activated
{moreInfo}

## Device Information:

```
System: macOS {version}
CPU   : {model}
Memory: {size}
SIP   : {off/on}
Hackintosh or Macintosh: {Hackintosh/Macintosh}

If it is a Hackintosh, please provide more information:
Have you modified the kernel startup parameters of nvram?
Yes, I used {parameter} -v alc-layout-id={parameter}, etc.

Have you used tools such as OpenCore LegecyPatcher that require modifying system files?
Yes, I used {toolName} and turned off {...}

Is there any additional environmental information that needs to be added?
Yes, My computer is {...}
```

## Reproduction

- Open the above software
- enter {...}
- click {...}
- the software will flash back/crash.

An example of license information is as follows:

```
{...}
```

## Expected behavior

{...}

[Screenshot]

## Actual behavior

{...}

[Screenshot]

## Other notes

During the test, the crash log of xxx is as follows: [crash_log.log]
The terminal also returns an error:

```
*** Terminating app due to uncaught exception 'NSInvalidArgumentException', reason: '*** -[__NSCFString rangeOfString:options:range:locale:]: nil argument'
*** First throw call stack:
(
0 CoreFoundation 0x0000000185a20570 __exceptionPreprocess + 176
1 libobjc.A.dylib 0x0000000185511eb4 objc_exception_throw + 60 2 Foundation 0x0000000186a5f704 -[NSPathStore2 copy] + 0 3 Foundation 0x0000000186a7b4e8 -[NSString containsString:] + 56 4 Paddle 0x0000 0001018457a8 ___ZN50RwI6cJc1aAXTegoQg8YY8d1P5TAR1XVECn1DguoRXOwe6hSIEI50qglNWOtHZo6tTe9LHbwJNVbrGgCe6X15VE9hDLhh5jV5gmSkGvEP8NSStringP12NSDictionaryU13block_pointerFvP50Kiw9LIHkjapxVTINBrPMxayBIkhCSpcaPMD4N9a
5   CFNetwork                           0x000000018abfbd5c CFURLCredentialStorageCopyAllCredentials + 27992
6   CFNetwork                           0x000000018ab8e6e0 CFURLRequestCopyAllHTTPHeaderFields + 7880
7   libdispatch.dylib 0x000000018571acb8 _dispatch_call_block_and_release + 32 8 libdispatch.dylib 0x000000018571c910 _dispatch_client_callout + 20 9 libdispatch.dylib 0x0000000185723ea4 _dispatch_lane_serial_drain + 7 48 10 libdispatch.dylib 0x0000000185724a08 _dispatch_lane_invoke + 432 11 libdispatch.dylib 0x000000018572f61c _dispatch_root_queue_drain_deferred_wlh + 288 12 libdispatch.dylib 0x000000018572ee90 _dispatch_workloop_worker_thread + 404
13 libsystem_pthread.dylib 0x00000001858ca114 _pthread_wqthread + 288
14 libsystem_pthread.dylib 0x00000001858c8e30 start_wqthread + 8
)
```

## Ensure that {...} is updated to the latest version

[screenshot]
````

[//]: # (## Create a Support Ticket on YouTrack)

[//]: # ()

[//]: # (* Go to https://inject.youtrack.cloud/form/d3940ed9-8d62-4bac-bc30-6d2399e86045)

[//]: # (* Similar steps to Report an Issue on GitHub)