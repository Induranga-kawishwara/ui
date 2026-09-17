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
      <div className="hidden xl:block w-[240px] xl:w-[260px] shrink-0 border-l border-slate-200 dark:border-[#23283B]/60 px-4 lg:px-5 py-6 text-xs sticky top-16 self-start h-[calc(100vh-4rem)] overflow-y-auto">
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-slate-700 dark:text-[#CBD5E1] tracking-wide uppercase text-[11px] mb-3 flex items-center gap-1.5">
              <DenebStarIcon className="w-3 h-3" />
              <span>On This Page</span>
            </h4>
            <ul className="space-y-2 border-l border-slate-200 dark:border-[#23283B]">
              {items.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="block -ml-px pl-3 text-slate-600 hover:text-indigo-600 hover:border-l-2 hover:border-indigo-600 dark:text-[#94A3B8] dark:hover:text-[#818CF8] dark:hover:border-[#818CF8] transition-all text-left truncate w-full"
                  >
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Promo Card: Celestial Storefront */}
          <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/80 dark:border-[#23283B] dark:bg-[#0E1220] shadow-sm space-y-2.5">
            <div className="flex items-center gap-1.5 text-indigo-600 dark:text-[#818CF8] font-semibold text-xs">
              <Star className="w-3.5 h-3.5 fill-indigo-600 dark:fill-[#818CF8]" />
              <span>DENEB Storefront CLI</span>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-[#94A3B8] leading-relaxed">
              Scaffold a pre-validated, high-converting storefront in seconds.
            </p>
            <a
              href="/docs/cli"
              className="inline-flex items-center gap-1 text-[11px] font-semibold text-indigo-600 dark:text-[#818CF8] hover:underline"
            >
              <span>Read CLI Guide</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Community & GitHub links */}
          <div className="pt-2 border-t border-slate-200 dark:border-[#23283B] space-y-2 text-slate-600 dark:text-[#94A3B8]">
            <a
              href="https://github.com/deneb-ui/ui"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <GitHubIcon className="w-3.5 h-3.5" />
              <span>Star on GitHub</span>
            </a>
            <a
              href="https://github.com/deneb-ui/ui/issues"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-slate-900 dark:hover:text-white transition-colors"
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
            className="fixed bottom-5 right-5 z-40 flex items-center gap-2 px-3.5 py-2 rounded-full border border-indigo-400/40 dark:border-[#818CF8]/40 bg-white/95 dark:bg-[#0E1220]/95 backdrop-blur-xl text-slate-900 dark:text-white text-xs font-semibold shadow-lg hover:border-indigo-500 dark:hover:border-[#818CF8] active:scale-95 transition-all"
            aria-label="Table of contents"
          >
            <DenebStarIcon className="w-3.5 h-3.5 text-indigo-600 dark:text-[#818CF8]" />
            <span>On This Page</span>
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-[#818CF8] animate-pulse" />
          </button>

          {/* Slide-Up Popover Sheet */}
          {mobileOpen && (
            <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center p-3 sm:p-4">
              <div
                className="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-sm transition-opacity"
                onClick={() => setMobileOpen(false)}
              />
              <div
                className="relative z-50 w-full max-w-md rounded-2xl border border-slate-200 bg-white text-slate-900 dark:border-[#23283B] dark:bg-[#0A0D17] dark:text-white p-5 shadow-2xl space-y-4 max-h-[75vh] flex flex-col overflow-hidden animate-in slide-in-from-bottom-6 duration-200"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-[#23283B]">
                  <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-sm">
                    <DenebStarIcon className="w-4 h-4 text-indigo-600 dark:text-[#818CF8]" />
                    <span>On This Page</span>
                  </div>
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="p-1 rounded-lg text-slate-500 hover:text-slate-900 dark:text-[#94A3B8] dark:hover:text-white"
                  >
                    ✕
                  </button>
                </div>

                <div className="overflow-y-auto space-y-1.5 py-1">
                  {items.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollTo(item.id)}
                      className="w-full text-left px-3 py-2 rounded-lg text-xs font-medium text-slate-700 hover:text-slate-950 hover:bg-indigo-50 hover:border-l-2 hover:border-indigo-600 dark:text-[#CBD5E1] dark:hover:text-white dark:hover:bg-[#818CF8]/10 dark:hover:border-l-2 dark:hover:border-[#818CF8] transition-all"
                    >
                      {item.title}
                    </button>
                  ))}
                </div>

                <div className="pt-3 border-t border-slate-200 dark:border-[#23283B] flex items-center justify-between text-[11px] text-slate-500 dark:text-[#94A3B8]">
                  <span>Tap any section to navigate</span>
                  <a href="/docs/cli" className="text-indigo-600 dark:text-[#818CF8] hover:underline font-medium">CLI Guide →</a>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
