import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { EventGrid, GalleryMosaic, HarbourStatus, MapSection, RouteGrid, Timeline } from '@/components/Cards';
import { ContactPanel, ContentSection, PageHero, PortalTeaser } from '@/components/PageParts';
import { ImageFrame } from '@/components/ImageFrame';
import { SectionHeading } from '@/components/SectionHeading';
import { pages } from '@/data/pages';
import { isLocale, locales, pageKeyFromSlug, routeSlugs, type Locale, type PageKey } from '@/lib/i18n';

type PageParams = {
  locale: string;
  slug: string;
};

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    (Object.keys(routeSlugs) as PageKey[]).map((key) => ({
      locale,
      slug: routeSlugs[key][locale]
    }))
  );
}

export async function generateMetadata({ params }: { params: Promise<PageParams> }): Promise<Metadata> {
  const { locale: value, slug } = await params;
  const locale = isLocale(value) ? value : 'fi';
  const key = pageKeyFromSlug(locale, slug);
  if (!key) return {};

  return {
    title: pages[key].title[locale],
    description: pages[key].intro[locale]
  };
}

export default async function SubPage({ params }: { params: Promise<PageParams> }) {
  const { locale: localeValue, slug } = await params;
  if (!isLocale(localeValue)) notFound();
  const locale = localeValue as Locale;
  const key = pageKeyFromSlug(locale, slug);
  if (!key) notFound();
  const page = pages[key];

  return (
    <main>
      <PageHero locale={locale} pageKey={key} title={page.title[locale]} intro={page.intro[locale]} />
      <ContentSection>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading eyebrow={page.eyebrow[locale]} title={page.sections[0]?.title[locale] ?? page.title[locale]} />
          <div className="grid gap-8">
            {page.sections.map((section) => (
              <article key={section.title.fi} className="border-t border-[#081524]/14 pt-6">
                <h2 className="serif text-3xl text-[#081524]">{section.title[locale]}</h2>
                <p className="mt-4 text-lg leading-8 text-[#3B4B58]">{section.body[locale]}</p>
              </article>
            ))}
          </div>
        </div>
      </ContentSection>
      <PageSpecific keyName={key} locale={locale} />
    </main>
  );
}

function PageSpecific({ keyName, locale }: { keyName: PageKey; locale: Locale }) {
  if (keyName === 'history') {
    return (
      <>
        <ContentSection tone="mist">
          <Timeline locale={locale} />
        </ContentSection>
        <ContentSection>
          <div className="grid gap-5">
            <ImageFrame imageKey="boatShedsSunset" locale={locale} className="aspect-[16/9] border border-[#081524]/12 md:aspect-[21/9]" sizes="(min-width: 1280px) 1280px, 100vw" />
            <div className="grid gap-5 md:grid-cols-2">
              <ImageFrame imageKey="railway1918" locale={locale} className="aspect-[3/2] border border-[#081524]/12" sizes="(min-width: 768px) 50vw, 100vw" />
              <ImageFrame imageKey="sawmill1951" locale={locale} className="aspect-[3/2] border border-[#081524]/12" sizes="(min-width: 768px) 50vw, 100vw" />
            </div>
          </div>
        </ContentSection>
      </>
    );
  }

  if (keyName === 'harbour') {
    return (
      <>
        <ContentSection tone="mist">
          <figure className="mb-10">
            <ImageFrame imageKey="harbourDaylight" locale={locale} className="aspect-[16/9] border border-[#081524]/12 md:aspect-[21/9]" sizes="(min-width: 1280px) 1280px, 100vw" />
          </figure>
          <HarbourStatus locale={locale} />
        </ContentSection>
        <ContentSection>
          <div className="grid gap-5 md:grid-cols-[0.55fr_1fr]">
            <ImageFrame imageKey="annaKrakowa" locale={locale} className="aspect-[3/4] border border-[#081524]/12" sizes="(min-width: 768px) 36vw, 100vw" />
            <ImageFrame imageKey="iiriBoat" locale={locale} className="aspect-[16/10] border border-[#081524]/12 md:min-h-full" sizes="(min-width: 768px) 58vw, 100vw" />
          </div>
        </ContentSection>
        <ContentSection>
          <MapSection locale={locale} />
        </ContentSection>
      </>
    );
  }

  if (keyName === 'events') {
    return (
      <ContentSection tone="mist">
        <figure className="mb-10">
          <ImageFrame imageKey="harbourEvent" locale={locale} className="aspect-[16/10] border border-[#081524]/12 md:aspect-[21/9]" sizes="(min-width: 1280px) 1280px, 100vw" />
        </figure>
        <div className="mb-8 flex flex-wrap gap-3">
          {['Kesä / Summer', 'Historia / History', 'Järvielämä / Lake life'].map((filter) => (
            <span key={filter} className="border border-[#081524]/20 px-4 py-2 text-sm uppercase tracking-[0.16em] text-[#081524]/70">
              {filter}
            </span>
          ))}
        </div>
        <div className="grid gap-8 lg:grid-cols-[1fr_0.36fr]">
          <EventGrid locale={locale} />
          <ImageFrame imageKey="midsummerBonfire" locale={locale} className="aspect-[4/5] border border-[#081524]/12 lg:min-h-full" sizes="(min-width: 1024px) 28vw, 100vw" />
        </div>
      </ContentSection>
    );
  }

  if (keyName === 'gallery') {
    return (
      <ContentSection tone="mist">
        <div className="mb-8 flex flex-wrap gap-3">
          {['Summer', 'Autumn', 'Winter', 'Lake Life', 'Boat Sheds'].map((filter) => (
            <button key={filter} className="border border-[#081524]/20 px-4 py-2 text-sm uppercase tracking-[0.16em]" type="button">
              {filter}
            </button>
          ))}
        </div>
        <GalleryMosaic locale={locale} />
      </ContentSection>
    );
  }

  if (keyName === 'boaters') {
    return (
      <ContentSection tone="mist">
        <div className="mb-10 grid gap-5 md:grid-cols-[1.4fr_0.8fr]">
          <ImageFrame imageKey="familyBoatSunset" locale={locale} className="aspect-[16/9] border border-[#081524]/12" sizes="(min-width: 768px) 62vw, 100vw" />
          <ImageFrame imageKey="rowboatEvening" locale={locale} className="aspect-[4/5] border border-[#081524]/12 md:aspect-auto md:min-h-full" sizes="(min-width: 768px) 34vw, 100vw" />
        </div>
        <RouteGrid locale={locale} />
      </ContentSection>
    );
  }

  if (keyName === 'things') {
    return (
      <ContentSection tone="mist">
        <div className="mb-10 grid gap-5 md:grid-cols-2">
          <ImageFrame imageKey="swimmingBeach" locale={locale} className="aspect-[16/10] border border-[#081524]/12 md:col-span-2 md:aspect-[21/9]" sizes="(min-width: 1280px) 1280px, 100vw" />
          <ImageFrame imageKey="supSunset" locale={locale} className="aspect-[4/5] border border-[#081524]/12" sizes="(min-width: 768px) 50vw, 100vw" />
          <div className="grid gap-5">
            <ImageFrame imageKey="forestTrail" locale={locale} className="aspect-[4/3] border border-[#081524]/12" sizes="(min-width: 768px) 50vw, 100vw" />
            <ImageFrame imageKey="feetInWater" locale={locale} className="aspect-[16/10] border border-[#081524]/12" sizes="(min-width: 768px) 50vw, 100vw" />
          </div>
        </div>
        <RouteGrid locale={locale} />
      </ContentSection>
    );
  }

  if (keyName === 'contact') {
    return (
      <ContentSection tone="mist">
        <ContactPanel locale={locale} />
      </ContentSection>
    );
  }

  if (keyName === 'portal') {
    return (
      <ContentSection tone="dark">
        <PortalTeaser locale={locale} />
      </ContentSection>
    );
  }

  return null;
}
