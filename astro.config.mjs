// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';

function gitLastmod(file) {
  try {
    return execFileSync('git', ['log', '-1', '--format=%cI', '--', file], { encoding: 'utf8' }).trim() || undefined;
  } catch {
    return undefined;
  }
}

function pageSource(pathname) {
  const locale = pathname.match(/^\/(ja|ko|de|hi|es)\/$/)?.[1];
  if (locale) return `src/i18n/translations/${locale}.ts`;
  if (pathname === '/') return 'src/pages/index.astro';
  const page = pathname.match(/^\/([a-z-]+)\/$/)?.[1];
  return page ? `src/pages/${page}.astro` : undefined;
}

function articleLastmod(url) {
  const pathname = new URL(url).pathname;
  const match = pathname.match(/^\/blog\/([^/]+)\/$/);
  if (!match) {
    const source = pageSource(pathname);
    return source ? gitLastmod(source) : undefined;
  }
  try {
    const source = readFileSync(`./src/pages/blog/${match[1]}.astro`, 'utf8');
    return source.match(/"dateModified":\s*"([^"]+)"/)?.[1] ?? source.match(/"datePublished":\s*"([^"]+)"/)?.[1];
  } catch {
    return undefined;
  }
}

// https://astro.build/config
export default defineConfig({
  site: 'https://pastedownloadapp.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja', 'ko', 'de', 'hi', 'es'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  integrations: [
    sitemap({
      serialize(item) {
        const lastmod = articleLastmod(item.url);
        if (lastmod) item.lastmod = lastmod;
        return item;
      },
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', ja: 'ja', ko: 'ko', de: 'de', hi: 'hi', es: 'es' }
      }
    })
  ],
  build: {
    inlineStylesheets: 'always'
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
