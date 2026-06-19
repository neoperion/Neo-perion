import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Blog } from '@/types/blog';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import { format } from 'date-fns';

interface Props {
  post: Blog;
}

export const FeaturedPost: React.FC<Props> = ({ post }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative w-full rounded-[2rem] overflow-hidden border border-white/10 group mb-16"
    >
      <div className="flex flex-col lg:flex-row bg-slate-900/60">
        <div className="w-full lg:w-3/5 aspect-video lg:aspect-auto relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
          <img 
            src={post.cover_image} 
            alt={post.title} 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
          />
        </div>
        
        <div className="w-full lg:w-2/5 p-8 md:p-12 flex flex-col justify-center relative z-20">
          <span className="inline-block px-4 py-1.5 bg-neo-blue/10 text-neo-blue text-sm font-bold rounded-full uppercase tracking-widest w-max mb-6">
            Featured • {post.category}
          </span>
          
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 leading-tight group-hover:text-neo-blue transition-colors">
            {post.title}
          </h2>
          
          <p className="text-slate-400 text-lg mb-8 line-clamp-3">
            {post.excerpt}
          </p>
          
          <div className="flex items-center gap-6 text-sm text-slate-500 mb-8">
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
            to={`/blog/${post.slug}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-neo-blue hover:bg-neo-blue text-slate-900 font-bold w-max transition-colors"
          >
            Read Article
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
