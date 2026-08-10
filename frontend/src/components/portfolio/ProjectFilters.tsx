import React from 'react';
import { Search, X } from 'lucide-react';
import { projectsData } from '@/data/projectsData';

const COPPER = '#A8521E';
const INK = '#1F1A14';
const INK_SOFT = '#6B5B47';
const PARCHMENT_LIGHT = '#FAF5EC';

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
          <p className="mb-2 font-mono text-[10px] font-bold uppercase tracking-[0.32em]" style={{ color: COPPER }}>
            ✦ All Projects
          </p>
          <div className="flex items-baseline gap-4">
            <h2
              className="font-display font-black tracking-tight leading-none"
              style={{ fontSize: 'clamp(1.9rem,3.5vw,3rem)', color: INK }}
            >
              The Full Archive
            </h2>
            <span className="font-mono text-[11px] tracking-wide hidden sm:inline" style={{ color: INK_SOFT }}>
              {filteredCount === totalCount ? `${totalCount} projects` : `${filteredCount} of ${totalCount}`}
            </span>
          </div>
        </div>

        {/* Search — right-aligned, compact — manuscript style */}
        <div className="relative shrink-0 w-52 hidden md:block">
          <Search
            className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 pointer-events-none"
            style={{ color: INK_SOFT }}
          />
          <input
            type="text"
            placeholder="Search…"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full rounded-lg pl-9 pr-8 py-2 text-[13px] font-sans outline-none transition-all duration-200"
            style={{
              background: PARCHMENT_LIGHT,
              border: `1px solid rgba(168,82,30,0.20)`,
              color: INK,
            }}
            onFocus={e => ((e.target as HTMLElement).style.borderColor = `${COPPER}80`)}
            onBlur={e => ((e.target as HTMLElement).style.borderColor = 'rgba(168,82,30,0.20)')}
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 transition-colors"
              style={{ color: INK_SOFT }}
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* ── Filter tabs + mobile search ────────────────── */}
      <div className="flex flex-col gap-3">
        {/* Scrollable tab row — manuscript index tabs */}
        <div className="relative">
          {/* Fade mask right edge — parchment fade */}
          <div
            className="absolute right-0 top-0 bottom-0 w-12 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, #EDE5D4, transparent)' }}
          />
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
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded text-[11px] font-bold font-mono uppercase tracking-[0.08em] whitespace-nowrap transition-all duration-200"
                    style={
                      isActive
                        ? {
                            background: COPPER,
                            color: '#FAF5EC',
                            border: `1px solid ${COPPER}`,
                            boxShadow: '0 2px 10px rgba(168,82,30,0.20)',
                          }
                        : {
                            background: PARCHMENT_LIGHT,
                            color: INK_SOFT,
                            border: '1px solid rgba(168,82,30,0.18)',
                          }
                    }
                    onMouseEnter={e => {
                      if (!isActive) {
                        (e.currentTarget as HTMLElement).style.borderColor = `${COPPER}55`;
                        (e.currentTarget as HTMLElement).style.color = INK;
                      }
                    }}
                    onMouseLeave={e => {
                      if (!isActive) {
                        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(168,82,30,0.18)';
                        (e.currentTarget as HTMLElement).style.color = INK_SOFT;
                      }
                    }}
                  >
                    {cat}
                    <span
                      className="text-[9px] tabular-nums"
                      style={{ color: isActive ? 'rgba(250,245,236,0.65)' : 'rgba(107,91,71,0.55)' }}
                    >
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
          <Search
            className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 pointer-events-none"
            style={{ color: INK_SOFT }}
          />
          <input
            type="text"
            placeholder="Search projects…"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full rounded-lg pl-9 pr-4 py-2.5 text-[13px] font-sans outline-none transition-all duration-200"
            style={{
              background: PARCHMENT_LIGHT,
              border: `1px solid rgba(168,82,30,0.20)`,
              color: INK,
            }}
          />
        </div>
      </div>

      {/* ── Copper divider ─────────────────────────────── */}
      <div
        className="mt-8 h-px"
        style={{ background: 'rgba(168,82,30,0.12)' }}
      />
    </div>
  );
};
