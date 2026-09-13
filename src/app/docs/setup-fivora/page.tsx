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

  const AI_MASTER_PROMPT = "# SYSTEM PROMPT FOR AI ASSISTANTS (ChatGPT, Claude, Cursor, Antigravity)\n# Task: Convert an existing Next.js storefront or build a new template for the Fivora DENEB UI v2.0 Platform\n# Framework: Next.js 14/15 App Router, React 18/19, Tailwind CSS, TypeScript\n# Core Packages: @deneb-ui/ui, @deneb-ui/core, @deneb-ui/cli\n# Documentation: https://deneb.fivora.site\n\nYou are an expert Frontend Architect specializing in the Fivora DENEB UI ecosystem.\nWhen converting an existing storefront or building a new template, you MUST strictly adhere to the following architecture, component rules, visual editing annotations, and static export constraints:\n\n---\n\n## 1. The Core Architecture\n\nA Fivora template is a Next.js App Router storefront that renders inside an iframe inside the Fivora Merchant Studio.\n- The parent window communicates with the template via bidirectional `postMessage` protocol:\n  - Child notifies parent when ready: `FIVORA_PREVIEW_READY`\n  - Parent streams live field updates: `FIVORA_PREVIEW_SITE_DATA`\n- **NEVER** write manual postMessage listeners. Always use `<SiteDataProvider>` from `@deneb-ui/ui`.\n- All dynamic data (products, business info, hero copy, theme tokens) MUST be sourced from `src/data/site-data.json`.\n- The template must support static export: `output: \"export\"` in `next.config.ts`.\n\n---\n\n## 2. Mandatory Project Files\n\n### 2.1 `package.json` Dependencies\n```json\n{\n  \"name\": \"fivora-storefront-template\",\n  \"version\": \"2.0.0\",\n  \"private\": true,\n  \"scripts\": {\n    \"dev\": \"next dev\",\n    \"build\": \"next build\",\n    \"start\": \"next start\",\n    \"lab\": \"deneb lab .\",\n    \"validate\": \"deneb validate .\",\n    \"validate-and-zip\": \"deneb validate-and-zip .\",\n    \"zip\": \"deneb zip .\"\n  },\n  \"dependencies\": {\n    \"@deneb-ui/ui\": \"latest\",\n    \"@deneb-ui/core\": \"latest\",\n    \"lucide-react\": \"^1.0.0\",\n    \"next\": \"^14.2.0\",\n    \"react\": \"^18.3.0\",\n    \"react-dom\": \"^18.3.0\"\n  },\n  \"devDependencies\": {\n    \"@deneb-ui/cli\": \"latest\",\n    \"tailwindcss\": \"^3.4.0\",\n    \"typescript\": \"^5.0.0\"\n  }\n}\n```\n\n### 2.2 `next.config.ts` (Required for Fivora Static Ingestion)\n```ts\nimport type { NextConfig } from \"next\";\n\nconst nextConfig: NextConfig = {\n  output: \"export\",\n  trailingSlash: true,\n  images: {\n    unoptimized: true,\n  },\n  basePath: process.env.NEXT_PUBLIC_BASE_PATH || \"\",\n  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || \"\",\n};\n\nexport default nextConfig;\n```\n\n### 2.3 `fivora-template.json` (Template Manifest v2)\n```json\n{\n  \"manifestVersion\": 2,\n  \"id\": \"template-artisan-boutique\",\n  \"name\": \"Artisan Boutique Storefront\",\n  \"version\": \"2.0.0\",\n  \"category\": \"retail\",\n  \"listingTier\": \"premium\",\n  \"author\": \"Your Studio Name\",\n  \"visualEditing\": {\n    \"contractVersion\": 1,\n    \"mode\": \"strict\"\n  },\n  \"themeSchema\": {\n    \"tokens\": [\n      { \"key\": \"primaryColor\", \"type\": \"color\", \"label\": \"Primary Accent\", \"default\": \"#6366F1\" },\n      { \"key\": \"backgroundColor\", \"type\": \"color\", \"label\": \"Background\", \"default\": \"#090D1A\" },\n      { \"key\": \"fontFamily\", \"type\": \"font\", \"label\": \"Heading Font\", \"default\": \"Inter\" }\n    ],\n    \"defaults\": {\n      \"primaryColor\": \"#6366F1\",\n      \"backgroundColor\": \"#090D1A\"\n    }\n  },\n  \"pages\": [\n    { \"key\": \"home\", \"title\": \"Storefront\", \"route\": \"/\" },\n    { \"key\": \"catalog\", \"title\": \"Products\", \"route\": \"/#products\" }\n  ]\n}\n```\n\n### 2.4 `src/data/site-data.json` (Single Source of Truth)\n```json\n{\n  \"project\": { \"id\": \"demo-store\", \"slug\": \"demo-store\", \"title\": \"Artisan Footwear\" },\n  \"shop\": {\n    \"name\": \"Artisan Footwear\",\n    \"whatsapp\": \"+15550192834\",\n    \"phone\": \"+15550192834\",\n    \"email\": \"concierge@artisanfootwear.com\",\n    \"address\": \"452 Broadway Avenue, New York, NY\"\n  },\n  \"content\": {\n    \"hero\": {\n      \"badge\": \"Spring 2026\",\n      \"title\": \"Bespoke Footwear Engineered for Daily Distinction\",\n      \"subtitle\": \"Handcrafted micro-batch leather shoes with active cushioning.\",\n      \"primaryCta\": \"Shop Collection\",\n      \"image\": \"https://images.unsplash.com/photo-1542291026-7eec264c27ff\"\n    },\n    \"products\": [\n      {\n        \"id\": \"vanta-runner\",\n        \"title\": \"Vanta Velocity Sneaker\",\n        \"price\": 149.99,\n        \"compareAtPrice\": 189.99,\n        \"currency\": \"$\",\n        \"category\": \"Running\",\n        \"image\": \"https://images.unsplash.com/photo-1542291026-7eec264c27ff\",\n        \"rating\": 4.9,\n        \"reviewsCount\": 38,\n        \"inStock\": true,\n        \"description\": \"Featherweight engineered mesh with adaptive dual-density foam.\"\n      }\n    ],\n    \"businessHours\": [\n      { \"day\": \"Monday - Friday\", \"hours\": \"9:00 AM - 7:00 PM\", \"isOpen\": true },\n      { \"day\": \"Saturday\", \"hours\": \"10:00 AM - 5:00 PM\", \"isOpen\": true },\n      { \"day\": \"Sunday\", \"hours\": \"Closed\", \"isOpen\": false }\n    ]\n  },\n  \"theme\": {\n    \"colors\": {\n      \"primary\": \"#6366F1\",\n      \"accent\": \"#818CF8\",\n      \"bg\": \"#090D1A\",\n      \"card\": \"#121625\"\n    }\n  }\n}\n```\n\n---\n\n## 3. Strict Rules for Visual Editing Attributes (`data-preview-*`)\n\nThe automated Fivora ingestion validator enforces strict static rules:\n\n1. **Leaf Elements Only**:\n   - `data-preview-field-path` and `data-preview-image-path` MUST only be attached to leaf visual tags: `<h1>-<h6>`, `<p>`, `<span>`, `<a>`, `<button>`, `<img>`.\n   - **DO NOT** place field markers on `<div>`, `<section>`, `<article>`, `<main>`, or `<ul>`.\n2. **Never Beneath Static Ancestors**:\n   - Elements marked with `data-preview-static` declare their entire subtree non-editable.\n   - **NEVER** put `data-preview-field-path` inside a container marked with `data-preview-static`.\n3. **Repeated Lists**:\n   - The container must have: `data-preview-list-path=\"content.products\"`\n   - Each item in the loop must have: `data-preview-item-path={`content.products.${index}`}`\n   - Leaf values inside the card must have: `data-preview-field-path={`content.products.${index}.title`}`\n4. **Defensive Defaults**:\n   - Always use nullish coalescing (`??`) rather than `||` for text values.\n   - Always default array lists: `const products = content?.products ?? [];` so probe testing never throws `Cannot read properties of undefined (reading 'map')`.\n\n---\n\n## 4. Master Component Catalog & Usage Patterns\n\nAll components are imported directly from `@deneb-ui/ui`:\n\n```tsx\nimport {\n  SiteDataProvider,\n  ThemeStyles,\n  ResponsiveBaseStyles,\n  useProducts,\n  useServices,\n  useSiteData,\n  useCart,\n  CartProvider,\n  Navbar,\n  Footer,\n  Hero,\n  ProductCard,\n  ProductGrid,\n  ProductDetail,\n  ProductQuickView,\n  CartDrawer,\n  FilterSidebar,\n  CustomerReviews,\n  TrustBadges,\n  StickyMobileBar,\n  BusinessHours,\n  ContactActions,\n  WhatsAppButton,\n  PhoneButton,\n  EmailButton,\n  FloatingContactWidget,\n  LocationCard,\n  MapEmbed,\n  Address,\n  FAQAccordion,\n  CategoryPills,\n  AnnouncementBar,\n  PricingCard,\n  TestimonialCard,\n  Button,\n  Card,\n  Badge,\n  Dialog\n} from \"@deneb-ui/ui\";\n```\n\n### 4.1 Root Layout Setup (`src/app/layout.tsx`)\n```tsx\nimport \"./globals.css\";\nimport { SiteDataProvider, ThemeStyles, ResponsiveBaseStyles, CartProvider } from \"@deneb-ui/ui\";\nimport initialSiteData from \"@/data/site-data.json\";\n\nexport default function RootLayout({ children }: { children: React.ReactNode }) {\n  return (\n    <html lang=\"en\" className=\"scroll-smooth\">\n      <head>\n        <ThemeStyles theme={initialSiteData.theme} />\n        <ResponsiveBaseStyles />\n      </head>\n      <body className=\"bg-[#090D1A] text-slate-100 antialiased min-h-screen\">\n        <SiteDataProvider initialSiteData={initialSiteData}>\n          <CartProvider>\n            {children}\n          </CartProvider>\n        </SiteDataProvider>\n      </body>\n    </html>\n  );\n}\n```\n\n### 4.2 Main Storefront Page (`src/app/page.tsx`)\n```tsx\n\"use client\";\n\nimport {\n  useSiteData,\n  useProducts,\n  Navbar,\n  Footer,\n  Hero,\n  ProductGrid,\n  ProductCard,\n  CartDrawer,\n  FilterSidebar,\n  CustomerReviews,\n  TrustBadges,\n  StickyMobileBar,\n  BusinessHours,\n  ContactActions,\n  FAQAccordion,\n  AnnouncementBar\n} from \"@deneb-ui/ui\";\nimport { useState } from \"react\";\n\nexport default function HomePage() {\n  const siteData = useSiteData();\n  const products = useProducts();\n  const content = siteData?.content ?? {};\n  const [activeCategory, setActiveCategory] = useState(\"All\");\n\n  const filteredProducts = activeCategory === \"All\"\n    ? products\n    : products.filter(p => p.category === activeCategory);\n\n  return (\n    <div className=\"flex flex-col min-h-screen\">\n      {/* Top Notification */}\n      <AnnouncementBar\n        message=\"Free express delivery on all orders over $100\"\n        linkText=\"Order Now\"\n        href=\"#products\"\n      />\n\n      {/* Navigation */}\n      <Navbar\n        brandName={siteData?.shop?.name ?? \"Artisan Store\"}\n        links={[\n          { label: \"Home\", href: \"/\" },\n          { label: \"Products\", href: \"#products\" },\n          { label: \"Reviews\", href: \"#reviews\" },\n          { label: \"Contact\", href: \"#contact\" }\n        ]}\n      />\n\n      {/* Hero Section */}\n      <Hero\n        layout=\"split\"\n        title={content?.hero?.title ?? \"Bespoke Footwear Engineered for Distinction\"}\n        description={content?.hero?.subtitle ?? \"Handcrafted micro-batch leather shoes.\"}\n        image={content?.hero?.image ?? \"https://images.unsplash.com/photo-1542291026-7eec264c27ff\"}\n      />\n\n      {/* Trust Badges */}\n      <div className=\"max-w-7xl mx-auto px-4 py-8 w-full\">\n        <TrustBadges />\n      </div>\n\n      {/* Product Catalog with Filter Sidebar */}\n      <section id=\"products\" className=\"max-w-7xl mx-auto px-4 py-16 w-full space-y-8\">\n        <div className=\"text-center space-y-3\">\n          <h2 className=\"text-3xl font-bold text-white tracking-tight\">Curated Collection</h2>\n          <p className=\"text-sm text-slate-400\">Discover handpicked styles designed to last.</p>\n        </div>\n\n        <div className=\"grid grid-cols-1 lg:grid-cols-4 gap-8 items-start\">\n          <FilterSidebar\n            categories={[\"All\", \"Running\", \"Lifestyle\", \"Formal\"]}\n            onFilterChange={(f) => setActiveCategory(f.selectedCategories[0] || \"All\")}\n          />\n\n          <div className=\"lg:col-span-3\">\n            <ProductGrid cols={3} gap=\"lg\">\n              {filteredProducts.map((product, idx) => (\n                <ProductCard\n                  key={product.id || idx}\n                  title={product.title}\n                  price={product.price}\n                  compareAtPrice={product.compareAtPrice}\n                  currency={product.currency ?? \"$\"}\n                  image={product.image}\n                  whatsappNumber={siteData?.shop?.whatsapp}\n                />\n              ))}\n            </ProductGrid>\n          </div>\n        </div>\n      </section>\n\n      {/* Customer Reviews & Social Proof */}\n      <section id=\"reviews\" className=\"bg-[#0C0F1A] py-16 border-y border-slate-800/60\">\n        <div className=\"max-w-7xl mx-auto px-4\">\n          <CustomerReviews />\n        </div>\n      </section>\n\n      {/* Store Hours & Quick Support */}\n      <section id=\"contact\" className=\"max-w-7xl mx-auto px-4 py-16 w-full grid grid-cols-1 md:grid-cols-2 gap-8\">\n        <BusinessHours schedule={content?.businessHours} />\n        <div className=\"p-8 rounded-2xl border border-slate-800 bg-[#0E1220] flex flex-col justify-center space-y-4\">\n          <h3 className=\"text-xl font-bold text-white\">Instant Concierge Support</h3>\n          <p className=\"text-sm text-slate-400\">Order directly with our personal shoppers via WhatsApp or phone.</p>\n          <ContactActions\n            whatsapp={siteData?.shop?.whatsapp}\n            phone={siteData?.shop?.phone}\n            email={siteData?.shop?.email}\n          />\n        </div>\n      </section>\n\n      {/* Shopping Cart Drawer */}\n      <CartDrawer\n        whatsappNumber={siteData?.shop?.whatsapp ?? \"15550192834\"}\n        storeName={siteData?.shop?.name ?? \"Artisan Store\"}\n      />\n\n      {/* Sticky Mobile Conversion Bar */}\n      <StickyMobileBar\n        whatsappNumber={siteData?.shop?.whatsapp}\n        phone={siteData?.shop?.phone}\n      />\n\n      {/* Footer */}\n      <Footer\n        brandName={siteData?.shop?.name ?? \"Artisan Store\"}\n        copyright={`\u00a9 ${new Date().getFullYear()} ${siteData?.shop?.name ?? \"Artisan Store\"}. All rights reserved.`}\n      />\n    </div>\n  );\n}\n```\n\n### 4.3 Dynamic Route for Static Export (`src/app/products/[id]/page.tsx`)\n```tsx\nimport initialSiteData from \"@/data/site-data.json\";\nimport { ProductDetail } from \"@deneb-ui/ui\";\n\n// REQUIRED FOR STATIC EXPORT:\nexport function generateStaticParams() {\n  const products = initialSiteData.content?.products || [];\n  return products.map((p) => ({ id: p.id }));\n}\n\nexport default async function ProductPage({\n  params,\n}: {\n  params: Promise<{ id: string }>;\n}) {\n  const { id } = await params;\n  const products = initialSiteData.content?.products || [];\n  const product = products.find((p) => p.id === id) || products[0];\n\n  return (\n    <main className=\"max-w-6xl mx-auto px-4 py-12\">\n      <ProductDetail product={product} />\n    </main>\n  );\n}\n```\n\n---\n\n## 5. Certification & Packaging Checklist\n\nBefore submitting your template:\n1. Run local visual editor simulation:\n   ```bash\n   npm run lab\n   ```\n2. Run strict preflight validation:\n   ```bash\n   npm run validate\n   ```\n3. Generate clean submission archive:\n   ```bash\n   npm run validate-and-zip\n   ```\n4. Upload `fivora-template.zip` to the **Fivora Developer Portal**.\n";

  const handleCopyPage = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(AI_MASTER_PROMPT);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = AI_MASTER_PROMPT;
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
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Failed to copy AI prompt:', err);
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
                  <span className="text-[#4ADE80] font-medium">Copied AI Guide!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#818CF8] group-hover:text-white transition-colors" />
                  <span>Copy AI Prompt & Guide</span>
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

        {/* Quick AI Prompt Copy Hero Box */}
        <div data-no-copy className="p-4 sm:p-5 rounded-2xl border border-[#6366F1]/30 bg-gradient-to-r from-[#6366F1]/10 via-[#0A0D17] to-[#818CF8]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xl">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-sm font-bold text-white">
              <Sparkles className="w-4 h-4 text-[#818CF8]" />
              <span>Convert Existing Template with AI in Seconds</span>
            </div>
            <p className="text-xs text-[#94A3B8] leading-relaxed max-w-xl">
              Copy the complete DENEB UI v2.0 specification prompt and paste it into <strong className="text-white">ChatGPT, Claude, Cursor, or Antigravity</strong> to automatically adapt your storefront layout, products, cart, and visual editing markers.
            </p>
          </div>
          <button
            onClick={handleCopyPage}
            className="shrink-0 px-4 py-2 rounded-xl bg-gradient-to-r from-[#6366F1] to-[#818CF8] hover:from-[#4F46E5] hover:to-[#6366F1] text-white text-xs font-bold flex items-center gap-2 shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] transition-all cursor-pointer"
          >
            {copied ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Prompt Copied!' : 'Copy AI Prompt'}</span>
          </button>
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
