import Image from 'next/image';
import { cta, siteMeta } from '@/data/site';
import { pathFor, type Locale } from '@/lib/i18n';
import { AnchorMotif } from './icons';
import { PrimaryButton, SecondaryButton } from './Buttons';

export function HeroSection({ locale }: { locale: Locale }) {
  return (
    <section className="lake-art relative flex min-h-screen items-end overflow-hidden text-white">
      <Image
        src="/assets/pitkalahti-hero.png"
        alt={locale === 'fi' ? 'Rauhallinen suomalainen järvimaisema Pitkälahden tunnelman paikkamerkkinä' : 'Calm Finnish lakeside atmosphere used as a Pitkälahti placeholder'}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[#081524]/30 md:bg-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#081524] via-[#081524]/62 to-[#081524]/20" />
      <div className="absolute bottom-10 right-8 hidden md:block">
        <AnchorMotif />
      </div>
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-36 lg:px-8">
        <div className="calm-reveal max-w-4xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-[#D9C4A0]">Lake Juojärvi · Outokumpu</p>
          <h1 className="serif text-balance text-6xl font-medium leading-[0.95] md:text-8xl">{siteMeta.tagline[locale]}</h1>
          <p className="mt-8 max-w-2xl text-xl leading-9 text-white/82">{siteMeta.description[locale]}</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <PrimaryButton href="#venevajakylä">{cta.explore[locale]}</PrimaryButton>
            <SecondaryButton href={pathFor(locale, 'portal')}>{cta.portal[locale]}</SecondaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}
