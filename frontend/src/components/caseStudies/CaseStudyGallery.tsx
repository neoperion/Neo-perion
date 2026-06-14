import React from 'react';

interface Props {
  gallery: string[];
}

export const CaseStudyGallery: React.FC<Props> = ({ gallery }) => {
  if (!gallery || gallery.length === 0) return null;

  return (
    <div className="my-16">
      <h3 className="text-2xl font-display font-bold text-white mb-8">Project Gallery</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {gallery.map((image, idx) => (
          <div key={idx} className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 group">
            <img 
              src={image} 
              alt={`Project screenshot ${idx + 1}`}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
