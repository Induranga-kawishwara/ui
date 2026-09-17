'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { DocsHeader } from '@/components/layout/DocsHeader';
import { DenebLogo, DenebStarIcon } from '@/components/brand/DenebLogo';
import {
  ContactActions,
  LocationCard,
  BusinessHours,
  SocialLinks,
} from '@/components/deneb-ui';
import {
  ArrowRight,
  Sparkles,
  Zap,
  ShieldCheck,
  Terminal,
  ShoppingBag,
  Layers,
  Copy,
  Check,
  Star,
  ExternalLink,
  Code2,
} from 'lucide-react';

export function HomeClient() {
  const [activeTab, setActiveTab] = useState<'contact' | 'product' | 'hours' | 'primitives'>('contact');
  const [copiedCli, setCopiedCli] = useState(false);

  const handleCopyCli = async () => {
    try {
      await navigator.clipboard.writeText('npx @deneb-ui/create-template my-store');
      setCopiedCli(true);
      setTimeout(() => setCopiedCli(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 dark:bg-[#08090E] dark:text-[#F1F5F9] transition-colors duration-150 selection:bg-[#818CF8]/30 selection:text-white">
      {/* Top Header */}
      <DocsHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-16 sm:pt-24 sm:pb-28">
        {/* Ambient celestial glows & cosmic grid */}
        <div className="absolute inset-0 cosmic-radial-glow pointer-events-none opacity-0 dark:opacity-100 transition-opacity" />
        <div className="absolute inset-0 cosmic-grid opacity-20 dark:opacity-40 pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8">
          {/* Logo badge */}
          <div className="inline-flex items-center justify-center">
            <DenebLogo size="lg" asLink={false} showVersion />
          </div>

          {/* Headline */}
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 dark:text-white font-sans break-words leading-[1.15]">
              The Celestial React Framework for{' '}
              <span
                className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-800 dark:from-white dark:via-[#CBD5E1] dark:to-[#818CF8] bg-clip-text text-transparent block sm:inline"
              >
                High-Converting Storefronts
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-slate-600 dark:text-[#94A3B8] leading-relaxed px-2">
              Unopinionated shadcn-style primitives enhanced with smart commerce actions: 1-click WhatsApp chat, dynamic operating hours, location routing, and storefront sections.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2 w-full max-w-xs sm:max-w-none mx-auto">
            <Link
              href="/docs/installation"
              className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-[#6366F1] to-[#818CF8] text-white shadow-[0_0_24px_rgba(129,140,248,0.4)] hover:shadow-[0_0_36px_rgba(129,140,248,0.6)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 shrink-0" />
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </Link>

            <Link
              href="/docs/components/button"
              className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-sm bg-slate-100 text-slate-900 border border-slate-200 hover:border-slate-300 hover:bg-slate-200/80 dark:bg-[#121625] dark:text-white dark:border-[#23283B] dark:hover:border-[#818CF8]/50 dark:hover:bg-[#818CF8]/10 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <Layers className="w-4 h-4 text-indigo-600 dark:text-[#818CF8] shrink-0" />
              <span>Browse Components</span>
            </Link>
          </div>

          {/* Quick Terminal Snippet */}
          <div className="pt-2 flex justify-center max-w-full px-2">
            <div
              onClick={handleCopyCli}
              className="group inline-flex items-center justify-between gap-2 sm:gap-3 px-3 sm:px-4 py-2 rounded-xl border border-slate-200 bg-slate-50/90 text-xs font-mono text-slate-700 hover:border-slate-300 hover:bg-slate-100 dark:border-[#23283B] dark:bg-[#0A0D17]/90 dark:text-[#CBD5E1] dark:hover:border-[#818CF8]/50 dark:hover:bg-[#0E1220] transition-all cursor-pointer shadow-sm dark:shadow-lg max-w-full overflow-hidden"
            >
              <Terminal className="w-3.5 h-3.5 text-indigo-600 dark:text-[#818CF8] shrink-0" />
              <span className="truncate">npx @deneb-ui/create-template my-store</span>
              <button
                className="p-1 rounded text-slate-500 dark:text-[#94A3B8] group-hover:text-slate-900 dark:group-hover:text-white transition-colors shrink-0"
                title="Copy command"
              >
                {copiedCli ? (
                  <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Live Interactive Showcase Canvas */}
      <section className="relative max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 pb-16 sm:pb-24 w-full">
        <div className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-slate-50/70 dark:border-[#23283B] dark:bg-[#0A0D17] shadow-lg dark:shadow-2xl overflow-hidden">
          {/* Header tab switcher */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-slate-200 bg-slate-100/80 dark:border-[#23283B] dark:bg-[#0E111C]/80 flex-wrap gap-3">
            <div className="flex items-center gap-2">
              <DenebStarIcon className="w-4 h-4 text-indigo-600 dark:text-[#818CF8]" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                Live Playground
              </span>
            </div>

            <div className="flex items-center gap-1 p-1 rounded-xl bg-white border border-slate-200 dark:bg-[#08090E] dark:border-[#23283B] overflow-x-auto max-w-full">
              <button
                onClick={() => setActiveTab('contact')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition-all ${activeTab === 'contact'
                    ? 'bg-indigo-600 text-white shadow-sm dark:bg-[#818CF8] dark:shadow-[0_0_12px_rgba(129,140,248,0.3)]'
                    : 'text-slate-600 hover:text-slate-950 dark:text-[#94A3B8] dark:hover:text-white'
                  }`}
              >
                Smart Actions
              </button>
              <button
                onClick={() => setActiveTab('product')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition-all ${activeTab === 'product'
                    ? 'bg-indigo-600 text-white shadow-sm dark:bg-[#818CF8] dark:shadow-[0_0_12px_rgba(129,140,248,0.3)]'
                    : 'text-slate-600 hover:text-slate-950 dark:text-[#94A3B8] dark:hover:text-white'
                  }`}
              >
                Storefront Cards
              </button>
              <button
                onClick={() => setActiveTab('hours')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition-all ${activeTab === 'hours'
                    ? 'bg-indigo-600 text-white shadow-sm dark:bg-[#818CF8] dark:shadow-[0_0_12px_rgba(129,140,248,0.3)]'
                    : 'text-slate-600 hover:text-slate-950 dark:text-[#94A3B8] dark:hover:text-white'
                  }`}
              >
                Business Hours
              </button>
              <button
                onClick={() => setActiveTab('primitives')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition-all ${activeTab === 'primitives'
                    ? 'bg-indigo-600 text-white shadow-sm dark:bg-[#818CF8] dark:shadow-[0_0_12px_rgba(129,140,248,0.3)]'
                    : 'text-slate-600 hover:text-slate-950 dark:text-[#94A3B8] dark:hover:text-white'
                  }`}
              >
                Glow Primitives
              </button>
            </div>
          </div>

          {/* Canvas Render Area */}
          <div className="relative min-h-[320px] sm:min-h-[360px] p-4 sm:p-8 md:p-12 flex items-center justify-center cosmic-grid overflow-hidden">
            <div className="absolute inset-0 cosmic-radial-glow pointer-events-none opacity-0 dark:opacity-100 transition-opacity" />

            <div className="relative z-10 w-full flex items-center justify-center">
              {activeTab === 'contact' && (
                <div className="space-y-4 max-w-xl w-full text-center p-6 sm:p-8 rounded-2xl border border-slate-200 bg-white/90 dark:border-[#23283B] dark:bg-[#0E1220]/90 backdrop-blur-md shadow-xl">
                  <span className="text-[10px] font-mono uppercase text-indigo-600 dark:text-[#818CF8] font-bold">
                    Multi-Channel Fallback
                  </span>
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white">Direct Customer Actions</h3>
                  <p className="text-xs text-slate-600 dark:text-[#94A3B8] max-w-md mx-auto">
                    Buttons automatically hide if merchant data is omitted. Try clicking!
                  </p>
                  <div className="flex justify-center pt-2">
                    <ContactActions
                      phone="+1 (555) 482-9012"
                      whatsapp="15554829012"
                      email="concierge@deneb-ui.dev"
                      layout="wrap"
                      size="md"
                    />
                  </div>
                </div>
              )}

              {activeTab === 'product' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl w-full">
                  <div className="rounded-2xl border border-slate-200 bg-white dark:border-[#23283B] dark:bg-[#0E111C] p-4 space-y-3 shadow-md hover:border-indigo-400 dark:hover:border-[#818CF8]/50 transition-all group flex flex-col justify-between">
                    <div className="relative aspect-video rounded-xl bg-gradient-to-tr from-indigo-50 to-slate-100 dark:from-[#1E1B4B] dark:to-[#0F172A] flex items-center justify-center overflow-hidden border border-slate-200 dark:border-white/5">
                      <div className="p-3 rounded-full bg-indigo-50 text-indigo-600 dark:bg-[#818CF8]/10 dark:text-[#818CF8] group-hover:scale-110 transition-transform">
                        <Sparkles className="w-8 h-8" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono text-indigo-600 dark:text-[#818CF8] uppercase">Celestial Hardware</span>
                      <h4 className="font-bold text-slate-900 dark:text-white text-sm">Deneb Nebula Lumina</h4>
                      <div className="flex items-baseline justify-between pt-1">
                        <span className="text-base font-extrabold text-slate-900 dark:text-white">$149.00</span>
                        <button className="px-3 py-1 rounded-lg text-xs font-semibold bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-[#818CF8] dark:hover:bg-[#6366F1]">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>

                  <LocationCard
                    address="742 Evergreen Celestial Way"
                    city="San Francisco"
                    country="USA"
                    postalCode="94102"
                    mapUrl="https://maps.google.com"
                    title="Deneb Flagship Store"
                    className="h-full justify-between hover:border-indigo-400 dark:hover:border-[#818CF8]/50 transition-all !max-w-none shadow-md"
                  />
                </div>
              )}

              {activeTab === 'hours' && (
                <div className="max-w-md w-full">
                  <BusinessHours
                    hours={{
                      monday: { open: '09:00', close: '18:00' },
                      tuesday: { open: '09:00', close: '18:00' },
                      wednesday: { open: '09:00', close: '18:00' },
                      thursday: { open: '09:00', close: '20:00' },
                      friday: { open: '09:00', close: '20:00' },
                      saturday: { open: '10:00', close: '17:00' },
                      sunday: { closed: true },
                    }}
                    showStatusBadge={true}
                  />
                </div>
              )}

              {activeTab === 'primitives' && (
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <button className="px-5 py-2.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-[#6366F1] to-[#818CF8] text-white shadow-[0_0_24px_rgba(129,140,248,0.5)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer">
                    <DenebStarIcon className="w-4 h-4" />
                    <span>Glow Button</span>
                  </button>

                  <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-600 border border-indigo-200 dark:bg-[#818CF8]/20 dark:text-[#A5B4FC] dark:border-[#818CF8]/40 flex items-center gap-1.5 shadow-sm dark:shadow-[0_0_12px_rgba(129,140,248,0.3)]">
                    <DenebStarIcon className="w-3 h-3" />
                    <span>Celestial Badge</span>
                  </span>

                  <button className="px-5 py-2.5 rounded-xl font-semibold text-sm bg-slate-100 text-slate-900 border border-slate-200 hover:border-slate-300 hover:bg-slate-200 dark:bg-[#121625] dark:text-white dark:border-[#23283B] dark:hover:border-[#818CF8]/50 dark:hover:bg-[#818CF8]/10 transition-all cursor-pointer">
                    Secondary Dark
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-mono uppercase text-indigo-600 dark:text-[#818CF8] font-bold">
            Built for High Conversion
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Engineered for Modern Web Commerce
          </h2>
          <p className="text-sm text-slate-600 dark:text-[#94A3B8] max-w-xl mx-auto">
            Everything you need to craft high-converting, blazing-fast web interfaces without design fatigue.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="p-5 sm:p-6 rounded-2xl border border-slate-200 bg-white dark:border-[#23283B] dark:bg-[#0A0D17] space-y-3 hover:border-slate-300 dark:hover:border-[#818CF8]/40 shadow-sm transition-all">
            <div className="p-3 w-fit rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-200 dark:bg-[#818CF8]/10 dark:text-[#818CF8] dark:border-[#818CF8]/20">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">Zero Dependency Bloat</h3>
            <p className="text-xs text-slate-600 dark:text-[#94A3B8] leading-relaxed">
              Native Tailwind CSS v4 classes with pure React peer dependencies. Lightning-fast LCP and instant interactivity.
            </p>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl border border-slate-200 bg-white dark:border-[#23283B] dark:bg-[#0A0D17] space-y-3 hover:border-slate-300 dark:hover:border-[#818CF8]/40 shadow-sm transition-all">
            <div className="p-3 w-fit rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-200 dark:bg-[#818CF8]/10 dark:text-[#818CF8] dark:border-[#818CF8]/20">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">Smart Commerce Triggers</h3>
            <p className="text-xs text-slate-600 dark:text-[#94A3B8] leading-relaxed">
              Dedicated components for phone calling, WhatsApp 1-click messaging, and live dynamic business operating hours.
            </p>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl border border-slate-200 bg-white dark:border-[#23283B] dark:bg-[#0A0D17] space-y-3 hover:border-slate-300 dark:hover:border-[#818CF8]/40 shadow-sm transition-all sm:col-span-2 lg:col-span-1">
            <div className="p-3 w-fit rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-200 dark:bg-[#818CF8]/10 dark:text-[#818CF8] dark:border-[#818CF8]/20">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">Visual Site Builder Sync</h3>
            <p className="text-xs text-slate-600 dark:text-[#94A3B8] leading-relaxed">
              Built-in field path annotations ready for seamless live visual editing with FIVORA and headless CMS providers.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-200 bg-slate-50 dark:border-[#23283B] dark:bg-[#06070B] py-8 sm:py-12 transition-colors duration-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <DenebLogo size="sm" asLink={false} />
            <span className="text-xs text-slate-500 dark:text-[#94A3B8]">
              Powered by <strong className="text-slate-900 dark:text-white font-semibold">DENEB</strong>. Collaborate with FIVORA.
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-500 dark:text-[#94A3B8]">
            <Link href="/docs/installation" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Documentation
            </Link>
            <Link href="/docs/components/button" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Components
            </Link>
            <Link href="/docs/cli" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              CLI
            </Link>
            <a
              href="https://github.com/deneb-ui/ui"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
