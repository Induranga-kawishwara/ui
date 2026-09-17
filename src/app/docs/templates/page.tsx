import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShoppingBag
} from 'lucide-react';
import { CodeBlock } from '@/components/docs/CodeBlock';
import { TableOfContents, TocItem } from '@/components/layout/TableOfContents';
import { DenebStarIcon } from '@/components/brand/DenebLogo';
import { SITE_CONFIG } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Production Storefront Templates — DENEB UI',
  description:
    'Pre-built, validated, and high-converting modern e-commerce storefront templates. Scaffold fully styled Next.js storefronts in seconds.',
  keywords: [
    'storefront templates',
    'Next.js e-commerce template',
    'React shop starter',
    'Fivora storefront template',
    'modern commerce theme',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/docs/templates`,
  },
  openGraph: {
    title: 'Production Storefront Templates — DENEB UI',
    description:
      'Pre-built, validated, and high-converting modern e-commerce storefront templates. Scaffold fully styled Next.js storefronts in seconds.',
    url: `${SITE_CONFIG.url}/docs/templates`,
    type: 'article',
    images: [SITE_CONFIG.ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Production Storefront Templates — DENEB UI',
    description:
      'Pre-built, validated, and high-converting modern e-commerce storefront templates.',
    images: [SITE_CONFIG.ogImage],
  },
};

export default function TemplatesPage() {
  const tocItems: TocItem[] = [
    { id: 'scaffold', title: 'Storefront Scaffolding' },
    { id: 'included', title: 'What is Included' },
  ];

  return (
    <div className="flex w-full min-h-full">
      <div className="flex-1 min-w-0 px-4 sm:px-6 lg:px-8 xl:px-12 py-8 space-y-10">
        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-[#94A3B8]">
          <Link href="/docs/installation" className="hover:text-slate-900 dark:hover:text-white transition-colors">
            Docs
          </Link>
          <span>/</span>
          <span className="text-indigo-600 dark:text-[#818CF8] font-semibold">Templates</span>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white font-sans">
              Storefront Templates
            </h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-600 border border-indigo-200 dark:bg-[#818CF8]/15 dark:text-[#A5B4FC] dark:border-[#818CF8]/30 flex items-center gap-1 shadow-xs dark:shadow-none">
              <DenebStarIcon className="w-2.5 h-2.5" />
              Pre-validated
            </span>
          </div>
          <p className="text-base sm:text-lg text-slate-600 dark:text-[#94A3B8] leading-relaxed">
            Generate turnkey, high-converting commerce storefronts pre-wired with DENEB UI smart actions and site-data schemas.
          </p>
        </div>

        <section id="scaffold" className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-indigo-600 dark:text-[#818CF8]" />
            <span>Generate a Storefront</span>
          </h2>
          <p className="text-sm text-slate-600 dark:text-[#94A3B8]">
            Run the generator from any terminal:
          </p>
          <CodeBlock
            code={`npx @deneb-ui/create-template my-brand-store\n# or\nnpx create-deneb my-brand-store`}
            language="bash"
            filename="terminal"
          />
        </section>

        <section id="included" className="space-y-4 pt-4 border-t border-slate-200 dark:border-[#23283B]">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">Included Out of the Box</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 dark:text-[#CBD5E1]">
            <div className="p-3 rounded-xl border border-slate-200 bg-white shadow-xs dark:border-[#23283B] dark:bg-[#0A0D17] dark:shadow-none flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-[#818CF8] shrink-0" />
              <span>Full Next.js 15+ App Router architecture</span>
            </div>
            <div className="p-3 rounded-xl border border-slate-200 bg-white shadow-xs dark:border-[#23283B] dark:bg-[#0A0D17] dark:shadow-none flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-[#818CF8] shrink-0" />
              <span>Smart WhatsApp & Phone action triggers</span>
            </div>
            <div className="p-3 rounded-xl border border-slate-200 bg-white shadow-xs dark:border-[#23283B] dark:bg-[#0A0D17] dark:shadow-none flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-[#818CF8] shrink-0" />
              <span>Interactive Google Maps & Directions cards</span>
            </div>
            <div className="p-3 rounded-xl border border-slate-200 bg-white shadow-xs dark:border-[#23283B] dark:bg-[#0A0D17] dark:shadow-none flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-[#818CF8] shrink-0" />
              <span>Weekly operating hours with live Open/Closed pill</span>
            </div>
            <div className="p-3 rounded-xl border border-slate-200 bg-white shadow-xs dark:border-[#23283B] dark:bg-[#0A0D17] dark:shadow-none flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-[#818CF8] shrink-0" />
              <span>Product catalog, Cart actions & FAQ Accordions</span>
            </div>
            <div className="p-3 rounded-xl border border-slate-200 bg-white shadow-xs dark:border-[#23283B] dark:bg-[#0A0D17] dark:shadow-none flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-[#818CF8] shrink-0" />
              <span>Fivora visual editing marker support</span>
            </div>
          </div>
        </section>

        <div className="pt-8 border-t border-slate-200 dark:border-[#23283B] flex justify-end">
          <Link
            href="/docs/components/button"
            className="flex items-center gap-2 text-xs font-semibold text-indigo-600 dark:text-[#818CF8] hover:text-slate-900 dark:hover:text-white transition-colors"
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
