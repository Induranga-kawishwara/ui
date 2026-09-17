import type { Metadata } from 'next';
import { SetupFivoraClient } from './SetupFivoraClient';
import { SITE_CONFIG } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Setup & Convert Fivora Storefront Templates — DENEB UI',
  description:
    'Complete master guide for converting existing Next.js storefronts or building new templates for the Fivora DENEB UI v2.0 Platform. Visual editing attributes, SiteDataProvider, and static export constraints.',
  keywords: [
    'Fivora setup',
    'convert storefront template',
    'Fivora DENEB UI',
    'data-preview attributes',
    'SiteDataProvider',
    'Fivora Merchant Studio',
    'headless storefront conversion',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/docs/setup-fivora`,
  },
  openGraph: {
    title: 'Setup & Convert Fivora Storefront Templates — DENEB UI',
    description:
      'Complete master guide for converting existing Next.js storefronts or building new templates for the Fivora DENEB UI v2.0 Platform. Visual editing attributes, SiteDataProvider, and static export constraints.',
    url: `${SITE_CONFIG.url}/docs/setup-fivora`,
    type: 'article',
    images: [SITE_CONFIG.ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Setup & Convert Fivora Storefront Templates — DENEB UI',
    description:
      'Complete master guide for converting existing Next.js storefronts or building new templates for the Fivora DENEB UI v2.0 Platform.',
    images: [SITE_CONFIG.ogImage],
  },
};

export default function SetupFivoraPage() {
  return <SetupFivoraClient />;
}
