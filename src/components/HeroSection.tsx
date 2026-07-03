import Image from 'next/image';
import { cta, siteMeta } from '@/data/site';
import { pathFor, type Locale } from '@/lib/i18n';
import { AnchorMotif } from './icons';
import { PrimaryButton, SecondaryButton } from './Buttons';

export function HeroSection({ locale }: { locale: Locale }) {
  const exploreHref = locale === 'fi' ? '#historia' : '#history';

  return (
    <section id="top" className="lake-art relative flex min-h-screen items-end overflow-hidden text-white">
      <Image
        src="/assets/pitkalahti-outokumpu-satama.jpeg"
        alt={locale === 'fi' ? 'Ilmakuva Pitkälahden satamasta, venevajoista, veneistä ja metsäisestä Juojärven rannasta auringonlaskussa' : 'Aerial view of Pitkälahti harbour, boat sheds, boats and forested Lake Juojärvi shoreline at sunset'}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[42%_center] md:object-center"
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_24%_78%,rgba(8,21,36,0.72)_0%,rgba(8,21,36,0.44)_32%,rgba(8,21,36,0.12)_52%,transparent_72%)]" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#081524]/44 to-transparent" />
      <div className="absolute bottom-10 right-8 hidden md:block">
        <AnchorMotif />
      </div>
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-36 lg:px-8">
        <div className="calm-reveal max-w-4xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-[#D9C4A0]">Lake Juojärvi · Outokumpu</p>
          <h1 className="serif text-balance text-6xl font-medium leading-[0.95] md:text-8xl">{siteMeta.tagline[locale]}</h1>
          <p className="mt-8 max-w-2xl text-xl leading-9 text-white/82">{siteMeta.description[locale]}</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <PrimaryButton href={exploreHref}>{cta.explore[locale]}</PrimaryButton>
            <SecondaryButton href={pathFor(locale, 'portal')}>{cta.portal[locale]}</SecondaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}
