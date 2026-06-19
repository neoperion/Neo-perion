import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface Props {
  content: string;
}

export const MarkdownRenderer: React.FC<Props> = ({ content }) => {
  return (
    <div className="prose prose-invert prose-cyan max-w-none">
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({node, ...props}) => <h1 className="text-4xl font-display font-bold text-white mt-12 mb-6" {...props} />,
          h2: ({node, ...props}) => {
            // Generate id from children text to allow anchor linking from TOC
            const id = props.children?.toString().toLowerCase().replace(/[^a-z0-9]+/g, '-');
            return <h2 id={id} className="text-3xl font-display font-bold text-white mt-10 mb-5 scroll-mt-24" {...props} />;
          },
          h3: ({node, ...props}) => {
            const id = props.children?.toString().toLowerCase().replace(/[^a-z0-9]+/g, '-');
            return <h3 id={id} className="text-2xl font-bold text-white mt-8 mb-4 scroll-mt-24" {...props} />;
          },
          p: ({node, ...props}) => <p className="text-slate-300 leading-relaxed mb-6 text-lg" {...props} />,
          ul: ({node, ...props}) => <ul className="list-disc pl-6 text-slate-300 mb-6 space-y-2" {...props} />,
          ol: ({node, ...props}) => <ol className="list-decimal pl-6 text-slate-300 mb-6 space-y-2" {...props} />,
          li: ({node, ...props}) => <li className="pl-2" {...props} />,
          a: ({node, ...props}) => <a className="text-neo-blue hover:text-neo-blue underline underline-offset-4" {...props} />,
          blockquote: ({node, ...props}) => (
            <blockquote className="border-l-4 border-neo-blue pl-6 py-2 my-8 text-xl italic text-slate-400 bg-slate-900/30 rounded-r-xl" {...props} />
          ),
          code: ({node, inline, className, children, ...props}: any) => {
            const match = /language-(\w+)/.exec(className || '');
            return !inline ? (
              <div className="relative rounded-xl overflow-hidden my-8 bg-[#0d1117] border border-white/10">
                <div className="flex items-center px-4 py-2 bg-slate-900 border-b border-white/10">
                  <span className="text-xs text-slate-400 font-mono">{match?.[1] || 'code'}</span>
                </div>
                <div className="p-4 overflow-x-auto">
                  <code className={`block text-sm font-mono text-slate-300 ${className}`} {...props}>
                    {children}
                  </code>
                </div>
              </div>
            ) : (
              <code className="bg-slate-800 text-neo-blue px-1.5 py-0.5 rounded font-mono text-sm" {...props}>
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
