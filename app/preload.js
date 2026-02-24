// preload.js — Electron 40+ safe preload

import { contextBridge, ipcRenderer } from 'electron';

// Udostępniamy gettext (global._) do renderer
contextBridge.exposeInMainWorld('i18n', {
  t: (key) => ipcRenderer.invoke('i18n:translate', key)
});

// Udostępniamy konfigurację
contextBridge.exposeInMainWorld('config', {
  get: (key) => ipcRenderer.invoke('config:get', key),
  set: (key, value) => ipcRenderer.invoke('config:set', { key, value })
});

// Udostępniamy eventy
contextBridge.exposeInMainWorld('events', {
  on: (channel, callback) => {
    ipcRenderer.on(channel, (_, data) => callback(data));
  }
});

contextBridge.exposeInMainWorld('appinfo', {
  getVersion: () => ipcRenderer.invoke('app:getVersion'),
  getLatest: () => ipcRenderer.invoke('app:getLatest')
});




