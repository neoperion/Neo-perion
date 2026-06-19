import React from 'react';
import { Linkedin, Twitter, Facebook, Link as LinkIcon, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

interface Props {
  url: string;
  title: string;
}

export const ShareButtons: React.FC<Props> = ({ url, title }) => {
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-4 py-8 border-y border-white/10 my-12">
      <span className="text-white font-bold text-sm uppercase tracking-widest">Share this article</span>
      
      <div className="flex gap-2">
        <a 
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`}
          target="_blank" 
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-neo-blue hover:border-neo-blue/50 transition-all"
        >
          <Linkedin className="w-4 h-4" />
        </a>
        
        <a 
          href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
          target="_blank" 
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-neo-blue hover:border-neo-blue/50 transition-all"
        >
          <Twitter className="w-4 h-4" />
        </a>
        
        <a 
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
          target="_blank" 
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-neo-blue hover:border-neo-blue/50 transition-all"
        >
          <Facebook className="w-4 h-4" />
        </a>

        <button 
          onClick={copyToClipboard}
          className="w-10 h-10 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-neo-blue hover:border-neo-blue/50 transition-all"
        >
          {copied ? <CheckCircle2 className="w-4 h-4 text-green-400" /> : <LinkIcon className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
};
