// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { readFileSync } from 'node:fs';

function articleLastmod(url) {
  const match = new URL(url).pathname.match(/^\/blog\/([^/]+)\/$/);
  if (!match) return undefined;
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
