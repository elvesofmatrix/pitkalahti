'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from './icons';
import { alternatePath, localeLabels, pathFor, type Locale, type PageKey } from '@/lib/i18n';
import { navigation } from '@/data/site';

type SiteHeaderProps = {
  locale: Locale;
  pageKey?: PageKey;
};

export function LanguageSwitcher({ locale, pageKey }: SiteHeaderProps) {
  const target = locale === 'fi' ? 'en' : 'fi';

  return (
    <Link
      href={alternatePath(locale, target, pageKey)}
      className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0B1E33]/72 transition hover:text-[#8B3A2B]"
      aria-label={`Switch language to ${localeLabels[target]}`}
    >
      {target.toUpperCase()}
    </Link>
  );
}

export function MobileMenu({ locale, pageKey }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const loginHref = pathFor(locale, 'portal');
  const loginLabel = locale === 'fi' ? 'KIRJAUDU' : 'LOG IN';

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="inline-flex size-11 items-center justify-center border border-[#B3B0A8]/55 text-[#0B1E33] transition hover:border-[#8B3A2B] hover:text-[#8B3A2B]"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
        {open ? <X /> : <Menu />}
      </button>
      {open ? (
        <div id="mobile-menu" className="absolute inset-x-4 top-[5.75rem] border border-[#B3B0A8]/45 bg-[#F4EFE6] p-5">
          <nav aria-label="Mobile navigation" className="grid gap-1">
            {navigation.filter((item) => item.key !== 'portal').map((item) => (
              <Link
                key={item.key}
                href={pathFor(locale, item.key)}
                className={`border-b border-[#B3B0A8]/35 py-3 text-base transition hover:text-[#8B3A2B] ${
                  pathname === pathFor(locale, item.key) ? 'text-[#8B3A2B]' : 'text-[#0B1E33]/82'
                }`}
                onClick={() => setOpen(false)}
              >
                {item.label[locale]}
              </Link>
            ))}
          </nav>
          <div className="mt-5 flex items-center gap-5">
            <Link
              href={loginHref}
              className={`border border-[#B3B0A8]/55 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition hover:border-[#8B3A2B] hover:text-[#8B3A2B] ${
                pathname === loginHref ? 'text-[#8B3A2B]' : 'text-[#0B1E33]'
              }`}
              onClick={() => setOpen(false)}
            >
              {loginLabel}
            </Link>
            <LanguageSwitcher locale={locale} pageKey={pageKey} />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export function SiteHeader({ locale, pageKey }: SiteHeaderProps) {
  const pathname = usePathname();
  const loginHref = pathFor(locale, 'portal');
  const loginLabel = locale === 'fi' ? 'KIRJAUDU' : 'LOG IN';

  return (
    <header className="absolute inset-x-0 top-0 z-40 border-b border-[#B3B0A8]/45 bg-[#F4EFE6]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2.5 lg:px-8">
        <Link href={pathFor(locale)} className="block shrink-0" aria-label="Pitkälahti home">
          <Image
            src="/assets/pitkalahti-logo.png"
            alt="Pitkälahti Outokumpu"
            width={220}
            height={147}
            priority
            className="h-14 w-auto object-contain sm:h-16 lg:h-[4.5rem]"
          />
        </Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-4 lg:flex xl:gap-6">
          {navigation.slice(0, 5).map((item) => {
            const href = pathFor(locale, item.key);

            return (
              <Link
                key={item.key}
                href={href}
                className={`text-sm transition hover:text-[#8B3A2B] ${
                  pathname === href ? 'text-[#8B3A2B]' : 'text-[#0B1E33]/78'
                }`}
              >
                {item.label[locale]}
              </Link>
            );
          })}
          <Link
            href={loginHref}
            className={`border border-[#B3B0A8]/55 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition hover:border-[#8B3A2B] hover:text-[#8B3A2B] ${
              pathname === loginHref ? 'text-[#8B3A2B]' : 'text-[#0B1E33]/84'
            }`}
          >
            {loginLabel}
          </Link>
          <LanguageSwitcher locale={locale} pageKey={pageKey} />
        </nav>
        <MobileMenu locale={locale} pageKey={pageKey} />
      </div>
    </header>
  );
}
