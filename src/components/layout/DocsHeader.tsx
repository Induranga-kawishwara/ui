'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { DenebLogo, DenebStarIcon, GitHubIcon } from '@/components/brand/DenebLogo';
import { SearchDialog } from './SearchDialog';
import { Search, Menu, X, ExternalLink, Sparkles } from 'lucide-react';

export function DocsHeader({ onToggleSidebar }: { onToggleSidebar?: () => void }) {
  const pathname = usePathname();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Docs', href: '/docs/installation' },
    { name: 'Components', href: '/docs/components/button' },
    { name: 'CLI', href: '/docs/cli' },
    { name: 'Theming', href: '/docs/theming' },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-[#23283B] bg-[#080A12]/80 backdrop-blur-xl">
        <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8 w-full">
          {/* Left: Mobile trigger & Logo & Primary Nav */}
          <div className="flex items-center gap-6">
            {onToggleSidebar && (
              <button
                onClick={onToggleSidebar}
                className="md:hidden p-2 rounded-lg border border-[#23283B] bg-[#121625] text-[#94A3B8] hover:text-white"
                aria-label="Toggle navigation menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            )}

            <DenebLogo size="md" showVersion />

            {/* Desktop Nav Links */}
            <nav className="hidden md:flex items-center gap-1 pl-2">
              {navLinks.map((link) => {
                const isActive =
                  link.href === '/'
                    ? pathname === '/'
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-150 ${
                      isActive
                        ? 'text-white bg-[#818CF8]/10 border border-[#818CF8]/30 shadow-[0_0_12px_rgba(129,140,248,0.15)]'
                        : 'text-[#94A3B8] hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Right: Search bar & Links & GitHub */}
          <div className="flex items-center gap-3">
            {/* Search Trigger Button (like shadcn/ui) */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#23283B] bg-[#0E1220]/80 text-[#94A3B8] hover:border-[#818CF8]/40 hover:text-white transition-all text-xs w-44 sm:w-56 justify-between group shadow-inner"
            >
              <div className="flex items-center gap-2">
                <Search className="w-3.5 h-3.5 text-[#818CF8] group-hover:scale-110 transition-transform" />
                <span className="hidden sm:inline">Search docs...</span>
                <span className="sm:hidden">Search...</span>
              </div>
              <kbd className="hidden sm:inline-flex items-center gap-0.5 rounded bg-white/10 px-1.5 py-0.5 text-[10px] font-mono text-[#CBD5E1]">
                <span className="text-xs">⌘</span>K
              </kbd>
            </button>

            {/* GitHub Repo Button with stars */}
            <a
              href="https://github.com/deneb-ui/ui"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#23283B] bg-[#121625] text-xs font-medium text-[#CBD5E1] hover:text-white hover:border-[#818CF8]/40 hover:bg-[#818CF8]/10 transition-all group"
            >
              <GitHubIcon className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
              <span>GitHub</span>
              <span className="flex items-center gap-1 pl-1.5 border-l border-[#23283B] text-[#818CF8] font-mono text-[11px]">
                <DenebStarIcon className="w-2.5 h-2.5" />
                <span>2.4k</span>
              </span>
            </a>

            {/* Quick Install Pill */}
            <Link
              href="/docs/installation"
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-[#6366F1] to-[#818CF8] text-white shadow-[0_0_16px_rgba(129,140,248,0.35)] hover:shadow-[0_0_24px_rgba(129,140,248,0.5)] transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Get Started</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Global Command Search Dialog */}
      <SearchDialog isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
