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
      <div 
        className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto scrollbar-hide py-1 -mx-2 px-2 sm:mx-0 sm:px-0 lg:flex-wrap"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {categories.map((category) => {
          const active = activeCategory === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => onCategoryChange(category)}
              className={`relative shrink-0 rounded-full px-3.5 py-1.5 text-[13px] font-sans transition-all duration-200 ${
                active
                  ? 'bg-manuscript-ink text-manuscript-parchmentLight font-semibold shadow-sm'
                  : 'bg-manuscript-parchmentWarm/70 text-manuscript-inkSoft font-medium border border-manuscriptAlpha-ink-10 hover:border-manuscript-copper/40 hover:text-manuscript-ink hover:bg-manuscript-parchmentLight'
              }`}
            >
              {category}
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
