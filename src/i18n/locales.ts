export const defaultLocale = 'en';

export const locales = ['en', 'ja', 'ko', 'de', 'hi', 'es'] as const;
export type Locale = (typeof locales)[number];

export const nonDefaultLocales = locales.filter((l) => l !== defaultLocale);

export const localeInfo: Record<Locale, { name: string; hreflang: string; ogLocale: string }> = {
  en: { name: 'English', hreflang: 'en', ogLocale: 'en_US' },
  ja: { name: '日本語', hreflang: 'ja', ogLocale: 'ja_JP' },
  ko: { name: '한국어', hreflang: 'ko', ogLocale: 'ko_KR' },
  de: { name: 'Deutsch', hreflang: 'de', ogLocale: 'de_DE' },
  hi: { name: 'हिन्दी', hreflang: 'hi', ogLocale: 'hi_IN' },
  es: { name: 'Español', hreflang: 'es', ogLocale: 'es_ES' }
};

export const siteUrl = 'https://pastedownloadapp.com';

export function homePath(locale: Locale) {
  return locale === defaultLocale ? '/' : `/${locale}/`;
}

export function homeUrl(locale: Locale) {
  return siteUrl + homePath(locale);
}

export function homeAlternates() {
  return [
    ...locales.map((l) => ({ hreflang: localeInfo[l].hreflang, href: homeUrl(l) })),
    { hreflang: 'x-default', href: homeUrl(defaultLocale) }
  ];
}
