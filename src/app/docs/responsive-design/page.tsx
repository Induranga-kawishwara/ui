import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import {
  Smartphone,
  Tablet,
  Monitor,
  ArrowRight,
  Layers,
  Grid3X3,
  Navigation,
  Sparkles,
} from 'lucide-react';
import { CodeBlock } from '@/components/docs/CodeBlock';
import { TableOfContents, TocItem } from '@/components/layout/TableOfContents';
import { DenebStarIcon } from '@/components/brand/DenebLogo';
import { SITE_CONFIG } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Responsive Design & Mobile-First Commerce — DENEB UI',
  description:
    'Built-in mobile-first viewport architecture, ResponsiveBaseStyles, auto-injecting CSS, and responsive commerce primitives across mobile, tablet, and desktop.',
  keywords: [
    'responsive storefront design',
    'mobile-first React components',
    'ResponsiveBaseStyles',
    'fluid grid commerce',
    'mobile commerce bar',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/docs/responsive-design`,
  },
  openGraph: {
    title: 'Responsive Design & Mobile-First Commerce — DENEB UI',
    description:
      'Built-in mobile-first viewport architecture, ResponsiveBaseStyles, auto-injecting CSS, and responsive commerce primitives across mobile, tablet, and desktop.',
    url: `${SITE_CONFIG.url}/docs/responsive-design`,
    type: 'article',
    images: [SITE_CONFIG.ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Responsive Design & Mobile-First Commerce — DENEB UI',
    description:
      'Built-in mobile-first viewport architecture, ResponsiveBaseStyles, auto-injecting CSS, and responsive commerce primitives across mobile, tablet, and desktop.',
    images: [SITE_CONFIG.ogImage],
  },
};

export default function ResponsiveDesignPage() {
  const tocItems: TocItem[] = [
    { id: 'overview', title: 'Overview' },
    { id: 'breakpoints', title: 'Breakpoints' },
    { id: 'auto-injection', title: 'Automatic CSS' },
    { id: 'grid', title: 'Responsive Grids' },
    { id: 'hooks', title: 'React Hooks' },
    { id: 'components', title: 'Component Behavior' },
    { id: 'tailwind', title: 'Tailwind + Fallbacks' },
    { id: 'checklist', title: 'Developer Checklist' },
  ];

  return (
    <div className="flex w-full min-h-full">
      <div className="flex-1 min-w-0 px-4 sm:px-6 lg:px-8 xl:px-12 py-8 space-y-10">
        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-[#94A3B8]">
          <Link href="/docs/introduction" className="hover:text-slate-900 dark:hover:text-white transition-colors">
            Docs
          </Link>
          <span>/</span>
          <span className="text-indigo-600 dark:text-[#818CF8] font-semibold">Responsive Design</span>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-3 flex-wrap">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white font-sans">
              Responsive Design
            </h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-600 border border-indigo-200 dark:bg-[#818CF8]/15 dark:text-[#A5B4FC] dark:border-[#818CF8]/30 flex items-center gap-1 shadow-xs dark:shadow-none">
              <DenebStarIcon className="w-2.5 h-2.5" />
              Mobile · Tablet · Desktop
            </span>
          </div>
          <p className="text-base sm:text-lg text-slate-600 dark:text-[#94A3B8] leading-relaxed">
            Every DENEB UI component is built to adapt across phones, tablets, and desktops — with automatic CSS injection, fluid spacing, and optional React hooks for custom layouts.
          </p>
        </div>

        <div className="rounded-xl border border-emerald-500/30 bg-emerald-50/50 dark:bg-emerald-500/10 p-4 text-xs sm:text-sm text-emerald-800 dark:text-emerald-200/90 leading-relaxed shadow-xs">
          <strong className="font-semibold text-emerald-700 dark:text-emerald-300">Zero setup required:</strong> wrapping your app in{' '}
          <code className="bg-white/80 dark:bg-black/40 px-1.5 py-0.5 rounded font-mono text-emerald-900 dark:text-white border border-emerald-200 dark:border-transparent">SiteDataProvider</code> automatically
          injects <code className="bg-white/80 dark:bg-black/40 px-1.5 py-0.5 rounded font-mono text-emerald-900 dark:text-white border border-emerald-200 dark:border-transparent">ResponsiveBaseStyles</code>{' '}
          — viewport-aware CSS for all storefront components, even when Tailwind is not configured.
        </div>

        {/* Overview */}
        <section id="overview" className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">Design Philosophy</h2>
          <p className="text-sm text-slate-600 dark:text-[#94A3B8] leading-relaxed">
            DENEB UI uses a <strong className="text-slate-900 dark:text-white">mobile-first</strong> approach. Base layouts stack vertically on
            small screens, expand into multi-column grids on tablets, and unlock full desktop navigation and sidebars at
            large breakpoints. Components combine three layers:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs dark:border-[#23283B] dark:bg-[#0A0D17] dark:shadow-none space-y-2">
              <div className="p-2 w-fit rounded-lg bg-indigo-50 text-indigo-600 dark:bg-[#818CF8]/10 dark:text-[#818CF8]">
                <Layers className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">ResponsiveBaseStyles</h3>
              <p className="text-xs text-slate-600 dark:text-[#94A3B8]">
                Global <code className="text-slate-900 dark:text-white">@media</code> rules for nav, grids, dialogs, filters, and cards — works without Tailwind.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs dark:border-[#23283B] dark:bg-[#0A0D17] dark:shadow-none space-y-2">
              <div className="p-2 w-fit rounded-lg bg-indigo-50 text-indigo-600 dark:bg-[#818CF8]/10 dark:text-[#818CF8]">
                <Sparkles className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">Fluid inline CSS</h3>
              <p className="text-xs text-slate-600 dark:text-[#94A3B8]">
                <code className="text-slate-900 dark:text-white">clamp()</code>, <code className="text-slate-900 dark:text-white">auto-fit</code> grids, and{' '}
                <code className="text-slate-900 dark:text-white">width: 100%</code> defaults scale typography and spacing smoothly.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs dark:border-[#23283B] dark:bg-[#0A0D17] dark:shadow-none space-y-2">
              <div className="p-2 w-fit rounded-lg bg-indigo-50 text-indigo-600 dark:bg-[#818CF8]/10 dark:text-[#818CF8]">
                <Grid3X3 className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">Tailwind utilities</h3>
              <p className="text-xs text-slate-600 dark:text-[#94A3B8]">
                Commerce components also ship <code className="text-slate-900 dark:text-white">sm:</code>/<code className="text-slate-900 dark:text-white">md:</code>/
                <code className="text-slate-900 dark:text-white">lg:</code> classes when your project has Tailwind configured.
              </p>
            </div>
          </div>
        </section>

        {/* Breakpoints */}
        <section id="breakpoints" className="space-y-4 pt-4 border-t border-slate-200 dark:border-[#23283B]">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">Standard Breakpoints</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs dark:border-[#23283B] dark:bg-[#0A0D17] dark:shadow-none flex items-start gap-3">
              <Smartphone className="w-5 h-5 text-indigo-600 dark:text-[#818CF8] shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">Mobile</div>
                <div className="text-[11px] font-mono text-slate-500 dark:text-[#64748B]">&lt; 768px</div>
                <p className="text-xs text-slate-600 dark:text-[#94A3B8] mt-1">Stacked layouts, mobile nav drawer, collapsible filters, sticky bottom bar.</p>
              </div>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs dark:border-[#23283B] dark:bg-[#0A0D17] dark:shadow-none flex items-start gap-3">
              <Tablet className="w-5 h-5 text-indigo-600 dark:text-[#818CF8] shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">Tablet</div>
                <div className="text-[11px] font-mono text-slate-500 dark:text-[#64748B]">768px – 1023px</div>
                <p className="text-xs text-slate-600 dark:text-[#94A3B8] mt-1">2-column grids, split hero, horizontal product cards, visible desktop nav.</p>
              </div>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs dark:border-[#23283B] dark:bg-[#0A0D17] dark:shadow-none flex items-start gap-3">
              <Monitor className="w-5 h-5 text-indigo-600 dark:text-[#818CF8] shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">Desktop</div>
                <div className="text-[11px] font-mono text-slate-500 dark:text-[#64748B]">≥ 1024px</div>
                <p className="text-xs text-slate-600 dark:text-[#94A3B8] mt-1">4-column footer, full product detail gallery, sticky sidebars, hidden mobile bar.</p>
              </div>
            </div>
          </div>

          <CodeBlock
            code={`import { BREAKPOINTS, mediaQueryUp } from "@deneb-ui/ui";

// Standard tokens (px):
// xs: 480  sm: 640  md: 768  lg: 1024  xl: 1280

// CSS media query string builder:
const isDesktop = window.matchMedia(mediaQueryUp("lg")).matches;`}
            language="typescript"
            filename="lib/breakpoints.ts"
          />
        </section>

        {/* Automatic CSS */}
        <section id="auto-injection" className="space-y-4 pt-4 border-t border-slate-200 dark:border-[#23283B]">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">Automatic CSS Injection</h2>
          <p className="text-sm text-slate-600 dark:text-[#94A3B8] leading-relaxed">
            When you wrap your application in <code className="text-slate-900 dark:text-white">SiteDataProvider</code>, a{' '}
            <code className="text-slate-900 dark:text-white">&lt;style id=&quot;deneb-responsive-base&quot;&gt;</code> tag is inserted
            into <code className="text-slate-900 dark:text-white">&lt;head&gt;</code> on first mount. It contains responsive rules
            for all 31 components.
          </p>
          <CodeBlock
            code={`import { SiteDataProvider } from "@deneb-ui/ui";
import siteData from "@/data/site-data.json";

export default function RootLayout({ children }) {
  return (
    <SiteDataProvider initialSiteData={siteData}>
      {children}
    </SiteDataProvider>
  );
}`}
            language="tsx"
            filename="app/layout.tsx"
          />
        </section>

        {/* Responsive Grids */}
        <section id="grid" className="space-y-4 pt-4 border-t border-slate-200 dark:border-[#23283B]">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">Responsive Grids</h2>
          <p className="text-sm text-slate-600 dark:text-[#94A3B8] leading-relaxed">
            The <code className="text-slate-900 dark:text-white">Grid</code> component accepts responsive column counts via an
            object prop. It switches from 1 column on mobile to 2 on tablet and 3 on desktop automatically:
          </p>
          <CodeBlock
            code={`import { Grid, ProductCard } from "@deneb-ui/ui";

<Grid columns={{ mobile: 1, tablet: 2, desktop: 3 }} gap="md">
  {products.map((p) => (
    <ProductCard key={p.id} {...p} />
  ))}
</Grid>`}
            language="tsx"
            filename="components/ProductCatalog.tsx"
          />
        </section>

        {/* React Hooks */}
        <section id="hooks" className="space-y-4 pt-4 border-t border-slate-200 dark:border-[#23283B]">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">Responsive Hooks</h2>
          <p className="text-sm text-slate-600 dark:text-[#94A3B8] leading-relaxed">
            Use <code className="text-slate-900 dark:text-white">useMediaQuery</code> or <code className="text-slate-900 dark:text-white">useBreakpoint</code> for
            conditional rendering that needs to know the active screen size in JavaScript:
          </p>
          <CodeBlock
            code={`import { useBreakpoint, useMediaQuery, mediaQueryUp } from "@deneb-ui/ui";

function MyHeader() {
  const { isMobile, isTablet, isDesktop } = useBreakpoint();
  const isWideScreen = useMediaQuery(mediaQueryUp("xl"));

  return isMobile ? <MobileNav /> : <DesktopNav />;
}`}
            language="tsx"
            filename="components/Header.tsx"
          />
        </section>

        {/* Component table */}
        <section id="components" className="space-y-4 pt-4 border-t border-slate-200 dark:border-[#23283B]">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
            <Navigation className="w-5 h-5 text-indigo-600 dark:text-[#818CF8]" />
            <span>Component Responsive Behavior</span>
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-xs sm:text-sm text-left border border-slate-200 dark:border-[#23283B] rounded-xl overflow-hidden bg-white dark:bg-[#0A0D17] shadow-xs">
              <thead className="bg-slate-50 dark:bg-[#0E1220] text-slate-700 dark:text-[#CBD5E1] font-mono uppercase text-[11px] border-b border-slate-200 dark:border-[#23283B]">
                <tr>
                  <th className="p-3 sm:p-4">Component</th>
                  <th className="p-3 sm:p-4">Mobile</th>
                  <th className="p-3 sm:p-4">Tablet / Desktop</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-[#23283B] text-slate-600 dark:text-[#94A3B8]">
                <tr>
                  <td className="p-3 sm:p-4 font-semibold text-slate-900 dark:text-white">Navbar</td>
                  <td className="p-3 sm:p-4">Hamburger drawer + CTA in drawer</td>
                  <td className="p-3 sm:p-4">Inline nav links + header CTA button</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-semibold text-slate-900 dark:text-white">FilterSidebar</td>
                  <td className="p-3 sm:p-4">Collapsible panel with toggle</td>
                  <td className="p-3 sm:p-4">Always-visible sidebar</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-semibold text-slate-900 dark:text-white">ProductCard (horizontal)</td>
                  <td className="p-3 sm:p-4">Stacked image + body</td>
                  <td className="p-3 sm:p-4">Side-by-side row layout</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-semibold text-slate-900 dark:text-white">Footer / TrustBadges</td>
                  <td className="p-3 sm:p-4">1 column</td>
                  <td className="p-3 sm:p-4">2 cols (tablet) → 4 cols (desktop)</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-semibold text-slate-900 dark:text-white">StickyMobileBar</td>
                  <td className="p-3 sm:p-4">Fixed bottom dock</td>
                  <td className="p-3 sm:p-4">Hidden ≥ 1024px</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-semibold text-slate-900 dark:text-white">FloatingContactWidget</td>
                  <td className="p-3 sm:p-4">Popup width capped to viewport</td>
                  <td className="p-3 sm:p-4">Fixed corner FAB + 18rem menu</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-semibold text-slate-900 dark:text-white">EditableSection</td>
                  <td className="p-3 sm:p-4">Reduced vertical padding via clamp()</td>
                  <td className="p-3 sm:p-4">Full design-token spacing</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-semibold text-slate-900 dark:text-white">ContactActions (row)</td>
                  <td className="p-3 sm:p-4">Stacks vertically</td>
                  <td className="p-3 sm:p-4">Horizontal flex row</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Tailwind */}
        <section id="tailwind" className="space-y-4 pt-4 border-t border-slate-200 dark:border-[#23283B]">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">Tailwind + CSS Fallbacks</h2>
          <p className="text-sm text-slate-600 dark:text-[#94A3B8] leading-relaxed">
            Many commerce components include Tailwind classes (<code className="text-slate-900 dark:text-white">md:grid-cols-2</code>, etc.).
            When Tailwind is configured, those classes take effect. When it is not,{' '}
            <code className="text-slate-900 dark:text-white">ResponsiveBaseStyles</code> provides equivalent behavior via{' '}
            <code className="text-slate-900 dark:text-white">.deneb-footer-grid</code>, <code className="text-slate-900 dark:text-white">.deneb-product-grid</code>, and
            other scoped selectors.
          </p>
          <p className="text-sm text-slate-600 dark:text-[#94A3B8] leading-relaxed">
            For Next.js projects, ensure your <code className="text-slate-900 dark:text-white">tailwind.config</code> content paths include{' '}
            <code className="text-slate-900 dark:text-white">node_modules/@deneb-ui/ui/dist/**/*.js</code> if you consume the package from npm.
          </p>
        </section>

        {/* Checklist */}
        <section id="checklist" className="space-y-4 pt-4 border-t border-slate-200 dark:border-[#23283B]">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">Developer Checklist</h2>
          <ul className="space-y-2 text-sm text-slate-600 dark:text-[#94A3B8] list-disc list-inside">
            <li>Wrap the app in <code className="text-slate-900 dark:text-white">SiteDataProvider</code> (auto-injects responsive CSS).</li>
            <li>Use <code className="text-slate-900 dark:text-white">ThemeStyles</code> for brand tokens and optional <code className="text-slate-900 dark:text-white">sectionPadding</code>.</li>
            <li>Prefer <code className="text-slate-900 dark:text-white">Grid columns=&#123;&#123; mobile, tablet, desktop &#125;&#125;</code> over fixed pixel widths.</li>
            <li>Use <code className="text-slate-900 dark:text-white">Section padding=&quot;lg&quot;</code> — spacing scales fluidly via <code className="text-slate-900 dark:text-white">clamp()</code>.</li>
            <li>Test at 375px (phone), 768px (tablet), and 1280px (desktop) before publishing to Fivora.</li>
            <li>Run <code className="text-slate-900 dark:text-white">npx @deneb-ui/cli validate .</code> to confirm visual-editing contract compliance.</li>
          </ul>
        </section>

        <div className="pt-8 border-t border-slate-200 dark:border-[#23283B] flex justify-between flex-wrap gap-4">
          <Link
            href="/docs/theming"
            className="flex items-center gap-2 text-xs font-semibold text-indigo-600 dark:text-[#818CF8] hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <span>← Theming & Tokens</span>
          </Link>
          <Link
            href="/docs/cli"
            className="flex items-center gap-2 text-xs font-semibold text-indigo-600 dark:text-[#818CF8] hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <span>Next: CLI Reference</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <TableOfContents items={tocItems} />
    </div>
  );
}
