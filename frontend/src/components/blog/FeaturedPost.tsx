import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Blog } from '@/types/blog';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import { format } from 'date-fns';

interface Props {
  post: Blog;
  theme?: 'light' | 'dark';
}

export const FeaturedPost: React.FC<Props> = ({ post, theme = 'dark' }) => {
  const isLight = theme === 'light';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`relative w-full rounded-[2rem] overflow-hidden border group mb-16 ${
        isLight ? 'border-zinc-200/80 bg-white shadow-sm' : 'border-white/10'
      }`}
    >
      <div className={`flex flex-col lg:flex-row ${isLight ? 'bg-white' : 'bg-slate-900/60'}`}>
        <div className="w-full lg:w-3/5 aspect-video lg:aspect-auto relative overflow-hidden">
          <div className={`absolute inset-0 transition-colors z-10 ${isLight ? 'bg-black/[0.02] group-hover:bg-transparent' : 'bg-black/20 group-hover:bg-transparent'}`} />
          <img 
            src={post.cover_image} 
            alt={post.title} 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
          />
        </div>
        
        <div className="w-full lg:w-2/5 p-8 md:p-12 flex flex-col justify-center relative z-20">
          <span className={`inline-block px-4 py-1.5 text-sm font-bold rounded-full uppercase tracking-widest w-max mb-6 ${
            isLight ? 'bg-blue-50 text-neo-blue border border-blue-100' : 'bg-neo-blue/10 text-neo-blue'
          }`}>
            Featured • {post.category}
          </span>
          
          <h2 className={`text-3xl md:text-4xl font-display font-bold mb-4 leading-tight transition-colors ${
            isLight ? 'text-[#09090B] group-hover:text-neo-blue' : 'text-white group-hover:text-neo-blue'
          }`}>
            {post.title}
          </h2>
          
          <p className={`text-lg mb-8 line-clamp-3 ${
            isLight ? 'text-slate-500' : 'text-slate-400'
          }`}>
            {post.excerpt}
          </p>
          
          <div className={`flex items-center gap-6 text-sm mb-8 ${
            isLight ? 'text-slate-400' : 'text-slate-500'
          }`}>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {format(new Date(post.created_at), 'MMMM dd, yyyy')}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.read_time} min read
            </span>
          </div>
 
          <Link 
            to={`/company/blog/${post.slug}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-neo-blue hover:bg-blue-600 text-white font-bold w-max transition-colors"
          >
            Read Article
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
