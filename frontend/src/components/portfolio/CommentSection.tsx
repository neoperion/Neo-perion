import React, { useState } from 'react';
import { Comment, CommentType } from './Comment';
import { motion } from 'framer-motion';

const INITIAL_COMMENTS: CommentType[] = [
  {
    id: '1',
    userName: 'Sarah Jenkins',
    userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    text: 'This UI looks incredibly clean. The micro-interactions really sell the enterprise feel while keeping it modern.',
    timestamp: '2 hours ago',
    likes: 12,
    isLiked: false,
    replies: [
      {
        id: '1-1',
        userName: 'Alex Rivera',
        userAvatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=150&q=80',
        text: 'Yes! Tailwind utility classes mixed with Framer Motion makes the workflow so much faster.',
        timestamp: '1 hour ago',
        likes: 3,
        isLiked: false,
        replies: []
      }
    ]
  }
];

export const CommentSection: React.FC = () => {
  const [comments, setComments] = useState<CommentType[]>(INITIAL_COMMENTS);
  const [newCommentText, setNewCommentText] = useState('');

  // Helper to deep update comment nodes
  const updateCommentNode = (nodes: CommentType[], id: string, updateFn: (node: CommentType) => CommentType): CommentType[] => {
    return nodes.map(node => {
      if (node.id === id) return updateFn(node);
      if (node.replies) return { ...node, replies: updateCommentNode(node.replies, id, updateFn) };
      return node;
    });
  };

  // Helper to deep remove comment nodes
  const removeCommentNode = (nodes: CommentType[], id: string): CommentType[] => {
    return nodes
      .filter(node => node.id !== id)
      .map(node => ({
        ...node,
        replies: node.replies ? removeCommentNode(node.replies, id) : []
      }));
  };

  const handleAddRootComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommentText.trim()) return;

    const newComment: CommentType = {
      id: Date.now().toString(),
      userName: 'Current User',
      userAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
      text: newCommentText,
      timestamp: 'Just now',
      likes: 0,
      isLiked: false,
      replies: []
    };

    setComments([newComment, ...comments]);
    setNewCommentText('');
  };

  const handleLike = (id: string) => {
    setComments(prev => updateCommentNode(prev, id, (node) => ({
      ...node,
      likes: node.isLiked ? node.likes - 1 : node.likes + 1,
      isLiked: !node.isLiked
    })));
  };

  const handleReply = (parentId: string, text: string) => {
    const newReply: CommentType = {
      id: Date.now().toString(),
      userName: 'Current User',
      userAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
      text: text,
      timestamp: 'Just now',
      likes: 0,
      isLiked: false,
      replies: []
    };

    setComments(prev => updateCommentNode(prev, parentId, (node) => ({
      ...node,
      replies: [...(node.replies || []), newReply]
    })));
  };

  const handleDelete = (id: string) => {
    setComments(prev => removeCommentNode(prev, id));
  };

  return (
    <section className="py-24 bg-[#050816] relative border-t border-white/5">
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
        >
          <div>
            <h2 className="text-3xl font-display font-bold text-white mb-2 flex items-center gap-3">
              Discussion 
              <span className="text-sm bg-white/10 px-3 py-1 rounded-full text-slate-300 border border-white/10 font-mono">
                {comments.length}
              </span>
            </h2>
            <p className="text-slate-400">Share your thoughts on this project or ask technical questions.</p>
          </div>
        </motion.div>

        {/* Main Comment Box */}
        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleAddRootComment} 
          className="mb-12"
        >
          <div className="bg-slate-900/50 rounded-2xl border border-white/10 p-4 shadow-xl backdrop-blur-sm focus-within:ring-1 focus-within:ring-neo-blue focus-within:border-neo-blue transition-all">
            <textarea
              rows={3}
              placeholder="Join the discussion..."
              value={newCommentText}
              onChange={(e) => setNewCommentText(e.target.value)}
              className="w-full bg-transparent text-white text-base resize-none outline-none placeholder-slate-500 font-light"
            />
            <div className="flex justify-end pt-3 border-t border-white/5 mt-2">
              <button 
                type="submit" 
                className="bg-neo-blue text-white text-sm px-6 py-2.5 rounded-xl font-medium hover:bg-blue-600 shadow-lg shadow-neo-blue/20 transition-colors"
              >
                Post Comment
              </button>
            </div>
          </div>
        </motion.form>

        {/* Thread List */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          {comments.map(comment => (
            <Comment 
              key={comment.id}
              comment={comment}
              onLike={handleLike}
              onReply={handleReply}
              onDelete={handleDelete}
            />
          ))}
        </motion.div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-neo-blue/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
};
