import React from 'react';

interface Props {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export const BlogFilters: React.FC<Props> = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap items-center gap-3 mb-12">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
            activeCategory === category
              ? 'bg-neo-blue text-slate-900 shadow-[0_0_15px_rgba(6,182,212,0.3)]'
              : 'bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10 hover:border-neo-blue/50'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};
