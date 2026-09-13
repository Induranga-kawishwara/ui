'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Sparkles,
  Layers,
  PhoneCall,
  MapPin,
  Clock,
  LayoutGrid,
  ChevronRight,
  Flame,
  Palette,
} from 'lucide-react';

export interface NavSection {
  title: string;
  icon?: React.ReactNode;
  items: {
    title: string;
    href: string;
    isNew?: boolean;
    badge?: string;
  }[];
}

export const SIDEBAR_NAV: NavSection[] = [
  {
    title: 'Getting Started',
    icon: <Sparkles className="w-4 h-4 text-[#818CF8]" />,
    items: [
      { title: 'Introduction', href: '/docs/introduction' },
      { title: 'Installation', href: '/docs/installation' },
      { title: 'Theming & Tokens', href: '/docs/theming' },
      { title: 'CLI Reference', href: '/docs/cli' },
      { title: 'Storefront Scaffolding', href: '/docs/templates' },
    ],
  },
  {
    title: 'Core Primitives',
    icon: <Layers className="w-4 h-4 text-[#818CF8]" />,
    items: [
      { title: 'Button', href: '/docs/components/button' },
      { title: 'Card', href: '/docs/components/card' },
      { title: 'Badge', href: '/docs/components/badge' },
      { title: 'Typography', href: '/docs/components/typography' },
      { title: 'Dialog / Modal', href: '/docs/components/dialog' },
      { title: 'Grid & Box', href: '/docs/components/grid' },
      { title: 'Image', href: '/docs/components/image' },
    ],
  },
  {
    title: 'Smart Commerce Actions',
    icon: <PhoneCall className="w-4 h-4 text-[#818CF8]" />,
    items: [
      { title: 'ContactActions', href: '/docs/components/contact-actions', isNew: true },
      { title: 'WhatsAppButton', href: '/docs/components/whatsapp-button' },
      { title: 'PhoneButton', href: '/docs/components/phone-button' },
      { title: 'EmailButton', href: '/docs/components/email-button' },
      { title: 'FloatingContactWidget', href: '/docs/components/floating-contact-widget', badge: 'Smart' },
    ],
  },
  {
    title: 'Location & Navigation',
    icon: <MapPin className="w-4 h-4 text-[#818CF8]" />,
    items: [
      { title: 'LocationCard', href: '/docs/components/location-card' },
      { title: 'LocationLink', href: '/docs/components/location-link' },
      { title: 'MapEmbed', href: '/docs/components/map-embed' },
      { title: 'Address', href: '/docs/components/address' },
    ],
  },
  {
    title: 'Social & Business',
    icon: <Clock className="w-4 h-4 text-[#818CF8]" />,
    items: [
      { title: 'BusinessHours', href: '/docs/components/business-hours', badge: 'Live' },
      { title: 'SocialLinks', href: '/docs/components/social-links' },
      { title: 'SocialButton', href: '/docs/components/social-button' },
    ],
  },
  {
    title: 'Storefront Sections',
    icon: <LayoutGrid className="w-4 h-4 text-[#818CF8]" />,
    items: [
      { title: 'Hero (Centered & Split)', href: '/docs/components/hero' },
      { title: 'ProductCard', href: '/docs/components/product-card', isNew: true },
      { title: 'PricingCard', href: '/docs/components/pricing-card' },
      { title: 'TestimonialCard', href: '/docs/components/testimonial-card' },
      { title: 'ServiceCard', href: '/docs/components/service-card' },
      { title: 'FAQAccordion', href: '/docs/components/faq-accordion' },
      { title: 'AnnouncementBar', href: '/docs/components/announcement-bar' },
      { title: 'CategoryPills', href: '/docs/components/category-pills' },
      { title: 'ContactForm', href: '/docs/components/contact-form' },
      { title: 'Navbar', href: '/docs/components/navbar' },
      { title: 'Footer', href: '/docs/components/footer' },
    ],
  },
  {
    title: "Data & Theme Engine",
    icon: <Palette className="w-4 h-4 text-[#818CF8]" />,
    items: [
      { title: "SiteDataProvider", href: "/docs/components/site-data-provider", badge: "State" },
      { title: "ThemeStyles", href: "/docs/components/theme-styles", badge: "Tokens" },
    ],
  },
];

export function DocsSidebar({
  className = '',
  onItemClick,
}: {
  className?: string;
  onItemClick?: () => void;
}) {
  const pathname = usePathname();

  return (
    <aside className={`w-64 shrink-0 pb-12 pt-6 ${className}`}>
      <div className="space-y-6">
        {SIDEBAR_NAV.map((section) => (
          <div key={section.title} className="space-y-2">
            <div className="flex items-center gap-2 px-3 text-xs font-semibold uppercase tracking-wider text-[#94A3B8]">
              {section.icon}
              <span>{section.title}</span>
            </div>
            <ul className="space-y-1">
              {section.items.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={onItemClick}
                      className={`group flex items-center justify-between px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        isActive
                          ? 'text-[#818CF8] bg-[#818CF8]/10 font-semibold border-l-2 border-[#818CF8]'
                          : 'text-[#CBD5E1] hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <span className="truncate">{item.title}</span>
                      <div className="flex items-center gap-1.5">
                        {item.isNew && (
                          <span className="text-[9px] font-semibold uppercase px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                            New
                          </span>
                        )}
                        {item.badge && (
                          <span className="text-[9px] font-semibold uppercase px-1.5 py-0.2 rounded bg-[#818CF8]/20 text-[#A5B4FC] border border-[#818CF8]/30">
                            {item.badge}
                          </span>
                        )}
                        {isActive && (
                          <ChevronRight className="w-3.5 h-3.5 text-[#818CF8]" />
                        )}
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
}
