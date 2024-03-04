# MediaMate激活必读
```Bash
echo $(echo $(ioreg -rd1 -c IOPlatformExpertDevice | awk '/IOPlatformUUID/ { print $3; }' | tr -d '"') | tr -d '-' | tr '0123456789' 'ABCDEFGHIJ' | sed 's/.\{9\}/&-/g')
```

1. 注入补丁后在终端中执行获取自己的激活码 
2. 打开App输入激活码激活
3. 激活码是假的，不要当成真的去用