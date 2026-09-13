'use client';

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
    <div className="flex w-full gap-8 lg:gap-10">
      <div className="flex-1 min-w-0 py-6 space-y-10">
        <div className="flex items-center gap-2 text-xs text-[#94A3B8]">
          <Link href="/docs/introduction" className="hover:text-white transition-colors">
            Docs
          </Link>
          <span>/</span>
          <span className="text-[#818CF8] font-semibold">Responsive Design</span>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-3 flex-wrap">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-sans">
              Responsive Design
            </h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#818CF8]/15 text-[#A5B4FC] border border-[#818CF8]/30 flex items-center gap-1">
              <DenebStarIcon className="w-2.5 h-2.5" />
              Mobile · Tablet · Desktop
            </span>
          </div>
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Every DENEB UI component is built to adapt across phones, tablets, and desktops — with automatic CSS injection, fluid spacing, and optional React hooks for custom layouts.
          </p>
        </div>

        <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-xs sm:text-sm text-emerald-200/90 leading-relaxed">
          <strong className="font-semibold text-emerald-300">Zero setup required:</strong> wrapping your app in{' '}
          <code className="bg-black/40 px-1.5 py-0.5 rounded font-mono text-white">SiteDataProvider</code> automatically
          injects <code className="bg-black/40 px-1.5 py-0.5 rounded font-mono text-white">ResponsiveBaseStyles</code>{' '}
          — viewport-aware CSS for all storefront components, even when Tailwind is not configured.
        </div>

        {/* Overview */}
        <section id="overview" className="space-y-4">
          <h2 className="text-xl font-bold text-white tracking-tight">Design Philosophy</h2>
          <p className="text-sm text-[#94A3B8] leading-relaxed">
            DENEB UI uses a <strong className="text-white">mobile-first</strong> approach. Base layouts stack vertically on
            small screens, expand into multi-column grids on tablets, and unlock full desktop navigation and sidebars at
            large breakpoints. Components combine three layers:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl border border-[#23283B] bg-[#0A0D17] space-y-2">
              <div className="p-2 w-fit rounded-lg bg-[#818CF8]/10 text-[#818CF8]">
                <Layers className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-white">ResponsiveBaseStyles</h3>
              <p className="text-xs text-[#94A3B8]">
                Global <code className="text-white">@media</code> rules for nav, grids, dialogs, filters, and cards — works without Tailwind.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-[#23283B] bg-[#0A0D17] space-y-2">
              <div className="p-2 w-fit rounded-lg bg-[#818CF8]/10 text-[#818CF8]">
                <Sparkles className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-white">Fluid inline CSS</h3>
              <p className="text-xs text-[#94A3B8]">
                <code className="text-white">clamp()</code>, <code className="text-white">auto-fit</code> grids, and{' '}
                <code className="text-white">width: 100%</code> defaults scale typography and spacing smoothly.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-[#23283B] bg-[#0A0D17] space-y-2">
              <div className="p-2 w-fit rounded-lg bg-[#818CF8]/10 text-[#818CF8]">
                <Grid3X3 className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-white">Tailwind utilities</h3>
              <p className="text-xs text-[#94A3B8]">
                Commerce components also ship <code className="text-white">sm:</code>/<code className="text-white">md:</code>/
                <code className="text-white">lg:</code> classes when your project has Tailwind configured.
              </p>
            </div>
          </div>
        </section>

        {/* Breakpoints */}
        <section id="breakpoints" className="space-y-4 pt-4 border-t border-[#23283B]">
          <h2 className="text-xl font-bold text-white tracking-tight">Standard Breakpoints</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl border border-[#23283B] bg-[#0A0D17] flex items-start gap-3">
              <Smartphone className="w-5 h-5 text-[#818CF8] shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-bold text-white">Mobile</div>
                <div className="text-[11px] font-mono text-[#64748B]">&lt; 768px</div>
                <p className="text-xs text-[#94A3B8] mt-1">Stacked layouts, mobile nav drawer, collapsible filters, sticky bottom bar.</p>
              </div>
            </div>
            <div className="p-4 rounded-xl border border-[#23283B] bg-[#0A0D17] flex items-start gap-3">
              <Tablet className="w-5 h-5 text-[#818CF8] shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-bold text-white">Tablet</div>
                <div className="text-[11px] font-mono text-[#64748B]">768px – 1023px</div>
                <p className="text-xs text-[#94A3B8] mt-1">2-column grids, split hero, horizontal product cards, visible desktop nav.</p>
              </div>
            </div>
            <div className="p-4 rounded-xl border border-[#23283B] bg-[#0A0D17] flex items-start gap-3">
              <Monitor className="w-5 h-5 text-[#818CF8] shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-bold text-white">Desktop</div>
                <div className="text-[11px] font-mono text-[#64748B]">≥ 1024px</div>
                <p className="text-xs text-[#94A3B8] mt-1">4-column footer, full product detail gallery, sticky sidebars, hidden mobile bar.</p>
              </div>
            </div>
          </div>

          <CodeBlock
            code={`import { BREAKPOINTS, mediaQueryUp } from "@deneb-ui/ui";

// Standard tokens (px):
// xs: 480  sm: 640  md: 768  lg: 1024  xl: 1280

const tabletUp = mediaQueryUp("md"); // "(min-width: 768px)"`}
            language="tsx"
            filename="breakpoints.ts"
          />
        </section>

        {/* Auto injection */}
        <section id="auto-injection" className="space-y-4 pt-4 border-t border-[#23283B]">
          <h2 className="text-xl font-bold text-white tracking-tight">Automatic Responsive CSS</h2>
          <p className="text-sm text-[#94A3B8] leading-relaxed">
            <code className="text-white bg-black/40 px-1.5 py-0.5 rounded font-mono">SiteDataProvider</code> mounts{' '}
            <code className="text-white bg-black/40 px-1.5 py-0.5 rounded font-mono">ResponsiveBaseStyles</code> once at
            the root. You can also mount it manually alongside theme tokens:
          </p>
          <CodeBlock
            code={`import { SiteDataProvider, ThemeStyles, ResponsiveBaseStyles } from "@deneb-ui/ui";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeStyles theme={{ primaryColor: "#818CF8" }} />
        {/* ResponsiveBaseStyles is already included inside SiteDataProvider */}
        <SiteDataProvider initialSiteData={siteData}>
          {children}
        </SiteDataProvider>
      </body>
    </html>
  );
}`}
            language="tsx"
            filename="app/layout.tsx"
          />
        </section>

        {/* Grid */}
        <section id="grid" className="space-y-4 pt-4 border-t border-[#23283B]">
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <Grid3X3 className="w-5 h-5 text-[#818CF8]" />
            <span>Responsive Grids</span>
          </h2>
          <p className="text-sm text-[#94A3B8] leading-relaxed">
            <code className="text-white">EditableGrid</code> supports fixed columns, auto-balancing{' '}
            <code className="text-white">auto-fit</code>, or explicit per-device column counts:
          </p>
          <CodeBlock
            code={`import { Grid, Section } from "@deneb-ui/ui";

export default function Features() {
  return (
    <Section name="home-features" padding="lg">
      <Grid
        columns={{ mobile: 1, tablet: 2, desktop: 3 }}
        gap="lg"
        minCardWidth="280px"
      >
        {features.map((item, i) => (
          <ServiceCard key={i} itemPath={\`home.features[\${i}]\`} item={item} />
        ))}
      </Grid>
    </Section>
  );
}`}
            language="tsx"
            filename="components/Features.tsx"
          />
          <p className="text-xs text-[#64748B]">
            <code className="text-white">EditableProductGrid</code> uses the same tier model via{' '}
            <code className="text-white">columns.mobile</code>, <code className="text-white">columns.tablet</code>, and{' '}
            <code className="text-white">columns.desktop</code> props.
          </p>
        </section>

        {/* Hooks */}
        <section id="hooks" className="space-y-4 pt-4 border-t border-[#23283B]">
          <h2 className="text-xl font-bold text-white tracking-tight">React Hooks</h2>
          <p className="text-sm text-[#94A3B8] leading-relaxed">
            For custom components, use the built-in hooks exported from <code className="text-white">@deneb-ui/ui</code>:
          </p>
          <CodeBlock
            code={`"use client";

import { useDeviceTier, useMediaQuery, mediaQueryUp } from "@deneb-ui/ui";

export function CustomBanner() {
  const tier = useDeviceTier(); // "mobile" | "tablet" | "desktop"
  const isWide = useMediaQuery(mediaQueryUp("lg"));

  return (
    <div style={{ padding: tier === "mobile" ? "1rem" : "2rem" }}>
      {isWide ? <DesktopHero /> : <MobileHero />}
    </div>
  );
}`}
            language="tsx"
            filename="components/CustomBanner.tsx"
          />
        </section>

        {/* Component table */}
        <section id="components" className="space-y-4 pt-4 border-t border-[#23283B]">
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <Navigation className="w-5 h-5 text-[#818CF8]" />
            <span>Component Responsive Behavior</span>
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-xs sm:text-sm text-left border border-[#23283B] rounded-xl overflow-hidden">
              <thead className="bg-[#0E1220] text-[#CBD5E1] font-mono uppercase text-[11px] border-b border-[#23283B]">
                <tr>
                  <th className="p-3 sm:p-4">Component</th>
                  <th className="p-3 sm:p-4">Mobile</th>
                  <th className="p-3 sm:p-4">Tablet / Desktop</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#23283B] text-[#94A3B8]">
                <tr>
                  <td className="p-3 sm:p-4 font-semibold text-white">Navbar</td>
                  <td className="p-3 sm:p-4">Hamburger drawer + CTA in drawer</td>
                  <td className="p-3 sm:p-4">Inline nav links + header CTA button</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-semibold text-white">FilterSidebar</td>
                  <td className="p-3 sm:p-4">Collapsible panel with toggle</td>
                  <td className="p-3 sm:p-4">Always-visible sidebar</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-semibold text-white">ProductCard (horizontal)</td>
                  <td className="p-3 sm:p-4">Stacked image + body</td>
                  <td className="p-3 sm:p-4">Side-by-side row layout</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-semibold text-white">Footer / TrustBadges</td>
                  <td className="p-3 sm:p-4">1 column</td>
                  <td className="p-3 sm:p-4">2 cols (tablet) → 4 cols (desktop)</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-semibold text-white">StickyMobileBar</td>
                  <td className="p-3 sm:p-4">Fixed bottom dock</td>
                  <td className="p-3 sm:p-4">Hidden ≥ 1024px</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-semibold text-white">FloatingContactWidget</td>
                  <td className="p-3 sm:p-4">Popup width capped to viewport</td>
                  <td className="p-3 sm:p-4">Fixed corner FAB + 18rem menu</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-semibold text-white">EditableSection</td>
                  <td className="p-3 sm:p-4">Reduced vertical padding via clamp()</td>
                  <td className="p-3 sm:p-4">Full design-token spacing</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-semibold text-white">ContactActions (row)</td>
                  <td className="p-3 sm:p-4">Stacks vertically</td>
                  <td className="p-3 sm:p-4">Horizontal flex row</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Tailwind */}
        <section id="tailwind" className="space-y-4 pt-4 border-t border-[#23283B]">
          <h2 className="text-xl font-bold text-white tracking-tight">Tailwind + CSS Fallbacks</h2>
          <p className="text-sm text-[#94A3B8] leading-relaxed">
            Many commerce components include Tailwind classes (<code className="text-white">md:grid-cols-2</code>, etc.).
            When Tailwind is configured, those classes take effect. When it is not,{' '}
            <code className="text-white">ResponsiveBaseStyles</code> provides equivalent behavior via{' '}
            <code className="text-white">.deneb-footer-grid</code>, <code className="text-white">.deneb-product-grid</code>, and
            other scoped selectors.
          </p>
          <p className="text-sm text-[#94A3B8] leading-relaxed">
            For Next.js projects, ensure your <code className="text-white">tailwind.config</code> content paths include{' '}
            <code className="text-white">node_modules/@deneb-ui/ui/dist/**/*.js</code> if you consume the package from npm.
          </p>
        </section>

        {/* Checklist */}
        <section id="checklist" className="space-y-4 pt-4 border-t border-[#23283B]">
          <h2 className="text-xl font-bold text-white tracking-tight">Developer Checklist</h2>
          <ul className="space-y-2 text-sm text-[#94A3B8] list-disc list-inside">
            <li>Wrap the app in <code className="text-white">SiteDataProvider</code> (auto-injects responsive CSS).</li>
            <li>Use <code className="text-white">ThemeStyles</code> for brand tokens and optional <code className="text-white">sectionPadding</code>.</li>
            <li>Prefer <code className="text-white">Grid columns=&#123;&#123; mobile, tablet, desktop &#125;&#125;</code> over fixed pixel widths.</li>
            <li>Use <code className="text-white">Section padding=&quot;lg&quot;</code> — spacing scales fluidly via <code className="text-white">clamp()</code>.</li>
            <li>Test at 375px (phone), 768px (tablet), and 1280px (desktop) before publishing to Fivora.</li>
            <li>Run <code className="text-white">npx @deneb-ui/cli validate .</code> to confirm visual-editing contract compliance.</li>
          </ul>
        </section>

        <div className="pt-8 border-t border-[#23283B] flex justify-between flex-wrap gap-4">
          <Link
            href="/docs/theming"
            className="flex items-center gap-2 text-xs font-semibold text-[#818CF8] hover:text-white transition-colors"
          >
            <span>← Theming & Tokens</span>
          </Link>
          <Link
            href="/docs/cli"
            className="flex items-center gap-2 text-xs font-semibold text-[#818CF8] hover:text-white transition-colors"
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
