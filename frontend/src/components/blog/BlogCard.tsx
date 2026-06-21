import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Blog } from '@/types/blog';
import { Calendar, Clock } from 'lucide-react';
import { format } from 'date-fns';

interface Props {
  post: Blog;
  index?: number;
  theme?: 'light' | 'dark';
}

export const BlogCard: React.FC<Props> = ({ post, index = 0, theme = 'dark' }) => {
  const isLight = theme === 'light';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`group relative border rounded-3xl overflow-hidden transition-all flex flex-col h-full ${
        isLight
          ? 'border-zinc-200/80 bg-white hover:border-zinc-300 hover:shadow-md hover:scale-[1.01]'
          : 'bg-slate-900/40 border-white/10 hover:border-neo-blue/50 transition-all duration-300'
      }`}
    >
      <Link to={`/company/blog/${post.slug}`} className="absolute inset-0 z-10" aria-label={`Read ${post.title}`} />
      
      <div className="relative aspect-video overflow-hidden">
        <div className={`absolute inset-0 transition-colors z-10 ${isLight ? 'bg-black/[0.02] group-hover:bg-transparent' : 'bg-black/20 group-hover:bg-transparent'}`} />
        <img 
          src={post.cover_image} 
          alt={post.title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 z-20">
          <span className={`px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wider ${
            isLight ? 'bg-white text-neo-blue shadow-sm border border-zinc-100' : 'bg-slate-900/80 backdrop-blur-md text-neo-blue'
          }`}>
            {post.category}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className={`text-xl font-bold mb-3 transition-colors line-clamp-2 ${
          isLight ? 'text-[#09090B] group-hover:text-neo-blue' : 'text-white group-hover:text-neo-blue'
        }`}>
          {post.title}
        </h3>
        <p className={`text-sm mb-6 line-clamp-3 flex-grow ${
          isLight ? 'text-slate-500' : 'text-slate-400'
        }`}>
          {post.excerpt}
        </p>

        <div className={`flex items-center justify-between text-xs pt-4 border-t mt-auto ${
          isLight ? 'text-slate-400 border-zinc-100' : 'text-slate-500 border-white/10'
        }`}>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {format(new Date(post.created_at), 'MMM dd, yyyy')}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.read_time} min read
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
