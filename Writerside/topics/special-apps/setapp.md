# Setapp

<link-summary>要注入 Setapp 将多 2 步</link-summary>

## App 自动更新提示 Sign 不匹配 {#auto-update-sign-mismatch}

当前推荐版本: https://dl.devmate.com/com.setapp.DesktopClient/99/1739545743/Setapp-99.zip

你也可以手动下载最新版本，但不稳定：[https://store.setapp.com/updates/beta.xml](https://store.setapp.com/updates/beta.xml)

## 如何登录 {#how-to-login}

由于 Setapp 是线上服务，我们提供了一键登录链接，注入后直接点击下方按钮即可登录 Setapp，我们已经在代码里自动处理了大部分事情。

[![Login Setapp](login-setapp.svg){width="120"}](setapp://system/sign_in?access_token=fuckingyoutoken&user_email=qiuchenly@outlook.com)

## 如何注入 {#how-to-inject}

<tabs>
    <tab title="卸载后重新安装">
        <ol>
            <li>使用 <a href="https://download.nektony.com/pro-support/v3/app-cleaner/update/update.xml">App Cleaner & Uninstaller</a> 彻底卸载 Setapp，切勿使用 BuhoCleaner！</li>
            <li>前往上述 <a href="https://store.setapp.com/updates/beta.xml">SetApp 更新地址</a> 下载最新版本。</li>
            <li>下载完成后，将 Setapp 拖入 Application 中，不要打开，不要打开，不要打开！</li>
            <li>运行注入: `[com.setapp.DesktopClient/Setapp] - [3.43.3]`.包名为com.setapp.DesktopClient别看错了。</li>
            <li>注入完成后打开，如果提示损坏，请查看 <a href="file-is-damaged.md">FAQ</a></li>
            <li>如果看到 QiuChenly 弹窗，说明成功，如果没有看到，说明注入失败。</li>
        </ol>
    </tab>
    <tab title="我不想卸载">
        <ol>
            <li>在 Setapp 里找到右上角的头像，点击后选择退出。</li>
            <li>打开 <code>~/Library/Application Support</code> 文件夹。</li>
            <li>找到 Setapp 文件夹，<shortcut>⌘ Command + ⌫ Delete</shortcut> 删除文件夹。</li>
            <li>运行注入: `[com.setapp.DesktopClient/Setapp] - [3.43.3]`.包名为com.setapp.DesktopClient别看错了。</li>
            <li>注入完成后打开，如果提示损坏，请查看 <a href="file-is-damaged.md">FAQ</a></li>
            <li>如果看到 QiuChenly 弹窗，说明成功，如果没有看到，说明注入失败。</li>
        </ol>
    </tab>
</tabs>

## 更新或下载完 App 后，我还需要重新注入吗？ {#reinject-after-updating-or-downloading}

是的。下载完的 App 是官方版本，直接打开会报错 `1701`。需要手动执行脚本，会自动检测到你的 App，注入它即可。