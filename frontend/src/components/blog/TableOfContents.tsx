import React, { useMemo } from 'react';

interface Props {
  content: string;
  theme?: 'light' | 'dark';
}

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export const TableOfContents: React.FC<Props> = ({ content, theme = 'dark' }) => {
  const isLight = theme === 'light';
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

  if (isLight) {
    return (
      <div className="sticky top-28 hidden border border-hairline bg-paper p-6 lg:block">
        <p className="mb-4 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-faint">
          On this page
        </p>
        <nav className="space-y-2.5 border-l border-hairline">
          {headings.map((heading, index) => (
            <a
              key={index}
              href={`#${heading.id}`}
              className={`-ml-px block border-l-2 border-transparent text-[13.5px] leading-snug text-muted2 transition-colors hover:border-brand hover:text-ink ${
                heading.level === 2 ? 'pl-4 font-medium' : 'pl-7 text-faint'
              }`}
            >
              {heading.text}
            </a>
          ))}
        </nav>
      </div>
    );
  }

  // Dark (mobile / legacy)
  return (
    <div className="sticky top-32 hidden rounded-2xl border border-white/10 bg-slate-900/40 p-6 lg:block">
      <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-white">Table of Contents</h4>
      <nav className="space-y-3">
        {headings.map((heading, index) => (
          <a
            key={index}
            href={`#${heading.id}`}
            className={`block text-sm transition-colors hover:text-neo-blue ${
              heading.level === 2 ? 'font-medium text-slate-300' : 'pl-4 text-slate-500'
            }`}
          >
            {heading.text}
          </a>
        ))}
      </nav>
    </div>
  );
};
