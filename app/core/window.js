import { BrowserWindow, session, app } from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';
import { config } from './config.js';
import { getRandomUserAgent } from './agents.js';

// ESM-compatible __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ŚCIEŻKI DZIAŁAJĄCE W DEV + ASAR
const preloadPath = path.join(app.getAppPath(), 'app/preload.js');
const iconPath = path.join(app.getAppPath(), 'app/assets/icon/icon.png');

export function createMainWindow() {
  const win = new BrowserWindow({
    width: config.get('width'),
    height: config.get('height'),
    minWidth: 600,
    minHeight: 600,
    show: false,
    icon: iconPath,
    webPreferences: {
      preload: preloadPath,
      contextIsolation: true,
      nodeIntegration: false,
      spellcheck: true,
      webviewTag: true
    }
  });

  const ua = getRandomUserAgent() || 'Mozilla/5.0';
  win.webContents.setUserAgent(ua);

  session.defaultSession.webRequest.onBeforeSendHeaders((details, cb) => {
    details.requestHeaders['User-Agent'] = ua;
    cb({ cancel: false, requestHeaders: details.requestHeaders });
  });

//  win.loadFile(indexPath);
  win.loadURL('https://web.whatsapp.com');
  win.once('ready-to-show', () => win.show());

  return win;
}

