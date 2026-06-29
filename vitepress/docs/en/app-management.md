---
title: App Management (Injection & Activation)
description: QiuChenly App Store app scanning, injection, and cracking complete operation guide
---

# App Management (Injection & Activation)

App Management is the core feature of QiuChenly App Store, allowing you to scan installed macOS applications and inject cracks.

## Interface Overview {#overview}

There are two ways to access App Management:

- **From Home**: Click the **"Activatable Apps"** area on the QiuChenly App Store home page
- **Sidebar Navigation**: Click the **"Apps"** icon in the left navigation bar

Once inside, you will see:

- **Top search bar**: Search for app names
- **Status filter tabs**: All / Activatable / Injected / Not Supported
- **App card list**: One card per app, showing icon, name, version, status
- **Batch operation bar** (bottom): Select all, batch activate

## App Status Descriptions {#status}

Each app card has a status label in the bottom-right corner:

| Label | Meaning | Actionable |
|------|------|--------|
| **Activate** (green button) | App supports injection, not yet activated | Click to activate |
| **Injected** (blue label) | Injection completed | Ready to use |
| **Update** (orange button) | New version available | Click to update |
| **Get** (gray button) | Not installed but available for download | Click to download |
| No label | Not supported or unclassified | — |

## Activating Apps (Injection) {#activate}

### Standard Process

1. Find the target app in the app list (use the top search bar to quickly locate)
2. Confirm the status shows a green **"Activate"** button
3. Click the **"Activate"** button
4. Enter your **Mac login password** in the permission confirmation dialog
5. Wait for injection to complete (usually 3-10 seconds). The button turns blue and shows **"Injected"**.

### What Happens During Injection?

```
1. Check if the target app version is in the supported list
2. Copy the corresponding dylib dynamic library to the app directory
3. Modify the app's main executable, adding dylib load path
4. Re-sign the app (ad-hoc signature)
5. Reset TCC permissions (if needed)
6. Execute additional Shell scripts (if defined in configuration)
```

### Important Notes

- **The target app must be closed before injection**
- Do not force quit QiuChenly App Store during injection
- If injection fails, check if the app is the official original version (previously injected apps may fail on re-injection)

## App Detail Page {#app-detail}

Click any app card to enter the detail page, which contains three tabs:

### Overview

- App icon, name, version number
- **"Inject & Activate"** button (current action)
- **"Get App"** button (download)
- **"Package DMG"** button (package the injected app as dmg)
- **"Go to Discussion"** button (jump to the app's forum)
- **"Report Issue"** button (submit bug feedback)
- App description
- Right sidebar: Developer, latest version, category

### Pre-cracked Version

Some apps offer a **pre-cracked version** (already patched):

- Displays the **"Pre-cracked"** label
- Click the **"Download Pre-cracked Version"** button
- Ready to use out of the box after download; no manual injection needed

### Official Version

Apps displaying the **"Official Version"** label:

- Click the **"Download Official Version"** button to download the genuine version
- Manual injection activation is required after download

### Version History

View historical versions and update records for the app.

### Discussion

Jump directly to the app's forum discussion section.

## Filtering & Search {#filter}

### Status Filtering

The top tab bar provides quick filtering:

- **All**: Show all installed apps
- **Activatable**: Only show apps that support injection (green)
- **Injected**: Only show apps that have been injected (blue)

### Search Apps

1. Click the top search box (or press `⌘ + K` for global search)
2. Enter the app name
3. Real-time matching results are displayed

## Batch Operations {#batch}

The bottom toolbar provides batch operations:

1. Check the checkboxes on the left of multiple apps
2. Click the **"Activate All"** button
3. Enter password to confirm
4. Wait for injection to complete one by one

## App Category Browsing {#browse}

The **"Browse Categories"** area on the home page is organized by scenario:

| Category Icon | Category Name | Description |
|----------|---------|------|
| Featured | **Featured Apps** | Editor-picked high-quality apps |
| Official | **From Official** | Officially verified trusted source apps |
| Adobe | **Adobe Suite** | Photoshop, Illustrator, and 13 more apps |
| Setapp | **Setapp Store** | 240+ Setapp apps |
| Bilibili | **BiliBili Login** | QR code login to sync favorites |
| Music | **Music** | NetEase Cloud Music-style music module |
| Disk | **Disk Cleanup** | Scan large files to free up space |
| File | **File Manager** | Win11 Fluent-style file explorer |
| Archive | **Compression Tools** | Native zip/7z/rar compression and extraction |
| Proxy | **Network Proxy** | utun transparent proxy management |
| Media | **Media Library** | Emby/HBO-style poster wall streaming |
| Docker | **Docker Management** | Container/Image/Volume/Compose |
| Sensors | **Hardware Sensors** | Temperature/Fan/Hardware inventory monitoring |

## App Page Feature Areas {#apps-page}

The Apps page (`/apps`) is the main entry point for browsing and discovering apps, divided into several feature areas.

### Page Top Bar

The title bar shows **"Apps"** + total number of listed apps. Four quick-access entries on the right:

| Button | Navigates to |
|------|------|
| **Recent Releases** | `/recent-releases` - Latest listed apps |
| **Editor's Picks** | `/editors-choice` - Editor's selections |
| **All Apps** | `/apps/all` - Complete app directory |
| **Compatible Apps** | `/apps/all?filter=activatable` - Activatable app list |

### Featured Hero Cards (Login Required)

Two large cards displayed side by side, visible after login:

**Left dark card (Featured Apps)**:
- Displays the **"Featured Apps"** label
- App name, version number, download count
- App description summary
- **"Get App"** button: Download
- **"Learn More"** button: Enter detail page

**Right blue card (From Official)**:
- Displays **"From Official"** / **"Officially Verified"** label
- Official version app name and description
- **"Get App"** button: Download the latest version directly (no version selection needed)

When not logged in, a login prompt panel is displayed with **"Log in to view featured downloads"**.

### From Official Leaderboard (Login Required)

Displays the Top 6 official apps in a ranked list format. Each row shows:
- Rank number (1-6)
- App icon and name
- Version number, category
- Click to enter app details

The **"View Official Apps"** link at the top navigates to the complete list.

### Featured Collections (13 Entries)

A 3-column grid layout. Each card contains a colored icon, title, description, and meta info:

| # | Title | Description | Meta Info | Click Behavior |
|---|------|------|--------|---------|
| 1 | **Adobe** | Adobe Suite Installer | 15 apps | Navigate to `/adobe` |
| 2 | **Setapp** | Setapp App Store | 240+ apps | Navigate to `/setapp` |
| 3 | **BiliBili** | QR Login · Sync Favorites | QR login | Navigate to `/bili-login` |
| 4 | **From Official** | Officially verified trusted sources | 36 verified | Navigate to `/official` |
| 5 | **All Apps** | View the complete app directory | Full directory | Navigate to `/apps/all` |
| 6 | **Music** | NetEase Cloud style · Vinyl sales | Standalone module | Navigate to `/music` |
| 7 | **Disk Cleanup** | Scan large files · Safely free up space | macOS tool | Navigate to `/apps/disk-cleanup` |
| 8 | **File Manager** | Win11 Fluent style · Full file explorer | Fluent UI | Navigate to `/apps/file-manager` |
| 9 | **Compression Tool** | Native zip/7z/rar · Drag & drop compress/extract | macOS native | Open native compression window |
| 10 | **QiuChenly Proxy** | utun transparent proxy · Node/Subscription/Rule management | Experimental | Open native proxy management GUI |
| 11 | **Media Library** | Emby / HBO-style poster wall · Home streaming | Standalone module | Navigate to `/media` |
| 12 | **Docker Management** | Local containers / images / volumes / Compose full-featured | Fluent UI | Navigate to `/docker` |
| 13 | **Hardware Sensors** | Temperature / Fan speed / Hardware inventory · Real-time monitoring + fan control | macOS native | Navigate to `/system/sensors` |
