import Link from 'next/link';
import type { ReactNode } from 'react';

type ButtonProps = {
  href: string;
  children: ReactNode;
};

export function PrimaryButton({ href, children }: ButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex min-h-12 items-center border border-[#D9C4A0] bg-[#D9C4A0] px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#081524] transition hover:-translate-y-0.5 hover:bg-[#E3E4E6]"
    >
      {children}
    </Link>
  );
}

export function SecondaryButton({ href, children }: ButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex min-h-12 items-center border border-white/45 px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:-translate-y-0.5 hover:border-[#D9C4A0] hover:text-[#D9C4A0]"
    >
      {children}
    </Link>
  );
}
