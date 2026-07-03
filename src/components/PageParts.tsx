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
          {locale === 'fi' ? 'Tulossa venevajojen omistajille' : 'Coming for boat shed owners'}
        </p>
        <h2 className="serif mt-5 text-4xl md:text-6xl">
          {locale === 'fi' ? 'Rauhallinen digitaalinen koti sataman arkeen.' : 'A calm digital home for harbour life.'}
        </h2>
        <p className="mt-6 max-w-2xl leading-8 text-white/74">
          {locale === 'fi'
            ? 'Portaali kokoaa tulevaisuudessa omistajaviestinnän, dokumentit, tapahtumat ja satamaan liittyvät ilmoitukset yhteen kutsupohjaiseen palveluun.'
            : 'The portal will later gather owner communication, documents, events and harbour notices into one invitation-based service.'}
        </p>
      </div>
      <form className="grid content-start gap-4 border border-white/12 bg-white/[0.04] p-5" aria-label={locale === 'fi' ? 'Portaalin kirjautumispaikkamerkki' : 'Portal login placeholder'}>
        <p className="text-sm text-white/68">
          {locale === 'fi' ? 'Kirjautuminen ei ole vielä käytössä.' : 'Login is not active yet.'}
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
          {locale === 'fi' ? 'Kutsulla myöhemmin' : 'Invitation later'}
        </button>
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
      <form className="grid gap-4 bg-white/55 p-8" aria-label={locale === 'fi' ? 'Yhteydenottolomakkeen käyttöliittymä' : 'Contact form user interface'}>
        <p className="text-sm text-[#8B3A2B]">
          {locale === 'fi' ? 'Lomake on käyttöliittymäluonnos, eikä lähetä viestejä vielä.' : 'This form is a UI concept and does not send messages yet.'}
        </p>
        <input className="min-h-12 border border-[#081524]/18 bg-white px-4" placeholder={locale === 'fi' ? 'Nimi' : 'Name'} />
        <input className="min-h-12 border border-[#081524]/18 bg-white px-4" placeholder={locale === 'fi' ? 'Sähköposti' : 'Email'} />
        <textarea className="min-h-36 border border-[#081524]/18 bg-white p-4" placeholder={locale === 'fi' ? 'Viesti' : 'Message'} />
        <button className="min-h-12 border border-[#081524] px-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#081524]" type="button">
          {locale === 'fi' ? 'Ei lähetystä v1:ssä' : 'No sending in v1'}
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
                ? 'Phase 1 -sivusto käyttää paikallista demosisältöä. Vahvistettavat palvelutiedot lisätään myöhemmin.'
                : 'The Phase 1 website uses local demo content. Verified service details will be added later.'}
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
