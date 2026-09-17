'use client';

import React, { useState } from 'react';
import { DocsHeader } from '@/components/layout/DocsHeader';
import { DocsSidebar } from '@/components/layout/DocsSidebar';
import { X } from 'lucide-react';

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div suppressHydrationWarning className="min-h-screen flex flex-col bg-slate-50/60 text-slate-900 dark:bg-[#080A12] dark:text-[#F1F5F9] transition-colors duration-150">
      <DocsHeader onToggleSidebar={() => setMobileSidebarOpen(!mobileSidebarOpen)} />

      {/* Mobile Drawer */}
      {mobileSidebarOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex">
          <div
            className="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileSidebarOpen(false)}
          />
          <div className="relative z-50 w-72 max-w-[85vw] bg-white text-slate-900 dark:bg-[#0A0D17] dark:text-white border-r border-slate-200 dark:border-[#23283B] p-4 flex flex-col h-full overflow-y-auto shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-[#23283B]">
              <span className="text-xs font-mono uppercase text-indigo-600 dark:text-[#818CF8] font-bold">
                Docs Navigation
              </span>
              <button
                onClick={() => setMobileSidebarOpen(false)}
                className="p-1.5 rounded-lg border border-slate-200 dark:border-[#23283B] bg-slate-100 dark:bg-[#121625] text-slate-600 dark:text-[#94A3B8] hover:text-slate-900 dark:hover:text-white"
                aria-label="Close menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <DocsSidebar onItemClick={() => setMobileSidebarOpen(false)} />
          </div>
        </div>
      )}

      {/* Main Container: full viewport spread with flush edge-to-edge docked sidebars */}
      <div className="flex-1 w-full flex">
        {/* Desktop Sticky Sidebar (visible on md: 768px+) */}
        <DocsSidebar className="hidden md:block border-r border-slate-200/80 dark:border-[#23283B]/60 bg-white/50 dark:bg-transparent px-4 lg:px-5 shrink-0 w-[240px] lg:w-[260px] xl:w-[270px] sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto" />

        {/* Content Viewport */}
        <main className="flex-1 min-w-0 flex flex-col bg-white dark:bg-transparent">{children}</main>
      </div>
    </div>
  );
}
