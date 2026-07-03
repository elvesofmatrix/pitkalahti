import Link from 'next/link';
import type { ReactNode } from 'react';
import { contactPlaceholders } from '@/data/content';
import { cta, navigation, siteMeta } from '@/data/site';
import { pathFor, type Locale, type PageKey } from '@/lib/i18n';
import { PrimaryButton } from './Buttons';

export function PageHero({ locale, title, intro, pageKey }: { locale: Locale; title: string; intro: string; pageKey?: PageKey }) {
  return (
    <section className="relative bg-[#081524] px-5 pb-20 pt-36 text-white lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_24%,rgba(217,196,160,0.2),transparent_30%)]" />
      <div className="relative mx-auto max-w-7xl">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#D9C4A0]">
          {pageKey ? navigation.find((item) => item.key === pageKey)?.label[locale] : siteMeta.place}
        </p>
        <h1 className="serif max-w-4xl text-balance text-5xl font-medium leading-tight md:text-7xl">{title}</h1>
        <p className="mt-7 max-w-3xl text-xl leading-9 text-white/76">{intro}</p>
      </div>
    </section>
  );
}

export function ContentSection({
  children,
  tone = 'paper',
  id
}: {
  children: ReactNode;
  tone?: 'paper' | 'mist' | 'dark';
  id?: string;
}) {
  const className =
    tone === 'dark'
      ? 'bg-[#081524] text-white'
      : tone === 'mist'
        ? 'bg-[#E3E4E6] text-[#081524]'
        : 'paper-texture bg-[#F5F1E9] text-[#081524]';

  return (
    <section id={id} className={`${className} scroll-mt-28 px-5 py-20 md:scroll-mt-32 lg:px-8 lg:py-28`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

export function PortalTeaser({ locale }: { locale: Locale }) {
  return (
    <div className="grid gap-8 border border-[#D9C4A0]/35 bg-[#081524] p-8 text-white md:grid-cols-[1.1fr_0.9fr] md:p-12">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D9C4A0]">
          {locale === 'fi' ? 'Venevajojen omistajille' : 'For boat shed owners'}
        </p>
        <h2 className="serif mt-5 text-4xl md:text-6xl">
          {locale === 'fi' ? 'Rauhallinen digitaalinen koti sataman arkeen.' : 'A calm digital home for harbour life.'}
        </h2>
        <p className="mt-6 max-w-2xl leading-8 text-white/74">
          {locale === 'fi'
            ? 'Venevajaportaali on Pitkälahden venevajojen omistajille ja satamayhteisölle suunnattu palvelu. Sen kautta voidaan koota yhteen tiedotteita, yhteisiä pelisääntöjä, asiakirjoja ja sataman arkeen liittyviä ilmoituksia.'
            : 'The Boat Shed Portal is intended for the owners of the boat sheds in Pitkälahti and the local harbour community. It offers a shared place for notices, guidelines, documents and everyday information related to the harbour.'}
        </p>
        <p className="mt-4 max-w-2xl leading-8 text-white/62">
          {locale === 'fi'
            ? 'Portaalin käyttö on rajattu yhteisön jäsenille. Venevajojen omistajat ja muut satamayhteisöön kuuluvat saavat kirjautumisohjeet erikseen.'
            : 'Access is limited to members of the community. Boat shed owners and other members of the harbour community receive login details separately.'}
        </p>
      </div>
      <form className="grid content-start gap-4 border border-white/12 bg-white/[0.04] p-5" aria-label={locale === 'fi' ? 'Portaalin kirjautuminen' : 'Portal login'}>
        <p className="text-sm text-white/68">
          {locale === 'fi' ? 'Kirjautuminen on tarkoitettu kutsun saaneille käyttäjille. Julkista rekisteröitymistä ei ole.' : 'Login is intended for invited users. Public registration is not available.'}
        </p>
        <label className="grid gap-2 text-sm">
          {locale === 'fi' ? 'Sähköposti' : 'Email'}
          <input className="min-h-12 border border-white/18 bg-white/8 px-4 text-white" type="email" disabled placeholder="name@example.com" />
        </label>
        <label className="grid gap-2 text-sm">
          {locale === 'fi' ? 'Salasana' : 'Password'}
          <input className="min-h-12 border border-white/18 bg-white/8 px-4 text-white" type="password" disabled placeholder="••••••••" />
        </label>
        <button className="min-h-12 border border-[#D9C4A0] text-sm font-semibold uppercase tracking-[0.18em] text-[#D9C4A0]" type="button" disabled>
          {locale === 'fi' ? 'Kirjaudu' : 'Log in'}
        </button>
        <p className="text-sm leading-6 text-white/58">
          {locale === 'fi'
            ? 'Jos sinulla ei vielä ole tunnuksia, ota yhteyttä sataman tai venevajayhteisön yhteyshenkilöihin.'
            : 'If you do not yet have login details, please contact the harbour or boat shed community contact person.'}
        </p>
      </form>
    </div>
  );
}

export function ContactPanel({ locale }: { locale: Locale }) {
  return (
    <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
      <div className="bg-[#081524] p-8 text-white">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D9C4A0]">
          {locale === 'fi' ? 'Yhteystiedot' : 'Contact details'}
        </p>
        <dl className="mt-8 grid gap-6">
          <div>
            <dt className="text-sm text-white/55">{locale === 'fi' ? 'Sijainti' : 'Location'}</dt>
            <dd className="mt-1 text-lg">{contactPlaceholders.address[locale]}</dd>
          </div>
          <div>
            <dt className="text-sm text-white/55">{locale === 'fi' ? 'Sähköposti' : 'Email'}</dt>
            <dd className="mt-1 text-lg">{contactPlaceholders.email[locale]}</dd>
          </div>
          <div>
            <dt className="text-sm text-white/55">{locale === 'fi' ? 'Puhelin' : 'Phone'}</dt>
            <dd className="mt-1 text-lg">{contactPlaceholders.phone[locale]}</dd>
          </div>
        </dl>
      </div>
      <form className="grid gap-4 bg-white/55 p-8" aria-label={locale === 'fi' ? 'Yhteydenottolomake' : 'Contact form'}>
        <p className="text-sm text-[#8B3A2B]">
          {locale === 'fi' ? 'Kerro lyhyesti, mitä asia koskee, niin viesti voidaan ohjata oikealle yhteyshenkilölle.' : 'Briefly describe your question so the message can be directed to the right contact person.'}
        </p>
        <input className="min-h-12 border border-[#081524]/18 bg-white px-4" placeholder={locale === 'fi' ? 'Nimi' : 'Name'} />
        <input className="min-h-12 border border-[#081524]/18 bg-white px-4" placeholder={locale === 'fi' ? 'Sähköposti' : 'Email'} />
        <textarea className="min-h-36 border border-[#081524]/18 bg-white p-4" placeholder={locale === 'fi' ? 'Viesti' : 'Message'} />
        <button className="min-h-12 border border-[#081524] px-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#081524]" type="button">
          {locale === 'fi' ? 'Lähetä viesti' : 'Send message'}
        </button>
      </form>
    </div>
  );
}

export function SiteFooter({ locale }: { locale: Locale }) {
  return (
    <footer className="bg-[#081524] px-5 py-14 text-white lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="text-sm font-semibold tracking-[0.34em]">PITKÄLAHTI</p>
          <p className="mt-1 text-[0.65rem] font-semibold tracking-[0.28em] text-white/58">OUTOKUMPU</p>
          <p className="serif mt-8 max-w-md text-3xl text-[#D9C4A0]">{siteMeta.tagline[locale]}</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          <nav aria-label="Footer navigation" className="grid gap-3">
            {navigation.map((item) => (
              <Link key={item.key} href={pathFor(locale, item.key)} className="text-white/70 hover:text-[#D9C4A0]">
                {item.label[locale]}
              </Link>
            ))}
          </nav>
          <div>
            <p className="text-sm leading-7 text-white/58">
              {locale === 'fi'
                ? 'Tämä sivusto esittelee Pitkälahden ja Juojärven ympäristöä rauhallisena pysähdyspaikkana. Käytännön retki- ja yhteystiedot kannattaa tarkistaa paikallisista kanavista ennen matkaa.'
                : 'This site presents Pitkälahti and Lake Juojärvi as a calm stopping place. For practical trip and contact details, please check local channels before you travel.'}
            </p>
            <div className="mt-8">
              <PrimaryButton href={pathFor(locale, 'contact')}>{cta.contact[locale]}</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
