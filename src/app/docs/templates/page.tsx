'use client';

import React from 'react';
import Link from 'next/link';
import { Box, Sparkles, ArrowRight, CheckCircle2, ShoppingBag, ShieldCheck } from 'lucide-react';
import { CodeBlock } from '@/components/docs/CodeBlock';
import { TableOfContents, TocItem } from '@/components/layout/TableOfContents';
import { DenebStarIcon } from '@/components/brand/DenebLogo';

export default function TemplatesPage() {
  const tocItems: TocItem[] = [
    { id: 'scaffold', title: 'Storefront Scaffolding' },
    { id: 'included', title: 'What is Included' },
    { id: 'customizing', title: 'Customizing Templates' },
  ];

  return (
    <div className="flex w-full gap-8 lg:gap-10">
      <div className="flex-1 min-w-0 py-6 space-y-10">
        <div className="flex items-center gap-2 text-xs text-[#94A3B8]">
          <Link href="/docs/installation" className="hover:text-white transition-colors">
            Docs
          </Link>
          <span>/</span>
          <span className="text-[#818CF8] font-semibold">Templates</span>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-sans">
              Storefront Templates
            </h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#818CF8]/15 text-[#A5B4FC] border border-[#818CF8]/30 flex items-center gap-1">
              <DenebStarIcon className="w-2.5 h-2.5" />
              Pre-validated
            </span>
          </div>
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Generate turnkey, high-converting commerce storefronts pre-wired with DENEB UI smart actions and site-data schemas.
          </p>
        </div>

        <section id="scaffold" className="space-y-4">
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#818CF8]" />
            <span>Generate a Storefront</span>
          </h2>
          <p className="text-sm text-[#94A3B8]">
            Run the generator from any terminal:
          </p>
          <CodeBlock
            code={`npx @deneb-ui/create-template my-brand-store\n# or\nnpx create-deneb my-brand-store`}
            language="bash"
            filename="terminal"
          />
        </section>

        <section id="included" className="space-y-4 pt-4 border-t border-[#23283B]">
          <h2 className="text-xl font-bold text-white tracking-tight">Included Out of the Box</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#CBD5E1]">
            <div className="p-3 rounded-xl border border-[#23283B] bg-[#0A0D17] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#818CF8] shrink-0" />
              <span>Full Next.js 15+ App Router architecture</span>
            </div>
            <div className="p-3 rounded-xl border border-[#23283B] bg-[#0A0D17] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#818CF8] shrink-0" />
              <span>Smart WhatsApp & Phone action triggers</span>
            </div>
            <div className="p-3 rounded-xl border border-[#23283B] bg-[#0A0D17] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#818CF8] shrink-0" />
              <span>Interactive Google Maps & Directions cards</span>
            </div>
            <div className="p-3 rounded-xl border border-[#23283B] bg-[#0A0D17] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#818CF8] shrink-0" />
              <span>Weekly operating hours with live Open/Closed pill</span>
            </div>
            <div className="p-3 rounded-xl border border-[#23283B] bg-[#0A0D17] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#818CF8] shrink-0" />
              <span>Product catalog, Cart actions & FAQ Accordions</span>
            </div>
            <div className="p-3 rounded-xl border border-[#23283B] bg-[#0A0D17] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#818CF8] shrink-0" />
              <span>Fivora visual editing marker support</span>
            </div>
          </div>
        </section>

        <div className="pt-8 border-t border-[#23283B] flex justify-end">
          <Link
            href="/docs/components/button"
            className="flex items-center gap-2 text-xs font-semibold text-[#818CF8] hover:text-white transition-colors"
          >
            <span>Next: Browse Components</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <TableOfContents items={tocItems} />
    </div>
  );
}
