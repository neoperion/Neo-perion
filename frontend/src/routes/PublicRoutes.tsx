import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { PageWrapper } from '@/components/layout/PageWrapper';
import { Home } from '@/pages/Home';

import { ServicesHub } from '@/pages/ServicesHub';
import ServiceDetailPage from '@/pages/ServiceDetailPage';

export const PublicRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
      <Route path="/services" element={<PageWrapper><ServicesHub /></PageWrapper>} />
      <Route path="/services/:slug" element={<PageWrapper><ServiceDetailPage /></PageWrapper>} />
      <Route path="/industries" element={<PageWrapper><div>Industries Page Placeholder</div></PageWrapper>} />
      <Route path="/case-studies" element={<PageWrapper><div>Case Studies Placeholder</div></PageWrapper>} />
      <Route path="/about" element={<PageWrapper><div>About Page Placeholder</div></PageWrapper>} />
      <Route path="/blog" element={<PageWrapper><div>Blog Placeholder</div></PageWrapper>} />
      <Route path="/careers" element={<PageWrapper><div>Careers Placeholder</div></PageWrapper>} />
      <Route path="/contact" element={<PageWrapper><div>Contact Placeholder</div></PageWrapper>} />
      <Route path="*" element={<PageWrapper><div>404 Not Found</div></PageWrapper>} />
    </Routes>
  );
};
