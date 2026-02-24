import { app, ipcMain, BrowserWindow } from 'electron';
import { bootstrapElectron } from './core/electron-bootstrap.js';
import { ensureSingleInstance } from './core/single-instance.js';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const pjson = require('../package.json');

ensureSingleInstance();
bootstrapElectron();

// globalne dane dla preload
global.deskwrap = { newVersion: "v1.0.1" };
global.pjson = pjson;

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// IPC dla wersji
ipcMain.handle('app:getVersion', () => {
  return global.pjson.version;
});

ipcMain.handle('app:getLatest', () => {
  return global.deskwrap.newVersion;
});

