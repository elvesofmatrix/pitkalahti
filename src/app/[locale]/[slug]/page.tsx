import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { EventGrid, GalleryMosaic, HarbourStatus, MapSection, RouteGrid, Timeline } from '@/components/Cards';
import { ContactPanel, ContentSection, PageHero, PortalTeaser } from '@/components/PageParts';
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
          <div className="grid gap-5 md:grid-cols-3">
            {['1918', 'Venevajat', 'Juojärvi'].map((item) => (
              <figure key={item} className="min-h-64 bg-[#B3B0A8] p-5">
                <figcaption className="text-sm uppercase tracking-[0.2em] text-[#081524]/70">
                  {locale === 'fi' ? `Arkistokuvan paikkamerkki: ${item}` : `Archival image placeholder: ${item}`}
                </figcaption>
              </figure>
            ))}
          </div>
        </ContentSection>
      </>
    );
  }

  if (keyName === 'harbour') {
    return (
      <>
        <ContentSection tone="mist">
          <HarbourStatus locale={locale} />
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
        <div className="mb-8 flex flex-wrap gap-3">
          {['Kesä / Summer', 'Historia / History', 'Järvielämä / Lake life'].map((filter) => (
            <span key={filter} className="border border-[#081524]/20 px-4 py-2 text-sm uppercase tracking-[0.16em] text-[#081524]/70">
              {filter}
            </span>
          ))}
        </div>
        <EventGrid locale={locale} />
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

  if (keyName === 'boaters' || keyName === 'things') {
    return (
      <ContentSection tone="mist">
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
