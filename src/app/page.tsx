import type { Metadata } from 'next';
import { HomeClient } from './HomeClient';
import { SITE_CONFIG } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'DENEB UI — Visual-First React Framework & Celestial Storefront Suite',
  description:
    'A visual-first React component ecosystem and storefront authoring suite, developed in collaboration with FIVORA. Featuring shadcn-style unopinionated primitives, smart commerce actions, live dynamic business hours, WhatsApp checkout, and instant CLI scaffolding.',
  keywords: SITE_CONFIG.keywords,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'DENEB UI — Visual-First React Framework',
    description:
      'A modern celestial UI component ecosystem with shadcn-style primitives and smart commerce actions.',
    url: '/',
    siteName: 'DENEB UI',
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: 'DENEB UI — Visual-First React Framework',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DENEB UI — Visual-First React Framework',
    description:
      'A modern celestial UI component ecosystem with shadcn-style primitives and smart commerce actions.',
    images: [SITE_CONFIG.ogImage],
    creator: '@deneb_ui',
  },
};

export default function HomePage() {
  return <HomeClient />;
}
