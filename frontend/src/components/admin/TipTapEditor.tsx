import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import { Bold, Italic, List, ListOrdered, Image as ImageIcon, Heading2, Quote, Undo, Redo } from 'lucide-react';

interface TipTapEditorProps {
  content: string;
  onChange: (html: string) => void;
}

const MenuBar = ({ editor }: { editor: any }) => {
  if (!editor) {
    return null;
  }

  const addImage = () => {
    const url = window.prompt('URL');
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-1 p-2 border-b border-white/10 bg-slate-900/50 rounded-t-lg">
      <button
        onClick={(e) => { e.preventDefault(); editor.chain().focus().toggleBold().run()}}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={`p-2 rounded hover:bg-white/10 ${editor.isActive('bold') ? 'bg-neo-blue/20 text-neo-blue' : 'text-slate-400'}`}
      >
        <Bold size={16} />
      </button>
      <button
        onClick={(e) => { e.preventDefault(); editor.chain().focus().toggleItalic().run()}}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={`p-2 rounded hover:bg-white/10 ${editor.isActive('italic') ? 'bg-neo-blue/20 text-neo-blue' : 'text-slate-400'}`}
      >
        <Italic size={16} />
      </button>
      <div className="w-px h-6 bg-white/10 mx-1" />
      <button
        onClick={(e) => { e.preventDefault(); editor.chain().focus().toggleHeading({ level: 2 }).run()}}
        className={`p-2 rounded hover:bg-white/10 ${editor.isActive('heading', { level: 2 }) ? 'bg-neo-blue/20 text-neo-blue' : 'text-slate-400'}`}
      >
        <Heading2 size={16} />
      </button>
      <button
        onClick={(e) => { e.preventDefault(); editor.chain().focus().toggleBulletList().run()}}
        className={`p-2 rounded hover:bg-white/10 ${editor.isActive('bulletList') ? 'bg-neo-blue/20 text-neo-blue' : 'text-slate-400'}`}
      >
        <List size={16} />
      </button>
      <button
        onClick={(e) => { e.preventDefault(); editor.chain().focus().toggleOrderedList().run()}}
        className={`p-2 rounded hover:bg-white/10 ${editor.isActive('orderedList') ? 'bg-neo-blue/20 text-neo-blue' : 'text-slate-400'}`}
      >
        <ListOrdered size={16} />
      </button>
      <button
        onClick={(e) => { e.preventDefault(); editor.chain().focus().toggleBlockquote().run()}}
        className={`p-2 rounded hover:bg-white/10 ${editor.isActive('blockquote') ? 'bg-neo-blue/20 text-neo-blue' : 'text-slate-400'}`}
      >
        <Quote size={16} />
      </button>
      <div className="w-px h-6 bg-white/10 mx-1" />
      <button
        onClick={(e) => { e.preventDefault(); addImage()}}
        className={`p-2 rounded hover:bg-white/10 text-slate-400`}
      >
        <ImageIcon size={16} />
      </button>
      <div className="flex-1" />
      <button
        onClick={(e) => { e.preventDefault(); editor.chain().focus().undo().run()}}
        disabled={!editor.can().chain().focus().undo().run()}
        className="p-2 rounded hover:bg-white/10 text-slate-400 disabled:opacity-50"
      >
        <Undo size={16} />
      </button>
      <button
        onClick={(e) => { e.preventDefault(); editor.chain().focus().redo().run()}}
        disabled={!editor.can().chain().focus().redo().run()}
        className="p-2 rounded hover:bg-white/10 text-slate-400 disabled:opacity-50"
      >
        <Redo size={16} />
      </button>
    </div>
  );
};

export const TipTapEditor = ({ content, onChange }: TipTapEditorProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
    ],
    content,
    editorProps: {
      attributes: {
        class: 'prose prose-invert prose-neo max-w-none min-h-[300px] p-4 focus:outline-none',
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  return (
    <div className="border border-white/10 rounded-lg bg-black/50 overflow-hidden focus-within:border-neo-blue/50 transition-colors">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};
