---
title: Desktop Wallpaper (QiuChen Wallpaper)
description: Guide to QiuChen Wallpaper, the interactive Live2D desktop wallpaper engine
---

# Desktop Wallpaper (QiuChen Wallpaper)

**QiuChen Wallpaper** is an interactive **Live2D desktop wallpaper**: it renders a Live2D character — driven by a self-built engine — **on top of your system wallpaper but behind your desktop icons**. The character turns to follow your cursor, its hair sways with real physics as you move the mouse, it loops idle motions, reacts to clicks, and blinks and breathes on its own.

> **Status**: an independent utility under active development.

::: tip Self-built engine
The Live2D engine is fully developed in-house and does not depend on the official Cubism SDK.
:::

## Launching & the menu bar {#launch}

QiuChen Wallpaper is a **standalone menu-bar app** (`QiuChen 壁纸`), separate from the App Store's main window. Once launched:

- It runs as a **menu-bar app** (no Dock icon); a "壁纸" (Wallpaper) icon appears in the menu bar, where all controls live.
- The character appears on your desktop immediately, **clicks pass through to the desktop** (it never blocks your icons), and it stays visible across all Spaces.

The menu-bar "壁纸" menu contains: **Model Library… / Quick Switch / Import Model… / Position & Size / Background / Expressions / Pause·Resume / Reload / Settings… / About / Quit**.

## Choosing & importing models {#models}

The built-in **Hiyori** model ships with the app and works out of the box; you can also import your own Live2D models.

### Model library panel

Open **"Model Library…"** from the menu to reveal the visual picker: a grid of every built-in and imported model, with **search filtering** and size badges. Each cell is a **live preview of the actual model** (really running Live2D at a low frame rate); cells scrolled off-screen are automatically suspended so the picker doesn't stall from loading every model at once.

### Quick switch & import

- **Quick Switch**: the menu lists all models with a checkmark on the current one — click to switch.
- **Import Model…**: pick a folder containing a `*.model3.json` (plus `.moc3` + textures + `motion3.json` motions + `exp3.json` expressions + `physics3.json` physics).
- **Switch-model hotkey `⌥⌘L`**: cycle to the next model instantly.

Imported models live in `~/Library/Application Support/QiuChenWallpaper/models/`; the **priority is "user import > built-in"**.

## Interaction & animation {#interaction}

Every frame of the character is driven by a full synthesis chain, so it looks natural rather than robotic:

- **Idle-motion carousel**: when one clip finishes it randomly picks the next, with a **cross-fade** between clips instead of a hard cut.
- **Tap reaction**: clicking the character triggers a `TapBody` motion, cross-faded over the idle motion.
- **Randomized blink + breathing**: the blink interval is randomized between 2–6 seconds (no longer a fixed tick), combined with a breathing rise and fall.
- **Cursor following**: the head, body, and eyes turn toward the mouse.
- **Hair physics + wind**: hair and skirt sway via chain physics; **the speed at which you move the mouse becomes a wind force** that blows the hair.
- **Expression overlays**: for models with `exp3` expressions, the "Expressions" menu switches between them, layered onto the base pose via Add / Multiply / Overwrite.

## Appearance & layout {#appearance}

### Position & size

The "Position & Size" menu offers presets so the character need not fill the whole screen: **Center·Medium / Center·Large / Bottom-Center / Bottom-Right / Bottom-Left**.

### Background modes

The "Background" menu switches among three fills:

- **Transparent (show desktop)**: shows only the character, with your real system wallpaper behind it (default).
- **Dark** / **Light**: fills the whole screen with a solid color as the character's backdrop.

## Multi-monitor & power saving {#multiscreen}

- **Multiple displays**: each screen gets its own wallpaper window; it re-tiles automatically after hot-plug or a resolution change.
- **Auto power saving on occlusion**: when the window is covered by a fullscreen app, its Space is switched away, the display sleeps, or you manually "Pause", **rendering stops immediately**; it resumes when visible or awake again, so no GPU work is wasted while idle.

## Rendering & performance {#rendering}

- **GPU-accelerated rendering**: smooth animation with real-time motion and physics.
- **Discrete-GPU preference**: dual-GPU Macs automatically use the discrete GPU to avoid dropped frames.
- **Smooth library previews**: the model picker stays fluid even with many models previewing at once.

## Settings {#settings}

The "Settings…" menu opens a settings window (dark glass) with:

- **General**: options such as **Launch at Login** (via the system `SMAppService`, macOS 13+).
- **Activation**: the activation panel.

The "About" menu opens the About window.

## Notes {#notes}

- QiuChen Wallpaper is a **standalone menu-bar app**, independent of the App Store main program; to close the wallpaper just choose **Quit** from the "壁纸" menu.
- The current content type focuses on **Live2D animated characters**; static images / video / web wallpapers are on the roadmap.
- To hide the wallpaper temporarily, use the "Pause" menu item — no need to quit the whole app.
