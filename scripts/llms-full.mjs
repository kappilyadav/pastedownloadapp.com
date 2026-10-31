import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const site = 'https://pastedownloadapp.com';
const distDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'dist');

const named = { middot: '·', ldquo: '"', rdquo: '"', lsquo: "'", rsquo: "'", rarr: '->', larr: '<-', times: 'x', ndash: '-', hellip: '...' };

const decode = (s) =>
  s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;|&#x27;/g, "'").replace(/&nbsp;/g, ' ')
    .replace(/&(middot|ldquo|rdquo|lsquo|rsquo|rarr|larr|times|ndash|hellip);/g, (_, n) => named[n])
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)));

function htmlToText(html) {
  const main = html.match(/<main[\s\S]*?<\/main>/)?.[0] ?? '';
  const text = main
    .replace(/<(script|style|svg|nav|button|form|noscript)[\s\S]*?<\/\1>/g, '')
    .replace(/<h1[^>]*>/g, '\n\n# ')
    .replace(/<h2[^>]*>/g, '\n\n## ')
    .replace(/<h3[^>]*>/g, '\n\n### ')
    .replace(/<li[^>]*>/g, '\n- ')
    .replace(/<\/(p|div|tr|details|summary|section|ul|ol|table|h[1-6])>/g, '\n')
    .replace(/<br\s*\/?>/g, '\n')
    .replace(/<[^>]+>/g, '');
  return decode(text)
    .split('\n')
    .map((line) => line.replace(/\s+/g, ' ').trim())
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

const sitemap = await readFile(path.join(distDir, 'sitemap-0.xml'), 'utf8');
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
const articleUrls = urls.filter((u) => /\/blog\/[^/]+\/$/.test(u));

const pages = [`${site}/`, ...articleUrls];
const chunks = [];

for (const url of pages) {
  const file = path.join(distDir, new URL(url).pathname, 'index.html');
  const html = await readFile(file, 'utf8');
  const title = decode(html.match(/<title>(.*?)<\/title>/s)?.[1] ?? url);
  chunks.push(`<page url="${url}">\n<title>${title}</title>\n\n${htmlToText(html)}\n</page>`);
}

const header = `# PasteDownloadApp: full content

> Plain-text copy of the home page and every blog guide on ${site}. Generated at build time from the rendered pages. Overview and link index: ${site}/llms.txt

`;

await writeFile(path.join(distDir, 'llms-full.txt'), header + chunks.join('\n\n---\n\n') + '\n');
console.log(`llms-full.txt written with ${pages.length} pages`);
