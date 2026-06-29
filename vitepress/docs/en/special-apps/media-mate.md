---
title: MediaMate
description: MediaMate activation guide
---

# MediaMate

```bash
echo $(echo $(ioreg -rd1 -c IOPlatformExpertDevice | awk '/IOPlatformUUID/ { print $3; }' | tr -d '"') | tr -d '-' | tr '0123456789' 'ABCDEFGHIJ' | sed 's/.\{9\}/&-/g')
```

1. After injecting the patch, run the command in the terminal to get your activation code.
2. Open the app and enter the activation code to activate.
3. The activation code is fake; do not use it as a real one.
