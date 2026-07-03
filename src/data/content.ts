import type { Localized } from './site';

export type EventItem = {
  title: Localized<string>;
  category: Localized<string>;
  description: Localized<string>;
};

export const events: EventItem[] = [
  {
    title: { fi: 'Kesäillan venevajakierros', en: 'An evening among the boat sheds' },
    category: { fi: 'Satamakävelyt', en: 'Harbour walks' },
    description: {
      fi: 'Rauhallinen kävely venevajojen lomassa antaa aikaa katsella puun sävyjä, veden heijastuksia ja lahden omaa rytmiä.',
      en: 'A slow walk along the line of sheds gives you time to notice the colours of the timber, reflections on the water and the bay’s own rhythm.'
    }
  },
  {
    title: { fi: 'Juojärven vesipäivä', en: 'A day on Lake Juojärvi' },
    category: { fi: 'Järvielämä', en: 'Lake life' },
    description: {
      fi: 'Melontaa, soutua tai rauhallista veneilyä – Juojärven selät ja saaret tarjoavat monenlaisia tapoja viettää päivä veden äärellä.',
      en: 'Paddling, rowing or gentle boating – the open waters and islands of Juojärvi offer many ways to spend a day by the lake.'
    }
  },
  {
    title: { fi: 'Vajojen tarinat', en: 'Stories of the sheds' },
    category: { fi: 'Historia ja yhteisö', en: 'History and community' },
    description: {
      fi: 'Venevajoihin liittyy muistoja ensimmäisistä veneistä, kalareissuista, talkoista ja kesäilloista. Tarinat tuovat yhteen niin paikallisia kuin uusia vierailijoitakin.',
      en: 'The boat sheds hold memories of first boats, fishing trips, shared work days and summer evenings. These stories connect long-time locals with visitors discovering Pitkälahti for the first time.'
    }
  }
];

export const galleryItems = [
  {
    title: { fi: 'Puinen rytmi veden reunalla', en: 'A wooden rhythm along the water' },
    category: { fi: 'Venevajat', en: 'Boat sheds' },
    tone: 'bg-[#8B3A2B]'
  },
  {
    title: { fi: 'Kirkas järvivesi ja hiljaiset selät', en: 'Clear water and quiet open stretches' },
    category: { fi: 'Järvielämä', en: 'Lake life' },
    tone: 'bg-[#0B1E33]'
  },
  {
    title: { fi: 'Kuparin ja sumun sävyt', en: 'Shades of copper and mist' },
    category: { fi: 'Syksy', en: 'Autumn' },
    tone: 'bg-[#B65F32]'
  },
  {
    title: { fi: 'Lumen ja jään hiljaisuus', en: 'The silence of snow and ice' },
    category: { fi: 'Talvi', en: 'Winter' },
    tone: 'bg-[#B3B0A8]'
  },
  {
    title: { fi: 'Valo myöhään illalla', en: 'Light that lingers late into the evening' },
    category: { fi: 'Kesä', en: 'Summer' },
    tone: 'bg-[#D9C4A0]'
  }
];

export const harbourServices = [
  {
    title: { fi: 'Saapumistieto', en: 'Arrival information' },
    status: { fi: 'Vierailijalle', en: 'For visitors' },
    description: {
      fi: 'Pitkälahti sijaitsee Juojärven rannalla Outokummun järvimaisemassa. Lahden suu ja venevajojen rivistö tekevät paikasta helposti tunnistettavan vesiltä saavuttaessa.',
      en: 'Pitkälahti lies on the shores of Lake Juojärvi in the lakeland landscape of Outokumpu. The mouth of the bay and the line of boat sheds make the place easy to recognise when arriving from the water.'
    }
  },
  {
    title: { fi: 'Varautuminen matkalle', en: 'Prepare for your visit' },
    status: { fi: 'Suunnittele itse', en: 'Plan ahead' },
    description: {
      fi: 'Kun liikut järvellä tai saavut maitse, varaudu retkeen omien tarpeidesi mukaan. Ajantasainen sää, kartat, varusteet ja reittisuunnitelma tekevät vierailusta rennomman.',
      en: 'Whether you arrive by water or by road, prepare for your trip according to your own needs. Up-to-date weather, charts, equipment and route planning make the visit more relaxed.'
    }
  },
  {
    title: { fi: 'Sataman tavat', en: 'Harbour etiquette' },
    status: { fi: 'Yhteinen alue', en: 'Shared shoreline' },
    description: {
      fi: 'Pitkälahti on jaettu ympäristö. Ystävällinen tervehdys, siisti jälki ja kohtuullinen äänentaso tekevät rannasta miellyttävän kaikille – paikallisille, veneilijöille ja vierailijoille.',
      en: 'Pitkälahti is a shared environment. A friendly greeting, leaving no trace and keeping noise at a reasonable level help make the shoreline pleasant for everyone.'
    }
  }
];

export const timeline = [
  {
    year: { fi: '1918', en: '1918' },
    title: { fi: 'Kapearaiteinen yhteys', en: 'A narrow-gauge connection' },
    body: {
      fi: 'Pitkälahden ja Outokummun historiaan kuuluu yhteys, jossa työ, vesireitit ja satama kulkivat rinnakkain. Rautatie ja järvi muodostivat aikanaan osan alueen arjen ja liikkumisen kokonaisuutta.',
      en: 'The history of Pitkälahti and Outokumpu includes a connection where work, waterways and the harbour moved side by side. The railway and the lake once formed part of the area’s everyday life and movement.'
    }
  },
  {
    year: { fi: '1900-luku', en: '20th century' },
    title: { fi: 'Venevajakylän kerrokset', en: 'Layers of the boat shed village' },
    body: {
      fi: 'Venevajat kertovat järven käytöstä, yhteisöstä ja kesäisestä rytmistä. Vuosikymmenten aikana niiden ympärille on muodostunut maisema, jossa käytännöllisyys ja vapaa-aika elävät rinnakkain.',
      en: 'The boat sheds tell a story of lake use, community and the rhythm of summer. Over the decades, the area has grown into a landscape where practicality and free time meet.'
    }
  },
  {
    year: { fi: 'Nyt', en: 'Today' },
    title: { fi: 'Sataman uusi digitaalinen vaihe', en: 'A new digital chapter' },
    body: {
      fi: 'Pitkälahti tekee itseään tutummaksi myös verkossa. Tavoitteena on antaa rauhallinen ja ajantasainen kuva satamasta, Juojärvestä ja venevajakylästä sekä paikallisille että kauempaa tuleville vierailijoille.',
      en: 'Today Pitkälahti is becoming easier to discover online as well. The aim is to offer a calm and current picture of the harbour, Lake Juojärvi and the boat shed village for both local people and visitors from further away.'
    }
  }
];

export const routes = [
  {
    title: { fi: 'Saariretket Juojärvellä', en: 'Island trips on Lake Juojärvi' },
    body: {
      fi: 'Juojärven saarissa ja rannoissa riittää tutkittavaa niin lyhyille kuin pidemmillekin retkille. Matkaa suunnitellessa kannattaa sovittaa reitti omaan kokemukseen, säähän ja käytettävissä olevaan aikaan.',
      en: 'The islands and shores of Lake Juojärvi offer plenty to explore on both short and longer outings. Plan your route around your experience, the weather and the time you have available.'
    }
  },
  {
    title: { fi: 'Valamon suunta', en: 'Towards Valamo' },
    body: {
      fi: 'Juojärven vesiltä avautuu ajatus pidemmistä retkistä kohti Valamon ja Heinäveden reitin maisemia. Pitkälahti on luonteva paikka pysähtyä ennen matkaa tai sen jälkeen, kun reitti on suunniteltu huolellisesti.',
      en: 'The waters of Juojärvi invite thoughts of longer journeys towards Valamo and the Heinävesi route. Pitkälahti is a natural place to pause before or after a carefully planned trip.'
    }
  },
  {
    title: { fi: 'Melonta ja kalastus', en: 'Paddling and fishing' },
    body: {
      fi: 'Rauhallinen vesi, saarien väliset salmet ja vuodenaikojen valo tekevät Juojärvestä miellyttävän ympäristön niin melojalle kuin kalastajallekin. Pitkälahti sopii hyvin retken lähtö- tai paluupisteeksi omatoimiselle järvipäivälle.',
      en: 'Calm waters, narrow sounds between islands and changing seasonal light make Juojärvi a pleasant environment for both paddlers and anglers. Pitkälahti is well suited as a starting or finishing point for an independent day on the lake.'
    }
  }
];

export const contactPlaceholders = {
  address: { fi: 'Pitkälahti, Outokumpu', en: 'Pitkälahti, Outokumpu' },
  email: { fi: 'Satamayhteisön paikalliset kanavat', en: 'Local harbour community channels' },
  phone: { fi: 'Paikalliset yhteyshenkilöt ja satamayhteisö', en: 'Local contact people and the harbour community' }
};
