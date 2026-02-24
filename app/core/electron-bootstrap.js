import { app } from 'electron';
import { loadI18n } from './i18n.js';
import { loadConfig } from './config.js';
import { createMainWindow } from './window.js';
import { setupTray } from './tray.js';
import { setupMenu } from '../menu.js';
import { setupProtocolHandlers } from './protocol.js';

export function bootstrapElectron() {
  app.whenReady().then(() => {
    loadI18n();
    loadConfig();
    setupMenu();
    setupProtocolHandlers();

    const win = createMainWindow();
    setupTray(win);
  });

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
  });
}
