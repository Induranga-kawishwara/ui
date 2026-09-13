'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  ArrowRight,
  AlertTriangle,
  Terminal,
  Layers,
  Zap,
  ShieldCheck,
  PackageCheck,
  RefreshCw,
  Cpu,
  HelpCircle,
  Copy,
  Check,
} from 'lucide-react';
import { CodeBlock } from '@/components/docs/CodeBlock';
import { TableOfContents, TocItem } from '@/components/layout/TableOfContents';
import { DenebStarIcon } from '@/components/brand/DenebLogo';

export default function SetupFivoraPage() {
  const [activePathway, setActivePathway] = useState<'convert' | 'scratch'>('convert');
  const [copied, setCopied] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleCopyPage = async () => {
    if (!contentRef.current) return;
    try {
      const clone = contentRef.current.cloneNode(true) as HTMLElement;
      // Remove elements marked as no-copy (such as this copy button itself)
      clone.querySelectorAll('[data-no-copy]').forEach((el) => el.remove());
      // Remove any button elements (such as code block copy buttons) so their text isn't included
      clone.querySelectorAll('button').forEach((el) => el.remove());

      const text = (clone.innerText || clone.textContent || '')
        .replace(/\n{3,}/g, '\n\n')
        .trim();

      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
      }

      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy page content:', err);
    }
  };

  const tocItems: TocItem[] = [
    { id: 'overview', title: 'Architecture & Stack' },
    { id: 'pathways', title: 'Choose Setup Pathway' },
    { id: 'conversion-steps', title: 'Convert Existing Frontend' },
    { id: 'visual-markers', title: 'Visual Marker Rules' },
    { id: 'standard-vs-premium', title: 'Standard vs. Premium' },
    { id: 'testing-lab', title: 'Local Visual Lab & Validation' },
    { id: 'packaging', title: 'Packaging & Upload' },
    { id: 'troubleshooting', title: 'Troubleshooting' },
  ];

  return (
    <div suppressHydrationWarning className="flex w-full gap-8 lg:gap-10">
      <div ref={contentRef} className="flex-1 min-w-0 py-6 space-y-12">
        {/* Breadcrumb & Copy Action */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-[#94A3B8]">
            <Link href="/docs/introduction" className="hover:text-white transition-colors">
              Docs
            </Link>
            <span>/</span>
            <span className="text-[#818CF8] font-semibold">Set Up Fivora</span>
          </div>

          <div data-no-copy className="shrink-0">
            <button
              onClick={handleCopyPage}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-[#23283B] bg-[#0E1220]/80 hover:bg-[#161B2E] text-[#94A3B8] hover:text-white hover:border-[#818CF8]/40 transition-all text-xs font-medium shadow-sm hover:shadow-md active:scale-95 group cursor-pointer"
              title="Copy entire page content"
              aria-label="Copy entire page content"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#4ADE80]" />
                  <span className="text-[#4ADE80] font-medium">Copied page</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#818CF8] group-hover:text-white transition-colors" />
                  <span>Copy page</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Page Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-sans">
              Set Up Fivora Templates
            </h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#818CF8]/15 text-[#A5B4FC] border border-[#818CF8]/30 flex items-center gap-1 shadow-[0_0_12px_rgba(129,140,248,0.2)]">
              <DenebStarIcon className="w-2.5 h-2.5" />
              v2.0 Spec
            </span>
          </div>
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            The definitive developer guide to authoring storefront templates for <strong className="text-white">Fivora</strong> using the <strong className="text-white">DENEB UI</strong> ecosystem. Learn how to build new templates or convert an existing Next.js frontend into a fully editable visual storefront.
          </p>
        </div>

        {/* Architecture & Stack Overview */}
        <section id="overview" className="space-y-5">
          <div className="p-5 sm:p-6 rounded-2xl border border-[#23283B] bg-[#0A0D17] shadow-xl space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#818CF8]/10 text-[#818CF8] border border-[#818CF8]/25">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white">The Fivora Developer Stack</h2>
                <p className="text-xs text-[#94A3B8]">Understanding the relationship between Fivora, DENEB UI, and your Next.js storefront.</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
              A <strong className="text-white">Fivora Template</strong> is a modern Next.js static storefront. When a merchant purchases your template in Fivora, they can click directly on any headline, description, product card, or photo in a live iframe preview to customize it in real time, or use Fivora&apos;s AI assistant to restyle the site.
            </p>

            <div className="p-4 rounded-xl border border-[#23283B] bg-[#0E1220] font-mono text-xs text-[#94A3B8] overflow-x-auto space-y-1">
              <div className="text-[#818CF8] font-bold">┌── Fivora Merchant Application / Website Agent</div>
              <div>│   └── Visual click-to-edit canvas (Iframe Parent)</div>
              <div>▼   (Bidirectional postMessage handshake: FIVORA_PREVIEW_READY)</div>
              <div className="text-emerald-400 font-bold">├── Your Next.js Storefront (Iframe Child)</div>
              <div>│   ├── @deneb-ui/ui (SiteDataProvider + Click-to-Edit Primitives)</div>
              <div>│   ├── src/data/site-data.json (Single source of truth)</div>
              <div>│   └── fivora-template.json (Manifest v2 specification)</div>
              <div className="text-indigo-400 font-bold">└── @deneb-ui/cli (deneb lab, deneb validate, deneb package)</div>
            </div>

            {/* Official Package Warning Callout */}
            <div className="p-4 rounded-xl border border-amber-500/30 bg-amber-950/20 text-amber-200/90 text-xs sm:text-sm space-y-2">
              <div className="flex items-center gap-2 font-bold text-amber-300">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>Why You Must Use the Official DENEB Packages</span>
              </div>
              <p className="leading-relaxed">
                Do <strong>NOT</strong> attempt to handwrite custom <code className="bg-black/40 px-1 py-0.5 rounded text-amber-100 font-mono">window.addEventListener(&apos;message&apos;)</code> listeners or custom DOM marker attributes. Handcrafted protocols fail Fivora origin verification, drop rapid keystrokes during live editing, and will be automatically rejected by the preflight ingest validator.
              </p>
            </div>
          </div>
        </section>

        {/* Setup Pathway Selector */}
        <section id="pathways" className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Choose Your Setup Pathway
            </h2>
            <p className="text-sm text-[#94A3B8]">
              Select whether you are converting an existing running React/Next.js frontend or scaffolding a new project from scratch.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
              onClick={() => setActivePathway('convert')}
              className={`p-5 rounded-2xl border text-left transition-all relative flex flex-col justify-between ${
                activePathway === 'convert'
                  ? 'border-[#818CF8] bg-[#121625] shadow-[0_0_24px_rgba(129,140,248,0.2)]'
                  : 'border-[#23283B] bg-[#0A0D17] hover:border-[#818CF8]/40'
              }`}
            >
              {activePathway === 'convert' && (
                <span className="absolute top-4 right-4 text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#818CF8]/20 text-[#A5B4FC] border border-[#818CF8]/30">
                  Active View
                </span>
              )}
              <div className="space-y-2">
                <div className="p-2 w-fit rounded-xl bg-[#818CF8]/15 text-[#818CF8]">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white text-base">Convert Existing Frontend</h3>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  You already have a running Next.js / Tailwind storefront and want to integrate DENEB UI and wire it for Fivora live visual editing.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#23283B] text-xs font-semibold text-[#818CF8] flex items-center gap-1">
                <span>View Step-by-Step Conversion</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </button>

            <button
              onClick={() => setActivePathway('scratch')}
              className={`p-5 rounded-2xl border text-left transition-all relative flex flex-col justify-between ${
                activePathway === 'scratch'
                  ? 'border-[#818CF8] bg-[#121625] shadow-[0_0_24px_rgba(129,140,248,0.2)]'
                  : 'border-[#23283B] bg-[#0A0D17] hover:border-[#818CF8]/40'
              }`}
            >
              {activePathway === 'scratch' && (
                <span className="absolute top-4 right-4 text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#818CF8]/20 text-[#A5B4FC] border border-[#818CF8]/30">
                  Active View
                </span>
              )}
              <div className="space-y-2">
                <div className="p-2 w-fit rounded-xl bg-emerald-500/15 text-emerald-400">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white text-base">Start Fresh (Greenfield)</h3>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  Scaffold a complete, pre-configured Next.js template in seconds using the official DENEB scaffolding CLI.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#23283B] text-xs font-semibold text-emerald-400 flex items-center gap-1">
                <span>View Scaffolding Command</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </button>
          </div>
        </section>

        {/* Greenfield Quick Section (Shown when scratch selected) */}
        {activePathway === 'scratch' && (
          <div className="p-6 rounded-2xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/30 via-[#0A0D17] to-emerald-950/20 space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Zap className="w-5 h-5 text-emerald-400" />
              <span>Scaffolding a New Fivora Template</span>
            </h3>
            <p className="text-xs sm:text-sm text-emerald-200/80 leading-relaxed">
              Run this single command in your terminal. It creates a Next.js App Router project with pre-configured <code className="text-white font-mono bg-black/40 px-1 py-0.5 rounded">fivora-template.json</code>, <code className="text-white font-mono bg-black/40 px-1 py-0.5 rounded">site-data.json</code>, and DENEB smart action components:
            </p>
            <CodeBlock code="npx @deneb-ui/create-template my-store" language="bash" />
            <p className="text-xs text-[#94A3B8]">
              Once scaffolded, run <code className="text-[#818CF8] font-mono">cd my-store && npm install && npm run dev</code> to launch your storefront.
            </p>
          </div>
        )}

        {/* Step-by-Step Conversion Guide (Core Focus) */}
        <section id="conversion-steps" className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Converting an Existing Running Frontend
            </h2>
            <p className="text-sm text-[#94A3B8]">
              Follow these sequential steps to convert your existing React / Next.js frontend into a fully compliant Fivora template, or use the 1-command automated converter.
            </p>
          </div>

          {/* Automated Conversion Quick Callout */}
          <div className="p-5 rounded-2xl border border-[#818CF8]/30 bg-gradient-to-r from-[#818CF8]/10 via-[#0A0D17] to-[#818CF8]/5 space-y-3">
            <div className="flex items-center gap-2 text-sm font-bold text-white">
              <Sparkles className="w-4 h-4 text-[#818CF8]" />
              <span>Instant 1-Command Auto-Conversion with <code className="text-[#A5B4FC] font-mono">deneb init</code> (Recommended)</span>
            </div>
            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
              If your storefront is already built with <strong className="text-white">shadcn/ui</strong>, <strong className="text-white">HeroUI</strong>, or <strong className="text-white">Tailwind CSS</strong>, you do not have to write markers manually. Simply run <code className="text-white font-mono bg-black/40 px-1.5 py-0.5 rounded">npx @deneb-ui/cli init</code>. The DENEB converter engine automatically detects your UI framework, mounts <code className="text-white font-mono">SiteDataProvider</code> in your root layout, extracts all hardcoded text, images, and search placeholders into <code className="text-white font-mono">site-data.json</code>, and instruments your JSX elements with <code className="text-white font-mono">data-preview-field-path</code> markers in seconds!
            </p>
            <CodeBlock code="npx @deneb-ui/cli init" language="bash" />
          </div>

          {/* STEP 1 */}
          <div className="p-6 rounded-2xl border border-[#23283B] bg-[#0A0D17] space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-[#818CF8]/20 text-[#818CF8] font-bold text-xs flex items-center justify-center border border-[#818CF8]/30">
                1
              </span>
              <h3 className="text-base font-bold text-white">Install Official Packages</h3>
            </div>
            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
              Install the runtime visual editing framework in <code className="text-white font-mono bg-black/40 px-1.5 py-0.5 rounded">dependencies</code> and the CLI tools in <code className="text-white font-mono bg-black/40 px-1.5 py-0.5 rounded">devDependencies</code>:
            </p>
            <CodeBlock
              code={`# Runtime framework:\nnpm install @deneb-ui/ui\n\n# CLI validator & packaging tools:\nnpm install -D @deneb-ui/cli`}
              language="bash"
            />
            <p className="text-xs text-[#94A3B8]">
              Next, add the authoring and validation scripts to your <code className="text-[#818CF8] font-mono">package.json</code>:
            </p>
            <CodeBlock
              filename="package.json"
              code={`"scripts": {\n  "dev": "next dev",\n  "build": "next build",\n  "lab": "deneb lab .",\n  "validate": "deneb validate .",\n  "zip": "deneb zip .",\n  "package:template": "deneb package .",\n  "update:deneb": "deneb update"\n}`}
              language="json"
            />
          </div>

          {/* STEP 2 */}
          <div className="p-6 rounded-2xl border border-[#23283B] bg-[#0A0D17] space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-[#818CF8]/20 text-[#818CF8] font-bold text-xs flex items-center justify-center border border-[#818CF8]/30">
                2
              </span>
              <h3 className="text-base font-bold text-white">Create Template Manifest (<code className="text-[#818CF8] font-mono">fivora-template.json</code>)</h3>
            </div>
            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
              Place <code className="text-white font-mono bg-black/40 px-1.5 py-0.5 rounded">fivora-template.json</code> at the root of your repository. This is the contract Fivora reads to know your framework version, declared pages, and editing rules:
            </p>
            <CodeBlock
              filename="fivora-template.json"
              code={`{\n  "framework": "nextjs-static-export",\n  "version": 2,\n  "visualEditing": {\n    "contractVersion": 1,\n    "mode": "strict"\n  },\n  "siteDataFile": "src/data/site-data.json",\n  "outputDirectory": "out",\n  "installCommand": "npm install",\n  "buildCommand": "npm run build",\n  "basePathEnvVar": "NEXT_PUBLIC_SITE_BASE_PATH",\n  "pages": [\n    { "id": "home", "label": "Home", "route": "/", "required": true },\n    { "id": "products", "label": "Products", "route": "/products" },\n    { "id": "about", "label": "About Us", "route": "/about" },\n    { "id": "contact", "label": "Contact", "route": "/contact", "required": true }\n  ]\n}`}
              language="json"
            />
          </div>

          {/* STEP 3 */}
          <div className="p-6 rounded-2xl border border-[#23283B] bg-[#0A0D17] space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-[#818CF8]/20 text-[#818CF8] font-bold text-xs flex items-center justify-center border border-[#818CF8]/30">
                3
              </span>
              <h3 className="text-base font-bold text-white">Configure Static Export & Base Path</h3>
            </div>
            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
              Fivora storefronts are hosted as static exports with dynamic base paths in merchant subdomains. Configure <code className="text-white font-mono bg-black/40 px-1.5 py-0.5 rounded">next.config.ts</code>:
            </p>
            <CodeBlock
              filename="next.config.ts"
              code={`import type { NextConfig } from "next";\n\nconst basePath = process.env.NEXT_PUBLIC_SITE_BASE_PATH || '';\n\nconst nextConfig: NextConfig = {\n  output: 'export',\n  basePath: basePath ? basePath : undefined,\n  assetPrefix: basePath ? \`\${basePath}/\` : undefined,\n  images: {\n    unoptimized: true,\n  },\n};\n\nexport default nextConfig;`}
              language="typescript"
            />
          </div>

          {/* STEP 4 */}
          <div className="p-6 rounded-2xl border border-[#23283B] bg-[#0A0D17] space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-[#818CF8]/20 text-[#818CF8] font-bold text-xs flex items-center justify-center border border-[#818CF8]/30">
                4
              </span>
              <h3 className="text-base font-bold text-white">Centralize Content in <code className="text-[#818CF8] font-mono">src/data/site-data.json</code></h3>
            </div>
            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
              Extract all hardcoded text, demo products, business contact details, and images into <code className="text-white font-mono bg-black/40 px-1.5 py-0.5 rounded">src/data/site-data.json</code>. This file represents the merchant&apos;s initial data:
            </p>
            <CodeBlock
              filename="src/data/site-data.json"
              code={`{\n  "project": {\n    "id": "demo-store",\n    "name": "Nova Storefront",\n    "businessEmail": "merchant@example.com"\n  },\n  "requirements": {\n    "requiredPages": ["home", "products", "about", "contact"]\n  },\n  "content": {\n    "common": {\n      "websiteTitle": "Nova Store",\n      "shortDescription": "Engineered for modern living.",\n      "business": {\n        "phone": "+1 (555) 482-9012",\n        "whatsapp": "15554829012",\n        "email": "hello@novastore.com",\n        "location": {\n          "address": "742 Evergreen Celestial Way",\n          "city": "San Francisco",\n          "country": "USA"\n        }\n      }\n    },\n    "home": {\n      "heroBadge": "New Arrivals",\n      "heroTitle": "Engineered for Modern Web Commerce",\n      "heroSubtitle": "Everything you need to craft high-converting storefronts.",\n      "heroCtaText": "Explore Products"\n    }\n  }\n}`}
              language="json"
            />
          </div>

          {/* STEP 5 */}
          <div className="p-6 rounded-2xl border border-[#23283B] bg-[#0A0D17] space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-[#818CF8]/20 text-[#818CF8] font-bold text-xs flex items-center justify-center border border-[#818CF8]/30">
                5
              </span>
              <h3 className="text-base font-bold text-white">Mount the Live Preview Bridge (<code className="text-[#818CF8] font-mono">SiteDataProvider</code>)</h3>
            </div>
            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
              Wrap your root layout with <code className="text-white font-mono bg-black/40 px-1.5 py-0.5 rounded">SiteDataProvider</code> from <code className="text-white font-mono bg-black/40 px-1.5 py-0.5 rounded">@deneb-ui/ui</code>. This automatically establishes the bidirectional handshake with the Fivora live editor:
            </p>
            <CodeBlock
              filename="src/app/layout.tsx"
              code={`import { SiteDataProvider } from '@deneb-ui/ui';\nimport initialSiteData from '@/data/site-data.json';\nimport '@/app/globals.css';\n\nexport default function RootLayout({ children }: { children: React.ReactNode }) {\n  return (\n    <html lang="en" suppressHydrationWarning>\n      <body suppressHydrationWarning>\n        <SiteDataProvider initialSiteData={initialSiteData}>\n          {children}\n        </SiteDataProvider>\n      </body>\n    </html>\n  );\n}`}
              language="tsx"
            />
          </div>

          {/* STEP 6 */}
          <div className="p-6 rounded-2xl border border-[#23283B] bg-[#0A0D17] space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-[#818CF8]/20 text-[#818CF8] font-bold text-xs flex items-center justify-center border border-[#818CF8]/30">
                6
              </span>
              <h3 className="text-base font-bold text-white">Wire Visual Markers & Commerce Primitives</h3>
            </div>
            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
              Connect your existing components to live data using <code className="text-white font-mono bg-black/40 px-1.5 py-0.5 rounded">useSiteData()</code> and visual editing markers:
            </p>

            {/* Before vs After Tab */}
            <div className="space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#CBD5E1]">
                Before vs. After Conversion:
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-rose-500/20 bg-rose-950/10 space-y-2">
                  <div className="text-xs font-bold text-rose-400">❌ Before: Static Hardcoded JSX</div>
                  <pre className="text-[11px] font-mono text-rose-200/80 leading-relaxed overflow-x-auto">
{`<section className="hero">
  <h1>Engineered for Living</h1>
  <p>Minimalist collection.</p>
  <a href="tel:+15554829012">Call Us</a>
</section>`}
                  </pre>
                </div>

                <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-950/10 space-y-2">
                  <div className="text-xs font-bold text-emerald-400">✔️ After: Fivora-Enabled DENEB UI</div>
                  <pre className="text-[11px] font-mono text-emerald-200/80 leading-relaxed overflow-x-auto">
{`<section className="hero">
  <h1 data-preview-field-path="home.heroTitle">
    {home.heroTitle}
  </h1>
  <p data-preview-field-path="home.heroSubtitle">
    {home.heroSubtitle}
  </p>
  <ContactActions
    phone={business.phone}
    whatsapp={business.whatsapp}
    email={business.email}
  />
</section>`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Marker Rules */}
        <section id="visual-markers" className="space-y-6 pt-6 border-t border-[#23283B]">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#818CF8]" />
              <span>Visual Marker Rules for the Live Editor</span>
            </h2>
            <p className="text-sm text-[#94A3B8]">
              Fivora&apos;s live editor highlights elements and focuses sidebar controls based on these DOM data attributes:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-[#23283B] bg-[#0A0D17] space-y-2">
              <h4 className="text-xs font-bold text-[#818CF8] font-mono uppercase">1. Route Marker</h4>
              <p className="text-xs text-[#94A3B8]">
                Place <code className="text-white font-mono bg-black/40 px-1 py-0.5 rounded">data-preview-page-key=&quot;&lt;id&gt;&quot;</code> on the root <code className="text-white font-mono bg-black/40 px-1 py-0.5 rounded">&lt;main&gt;</code> of each page:
              </p>
              <CodeBlock code={`<main data-preview-page-key="home">...</main>`} language="tsx" />
            </div>

            <div className="p-4 rounded-xl border border-[#23283B] bg-[#0A0D17] space-y-2">
              <h4 className="text-xs font-bold text-[#818CF8] font-mono uppercase">2. Leaf Text / Media</h4>
              <p className="text-xs text-[#94A3B8]">
                Place <code className="text-white font-mono bg-black/40 px-1 py-0.5 rounded">data-preview-field-path</code> on the leaf element (<code className="text-white font-mono">h1</code>, <code className="text-white font-mono">p</code>, <code className="text-white font-mono">img</code>), never on a broad <code className="text-white font-mono">div</code>:
              </p>
              <CodeBlock code={`<h2 data-preview-field-path="home.title">{home.title}</h2>`} language="tsx" />
            </div>

            <div className="p-4 rounded-xl border border-[#23283B] bg-[#0A0D17] space-y-2">
              <h4 className="text-xs font-bold text-[#818CF8] font-mono uppercase">3. Repeatable Lists</h4>
              <p className="text-xs text-[#94A3B8]">
                Wrap collections with <code className="text-white font-mono bg-black/40 px-1 py-0.5 rounded">data-preview-list-path</code>. <strong>Must stay mounted even if array is empty</strong>:
              </p>
              <CodeBlock code={`<div data-preview-list-path="home.products">\n  {products.map((p, i) => (\n    <div key={i} data-preview-item-path={\`home.products[\${i}]\`}>\n      <span data-preview-field-path={\`home.products[\${i}].name\`}>{p.name}</span>\n    </div>\n  ))}\n</div>`} language="tsx" />
            </div>

            <div className="p-4 rounded-xl border border-[#23283B] bg-[#0A0D17] space-y-2">
              <h4 className="text-xs font-bold text-[#818CF8] font-mono uppercase">4. Decorative Elements</h4>
              <p className="text-xs text-[#94A3B8]">
                Mark non-editable background icons or dividers with <code className="text-white font-mono bg-black/40 px-1 py-0.5 rounded">data-preview-static</code>. Never put editable children inside static ancestors:
              </p>
              <CodeBlock code={`<span data-preview-static="footer-divider" className="border-t" />`} language="tsx" />
            </div>
          </div>
        </section>

        {/* Standard vs Premium */}
        <section id="standard-vs-premium" className="space-y-6 pt-6 border-t border-[#23283B]">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Standard vs. Premium Tier: How to Decide
            </h2>
            <p className="text-sm text-[#94A3B8]">
              Both tiers share the <strong>exact same codebase and manifest v2 contract</strong>. You decide whether to list as Standard or Premium based on design tokenization:
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs sm:text-sm text-left border border-[#23283B] rounded-xl overflow-hidden">
              <thead className="bg-[#0E1220] text-[#CBD5E1] font-mono uppercase text-[11px] border-b border-[#23283B]">
                <tr>
                  <th className="p-3 sm:p-4">Feature</th>
                  <th className="p-3 sm:p-4">Standard Template</th>
                  <th className="p-3 sm:p-4 text-[#818CF8]">Premium Template</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#23283B] text-[#94A3B8]">
                <tr>
                  <td className="p-3 sm:p-4 font-semibold text-white">Aesthetic Goal</td>
                  <td className="p-3 sm:p-4">Fixed, opinionated composition</td>
                  <td className="p-3 sm:p-4 text-white">Dynamic, versatile design system</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-semibold text-white">Merchant Customization</td>
                  <td className="p-3 sm:p-4">Manual design panel (accent colors)</td>
                  <td className="p-3 sm:p-4 text-white">AI-Assisted Design Restyling + Controls</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-semibold text-white">Design Tokens (<code className="text-[#818CF8] font-mono">themeSchema</code>)</td>
                  <td className="p-3 sm:p-4">Optional</td>
                  <td className="p-3 sm:p-4 text-emerald-400 font-semibold">Required in fivora-template.json</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-semibold text-white">Section Targeting</td>
                  <td className="p-3 sm:p-4">Page-level</td>
                  <td className="p-3 sm:p-4 text-emerald-400 font-semibold">data-design-section on every major section</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Local Visual Lab & Preflight Validation */}
        <section id="testing-lab" className="space-y-6 pt-6 border-t border-[#23283B]">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <Terminal className="w-5 h-5 text-[#818CF8]" />
              <span>Local Visual Lab & Validation</span>
            </h2>
            <p className="text-sm text-[#94A3B8]">
              Test and certify your template locally before uploading to the Developer Portal.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl border border-[#23283B] bg-[#0A0D17] space-y-3">
              <div className="flex items-center gap-2 text-[#818CF8] font-bold text-sm">
                <Sparkles className="w-4 h-4" />
                <span>1. Launch Visual Lab</span>
              </div>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Opens a local simulation of the Fivora Merchant Editor at <code className="text-white font-mono">http://localhost:3001</code> with an interactive field inspector:
              </p>
              <CodeBlock code="npm run lab\n# Or: deneb lab ." language="bash" />
            </div>

            <div className="p-5 rounded-2xl border border-[#23283B] bg-[#0A0D17] space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                <ShieldCheck className="w-4 h-4" />
                <span>2. Run Preflight Validator</span>
              </div>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Verifies manifest integrity, tests probe data injection, audits static markers, and ensures zero broken links:
              </p>
              <CodeBlock code="npm run validate\n# Or: deneb validate ." language="bash" />
            </div>
          </div>
        </section>

        {/* Packaging & Upload */}
        <section id="packaging" className="space-y-6 pt-6 border-t border-[#23283B]">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <PackageCheck className="w-5 h-5 text-[#818CF8]" />
              <span>Packaging & Submitting</span>
            </h2>
            <p className="text-sm text-[#94A3B8]">
              Do not use manual OS zip tools. Always package using the DENEB CLI:
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-[#23283B] bg-[#0A0D17] space-y-4">
            <div className="space-y-2">
              <div className="text-sm font-bold text-white">1-Step Preflight Validation & Clean Packaging (Recommended)</div>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Runs preflight verification and packages a clean <code className="text-white font-mono bg-white/5 px-1.5 py-0.5 rounded">fivora-template.zip</code> only when all platform checks pass:
              </p>
              <CodeBlock code="npm run validate-and-zip\n# Or: deneb validate-and-zip .\n# Or: deneb validate and zip" language="bash" />
            </div>

            <div className="pt-3 border-t border-[#23283B] space-y-2">
              <div className="text-sm font-bold text-white">Quick Clean ZIP (Fast packaging without sandbox)</div>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Quickly strips <code className="text-white font-mono">node_modules</code>, <code className="text-white font-mono">.next</code>, <code className="text-white font-mono">.git</code>, and <code className="text-white font-mono">.env*</code> to generate <code className="text-white font-mono">fivora-template.zip</code>:
              </p>
              <CodeBlock code="npm run zip\n# Or: deneb zip ." language="bash" />
            </div>

            <div className="pt-3 border-t border-[#23283B] space-y-2">
              <div className="text-sm font-bold text-white">Developer Portal Submission Steps:</div>
              <ol className="list-decimal list-inside text-xs text-[#94A3B8] space-y-1.5 leading-relaxed">
                <li>Log in to the <strong className="text-white">Fivora Developer Portal</strong>.</li>
                <li>Click <strong className="text-white">Create Template</strong>.</li>
                <li>Upload your verified <code className="text-[#818CF8] font-mono">fivora-template.zip</code>.</li>
                <li>Upload a WebP thumbnail preview (16:9 ratio).</li>
                <li>Select your listing tier (<strong className="text-white">Standard</strong> or <strong className="text-white">Premium</strong>).</li>
                <li>Click <strong className="text-white">Submit for Review</strong>.</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Troubleshooting */}
        <section id="troubleshooting" className="space-y-4 pt-6 border-t border-[#23283B]">
          <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-[#818CF8]" />
            <span>Troubleshooting Common Preflight Errors</span>
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-xs sm:text-sm text-left border border-[#23283B] rounded-xl overflow-hidden">
              <thead className="bg-[#0E1220] text-[#CBD5E1] font-mono uppercase text-[11px] border-b border-[#23283B]">
                <tr>
                  <th className="p-3">Error Message</th>
                  <th className="p-3">Cause</th>
                  <th className="p-3">Solution</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#23283B] text-[#94A3B8]">
                <tr>
                  <td className="p-3 font-mono text-rose-300">Editable marker has static ancestor</td>
                  <td className="p-3">An editable field is inside an element marked <code className="text-white font-mono">data-preview-static</code>.</td>
                  <td className="p-3 text-white">Move static markers exclusively to decorative borders/icons.</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-rose-300">Marker cannot be placed on broad container</td>
                  <td className="p-3">Field marker placed on <code className="text-white font-mono">div</code>, <code className="text-white font-mono">section</code>, or <code className="text-white font-mono">footer</code>.</td>
                  <td className="p-3 text-white">Place <code className="text-white font-mono">data-preview-field-path</code> on leaf <code className="text-white font-mono">h1-h6</code>, <code className="text-white font-mono">p</code>, <code className="text-white font-mono">span</code>, or <code className="text-white font-mono">img</code>.</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-rose-300">Cannot read properties of undefined (reading &apos;map&apos;)</td>
                  <td className="p-3">Component crashes when list is empty during probe testing.</td>
                  <td className="p-3 text-white">Add defensive fallbacks: <code className="text-[#818CF8] font-mono">const items = content?.products || [];</code></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Navigation Footer */}
        <div className="pt-8 border-t border-[#23283B] flex items-center justify-between">
          <Link
            href="/docs/installation"
            className="text-xs font-semibold text-[#94A3B8] hover:text-white transition-colors"
          >
            ← Installation
          </Link>
          <Link
            href="/docs/theming"
            className="flex items-center gap-2 text-xs font-semibold text-[#818CF8] hover:text-white transition-colors"
          >
            <span>Next: Theming & Tokens</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Right Sidebar Table of Contents */}
      <TableOfContents items={tocItems} />
    </div>
  );
}
