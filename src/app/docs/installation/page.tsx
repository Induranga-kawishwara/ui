'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  Terminal,
  FolderGit2,
  Boxes,
  CheckCircle2,
  ArrowRight,
  Zap,
  Code2,
  Layers,
} from 'lucide-react';
import { CodeBlock } from '@/components/docs/CodeBlock';
import { TableOfContents, TocItem } from '@/components/layout/TableOfContents';
import { DenebStarIcon } from '@/components/brand/DenebLogo';

export default function InstallationPage() {
  const [pm, setPm] = useState<'npm' | 'pnpm' | 'yarn' | 'bun'>('npm');
  const [framework, setFramework] = useState<'nextjs' | 'vite'>('nextjs');

  const tocItems: TocItem[] = [
    { id: 'quickstart', title: 'Quick Scaffolding' },
    { id: 'create-template', title: 'Use create-template' },
    { id: 'cli', title: 'Use the CLI' },
    { id: 'cli-deep-dive', title: 'CLI Init In-Depth' },
    { id: 'cli-flags', title: 'CLI Flags & Options' },
    { id: 'generated-files', title: 'Generated Files' },
    { id: 'responsive', title: 'Responsive Setup' },
    { id: 'existing', title: 'Manual Installation' },
  ];

  const getCliCommand = () => {
    switch (pm) {
      case 'pnpm':
        return 'pnpm dlx @deneb-ui/cli init';
      case 'yarn':
        return 'yarn dlx @deneb-ui/cli init';
      case 'bun':
        return 'bunx @deneb-ui/cli init';
      default:
        return 'npx @deneb-ui/cli init';
    }
  };

  const getPackageInstall = () => {
    switch (pm) {
      case 'pnpm':
        return 'pnpm add @deneb-ui/ui';
      case 'yarn':
        return 'yarn add @deneb-ui/ui';
      case 'bun':
        return 'bun add @deneb-ui/ui';
      default:
        return 'npm install @deneb-ui/ui';
    }
  };

  return (
    <div suppressHydrationWarning className="flex w-full gap-8 lg:gap-10">
      <div className="flex-1 min-w-0 py-6 space-y-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#94A3B8]">
          <Link href="/docs/installation" className="hover:text-white transition-colors">
            Docs
          </Link>
          <span>/</span>
          <span className="text-[#818CF8] font-semibold">Installation</span>
        </div>

        {/* Page Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-sans">
              Installation & CLI Init
            </h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#818CF8]/15 text-[#A5B4FC] border border-[#818CF8]/30 flex items-center gap-1 shadow-[0_0_10px_rgba(129,140,248,0.2)]">
              <DenebStarIcon className="w-2.5 h-2.5" />
              v2.0
            </span>
          </div>
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            How to initialize, adapt, and convert any frontend design into an editable DENEB storefront template with zero configuration fatigue.
          </p>
        </div>

        {/* Recommended Highlight Banner */}
        <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-xs sm:text-sm text-emerald-200/90 leading-relaxed">
          <strong className="font-semibold text-emerald-300">Recommended for new projects:</strong> Use <code className="bg-black/40 px-1.5 py-0.5 rounded font-mono text-white">npx @deneb-ui/create-template</code> to scaffold a pre-validated production template visually, or use <code className="bg-black/40 px-1.5 py-0.5 rounded font-mono text-white">npx @deneb-ui/cli init</code> to automatically convert an existing design into an editable Fivora storefront.
        </div>

        {/* 3 Pathway Cards */}
        <div id="quickstart" className="space-y-3">
          <p className="text-sm font-medium text-white">
            Choose the setup that matches your starting point.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Pathway 1 */}
            <a
              href="#create-template"
              className="p-5 rounded-2xl border border-[#23283B] bg-[#0A0D17] hover:border-[#818CF8]/50 hover:shadow-[0_0_20px_rgba(129,140,248,0.15)] transition-all group flex flex-col justify-between"
            >
              <div className="space-y-2">
                <h3 className="text-sm font-bold text-white group-hover:text-[#818CF8] transition-colors">Use create-template</h3>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  Build your storefront preset visually and generate a full production template.
                </p>
              </div>
            </a>

            {/* Pathway 2 */}
            <a
              href="#cli"
              className="p-5 rounded-2xl border border-[#23283B] bg-[#0A0D17] hover:border-[#818CF8]/50 hover:shadow-[0_0_20px_rgba(129,140,248,0.15)] transition-all group flex flex-col justify-between"
            >
              <div className="space-y-2">
                <h3 className="text-sm font-bold text-white group-hover:text-[#818CF8] transition-colors">Use the CLI</h3>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  Convert existing frontends or scaffold a supported template directly from your terminal.
                </p>
              </div>
            </a>

            {/* Pathway 3 */}
            <a
              href="#existing"
              className="p-5 rounded-2xl border border-[#23283B] bg-[#0A0D17] hover:border-[#818CF8]/50 hover:shadow-[0_0_20px_rgba(129,140,248,0.15)] transition-all group flex flex-col justify-between"
            >
              <div className="space-y-2">
                <h3 className="text-sm font-bold text-white group-hover:text-[#818CF8] transition-colors">Manual Setup</h3>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  Add @deneb-ui/ui directly as an npm dependency into an existing application.
                </p>
              </div>
            </a>
          </div>
        </div>

        {/* Section 1: Use create-template */}
        <section id="create-template" className="space-y-3 pt-6 border-t border-[#23283B]">
          <div className="space-y-1">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Use create-template
            </h2>
            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
              Build your preset visually, preview your choices, and generate a framework-specific setup command.
            </p>
          </div>

          <div className="pt-2">
            <Link
              href="/docs/templates"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-white text-black hover:bg-white/90 transition-all shadow-md"
            >
              <span>Open create-template</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <p className="text-xs text-[#64748B]">
            Available for Next.js, Vite, and React storefront presets.
          </p>
        </section>

        {/* Step-by-Step CLI Guide */}
        <section id="cli" className="space-y-6 pt-4 border-t border-[#23283B]">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Terminal className="w-5 h-5 text-[#818CF8]" />
              <h2 className="text-2xl font-bold text-white tracking-tight">
                Scaffold & Convert with the CLI
              </h2>
            </div>
            <p className="text-sm text-[#94A3B8] leading-relaxed">
              The official <code className="text-[#A5B4FC] bg-[#818CF8]/10 px-1 py-0.5 rounded font-mono">npx @deneb-ui/cli init</code> command powers both fresh project configuration and automatic conversion of external CSS designs into fully editable Fivora storefront templates.
            </p>
          </div>

          {/* Package Manager Selector */}
          <div className="space-y-3">
            <div className="flex items-center gap-1 border-b border-[#23283B] pb-1">
              {(['npm', 'pnpm', 'yarn', 'bun'] as const).map((item) => (
                <button
                  key={item}
                  onClick={() => setPm(item)}
                  className={`px-3 py-1 rounded-md text-xs font-mono font-medium transition-all ${
                    pm === item
                      ? 'text-[#818CF8] bg-[#818CF8]/10 border border-[#818CF8]/30 font-semibold'
                      : 'text-[#94A3B8] hover:text-white'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <CodeBlock code={getCliCommand()} language="bash" filename="terminal" />
          </div>

          {/* Interactive Prompts Breakdown */}
          <div className="p-5 rounded-2xl border border-[#23283B] bg-[#0A0D17] space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#CBD5E1] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#818CF8]" />
                <span>Interactive Configuration Prompts:</span>
              </h4>
              <span className="text-[11px] font-mono text-[#818CF8]">interactive or auto-detected</span>
            </div>
            <div className="space-y-3 text-xs font-mono text-[#94A3B8]">
              <div className="flex items-start gap-2.5">
                <span className="text-[#818CF8] font-bold">1.</span>
                <div className="space-y-0.5">
                  <span className="text-white font-semibold">Which style would you like to use?</span>
                  <p className="text-[#64748B] font-sans text-[11px]">Choose between Celestial Dark (Obsidian + Indigo glow), Clean Minimal, or High-Contrast E-Commerce.</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-[#818CF8] font-bold">2.</span>
                <div className="space-y-0.5">
                  <span className="text-white font-semibold">Which color would you like as base?</span>
                  <p className="text-[#64748B] font-sans text-[11px]">Sets your primary theme variables (e.g. Obsidian & Indigo <code className="text-[#818CF8]">#818CF8</code>, Emerald <code className="text-emerald-400">#10B981</code>, or Rose).</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-[#818CF8] font-bold">3.</span>
                <div className="space-y-0.5">
                  <span className="text-white font-semibold">Where is your global CSS file?</span>
                  <p className="text-[#64748B] font-sans text-[11px]">Automatically detects <code className="text-white">src/app/globals.css</code>, <code className="text-white">app/globals.css</code>, or custom stylesheet path.</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-[#818CF8] font-bold">4.</span>
                <div className="space-y-0.5">
                  <span className="text-white font-semibold">Configure import alias for components?</span>
                  <p className="text-[#64748B] font-sans text-[11px]">Sets path resolution (e.g. <code className="text-white">@/components</code>) matching your <code className="text-white">tsconfig.json</code>.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* In-Depth CLI Init Engine Breakdown */}
        <section id="cli-deep-dive" className="space-y-6 pt-6 border-t border-[#23283B]">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <Zap className="w-5 h-5 text-[#818CF8]" />
              <span>What Happens During `deneb init`</span>
            </h2>
            <p className="text-sm text-[#94A3B8] leading-relaxed">
              When executed in an existing Next.js project, <code className="text-[#A5B4FC] bg-[#818CF8]/10 px-1 py-0.5 rounded font-mono">npx @deneb-ui/cli init</code> activates <strong>Deneb ARC</strong> (Adaptive Refactoring Compiler) — an AST-based engine that transforms static React/Next.js storefronts into Fivora-editable templates while preserving your original design:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Step 1 */}
            <div className="p-5 rounded-2xl border border-[#23283B] bg-[#0A0D17] space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#818CF8]/20 text-[#818CF8] text-xs font-bold flex items-center justify-center font-mono">1</span>
                <h3 className="text-sm font-bold text-white">CSS Framework Detection</h3>
              </div>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Automatically scans <code className="text-white">package.json</code> and files to detect Tailwind CSS, shadcn/ui, HeroUI / NextUI, CSS Modules, or Vanilla CSS.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-5 rounded-2xl border border-[#23283B] bg-[#0A0D17] space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#818CF8]/20 text-[#818CF8] text-xs font-bold flex items-center justify-center font-mono">2</span>
                <h3 className="text-sm font-bold text-white">Timestamped Safe Backup</h3>
              </div>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Creates an automatic snapshot of modified files inside <code className="text-white">.deneb-backup-YYYY-MM-DD/</code> so you can instantly rollback at any moment.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-5 rounded-2xl border border-[#23283B] bg-[#0A0D17] space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#818CF8]/20 text-[#818CF8] text-xs font-bold flex items-center justify-center font-mono">3</span>
                <h3 className="text-sm font-bold text-white">Smart Action & Label Splitting</h3>
              </div>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                For interactive buttons (WhatsApp, Buy Now), it binds the URL to <code className="text-white">&lt;a&gt;</code> and visible text to nested <code className="text-white">&lt;span&gt;</code>, guaranteeing zero Fivora visual editing violations.
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-5 rounded-2xl border border-[#23283B] bg-[#0A0D17] space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#818CF8]/20 text-[#818CF8] text-xs font-bold flex items-center justify-center font-mono">4</span>
                <h3 className="text-sm font-bold text-white">Recipe Matching & Manifest</h3>
              </div>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Matches signatures against pre-calibrated recipes (like <code className="text-[#818CF8]">ecommerce-storefront</code>) and writes out <code className="text-white">fivora-template.json</code> and <code className="text-white">site-data.json</code>.
              </p>
            </div>
          </div>

          {/* Code Illustration */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#CBD5E1]">
              How the AST Converter transforms static markup:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <span className="text-[11px] font-mono text-rose-400 font-semibold">Before (Hardcoded Static HTML):</span>
                <CodeBlock
                  code={`<a href="https://wa.me/15554829012" className="btn btn-whatsapp">\n  <WhatsAppIcon />\n  Start a Conversation\n</a>`}
                  language="tsx"
                  filename="components/Hero.tsx"
                />
              </div>

              <div className="space-y-1.5">
                <span className="text-[11px] font-mono text-emerald-400 font-semibold">After `deneb init` (Fivora Strict Visual Editing):</span>
                <CodeBlock
                  code={`<a \n  href={siteData?.content?.home?.whatsappCtaUrl || "https://wa.me/15554829012"}\n  data-preview-field-path="home.whatsappCtaUrl"\n  className="btn btn-whatsapp"\n>\n  <WhatsAppIcon />\n  <span data-preview-field-path="home.whatsappCtaLabel">\n    {siteData?.content?.home?.whatsappCtaLabel || "Start a Conversation"}\n  </span>\n</a>`}
                  language="tsx"
                  filename="components/Hero.tsx"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CLI Flags & Options */}
        <section id="cli-flags" className="space-y-4 pt-6 border-t border-[#23283B]">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <Terminal className="w-5 h-5 text-[#818CF8]" />
            <span>CLI Flags & Non-Interactive Usage</span>
          </h2>
          <p className="text-sm text-[#94A3B8] leading-relaxed">
            You can customize or automate `deneb init` in CI/CD scripts and automated workflows using command line flags:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-xs sm:text-sm text-left border border-[#23283B] rounded-xl overflow-hidden">
              <thead className="bg-[#0E1220] text-[#CBD5E1] font-mono uppercase text-[11px] border-b border-[#23283B]">
                <tr>
                  <th className="p-3 sm:p-4">Flag</th>
                  <th className="p-3 sm:p-4">Description</th>
                  <th className="p-3 sm:p-4">Example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#23283B] text-[#94A3B8]">
                <tr>
                  <td className="p-3 sm:p-4 font-mono font-bold text-white">-y, --yes</td>
                  <td className="p-3 sm:p-4">Skip interactive prompts and apply recommended defaults automatically</td>
                  <td className="p-3 sm:p-4 font-mono text-emerald-400">npx @deneb-ui/cli init -y</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-mono font-bold text-white">--recipe &lt;name&gt;</td>
                  <td className="p-3 sm:p-4">Force a specific conversion recipe (e.g. <code className="text-[#818CF8]">ecommerce-storefront</code>, <code className="text-[#818CF8]">vanta-shoes-store</code>)</td>
                  <td className="p-3 sm:p-4 font-mono text-emerald-400">--recipe ecommerce-storefront</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-mono font-bold text-white">--dry-run</td>
                  <td className="p-3 sm:p-4">Simulate conversion and print extracted field paths without writing to disk</td>
                  <td className="p-3 sm:p-4 font-mono text-emerald-400">--dry-run</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-mono font-bold text-white">--explain</td>
                  <td className="p-3 sm:p-4">Print ARC transformation plan with confidence scores before applying changes</td>
                  <td className="p-3 sm:p-4 font-mono text-emerald-400">--explain</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-mono font-bold text-white">--legacy</td>
                  <td className="p-3 sm:p-4">Use the legacy regex converter instead of Deneb ARC (default engine)</td>
                  <td className="p-3 sm:p-4 font-mono text-emerald-400">--legacy</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-mono font-bold text-white">--skip-backup</td>
                  <td className="p-3 sm:p-4">Skip generating the timestamped rollback folder <code className="text-white">.deneb-backup-*</code></td>
                  <td className="p-3 sm:p-4 font-mono text-emerald-400">--skip-backup</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Generated Files Architecture */}
        <section id="generated-files" className="space-y-4 pt-6 border-t border-[#23283B]">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <Boxes className="w-5 h-5 text-[#818CF8]" />
            <span>Generated File Structure</span>
          </h2>
          <p className="text-sm text-[#94A3B8] leading-relaxed">
            After running <code className="text-white bg-black/40 px-1.5 py-0.5 rounded font-mono">deneb init</code>, your repository is enriched with the following architecture:
          </p>

          <div className="p-5 rounded-2xl border border-[#23283B] bg-[#0A0D17] font-mono text-xs text-[#CBD5E1] space-y-3">
            <div className="text-emerald-400 font-bold">your-storefront/</div>
            <div className="pl-4 space-y-1 text-[#94A3B8]">
              <div>├── <strong className="text-white">fivora-template.json</strong> <span className="text-[#64748B]"># Editor schema &amp; strict mode visual contract definition</span></div>
              <div>├── <strong className="text-white">deneb.json</strong> <span className="text-[#64748B]"># Celestial styles, color tokens &amp; component import aliases</span></div>
              <div>├── <strong className="text-white">src/data/site-data.json</strong> <span className="text-[#64748B]"># Real-time content bank connected to the visual editor</span></div>
              <div>├── <strong className="text-white">src/components/deneb-ui/</strong> <span className="text-[#64748B]"># Smart commerce &amp; UI primitives (button, quick view, drawer)</span></div>
              <div>└── <strong className="text-white">.deneb-backup-XXXX/</strong> <span className="text-[#64748B]"># Automated non-destructive backup for safe rollback</span></div>
            </div>
          </div>
        </section>

        {/* Responsive setup */}
        <section id="responsive" className="space-y-4 pt-6 border-t border-[#23283B]">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Responsive Setup (Automatic)
          </h2>
          <p className="text-sm text-[#94A3B8] leading-relaxed">
            All DENEB UI components adapt to mobile, tablet, and desktop. Wrap your app in{' '}
            <code className="text-white bg-black/40 px-1.5 py-0.5 rounded font-mono">SiteDataProvider</code> — it
            automatically injects <code className="text-white bg-black/40 px-1.5 py-0.5 rounded font-mono">ResponsiveBaseStyles</code>{' '}
            with viewport-aware CSS for nav, grids, filters, dialogs, and commerce bars.
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
          <Link
            href="/docs/responsive-design"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#818CF8] hover:text-white transition-colors"
          >
            <span>Read the full Responsive Design guide</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </section>

        {/* Existing Project Manual Installation */}
        <section id="existing" className="space-y-6 pt-4 border-t border-[#23283B]">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Manual Package Setup
            </h2>
            <p className="text-sm text-[#94A3B8]">
              If you prefer installing the framework package without the interactive CLI:
            </p>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase text-[#CBD5E1]">Step 1: Install @deneb-ui/ui</span>
              <CodeBlock code={getPackageInstall()} language="bash" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase text-[#CBD5E1]">Step 2: Import and render components</span>
              <CodeBlock
                code={`import {\n  SiteDataProvider,\n  Button,\n  ContactActions,\n  Grid,\n  Section,\n  ProductCard,\n} from "@deneb-ui/ui";\n\nexport default function Page() {\n  return (\n    <SiteDataProvider>\n      <main>\n        <Section name="home-hero" padding="lg">\n          <h1>My Storefront</h1>\n          <ContactActions\n            phone="+1234567890"\n            whatsapp="1234567890"\n            email="hello@example.com"\n            layout="wrap"\n          />\n        </Section>\n        <Section name="home-products" padding="md">\n          <Grid columns={{ mobile: 1, tablet: 2, desktop: 3 }} gap="md">\n            {/* ProductCard items */}\n          </Grid>\n        </Section>\n      </main>\n    </SiteDataProvider>\n  );\n}`}
                language="tsx"
                filename="app/page.tsx"
              />
            </div>
          </div>
        </section>

        {/* Next link */}
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

      {/* Right Sidebar Table of Contents */}
      <TableOfContents items={tocItems} />
    </div>
  );
}

