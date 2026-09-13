'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { DocsHeader } from '@/components/layout/DocsHeader';
import { DenebLogo, DenebStarIcon } from '@/components/brand/DenebLogo';
import { CodeBlock } from '@/components/docs/CodeBlock';
import {
  ContactActions,
  WhatsAppButton,
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

export default function HomePage() {
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
    <div className="min-h-screen flex flex-col bg-[#08090E] text-[#F1F5F9] selection:bg-[#818CF8]/30 selection:text-white">
      {/* Top Header */}
      <DocsHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-28">
        {/* Ambient celestial glows & cosmic grid */}
        <div className="absolute inset-0 cosmic-radial-glow pointer-events-none" />
        <div className="absolute inset-0 cosmic-grid opacity-40 pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          {/* Logo badge */}
          <div className="inline-flex items-center justify-center">
            <DenebLogo size="lg" asLink={false} showVersion />
          </div>

          {/* Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white font-sans">
              The Celestial React Framework for{' '}
              <span
                className="bg-gradient-to-r from-white via-[#CBD5E1] to-[#818CF8] bg-clip-text text-transparent"
                style={{
                  textShadow: '0 0 30px rgba(129,140,248,0.3)',
                }}
              >
                High-Converting Storefronts
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#94A3B8] leading-relaxed">
              Unopinionated shadcn-style primitives enhanced with smart commerce actions 1 click WhatsApp chat, dynamic operating hours, location routing, and storefront sections.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/docs/installation"
              className="px-6 py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-[#6366F1] to-[#818CF8] text-white shadow-[0_0_24px_rgba(129,140,248,0.4)] hover:shadow-[0_0_36px_rgba(129,140,248,0.6)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/docs/components/button"
              className="px-6 py-3 rounded-xl font-bold text-sm bg-[#121625] text-white border border-[#23283B] hover:border-[#818CF8]/50 hover:bg-[#818CF8]/10 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
            >
              <Layers className="w-4 h-4 text-[#818CF8]" />
              <span>Browse Components</span>
            </Link>
          </div>

          {/* Quick Terminal Snippet */}
          <div className="pt-2 flex justify-center">
            <div
              onClick={handleCopyCli}
              className="group inline-flex items-center gap-3 px-4 py-2 rounded-xl border border-[#23283B] bg-[#0A0D17]/90 text-xs font-mono text-[#CBD5E1] hover:border-[#818CF8]/50 hover:bg-[#0E1220] transition-all cursor-pointer shadow-lg"
            >
              <Terminal className="w-3.5 h-3.5 text-[#818CF8]" />
              <span>npx @deneb-ui/create-template my-store</span>
              <button
                className="p-1 rounded text-[#94A3B8] group-hover:text-white transition-colors"
                title="Copy command"
              >
                {copiedCli ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Live Interactive Showcase Canvas */}
      <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 w-full">
        <div className="rounded-3xl border border-[#23283B] bg-[#0A0D17] shadow-2xl overflow-hidden">
          {/* Header tab switcher */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#23283B] bg-[#0E111C]/80 flex-wrap gap-3">
            <div className="flex items-center gap-2">
              <DenebStarIcon className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider text-white">
                Live Interactive Playground
              </span>
            </div>

            <div className="flex items-center gap-1 p-1 rounded-xl bg-[#08090E] border border-[#23283B]">
              <button
                onClick={() => setActiveTab('contact')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${activeTab === 'contact'
                    ? 'bg-[#818CF8] text-white shadow-[0_0_12px_rgba(129,140,248,0.3)]'
                    : 'text-[#94A3B8] hover:text-white'
                  }`}
              >
                Smart Actions
              </button>
              <button
                onClick={() => setActiveTab('product')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${activeTab === 'product'
                    ? 'bg-[#818CF8] text-white shadow-[0_0_12px_rgba(129,140,248,0.3)]'
                    : 'text-[#94A3B8] hover:text-white'
                  }`}
              >
                Storefront Cards
              </button>
              <button
                onClick={() => setActiveTab('hours')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${activeTab === 'hours'
                    ? 'bg-[#818CF8] text-white shadow-[0_0_12px_rgba(129,140,248,0.3)]'
                    : 'text-[#94A3B8] hover:text-white'
                  }`}
              >
                Business Hours
              </button>
              <button
                onClick={() => setActiveTab('primitives')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${activeTab === 'primitives'
                    ? 'bg-[#818CF8] text-white shadow-[0_0_12px_rgba(129,140,248,0.3)]'
                    : 'text-[#94A3B8] hover:text-white'
                  }`}
              >
                Glow Primitives
              </button>
            </div>
          </div>

          {/* Canvas Render Area */}
          <div className="relative min-h-[360px] p-8 sm:p-12 flex items-center justify-center cosmic-grid">
            <div className="absolute inset-0 cosmic-radial-glow pointer-events-none" />

            <div className="relative z-10 w-full flex items-center justify-center">
              {activeTab === 'contact' && (
                <div className="space-y-4 max-w-xl w-full text-center p-6 sm:p-8 rounded-2xl border border-[#23283B] bg-[#0E1220]/90 backdrop-blur-md shadow-2xl">
                  <span className="text-[10px] font-mono uppercase text-[#818CF8] font-bold">
                    Multi-Channel Fallback
                  </span>
                  <h3 className="font-bold text-lg text-white">Direct Customer Actions</h3>
                  <p className="text-xs text-[#94A3B8] max-w-md mx-auto">
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
                  <div className="rounded-2xl border border-[#23283B] bg-[#0E111C] p-4 space-y-3 shadow-lg hover:border-[#818CF8]/50 transition-all group flex flex-col justify-between">
                    <div className="relative aspect-video rounded-xl bg-gradient-to-tr from-[#1E1B4B] to-[#0F172A] flex items-center justify-center overflow-hidden border border-white/5">
                      <div className="p-3 rounded-full bg-[#818CF8]/10 text-[#818CF8] group-hover:scale-110 transition-transform">
                        <Sparkles className="w-8 h-8" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono text-[#818CF8] uppercase">Celestial Hardware</span>
                      <h4 className="font-bold text-white text-sm">Deneb Nebula Lumina</h4>
                      <div className="flex items-baseline justify-between pt-1">
                        <span className="text-base font-extrabold text-white">$149.00</span>
                        <button className="px-3 py-1 rounded-lg text-xs font-semibold bg-[#818CF8] text-white hover:bg-[#6366F1]">
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
                    className="h-full justify-between hover:border-[#818CF8]/50 transition-all !max-w-none shadow-lg"
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

                  <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-[#818CF8]/20 text-[#A5B4FC] border border-[#818CF8]/40 flex items-center gap-1.5 shadow-[0_0_12px_rgba(129,140,248,0.3)]">
                    <DenebStarIcon className="w-3 h-3" />
                    <span>Celestial Badge</span>
                  </span>

                  <button className="px-5 py-2.5 rounded-xl font-semibold text-sm bg-[#121625] text-white border border-[#23283B] hover:border-[#818CF8]/50 hover:bg-[#818CF8]/10 transition-all cursor-pointer">
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
          <span className="text-xs font-mono uppercase text-[#818CF8] font-bold">
            Built for High Conversion
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Engineered for Modern Web Commerce
          </h2>
          <p className="text-sm text-[#94A3B8] max-w-xl mx-auto">
            Everything you need to craft high-converting, blazing-fast web interfaces without design fatigue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl border border-[#23283B] bg-[#0A0D17] space-y-3 hover:border-[#818CF8]/40 transition-all">
            <div className="p-3 w-fit rounded-xl bg-[#818CF8]/10 text-[#818CF8] border border-[#818CF8]/20">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white text-base">Zero Dependency Bloat</h3>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              Native Tailwind CSS v4 classes with pure React peer dependencies. Lightning-fast LCP and instant interactivity.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-[#23283B] bg-[#0A0D17] space-y-3 hover:border-[#818CF8]/40 transition-all">
            <div className="p-3 w-fit rounded-xl bg-[#818CF8]/10 text-[#818CF8] border border-[#818CF8]/20">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white text-base">Smart Commerce Triggers</h3>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              Dedicated components for phone calling, WhatsApp 1-click messaging, and live dynamic business operating hours.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-[#23283B] bg-[#0A0D17] space-y-3 hover:border-[#818CF8]/40 transition-all">
            <div className="p-3 w-fit rounded-xl bg-[#818CF8]/10 text-[#818CF8] border border-[#818CF8]/20">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white text-base">Visual Site Builder Sync</h3>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              Built-in field path annotations ready for seamless live visual editing with FIVORA and headless CMS providers.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-[#23283B] bg-[#06070B] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <DenebLogo size="sm" asLink={false} />
            <span className="text-xs text-[#94A3B8]">
              Powered by <strong className="text-white font-semibold">DENEB</strong>. Collaborate with FIVORA.
            </span>
          </div>

          <div className="flex items-center gap-6 text-xs text-[#94A3B8]">
            <Link href="/docs/installation" className="hover:text-white transition-colors">
              Documentation
            </Link>
            <Link href="/docs/components/button" className="hover:text-white transition-colors">
              Components
            </Link>
            <Link href="/docs/cli" className="hover:text-white transition-colors">
              CLI
            </Link>
            <a
              href="https://github.com/deneb-ui/ui"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
