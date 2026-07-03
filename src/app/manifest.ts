import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Pitkälahti Harbour',
    short_name: 'Pitkälahti',
    description: 'Official digital experience for Pitkälahti Harbour in Outokumpu, Finland.',
    start_url: '/fi',
    display: 'standalone',
    background_color: '#081524',
    theme_color: '#0B1E33',
    icons: [
      {
        src: '/icons/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml'
      }
    ]
  };
}
