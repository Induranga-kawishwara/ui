import type { Metadata } from 'next';
import { InstallationClient } from './InstallationClient';
import { SITE_CONFIG } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Installation & Quickstart Guide — DENEB UI',
  description:
    'Step-by-step installation guide for DENEB UI. Scaffold high-converting storefronts in seconds with @deneb-ui/create-template, initialize with the CLI, or add to existing Next.js and React projects.',
  keywords: [
    'install DENEB UI',
    'create-template',
    'deneb-ui cli',
    'Next.js 15 UI installation',
    'React 19 storefront',
    'Tailwind CSS setup',
    'storefront scaffolding',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/docs/installation`,
  },
  openGraph: {
    title: 'Installation & Quickstart Guide — DENEB UI',
    description:
      'Scaffold high-converting storefronts in seconds with @deneb-ui/create-template, initialize with the CLI, or add to existing Next.js and React projects.',
    url: `${SITE_CONFIG.url}/docs/installation`,
    type: 'article',
    images: [SITE_CONFIG.ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Installation & Quickstart Guide — DENEB UI',
    description:
      'Scaffold high-converting storefronts in seconds with @deneb-ui/create-template, initialize with the CLI, or add to existing Next.js and React projects.',
    images: [SITE_CONFIG.ogImage],
  },
};

export default function InstallationPage() {
  return <InstallationClient />;
}
