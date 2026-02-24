import { app } from 'electron';

export function setupProtocolHandlers() {
  app.setAsDefaultProtocolClient('whatsapp');
}

