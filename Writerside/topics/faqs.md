# 常见问题

[打开 App 提示 “文件已损坏” 该怎么办？](file-is-damaged.md)

[App 想要访问钥匙串中的密钥，是正常的吗？](request-keychain-access.md)

## 注入提示 "可能危害Mac安全或泄露隐私的恶意软件"
![image_4.png](image_4.png)

打开设置-隐私与安全性-安全性，点击始终允许。

## Helper文件签名失败/xxx签名失败
![image_5.png](image_5.png)

你应该用原始app文件进行注入，出现错误要先保证是对官方原版App进行操作。如果之前修改过了app或者注入出错也会修改app，后面再注入就会遇到问题。

本案例中，此用户是重复注入了一个已经注入过的App导致的报错。