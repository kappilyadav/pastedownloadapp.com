import { readdir, readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const host = 'pastedownloadapp.com';
const key = '2E4C93EB-84AB-445D-B643-9310479C6A9B';
const endpoint = process.env.INDEXNOW_ENDPOINT || 'https://www.bing.com/indexnow';
const distDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'dist');

const files = (await readdir(distDir)).filter((file) => /^sitemap-\d+\.xml$/.test(file));

if (files.length === 0) {
  throw new Error('No sitemap files found in dist/. Run npm run build before submitting IndexNow URLs.');
}

const urls = [];

for (const file of files) {
  const xml = await readFile(path.join(distDir, file), 'utf8');
  for (const match of xml.matchAll(/<loc>(.*?)<\/loc>/g)) {
    urls.push(match[1]);
  }
}

const payload = {
  host,
  key,
  keyLocation: `https://${host}/${key}.txt`,
  urlList: [...new Set(urls)]
};

if (process.env.INDEXNOW_DRY_RUN === '1') {
  console.log(JSON.stringify(payload, null, 2));
  process.exit(0);
}

const response = await fetch(endpoint, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  },
  body: JSON.stringify(payload)
});

const body = await response.text();

if (!response.ok && response.status !== 202) {
  throw new Error(`IndexNow submission failed with HTTP ${response.status}: ${body}`);
}

console.log(`IndexNow submitted ${payload.urlList.length} URL(s) to ${endpoint}. HTTP ${response.status}.`);
