'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Copy,
  Check,
  ChevronLeft,
  ChevronRight,
  Code2,
  Eye,
} from 'lucide-react';
import { CodeBlock } from './CodeBlock';
import { TableOfContents, TocItem } from '@/components/layout/TableOfContents';
import { DenebStarIcon } from '@/components/brand/DenebLogo';

export interface PropDefinition {
  name: string;
  type: string;
  defaultValue?: string;
  description: string;
  required?: boolean;
}

export interface ExampleVariant {
  title: string;
  description?: string;
  preview: React.ReactNode;
  code: string;
}

export interface ComponentDocPageProps {
  title: string;
  description: string;
  category?: string;
  cliCommand?: string;
  previewComponent: React.ReactNode;
  previewCode: string;
  usageCode: string;
  props?: PropDefinition[];
  variants?: ExampleVariant[];
  prevPage?: { title: string; href: string };
  nextPage?: { title: string; href: string };
  badge?: string;
}

export function ComponentDocPage({
  title,
  description,
  category = 'Components',
  cliCommand,
  previewComponent,
  previewCode,
  usageCode,
  props = [],
  variants = [],
  prevPage,
  nextPage,
  badge = 'Interactive',
}: ComponentDocPageProps) {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const [packageManager, setPackageManager] = useState<'npm' | 'pnpm' | 'yarn' | 'bun'>('npm');
  const [copiedPage, setCopiedPage] = useState(false);

  const getInstallSnippet = (pm: 'npm' | 'pnpm' | 'yarn' | 'bun') => {
    switch (pm) {
      case 'pnpm':
        return cliCommand ? cliCommand.replace('npx', 'pnpm dlx') : `pnpm dlx @deneb-ui/cli add ${title.toLowerCase()}`;
      case 'yarn':
        return cliCommand ? cliCommand.replace('npx', 'yarn dlx') : `yarn dlx @deneb-ui/cli add ${title.toLowerCase()}`;
      case 'bun':
        return cliCommand ? cliCommand.replace('npx', 'bunx') : `bunx @deneb-ui/cli add ${title.toLowerCase()}`;
      default:
        return cliCommand || `npx @deneb-ui/cli add ${title.toLowerCase()}`;
    }
  };

  const handleCopyPage = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopiedPage(true);
      setTimeout(() => setCopiedPage(false), 2000);
    } catch {
      // fallback
    }
  };

  const tocItems: TocItem[] = [
    { id: 'preview', title: 'Preview' },
    { id: 'installation', title: 'Installation' },
    { id: 'usage', title: 'Usage' },
    ...(props.length > 0 ? [{ id: 'props', title: 'Props Reference' }] : []),
    ...(variants.length > 0 ? [{ id: 'examples', title: 'Examples & Variants' }] : []),
  ];

  return (
    <div suppressHydrationWarning className="flex w-full min-h-full">
      {/* Main Content Area */}
      <div className="flex-1 min-w-0 px-4 sm:px-6 lg:px-8 xl:px-12 py-8 space-y-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-[#94A3B8]">
          <Link href="/docs/installation" className="hover:text-slate-900 dark:hover:text-white transition-colors">
            Docs
          </Link>
          <span>/</span>
          <span className="text-slate-700 dark:text-[#CBD5E1]">{category}</span>
          <span>/</span>
          <span className="text-indigo-600 dark:text-[#818CF8] font-semibold">{title}</span>
        </div>

        {/* Page Header */}
        <div className="space-y-3">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-3">
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white font-sans">
                {title}
              </h1>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-600 border border-indigo-200 dark:bg-[#818CF8]/15 dark:text-[#A5B4FC] dark:border-[#818CF8]/30 flex items-center gap-1 shadow-sm dark:shadow-[0_0_10px_rgba(129,140,248,0.2)]">
                <DenebStarIcon className="w-2.5 h-2.5" />
                {badge}
              </span>
            </div>

            {/* Quick Actions */}
            <button
              onClick={handleCopyPage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-[#23283B] bg-slate-100/80 dark:bg-[#121625] text-xs font-medium text-slate-700 dark:text-[#CBD5E1] hover:text-slate-950 dark:hover:text-white hover:border-slate-300 dark:hover:border-[#818CF8]/40 transition-all"
            >
              {copiedPage ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-emerald-600 dark:text-emerald-400">Copied URL</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-500 dark:text-[#94A3B8]" />
                  <span>Copy Page</span>
                </>
              )}
            </button>
          </div>

          <p className="text-base sm:text-lg text-slate-600 dark:text-[#94A3B8] leading-relaxed">
            {description}
          </p>
        </div>

        {/* Interactive Preview Canvas */}
        <section id="preview" className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 p-1 rounded-xl border border-slate-200 dark:border-[#23283B] bg-slate-100 dark:bg-[#0E1220]">
              <button
                onClick={() => setActiveTab('preview')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === 'preview'
                    ? 'bg-indigo-600 text-white shadow-sm dark:bg-[#818CF8] dark:shadow-[0_0_12px_rgba(129,140,248,0.35)]'
                    : 'text-slate-600 hover:text-slate-950 dark:text-[#94A3B8] dark:hover:text-white'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Preview</span>
              </button>
              <button
                onClick={() => setActiveTab('code')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === 'code'
                    ? 'bg-indigo-600 text-white shadow-sm dark:bg-[#818CF8] dark:shadow-[0_0_12px_rgba(129,140,248,0.35)]'
                    : 'text-slate-600 hover:text-slate-950 dark:text-[#94A3B8] dark:hover:text-white'
                }`}
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>Code</span>
              </button>
            </div>
          </div>

          {activeTab === 'preview' ? (
            <div className="relative min-h-[260px] sm:min-h-[300px] w-full rounded-2xl border border-slate-200 bg-slate-50/70 dark:border-[#23283B] dark:bg-[#0A0D17] cosmic-grid flex items-center justify-center p-2 sm:p-5 lg:p-7 overflow-hidden shadow-sm dark:shadow-xl">
              {/* Radial celestial ambient light (dark mode only) */}
              <div className="absolute inset-0 cosmic-radial-glow pointer-events-none opacity-0 dark:opacity-100 transition-opacity" />
              <div className="relative z-10 w-full flex items-center justify-center overflow-x-auto">
                {previewComponent}
              </div>
            </div>
          ) : (
            <CodeBlock code={previewCode} language="tsx" filename={`${title}.tsx`} />
          )}
        </section>

        {/* Installation Section */}
        <section id="installation" className="space-y-4 pt-4 border-t border-slate-200 dark:border-[#23283B]">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
            <span>Installation</span>
          </h2>
          <p className="text-sm text-slate-600 dark:text-[#94A3B8]">
            Add this component to your project using the DENEB UI CLI or install the framework package directly:
          </p>

          <div className="space-y-3">
            {/* Package manager tabs */}
            <div className="flex items-center gap-1 border-b border-slate-200 dark:border-[#23283B] pb-1 overflow-x-auto">
              {(['npm', 'pnpm', 'yarn', 'bun'] as const).map((pm) => (
                <button
                  key={pm}
                  onClick={() => setPackageManager(pm)}
                  className={`px-3 py-1 rounded-md text-xs font-mono font-medium transition-all shrink-0 ${
                    packageManager === pm
                      ? 'text-indigo-600 bg-indigo-50 border border-indigo-200 font-semibold dark:text-[#818CF8] dark:bg-[#818CF8]/10 dark:border-[#818CF8]/30'
                      : 'text-slate-600 hover:text-slate-950 dark:text-[#94A3B8] dark:hover:text-white'
                  }`}
                >
                  {pm}
                </button>
              ))}
            </div>

            <CodeBlock
              code={getInstallSnippet(packageManager)}
              language="bash"
              filename="terminal"
            />
          </div>
        </section>

        {/* Usage Section */}
        <section id="usage" className="space-y-4 pt-4 border-t border-slate-200 dark:border-[#23283B]">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">Usage</h2>
          <p className="text-sm text-slate-600 dark:text-[#94A3B8]">
            Import and integrate into your React or Next.js page:
          </p>
          <CodeBlock code={usageCode} language="tsx" filename="page.tsx" />
        </section>

        {/* Props Reference Table */}
        {props.length > 0 && (
          <section id="props" className="space-y-4 pt-4 border-t border-slate-200 dark:border-[#23283B]">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">Props Reference</h2>
            <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white dark:border-[#23283B] dark:bg-[#0A0D17]">
              <table className="w-full text-left text-xs min-w-[540px]">
                <thead className="border-b border-slate-200 bg-slate-50 text-slate-700 dark:border-[#23283B] dark:bg-[#0E1220] dark:text-[#CBD5E1] uppercase font-mono tracking-wider">
                  <tr>
                    <th className="px-4 py-3">Prop</th>
                    <th className="px-4 py-3">Type</th>
                    <th className="px-4 py-3">Default</th>
                    <th className="px-4 py-3">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600 dark:divide-white/5 dark:text-[#94A3B8]">
                  {props.map((p) => (
                    <tr key={p.name} className="hover:bg-slate-50 dark:hover:bg-white/[0.02] transition-colors">
                      <td className="px-4 py-3 font-mono font-semibold text-indigo-600 dark:text-[#818CF8]">
                        {p.name}
                        {p.required && <span className="text-rose-500 ml-1">*</span>}
                      </td>
                      <td className="px-4 py-3 font-mono text-slate-800 dark:text-[#CBD5E1]">{p.type}</td>
                      <td className="px-4 py-3 font-mono text-slate-400 dark:text-[#64748B]">
                        {p.defaultValue || '—'}
                      </td>
                      <td className="px-4 py-3 leading-relaxed">{p.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Variants & Examples */}
        {variants.length > 0 && (
          <section id="examples" className="space-y-8 pt-4 border-t border-slate-200 dark:border-[#23283B]">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">Examples & Variants</h2>
            {variants.map((v, i) => (
              <div key={i} className="space-y-3">
                <h3 className="text-base font-semibold text-slate-900 dark:text-white">{v.title}</h3>
                {v.description && (
                  <p className="text-xs text-slate-600 dark:text-[#94A3B8]">{v.description}</p>
                )}
                <div className="min-h-[160px] rounded-xl border border-slate-200 bg-slate-50/70 dark:border-[#23283B] dark:bg-[#0A0D17] flex items-center justify-center p-6">
                  {v.preview}
                </div>
                <CodeBlock code={v.code} language="tsx" />
              </div>
            ))}
          </section>
        )}

        {/* Pagination Navigation */}
        <div className="flex items-center justify-between pt-8 border-t border-slate-200 dark:border-[#23283B]">
          {prevPage ? (
            <Link
              href={prevPage.href}
              className="flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-indigo-600 dark:text-[#94A3B8] dark:hover:text-[#818CF8] transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>{prevPage.title}</span>
            </Link>
          ) : (
            <div />
          )}

          {nextPage ? (
            <Link
              href={nextPage.href}
              className="flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-indigo-600 dark:text-[#94A3B8] dark:hover:text-[#818CF8] transition-colors"
            >
              <span>{nextPage.title}</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>

      {/* Right Sidebar Table of Contents */}
      <TableOfContents items={tocItems} />
    </div>
  );
}
