import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface Props {
  content: string;
  theme?: 'light' | 'dark';
}

export const MarkdownRenderer: React.FC<Props> = ({ content, theme = 'dark' }) => {
  const isLight = theme === 'light';

  return (
    <div className={`prose prose-cyan max-w-none ${isLight ? 'prose-zinc' : 'prose-invert'}`}>
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({node, ...props}) => <h1 className={`text-4xl font-display font-bold mt-12 mb-6 ${isLight ? 'text-[#09090B]' : 'text-white'}`} {...props} />,
          h2: ({node, ...props}) => {
            const id = props.children?.toString().toLowerCase().replace(/[^a-z0-9]+/g, '-');
            return <h2 id={id} className={`text-3xl font-display font-bold mt-10 mb-5 scroll-mt-24 ${isLight ? 'text-[#09090B]' : 'text-white'}`} {...props} />;
          },
          h3: ({node, ...props}) => {
            const id = props.children?.toString().toLowerCase().replace(/[^a-z0-9]+/g, '-');
            return <h3 id={id} className={`text-2xl font-bold mt-8 mb-4 scroll-mt-24 ${isLight ? 'text-[#09090B]' : 'text-white'}`} {...props} />;
          },
          p: ({node, ...props}) => <p className={`leading-relaxed mb-6 text-lg ${isLight ? 'text-slate-600' : 'text-slate-300'}`} {...props} />,
          ul: ({node, ...props}) => <ul className={`list-disc pl-6 mb-6 space-y-2 ${isLight ? 'text-slate-600' : 'text-slate-300'}`} {...props} />,
          ol: ({node, ...props}) => <ol className={`list-decimal pl-6 mb-6 space-y-2 ${isLight ? 'text-slate-600' : 'text-slate-300'}`} {...props} />,
          li: ({node, ...props}) => <li className="pl-2" {...props} />,
          a: ({node, ...props}) => <a className="text-neo-blue hover:text-blue-600 underline underline-offset-4" {...props} />,
          blockquote: ({node, ...props}) => (
            <blockquote className={`border-l-4 border-neo-blue pl-6 py-2 my-8 text-xl italic rounded-r-xl ${
              isLight ? 'text-slate-700 bg-slate-50' : 'text-slate-400 bg-slate-900/30'
            }`} {...props} />
          ),
          code: ({node, inline, className, children, ...props}: any) => {
            const match = /language-(\w+)/.exec(className || '');
            return !inline ? (
              <div className={`relative rounded-xl overflow-hidden my-8 border ${
                isLight ? 'bg-zinc-50 border-zinc-200/80 shadow-sm' : 'bg-[#0d1117] border-white/10'
              }`}>
                <div className={`flex items-center px-4 py-2 border-b ${
                  isLight ? 'bg-zinc-100 border-zinc-200 text-slate-500' : 'bg-slate-900 border-white/10 text-slate-400'
                }`}>
                  <span className="text-xs font-mono">{match?.[1] || 'code'}</span>
                </div>
                <div className="p-4 overflow-x-auto">
                  <code className={`block text-sm font-mono ${isLight ? 'text-slate-800' : 'text-slate-300'} ${className}`} {...props}>
                    {children}
                  </code>
                </div>
              </div>
            ) : (
              <code className={`px-1.5 py-0.5 rounded font-mono text-sm ${
                isLight ? 'bg-zinc-100 text-slate-800' : 'bg-slate-800 text-neo-blue'
              }`} {...props}>
                {children}
              </code>
            )
          }
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};
