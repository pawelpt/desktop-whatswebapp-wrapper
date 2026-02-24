import { ipcMain } from 'electron';

ipcMain.handle('i18n:translate', (_, key) => gt.gettext(key));

import fs from 'fs';
import nodeGettext from 'node-gettext';
import gettextParser from 'gettext-parser';
import { localePath } from './paths.js';

const supportedLocales = ['en_US', 'it_IT'];
export const gt = new nodeGettext();

export function loadI18n() {
  for (const locale of supportedLocales) {
    const file = localePath(locale, 'messages.po');
    const data = fs.readFileSync(file);
    gt.addTranslations(locale, 'messages', gettextParser.po.parse(data));
  }

  gt.setLocale('en_US');
  gt.setTextDomain('messages');

  globalThis._ = t => gt.gettext(t);
}
