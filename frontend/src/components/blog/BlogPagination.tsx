import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  theme?: 'light' | 'dark';
}

export const BlogPagination: React.FC<Props> = ({ currentPage, totalPages, onPageChange, theme = 'dark' }) => {
  if (totalPages <= 1) return null;

  const isLight = theme === 'light';
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center gap-2 mt-16">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`p-2 rounded-lg border transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
          isLight
            ? 'border-zinc-200 text-slate-500 hover:text-[#09090B] hover:bg-slate-50'
            : 'border-white/10 text-slate-400 hover:text-white hover:bg-white/5'
        }`}
        aria-label="Previous page"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {pages.map(page => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors ${
            currentPage === page
              ? isLight
                ? 'bg-neo-blue text-white'
                : 'bg-neo-blue text-slate-900'
              : isLight
                ? 'border border-zinc-200 text-slate-500 hover:text-[#09090B] hover:bg-slate-50'
                : 'border border-white/10 text-slate-400 hover:text-white hover:bg-white/5'
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`p-2 rounded-lg border transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
          isLight
            ? 'border-zinc-200 text-slate-500 hover:text-[#09090B] hover:bg-slate-50'
            : 'border-white/10 text-slate-400 hover:text-white hover:bg-white/5'
        }`}
        aria-label="Next page"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};
