import React, { useState } from 'react';
import { Linkedin, Twitter, Facebook, Link as LinkIcon, Check } from 'lucide-react';

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

  const links = [
    { Icon: Linkedin, href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`, label: 'Share on LinkedIn' },
    { Icon: Twitter, href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`, label: 'Share on X' },
    { Icon: Facebook, href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, label: 'Share on Facebook' },
  ];

  if (isLight) {
    return (
      <div className="my-14 flex flex-wrap items-center gap-4 border-y border-hairline py-6">
        <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-faint">
          Share
        </span>
        <div className="flex gap-2">
          {links.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center border border-hairline text-muted2 transition-colors hover:border-brand hover:text-brand"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
          <button
            onClick={copyToClipboard}
            aria-label="Copy link"
            className="flex h-10 w-10 items-center justify-center border border-hairline text-muted2 transition-colors hover:border-brand hover:text-brand"
          >
            {copied ? <Check className="h-4 w-4 text-brand" /> : <LinkIcon className="h-4 w-4" />}
          </button>
        </div>
      </div>
    );
  }

  // Dark (mobile / legacy)
  return (
    <div className="my-12 flex items-center gap-4 border-y border-white/10 py-8">
      <span className="text-sm font-bold uppercase tracking-widest text-white">Share this article</span>
      <div className="flex gap-2">
        {links.map(({ Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-900 text-slate-400 transition-all hover:border-neo-blue/50 hover:text-neo-blue"
          >
            <Icon className="h-4 w-4" />
          </a>
        ))}
        <button
          onClick={copyToClipboard}
          aria-label="Copy link"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-900 text-slate-400 transition-all hover:border-neo-blue/50 hover:text-neo-blue"
        >
          {copied ? <Check className="h-4 w-4 text-green-400" /> : <LinkIcon className="h-4 w-4" />}
        </button>
      </div>
    </div>
  );
};
