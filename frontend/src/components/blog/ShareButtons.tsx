import React from 'react';
import { Linkedin, Twitter, Facebook, Link as LinkIcon, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

interface Props {
  url: string;
  title: string;
  theme?: 'light' | 'dark';
}

export const ShareButtons: React.FC<Props> = ({ url, title, theme = 'dark' }) => {
  const [copied, setCopied] = useState(false);
  const isLight = theme === 'light';

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`flex items-center gap-4 py-8 border-y my-12 ${
      isLight ? 'border-zinc-200' : 'border-white/10'
    }`}>
      <span className={`font-bold text-sm uppercase tracking-widest ${isLight ? 'text-[#09090B]' : 'text-white'}`}>Share this article</span>
      
      <div className="flex gap-2">
        <a 
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`}
          target="_blank" 
          rel="noopener noreferrer"
          className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${
            isLight
              ? 'bg-slate-50 border-zinc-200 text-slate-500 hover:text-neo-blue hover:border-neo-blue/50 hover:bg-white'
              : 'bg-slate-900 border border-white/10 text-slate-400 hover:text-neo-blue hover:border-neo-blue/50'
          }`}
        >
          <Linkedin className="w-4 h-4" />
        </a>
        
        <a 
          href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
          target="_blank" 
          rel="noopener noreferrer"
          className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${
            isLight
              ? 'bg-slate-50 border-zinc-200 text-slate-500 hover:text-neo-blue hover:border-neo-blue/50 hover:bg-white'
              : 'bg-slate-900 border border-white/10 text-slate-400 hover:text-neo-blue hover:border-neo-blue/50'
          }`}
        >
          <Twitter className="w-4 h-4" />
        </a>
        
        <a 
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
          target="_blank" 
          rel="noopener noreferrer"
          className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${
            isLight
              ? 'bg-slate-50 border-zinc-200 text-slate-500 hover:text-neo-blue hover:border-neo-blue/50 hover:bg-white'
              : 'bg-slate-900 border border-white/10 text-slate-400 hover:text-neo-blue hover:border-neo-blue/50'
          }`}
        >
          <Facebook className="w-4 h-4" />
        </a>
 
        <button 
          onClick={copyToClipboard}
          className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${
            isLight
              ? 'bg-slate-50 border-zinc-200 text-slate-500 hover:text-neo-blue hover:border-neo-blue/50 hover:bg-white'
              : 'bg-slate-900 border border-white/10 text-slate-400 hover:text-neo-blue hover:border-neo-blue/50'
          }`}
        >
          {copied ? <CheckCircle2 className="w-4 h-4 text-green-400" /> : <LinkIcon className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
};
