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
      <div className="relative w-full sm:max-w-xs">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-faint" />
        <input
          type="text"
          className="block w-full border border-hairline bg-paper py-2.5 pl-10 pr-9 text-sm text-ink placeholder-faint outline-none transition-colors focus:border-brand"
          placeholder="Search articles…"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm('')}
            aria-label="Clear search"
            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-faint transition-colors hover:text-ink"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    );
  }

  // Dark (mobile / legacy)
  return (
    <div className="relative mb-8 w-full max-w-lg">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
        <Search className="h-5 w-5 text-slate-400" />
      </div>
      <input
        type="text"
        className="block w-full rounded-xl border border-white/10 bg-slate-900/60 py-4 pl-11 pr-10 text-white placeholder-slate-400 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search articles, topics, and insights..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {searchTerm && (
        <button
          onClick={() => setSearchTerm('')}
          className="absolute inset-y-0 right-0 flex items-center pr-4 text-slate-400 transition-colors hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>
      )}
    </div>
  );
};
