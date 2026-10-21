// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

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
