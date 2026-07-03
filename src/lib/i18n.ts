export const locales = ['fi', 'en'] as const;

export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export const localeLabels: Record<Locale, string> = {
  fi: 'Suomi',
  en: 'English'
};

export const routeSlugs = {
  history: { fi: 'historia', en: 'history' },
  harbour: { fi: 'satama', en: 'harbour' },
  events: { fi: 'tapahtumat', en: 'events' },
  gallery: { fi: 'galleria', en: 'gallery' },
  boaters: { fi: 'veneilijalle', en: 'for-boaters' },
  things: { fi: 'tekemista-juojarvella', en: 'things-to-do' },
  contact: { fi: 'yhteystiedot', en: 'contact' },
  portal: { fi: 'venevajaportaali', en: 'boat-shed-portal' }
} as const;

export type PageKey = keyof typeof routeSlugs;

export function pathFor(locale: Locale, key?: PageKey) {
  if (!key) {
    return `/${locale}`;
  }
  return `/${locale}/${routeSlugs[key][locale]}`;
}

export function pageKeyFromSlug(locale: Locale, slug: string): PageKey | undefined {
  return (Object.keys(routeSlugs) as PageKey[]).find((key) => routeSlugs[key][locale] === slug);
}

export function alternatePath(currentLocale: Locale, targetLocale: Locale, key?: PageKey) {
  return pathFor(targetLocale, key);
}
