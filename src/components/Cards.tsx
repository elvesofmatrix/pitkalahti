import type { Locale } from '@/lib/i18n';
import { events, galleryItems, harbourServices, routes, timeline } from '@/data/content';
import type { PitkalahtiImageKey } from '@/data/images';
import { ImageFrame } from './ImageFrame';
import { SectionHeading } from './SectionHeading';

export function EventCard({ event, locale }: { event: (typeof events)[number]; locale: Locale }) {
  return (
    <article className="border border-[#0B1E33]/12 bg-white/55 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#B65F32]">{event.category[locale]}</p>
      <h3 className="serif mt-5 text-3xl text-[#081524]">{event.title[locale]}</h3>
      <p className="mt-5 leading-7 text-[#3B4B58]">{event.description[locale]}</p>
    </article>
  );
}

export function EventGrid({ locale }: { locale: Locale }) {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {events.map((event) => (
        <EventCard key={event.title.fi} event={event} locale={locale} />
      ))}
    </div>
  );
}

export function GalleryMosaic({ locale }: { locale: Locale }) {
  return (
    <div className="grid auto-rows-[210px] gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {galleryItems.map((item) => (
        <figure
          key={item.title.fi}
          className={`relative overflow-hidden bg-[#081524] text-white ${item.tile}`}
        >
          <ImageFrame imageKey={item.imageKey as PitkalahtiImageKey} locale={locale} className="h-full w-full" sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#081524]/78 via-[#081524]/12 to-transparent" />
          <figcaption className="absolute inset-0 flex flex-col justify-end p-5">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/66">{item.category[locale]}</span>
            <span className="serif mt-2 text-3xl">{item.title[locale]}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export function Timeline({ locale }: { locale: Locale }) {
  return (
    <div className="grid gap-5">
      {timeline.map((item) => (
        <article key={item.title.fi} className="grid gap-4 border-t border-[#081524]/15 py-7 md:grid-cols-[180px_1fr]">
          <p className="serif text-4xl text-[#8B3A2B]">{item.year[locale]}</p>
          <div>
            <h3 className="serif text-3xl text-[#081524]">{item.title[locale]}</h3>
            <p className="mt-3 max-w-3xl leading-8 text-[#3B4B58]">{item.body[locale]}</p>
            {item.year.fi === '1918' ? (
              <figure className="mt-7 max-w-3xl">
                <ImageFrame imageKey="railway1918" locale={locale} className="aspect-[3/2] border border-[#081524]/12" sizes="(min-width: 768px) 720px, 100vw" />
              </figure>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  );
}

export function HarbourStatus({ locale }: { locale: Locale }) {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {harbourServices.map((service) => (
        <article key={service.title.fi} className="border border-[#D9C4A0]/60 bg-[#081524] p-6 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D9C4A0]">{service.status[locale]}</p>
          <h3 className="serif mt-5 text-3xl">{service.title[locale]}</h3>
          <p className="mt-4 leading-7 text-white/72">{service.description[locale]}</p>
        </article>
      ))}
    </div>
  );
}

export function RouteCard({ route, locale }: { route: (typeof routes)[number]; locale: Locale }) {
  return (
    <article className="border-l-2 border-[#B1763B] bg-white/45 p-6">
      <h3 className="serif text-3xl text-[#081524]">{route.title[locale]}</h3>
      <p className="mt-4 leading-7 text-[#3B4B58]">{route.body[locale]}</p>
    </article>
  );
}

export function RouteGrid({ locale }: { locale: Locale }) {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {routes.map((route) => (
        <RouteCard key={route.title.fi} route={route} locale={locale} />
      ))}
    </div>
  );
}

export function MapSection({ locale }: { locale: Locale }) {
  return (
    <section id="saapuminen" className="grid gap-8 bg-[#E3E4E6] p-6 md:grid-cols-[0.9fr_1.1fr] md:p-10">
      <SectionHeading
        eyebrow={locale === 'fi' ? 'Saapuminen' : 'Arrival'}
        title={locale === 'fi' ? 'Outokummun järvimaisemaan.' : 'Into Outokumpu’s lake landscape.'}
        intro={
          locale === 'fi'
            ? 'Pitkälahti sijaitsee Juojärven rannalla Outokummun järvimaisemassa. Lahteen voi saapua omalla tavallaan – vesitse, maitse tai osana pidempää retkeä lähialueella. Karttanäkymä auttaa hahmottamaan Pitkälahden sijainnin suhteessa Juojärveen ja Outokumpuun. Tarkemmat ajo- ja reittiohjeet kannattaa tarkistaa omasta karttasovelluksesta tai navigaattorista ennen matkaa.'
            : 'Pitkälahti lies on the shores of Lake Juojärvi in the lakeland landscape of Outokumpu. You can arrive in your own way – by water, by road or as part of a longer outing in the surrounding area. The map helps place Pitkälahti in relation to Lake Juojärvi and Outokumpu. For detailed driving directions and route information, please use your own navigation app or chart plotter before travelling.'
        }
      />
      <div className="relative min-h-[320px] overflow-hidden bg-[#0B1E33]">
        <div className="absolute inset-0 opacity-80 [background:radial-gradient(circle_at_35%_35%,#D9C4A0_0_2px,transparent_3px),linear-gradient(135deg,#0B1E33,#081524)] [background-size:38px_38px,auto]" />
        <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 border border-[#D9C4A0]/70" />
        <p className="absolute bottom-6 left-6 max-w-xs text-sm uppercase tracking-[0.24em] text-[#D9C4A0]">Pitkälahti · Lake Juojärvi</p>
      </div>
    </section>
  );
}
