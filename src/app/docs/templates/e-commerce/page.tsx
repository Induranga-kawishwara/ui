import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import {
  Layers,
  ArrowRight,
  AlertTriangle,
  Search,
  ShieldCheck,
  Zap,
  Terminal,
} from 'lucide-react';
import { CodeBlock } from '@/components/docs/CodeBlock';
import { TableOfContents, TocItem } from '@/components/layout/TableOfContents';
import { DenebStarIcon } from '@/components/brand/DenebLogo';
import { SITE_CONFIG } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'E-Commerce & Static Export Architecture — DENEB UI',
  description:
    'Architecture guide for live product catalogs and static export routing in Next.js & Fivora. Learn PlatformProductDetail, platformProductDetailHref, backend search, and empty-state preservation.',
  keywords: [
    'Next.js static export ecommerce',
    'PlatformProductDetail',
    'platformProductDetailHref',
    'deneb product grid search',
    'Fivora catalog architecture',
    'static storefront routing',
    'visual editing empty state',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/docs/templates/e-commerce`,
  },
  openGraph: {
    title: 'E-Commerce & Static Export Architecture — DENEB UI',
    description:
      'Master Next.js static export routing with PlatformProductDetail, live backend search, and zero-downtime merchant catalogs.',
    url: `${SITE_CONFIG.url}/docs/templates/e-commerce`,
    type: 'article',
    images: [SITE_CONFIG.ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E-Commerce & Static Export Architecture — DENEB UI',
    description:
      'Master Next.js static export routing with PlatformProductDetail, live backend search, and zero-downtime merchant catalogs.',
    images: [SITE_CONFIG.ogImage],
  },
};

export default function EcommerceArchitecturePage() {
  const tocItems: TocItem[] = [
    { id: 'overview', title: 'Static Export Paradox' },
    { id: 'routing-contract', title: 'Live Product Detail Contract' },
    { id: 'platform-detail', title: 'PlatformProductDetail Controller' },
    { id: 'product-grid-search', title: 'Live Search in ProductGrid' },
    { id: 'product-grid-pagination', title: 'Smart Catalog Pagination' },
    { id: 'empty-state-contract', title: 'Empty-State Preservation' },
    { id: 'doctor-remediation', title: 'Diagnostics & Auto-Fix' },
  ];

  return (
    <div className="flex w-full min-h-full">
      <div className="flex-1 min-w-0 px-4 sm:px-6 lg:px-8 xl:px-12 py-8 space-y-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-[#94A3B8]">
          <Link href="/docs/introduction" className="hover:text-slate-900 dark:hover:text-white transition-colors">
            Docs
          </Link>
          <span>/</span>
          <Link href="/docs/templates" className="hover:text-slate-900 dark:hover:text-white transition-colors">
            Templates
          </Link>
          <span>/</span>
          <span className="text-indigo-600 dark:text-[#818CF8] font-semibold">E-Commerce Architecture</span>
        </div>

        {/* Hero Header */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white font-sans">
              E-Commerce & Static Export Architecture
            </h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-600 border border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20 flex items-center gap-1 shadow-xs">
              <DenebStarIcon className="w-2.5 h-2.5" />
              Fivora v2 Contract
            </span>
          </div>
          <p className="text-base sm:text-lg text-slate-600 dark:text-[#94A3B8] leading-relaxed">
            How DENEB UI enables lightning-fast Next.js static exports (<code className="text-indigo-600 dark:text-[#A5B4FC] font-mono">output: &apos;export&apos;</code>) with live dynamic product catalogs, debounced backend searches, and 100% Fivora Visual Editing compliance.
          </p>
        </div>

        {/* Section 1: The Static Export Paradox */}
        <section id="overview" className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-500" />
            <span>The Static Export Paradox</span>
          </h2>
          <p className="text-sm text-slate-600 dark:text-[#94A3B8] leading-relaxed">
            Standard Next.js storefronts often rely on dynamic route segments like <code className="text-slate-900 dark:text-white font-mono bg-slate-100 dark:bg-white/10 px-1 py-0.5 rounded">/products/[id]</code> with <code className="text-slate-900 dark:text-white font-mono bg-slate-100 dark:bg-white/10 px-1 py-0.5 rounded">generateStaticParams()</code>.
          </p>
          <div className="p-4 rounded-2xl border border-amber-300 dark:border-amber-500/30 bg-amber-50/70 dark:bg-amber-500/5 space-y-2 text-xs text-slate-700 dark:text-amber-200">
            <div className="font-bold text-amber-900 dark:text-amber-300 flex items-center gap-1.5 text-sm">
              <span>Why Build-Time URL Routes Fail in Production:</span>
            </div>
            <p className="leading-relaxed">
              When a storefront is exported as static HTML/JS for serverless CDN deployment, only the products known at <strong>build time</strong> exist as HTML files. If a merchant creates a new product in Fivora Studio tomorrow, visiting <code className="font-mono bg-white/60 dark:bg-black/40 px-1 py-0.5 rounded">/products/new-product-id</code> returns a fatal <strong>404 Not Found</strong> error unless the entire storefront is rebuilt and re-deployed!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl border border-rose-300 dark:border-rose-500/30 bg-rose-50/50 dark:bg-rose-500/5 space-y-2">
              <div className="font-semibold text-rose-700 dark:text-rose-400 text-xs flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                <span>Legacy Anti-Pattern (Fragile)</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-[#94A3B8]">
                Links: <code className="text-rose-700 dark:text-rose-300 font-mono">{'href={`/products/${product.id}`}'}</code>
              </p>
              <p className="text-xs text-slate-600 dark:text-[#94A3B8]">
                Route: <code className="text-rose-700 dark:text-rose-300 font-mono">src/app/products/[id]/page.tsx</code>
              </p>
              <p className="text-xs text-rose-800 dark:text-rose-300">
                ✖ Newly created merchant products yield 404s. Fails Fivora marketplace certification.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-emerald-300 dark:border-emerald-500/30 bg-emerald-50/50 dark:bg-emerald-500/5 space-y-2">
              <div className="font-semibold text-emerald-700 dark:text-emerald-400 text-xs flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>DENEB Unified Architecture (Guaranteed)</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-[#94A3B8]">
                Links: <code className="text-emerald-700 dark:text-emerald-300 font-mono">platformProductDetailHref(product.id)</code>
              </p>
              <p className="text-xs text-slate-600 dark:text-[#94A3B8]">
                Route: <code className="text-emerald-700 dark:text-emerald-300 font-mono">src/app/products/detail/page.tsx</code>
              </p>
              <p className="text-xs text-emerald-800 dark:text-emerald-300">
                ✔ 100% resilient. Live client hydration via SiteDataProvider + catalog API retries.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Live Product Detail Contract */}
        <section id="routing-contract" className="space-y-4 pt-4 border-t border-slate-200 dark:border-[#23283B]">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
            <Layers className="w-5 h-5 text-indigo-600 dark:text-[#818CF8]" />
            <span>The Unified Routing Contract</span>
          </h2>
          <p className="text-sm text-slate-600 dark:text-[#94A3B8] leading-relaxed">
            To satisfy the contract, every DENEB storefront enforces three architectural pillars:
          </p>

          <div className="space-y-3">
            <div className="p-4 rounded-xl border border-slate-200 bg-white dark:border-[#23283B] dark:bg-[#0A0D17] shadow-xs space-y-2">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-slate-900 dark:text-white">
                <span className="px-2 py-0.5 rounded bg-indigo-50 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-300">1</span>
                <span>platformProductDetailHref(id, route?, param?)</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-[#94A3B8]">
                Builds the only static-export-safe URL: <code className="text-indigo-600 dark:text-[#A5B4FC] font-mono">/products/detail/?id=PROD_ID</code> (with automatic base-path resolution).
              </p>
              <CodeBlock
                code={`import { platformProductDetailHref } from '@deneb-ui/ui';\n\n// In your ProductCard or Grid:\n<a href={platformProductDetailHref(product.id)} className="product-link">\n  <span>{product.name}</span>\n</a>`}
                language="tsx"
                filename="ProductCard.tsx"
              />
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-white dark:border-[#23283B] dark:bg-[#0A0D17] shadow-xs space-y-2">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-slate-900 dark:text-white">
                <span className="px-2 py-0.5 rounded bg-indigo-50 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-300">2</span>
                <span>Stable Client Route (src/app/products/detail/page.tsx)</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-[#94A3B8]">
                A single client route powered by <code className="text-indigo-600 dark:text-[#A5B4FC] font-mono">PlatformProductDetail</code> handles all products. It extracts the ID from <code className="font-mono">?id=</code>, resolves data, and manages states.
              </p>
              <CodeBlock
                code={`'use client';\n\nimport React from 'react';\nimport { PlatformProductDetail } from '@deneb-ui/ui';\n\nexport default function ProductDetailPage() {\n  return <PlatformProductDetail backHref="/products/" />;\n}`}
                language="tsx"
                filename="src/app/products/detail/page.tsx"
              />
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-white dark:border-[#23283B] dark:bg-[#0A0D17] shadow-xs space-y-2">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-slate-900 dark:text-white">
                <span className="px-2 py-0.5 rounded bg-indigo-50 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-300">3</span>
                <span>Manifest Page Registration (fivora-template.json)</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-[#94A3B8]">
                The route must be registered in the manifest <code className="font-mono">pages[]</code> array so Fivora Studio recognizes it as a navigable route:
              </p>
              <CodeBlock
                code={`{\n  "pages": [\n    { "id": "home", "label": "Home", "route": "/" },\n    { "id": "products", "label": "Products", "route": "/products" },\n    { "id": "product-detail", "label": "Product Detail", "route": "/products/detail" }\n  ]\n}`}
                language="json"
                filename="fivora-template.json"
              />
            </div>
          </div>
        </section>

        {/* Section 3: PlatformProductDetail Controller */}
        <section id="platform-detail" className="space-y-4 pt-4 border-t border-slate-200 dark:border-[#23283B]">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
            <Zap className="w-5 h-5 text-indigo-600 dark:text-[#818CF8]" />
            <span>PlatformProductDetail Controller</span>
          </h2>
          <p className="text-sm text-slate-600 dark:text-[#94A3B8] leading-relaxed">
            <code className="text-slate-900 dark:text-white font-mono bg-slate-100 dark:bg-white/10 px-1 py-0.5 rounded">PlatformProductDetail</code> performs dual-source resolution with built-in resilient retries:
          </p>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 dark:border-[#23283B] dark:bg-[#0E1220] space-y-3 text-xs text-slate-600 dark:text-[#94A3B8]">
            <div className="font-semibold text-slate-900 dark:text-white">Hydration Flow:</div>
            <ol className="list-decimal list-inside space-y-1.5 leading-relaxed">
              <li><strong>Local Match:</strong> Inspects cached <code className="font-mono">useProducts()</code> from <code className="font-mono">site-data.json</code> for instant zero-latency render.</li>
              <li><strong>Live Network Retry:</strong> If not found locally (e.g. newly added product), queries <code className="font-mono">api.catalogUrl</code> with exponential backoff (0ms, 750ms, 2000ms).</li>
              <li><strong>Fallback States:</strong> Renders custom or built-in <code className="font-mono">loadingFallback</code>, <code className="font-mono">notFoundFallback</code>, or <code className="font-mono">errorFallback</code> with one-click &ldquo;Try again&rdquo; buttons.</li>
              <li><strong>Custom Design Slot:</strong> Use <code className="font-mono">{'renderProduct={(product, context) => ...}'}</code> to plug in your custom storefront template design while DENEB manages state resolution.</li>
            </ol>
          </div>
        </section>

        {/* Section 4: Live Search in ProductGrid */}
        <section id="product-grid-search" className="space-y-4 pt-4 border-t border-slate-200 dark:border-[#23283B]">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
            <Search className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <span>Live Search in EditableProductGrid</span>
          </h2>
          <p className="text-sm text-slate-600 dark:text-[#94A3B8] leading-relaxed">
            <code className="text-slate-900 dark:text-white font-mono bg-slate-100 dark:bg-white/10 px-1 py-0.5 rounded">EditableProductGrid</code> includes a built-in search bar that seamlessly coordinates local filtering, category tabs, and remote backend queries.
          </p>

          <CodeBlock
            code={`import { EditableProductGrid } from '@deneb-ui/ui';\n\nexport default function FeaturedCollection() {\n  return (\n    <EditableProductGrid\n      title="Summer Drop"\n      subtitle="Catalog"\n      showSearch={true}\n      searchPlaceholder="Search products by title, tag, or brand..."\n      enableBackendSearch={true}\n      columns={{ mobile: 1, tablet: 2, desktop: 4 }}\n    />\n  );\n}`}
            language="tsx"
            filename="src/components/FeaturedCollection.tsx"
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs">
            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-[#23283B] bg-white dark:bg-[#0A0D17] space-y-1">
              <span className="font-bold text-slate-900 dark:text-white">Debounced Input</span>
              <p className="text-slate-500 dark:text-[#94A3B8]">Waits 300ms before sending queries to eliminate server spam.</p>
            </div>
            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-[#23283B] bg-white dark:bg-[#0A0D17] space-y-1">
              <span className="font-bold text-slate-900 dark:text-white">Dual Filtering</span>
              <p className="text-slate-500 dark:text-[#94A3B8]">Search query and active category pill filter simultaneously.</p>
            </div>
            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-[#23283B] bg-white dark:bg-[#0A0D17] space-y-1">
              <span className="font-bold text-slate-900 dark:text-white">Live Status Counter</span>
              <p className="text-slate-500 dark:text-[#94A3B8]">Shows active pulsing indicator and &ldquo;Showing X of Y products&rdquo; pill.</p>
            </div>
          </div>
        </section>

        {/* Section 5: Smart Catalog Pagination & Visual Editing Sync */}
        <section id="product-grid-pagination" className="space-y-4 pt-4 border-t border-slate-200 dark:border-[#23283B]">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
            <Layers className="w-5 h-5 text-indigo-600 dark:text-[#818CF8]" />
            <span>Smart Catalog Pagination & Visual Editing Sync</span>
          </h2>
          <p className="text-sm text-slate-600 dark:text-[#94A3B8] leading-relaxed">
            <code className="text-slate-900 dark:text-white font-mono bg-slate-100 dark:bg-white/10 px-1 py-0.5 rounded">EditableProductGrid</code> features enterprise-grade pagination with full Fivora visual editing synchronization and dual client/server query handling.
          </p>

          <CodeBlock
            code={`import { EditableProductGrid } from '@deneb-ui/ui';\n\nexport default function StorefrontCatalog() {\n  return (\n    <EditableProductGrid\n      title="All Footwear"\n      subtitle="Catalog"\n      enablePagination={true}\n      pageSize={8}\n      pageSizeOptions={[8, 16, 24, 48]}\n      showPageSizeSelector={true}\n      paginationVariant="numbers" // 'numbers' | 'simple' | 'load-more'\n      scrollToTopOnPageChange={true}\n      columns={{ mobile: 1, tablet: 2, desktop: 4 }}\n    />\n  );\n}`}
            language="tsx"
            filename="src/components/StorefrontCatalog.tsx"
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs">
            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-[#23283B] bg-white dark:bg-[#0A0D17] space-y-1">
              <span className="font-bold text-slate-900 dark:text-white">True Index Mapping</span>
              <p className="text-slate-500 dark:text-[#94A3B8]">Items retain original collection indexes (e.g. <code className="font-mono">{'products[8]'}</code> on page 2) so Fivora editor clicks focus the exact data entry.</p>
            </div>
            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-[#23283B] bg-white dark:bg-[#0A0D17] space-y-1">
              <span className="font-bold text-slate-900 dark:text-white">3 Display Variants</span>
              <p className="text-slate-500 dark:text-[#94A3B8]">Supports standard numbered buttons with smart ellipsis (<code className="font-mono">&hellip;</code>), minimal prev/next, and progressive &ldquo;Load More&rdquo;.</p>
            </div>
            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-[#23283B] bg-white dark:bg-[#0A0D17] space-y-1">
              <span className="font-bold text-slate-900 dark:text-white">Auto-Reset on Filter</span>
              <p className="text-slate-500 dark:text-[#94A3B8]">Searching or switching category tabs automatically resets page to 1, preventing out-of-bounds blank views.</p>
            </div>
          </div>
        </section>

        {/* Section 6: Empty-State Preservation */}
        <section id="empty-state-contract" className="space-y-4 pt-4 border-t border-slate-200 dark:border-[#23283B]">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-indigo-600 dark:text-[#818CF8]" />
            <span>Empty-State Preservation Contract</span>
          </h2>
          <p className="text-sm text-slate-600 dark:text-[#94A3B8] leading-relaxed">
            A critical rule in Fivora Studio&apos;s visual editing contract is: <strong className="text-slate-900 dark:text-white">never unmount collection list containers in empty states</strong>.
          </p>

          <div className="p-4 rounded-xl border border-indigo-200 dark:border-indigo-500/20 bg-indigo-50/50 dark:bg-indigo-500/5 space-y-2 text-xs text-slate-600 dark:text-[#94A3B8]">
            <p className="leading-relaxed">
              When a merchant filters their catalog or deletes all items to start fresh, Fivora Studio must still be able to locate the DOM node with <code className="text-indigo-700 dark:text-[#A5B4FC] font-mono">data-preview-list-path=&quot;products&quot;</code> to allow adding the first item via the visual editor!
            </p>
            <p className="leading-relaxed">
              In <code className="font-mono">EditableProductGrid</code>, the container element always retains <code className="font-mono">data-preview-list-path</code>, wrapping the &ldquo;No products found&rdquo; empty message inside itself.
            </p>
          </div>
        </section>

        {/* Section 7: Diagnostics & Auto-Fix */}
        <section id="doctor-remediation" className="space-y-4 pt-4 border-t border-slate-200 dark:border-[#23283B]">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
            <Terminal className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <span>Diagnostics & One-Click Remediation</span>
          </h2>
          <p className="text-sm text-slate-600 dark:text-[#94A3B8] leading-relaxed">
            Deneb Doctor Suite 7 automatically audits your codebase against this architecture and repairs any non-compliant code:
          </p>

          <CodeBlock
            code={`# Run diagnostic check across all 7 suites:\nnpx @deneb-ui/cli doctor\n\n# Automatically repair legacy links, scaffold route, and update manifest:\nnpx @deneb-ui/cli doctor --fix`}
            language="bash"
            filename="terminal"
          />

          <div className="overflow-x-auto pt-2">
            <table className="w-full text-xs text-left border border-slate-200 dark:border-[#23283B] rounded-xl overflow-hidden bg-white dark:bg-[#0A0D17] shadow-xs">
              <thead className="bg-slate-50 dark:bg-[#0E1220] font-mono uppercase text-[11px] border-b border-slate-200 dark:border-[#23283B]">
                <tr>
                  <th className="p-3">Rule Code</th>
                  <th className="p-3">Check Description</th>
                  <th className="p-3">Automated --fix Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-[#23283B] text-slate-600 dark:text-[#94A3B8]">
                <tr>
                  <td className="p-3 font-mono font-bold text-indigo-600 dark:text-[#818CF8]">DNB-PRD-001</td>
                  <td className="p-3">Legacy <code className="font-mono">{'/products/${id}'}</code> links detected</td>
                  <td className="p-3 text-emerald-600 dark:text-emerald-400 font-medium">Rewrites to <code className="font-mono">platformProductDetailHref(id)</code> &amp; injects import</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-bold text-indigo-600 dark:text-[#818CF8]">DNB-PRD-002</td>
                  <td className="p-3">Missing <code className="font-mono">src/app/products/detail/page.tsx</code></td>
                  <td className="p-3 text-emerald-600 dark:text-emerald-400 font-medium">Scaffolds stable route with <code className="font-mono">PlatformProductDetail</code></td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-bold text-indigo-600 dark:text-[#818CF8]">DNB-PRD-003</td>
                  <td className="p-3">Manifest missing <code className="font-mono">/products/detail</code> route</td>
                  <td className="p-3 text-emerald-600 dark:text-emerald-400 font-medium">Appends route to <code className="font-mono">fivora-template.json pages[]</code></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Footer Navigation */}
        <div className="pt-8 border-t border-slate-200 dark:border-[#23283B] flex justify-between items-center">
          <Link
            href="/docs/templates"
            className="flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-[#94A3B8] hover:text-slate-950 dark:hover:text-white transition-colors"
          >
            <span>← Storefront Templates</span>
          </Link>
          <Link
            href="/docs/components/platform-product-detail"
            className="flex items-center gap-2 text-xs font-semibold text-indigo-600 dark:text-[#818CF8] hover:text-indigo-700 dark:hover:text-white transition-colors"
          >
            <span>PlatformProductDetail Component</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <TableOfContents items={tocItems} />
    </div>
  );
}
