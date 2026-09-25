import puppeteer from 'puppeteer-core';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function run() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-web-security'],
  });

  const page = await browser.newPage();
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', err => console.log('PAGE ERROR:', err.toString()));

  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
  console.log('Navigating to https://apagor.com ...');
  await page.goto('https://apagor.com', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await new Promise(r => setTimeout(r, 6000));
  const outPath = path.join(__dirname, 'public', 'images', 'project-apagor.png');
  await page.screenshot({ path: outPath });
  console.log('Saved to', outPath);

  await browser.close();
}

run();
