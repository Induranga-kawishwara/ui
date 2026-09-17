import type { Metadata } from 'next';
import React from 'react';
import { ComponentDocClient } from '@/components/docs/ComponentDocClient';
import { COMPONENT_SLUGS, COMPONENT_META } from '@/lib/docs/component-meta';
import { SITE_CONFIG } from '@/lib/site-config';

export function generateStaticParams() {
  return COMPONENT_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const meta = COMPONENT_META[slug];

  if (!meta) {
    return {
      title: 'Component Not Found',
    };
  }

  const title = `${meta.title} Component — React & Tailwind UI Primitives`;
  const description = `${meta.description} Accessible, customizable, and visual-editing ready for Next.js & React storefronts.`;
  const canonicalUrl = `${SITE_CONFIG.url}/docs/components/${slug}`;

  return {
    title,
    description,
    keywords: meta.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${meta.title} — DENEB UI Component`,
      description,
      url: canonicalUrl,
      type: 'article',
      images: [
        {
          url: SITE_CONFIG.ogImage,
          width: 1200,
          height: 630,
          alt: `${meta.title} Component Preview`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${meta.title} — DENEB UI Component`,
      description,
      images: [SITE_CONFIG.ogImage],
    },
  };
}

export default async function ComponentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const meta = COMPONENT_META[slug];

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_CONFIG.url,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Docs',
        item: `${SITE_CONFIG.url}/docs/introduction`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Components',
        item: `${SITE_CONFIG.url}/docs/components/button`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: meta ? meta.title : slug,
        item: `${SITE_CONFIG.url}/docs/components/${slug}`,
      },
    ],
  };

  const articleJsonLd = meta
    ? {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: `${meta.title} Component — DENEB UI`,
        description: meta.description,
        articleSection: meta.category,
        url: `${SITE_CONFIG.url}/docs/components/${slug}`,
        author: {
          '@type': 'Organization',
          name: SITE_CONFIG.name,
          url: SITE_CONFIG.url,
        },
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {articleJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />
      )}
      <ComponentDocClient slug={slug} />
    </>
  );
}
