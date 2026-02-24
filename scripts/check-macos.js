import os from "os";

if (os.platform() !== "darwin") {
  console.error(`
❌ macOS build is not available on this platform.

To build a macOS .dmg installer, you must run the build process on macOS.
This limitation comes from native macOS frameworks required by dmg-license.
`);
  process.exit(1);
}
