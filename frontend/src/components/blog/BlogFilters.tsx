import React from 'react';

interface Props {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  theme?: 'light' | 'dark';
}

export const BlogFilters: React.FC<Props> = ({ categories, activeCategory, onCategoryChange, theme = 'dark' }) => {
  if (theme === 'light') {
    return (
      <div className="flex flex-wrap items-center gap-x-1 gap-y-1">
        {categories.map((category) => {
          const active = activeCategory === category;
          return (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                active ? 'text-ink' : 'text-muted2 hover:text-ink'
              }`}
            >
              {category}
              <span
                className={`absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-brand transition-opacity ${
                  active ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </button>
          );
        })}
      </div>
    );
  }

  // Dark (mobile / legacy)
  return (
    <div className="mb-12 flex flex-wrap items-center gap-3">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
            activeCategory === category
              ? 'bg-neo-blue text-white shadow-[0_0_15px_rgba(6,182,212,0.3)]'
              : 'border border-white/10 parchment-surface/5 text-slate-300 hover:border-neo-blue/50 hover:parchment-surface/10'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};
