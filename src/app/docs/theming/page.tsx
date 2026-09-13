'use client';

import React from 'react';
import Link from 'next/link';
import { Palette, Sparkles, ArrowRight, Layers, Sliders } from 'lucide-react';
import { CodeBlock } from '@/components/docs/CodeBlock';
import { TableOfContents, TocItem } from '@/components/layout/TableOfContents';
import { DenebStarIcon } from '@/components/brand/DenebLogo';

export default function ThemingPage() {
  const tocItems: TocItem[] = [
    { id: 'overview', title: 'Celestial Palette' },
    { id: 'tokens', title: 'CSS Variables' },
    { id: 'theme-styles', title: 'ThemeStyles Component' },
    { id: 'responsive', title: 'Responsive Spacing' },
    { id: 'chromatic', title: 'Chromatic Shimmer' },
  ];

  return (
    <div className="flex w-full gap-8 lg:gap-10">
      <div className="flex-1 min-w-0 py-6 space-y-10">
        <div className="flex items-center gap-2 text-xs text-[#94A3B8]">
          <Link href="/docs/installation" className="hover:text-white transition-colors">
            Docs
          </Link>
          <span>/</span>
          <span className="text-[#818CF8] font-semibold">Theming & Tokens</span>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-sans">
              Theming & Design Tokens
            </h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#818CF8]/15 text-[#A5B4FC] border border-[#818CF8]/30 flex items-center gap-1">
              <DenebStarIcon className="w-2.5 h-2.5" />
              Cosmic System
            </span>
          </div>
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            DENEB UI features a bespoke celestial color system with obsidian dark layers, periwinkle accents, and chromatic aberration typography.
          </p>
        </div>

        {/* Palette Color Swatches */}
        <section id="overview" className="space-y-4">
          <h2 className="text-xl font-bold text-white tracking-tight">
            Celestial Color Palette
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 rounded-xl border border-[#23283B] bg-[#08090E] space-y-2">
              <div className="h-12 rounded-lg bg-[#08090E] border border-white/10" />
              <div>
                <div className="text-xs font-bold text-white">Obsidian Base</div>
                <div className="text-[11px] font-mono text-[#94A3B8]">#08090E</div>
              </div>
            </div>

            <div className="p-3 rounded-xl border border-[#23283B] bg-[#0E111C] space-y-2">
              <div className="h-12 rounded-lg bg-[#0E111C] border border-white/10" />
              <div>
                <div className="text-xs font-bold text-white">Cosmic Card</div>
                <div className="text-[11px] font-mono text-[#94A3B8]">#0E111C</div>
              </div>
            </div>

            <div className="p-3 rounded-xl border border-[#23283B] bg-[#141829] space-y-2">
              <div className="h-12 rounded-lg bg-[#818CF8] shadow-[0_0_15px_rgba(129,140,248,0.5)]" />
              <div>
                <div className="text-xs font-bold text-white">Deneb Star Accent</div>
                <div className="text-[11px] font-mono text-[#A5B4FC]">#818CF8</div>
              </div>
            </div>

            <div className="p-3 rounded-xl border border-[#23283B] bg-[#141829] space-y-2">
              <div className="h-12 rounded-lg bg-[#6366F1] shadow-[0_0_15px_rgba(99,102,241,0.5)]" />
              <div>
                <div className="text-xs font-bold text-white">Indigo Core</div>
                <div className="text-[11px] font-mono text-[#A5B4FC]">#6366F1</div>
              </div>
            </div>
          </div>
        </section>

        {/* Tokens Code */}
        <section id="tokens" className="space-y-4 pt-4 border-t border-[#23283B]">
          <h2 className="text-xl font-bold text-white tracking-tight">CSS Variables & Tokens</h2>
          <p className="text-sm text-[#94A3B8]">
            DENEB UI uses modern OKLCH & RGB variables that can be customized in your global CSS stylesheet:
          </p>
          <CodeBlock
            code={`:root {
  --background: #08090E;
  --foreground: #F1F5F9;
  --card: #0E111C;
  --card-foreground: #F1F5F9;
  --primary: #818CF8;
  --primary-foreground: #FFFFFF;
  --secondary: #161B2E;
  --secondary-foreground: #CBD5E1;
  --border: rgba(129, 140, 248, 0.18);
  --ring: #818CF8;
  --radius: 0.75rem;
}`}
            language="css"
            filename="src/app/globals.css"
          />
        </section>

        {/* ThemeStyles */}
        <section id="theme-styles" className="space-y-4 pt-4 border-t border-[#23283B]">
          <h2 className="text-xl font-bold text-white tracking-tight">ThemeStyles Component</h2>
          <p className="text-sm text-[#94A3B8]">
            Inject brand tokens and responsive base CSS from <code className="text-white">@deneb-ui/ui</code>:
          </p>
          <CodeBlock
            code={`import { ThemeStyles, getCategoryTheme } from "@deneb-ui/ui";

const theme = getCategoryTheme("retail", {
  primaryColor: "#818CF8",
  sectionPadding: "5rem",
});

export default function Layout({ children }) {
  return (
    <>
      <ThemeStyles theme={theme} />
      {children}
    </>
  );
}`}
            language="tsx"
            filename="app/layout.tsx"
          />
          <p className="text-xs text-[#64748B]">
            <code className="text-white">ThemeStyles</code> includes <code className="text-white">ResponsiveBaseStyles</code> automatically — viewport rules for all DENEB components ship with your theme.
          </p>
        </section>

        {/* Responsive spacing */}
        <section id="responsive" className="space-y-4 pt-4 border-t border-[#23283B]">
          <h2 className="text-xl font-bold text-white tracking-tight">Responsive Section Spacing</h2>
          <p className="text-sm text-[#94A3B8]">
            <code className="text-white">EditableSection</code> padding tokens use fluid <code className="text-white">clamp()</code> values so vertical rhythm scales from phone to desktop:
          </p>
          <CodeBlock
            code={`import { Section } from "@deneb-ui/ui";

<Section name="home-hero" padding="lg">
  {/* padding scales: clamp(2.5rem, 6vw, 6rem) 0 */}
</Section>`}
            language="tsx"
          />
          <Link
            href="/docs/responsive-design"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#818CF8] hover:text-white transition-colors"
          >
            <span>Full responsive design guide</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </section>

        {/* Chromatic Shimmer */}
        <section id="chromatic" className="space-y-4 pt-4 border-t border-[#23283B]">
          <h2 className="text-xl font-bold text-white tracking-tight">Chromatic Text Effect</h2>
          <p className="text-sm text-[#94A3B8]">
            The signature holographic logo styling splits light into soft cyan and red-gold edges:
          </p>
          <div className="p-6 rounded-2xl border border-[#23283B] bg-[#0A0D17] flex items-center justify-center">
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

        <div className="pt-8 border-t border-[#23283B] flex justify-end">
          <Link
            href="/docs/responsive-design"
            className="flex items-center gap-2 text-xs font-semibold text-[#818CF8] hover:text-white transition-colors"
          >
            <span>Next: Responsive Design</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <TableOfContents items={tocItems} />
    </div>
  );
}
