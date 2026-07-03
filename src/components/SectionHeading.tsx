type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: 'left' | 'center';
};

export function SectionHeading({ eyebrow, title, intro, align = 'left' }: SectionHeadingProps) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow ? (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#B65F32]">{eyebrow}</p>
      ) : null}
      <h2 className="serif text-balance text-4xl font-medium leading-tight text-[#081524] md:text-6xl">{title}</h2>
      {intro ? <p className="mt-6 text-lg leading-8 text-[#3B4B58]">{intro}</p> : null}
    </div>
  );
}
