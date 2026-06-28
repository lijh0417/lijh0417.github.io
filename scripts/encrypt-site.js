#!/usr/bin/env node
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const PASSWORD = process.env.POST_PASSWORD;
const SITE_DIR = path.resolve(__dirname, '..', '_site');
const ITERATIONS = 600000;

const MARKER_START = '<!--ENCRYPT:start-->';
const MARKER_END = '<!--ENCRYPT:end-->';
const SECTION_OPEN = '<section class="page__content" itemprop="text">';
const SECTION_CLOSE = '</section>';

function generatePasswordHtml(encData) {
  return [
    '<style>',
    '.password-gate{max-width:400px;margin:3em auto;text-align:center;padding:2em;border:1px solid #ddd;border-radius:8px;background:#fafafa}',
    '[data-theme="dark"] .password-gate{border-color:#555;background:#2a2a2a}',
    '.password-gate .fa-lock{font-size:3em;color:#888;margin-bottom:.5em}',
    '.password-gate p{font-size:.9em;color:#666;margin-bottom:.5em}',
    '[data-theme="dark"] .password-gate p{color:#aaa}',
    '.password-gate input[type="password"]{display:block;width:100%;padding:.6em;margin:1em 0;border:1px solid #ccc;border-radius:4px;font-size:1em;box-sizing:border-box}',
    '[data-theme="dark"] .password-gate input[type="password"]{background:#333;border-color:#555;color:#eee}',
    '.password-gate .unlock-btn{display:inline-block;padding:.6em 2em;background:#286eac;color:#fff;border:none;border-radius:4px;font-size:1em;cursor:pointer}',
    '.password-gate .unlock-btn:hover{background:#1d5a8a}',
    '.password-error{color:#c33;font-size:.85em;margin-top:.5em;display:none}',
    '[data-theme="dark"] .password-error{color:#e77}',
    '.password-loading{display:none;color:#888;font-size:.85em;margin-top:.5em}',
    '</style>',
    '<section class="page__content" itemprop="text">',
    '<div class="password-gate" id="password-gate">',
    '  <i class="fa fa-lock"></i>',
    '  <p>This content is password protected.</p>',
    '  <input type="password" id="password-input" placeholder="Enter password" autocomplete="off" />',
    '  <button class="unlock-btn" id="unlock-btn">Unlock</button>',
    '  <p class="password-error" id="password-error">Wrong password. Please try again.</p>',
    '  <p class="password-loading" id="password-loading">Decrypting...</p>',
    '</div>',
    '<div id="protected-content" style="display:none"></div>',
    '<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"><\/script>',
    '<script>',
    'window.ENCRYPTION_DATA=' + JSON.stringify(encData) + ';',
    '<\/script>',
    '</section>',
  ].join('\n');
}

function processFile(filePath) {
  let html = fs.readFileSync(filePath, 'utf8');

  const startIdx = html.indexOf(MARKER_START);
  if (startIdx === -1) return false;

  const endIdx = html.indexOf(MARKER_END, startIdx);
  if (endIdx === -1) {
    console.error(`  Missing ENCRYPT:end marker in ${filePath}`);
    return false;
  }

  // Find enclosing section
  const sectionStart = html.lastIndexOf(SECTION_OPEN, startIdx);
  const rawEnd = html.indexOf(SECTION_CLOSE, endIdx);
  if (sectionStart === -1 || rawEnd === -1) {
    console.error(`  Cannot find section wrapper in ${filePath}`);
    return false;
  }
  const sectionEnd = rawEnd + SECTION_CLOSE.length;

  const content = html.slice(startIdx + MARKER_START.length, endIdx).trim();
  if (!content) {
    console.error(`  Empty content in ${filePath}`);
    return false;
  }

  const salt = crypto.randomBytes(16);
  const iv = crypto.randomBytes(12);
  const key = crypto.pbkdf2Sync(PASSWORD, salt, ITERATIONS, 32, 'sha256');
  const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
  let encrypted = cipher.update(content, 'utf8', 'base64');
  encrypted += cipher.final('base64');

  const encData = {
    salt: salt.toString('base64'),
    iv: iv.toString('base64'),
    tag: cipher.getAuthTag().toString('base64'),
    data: encrypted,
  };

  const replacement = generatePasswordHtml(encData);
  html = html.slice(0, sectionStart) + replacement + html.slice(sectionEnd);
  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`  Encrypted: ${path.relative(SITE_DIR, filePath)}`);
  return true;
}

function walkDir(dir) {
  let count = 0;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      count += walkDir(full);
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      if (processFile(full)) count++;
    }
  }
  return count;
}

if (!PASSWORD) {
  console.error('Error: POST_PASSWORD environment variable is not set.');
  process.exit(1);
}

if (!fs.existsSync(SITE_DIR)) {
  console.error(`Error: ${SITE_DIR} does not exist. Run 'bundle exec jekyll build' first.`);
  process.exit(1);
}

console.log('Encrypting protected content in _site/...');
const count = walkDir(SITE_DIR);
console.log(`Done. Encrypted ${count} page(s).`);
