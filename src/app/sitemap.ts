import type { MetadataRoute } from 'next';
import { COMPONENT_SLUGS } from '@/lib/docs/component-meta';
import { SITE_CONFIG } from '@/lib/site-config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;
  const currentDate = new Date();

  // Core High-Priority Routes
  const coreRoutes: Array<{
    path: string;
    priority: number;
    changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  }> = [
    { path: '', priority: 1.0, changeFrequency: 'daily' },
    { path: '/docs/introduction', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/docs/installation', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/docs/setup-fivora', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/docs/theming', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/docs/responsive-design', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/docs/cli', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/docs/templates', priority: 0.85, changeFrequency: 'weekly' },
  ];

  // Component Documentation Routes
  const componentRoutes = COMPONENT_SLUGS.map((slug) => ({
    path: `/docs/components/${slug}`,
    priority: 0.75,
    changeFrequency: 'weekly' as const,
  }));

  return [...coreRoutes, ...componentRoutes].map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: currentDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
