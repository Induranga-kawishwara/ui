import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Layers, Sliders, Palette, Code2 } from 'lucide-react';
import { CodeBlock } from '@/components/docs/CodeBlock';
import { TableOfContents, TocItem } from '@/components/layout/TableOfContents';
import { DenebStarIcon } from '@/components/brand/DenebLogo';
import { SITE_CONFIG } from '@/lib/site-config';
import { THEME_PRESETS } from '@/components/deneb-ui/ThemeStyles';

export const metadata: Metadata = {
  title: 'Universal Theming & Design Tokens — DENEB UI',
  description:
    'Comprehensive guide to the DENEB UI Universal Theme Engine, ThemeStyles component, WCAG auto-contrast algorithms, pre-configured industry presets, and Next.js App Router template setup.',
  keywords: [
    'deneb ui theming',
    'universal theme engine',
    'ThemeStyles component',
    'WCAG auto contrast React',
    'Tailwind color tokens',
    'customizable storefront themes',
    'Fivora template development',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/docs/theming`,
  },
  openGraph: {
    title: 'Universal Theming & Design Tokens — DENEB UI',
    description:
      'Master the DENEB UI Universal Theme Engine, ThemeStyles component, WCAG auto-contrast algorithms, pre-configured industry presets, and Next.js App Router template setup.',
    url: `${SITE_CONFIG.url}/docs/theming`,
    type: 'article',
    images: [SITE_CONFIG.ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Universal Theming & Design Tokens — DENEB UI',
    description:
      'Master the DENEB UI Universal Theme Engine, ThemeStyles component, WCAG auto-contrast algorithms, pre-configured industry presets, and Next.js App Router template setup.',
    images: [SITE_CONFIG.ogImage],
  },
};

export default function ThemingPage() {
  const tocItems: TocItem[] = [
    { id: 'overview', title: 'Celestial Palette' },
    { id: 'universal-engine', title: 'Theme Architecture' },
    { id: 'theme-schema', title: 'Theme Schema (TemplateTheme)' },
    { id: 'contrast-engine', title: 'WCAG Contrast Safety' },
    { id: 'presets', title: 'Industry Presets' },
    { id: 'template-setup', title: 'Template Setup (App Router)' },
    { id: 'tokens', title: 'CSS Variables Reference' },
    { id: 'responsive', title: 'Responsive Spacing' },
    { id: 'chromatic', title: 'Chromatic Shimmer' },
  ];

  return (
    <div className="flex w-full min-h-full">
      <div className="flex-1 min-w-0 px-4 sm:px-6 lg:px-8 xl:px-12 py-8 space-y-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-[#94A3B8]">
          <Link href="/docs/installation" className="hover:text-slate-900 dark:hover:text-white transition-colors">
            Docs
          </Link>
          <span>/</span>
          <span className="text-indigo-600 dark:text-[#818CF8] font-semibold">Theming & Tokens</span>
        </div>

        {/* Page Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white font-sans">
              Universal Theming & Design Tokens
            </h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-600 border border-indigo-200 dark:bg-[#818CF8]/15 dark:text-[#A5B4FC] dark:border-[#818CF8]/30 flex items-center gap-1 shadow-xs dark:shadow-none">
              <DenebStarIcon className="w-2.5 h-2.5" />
              Cosmic System
            </span>
          </div>
          <p className="text-base sm:text-lg text-slate-600 dark:text-[#94A3B8] leading-relaxed">
            DENEB UI powers dynamic storefront branding through a high-performance runtime CSS Custom Properties engine.
            Featuring WCAG AAA auto-contrast resolution, 10 curated industry presets, and real-time live synchronization with Fivora Studio's Visual Editor.
          </p>
        </div>

        {/* Palette Color Swatches */}
        <section id="overview" className="space-y-4">
          <div className="flex items-center gap-2">
            <Palette className="w-5 h-5 text-indigo-600 dark:text-[#818CF8]" />
            <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
              Default Celestial Color Palette
            </h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-[#94A3B8]">
            The foundational dark-mode aesthetic features deep obsidian surfaces layered with high-vibrancy starlight indigos:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 rounded-xl border border-slate-200 bg-white shadow-xs dark:border-[#23283B] dark:bg-[#08090E] space-y-2">
              <div className="h-12 rounded-lg bg-[#08090E] border border-slate-300 dark:border-white/10" />
              <div>
                <div className="text-xs font-bold text-slate-900 dark:text-white">Obsidian Base</div>
                <div className="text-[11px] font-mono text-slate-500 dark:text-[#94A3B8]">#08090E</div>
              </div>
            </div>

            <div className="p-3 rounded-xl border border-slate-200 bg-white shadow-xs dark:border-[#23283B] dark:bg-[#0E111C] space-y-2">
              <div className="h-12 rounded-lg bg-[#0E111C] border border-slate-300 dark:border-white/10" />
              <div>
                <div className="text-xs font-bold text-slate-900 dark:text-white">Cosmic Card</div>
                <div className="text-[11px] font-mono text-slate-500 dark:text-[#94A3B8]">#0E111C</div>
              </div>
            </div>

            <div className="p-3 rounded-xl border border-slate-200 bg-white shadow-xs dark:border-[#23283B] dark:bg-[#141829] space-y-2">
              <div className="h-12 rounded-lg bg-[#818CF8] shadow-[0_0_15px_rgba(129,140,248,0.5)]" />
              <div>
                <div className="text-xs font-bold text-slate-900 dark:text-white">Deneb Star Accent</div>
                <div className="text-[11px] font-mono text-indigo-600 dark:text-[#A5B4FC]">#818CF8</div>
              </div>
            </div>

            <div className="p-3 rounded-xl border border-slate-200 bg-white shadow-xs dark:border-[#23283B] dark:bg-[#141829] space-y-2">
              <div className="h-12 rounded-lg bg-[#6366F1] shadow-[0_0_15px_rgba(99,102,241,0.5)]" />
              <div>
                <div className="text-xs font-bold text-slate-900 dark:text-white">Indigo Core</div>
                <div className="text-[11px] font-mono text-indigo-600 dark:text-[#A5B4FC]">#6366F1</div>
              </div>
            </div>
          </div>
        </section>

        {/* Universal Theme Architecture */}
        <section id="universal-engine" className="space-y-4 pt-4 border-t border-slate-200 dark:border-[#23283B]">
          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-indigo-600 dark:text-[#818CF8]" />
            <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
              Theme Engine Architecture & Reactive Dataflow
            </h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-[#94A3B8] leading-relaxed">
            In Fivora storefront templates, theming is fully decoupled from component code. Merchant styling choices defined in <code className="text-slate-900 dark:text-white">site-data.json</code> flow cleanly into root CSS custom properties, allowing instant re-skinning without rebuilding or restarting the application:
          </p>

          <div className="p-4 rounded-xl border border-slate-200 dark:border-[#23283B] bg-slate-50 dark:bg-[#0A0D18] space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-white dark:bg-[#121627] border border-slate-200 dark:border-[#1E233D] space-y-1">
                <span className="font-mono text-[10px] text-indigo-600 dark:text-[#818CF8] font-bold uppercase">1. Site Data</span>
                <div className="font-semibold text-slate-900 dark:text-white">site-data.json</div>
                <p className="text-slate-500 dark:text-[#94A3B8] text-[11px]">Stores the merchant's active theme configuration object.</p>
              </div>

              <div className="p-3 rounded-lg bg-white dark:bg-[#121627] border border-slate-200 dark:border-[#1E233D] space-y-1">
                <span className="font-mono text-[10px] text-indigo-600 dark:text-[#818CF8] font-bold uppercase">2. ThemeStyles</span>
                <div className="font-semibold text-slate-900 dark:text-white">&lt;ThemeStyles /&gt;</div>
                <p className="text-slate-500 dark:text-[#94A3B8] text-[11px]">Computes contrast, resolves presets, and injects :root CSS tokens.</p>
              </div>

              <div className="p-3 rounded-lg bg-white dark:bg-[#121627] border border-slate-200 dark:border-[#1E233D] space-y-1">
                <span className="font-mono text-[10px] text-indigo-600 dark:text-[#818CF8] font-bold uppercase">3. CSS Variables</span>
                <div className="font-semibold text-slate-900 dark:text-white">:root CSS Tokens</div>
                <p className="text-slate-500 dark:text-[#94A3B8] text-[11px]">--color-primary, --button-bg, --card-bg, and typography rules.</p>
              </div>

              <div className="p-3 rounded-lg bg-white dark:bg-[#121627] border border-slate-200 dark:border-[#1E233D] space-y-1">
                <span className="font-mono text-[10px] text-indigo-600 dark:text-[#818CF8] font-bold uppercase">4. Visual Editor</span>
                <div className="font-semibold text-slate-900 dark:text-white">SiteDataProvider</div>
                <p className="text-slate-500 dark:text-[#94A3B8] text-[11px]">Listens to postMessage events from Fivora Studio for zero-reload updates.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Theme Schema Specification */}
        <section id="theme-schema" className="space-y-4 pt-4 border-t border-slate-200 dark:border-[#23283B]">
          <div className="flex items-center gap-2">
            <Sliders className="w-5 h-5 text-indigo-600 dark:text-[#818CF8]" />
            <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
              Theme Schema Specification (<code className="text-indigo-600 dark:text-[#818CF8]">TemplateTheme</code>)
            </h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-[#94A3B8]">
            The <code className="text-slate-900 dark:text-white">TemplateTheme</code> interface defines all standard brand tokens. Furthermore, any custom camelCase property you include (e.g. <code className="text-slate-900 dark:text-white">cardBg: "#111"</code>) is automatically transformed into a corresponding CSS variable (e.g. <code className="text-slate-900 dark:text-white">--card-bg: #111</code>):
          </p>

          <div className="overflow-x-auto border border-slate-200 dark:border-[#23283B] rounded-xl">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 dark:bg-[#0A0D1A] border-b border-slate-200 dark:border-[#23283B] text-slate-700 dark:text-[#CBD5E1]">
                <tr>
                  <th className="p-3 font-semibold">Key</th>
                  <th className="p-3 font-semibold">Type</th>
                  <th className="p-3 font-semibold">Generated CSS Variable</th>
                  <th className="p-3 font-semibold">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-[#1E233D] text-slate-600 dark:text-[#94A3B8]">
                <tr>
                  <td className="p-3 font-mono font-bold text-indigo-600 dark:text-[#818CF8]">primaryColor</td>
                  <td className="p-3 font-mono text-[11px]">string</td>
                  <td className="p-3 font-mono text-[11px]">--color-primary, --brand-color</td>
                  <td className="p-3">Primary brand accent color used for main actions, active badges, and focus rings.</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-bold text-indigo-600 dark:text-[#818CF8]">secondaryColor</td>
                  <td className="p-3 font-mono text-[11px]">string</td>
                  <td className="p-3 font-mono text-[11px]">--brand-secondary, --color-secondary</td>
                  <td className="p-3">Deep secondary tone for dark header bars, secondary buttons, and section contrasts.</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-bold text-indigo-600 dark:text-[#818CF8]">accentColor</td>
                  <td className="p-3 font-mono text-[11px]">string</td>
                  <td className="p-3 font-mono text-[11px]">--color-accent, --brand-accent</td>
                  <td className="p-3">Vibrant tertiary accent for promotional badges, sale tags, and highlights.</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-bold text-indigo-600 dark:text-[#818CF8]">backgroundColor</td>
                  <td className="p-3 font-mono text-[11px]">string</td>
                  <td className="p-3 font-mono text-[11px]">--page-background</td>
                  <td className="p-3">Storefront canvas background (pure white, soft stone, or dark obsidian).</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-bold text-indigo-600 dark:text-[#818CF8]">textColor</td>
                  <td className="p-3 font-mono text-[11px]">string</td>
                  <td className="p-3 font-mono text-[11px]">--page-text, --color-text</td>
                  <td className="p-3">Standard body text color for high legibility across product descriptions and copy.</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-bold text-indigo-600 dark:text-[#818CF8]">headingColor</td>
                  <td className="p-3 font-mono text-[11px]">string</td>
                  <td className="p-3 font-mono text-[11px]">--heading-color</td>
                  <td className="p-3">Color applied to h1-h6 headings. Defaults to pure white in dark themes.</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-bold text-indigo-600 dark:text-[#818CF8]">mutedTextColor</td>
                  <td className="p-3 font-mono text-[11px]">string</td>
                  <td className="p-3 font-mono text-[11px]">--muted-text, --color-text-muted</td>
                  <td className="p-3">Subdued text color for secondary labels, metadata, and timestamps.</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-bold text-indigo-600 dark:text-[#818CF8]">buttonBackgroundColor</td>
                  <td className="p-3 font-mono text-[11px]">string</td>
                  <td className="p-3 font-mono text-[11px]">--button-bg, --button-primary-bg</td>
                  <td className="p-3">Explicit button fill color. Falls back to <code className="text-slate-900 dark:text-white">primaryColor</code> if omitted.</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-bold text-indigo-600 dark:text-[#818CF8]">buttonTextColor</td>
                  <td className="p-3 font-mono text-[11px]">string</td>
                  <td className="p-3 font-mono text-[11px]">--button-text, --button-primary-text</td>
                  <td className="p-3">Button text color. Automatically calculated using WCAG contrast if omitted.</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-bold text-indigo-600 dark:text-[#818CF8]">headingFont / bodyFont</td>
                  <td className="p-3 font-mono text-[11px]">string</td>
                  <td className="p-3 font-mono text-[11px]">--heading-font / --body-font</td>
                  <td className="p-3">Font family declarations (e.g. "Outfit, sans-serif", "Playfair Display, serif").</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-bold text-indigo-600 dark:text-[#818CF8]">borderRadius</td>
                  <td className="p-3 font-mono text-[11px]">string</td>
                  <td className="p-3 font-mono text-[11px]">--border-radius</td>
                  <td className="p-3">Global border radius applied across buttons, cards, images, and modal dialogs.</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-bold text-indigo-600 dark:text-[#818CF8]">[customCamelCase]</td>
                  <td className="p-3 font-mono text-[11px]">string | number</td>
                  <td className="p-3 font-mono text-[11px]">--[kebab-case]</td>
                  <td className="p-3">Any custom token (e.g. <code className="text-slate-900 dark:text-white">cardBorder: "#222"</code>) becomes <code className="text-slate-900 dark:text-white">--card-border</code>.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* WCAG Auto-Contrast Safety */}
        <section id="contrast-engine" className="space-y-4 pt-4 border-t border-slate-200 dark:border-[#23283B]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
              WCAG AAA/AA Auto-Contrast Engine
            </h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-[#94A3B8]">
            One of the most common pitfalls in visual storefront editors is merchants picking a bright yellow, pastel peach, or neon lime button color with hardcoded white text, rendering the CTA unreadable.
            DENEB UI eliminates this entirely:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-slate-200 dark:border-[#23283B] bg-white dark:bg-[#0A0D18] space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-900 dark:text-white">Light Button Background</span>
                <span className="text-[10px] font-mono text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-500/10 px-2 py-0.5 rounded font-semibold">
                  Auto: Dark Text
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-[#94A3B8]">
                If a button background has relative luminance &gt; 0.5 (e.g. yellow <code className="text-slate-900 dark:text-white">#facc15</code> or cyan <code className="text-slate-900 dark:text-white">#22d3ee</code>), <code className="text-slate-900 dark:text-white">getAutoContrastTextColor()</code> automatically resolves <code className="text-slate-900 dark:text-white">#0f172a</code> (dark slate).
              </p>
              <div className="p-3 rounded-lg bg-[#facc15] text-[#0f172a] text-center font-bold text-xs shadow-xs">
                Yellow CTA &rarr; Automatic Deep Slate Text (Contrast Ratio 12.8:1)
              </div>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 dark:border-[#23283B] bg-white dark:bg-[#0A0D18] space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-900 dark:text-white">Dark Button Background</span>
                <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-2 py-0.5 rounded font-semibold">
                  Auto: Light Text
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-[#94A3B8]">
                If a button background is dark (e.g. navy <code className="text-slate-900 dark:text-white">#1e3a8a</code> or emerald <code className="text-slate-900 dark:text-white">#064e3b</code>), the engine resolves <code className="text-slate-900 dark:text-white">#ffffff</code> (pure white).
              </p>
              <div className="p-3 rounded-lg bg-[#1e3a8a] text-[#ffffff] text-center font-bold text-xs shadow-xs">
                Navy CTA &rarr; Automatic Pure White Text (Contrast Ratio 11.2:1)
              </div>
            </div>
          </div>
        </section>

        {/* Industry Presets */}
        <section id="presets" className="space-y-4 pt-4 border-t border-slate-200 dark:border-[#23283B]">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-indigo-600 dark:text-[#818CF8]" />
            <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
              Pre-Configured Industry Presets (<code className="text-indigo-600 dark:text-[#818CF8]">THEME_PRESETS</code>)
            </h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-[#94A3B8]">
            Templates can import and extend 10 ready-to-use industry palettes using <code className="text-slate-900 dark:text-white">getCategoryTheme()</code>:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {Object.entries(THEME_PRESETS).map(([name, preset]) => (
              <div
                key={name}
                className="p-3 rounded-xl border border-slate-200 dark:border-[#23283B] bg-white dark:bg-[#0A0D17] space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs capitalize text-slate-900 dark:text-white">{name}</span>
                  <span
                    className="w-3.5 h-3.5 rounded-full border border-black/10 dark:border-white/20"
                    style={{ backgroundColor: preset.primaryColor }}
                  />
                </div>
                <div className="h-8 rounded-lg flex items-center justify-center text-[10px] font-mono font-bold"
                  style={{
                    backgroundColor: preset.primaryColor,
                    color: preset.buttonTextColor || '#ffffff',
                  }}
                >
                  {preset.primaryColor}
                </div>
                <div className="text-[10px] text-slate-500 dark:text-[#94A3B8] font-mono truncate">
                  Radius: {preset.borderRadius || '8px'}
                </div>
              </div>
            ))}
          </div>

          <CodeBlock
            code={`import { ThemeStyles, getCategoryTheme, THEME_PRESETS } from "@deneb-ui/ui";

// Extend any preset with custom merchant overrides
const customRestaurantTheme = getCategoryTheme("restaurant", {
  primaryColor: "#f59e0b",
  borderRadius: "16px",
  cardBg: "#1c1917",
});`}
            language="tsx"
            filename="theme-preset-example.ts"
          />
        </section>

        {/* Template Setup (App Router) */}
        <section id="template-setup" className="space-y-4 pt-4 border-t border-slate-200 dark:border-[#23283B]">
          <div className="flex items-center gap-2">
            <Code2 className="w-5 h-5 text-indigo-600 dark:text-[#818CF8]" />
            <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
              Template Root Layout Integration (Next.js App Router)
            </h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-[#94A3B8]">
            For optimal performance and zero Flash of Unstyled Content (FOUC), template developers should place <code className="text-slate-900 dark:text-white">&lt;ThemeStyles /&gt;</code> directly inside the HTML <code className="text-slate-900 dark:text-white">&lt;head&gt;</code> in <code className="text-slate-900 dark:text-white">app/layout.tsx</code>:
          </p>

          <CodeBlock
            code={`// app/layout.tsx
import type { Metadata } from "next";
import { ThemeStyles, SiteDataProvider, THEME_PRESETS } from "@deneb-ui/ui";
import initialSiteData from "@/data/site-data.json";
import "./globals.css";

export const metadata: Metadata = {
  title: initialSiteData.business?.name || "Storefront",
  description: initialSiteData.content?.heroSubtitle || "Welcome to our store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const activeTheme = initialSiteData.theme || THEME_PRESETS.luxury;

  return (
    <html lang="en">
      <head>
        {/* 1. Inject CSS variables into :root before page paint */}
        <ThemeStyles theme={activeTheme} />
      </head>
      <body className="bg-[var(--page-background)] text-[var(--page-text)] antialiased min-h-screen">
        {/* 2. SiteDataProvider connects visual editor postMessage streams */}
        <SiteDataProvider initialData={initialSiteData}>
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

        {/* Tokens Code Reference */}
        <section id="tokens" className="space-y-4 pt-4 border-t border-slate-200 dark:border-[#23283B]">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">Full CSS Variables Reference</h2>
          <p className="text-sm text-slate-600 dark:text-[#94A3B8]">
            All generated variables are directly available in your components, styles, or Tailwind utility classes:
          </p>
          <CodeBlock
            code={`:root {
  /* Brand Tokens */
  --brand-color: #d4af37;
  --color-primary: #d4af37;
  --color-secondary: #000000;
  --color-accent: #e5e5e5;

  /* Canvas & Text */
  --page-background: #0a0a0a;
  --page-text: #ffffff;
  --heading-color: #ffffff;
  --muted-text: rgba(248, 250, 252, 0.7);
  --color-border: rgba(255, 255, 255, 0.1);

  /* Card & Surface Tokens */
  --card-bg: #111a2e;
  --card-border: rgba(255, 255, 255, 0.09);
  --product-card-bg: #111a2e;
  --product-card-border: rgba(255, 255, 255, 0.09);

  /* Dedicated Button Tokens (Auto-Contrast safe) */
  --button-bg: #d4af37;
  --button-text: #000000;
  --button-primary-bg: #d4af37;
  --button-primary-text: #000000;
  --button-secondary-bg: rgba(255, 255, 255, 0.08);
  --button-secondary-text: #f8fafc;

  /* Dimensions & Typography */
  --border-radius: 8px;
  --heading-font: 'Playfair Display', serif;
  --body-font: 'Inter', sans-serif;
}`}
            language="css"
            filename="Generated :root Variables"
          />
        </section>

        {/* Responsive spacing */}
        <section id="responsive" className="space-y-4 pt-4 border-t border-slate-200 dark:border-[#23283B]">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">Responsive Section Spacing</h2>
          <p className="text-sm text-slate-600 dark:text-[#94A3B8]">
            <code className="text-slate-900 dark:text-white">EditableSection</code> padding tokens use fluid <code className="text-slate-900 dark:text-white">clamp()</code> values so vertical rhythm scales smoothly across mobile, tablet, and desktop viewports:
          </p>
          <CodeBlock
            code={`import { Section } from "@deneb-ui/ui";

<Section name="home-hero" padding="lg">
  {/* padding scales smoothly: clamp(2.5rem, 6vw, 6rem) 0 */}
</Section>`}
            language="tsx"
          />
          <Link
            href="/docs/responsive-design"
            className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-600 dark:text-[#818CF8] hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <span>Full responsive design guide</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </section>

        {/* Chromatic Shimmer */}
        <section id="chromatic" className="space-y-4 pt-4 border-t border-slate-200 dark:border-[#23283B]">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">Chromatic Text Effect</h2>
          <p className="text-sm text-slate-600 dark:text-[#94A3B8]">
            The signature holographic logo styling splits light into soft cyan and red-gold edges:
          </p>
          <div className="p-6 rounded-2xl border border-slate-200 bg-slate-950 dark:border-[#23283B] dark:bg-[#0A0D17] flex items-center justify-center shadow-xs">
            <span
              className="text-4xl font-black tracking-widest uppercase text-white font-sans"
              style={{
                textShadow:
                  '-2px 0 1px rgba(239,68,68,0.7), 2px 0 1px rgba(56,189,248,0.8), 0 0 20px rgba(129,140,248,0.4)',
              }}
            >
              DENEB UI
            </span>
          </div>
          <CodeBlock
            code={`textShadow: '-1.5px 0 0.5px rgba(239,68,68,0.7), 1.5px 0 0.5px rgba(56,189,248,0.8), 0 0 12px rgba(129,140,248,0.4)'`}
            language="tsx"
          />
        </section>

        <div className="pt-8 border-t border-slate-200 dark:border-[#23283B] flex justify-between items-center">
          <Link
            href="/docs/components/theme-styles"
            className="flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-[#94A3B8] hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <span>&larr; ThemeStyles Component API</span>
          </Link>
          <Link
            href="/docs/responsive-design"
            className="flex items-center gap-2 text-xs font-semibold text-indigo-600 dark:text-[#818CF8] hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <span>Next: Responsive Design &rarr;</span>
          </Link>
        </div>
      </div>

      <TableOfContents items={tocItems} />
    </div>
  );
}
