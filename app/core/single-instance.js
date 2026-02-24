import { app } from 'electron';

export function ensureSingleInstance() {
  const locked = app.requestSingleInstanceLock();
  if (!locked) {
    app.quit();
    process.exit(0);
  }

  app.on('second-instance', (_, argv) => {
    const link = argv.find(a => a.includes("https://chat.whatsapp.com"));
    globalThis.__openGroupLink = link || null;
  });
}
