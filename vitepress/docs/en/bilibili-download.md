---
title: Bilibili Video Download
description: Log in to Bilibili and download favorites and collections
---

# Bilibili Video Download

Log in to your Bilibili account, browse your favorites and collections, and download videos locally — all managed in the [Downloads](./download-manager) page, ready to play in the [Native Video Player](./video-player) once finished.

## Logging in {#login}

Open the Bilibili login page (**multi-account management** supported) and log in by **scanning a QR code**:

![Scan the QR code to log in](/images/bilibili-download/image-1.png)

1. Choose a login method: **TV login** or **Web login**
2. Open the Bilibili client / App / website on your phone, tap your avatar in the top-left, and choose **"Scan"**
3. Scan the on-screen QR code and confirm the login on your phone

If the QR code expires, refresh and retry. Logged-in accounts appear in the **"My Accounts"** list, where you can **add** or **remove** accounts at any time; accounts with an active Premium (大会员) subscription show a **Premium badge**.

- **One-click export / import**: Export your logged-in accounts to a backup file and import them on another device — no need to re-scan the QR code, making it easy to migrate login state across devices.

### Download-only account {#download-account}

You can designate an account (e.g. a Premium account) as the **"download-only account"**, so that all video downloads use its login state — handy for pulling 4K / high-quality videos with Premium privileges without switching accounts back and forth between browsing and downloading.

- **When not set**: automatically follows the account you're currently browsing with
- **When the designated account becomes invalid**: automatically falls back to the current browsing account

## Browsing & downloading favorites {#favorites}

After logging in, the Bilibili profile page shows **Following / Followers / Posts** (the profile page supports **search**) and two tabs:

![Bilibili profile page](/images/bilibili-download/image-2.png)

![Favorites and collected series tabs](/images/bilibili-download/image-3.png)

- **My Favorites**: each folder's item count, creation date, and public / private status
- **Collected Series**: collections you've saved

Open any favorites folder or collection to view its video list, then:

- **Download a single video**: click the download button on a video to queue it
- **Download all locally**: create download tasks for the entire folder / collection at once
- **Play online**: watch directly in the [Native Video Player](./video-player) without downloading

::: tip Multi-part (multi-P) videos
Multi-part videos appear as **collection cards** and can be **downloaded part by part**, with each part's number, duration and other info shown. The cover badge shows only the part number (P1, P2); the full title is available in the dropdown.
:::

::: warning Bulk-download with care
Due to Bilibili Web API limits, **"Download all locally"** fires a burst of parsing requests in a short window and can trip account/session rate-limiting, causing the requests to **fail en masse**. Download **individually, as needed**.
:::

![Folder video list with download options](/images/bilibili-download/image-4.png)

Videos are parsed via the Bilibili API and managed together in the **Downloads** page.

## Download settings {#settings}

Adjust download parameters in **"Download Settings"** at the top-right of the profile page (used as defaults for "Download" / "Download All"; high quality / lossless audio requires a Premium account and video support, and falls back automatically to the highest available tier). **Everything is on by default, and quality defaults to auto-highest**:

![Download settings dialog](/images/bilibili-download/image-5.png)

| Setting | Options |
|---------|---------|
| **Quality** | Auto highest / 8K / 4K / 1080P60 / 1080P high-bitrate / 1080P / 720P60 / 720P / 480P / 360P (default auto-highest) |
| **Output codec** | HEVC / H.265 (default, smaller) or H.264 / AVC (best compatibility) |
| **Merge to MP4** | Merge and transcode audio + video into a single MP4 after download |
| **Keep source files** | Keep the original m4s segments after a successful merge |
| **Prefer H.265 source** | Prefer H.265-encoded source streams when parsing |
| **Prefer FLAC audio** | Download lossless audio when available (requires Premium) |
| **Extras** | Danmaku, metadata JSON, video cover, uploader avatar |

::: tip Danmaku is fetched and saved by type automatically
Downloads automatically grab the **complete danmaku** and save it by type — **regular danmaku**, **advanced / special danmaku**, and **interactive danmaku**. During playback the [Native Video Player](./video-player) loads this local danmaku automatically (including [advanced danmaku effects](./video-player#danmaku)).
:::

## Download progress {#progress}

The download card shows the current status (**Queued / Downloading / Completed / Cancelled**) and stage:

> Parse metadata → Parse video stream → Download video → Download audio → Merge → Transcode

The result card also shows **color-coded resolution / frame-rate tier badges** and the **local danmaku count**, and the download time is shown in full (year-month-day hour:minute).

## Download result & follow-up actions {#result}

Once a download finishes, the result card offers these actions:

- **Play**: watch it directly in the [Native Video Player](./video-player); downloaded files also appear in the media library after their directory is scanned.
- **Update danmaku**: refresh a downloaded video's danmaku, cover, and info without re-downloading the video.
- **Re-download**: re-download a downloaded video at a different quality; if the new quality is identical to the existing file, the download is skipped and only the info is refreshed.

![Download result cards: resolution / frame-rate badges, danmaku count, and Play / Update danmaku / Re-download buttons](/images/bilibili-download/image-7.png)

![Download progress card](/images/bilibili-download/image-6.png)
