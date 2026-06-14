import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from '@/store/authStore';

// Protective Wrapper for Admin Routes
const ProtectedRoute = ({ children, allowedRoles }: { children: React.ReactNode, allowedRoles: string[] }) => {
  const { user, isLoading } = useAuthStore();
  
  if (isLoading) return <div>Loading...</div>; // Add your proper spinner here
  
  if (!user || !allowedRoles.includes(user.role)) {
    return <Navigate to="/admin/login" replace />;
  }

  return <>{children}</>;
};

export const AdminRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<div>Admin Login</div>} />
      
      {/* Protected Admin Routes */}
      <Route path="/" element={
        <ProtectedRoute allowedRoles={['admin', 'editor', 'viewer']}>
          <div>Admin Dashboard Layout Placeholder</div>
        </ProtectedRoute>
      }>
        <Route index element={<div>Admin Dashboard Overview</div>} />
        <Route path="blog" element={<div>Manage Blog</div>} />
        <Route path="leads" element={<div>Manage Leads</div>} />
        <Route path="settings" element={
          <ProtectedRoute allowedRoles={['admin']}>
            <div>Admin Settings (Admin Only)</div>
          </ProtectedRoute>
        } />
      </Route>
    </Routes>
  );
};
