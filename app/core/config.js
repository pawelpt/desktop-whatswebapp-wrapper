import { ipcMain } from 'electron';

ipcMain.handle('config:get', (_, key) => config.get(key));
ipcMain.handle('config:set', (_, { key, value }) => {
  config.set(key, value);
  return true;
});


import fs from 'fs';
import { app } from 'electron';

const defaults = {
  width: 1000,
  height: 720,
  thumbSize: 0
};

export const config = {
  data: {},

  load() {
    const file = app.getPath('userData') + '/settings.json';
    try {
      this.data = JSON.parse(fs.readFileSync(file));
    } catch {
      this.data = defaults;
    }
  },

  save() {
    const file = app.getPath('userData') + '/settings.json';
    fs.writeFileSync(file, JSON.stringify(this.data));
  },

  get(key) {
    return this.data[key];
  },

  set(key, value) {
    this.data[key] = value;
    this.save();
  }
};

export function loadConfig() {
  config.load();
}

