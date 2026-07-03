import type { Localized } from './site';

export type PitkalahtiImageKey =
  | 'autumn'
  | 'annaKrakowa'
  | 'iiriBoat'
  | 'boatShedsSunset'
  | 'childWildflowers'
  | 'familyBoatSunset'
  | 'feetInWater'
  | 'forestTrail'
  | 'harbourDaylight'
  | 'harbourEvent'
  | 'midsummerBonfire'
  | 'mistyHarbourSunrise'
  | 'railway1918'
  | 'rowboatEvening'
  | 'sawmill1951'
  | 'sunsetDock'
  | 'supSunset'
  | 'swimmingBeach'
  | 'winter';

type PitkalahtiImage = {
  src: string;
  width: number;
  height: number;
  alt: Localized<string>;
  objectPosition: string;
  mobileObjectPosition?: string;
};

const assetPath = '/assets/pitkalahti/';

export const pitkalahtiImages: Record<PitkalahtiImageKey, PitkalahtiImage> = {
  autumn: {
    src: `${assetPath}pitkalahti-autumn.png`,
    width: 1448,
    height: 1086,
    alt: { fi: 'Pitkälahden rantamaisema syksyn väreissä', en: 'Pitkälahti shoreline in autumn colours' },
    objectPosition: '50% 50%'
  },
  annaKrakowa: {
    src: `${assetPath}anna-krakowa-lake-juojarvi.png`,
    width: 1086,
    height: 1448,
    alt: { fi: 'Anna Krakowa -alus Juojärven laiturissa', en: 'The vessel Anna Krakowa at a Lake Juojärvi dock' },
    objectPosition: '50% 50%'
  },
  iiriBoat: {
    src: `${assetPath}iiri-boat-pitkalahti.png`,
    width: 1557,
    height: 1010,
    alt: { fi: 'Iiri-vene Pitkälahdessa venevajojen edustalla', en: 'The boat Iiri at Pitkälahti in front of the boat sheds' },
    objectPosition: '46% 50%',
    mobileObjectPosition: '45% 50%'
  },
  boatShedsSunset: {
    src: `${assetPath}pitkalahti-boat-sheds-sunset.png`,
    width: 1672,
    height: 941,
    alt: { fi: 'Venevajat Juojärven rannalla ilta-auringossa', en: 'Boat sheds on the shore of Lake Juojärvi in evening light' },
    objectPosition: '54% 50%',
    mobileObjectPosition: '58% 50%'
  },
  childWildflowers: {
    src: `${assetPath}pitkalahti-child-wildflowers.png`,
    width: 1479,
    height: 1063,
    alt: { fi: 'Lapsi kukkaniityllä Pitkälahden kesässä', en: 'A child in wildflowers during summer at Pitkälahti' },
    objectPosition: '52% 44%'
  },
  familyBoatSunset: {
    src: `${assetPath}pitkalahti-family-boat-sunset.png`,
    width: 1448,
    height: 822,
    alt: {
      fi: 'Perhe veneellä Pitkälahden venevajojen välissä auringonlaskussa',
      en: 'Family boating between the Pitkälahti boat sheds at sunset'
    },
    objectPosition: '50% 50%'
  },
  feetInWater: {
    src: `${assetPath}pitkalahti-feet-in-water.png`,
    width: 1466,
    height: 1073,
    alt: { fi: 'Jalat laiturilta vedessä iltavalossa', en: 'Feet in the water from a dock in evening light' },
    objectPosition: '50% 56%'
  },
  forestTrail: {
    src: `${assetPath}pitkalahti-forest-trail.png`,
    width: 1536,
    height: 1024,
    alt: { fi: 'Metsäpolku Pitkälahden lähiluonnossa', en: 'A forest trail near Pitkälahti' },
    objectPosition: '50% 55%'
  },
  harbourDaylight: {
    src: `${assetPath}pitkalahti-harbour-daylight.png`,
    width: 1673,
    height: 940,
    alt: { fi: 'Pitkälahden satama ja veneitä kesäpäivänä', en: 'Boats at Pitkälahti harbour on a summer day' },
    objectPosition: '52% 52%',
    mobileObjectPosition: '48% 52%'
  },
  harbourEvent: {
    src: `${assetPath}pitkalahti-harbour-event.png`,
    width: 1537,
    height: 1023,
    alt: { fi: 'Ihmisiä ja tapahtumatelttoja Pitkälahden satamassa', en: 'People and event tents at Pitkälahti harbour' },
    objectPosition: '50% 52%'
  },
  midsummerBonfire: {
    src: `${assetPath}pitkalahti-midsummer-bonfire.png`,
    width: 1086,
    height: 1448,
    alt: { fi: 'Juhannuskokko järven rannalla', en: 'Midsummer bonfire by the lake' },
    objectPosition: '50% 50%'
  },
  mistyHarbourSunrise: {
    src: `${assetPath}pitkalahti-misty-harbour-sunrise.png`,
    width: 1535,
    height: 1024,
    alt: { fi: 'Sumuinen aamu Pitkälahden satamassa', en: 'Misty morning at Pitkälahti harbour' },
    objectPosition: '50% 48%'
  },
  railway1918: {
    src: `${assetPath}pitkalahti-railway-1918.png`,
    width: 1503,
    height: 1036,
    alt: { fi: 'Historiallinen sorajuna Pitkälahden radalla vuonna 1918', en: 'Historic gravel train on the Pitkälahti railway in 1918' },
    objectPosition: '50% 52%'
  },
  rowboatEvening: {
    src: `${assetPath}pitkalahti-rowboat-evening.png`,
    width: 1528,
    height: 1029,
    alt: { fi: 'Soutuvene iltavalossa Pitkälahden venevajojen välissä', en: 'A rowboat in evening light between the Pitkälahti boat sheds' },
    objectPosition: '50% 50%'
  },
  sawmill1951: {
    src: `${assetPath}pitkalahti-sawmill-1951.png`,
    width: 1515,
    height: 983,
    alt: { fi: 'Pitkälahden teollinen rantamaisema vuonna 1951', en: 'Industrial shoreline at Pitkälahti in 1951' },
    objectPosition: '50% 46%'
  },
  sunsetDock: {
    src: `${assetPath}pitkalahti-sunset-dock.png`,
    width: 1448,
    height: 1086,
    alt: { fi: 'Laituri ja tyyni Juojärvi auringonlaskussa', en: 'A dock and calm Lake Juojärvi at sunset' },
    objectPosition: '50% 54%'
  },
  supSunset: {
    src: `${assetPath}pitkalahti-sup-sunset.png`,
    width: 1462,
    height: 1076,
    alt: { fi: 'SUP-melojia Juojärvellä auringonlaskussa', en: 'Stand-up paddlers on Lake Juojärvi at sunset' },
    objectPosition: '50% 52%'
  },
  swimmingBeach: {
    src: `${assetPath}pitkalahti-swimming-beach.png`,
    width: 1537,
    height: 1023,
    alt: { fi: 'Kesäinen uimapaikka Juojärven rannalla', en: 'A summer swimming spot on the shore of Lake Juojärvi' },
    objectPosition: '50% 50%'
  },
  winter: {
    src: `${assetPath}pitkalahti-winter.png`,
    width: 1610,
    height: 977,
    alt: { fi: 'Pitkälahti talven lumessa ja jäässä', en: 'Pitkälahti in winter snow and ice' },
    objectPosition: '50% 50%'
  }
};
