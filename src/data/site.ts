import type { Locale, PageKey } from '@/lib/i18n';

export type Localized<T> = Record<Locale, T>;

export const siteMeta = {
  name: 'Pitkälahti',
  place: 'Outokumpu',
  tagline: {
    fi: 'Hiljaisen veden satama.',
    en: 'Harbour of quiet waters.'
  },
  description: {
    fi: 'Pitkälahti on Juojärven historiallisen venevajakylän sydän - paikka, jossa vesi, valo ja yhteisö kohtaavat.',
    en: 'Pitkälahti is the heart of Juojärvi’s historic boat shed village - a place where water, light and community come together.'
  }
} satisfies {
  name: string;
  place: string;
  tagline: Localized<string>;
  description: Localized<string>;
};

export const navigation: Array<{ key: PageKey; label: Localized<string> }> = [
  { key: 'history', label: { fi: 'Historia', en: 'History' } },
  { key: 'harbour', label: { fi: 'Satama', en: 'Harbour' } },
  { key: 'events', label: { fi: 'Tapahtumat', en: 'Events' } },
  { key: 'gallery', label: { fi: 'Galleria', en: 'Gallery' } },
  { key: 'boaters', label: { fi: 'Veneilijälle', en: 'For boaters' } },
  { key: 'things', label: { fi: 'Tekemistä', en: 'Things to do' } },
  { key: 'contact', label: { fi: 'Yhteystiedot', en: 'Contact' } },
  { key: 'portal', label: { fi: 'Venevajaportaali', en: 'Boat shed portal' } }
];

export const homeAnchors = [
  { id: 'venevajakylä', label: { fi: 'Venevajakylä', en: 'Boat sheds' } },
  { id: 'juojärvi', label: { fi: 'Juojärvi', en: 'Lake Juojärvi' } },
  { id: 'satamaelämä', label: { fi: 'Satamaelämä', en: 'Harbour life' } },
  { id: 'tapahtumat', label: { fi: 'Tapahtumat', en: 'Events' } },
  { id: 'saapuminen', label: { fi: 'Saapuminen', en: 'Arrival' } }
] satisfies Array<{ id: string; label: Localized<string> }>;

export const cta = {
  explore: { fi: 'Tutustu satamaan', en: 'Explore the harbour' },
  portal: { fi: 'Venevajaportaali', en: 'Boat shed portal' },
  readHistory: { fi: 'Lue historia', en: 'Read the story' },
  allEvents: { fi: 'Katso tapahtumat', en: 'View events' },
  contact: { fi: 'Ota yhteyttä', en: 'Contact' }
} satisfies Record<string, Localized<string>>;
