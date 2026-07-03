import type { Localized } from './site';

export type EventItem = {
  title: Localized<string>;
  date: string;
  category: Localized<string>;
  description: Localized<string>;
  note?: Localized<string>;
};

export const events: EventItem[] = [
  {
    title: { fi: 'Kesäillan satamakävely', en: 'Summer evening harbour walk' },
    date: '2026-06-27',
    category: { fi: 'Ohjelmaesimerkki', en: 'Sample programme' },
    description: {
      fi: 'Rauhallinen kävely venevajakylän tunnelmaan, järven valoon ja paikalliseen tarinaan.',
      en: 'A quiet walk through the boat shed village atmosphere, lake light and local story.'
    },
    note: { fi: 'Demosisältö - ajankohta varmistuu myöhemmin.', en: 'Demo content - timing to be confirmed.' }
  },
  {
    title: { fi: 'Juojärven melontapäivä', en: 'Lake Juojärvi paddling day' },
    date: '2026-07-18',
    category: { fi: 'Järvielämä', en: 'Lake life' },
    description: {
      fi: 'Kevyt tapahtumakonsepti melojille ja järviluonnosta kiinnostuneille.',
      en: 'A light event concept for paddlers and visitors interested in lake nature.'
    },
    note: { fi: 'Ohjelmaluonnos.', en: 'Programme concept.' }
  },
  {
    title: { fi: 'Vajojen tarinat', en: 'Stories of the sheds' },
    date: '2026-08-08',
    category: { fi: 'Historia', en: 'History' },
    description: {
      fi: 'Paikallishistoriaan nojaava iltapäivä, jossa työ, vesireitit ja vapaa-aika kohtaavat.',
      en: 'An afternoon shaped by local history, where work, waterways and leisure meet.'
    },
    note: { fi: 'Esimerkkitapahtuma.', en: 'Sample event.' }
  }
];

export const galleryItems = [
  {
    title: { fi: 'Venevajojen rytmi', en: 'Rhythm of the boat sheds' },
    category: { fi: 'Venevajat', en: 'Boat Sheds' },
    tone: 'bg-[#8B3A2B]'
  },
  {
    title: { fi: 'Kirkas järvivesi', en: 'Clear lake water' },
    category: { fi: 'Järvielämä', en: 'Lake Life' },
    tone: 'bg-[#0B1E33]'
  },
  {
    title: { fi: 'Syksyn kupari', en: 'Autumn copper' },
    category: { fi: 'Syksy', en: 'Autumn' },
    tone: 'bg-[#B65F32]'
  },
  {
    title: { fi: 'Talven hiljaisuus', en: 'Winter quiet' },
    category: { fi: 'Talvi', en: 'Winter' },
    tone: 'bg-[#B3B0A8]'
  },
  {
    title: { fi: 'Kesän valo', en: 'Summer light' },
    category: { fi: 'Kesä', en: 'Summer' },
    tone: 'bg-[#D9C4A0]'
  }
];

export const harbourServices = [
  {
    title: { fi: 'Saapumistieto', en: 'Arrival information' },
    status: { fi: 'Informatiivinen', en: 'Informational' },
    description: {
      fi: 'Ensimmäinen versio kokoaa vierailijan kannalta olennaisen satamaympäristön yleisesittelyn.',
      en: 'The first version gathers a visitor-oriented overview of the harbour setting.'
    }
  },
  {
    title: { fi: 'Palvelutiedot', en: 'Service details' },
    status: { fi: 'Varmennetaan', en: 'To be confirmed' },
    description: {
      fi: 'Yksittäiset palvelut, aukioloajat ja varauskäytännöt lisätään vasta vahvistuksen jälkeen.',
      en: 'Specific services, opening hours and booking practices will be added after confirmation.'
    }
  },
  {
    title: { fi: 'Tapahtumaohjelma', en: 'Event programme' },
    status: { fi: 'Luonnos', en: 'Draft' },
    description: {
      fi: 'Tapahtumakortit näyttävät tulevan ohjelmasisällön rakenteen demodatalla.',
      en: 'Event cards show the future programme structure with demo data.'
    }
  }
];

export const timeline = [
  {
    year: '1918',
    title: { fi: 'Kapearaiteinen yhteys', en: 'Narrow-gauge connection' },
    body: {
      fi: 'Outokummun kaivoksen ja Pitkälahden välinen kapearaiteinen yhteys liitti työn, vesireitit ja sataman samaan tarinaan.',
      en: 'The narrow-gauge connection between the Outokumpu mine and Pitkälahti linked work, waterways and the harbour into one story.'
    }
  },
  {
    year: '1900-luku',
    title: { fi: 'Venevajakylän kerrokset', en: 'Layers of the boat shed village' },
    body: {
      fi: 'Venevajat kertovat järven käytöstä, yhteisöstä ja kesäisestä rytmistä sukupolvien yli.',
      en: 'The boat sheds speak of lake use, community and summer rhythms across generations.'
    }
  },
  {
    year: 'Nyt',
    title: { fi: 'Sataman uusi digitaalinen vaihe', en: 'A new digital chapter' },
    body: {
      fi: 'Pitkälahti rakentaa näkyvyyttä, vierailukokemusta ja tulevia jäsenpalveluja rauhallisesti ja paikallista luonnetta kunnioittaen.',
      en: 'Pitkälahti is shaping visibility, visitor experience and future member services with calm respect for local character.'
    }
  }
];

export const routes = [
  {
    title: { fi: 'Saariretket Juojärvellä', en: 'Island outings on Juojärvi' },
    body: {
      fi: 'Suunnittele retki sää, kokemus ja varusteet huomioiden. Järvelle lähdetään aina paikalliset olosuhteet edellä.',
      en: 'Plan outings around weather, experience and equipment. Local conditions always come first on the lake.'
    }
  },
  {
    title: { fi: 'Valamon suunta', en: 'Toward Valamo' },
    body: {
      fi: 'Juojärven reitit avaavat mielikuvan pidemmistä retkistä Valamon suuntaan.',
      en: 'Lake Juojärvi routes suggest longer excursions in the direction of Valamo.'
    }
  },
  {
    title: { fi: 'Melonta ja kalastus', en: 'Paddling and fishing' },
    body: {
      fi: 'Rauhallinen vesi, saaret ja vuodenaikojen valo tekevät alueesta luontevan lähtöpisteen järvielämään.',
      en: 'Quiet water, islands and seasonal light make the area a natural starting point for lake life.'
    }
  }
];

export const contactPlaceholders = {
  address: { fi: 'Pitkälahti, Outokumpu - tarkka osoite varmistetaan', en: 'Pitkälahti, Outokumpu - exact address to be confirmed' },
  email: { fi: 'Sähköposti lisätään myöhemmin', en: 'Email to be added later' },
  phone: { fi: 'Puhelintieto lisätään myöhemmin', en: 'Phone details to be added later' }
};
