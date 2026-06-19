import React, { useMemo } from 'react';

interface Props {
  content: string;
}

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export const TableOfContents: React.FC<Props> = ({ content }) => {
  const headings = useMemo(() => {
    const regex = /^(##|###)\s+(.*)$/gm;
    const items: TocItem[] = [];
    let match;

    while ((match = regex.exec(content)) !== null) {
      const level = match[1].length;
      const text = match[2];
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      items.push({ id, text, level });
    }

    return items;
  }, [content]);

  if (headings.length === 0) return null;

  return (
    <div className="sticky top-32 bg-slate-900/40 border border-white/10 rounded-2xl p-6 hidden lg:block">
      <h4 className="text-white font-bold text-lg mb-4 uppercase tracking-widest text-sm">Table of Contents</h4>
      <nav className="space-y-3">
        {headings.map((heading, index) => (
          <a
            key={index}
            href={`#${heading.id}`}
            className={`block text-sm transition-colors hover:text-neo-blue ${
              heading.level === 2 ? 'text-slate-300 font-medium' : 'text-slate-500 pl-4'
            }`}
          >
            {heading.text}
          </a>
        ))}
      </nav>
    </div>
  );
};
