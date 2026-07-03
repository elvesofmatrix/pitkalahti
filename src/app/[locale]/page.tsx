import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { EventGrid, GalleryMosaic, HarbourStatus, MapSection, RouteGrid, Timeline } from '@/components/Cards';
import { HeroSection } from '@/components/HeroSection';
import { ContentSection, PortalTeaser } from '@/components/PageParts';
import { ImageFrame } from '@/components/ImageFrame';
import { SectionHeading } from '@/components/SectionHeading';
import { cta } from '@/data/site';
import { routes } from '@/data/content';
import { pages } from '@/data/pages';
import { isLocale, pathFor, type Locale } from '@/lib/i18n';
import { PrimaryButton } from '@/components/Buttons';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: value } = await params;
  const locale = isLocale(value) ? value : 'fi';
  return {
    title: locale === 'fi' ? 'Hiljaisen veden satama' : 'Harbour of quiet waters',
    description:
      locale === 'fi'
        ? 'Pitkälahti on Juojärven historiallisen venevajakylän sydän Outokummussa.'
        : 'Pitkälahti is the heart of Juojärvi’s historic boat shed village in Outokumpu.'
  };
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: value } = await params;
  if (!isLocale(value)) notFound();
  const locale = value as Locale;
  const anchors = {
    history: locale === 'fi' ? 'historia' : 'history',
    harbour: locale === 'fi' ? 'satama' : 'harbour',
    events: locale === 'fi' ? 'tapahtumat' : 'events',
    gallery: locale === 'fi' ? 'galleria' : 'gallery',
    boaters: locale === 'fi' ? 'veneilijalle' : 'for-boaters'
  };

  return (
    <main>
      <HeroSection locale={locale} />
      <ContentSection id={anchors.history}>
        <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow={locale === 'fi' ? 'Historiallinen venevajakylä' : 'Historic boat shed village'}
            title={locale === 'fi' ? 'Puinen rytmi veden reunalla.' : 'A wooden rhythm along the water.'}
            intro={
              locale === 'fi'
                ? 'Pitkälahden tunnistaa jo kaukaa: lahden molempia rantoja seuraa nauha punaisia ja harmaita venevajoja, jotka tekevät maisemasta omaleimaisen.'
                : 'You recognise Pitkälahti from a distance: both shores of the bay are lined with red and grey boat sheds that give this lakeside setting its distinctive character.'
            }
          />
          <div className="grid gap-5 text-lg leading-8 text-[#3B4B58]">
            <p>
              {locale === 'fi'
                ? 'Venevajat ovat syntyneet järven, työn ja vapaa-ajan yhteiseen tarinaan. Niiden ympärille on vuosikymmenten aikana kasvanut paikka, jossa souturetket, kalareissut, kesäillat ja yhteiset muistot ovat kulkeneet rinnakkain.'
                : 'The sheds belong to a longer story of lake life, work and free time. Over the decades, the area has gathered memories of rowing trips, fishing days, summer evenings and a close connection to the water.'}
            </p>
            <p>
              {locale === 'fi'
                ? 'Tänään Pitkälahti on rauhallinen pysähdyspaikka. Vajarivin ohi voi kulkea hitaasti, katsella veden heijastuksia ja aistia, miten vahvasti Juojärvi kuuluu paikalliseen elämään.'
                : 'Today Pitkälahti is a calm stopping point. Walk along the line of sheds, watch the reflections on the lake and take in the quiet rhythm of Lake Juojärvi.'}
            </p>
          </div>
        </div>
        <figure className="mt-14">
          <ImageFrame
            imageKey="boatShedsSunset"
            locale={locale}
            priority
            className="aspect-[16/9] border border-[#081524]/12 md:aspect-[21/9]"
            sizes="(min-width: 1280px) 1280px, 100vw"
          />
        </figure>
      </ContentSection>
      <ContentSection tone="mist">
        <SectionHeading
          eyebrow="Lake Juojärvi"
          title={locale === 'fi' ? 'Kirkas vesi, saaret ja hidas kesävalo.' : 'Clear water, islands and long summer light.'}
          intro={
            locale === 'fi'
              ? 'Juojärvi on laaja järvimaisema, jossa selät, saaret ja suojaisat lahdet jättävät tilaa hengittää. Pitkälahdesta avautuu näkymä vesille, joilla veneily, melonta, kalastus ja rauhalliset retket kulkevat luontevasti hitaamman matkanteon rinnalla.'
              : 'Lake Juojärvi is a broad lakeland landscape of open waters, islands and sheltered bays. From Pitkälahti, the view opens towards a place where boating, paddling, fishing and quiet outings belong naturally to a slower way of travelling.'
          }
        />
        <div className="mt-12">
          <RouteGrid locale={locale} />
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-[1.35fr_0.65fr]">
          <ImageFrame imageKey="swimmingBeach" locale={locale} className="aspect-[16/10] md:aspect-[16/9]" sizes="(min-width: 768px) 62vw, 100vw" />
          <ImageFrame imageKey="supSunset" locale={locale} className="aspect-[4/5] md:aspect-auto md:min-h-full" sizes="(min-width: 768px) 28vw, 100vw" />
        </div>
      </ContentSection>
      <ContentSection id={anchors.harbour}>
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <SectionHeading
            eyebrow={locale === 'fi' ? 'Satamaelämä' : 'Harbour life'}
            title={locale === 'fi' ? 'Käytännöllinen, rauhallinen pysähdys.' : 'A practical, unhurried stop.'}
            intro={
              locale === 'fi'
                ? 'Pitkälahti ei pyri olemaan kiireinen palvelusatama. Se on rauhallinen lahti, jossa voi pysähtyä hetkeksi, katsella venevajoja ja antaa järvimaiseman tehdä tehtävänsä. Satama-alue on yhteinen ympäristö paikallisille, venevajojen omistajille ja vierailijoille.'
                : 'Pitkälahti is not trying to be a busy service marina. It is a quiet bay where you can pause for a while, take in the boat sheds and let the lake set the pace. The harbour area is a shared environment for local residents, boat shed owners and visitors.'
            }
          />
          <HarbourStatus locale={locale} />
        </div>
        <figure className="mt-12">
          <ImageFrame imageKey="harbourDaylight" locale={locale} className="aspect-[16/9] border border-[#081524]/12 md:aspect-[21/9]" sizes="(min-width: 1280px) 1280px, 100vw" />
        </figure>
      </ContentSection>
      <ContentSection id={anchors.events} tone="mist">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow={locale === 'fi' ? 'Ohjelmaa ja yhteisiä hetkiä' : 'Events and shared moments'}
            title={locale === 'fi' ? 'Kesäisiä syitä tulla rantaan.' : 'Summer reasons to come to the shore.'}
            intro={
              locale === 'fi'
                ? 'Pitkälahden parhaat hetket syntyvät usein pienestä: iltakävelystä vajarivin ohi, yhteisestä melontalenkistä, satamapäivästä tai paikallisen historian äärelle pysähtymisestä. Ajankohtaiset tapahtumat ja yhteiset hetket kootaan tänne, kun ohjelmaa järjestetään Pitkälahden, paikallisten toimijoiden ja satamayhteisön voimin.'
                : 'The best moments in Pitkälahti are often simple: an evening walk among the boat sheds, a shared paddle, a harbour day or a pause to listen to local stories. Current events and shared moments are gathered here whenever they are organised by Pitkälahti, local partners and the harbour community.'
            }
          />
          <PrimaryButton href={pathFor(locale, 'events')}>{cta.allEvents[locale]}</PrimaryButton>
        </div>
        <figure className="mb-8">
          <ImageFrame imageKey="harbourEvent" locale={locale} className="aspect-[16/10] border border-[#081524]/12 md:aspect-[21/9]" sizes="(min-width: 1280px) 1280px, 100vw" />
        </figure>
        <EventGrid locale={locale} />
      </ContentSection>
      <ContentSection>
        <div className="mb-12">
          <SectionHeading
            eyebrow={locale === 'fi' ? 'Rautatie ja rantatarina' : 'Railway and shoreline story'}
            title={locale === 'fi' ? 'Työn, vesireittien ja vapaa-ajan yhteys.' : 'The connection between work, waterways and leisure.'}
          />
        </div>
        <Timeline locale={locale} />
      </ContentSection>
      <ContentSection tone="dark">
        <div className="grid gap-12 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D9C4A0]">
              {locale === 'fi' ? 'Video ja dronekuva' : 'Video and drone'}
            </p>
            <h2 className="serif mt-5 text-5xl leading-tight text-white">
              {locale === 'fi' ? 'Järven valo liikkeessä.' : 'Lake light in motion.'}
            </h2>
            <p className="mt-6 max-w-xl leading-8 text-white/72">
              {locale === 'fi'
                ? 'Liikkuva kuva näyttää Pitkälahden lahden, venevajat ja Juojärven valon tavalla, jossa veden pinta, metsän reuna ja sataman rauhallinen rytmi pääsevät oikeuksiinsa.'
                : 'Moving images show the bay of Pitkälahti, the boat sheds and the changing light on Lake Juojärvi, giving room to the water, the forest edge and the harbour’s calm rhythm.'}
            </p>
          </div>
          <div className="min-h-[320px] border border-white/14 bg-white/[0.04]" />
        </div>
      </ContentSection>
      <ContentSection id={anchors.gallery}>
        <div className="mb-12">
          <SectionHeading
            eyebrow={locale === 'fi' ? 'Galleria' : 'Gallery'}
            title={locale === 'fi' ? 'Vuodenajat, vesi ja vajat.' : 'Seasons, water and sheds.'}
            intro={
              locale === 'fi'
                ? 'Kuvagalleria kokoaa yhteen Pitkälahden ja Juojärven eri hetkiä: kevään kirkastuvaa valoa, kesäiltojen tyyntä vettä, syksyn kuparisia rantoja ja talven hiljaisuutta.'
                : 'The gallery brings together different moments from Pitkälahti and Lake Juojärvi: bright spring light, calm summer evenings, copper tones in autumn and the stillness of winter.'
            }
          />
        </div>
        <GalleryMosaic locale={locale} />
      </ContentSection>
      <ContentSection tone="mist">
        <MapSection locale={locale} />
      </ContentSection>
      <ContentSection>
        <PortalTeaser locale={locale} />
      </ContentSection>
      <BoatersFinalSection locale={locale} id={anchors.boaters} />
      <FinalVisualMoment locale={locale} />
    </main>
  );
}

function BoatersFinalSection({ locale, id }: { locale: Locale; id: string }) {
  const page = pages.boaters;

  return (
    <ContentSection id={id} tone="dark">
      <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D9C4A0]">{page.eyebrow[locale]}</p>
          <h2 className="serif mt-5 text-balance text-4xl font-medium leading-tight text-white md:text-6xl">{page.title[locale]}</h2>
          <p className="mt-6 text-lg leading-8 text-white/74">{page.intro[locale]}</p>
          <p className="mt-6 max-w-2xl leading-8 text-white/62">{page.sections[0].body[locale]}</p>
          <div className="mt-9">
            <PrimaryButton href={pathFor(locale, 'boaters')}>{locale === 'fi' ? 'Lue veneilijän vinkit' : 'Read boating tips'}</PrimaryButton>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">
          <ImageFrame imageKey="familyBoatSunset" locale={locale} className="aspect-[16/9] border border-[#D9C4A0]/25 md:col-span-3 lg:col-span-1" sizes="(min-width: 1024px) 46vw, 100vw" />
          {routes.map((route) => (
            <article key={route.title.fi} className="border border-[#D9C4A0]/25 bg-white/[0.045] p-6">
              <h3 className="serif text-3xl text-[#D9C4A0]">{route.title[locale]}</h3>
              <p className="mt-4 leading-7 text-white/68">{route.body[locale]}</p>
            </article>
          ))}
        </div>
      </div>
    </ContentSection>
  );
}

function FinalVisualMoment({ locale }: { locale: Locale }) {
  return (
    <section className="bg-[#081524] px-5 pb-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <ImageFrame imageKey="mistyHarbourSunrise" locale={locale} className="aspect-[16/9] md:aspect-[21/8]" sizes="(min-width: 1280px) 1280px, 100vw" />
      </div>
    </section>
  );
}
