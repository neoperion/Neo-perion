import React, { ReactNode } from 'react';

interface Column<T> {
  key: string;
  label: string;
  render: (row: T) => ReactNode;
  className?: string;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  loading?: boolean;
  emptyMessage?: string;
  keyExtractor: (row: T) => string;
}

export function DataTable<T extends Record<string, unknown>>({ columns, data, loading, emptyMessage = 'No data found', keyExtractor }: DataTableProps<T>) {
  if (loading) return <div className="bg-slate-900 border border-white/10 rounded-2xl p-8 text-center text-slate-400">Loading...</div>;
  if (data.length === 0) return <div className="bg-slate-900 border border-white/10 rounded-2xl p-12 text-center text-slate-400">{emptyMessage}</div>;

  return (
    <div className="bg-slate-900 border border-white/10 rounded-2xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/5 bg-slate-800/50">
              {columns.map((col) => (
                <th key={col.key} className={`p-4 text-xs font-semibold text-slate-400 uppercase tracking-wider ${col.className ?? ''}`}>
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {data.map((row) => (
              <tr key={keyExtractor(row)} className="hover:bg-white/[0.02] transition-colors group">
                {columns.map((col) => (
                  <td key={col.key} className={`p-4 ${col.className ?? ''}`}>{col.render(row)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
