import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { EventGrid, GalleryMosaic, HarbourStatus, MapSection, RouteGrid, Timeline } from '@/components/Cards';
import { HeroSection } from '@/components/HeroSection';
import { ContentSection, PortalTeaser } from '@/components/PageParts';
import { SectionHeading } from '@/components/SectionHeading';
import { cta } from '@/data/site';
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

  return (
    <main>
      <HeroSection locale={locale} />
      <ContentSection id="venevajakylä">
        <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow={locale === 'fi' ? 'Historiallinen venevajakylä' : 'Historic boat shed village'}
            title={locale === 'fi' ? 'Puinen rytmi veden reunalla.' : 'A timber rhythm at the water’s edge.'}
            intro={
              locale === 'fi'
                ? 'Pitkälahden identiteetti rakentuu venevajojen, rannan ja yhteisön hiljaisesta läsnäolosta.'
                : 'Pitkälahti’s identity is built from the quiet presence of boat sheds, shoreline and community.'
            }
          />
          <div className="grid gap-5 text-lg leading-8 text-[#3B4B58]">
            <p>
              {locale === 'fi'
                ? 'Tämä ensimmäinen sivustoversio kertoo paikan tunnelmaa ennen kaikkea tarinana: järven, työn, vapaa-ajan ja kesäisen kohtaamisen paikkana.'
                : 'This first website version presents the atmosphere primarily as a story: a place of lake, work, leisure and summer encounters.'}
            </p>
            <p>
              {locale === 'fi'
                ? 'Tarkat palvelutiedot lisätään vasta vahvistettuina, jotta sivusto pysyy luotettavana ja paikalle uskollisena.'
                : 'Specific service details will only be added once verified, keeping the site reliable and true to the place.'}
            </p>
          </div>
        </div>
      </ContentSection>
      <ContentSection id="juojärvi" tone="mist">
        <SectionHeading
          eyebrow="Lake Juojärvi"
          title={locale === 'fi' ? 'Kirkas vesi, saaret ja hidas kesävalo.' : 'Clear water, islands and slow summer light.'}
          intro={
            locale === 'fi'
              ? 'Juojärvi antaa Pitkälahdelle maiseman: veneilyn, melonnan, kalastuksen ja retkien suunnan.'
              : 'Juojärvi gives Pitkälahti its landscape: boating, paddling, fishing and the direction for excursions.'
          }
        />
        <div className="mt-12">
          <RouteGrid locale={locale} />
        </div>
      </ContentSection>
      <ContentSection id="satamaelämä">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <SectionHeading
            eyebrow={locale === 'fi' ? 'Satamaelämä' : 'Harbour life'}
            title={locale === 'fi' ? 'Käytännöllinen, mutta ei kiireinen.' : 'Practical, but never hurried.'}
            intro={
              locale === 'fi'
                ? 'Satamasivu kokoaa vierailijan kannalta olennaisen yleiskuvan ilman vahvistamattomia palvelulupauksia.'
                : 'The harbour page gathers a visitor-oriented overview without unverified service promises.'
            }
          />
          <HarbourStatus locale={locale} />
        </div>
      </ContentSection>
      <ContentSection id="tapahtumat" tone="mist">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow={locale === 'fi' ? 'Tuleva ohjelma' : 'Upcoming programme'}
            title={locale === 'fi' ? 'Kesäisiä syitä tulla rantaan.' : 'Summer reasons to arrive by the water.'}
            intro={locale === 'fi' ? 'Demosisältö näyttää tulevan tapahtumarakenteen.' : 'Demo content shows the future event structure.'}
          />
          <PrimaryButton href={pathFor(locale, 'events')}>{cta.allEvents[locale]}</PrimaryButton>
        </div>
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
              {locale === 'fi' ? 'Video / drone story' : 'Video / drone story'}
            </p>
            <h2 className="serif mt-5 text-5xl leading-tight text-white">
              {locale === 'fi' ? 'Liikkuvan kuvan paikka on varattu järven valolle.' : 'A moving-image space reserved for lake light.'}
            </h2>
          </div>
          <div className="min-h-[320px] border border-white/14 bg-white/[0.04] p-6">
            <p className="text-sm uppercase tracking-[0.24em] text-white/50">16:9 placeholder</p>
          </div>
        </div>
      </ContentSection>
      <ContentSection>
        <div className="mb-12">
          <SectionHeading
            eyebrow={locale === 'fi' ? 'Galleria' : 'Gallery'}
            title={locale === 'fi' ? 'Vuodenajat, vesi ja vajat.' : 'Seasons, water and sheds.'}
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
    </main>
  );
}
