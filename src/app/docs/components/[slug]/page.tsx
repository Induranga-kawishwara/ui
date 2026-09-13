import React from 'react';
import { ComponentDocClient } from '@/components/docs/ComponentDocClient';

export const COMPONENT_SLUGS = [
  'button',
  'card',
  'badge',
  'typography',
  'dialog',
  'grid',
  'image',
  'contact-actions',
  'whatsapp-button',
  'phone-button',
  'email-button',
  'floating-contact-widget',
  'location-card',
  'location-link',
  'map-embed',
  'address',
  'business-hours',
  'social-links',
  'social-button',
  'hero',
  'product-card',
  'service-card',
  'pricing-card',
  'testimonial-card',
  'faq-accordion',
  'announcement-bar',
  'category-pills',
  'contact-form',
  'navbar',
  'footer',
  'site-data-provider',
  'theme-styles',
];

export function generateStaticParams() {
  return COMPONENT_SLUGS.map((slug) => ({ slug }));
}

export default async function ComponentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ComponentDocClient slug={slug} />;
}
