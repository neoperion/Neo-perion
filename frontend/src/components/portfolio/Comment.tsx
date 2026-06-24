import React, { useState } from 'react';
import { ThumbsUp, MessageSquare, CornerDownRight, Trash2 } from 'lucide-react';

export interface CommentType {
  id: string;
  userName: string;
  userAvatar: string;
  text: string;
  timestamp: string;
  likes: number;
  isLiked: boolean;
  replies?: CommentType[];
}

interface CommentProps {
  comment: CommentType;
  onLike: (id: string) => void;
  onReply: (parentId: string, text: string) => void;
  onDelete: (id: string) => void;
}

export const Comment: React.FC<CommentProps> = ({ comment, onLike, onReply, onDelete }) => {
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [replyText, setReplyText] = useState('');

  const handleReplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyText.trim()) return;
    onReply(comment.id, replyText);
    setReplyText('');
    setShowReplyForm(false);
  };

  return (
    <div className="group relative border-l-2 border-slate-800/50 pl-4 my-4 ml-2 transition-all duration-300 hover:border-neo-blue">
      <div className="bg-slate-900/50 p-5 rounded-2xl border border-white/5 hover:border-white/10 hover:bg-slate-900/80 backdrop-blur-sm transition-all duration-300 shadow-xl shadow-black/20">
        {/* User Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <img 
              src={comment.userAvatar} 
              alt={comment.userName} 
              className="w-9 h-9 rounded-full object-cover border border-white/10 shadow-sm"
            />
            <div>
              <span className="font-semibold text-white text-sm block tracking-wide">{comment.userName}</span>
              <span className="text-[11px] text-slate-400 block font-mono mt-0.5">{comment.timestamp}</span>
            </div>
          </div>
          <button 
            onClick={() => onDelete(comment.id)}
            className="text-slate-500 hover:text-rose-500 hover:bg-rose-500/10 p-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-200"
            aria-label="Delete comment"
          >
            <Trash2 size={16} />
          </button>
        </div>

        {/* Content */}
        <p className="text-slate-300 text-sm leading-relaxed mb-4 pl-1 font-light">
          {comment.text}
        </p>

        {/* Actions */}
        <div className="flex items-center gap-5 text-xs font-medium text-slate-400">
          <button 
            onClick={() => onLike(comment.id)}
            className={`flex items-center gap-1.5 transition-colors px-2 py-1 -ml-2 rounded-md ${comment.isLiked ? 'text-neo-blue bg-neo-blue/10' : 'hover:text-neo-blue hover:bg-white/5'}`}
          >
            <ThumbsUp size={14} className={comment.isLiked ? 'fill-neo-blue/20' : ''} />
            <span>{comment.likes}</span>
          </button>
          
          <button 
            onClick={() => setShowReplyForm(!showReplyForm)}
            className={`flex items-center gap-1.5 transition-colors px-2 py-1 rounded-md ${showReplyForm ? 'text-white bg-white/5' : 'hover:text-white hover:bg-white/5'}`}
          >
            <MessageSquare size={14} />
            <span>Reply</span>
          </button>
        </div>
      </div>

      {/* Reply Form Input */}
      {showReplyForm && (
        <motion.form 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={handleReplySubmit} 
          className="mt-3 flex gap-2 items-center pl-2"
        >
          <CornerDownRight className="text-slate-500 shrink-0" size={16} />
          <input
            type="text"
            placeholder="Write a reply..."
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            className="w-full text-sm bg-slate-900 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-slate-500 outline-none focus:border-neo-blue focus:ring-1 focus:ring-neo-blue transition-all"
            autoFocus
          />
          <button type="submit" className="bg-neo-blue text-white text-xs px-4 py-2.5 rounded-xl font-medium hover:bg-blue-600 transition-colors shadow-lg shadow-neo-blue/20 shrink-0">
            Post Reply
          </button>
        </motion.form>
      )}

      {/* Nested Replies Rendering */}
      {comment.replies && comment.replies.length > 0 && (
        <div className="mt-3 space-y-3">
          {comment.replies.map((reply) => (
            <Comment 
              key={reply.id} 
              comment={reply} 
              onLike={onLike} 
              onReply={onReply} 
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
}

import { motion } from 'framer-motion';
