import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PublicRoutes } from './PublicRoutes';
import { AdminRoutes } from './AdminRoutes';

export const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/*" element={<AdminRoutes />} />
        <Route path="/*" element={<PublicRoutes />} />
      </Routes>
    </BrowserRouter>
  );
};
