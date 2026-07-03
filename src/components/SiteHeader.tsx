'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { Menu, X } from './icons';
import { alternatePath, localeLabels, pathFor, type Locale, type PageKey } from '@/lib/i18n';
import { navigation, siteMeta } from '@/data/site';

type SiteHeaderProps = {
  locale: Locale;
  pageKey?: PageKey;
};

const homeAnchorIds: Record<Locale, Partial<Record<PageKey, string>>> = {
  fi: {
    history: 'historia',
    harbour: 'satama',
    events: 'tapahtumat',
    gallery: 'galleria',
    boaters: 'veneilijalle'
  },
  en: {
    history: 'history',
    harbour: 'harbour',
    events: 'events',
    gallery: 'gallery',
    boaters: 'for-boaters'
  }
};

function clamp(value: number) {
  return Math.min(1, Math.max(0, value));
}

function useHeaderScrollState(locale: Locale) {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState<string | undefined>();
  const isHome = pathname === pathFor(locale);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      setProgress(clamp((window.scrollY - 30) / 90));
    };

    const onScroll = () => {
      if (frame === 0) {
        frame = window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!isHome) {
      setActiveSection(undefined);
      return;
    }

    const ids = Object.values(homeAnchorIds[locale]).filter(Boolean) as string[];
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        rootMargin: '-35% 0px -45% 0px',
        threshold: [0.12, 0.24, 0.4, 0.6]
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isHome, locale]);

  return { activeSection, isHome, pathname, progress };
}

function hrefForNavItem(locale: Locale, key: PageKey, isHome: boolean) {
  const anchorId = homeAnchorIds[locale][key];

  if (anchorId) {
    return isHome ? `#${anchorId}` : `${pathFor(locale)}#${anchorId}`;
  }

  return pathFor(locale, key);
}

export function LanguageSwitcher({ locale, pageKey }: SiteHeaderProps) {
  const target = locale === 'fi' ? 'en' : 'fi';

  return (
    <Link
      href={alternatePath(locale, target, pageKey)}
      className="text-xs font-semibold uppercase tracking-[0.2em] text-current transition hover:text-[#D9C4A0]"
      aria-label={`Switch language to ${localeLabels[target]}`}
    >
      {target.toUpperCase()}
    </Link>
  );
}

export function MobileMenu({ locale, pageKey }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const { activeSection, isHome, progress } = useHeaderScrollState(locale);
  const displayProgress = isHome ? progress : 1;
  const isSticky = displayProgress > 0.52;
  const buttonTone = isSticky ? 'border-white/20 text-white' : 'border-[#081524]/25 text-[#081524]';

  return (
    <div className="md:hidden">
      <button
        type="button"
        className={`inline-flex size-11 items-center justify-center border transition-colors duration-300 ${buttonTone}`}
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
                href={hrefForNavItem(locale, item.key, isHome)}
                className={`border-b border-white/10 py-3 text-base transition hover:text-[#D9C4A0] ${
                  activeSection && homeAnchorIds[locale][item.key] === activeSection ? 'text-[#D9C4A0]' : 'text-white/86'
                }`}
                onClick={() => setOpen(false)}
              >
                {item.label[locale]}
              </Link>
            ))}
          </nav>
          <div className="mt-5 text-white/78">
            <LanguageSwitcher locale={locale} pageKey={pageKey} />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export function SiteHeader({ locale, pageKey }: SiteHeaderProps) {
  const { activeSection, isHome, progress } = useHeaderScrollState(locale);
  const displayProgress = isHome ? progress : 1;
  const isSticky = displayProgress > 0.52;
  const backgroundOpacity = 0.9 * displayProgress;
  const topNavTone = isSticky ? 'text-white/84' : 'text-[#081524]/86';
  const activeTone = isSticky ? 'text-[#D9C4A0]' : 'text-[#8B3A2B]';
  const dividerOpacity = displayProgress * 0.16;
  const compactLogoOpacity = displayProgress;
  const fullLogoOpacity = 1 - displayProgress;
  const innerPadding = `${20 - displayProgress * 8}px`;
  const headerStyle = useMemo(
    () => ({
      backgroundColor: `rgba(8, 21, 36, ${backgroundOpacity})`,
      borderBottomColor: `rgba(217, 196, 160, ${dividerOpacity})`,
      boxShadow: displayProgress > 0.45 ? `0 10px 28px rgba(8, 21, 36, ${0.12 * displayProgress})` : 'none',
      backdropFilter: displayProgress > 0.55 ? 'blur(8px)' : 'none'
    }),
    [backgroundOpacity, displayProgress, dividerOpacity]
  );

  return (
    <header
      className="fixed inset-x-0 top-0 z-40 border-b transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 motion-reduce:transition-none"
      style={headerStyle}
    >
      <div
        className="mx-auto flex max-w-7xl items-center justify-between px-5 transition-[padding] duration-300 motion-reduce:transition-none lg:px-8"
        style={{ paddingBottom: innerPadding, paddingTop: innerPadding }}
      >
        <Link href={`${pathFor(locale)}#top`} className="relative block h-[3.25rem] w-[8.5rem] shrink-0 sm:h-14 sm:w-[10.5rem] lg:w-[11.5rem]" aria-label="Pitkälahti home">
          <Image
            src="/assets/pitkalahti-logo-full-blue.png"
            alt="Pitkälahti Outokumpu"
            width={400}
            height={216}
            priority
            className="absolute left-0 top-1/2 w-[7.75rem] -translate-y-1/2 object-contain transition-[opacity,transform] duration-300 motion-reduce:transition-none sm:w-[9.25rem] lg:w-[10.5rem]"
            style={{
              opacity: fullLogoOpacity,
              transform: `translateY(-50%) translateY(${-6 * displayProgress}px) scale(${1 - displayProgress * 0.08})`
            }}
          />
          <Image
            src="/assets/pitkalahti-logo-compact-white.png"
            alt="Pitkälahti Outokumpu"
            width={400}
            height={60}
            priority
            className="absolute left-0 top-1/2 w-[7rem] -translate-y-1/2 object-contain transition-[opacity,transform] duration-300 motion-reduce:transition-none sm:w-[8rem] lg:w-[9rem]"
            style={{
              opacity: compactLogoOpacity,
              transform: `translateY(-50%) translateY(${4 - 4 * displayProgress}px) scale(${0.96 + displayProgress * 0.04})`
            }}
          />
        </Link>
        <nav aria-label="Primary navigation" className={`hidden items-center gap-4 transition-colors duration-300 lg:flex xl:gap-6 ${topNavTone}`}>
          {navigation.slice(0, 5).map((item) => (
            <Link
              key={item.key}
              href={hrefForNavItem(locale, item.key, isHome)}
              className={`text-sm transition hover:text-[#D9C4A0] ${
                activeSection && homeAnchorIds[locale][item.key] === activeSection ? activeTone : ''
              }`}
            >
              {item.label[locale]}
            </Link>
          ))}
          <Link
            href={pathFor(locale, 'portal')}
            className={`border px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition hover:border-[#D9C4A0] hover:text-[#D9C4A0] ${
              isSticky ? 'border-white/22 text-white/84' : 'border-[#081524]/24 text-[#081524]/84'
            }`}
          >
            {siteMeta.place}
          </Link>
          <span className={isSticky ? 'text-white/78' : 'text-[#081524]/74'}>
            <LanguageSwitcher locale={locale} pageKey={pageKey} />
          </span>
        </nav>
        <MobileMenu locale={locale} pageKey={pageKey} />
      </div>
    </header>
  );
}
