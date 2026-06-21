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

  return (
    <div className="relative max-w-lg w-full mb-8">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-slate-400" />
      </div>
      <input
        type="text"
        className={`block w-full pl-11 pr-10 py-4 border rounded-xl placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
          isLight
            ? 'bg-white border-zinc-200/80 text-[#09090B] placeholder-zinc-400 shadow-sm'
            : 'bg-slate-900/60 border-white/10 text-white'
        }`}
        placeholder="Search articles, topics, and insights..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {searchTerm && (
        <button
          onClick={() => setSearchTerm('')}
          className={`absolute inset-y-0 right-0 pr-4 flex items-center transition-colors ${
            isLight ? 'text-slate-400 hover:text-slate-600' : 'text-slate-400 hover:text-white'
          }`}
        >
          <X className="h-5 w-5" />
        </button>
      )}
    </div>
  );
};
