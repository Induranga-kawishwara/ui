'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight, ShieldCheck, Zap, Star, Smartphone } from 'lucide-react';
import { TableOfContents, TocItem } from '@/components/layout/TableOfContents';
import { DenebStarIcon } from '@/components/brand/DenebLogo';

export default function IntroductionPage() {
  const tocItems: TocItem[] = [
    { id: 'about', title: 'About DENEB UI' },
    { id: 'principles', title: 'Design Principles' },
    { id: 'responsive', title: 'Responsive by Default' },
    { id: 'creators', title: 'Creators & Authors' },
  ];

  return (
    <div className="flex w-full gap-8 lg:gap-10">
      <div className="flex-1 min-w-0 py-6 space-y-10">
        <div className="flex items-center gap-2 text-xs text-[#94A3B8]">
          <Link href="/docs/installation" className="hover:text-white transition-colors">
            Docs
          </Link>
          <span>/</span>
          <span className="text-[#818CF8] font-semibold">Introduction</span>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-sans">
              Introduction
            </h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#818CF8]/15 text-[#A5B4FC] border border-[#818CF8]/30 flex items-center gap-1">
              <DenebStarIcon className="w-2.5 h-2.5" />
              v2.0
            </span>
          </div>
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            DENEB UI is a visual-first React component ecosystem and storefront authoring suite, developed in collaboration with FIVORA.
          </p>
        </div>

        <section id="about" className="space-y-4">
          <h2 className="text-xl font-bold text-white tracking-tight">Why DENEB UI?</h2>
          <p className="text-sm text-[#94A3B8] leading-relaxed">
            Most UI frameworks either give you bare unstyled primitives or heavy monoliths. DENEB UI bridges the gap by providing <strong>shadcn-style unopinionated primitives</strong> coupled with <strong>smart commerce action components</strong> (ContactActions, WhatsApp button with one-click direct chat, live dynamic BusinessHours with status calculation, and high-converting storefront blocks) designed specifically for real-world storefronts.
          </p>
        </section>

        <section id="principles" className="space-y-4 pt-4 border-t border-[#23283B]">
          <h2 className="text-xl font-bold text-white tracking-tight">Core Architecture Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl border border-[#23283B] bg-[#0A0D17] space-y-2">
              <div className="p-2 w-fit rounded-lg bg-[#818CF8]/10 text-[#818CF8] border border-[#818CF8]/20">
                <Zap className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-white">Zero Extra Bloat</h3>
              <p className="text-xs text-[#94A3B8]">
                Native Tailwind CSS classes with pure React peer dependencies. Minimal JS overhead for lightning LCP scores.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-[#23283B] bg-[#0A0D17] space-y-2">
              <div className="p-2 w-fit rounded-lg bg-[#818CF8]/10 text-[#818CF8] border border-[#818CF8]/20">
                <Sparkles className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-white">Smart Action Fallbacks</h3>
              <p className="text-xs text-[#94A3B8]">
                Contact and location components automatically hide or fallback gracefully when merchant credentials aren&apos;t provided.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-[#23283B] bg-[#0A0D17] space-y-2">
              <div className="p-2 w-fit rounded-lg bg-[#818CF8]/10 text-[#818CF8] border border-[#818CF8]/20">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-white">Visual Editing Native</h3>
              <p className="text-xs text-[#94A3B8]">
                Built-in data attribute field paths enable seamless two-way syncing with headless CMS and visual site builders.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-[#23283B] bg-[#0A0D17] space-y-2">
              <div className="p-2 w-fit rounded-lg bg-[#818CF8]/10 text-[#818CF8] border border-[#818CF8]/20">
                <Smartphone className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-white">Responsive Everywhere</h3>
              <p className="text-xs text-[#94A3B8]">
                Every component adapts across mobile, tablet, and desktop with automatic CSS injection via SiteDataProvider.
              </p>
            </div>
          </div>
        </section>

        <section id="responsive" className="space-y-4 pt-4 border-t border-[#23283B]">
          <h2 className="text-xl font-bold text-white tracking-tight">Responsive by Default</h2>
          <p className="text-sm text-[#94A3B8] leading-relaxed">
            DENEB UI ships <code className="text-white bg-black/40 px-1.5 py-0.5 rounded font-mono">ResponsiveBaseStyles</code> — global viewport CSS for nav drawers, collapsible filters, fluid grids, and mobile commerce bars. No extra configuration is required when you use <code className="text-white bg-black/40 px-1.5 py-0.5 rounded font-mono">SiteDataProvider</code>.
          </p>
          <Link
            href="/docs/responsive-design"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-[#818CF8]/15 text-[#A5B4FC] border border-[#818CF8]/30 hover:bg-[#818CF8]/25 transition-all"
          >
            <span>Read the Responsive Design guide</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </section>

        <section id="creators" className="space-y-4 pt-4 border-t border-[#23283B]">
          <h2 className="text-xl font-bold text-white tracking-tight">Authors & Architecture</h2>
          <div className="p-5 rounded-2xl border border-[#23283B] bg-[#0A0D17] flex items-center justify-between flex-wrap gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h4 className="font-bold text-white text-sm">Chamika Gayashan & Induranga Kawishwara</h4>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#818CF8]/15 text-[#A5B4FC] border border-[#818CF8]/30">
                  Architects
                </span>
              </div>
              <p className="text-xs text-[#94A3B8]">
                DENEB-UI Collaborate with FIVORA. Engineered for high-converting modern web commerce.
              </p>
            </div>

            <a
              href="https://github.com/deneb-ui/ui"
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-1.5 rounded-lg border border-[#23283B] bg-[#121625] text-xs font-semibold text-white hover:border-[#818CF8]/40 hover:bg-[#818CF8]/10 transition-all flex items-center gap-1.5"
            >
              <Star className="w-3.5 h-3.5 text-[#818CF8]" />
              <span>Follow on GitHub</span>
            </a>
          </div>
        </section>

        <div className="pt-8 border-t border-[#23283B] flex justify-end">
          <Link
            href="/docs/installation"
            className="flex items-center gap-2 text-xs font-semibold text-[#818CF8] hover:text-white transition-colors"
          >
            <span>Next: Installation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <TableOfContents items={tocItems} />
    </div>
  );
}
