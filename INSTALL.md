# Installation Guide

This document explains how to install and run **WhatsWebApp Desktop Wrapper** on Linux, Windows, and optionally macOS.

---

## 📥 Downloading Releases

If you prefer pre‑built packages, visit the Releases page:

👉 https://github.com/pawelpt/desktop-whatswebapp-wrapper/releases

Available formats:

- **Linux (Debian/Ubuntu/Mint)** — `.deb`
- **Windows** — `.exe`
- **macOS** — `.dmg` (optional)

---

# 🛠 Building From Source

Follow these instructions to build the application manually.

---

## 1. Clone the repository

```bash
git clone https://github.com/pawelpt/desktop-whatswebapp-wrapper.git
```
```bash
cd desktop-whatswebapp-wrapper
```
## 2. Build Desktop WhatsWebApp Wraper for Debian/Ubuntu/Mint & EXE packages

```bash
npm run build
```

## 3. Build Desktop WhatsWebApp Wraper for only Debian/Ubuntu/Mint packages

```bash
npm run build:linux
```

## 4. Build Desktop WhatsWebApp Wraper for only Win/EXE packages

```bash
npm run build:win
```

## 5. Build Desktop WhatsWebApp Wraper with ```npm``` combo

```bash
npm run clean:cache && npm run clean && npm run clean:all && npm run smart:audit && npm run build:linux
```

## 6. Build Desktop WhatsWebApp Wraper for Linux combo with install locally

```bash
npm run clean:cache && npm run clean && npm run clean:all && npm run smart:audit && npm run build:linux && sudo dpkg -i dist/whatswebapp-wrapper-1.0.1-linux-amd64.deb
```

## 7.  Re-Build Desktop WhatsWebApp Wraper for Linux combo with re-install locally

```bash
sudo apt-get -y purge desktop-whatswebapp-wrapper && npm run clean:cache && npm run clean && npm run clean:all && npm run smart:audit && npm run build:linux && sudo dpkg -i dist/whatswebapp-wrapper-1.0.1-linux-amd64.deb
```

