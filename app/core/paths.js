import { app } from 'electron';
import path from 'path';

export const basePath = app.isPackaged
  ? path.join(process.resourcesPath, 'app.asar')
  : app.getAppPath();

export const localePath = (...p) =>
  path.join(basePath, 'app', 'locale', ...p);

export const agentsPath = path.join(basePath, 'app', 'agents.json');

