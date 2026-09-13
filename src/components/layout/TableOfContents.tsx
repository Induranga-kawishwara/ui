'use client';

import React from 'react';
import { ExternalLink, MessageSquareQuote, Star } from 'lucide-react';
import { DenebStarIcon, GitHubIcon } from '@/components/brand/DenebLogo';

export interface TocItem {
  id: string;
  title: string;
}

export function TableOfContents({ items }: { items: TocItem[] }) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="hidden xl:block w-[220px] shrink-0 pl-6 py-6 text-xs sticky top-20 self-start max-h-[calc(100vh-6rem)] overflow-y-auto">
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
  );
}
