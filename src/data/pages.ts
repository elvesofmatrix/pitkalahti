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
    title: { fi: 'Työn, vesireittien ja vapaa-ajan yhteys.', en: 'Where work, waterways and free time meet.' },
    intro: {
      fi: 'Pitkälahden historia kerrostuu venevajojen, Juojärven, Outokummun työn ja kesäisen järvielämän ympärille.',
      en: 'Pitkälahti’s history is layered around the boat sheds, Lake Juojärvi, Outokumpu’s working life and summers by the water.'
    },
    sections: [
      {
        title: { fi: 'Kapearaiteinen yhteys', en: 'A narrow-gauge connection' },
        body: {
          fi: 'Pitkälahden ja Outokummun historiaan kuuluu yhteys, jossa työ, vesireitit ja satama kulkivat rinnakkain. Rautatie ja järvi muodostivat aikanaan osan alueen arjen ja liikkumisen kokonaisuutta.',
          en: 'The history of Pitkälahti and Outokumpu includes a connection where work, waterways and the harbour moved side by side. The railway and the lake once formed part of the area’s everyday life and movement.'
        }
      },
      {
        title: { fi: 'Venevajakylän kerrokset', en: 'Layers of the boat shed village' },
        body: {
          fi: 'Venevajat kertovat järven käytöstä, yhteisöstä ja kesäisestä rytmistä. Vuosikymmenten aikana niiden ympärille on muodostunut maisema, jossa käytännöllisyys ja vapaa-aika elävät rinnakkain.',
          en: 'The boat sheds tell a story of lake use, community and the rhythm of summer. Over the decades, the area has grown into a landscape where practicality and free time meet.'
        }
      }
    ]
  },
  harbour: {
    eyebrow: { fi: 'Satama', en: 'Harbour' },
    title: { fi: 'Käytännöllinen, rauhallinen pysähdys.', en: 'A practical, unhurried stop.' },
    intro: {
      fi: 'Pitkälahti on rauhallinen lahti, jossa voi pysähtyä hetkeksi, katsella venevajoja ja antaa järvimaiseman tehdä tehtävänsä.',
      en: 'Pitkälahti is a quiet bay where you can pause for a while, take in the boat sheds and let the lake set the pace.'
    },
    sections: [
      {
        title: { fi: 'Satamaelämä', en: 'Harbour life' },
        body: {
          fi: 'Satama-alue on yhteinen ympäristö paikallisille, venevajojen omistajille ja vierailijoille. Ennen matkaa on hyvä tarkistaa ajantasaiset käytännön tiedot paikallisista lähteistä, mutta paikan perusajatus pysyy samana: Pitkälahti tarjoaa tilaa hengähtää veden äärellä.',
          en: 'The harbour area is a shared environment for local residents, boat shed owners and visitors. Before travelling, it is wise to check current practical information from local sources, but the core idea remains the same: Pitkälahti offers space to slow down by the water.'
        }
      }
    ]
  },
  events: {
    eyebrow: { fi: 'Tapahtumat', en: 'Events' },
    title: { fi: 'Kesäisiä syitä tulla rantaan.', en: 'Summer reasons to come to the shore.' },
    intro: {
      fi: 'Pitkälahden parhaat hetket syntyvät usein pienestä: iltakävelystä vajarivin ohi, yhteisestä melontalenkistä, satamapäivästä tai paikallisen historian äärelle pysähtymisestä.',
      en: 'The best moments in Pitkälahti are often simple: an evening walk among the boat sheds, a shared paddle, a harbour day or a pause to listen to local stories.'
    },
    sections: [
      {
        title: { fi: 'Ohjelmaa ja yhteisiä hetkiä', en: 'Events and shared moments' },
        body: {
          fi: 'Ajankohtaiset tapahtumat ja yhteiset hetket kootaan tänne, kun ohjelmaa järjestetään Pitkälahden, paikallisten toimijoiden ja satamayhteisön voimin.',
          en: 'Current events and shared moments are gathered here whenever they are organised by Pitkälahti, local partners and the harbour community.'
        }
      }
    ]
  },
  gallery: {
    eyebrow: { fi: 'Galleria', en: 'Gallery' },
    title: { fi: 'Vuodenajat, vesi ja vajat.', en: 'Seasons, water and sheds.' },
    intro: {
      fi: 'Kuvagalleria kokoaa yhteen Pitkälahden ja Juojärven eri hetkiä: kevään kirkastuvaa valoa, kesäiltojen tyyntä vettä, syksyn kuparisia rantoja ja talven hiljaisuutta.',
      en: 'The gallery brings together different moments from Pitkälahti and Lake Juojärvi: bright spring light, calm summer evenings, copper tones in autumn and the stillness of winter.'
    },
    sections: [
      {
        title: { fi: 'Pitkälahden kuvia', en: 'Images of Pitkälahti' },
        body: {
          fi: 'Venevajat, kirkas järvivesi, vuodenaikojen valo ja hiljaiset selät muodostavat kuvaston rungon.',
          en: 'Boat sheds, clear lake water, seasonal light and quiet open stretches form the heart of the visual collection.'
        }
      }
    ]
  },
  boaters: {
    eyebrow: { fi: 'Veneilijälle', en: 'For boaters' },
    title: { fi: 'Järvelle lähdetään olosuhteet edellä.', en: 'On this lake, conditions come first.' },
    intro: {
      fi: 'Juojärvi on maisemaltaan avoin, vaihteleva ja monin paikoin tarkkaa navigointia vaativa järvi. Se palkitsee rauhallisella etenemisellä, huolellisella suunnittelulla ja omiin taitoihin sopivilla reiteillä.',
      en: 'Lake Juojärvi is open, varied and in many places a lake that requires careful navigation. It rewards calm progress, thoughtful planning and routes that suit your own skills.'
    },
    sections: [
      {
        title: { fi: 'Retki Pitkälahden ja Juojärven vesille', en: 'A trip to Pitkälahti and Lake Juojärvi' },
        body: {
          fi: 'Tämä sivu tarjoaa yleiskuvan veneilijälle, joka suunnittelee retkeä Pitkälahden ja Juojärven vesille omalla veneellä, kanootilla tai kajakilla. Tarkista aina sää, varusteet, kartat ja voimassa olevat määräykset ennen vesille lähtöä. Tämä sivusto ei korvaa virallisia navigointi- tai viranomaispalveluja.',
          en: 'This page gives a general overview for boaters planning a trip to Pitkälahti and the waters of Juojärvi with their own boat, canoe or kayak. Always check the weather, equipment, charts and current regulations before going on the water. This site does not replace official navigation or authority services.'
        }
      }
    ]
  },
  things: {
    eyebrow: { fi: 'Tekemistä Juojärvellä', en: 'Things to do on Juojärvi' },
    title: { fi: 'Kirkas vesi, saaret ja hidas kesävalo.', en: 'Clear water, islands and long summer light.' },
    intro: {
      fi: 'Juojärvi on laaja järvimaisema, jossa selät, saaret ja suojaisat lahdet jättävät tilaa hengittää.',
      en: 'Lake Juojärvi is a broad lakeland landscape of open waters, islands and sheltered bays.'
    },
    sections: [
      {
        title: { fi: 'Rauhallinen järvipäivä', en: 'A calm day on the lake' },
        body: {
          fi: 'Pitkälahdesta avautuu näkymä vesille, joilla veneily, melonta, kalastus ja rauhalliset retket kulkevat luontevasti hitaamman matkanteon rinnalla.',
          en: 'From Pitkälahti, the view opens towards a place where boating, paddling, fishing and quiet outings belong naturally to a slower way of travelling.'
        }
      }
    ]
  },
  contact: {
    eyebrow: { fi: 'Yhteystiedot', en: 'Contact' },
    title: { fi: 'Yhteys Pitkälahteen.', en: 'Get in touch with Pitkälahti.' },
    intro: {
      fi: 'Pitkälahti on yhteinen ympäristö paikallisille, venevajojen omistajille ja vierailijoille.',
      en: 'Pitkälahti is a shared environment for local residents, boat shed owners and visitors.'
    },
    sections: [
      {
        title: { fi: 'Kysy paikallisista käytännöistä', en: 'Ask about local practices' },
        body: {
          fi: 'Kun tarvitset ajantasaista tietoa vierailusta, tapahtumista tai satamayhteisöstä, tarkista tieto paikallisista lähteistä ja yhteyshenkilöiltä.',
          en: 'When you need current information about visiting, events or the harbour community, check local sources and contact people.'
        }
      }
    ]
  },
  portal: {
    eyebrow: { fi: 'Venevajaportaali', en: 'Boat Shed Portal' },
    title: { fi: 'Rauhallinen digitaalinen koti sataman arkeen.', en: 'A calm digital home for harbour life.' },
    intro: {
      fi: 'Venevajaportaali on Pitkälahden venevajojen omistajille ja satamayhteisölle suunnattu palvelu.',
      en: 'The Boat Shed Portal is intended for the owners of the boat sheds in Pitkälahti and the local harbour community.'
    },
    sections: [
      {
        title: { fi: 'Venevajojen omistajille', en: 'For boat shed owners' },
        body: {
          fi: 'Sen kautta voidaan koota yhteen tiedotteita, yhteisiä pelisääntöjä, asiakirjoja ja sataman arkeen liittyviä ilmoituksia. Portaalin käyttö on rajattu yhteisön jäsenille. Venevajojen omistajat ja muut satamayhteisöön kuuluvat saavat kirjautumisohjeet erikseen.',
          en: 'It offers a shared place for notices, guidelines, documents and everyday information related to the harbour. Access is limited to members of the community. Boat shed owners and other members of the harbour community receive login details separately.'
        }
      }
    ]
  }
};
