'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from './icons';
import { alternatePath, localeLabels, pathFor, type Locale, type PageKey } from '@/lib/i18n';
import { navigation, siteMeta } from '@/data/site';

type SiteHeaderProps = {
  locale: Locale;
  pageKey?: PageKey;
};

export function LanguageSwitcher({ locale, pageKey }: SiteHeaderProps) {
  const target = locale === 'fi' ? 'en' : 'fi';

  return (
    <Link
      href={alternatePath(locale, target, pageKey)}
      className="text-xs font-semibold uppercase tracking-[0.2em] text-white/78 transition hover:text-[#D9C4A0]"
      aria-label={`Switch language to ${localeLabels[target]}`}
    >
      {target.toUpperCase()}
    </Link>
  );
}

export function MobileMenu({ locale, pageKey }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="inline-flex size-11 items-center justify-center border border-white/20 text-white"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
        {open ? <X /> : <Menu />}
      </button>
      {open ? (
        <div id="mobile-menu" className="absolute inset-x-4 top-20 border border-white/12 bg-[#081524] p-5 shadow-2xl">
          <nav aria-label="Mobile navigation" className="grid gap-1">
            {navigation.map((item) => (
              <Link
                key={item.key}
                href={pathFor(locale, item.key)}
                className="border-b border-white/10 py-3 text-base text-white/86"
                onClick={() => setOpen(false)}
              >
                {item.label[locale]}
              </Link>
            ))}
          </nav>
          <div className="mt-5">
            <LanguageSwitcher locale={locale} pageKey={pageKey} />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export function SiteHeader({ locale, pageKey }: SiteHeaderProps) {
  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
        <Link href={pathFor(locale)} className="block shrink-0 text-white" aria-label="Pitkälahti home">
          <Image
            src="/assets/pitkalahti-logo-uusi.png"
            alt="Pitkälahti Outokumpu"
            width={150}
            height={81}
            priority
            className="h-10 w-auto object-contain sm:h-12 lg:h-14"
          />
        </Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-4 lg:flex xl:gap-6">
          {navigation.slice(0, 5).map((item) => (
            <Link
              key={item.key}
              href={pathFor(locale, item.key)}
              className="text-sm text-white/78 transition hover:text-[#D9C4A0]"
            >
              {item.label[locale]}
            </Link>
          ))}
          <Link
            href={pathFor(locale, 'portal')}
            className="border border-white/22 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/84 transition hover:border-[#D9C4A0] hover:text-[#D9C4A0]"
          >
            {siteMeta.place}
          </Link>
          <LanguageSwitcher locale={locale} pageKey={pageKey} />
        </nav>
        <MobileMenu locale={locale} pageKey={pageKey} />
      </div>
    </header>
  );
}
