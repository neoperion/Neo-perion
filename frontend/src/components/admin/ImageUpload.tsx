import React, { useState, useRef } from 'react';
import { Upload, X, Loader2, Image as ImageIcon } from 'lucide-react';
import { toast } from 'react-hot-toast';

interface ImageUploadProps {
  value?: string;
  onChange: (url: string) => void;
  label?: string;
  className?: string;
}

export function ImageUpload({ value, onChange, label = 'Upload Image', className = '' }: ImageUploadProps) {
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/') && !file.type.startsWith('video/')) {
      toast.error('Please upload an image or video file.');
      return;
    }

    setIsUploading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
      const response = await fetch(`${apiUrl}/upload`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      const data = await response.json();
      if (data.url) {
        onChange(data.url);
        toast.success('File uploaded successfully!');
      } else {
        throw new Error('No URL returned');
      }
    } catch (error) {
      console.error('Upload Error:', error);
      toast.error('Failed to upload file. Make sure the backend is running.');
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    onChange('');
  };

  return (
    <div className={`space-y-2 ${className}`}>
      {label && <label className="block text-sm font-medium text-slate-300">{label}</label>}
      <div 
        onClick={() => !isUploading && fileInputRef.current?.click()}
        className={`
          relative group cursor-pointer border-2 border-dashed rounded-xl transition-all
          ${value ? 'border-white/20 hover:border-white/40' : 'border-white/10 hover:border-neo-blue/50 hover:bg-white/[0.02]'}
          ${isUploading ? 'opacity-50 cursor-not-allowed' : ''}
          overflow-hidden
        `}
      >
        <div className="flex flex-col items-center justify-center p-6 text-center">
          {isUploading ? (
            <div className="flex flex-col items-center gap-2 text-neo-blue">
              <Loader2 className="w-8 h-8 animate-spin" />
              <span className="text-sm font-medium">Uploading...</span>
            </div>
          ) : value ? (
            <div className="relative w-full">
              {value.includes('/video/') ? (
                <video src={value} controls className="w-full max-h-64 object-contain rounded-lg" />
              ) : (
                <img src={value} alt="Uploaded preview" className="w-full max-h-64 object-contain rounded-lg" />
              )}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg">
                <span className="text-white text-sm font-medium px-4 py-2 bg-white/10 rounded-lg backdrop-blur-sm">
                  Click to replace
                </span>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2 text-slate-400 group-hover:text-neo-blue transition-colors">
              <Upload className="w-8 h-8 mb-2" />
              <span className="text-sm font-medium">Click to upload image or video</span>
              <span className="text-xs opacity-70">JPG, PNG, GIF, MP4, WebM</span>
            </div>
          )}
        </div>
        
        {value && !isUploading && (
          <button
            onClick={handleRemove}
            className="absolute top-2 right-2 p-1.5 bg-black/50 text-white rounded-lg hover:bg-red-500/80 transition-colors z-10 backdrop-blur-md"
            title="Remove file"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*,video/*"
        className="hidden"
      />
    </div>
  );
}
