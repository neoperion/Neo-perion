import React from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';

export const categories = [
  "All",
  "AI Products",
  "SaaS Platforms",
  "E-Commerce",
  "Agritech",
  "EdTech",
  "Social Impact",
  "Corporate Websites"
];

interface ProjectFiltersProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const ProjectFilters: React.FC<ProjectFiltersProps> = ({
  selectedCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange
}) => {
  return (
    <div className="flex flex-col gap-8 mb-16">
      {/* Section label */}
      <div className="flex items-end justify-between gap-8">
        <div>
          <span
            className="text-[11px] text-white/40 uppercase block mb-4 font-sans tracking-[0.3em]"
          >
            All Projects
          </span>
          <h2
            className="text-3xl md:text-5xl font-extrabold text-white tracking-tight font-display"
          >
            The Archive
          </h2>
        </div>
        <div className="hidden md:block h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
      </div>

      {/* Filter row */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center justify-between">
        <div className="w-full overflow-x-auto pb-2 hide-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex gap-2 min-w-max sm:min-w-0 sm:flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`px-5 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-300 uppercase font-sans tracking-[0.1em] ${
                  selectedCategory === category
                    ? 'bg-white text-black shadow-[0_0_30px_rgba(255,255,255,0.15)]'
                    : 'bg-white/[0.04] text-white/40 border border-white/[0.06] hover:bg-white/[0.08] hover:text-white/70'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Search */}
        <div className="relative w-full max-w-xs">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full bg-white/[0.03] border border-white/[0.06] rounded-full pl-11 pr-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-white/20 transition-all font-sans"
          />
        </div>
      </div>
    </div>
  );
};
