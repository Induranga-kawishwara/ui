'use client';

import React from 'react';
import { ExternalLink, MessageSquareQuote, Star } from 'lucide-react';
import { DenebStarIcon, GitHubIcon } from '@/components/brand/DenebLogo';

export interface TocItem {
  id: string;
  title: string;
}

export function TableOfContents({ items }: { items: TocItem[] }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Sticky Table of Contents (xl: 1280px+) */}
      <div className="hidden xl:block w-[230px] xl:w-[250px] shrink-0 border-l border-[#23283B]/60 pl-6 py-6 text-xs sticky top-20 self-start max-h-[calc(100vh-6rem)] overflow-y-auto">
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-[#CBD5E1] tracking-wide uppercase text-[11px] mb-3 flex items-center gap-1.5">
              <DenebStarIcon className="w-3 h-3" />
              <span>On This Page</span>
            </h4>
            <ul className="space-y-2 border-l border-[#23283B]">
              {items.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="block -ml-px pl-3 text-[#94A3B8] hover:text-[#818CF8] hover:border-l-2 hover:border-[#818CF8] transition-all text-left truncate w-full"
                  >
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Promo Card: Celestial Storefront */}
          <div className="p-3.5 rounded-xl border border-[#23283B] bg-[#0E1220] shadow-sm space-y-2.5">
            <div className="flex items-center gap-1.5 text-[#818CF8] font-semibold text-xs">
              <Star className="w-3.5 h-3.5 fill-[#818CF8]" />
              <span>DENEB Storefront CLI</span>
            </div>
            <p className="text-[11px] text-[#94A3B8] leading-relaxed">
              Scaffold a pre-validated, high-converting storefront in seconds.
            </p>
            <a
              href="/docs/cli"
              className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#818CF8] hover:underline"
            >
              <span>Read CLI Guide</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Community & GitHub links */}
          <div className="pt-2 border-t border-[#23283B] space-y-2 text-[#94A3B8]">
            <a
              href="https://github.com/deneb-ui/ui"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <GitHubIcon className="w-3.5 h-3.5" />
              <span>Star on GitHub</span>
            </a>
            <a
              href="https://github.com/deneb-ui/ui/issues"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <MessageSquareQuote className="w-3.5 h-3.5" />
              <span>Community Feedback</span>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Floating "On This Page" Button & Drawer (below xl) */}
      {items.length > 0 && (
        <div className="xl:hidden">
          {/* Floating Trigger Pill */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="fixed bottom-5 right-5 z-40 flex items-center gap-2 px-3.5 py-2 rounded-full border border-[#818CF8]/40 bg-[#0E1220]/95 backdrop-blur-xl text-white text-xs font-semibold shadow-[0_0_24px_rgba(129,140,248,0.25)] hover:border-[#818CF8] active:scale-95 transition-all"
            aria-label="Table of contents"
          >
            <DenebStarIcon className="w-3.5 h-3.5 text-[#818CF8]" />
            <span>On This Page</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#818CF8] animate-pulse" />
          </button>

          {/* Slide-Up Popover Sheet */}
          {mobileOpen && (
            <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center p-3 sm:p-4">
              <div
                className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
                onClick={() => setMobileOpen(false)}
              />
              <div
                className="relative z-50 w-full max-w-md rounded-2xl border border-[#23283B] bg-[#0A0D17] p-5 shadow-2xl space-y-4 max-h-[75vh] flex flex-col overflow-hidden animate-in slide-in-from-bottom-6 duration-200"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between pb-3 border-b border-[#23283B]">
                  <div className="flex items-center gap-2 text-white font-bold text-sm">
                    <DenebStarIcon className="w-4 h-4 text-[#818CF8]" />
                    <span>On This Page</span>
                  </div>
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="p-1 rounded-lg text-[#94A3B8] hover:text-white"
                  >
                    ✕
                  </button>
                </div>

                <div className="overflow-y-auto space-y-1.5 py-1">
                  {items.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollTo(item.id)}
                      className="w-full text-left px-3 py-2 rounded-lg text-xs font-medium text-[#CBD5E1] hover:text-white hover:bg-[#818CF8]/10 hover:border-l-2 hover:border-[#818CF8] transition-all"
                    >
                      {item.title}
                    </button>
                  ))}
                </div>

                <div className="pt-3 border-t border-[#23283B] flex items-center justify-between text-[11px] text-[#94A3B8]">
                  <span>Tap any section to navigate</span>
                  <a href="/docs/cli" className="text-[#818CF8] hover:underline font-medium">CLI Guide →</a>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
