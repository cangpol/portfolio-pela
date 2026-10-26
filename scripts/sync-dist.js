import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const clientDist = path.join(rootDir, 'client', 'dist');
const rootDist = path.join(rootDir, 'dist');

try {
  if (fs.existsSync(clientDist)) {
    if (!fs.existsSync(rootDist)) {
      fs.mkdirSync(rootDist, { recursive: true });
    }
    fs.cpSync(clientDist, rootDist, { recursive: true });
    console.log('✅ Successfully synced build output to root dist/');
  } else {
    console.warn('⚠️ client/dist not found during sync');
  }
} catch (err) {
  console.error('Error syncing dist:', err);
}
