---
title: Sublime
description: Sublime series app injection guide
---

# Sublime

## Sublime Text

```text
----- BEGIN LICENSE -----
秋城落叶@outlook.com
Unlimited User License
EA7E-8888888
88888888888888888888888888888888
88888888888888888888888888888888
88888888888888888888888888888888
88888888888888888888888888888888
88888888888888888888888888888888
88888888888888888888888888888888
88888888888888888888888888888888
88888888888888888888888888888888
------ END LICENSE ------
```

## Sublime Merge

```text
-----BEGIN LICENSE-----
qiuchenly@outlook.com
Unlimited User License
E52D-73WX6E7KFW
3WSY28516XZBBBUAKIE3K62SPQ9TDRHV
TDLUO8M6ADKRAA888FEXKAPAF0HJE60W
92AVK103WAW1294SMQI9QJBEL4OT646C
DT5KM9OO0JWVCAKZV2SKTVQ395W9CM74
CY24F9VXU6AHJ2ZD41UW6MXEBBGBMVJT
MDWWA666OTZL1UHLULMPLYKIKRK7CLFJ
VASMFT7HHGHZK2LLO09R2ECMV9SEEWMK
E64V59PRUXKBKZBA9404KXIXDJRK4TOC
-----END LICENSE-----
```

## Sublime Text 4 Package Control cannot install packages

This is due to a problem with the PackageControl plugin in the official app. Press **⌘ Command + `** to open the console and run the following command to install the latest version.

```python
from urllib.request import urlretrieve;urlretrieve(url="https://github.com/wbond/package_control/releases/latest/download/Package.Control.sublime-package", filename=sublime.installed_packages_path() + '/Package Control.sublime-package')
```
