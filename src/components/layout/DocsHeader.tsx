'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { DenebLogo, DenebStarIcon, GitHubIcon } from '@/components/brand/DenebLogo';
import { SearchDialog } from './SearchDialog';
import { Search, Menu, X, Sparkles } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export function DocsHeader({ onToggleSidebar }: { onToggleSidebar?: () => void }) {
  const pathname = usePathname();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Docs', href: '/docs/installation' },
    { name: 'Components', href: '/docs/components/button' },
    { name: 'CLI', href: '/docs/cli' },
    { name: 'Theming', href: '/docs/theming' },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/90 dark:border-[#23283B] dark:bg-[#080A12]/90 backdrop-blur-xl transition-colors duration-150">
        <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-10 w-full">
          {/* Left: Mobile Docs Sidebar Trigger & Logo & Desktop Primary Nav */}
          <div className="flex items-center gap-2 sm:gap-6">
            {onToggleSidebar && (
              <button
                onClick={onToggleSidebar}
                className="md:hidden p-2 rounded-lg border border-slate-200 dark:border-[#23283B] bg-slate-100 dark:bg-[#121625] text-slate-600 dark:text-[#94A3B8] hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-[#818CF8]/40 transition-all"
                aria-label="Toggle docs navigation menu"
                title="Docs menu"
              >
                <Menu className="w-4 h-4" />
              </button>
            )}

            <div className="shrink-0">
              <DenebLogo size="md" showVersion />
            </div>

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
                        ? 'text-slate-950 font-semibold bg-slate-100 border border-slate-200 dark:text-white dark:bg-[#818CF8]/10 dark:border-[#818CF8]/30 dark:shadow-[0_0_12px_rgba(129,140,248,0.15)]'
                        : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100/80 dark:text-[#94A3B8] dark:hover:text-white dark:hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Right: Search bar & Links & Theme Toggle & Mobile Menu Trigger */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Trigger Button - responsive width */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center gap-2 p-2 sm:px-3 sm:py-1.5 rounded-lg border border-slate-200 dark:border-[#23283B] bg-slate-100/80 dark:bg-[#0E1220]/80 text-slate-600 dark:text-[#94A3B8] hover:border-slate-300 dark:hover:border-[#818CF8]/40 hover:text-slate-950 dark:hover:text-white transition-all text-xs sm:w-52 md:w-56 justify-between group shadow-inner"
              aria-label="Search documentation"
            >
              <div className="flex items-center gap-2">
                <Search className="w-3.5 h-3.5 text-indigo-600 dark:text-[#818CF8] group-hover:scale-110 transition-transform" />
                <span className="hidden sm:inline">Search docs...</span>
              </div>
              <kbd className="hidden sm:inline-flex items-center gap-0.5 rounded bg-slate-200/80 dark:bg-white/10 px-1.5 py-0.5 text-[10px] font-mono text-slate-600 dark:text-[#CBD5E1]">
                <span className="text-xs">⌘</span>K
              </kbd>
            </button>

            {/* GitHub Repo Button with stars (hidden on small mobile, visible on sm+) */}
            <a
              href="https://github.com/deneb-ui/ui"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-[#23283B] bg-slate-100/80 dark:bg-[#121625] text-xs font-medium text-slate-700 dark:text-[#CBD5E1] hover:text-slate-950 dark:hover:text-white hover:border-slate-300 dark:hover:border-[#818CF8]/40 hover:bg-slate-200/60 dark:hover:bg-[#818CF8]/10 transition-all group shrink-0"
            >
              <GitHubIcon className="w-4 h-4 text-slate-800 dark:text-white group-hover:scale-110 transition-transform" />
              <span>GitHub</span>
              <span className="flex items-center gap-1 pl-1.5 border-l border-slate-300 dark:border-[#23283B] text-indigo-600 dark:text-[#818CF8] font-mono text-[11px]">
                <DenebStarIcon className="w-2.5 h-2.5" />
                <span>2.4k</span>
              </span>
            </a>

            {/* Theme Toggle Button */}
            <ThemeToggle />

            {/* Quick Install Pill (desktop) */}
            <Link
              href="/docs/installation"
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-[#6366F1] to-[#818CF8] text-white shadow-[0_0_16px_rgba(129,140,248,0.35)] hover:shadow-[0_0_24px_rgba(129,140,248,0.5)] transition-all hover:scale-[1.02] active:scale-[0.98] shrink-0"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Get Started</span>
            </Link>

            {/* Mobile Header Menu Button (visible on < md) */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 rounded-lg border border-slate-200 dark:border-[#23283B] bg-slate-100 dark:bg-[#121625] text-slate-600 dark:text-[#94A3B8] hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-[#818CF8]/40 transition-all"
              aria-label="Open mobile navigation"
            >
              <Menu className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Site Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex justify-end">
          <div
            className="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="relative z-50 w-72 max-w-[85vw] bg-white text-slate-900 dark:bg-[#0A0D17] dark:text-white border-l border-slate-200 dark:border-[#23283B] p-5 flex flex-col h-full overflow-y-auto shadow-2xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-[#23283B]">
              <DenebLogo size="sm" asLink={false} showVersion />
              <div className="flex items-center gap-2">
                <ThemeToggle />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg border border-slate-200 dark:border-[#23283B] bg-slate-100 dark:bg-[#121625] text-slate-600 dark:text-[#94A3B8] hover:text-slate-900 dark:hover:text-white"
                  aria-label="Close menu"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Mobile Nav Links */}
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono uppercase text-indigo-600 dark:text-[#818CF8] font-bold tracking-wider px-3">
                Navigation
              </span>
              <div className="space-y-1 pt-1">
                {navLinks.map((link) => {
                  const isActive =
                    link.href === '/'
                      ? pathname === '/'
                      : pathname.startsWith(link.href);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                        isActive
                          ? 'text-indigo-600 bg-indigo-50 border border-indigo-200 font-semibold dark:text-white dark:bg-[#818CF8]/15 dark:border-[#818CF8]/30'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-[#94A3B8] dark:hover:text-white dark:hover:bg-white/5'
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive && <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-[#818CF8] shadow-[0_0_6px_#818CF8]" />}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Quick Actions in Mobile Drawer */}
            <div className="pt-4 border-t border-slate-200 dark:border-[#23283B] space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsSearchOpen(true);
                }}
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-[#23283B] bg-slate-50 dark:bg-[#0E1220] text-xs text-slate-600 dark:text-[#94A3B8] hover:text-slate-900 dark:hover:text-white hover:border-indigo-400 dark:hover:border-[#818CF8]/40 transition-all"
              >
                <div className="flex items-center gap-2">
                  <Search className="w-3.5 h-3.5 text-indigo-600 dark:text-[#818CF8]" />
                  <span>Search documentation</span>
                </div>
                <span className="text-[10px] font-mono text-slate-400 dark:text-[#64748B]">⌘K</span>
              </button>

              <Link
                href="/docs/installation"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-[#6366F1] to-[#818CF8] text-white shadow-[0_0_16px_rgba(129,140,248,0.35)]"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Get Started</span>
              </Link>

              <a
                href="https://github.com/deneb-ui/ui"
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-[#23283B] bg-slate-100 dark:bg-[#121625] text-xs font-medium text-slate-700 dark:text-[#CBD5E1] hover:text-slate-950 dark:hover:text-white"
              >
                <GitHubIcon className="w-4 h-4 text-slate-800 dark:text-white" />
                <span>GitHub Repository</span>
                <span className="text-indigo-600 dark:text-[#818CF8] font-mono text-[11px] ml-1">★ 2.4k</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Global Command Search Dialog */}
      <SearchDialog isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
