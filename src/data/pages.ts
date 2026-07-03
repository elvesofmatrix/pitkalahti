import type { PageKey } from '@/lib/i18n';
import type { Localized } from './site';

export type PageContent = {
  title: Localized<string>;
  intro: Localized<string>;
  eyebrow: Localized<string>;
  sections: Array<{
    title: Localized<string>;
    body: Localized<string>;
  }>;
};

export const pages: Record<PageKey, PageContent> = {
  history: {
    eyebrow: { fi: 'Historia', en: 'History' },
    title: { fi: 'Pitkälahden rantaan kerrostunut aika.', en: 'Time layered on the Pitkälahti shoreline.' },
    intro: {
      fi: 'Pitkälahti kertoo tarinaa venevajakylästä, Juojärvestä ja Outokummun työn historiasta.',
      en: 'Pitkälahti tells a story of the boat shed village, Lake Juojärvi and Outokumpu’s working history.'
    },
    sections: [
      {
        title: { fi: 'Kapearaiteisen rautatien muisto', en: 'Memory of the narrow-gauge railway' },
        body: {
          fi: 'Vuoden 1918 kapearaiteinen yhteys Outokummun kaivoksen ja Pitkälahden välillä on yksi paikan vahvoista historiallisista teemoista. Se liittää sataman laajempaan kertomukseen työstä, liikkumisesta ja vesireiteistä.',
          en: 'The 1918 narrow-gauge connection between the Outokumpu mine and Pitkälahti is one of the place’s strong historical themes. It connects the harbour to a broader story of work, movement and waterways.'
        }
      },
      {
        title: { fi: 'Venevajakylä', en: 'The boat shed village' },
        body: {
          fi: 'Venevajat muodostavat maisemaan tunnistettavan rytmin. Ne eivät ole lavaste vaan paikallisen järvielämän, omistajuuden ja kesäisen käytön jälki.',
          en: 'The boat sheds create a recognisable rhythm in the landscape. They are not scenery but a trace of local lake life, ownership and summer use.'
        }
      }
    ]
  },
  harbour: {
    eyebrow: { fi: 'Satama', en: 'Harbour' },
    title: { fi: 'Rauhallinen lähtöpiste Juojärvelle.', en: 'A calm starting point for Lake Juojärvi.' },
    intro: {
      fi: 'Satamasivu kokoaa yleiskuvan vierailijalle. Yksityiskohtaiset palvelutiedot lisätään vasta vahvistettuina.',
      en: 'The harbour page gathers a visitor overview. Detailed service information will be added only once verified.'
    },
    sections: [
      {
        title: { fi: 'Vierailijan näkökulma', en: 'Visitor perspective' },
        body: {
          fi: 'Pitkälahti esitellään tässä vaiheessa maisemana, saapumiskokemuksena ja paikallisena satamaympäristönä. Sivusto ei vielä lupaa tarkkoja palveluita, paikkamääriä tai aukioloaikoja.',
          en: 'Pitkälahti is presented at this stage as a landscape, arrival experience and local harbour setting. The site does not yet promise exact services, berth counts or opening hours.'
        }
      }
    ]
  },
  events: {
    eyebrow: { fi: 'Tapahtumat', en: 'Events' },
    title: { fi: 'Ohjelmaa veden äärellä.', en: 'Programme by the water.' },
    intro: {
      fi: 'Tapahtumasivu näyttää tulevan ohjelmarakenteen demosisällöllä.',
      en: 'The events page shows the future programme structure with demo content.'
    },
    sections: [
      {
        title: { fi: 'Kesän rytmi', en: 'Summer rhythm' },
        body: {
          fi: 'Tuleva ohjelma voi rakentua kävelyistä, paikallishistoriasta, järviretkistä ja yhteisöllisistä kesähetkistä.',
          en: 'The future programme can be shaped by walks, local history, lake outings and shared summer moments.'
        }
      }
    ]
  },
  gallery: {
    eyebrow: { fi: 'Galleria', en: 'Gallery' },
    title: { fi: 'Kuvallinen tunnelma ennen varsinaista kuva-arkistoa.', en: 'Visual atmosphere before the real image archive.' },
    intro: {
      fi: 'Galleria käyttää v1:ssä paikallisia visuaalisia paikkamerkkejä ja kategorioita.',
      en: 'In v1 the gallery uses local visual placeholders and categories.'
    },
    sections: [
      {
        title: { fi: 'Kategorioita kuva-arkistolle', en: 'Categories for the image archive' },
        body: {
          fi: 'Kesä, syksy, talvi, järvielämä ja venevajat muodostavat tulevan kuvaston rungon.',
          en: 'Summer, autumn, winter, lake life and boat sheds form the structure for the future image collection.'
        }
      }
    ]
  },
  boaters: {
    eyebrow: { fi: 'Veneilijälle', en: 'For boaters' },
    title: { fi: 'Järvelle lähdetään olosuhteet edellä.', en: 'The lake is approached through conditions first.' },
    intro: {
      fi: 'Veneilijän sivu painottaa vastuullista retkisuunnittelua, paikallisia olosuhteita ja Juojärven saarimaisemaa.',
      en: 'The boaters page emphasizes responsible planning, local conditions and Lake Juojärvi’s island landscape.'
    },
    sections: [
      {
        title: { fi: 'Turvallinen retki', en: 'A safe outing' },
        body: {
          fi: 'Tarkista sää, varusteet ja oma kokemus. Tämä sivusto ei korvaa ajantasaisia viranomais- tai karttapalveluita.',
          en: 'Check weather, equipment and your own experience. This website does not replace current official or map services.'
        }
      }
    ]
  },
  things: {
    eyebrow: { fi: 'Tekemistä Juojärvellä', en: 'Things to do on Juojärvi' },
    title: { fi: 'Veneilyä, melontaa, kalastusta ja vuodenaikojen valoa.', en: 'Boating, paddling, fishing and seasonal light.' },
    intro: {
      fi: 'Pitkälahti toimii luontevana lähtöpisteenä rauhalliseen järvikokemukseen.',
      en: 'Pitkälahti works as a natural starting point for a calm lake experience.'
    },
    sections: [
      {
        title: { fi: 'Perheille ja retkeilijöille', en: 'For families and explorers' },
        body: {
          fi: 'Järviluonto, rannan historia ja kesäiset tapahtumat luovat kevyitä syitä viipyä pidempään.',
          en: 'Lake nature, shoreline history and summer events create gentle reasons to stay longer.'
        }
      }
    ]
  },
  contact: {
    eyebrow: { fi: 'Yhteystiedot', en: 'Contact' },
    title: { fi: 'Yhteys Pitkälahteen.', en: 'Get in touch with Pitkälahti.' },
    intro: {
      fi: 'Yhteystiedot merkitään tässä vaiheessa paikkamerkeiksi, kunnes ne vahvistetaan.',
      en: 'Contact details are marked as placeholders until verified.'
    },
    sections: [
      {
        title: { fi: 'Lomake käyttöliittymänä', en: 'Form as interface' },
        body: {
          fi: 'Yhteydenottolomake on v1:ssä visuaalinen käyttöliittymä, ei vielä lähettävä taustapalvelu.',
          en: 'The contact form in v1 is a visual user interface, not yet a sending backend service.'
        }
      }
    ]
  },
  portal: {
    eyebrow: { fi: 'Venevajaportaali', en: 'Boat shed portal' },
    title: { fi: 'Tuleva palvelu venevajojen omistajille.', en: 'A future service for boat shed owners.' },
    intro: {
      fi: 'Portaali on tässä vaiheessa premium-esittely ja kirjautumisen paikkamerkki.',
      en: 'The portal is currently a premium introduction and login placeholder.'
    },
    sections: [
      {
        title: { fi: 'Kutsupohjainen tulevaisuus', en: 'Invitation-based future' },
        body: {
          fi: 'Tuleva portaali voi koota omistajaviestinnän, dokumentit, satamatiedotteet ja tapahtumat yhteen rauhalliseen palveluun.',
          en: 'The future portal may gather owner communication, documents, harbour notices and events into one calm service.'
        }
      }
    ]
  }
};
