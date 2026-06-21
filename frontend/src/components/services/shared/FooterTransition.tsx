import React from 'react';

export const FooterTransition: React.FC = () => {
  return (
    <div 
      className="w-full h-[80px]" 
      style={{
        background: 'linear-gradient(180deg, transparent, rgba(2, 4, 10, 0.5))',
        // Note: Using a subtle blend into the footer's exact background color #02040A
      }} 
    />
  );
};
