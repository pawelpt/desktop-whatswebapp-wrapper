import { Tray, Menu, app } from 'electron';
import path from 'path';

export function setupTray(win) {
  const iconPath = path.join(app.getAppPath(), 'app/assets/icon/icon.png');

  const tray = new Tray(iconPath);

  const contextMenu = Menu.buildFromTemplate([
    { label: 'Show', click: () => win.show() },
    { label: 'Hide', click: () => win.hide() },
    { type: 'separator' },
    { label: 'Quit', click: () => app.quit() }
  ]);

  tray.setToolTip('WhatsWebApp Wrapper');
  tray.setContextMenu(contextMenu);

  tray.on('click', () => win.show());
}

