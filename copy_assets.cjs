const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\Olabanji Idowu\\Documents\\WEBSITE\\idowu_olabanji';
const destDir = 'C:\\Users\\Olabanji Idowu\\Documents\\antigravity\\nifty-raman\\public';

const filesToCopy = [
  'sitemap.xml',
  'favicon.ico',
  'google589a83dabddd9e99.html',
  'site.webmanifest',
  'android-chrome-192x192.png',
  'android-chrome-512x512.png'
];

console.log('Starting file copy...');

// Copy individual files
filesToCopy.forEach(file => {
  const src = path.join(srcDir, file);
  const dest = path.join(destDir, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`Copied: ${file}`);
  } else {
    console.log(`Not found: ${file}`);
  }
});

// Helper to copy directory recursively
function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Copy directories
const dirs = ['img', 'icon'];
dirs.forEach(dir => {
  const src = path.join(srcDir, dir);
  const dest = path.join(destDir, dir);
  if (fs.existsSync(src)) {
    copyDir(src, dest);
    console.log(`Copied directory: ${dir}`);
  } else {
    console.log(`Not found directory: ${dir}`);
  }
});

console.log('Copy script completed.');
