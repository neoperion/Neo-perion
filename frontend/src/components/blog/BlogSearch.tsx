import React, { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';

interface Props {
  onSearch: (query: string) => void;
  theme?: 'light' | 'dark';
}

export const BlogSearch: React.FC<Props> = ({ onSearch, theme = 'dark' }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const isLight = theme === 'light';

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(searchTerm);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchTerm, onSearch]);

  if (isLight) {
    return (
      <div className="relative w-full lg:w-72 xl:w-80">
        <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-manuscript-copper" />
        <input
          type="text"
          className="block w-full rounded-full border border-manuscriptAlpha-ink-15 bg-manuscript-parchmentWarm/60 py-2 sm:py-2.5 pl-9 pr-9 text-[13px] font-sans text-manuscript-ink placeholder:text-manuscript-inkMuted/70 outline-none transition-all duration-200 focus:border-manuscript-copper focus:bg-manuscript-parchmentLight focus:ring-2 focus:ring-manuscript-copper/15"
          placeholder="Search articles…"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm('')}
            aria-label="Clear search"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-manuscript-inkMuted transition-colors hover:text-manuscript-copper"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        )}
      </div>
    );
  }

  // Dark (mobile / legacy)
  return (
    <div className="relative mb-8 w-full max-w-lg">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
        <Search className="h-5 w-5 text-[#F4EBDD]/50" />
      </div>
      <input
        type="text"
        className="block w-full rounded-xl border border-white/10 bg-[rgba(16,16,16,0.6)] backdrop-blur-md py-4 pl-11 pr-10 text-[#F4EBDD] placeholder-[#F4EBDD]/50 transition-all focus:border-manuscript-copper focus:outline-none focus:ring-1 focus:ring-manuscript-copper"
        placeholder="Search articles, topics, and insights..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {searchTerm && (
        <button
          onClick={() => setSearchTerm('')}
          className="absolute inset-y-0 right-0 flex items-center pr-4 text-[#F4EBDD]/50 transition-colors hover:text-[#F4EBDD]"
        >
          <X className="h-5 w-5" />
        </button>
      )}
    </div>
  );
};
