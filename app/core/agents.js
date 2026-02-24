import fs from 'fs';
import { agentsPath } from './paths.js';

export function getRandomUserAgent() {
  const data = JSON.parse(fs.readFileSync(agentsPath));
  if (!data.userAgents) return null;

  const idx = Math.floor(Math.random() * data.userAgents.length);
  return data.userAgents[idx];
}

