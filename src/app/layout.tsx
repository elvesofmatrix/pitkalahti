import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Pitkälahti Harbour',
    template: '%s | Pitkälahti Harbour'
  },
  description: 'Official digital experience for Pitkälahti Harbour in Outokumpu, Finland.',
  metadataBase: new URL('https://pitkalahti.fi')
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fi">
      <body>{children}</body>
    </html>
  );
}
