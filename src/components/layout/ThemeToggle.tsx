'use client';

import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/components/providers/theme-provider';

export function ThemeToggle({ className = '' }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className={`p-2 rounded-lg border border-slate-200 dark:border-[#23283B] bg-slate-100/80 dark:bg-[#121625] text-slate-600 dark:text-[#CBD5E1] transition-all w-8 h-8 flex items-center justify-center ${className}`}
      >
        <span className="w-4 h-4 opacity-0" />
      </button>
    );
  }

  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`relative p-2 rounded-lg border border-slate-200 dark:border-[#23283B] bg-slate-100/80 dark:bg-[#121625] text-slate-700 dark:text-[#CBD5E1] hover:text-slate-950 dark:hover:text-white hover:border-slate-300 dark:hover:border-[#818CF8]/40 hover:bg-slate-200/80 dark:hover:bg-[#818CF8]/10 transition-all duration-200 flex items-center justify-center group shrink-0 ${className}`}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-amber-400 group-hover:rotate-45 group-hover:scale-110 transition-all duration-300" />
      ) : (
        <Moon className="w-4 h-4 text-slate-700 group-hover:-rotate-12 group-hover:scale-110 transition-all duration-300" />
      )}
    </button>
  );
}
