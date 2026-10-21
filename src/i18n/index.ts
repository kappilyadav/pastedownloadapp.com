import { defaultLocale, type Locale } from './locales';
import type { HomeContent, UiStrings } from './types';
import { en } from './translations/en';
import { ja } from './translations/ja';
import { ko } from './translations/ko';
import { de } from './translations/de';
import { hi } from './translations/hi';
import { es } from './translations/es';

const dictionaries: Record<Locale, UiStrings> = { en, ja, ko, de, hi, es };

export function useTranslations(locale: Locale | undefined): UiStrings {
  return dictionaries[locale ?? defaultLocale];
}

export const homeContent: Record<Exclude<Locale, 'en'>, HomeContent> = { ja, ko, de, hi, es };

export function fill(template: string, values: Record<string, string | number>) {
  return template.replace(/\{(\w+)\}/g, (_, key) => String(values[key] ?? ''));
}
