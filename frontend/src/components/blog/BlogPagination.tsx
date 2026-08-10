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

  if (isLight) {
    return (
      <div className="mt-16 flex items-center justify-center gap-2">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="flex h-10 w-10 items-center justify-center border border-hairline text-muted2 transition-colors hover:border-brand hover:text-brand disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-hairline disabled:hover:text-muted2"
          aria-label="Previous page"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        {pages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`h-10 w-10 text-sm font-semibold transition-colors ${
              currentPage === page
                ? 'border border-brand bg-brand text-white'
                : 'border border-hairline text-muted2 hover:border-brand hover:text-brand'
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="flex h-10 w-10 items-center justify-center border border-hairline text-muted2 transition-colors hover:border-brand hover:text-brand disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-hairline disabled:hover:text-muted2"
          aria-label="Next page"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    );
  }

  // Dark (mobile / legacy)
  return (
    <div className="mt-16 flex items-center justify-center gap-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="rounded-lg border border-white/10 p-2 text-slate-400 transition-colors hover:parchment-surface/5 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
        aria-label="Previous page"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`h-10 w-10 rounded-lg text-sm font-medium transition-colors ${
            currentPage === page
              ? 'bg-neo-blue text-white'
              : 'border border-white/10 text-slate-400 hover:parchment-surface/5 hover:text-white'
          }`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="rounded-lg border border-white/10 p-2 text-slate-400 transition-colors hover:parchment-surface/5 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
        aria-label="Next page"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
};
