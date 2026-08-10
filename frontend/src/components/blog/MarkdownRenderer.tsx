import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface Props {
  content: string;
  theme?: 'light' | 'dark';
}

export const MarkdownRenderer: React.FC<Props> = ({ content, theme = 'dark' }) => {
  const isLight = theme === 'light';

  if (isLight) {
    return (
      <div className="max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({ node, ...props }) => (
              <h1 className="mt-12 mb-5 font-display text-[clamp(28px,3vw,38px)] font-bold leading-tight tracking-[-0.01em] text-ink" {...props} />
            ),
            h2: ({ node, ...props }) => {
              const id = props.children?.toString().toLowerCase().replace(/[^a-z0-9]+/g, '-');
              return <h2 id={id} className="mt-14 mb-4 scroll-mt-28 font-display text-[26px] font-bold tracking-tight text-ink" {...props} />;
            },
            h3: ({ node, ...props }) => {
              const id = props.children?.toString().toLowerCase().replace(/[^a-z0-9]+/g, '-');
              return <h3 id={id} className="mt-10 mb-3 scroll-mt-28 text-[20px] font-bold tracking-tight text-ink" {...props} />;
            },
            p: ({ node, ...props }) => <p className="mb-6 text-[17px] leading-[1.8] text-body" {...props} />,
            ul: ({ node, ...props }) => <ul className="mb-6 list-disc space-y-2 pl-6 text-[17px] leading-[1.7] text-body marker:text-brand" {...props} />,
            ol: ({ node, ...props }) => <ol className="mb-6 list-decimal space-y-2 pl-6 text-[17px] leading-[1.7] text-body marker:text-faint" {...props} />,
            li: ({ node, ...props }) => <li className="pl-1.5" {...props} />,
            a: ({ node, ...props }) => <a className="font-medium text-brand underline decoration-brand/30 underline-offset-[3px] transition-colors hover:decoration-brand" {...props} />,
            strong: ({ node, ...props }) => <strong className="font-semibold text-ink" {...props} />,
            hr: () => <hr className="my-12 border-hairline" />,
            blockquote: ({ node, ...props }) => (
              <blockquote className="my-8 border-l-2 border-brand bg-canvas py-2 pl-6 text-[19px] leading-relaxed text-ink" {...props} />
            ),
            code: ({ node, inline, className, children, ...props }: any) => {
              const match = /language-(\w+)/.exec(className || '');
              return !inline ? (
                <div className="my-8 overflow-hidden border border-hairline bg-paper">
                  <div className="flex items-center border-b border-hairline bg-canvas px-4 py-2 text-faint">
                    <span className="font-mono text-xs">{match?.[1] || 'code'}</span>
                  </div>
                  <div className="overflow-x-auto p-4">
                    <code className={`block font-mono text-[13.5px] leading-relaxed text-ink ${className}`} {...props}>
                      {children}
                    </code>
                  </div>
                </div>
              ) : (
                <code className="border border-hairline bg-canvas px-1.5 py-0.5 font-mono text-[14px] text-ink" {...props}>
                  {children}
                </code>
              );
            },
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    );
  }

  // Dark (manuscript/rustDeep)
  return (
    <div className="max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ node, ...props }) => <h1 className="mt-12 mb-6 font-display text-[clamp(28px,3vw,38px)] font-bold leading-tight tracking-[-0.01em] text-manuscript-parchmentLight" {...props} />,
          h2: ({ node, ...props }) => {
            const id = props.children?.toString().toLowerCase().replace(/[^a-z0-9]+/g, '-');
            return <h2 id={id} className="mt-14 mb-4 scroll-mt-28 font-display text-[26px] font-bold tracking-tight text-manuscript-parchmentLight" {...props} />;
          },
          h3: ({ node, ...props }) => {
            const id = props.children?.toString().toLowerCase().replace(/[^a-z0-9]+/g, '-');
            return <h3 id={id} className="mt-10 mb-3 scroll-mt-28 text-[20px] font-bold tracking-tight text-manuscript-parchmentLight" {...props} />;
          },
          p: ({ node, ...props }) => <p className="mb-6 text-[17px] leading-[1.8] text-manuscript-parchment/90" {...props} />,
          ul: ({ node, ...props }) => <ul className="mb-6 list-disc space-y-2 pl-6 text-[17px] leading-[1.7] text-manuscript-parchment/90 marker:text-manuscript-gold" {...props} />,
          ol: ({ node, ...props }) => <ol className="mb-6 list-decimal space-y-2 pl-6 text-[17px] leading-[1.7] text-manuscript-parchment/90 marker:text-manuscript-gold/50" {...props} />,
          li: ({ node, ...props }) => <li className="pl-1.5" {...props} />,
          a: ({ node, ...props }) => <a className="font-medium text-manuscript-gold underline decoration-manuscript-gold/30 underline-offset-[3px] transition-colors hover:decoration-manuscript-gold" {...props} />,
          strong: ({ node, ...props }) => <strong className="font-semibold text-manuscript-parchmentLight" {...props} />,
          hr: () => <hr className="my-12 border-manuscript-gold/20" />,
          blockquote: ({ node, ...props }) => (
            <blockquote className="my-8 rounded-r-xl border-l-4 border-manuscript-gold bg-manuscript-ink/50 py-2 pl-6 text-[19px] leading-relaxed italic text-manuscript-parchment/70" {...props} />
          ),
          code: ({ node, inline, className, children, ...props }: any) => {
            const match = /language-(\w+)/.exec(className || '');
            return !inline ? (
              <div className="my-8 overflow-hidden rounded-xl border border-manuscript-gold/20 bg-manuscript-ink/80 shadow-lg shadow-black/10">
                <div className="flex items-center border-b border-manuscript-gold/20 bg-manuscript-ink px-4 py-2 text-manuscript-gold/70">
                  <span className="font-mono text-xs">{match?.[1] || 'code'}</span>
                </div>
                <div className="overflow-x-auto p-4">
                  <code className={`block font-mono text-[13.5px] leading-relaxed text-manuscript-parchment/90 ${className}`} {...props}>
                    {children}
                  </code>
                </div>
              </div>
            ) : (
              <code className="rounded bg-manuscript-ink/80 px-1.5 py-0.5 border border-manuscript-gold/20 font-mono text-[14px] text-manuscript-gold" {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};
