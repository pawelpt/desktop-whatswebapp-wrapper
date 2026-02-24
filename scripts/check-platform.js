import os from "os";
import { execSync } from "child_process";

const platform = os.platform();

if (platform === "darwin") {
  execSync("npx electron-builder --mac", { stdio: "inherit" });
} else if (platform === "linux") {
  execSync("npx electron-builder --linux --win", { stdio: "inherit" });
} else if (platform === "win32") {
  execSync("npx electron-builder --win", { stdio: "inherit" });
} else {
  console.error("❌ Unsupported OS for building this project.");
  process.exit(1);
}

