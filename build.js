const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rootDir = __dirname;
const distDir = path.join(rootDir, 'dist');
const distSubDir = path.join(distDir, 'dist');
const distStaticDir = path.join(distDir, 'static');

console.log('--- Starting Cloudflare Site Build ---');

// 1. Ensure target directories exist
fs.mkdirSync(distDir, { recursive: true });
fs.mkdirSync(distSubDir, { recursive: true });

// 2. Compile Tailwind CSS
console.log('Compiling Tailwind CSS...');
execSync('npx tailwindcss -i ./src/input.css -o ./dist/styles.css --minify', {
  cwd: rootDir,
  stdio: 'inherit'
});

// Also copy styles.css to dist/dist/styles.css so href="dist/styles.css" resolves cleanly
fs.copyFileSync(path.join(distDir, 'styles.css'), path.join(distSubDir, 'styles.css'));

// 3. Copy index.html into dist/
console.log('Copying index.html to dist/...');
fs.copyFileSync(path.join(rootDir, 'index.html'), path.join(distDir, 'index.html'));

// 4. Copy static/ assets directory into dist/static/
console.log('Copying static assets to dist/static/...');
fs.cpSync(path.join(rootDir, 'static'), distStaticDir, { recursive: true });

// 5. Copy _headers into dist/_headers
const headersFile = path.join(rootDir, '_headers');
if (fs.existsSync(headersFile)) {
  console.log('Copying _headers to dist/...');
  fs.copyFileSync(headersFile, path.join(distDir, '_headers'));
}

console.log('--- Build Successful! Site ready in ./dist ---');
