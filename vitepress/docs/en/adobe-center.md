---
title: Adobe Center
description: Adobe full suite online acquisition, download, and configuration guide
---

# Adobe Center

The Adobe Center provides online acquisition and download of the full Adobe Creative Cloud suite.

## Accessing Adobe Center {#access}

- **From Home**: Click the **"Adobe Suite Installer"** card in the "Featured Collections" area of the home page
- **Sidebar Navigation**: Find the Adobe entry on the Apps page

## Page Layout {#layout}

The Adobe Center page uses a **left-right two-column layout**:

### Left Panel

- **Title**: "Adobe Suite"
- **Subtitle**: "Get Adobe apps online · One-click cleanup"

Action area:

| Button | Function |
|------|------|
| **One-Click Cleanup** | Clean up Adobe residual files and cache |
| **Refresh Catalog** | Re-fetch the product list from the Adobe official API |

Category filter (click to switch; view all or filter by category):

- All Categories
- Photography
- Video & Audio
- Design
- Illustration
- Social Media
- Gen AI
- Acrobat & PDF
- AR/3D
- Beta Apps
- Prerelease

### Right Panel - Product List

**Search bar**: A search box at the top for real-time keyword filtering of products.

**Product cards**: Each Adobe product is displayed as a row card containing:

- Product icon
- Product name (e.g., Photoshop, Illustrator)
- **"Online"** label (blue)
- Tagline or latest version number
- Category tags (colored small tags, up to 3 displayed)
- **"Get"** button (blue)

Click the **"Get"** button to enter the download configuration dialog.

## Download Configuration Dialog {#download-dialog}

After clicking the **"Get"** button on a product card, a two-step configuration dialog appears:

### Step 1: Configure

| Option | Choices | Description |
|--------|------|------|
| **Version** | Select from dropdown | Defaults to the latest version |
| **Platform** | Apple Silicon (ARM) / Intel (x86_64) | Usually auto-matches current architecture |
| **Language** | All Languages / English / Simplified Chinese / 日本語 / 한국어 / Français / Deutsch / Español / Italiano, etc. | Defaults to "All Languages" |

::: tip Platform Selection
QiuChenly App Store automatically detects your Mac chip type (ARM or Intel) and selects the corresponding platform by default. You can also manually switch to another platform.
:::

### Step 2: Confirm

Displays the complete download manifest:

- **Main package**: Required, cannot be deselected
- **Dependency components**: Auto-selected (e.g., Adobe Common, CC Library, etc.)
- **Optional components**: Can be checked or unchecked as needed

After confirming, click the **"Download"** button. The task is automatically added to the Download Manager.

## Download Management {#download-progress}

After download tasks enter the **Download Management** page:

- Adobe downloads are displayed in a dedicated card style (Adobe red theme)
- Download progress for each component is shown
- Once downloads are complete, click the **Install** button on the Download Management page to perform installation

::: tip Offline Installation
If you already have a local Adobe installation package, click the **"Import Adobe Package"** button on the **Download Management** page, select the folder containing installation files, scan and install directly without re-downloading.
:::

## One-Click Cleanup {#cleanup}

Click the **"One-Click Cleanup"** button on the left to automatically clean up:

- Adobe temporary installation files
- CC Library cache
- Residual installation logs

::: warning
Please confirm no Adobe download tasks are in progress before cleaning.
:::

## File Storage {#storage}

Adobe download files are saved to the following location by default:

> `Downloads/Adobe/`

You can change the download directory in **Manage** → **System Settings** → **Download Settings**.

## Usage Notes {#notes}

::: warning Important

1. **No trial needed**: Adobe products can be used directly after injection; no trial is required
2. **No account login**: Do not log into any Adobe account
3. **All versions supported**: Including the latest and future versions, covering all Adobe products
4. **Offline use**: After injection, apps can be used completely offline without network connection
5. Advanced features like Neural Filters support offline installation and use (see Telegram channel for details)
:::

## FAQ {#faq}

### Q: What if download speed is slow?

Adobe's official CDN may be slower in certain regions. Suggestions:
1. Configure a proxy in **Settings** → **Proxy**
2. aria2 multi-threaded download is enabled by default (up to 64 threads)

### Q: Product list won't load?

1. Confirm the daemon is running (search for `QiuChenlyDaemon` in **Activity Monitor**)
2. Click the **"Refresh Catalog"** button to re-fetch
3. Check network connection and proxy settings

### Q: Where to install after download?

After download completes, the Adobe installation package is located in the download directory. On the **Download Management** page, click the **Install** button for the corresponding Adobe task to perform installation.
