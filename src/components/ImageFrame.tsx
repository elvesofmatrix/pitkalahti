import Image from 'next/image';
import type { CSSProperties } from 'react';
import { pitkalahtiImages, type PitkalahtiImageKey } from '@/data/images';
import type { Locale } from '@/lib/i18n';

type ImageFrameProps = {
  imageKey: PitkalahtiImageKey;
  locale: Locale;
  className: string;
  priority?: boolean;
  sizes?: string;
};

export function ImageFrame({ imageKey, locale, className, priority = false, sizes = '100vw' }: ImageFrameProps) {
  const image = pitkalahtiImages[imageKey];
  const positionStyle = {
    '--mobile-object-position': image.mobileObjectPosition ?? image.objectPosition,
    '--desktop-object-position': image.objectPosition
  } as CSSProperties;

  return (
    <div className={`relative overflow-hidden bg-[#081524] ${className}`} style={positionStyle}>
      <Image
        src={image.src}
        alt={image.alt[locale]}
        fill
        priority={priority}
        unoptimized
        sizes={sizes}
        className="object-cover object-[var(--mobile-object-position)] md:object-[var(--desktop-object-position)]"
      />
    </div>
  );
}
