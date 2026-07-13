import React from 'react';
import { Search, X } from 'lucide-react';
import { projectsData } from '@/data/projectsData';

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
  const totalCount = projectsData.length;
  const filteredCount = projectsData.filter(p => {
    const matchCat = selectedCategory === 'All' || p.category === selectedCategory;
    const matchSearch = !searchQuery || p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.industry.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  }).length;

  return (
    <div className="mb-12">

      {/* ── Header row ──────────────────────────────────── */}
      <div className="flex items-end justify-between gap-6 mb-8">
        <div>
          <p className="mb-2 font-mono text-[10px] font-bold uppercase tracking-[0.32em] text-[#F77E0D]">
            All Projects
          </p>
          <div className="flex items-baseline gap-4">
            <h2 className="font-display text-[clamp(1.9rem,3.5vw,3rem)] font-black tracking-tight text-white leading-none">
              The Full Archive
            </h2>
            <span className="font-mono text-[11px] text-white/30 tracking-wide hidden sm:inline">
              {filteredCount === totalCount ? `${totalCount} projects` : `${filteredCount} of ${totalCount}`}
            </span>
          </div>
        </div>

        {/* Search — right-aligned, compact */}
        <div className="relative shrink-0 w-52 hidden md:block">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/25 pointer-events-none" />
          <input
            type="text"
            placeholder="Search…"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg pl-9 pr-8 py-2 text-[13px] font-sans text-white/80 placeholder-white/25 focus:outline-none focus:border-[#F77E0D]/50 focus:bg-white/[0.06] transition-all duration-200"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* ── Filter pills + mobile search ────────────────── */}
      <div className="flex flex-col gap-3">
        {/* Scrollable pill row — no wrapping */}
        <div className="relative">
          {/* Fade mask right edge */}
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#0A0A0B] to-transparent z-10 pointer-events-none" />
          <div className="overflow-x-auto pb-1 hide-scrollbar">
            <div className="flex gap-2 min-w-max">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                const count = cat === 'All'
                  ? totalCount
                  : projectsData.filter(p => p.category === cat).length;

                return (
                  <button
                    key={cat}
                    onClick={() => onCategoryChange(cat)}
                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-[11px] font-bold font-mono uppercase tracking-[0.08em] whitespace-nowrap transition-all duration-200 ${
                      isActive
                        ? 'bg-[#F77E0D] text-[#0A0A0B] shadow-[0_0_16px_rgba(247,126,13,0.25)]'
                        : 'bg-white/[0.04] text-white/45 border border-white/[0.07] hover:bg-white/[0.07] hover:text-white/75 hover:border-white/[0.12]'
                    }`}
                  >
                    {cat}
                    <span className={`text-[9px] tabular-nums ${isActive ? 'text-[#0A0A0B]/60' : 'text-white/20'}`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile search */}
        <div className="relative md:hidden">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/25 pointer-events-none" />
          <input
            type="text"
            placeholder="Search projects…"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg pl-9 pr-4 py-2.5 text-[13px] font-sans text-white/80 placeholder-white/25 focus:outline-none focus:border-[#F77E0D]/50 transition-all duration-200"
          />
        </div>
      </div>

      {/* ── Divider ─────────────────────────────────────── */}
      <div className="mt-8 h-px bg-white/[0.06]" />
    </div>
  );
};
