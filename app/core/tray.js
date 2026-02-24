import { Tray, Menu } from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';

// ESM-compatible __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function setupTray(win) {
  const tray = new Tray(path.join(__dirname, '../assets/icon/icon.png'));

  const menu = Menu.buildFromTemplate([
    { label: _('Show'), click: () => win.show() },
    { label: _('Hide'), click: () => win.hide() },
    { label: _('Quit'), click: () => win.close() }
  ]);

  tray.setContextMenu(menu);
}

