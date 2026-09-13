'use client';

import React, { useState } from 'react';
import { DocsHeader } from '@/components/layout/DocsHeader';
import { DocsSidebar } from '@/components/layout/DocsSidebar';
import { X } from 'lucide-react';

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div suppressHydrationWarning className="min-h-screen flex flex-col bg-[#080A12] text-[#F1F5F9]">
      <DocsHeader onToggleSidebar={() => setMobileSidebarOpen(!mobileSidebarOpen)} />

      {/* Mobile Drawer */}
      {mobileSidebarOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileSidebarOpen(false)}
          />
          <div className="relative z-50 w-72 max-w-[85vw] bg-[#0A0D17] border-r border-[#23283B] p-4 flex flex-col h-full overflow-y-auto shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-[#23283B]">
              <span className="text-xs font-mono uppercase text-[#818CF8] font-bold">
                Navigation Menu
              </span>
              <button
                onClick={() => setMobileSidebarOpen(false)}
                className="p-1 rounded-md text-[#94A3B8] hover:text-white"
                aria-label="Close menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <DocsSidebar onItemClick={() => setMobileSidebarOpen(false)} />
          </div>
        </div>
      )}

      {/* Main Container: sidebar docked to the left with full viewport width */}
      <div className="flex-1 w-full px-4 sm:px-6 lg:px-8 flex gap-6 lg:gap-10">
        {/* Desktop Sticky Sidebar (visible on md: 768px+) */}
        <DocsSidebar className="hidden md:block border-r border-[#23283B]/60 pr-6 shrink-0 w-[220px] lg:w-[240px] sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto" />

        {/* Content Viewport */}
        <main className="flex-1 min-w-0">{children}</main>
      </div>
    </div>
  );
}
