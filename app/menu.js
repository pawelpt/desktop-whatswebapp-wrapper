// app/menu.js — nowoczesne menu dla Electron 40 (ESM)

import { Menu, shell } from 'electron';

export function getMenuTemplate() {
  return [
    {
      label: _('File'),
      submenu: [
        {
          label: _('Open WhatsApp Web'),
          click: () => shell.openExternal('https://web.whatsapp.com')
        },
        { type: 'separator' },
        {
          label: _('Quit'),
          role: 'quit'
        }
      ]
    },

    {
      label: _('Edit'),
      submenu: [
        { role: 'undo', label: _('Undo') },
        { role: 'redo', label: _('Redo') },
        { type: 'separator' },
        { role: 'cut', label: _('Cut') },
        { role: 'copy', label: _('Copy') },
        { role: 'paste', label: _('Paste') },
        { role: 'selectAll', label: _('Select All') }
      ]
    },

    {
      label: _('View'),
      submenu: [
        { role: 'reload', label: _('Reload') },
        { role: 'forceReload', label: _('Force Reload') },
        { role: 'toggleDevTools', label: _('Toggle Developer Tools') },
        { type: 'separator' },
        { role: 'resetZoom', label: _('Reset Zoom') },
        { role: 'zoomIn', label: _('Zoom In') },
        { role: 'zoomOut', label: _('Zoom Out') },
        { type: 'separator' },
        { role: 'togglefullscreen', label: _('Toggle Fullscreen') }
      ]
    },

    {
      label: _('Window'),
      submenu: [
        { role: 'minimize', label: _('Minimize') },
        { role: 'close', label: _('Close') }
      ]
    },

    {
      label: _('Help'),
      submenu: [
        {
          label: _('WhatsApp Web'),
          click: () => shell.openExternal('https://web.whatsapp.com')
        },
        {
          label: _('Project Homepage'),
          click: () => shell.openExternal('https://github.com/pawelpt/desktop-whatswebapp-wrapper')
        }
      ]
    }
  ];
}

export function setupMenu() {
  const menu = Menu.buildFromTemplate(getMenuTemplate());
  Menu.setApplicationMenu(menu);
}

