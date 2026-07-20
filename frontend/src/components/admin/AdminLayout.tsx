import React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavLink, Outlet, Navigate } from 'react-router-dom';
import { useAdminAuth } from '@/hooks/useAdminAuth';
import {
  LayoutDashboard,
  Users,
  FileText,
  Briefcase,
  Settings,
  LogOut,
  Menu
} from 'lucide-react';

export const AdminLayout: React.FC = () => {
  const { user, loading, logout } = useAdminAuth();
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  // If still checking auth state, show a spinner
  if (loading) {
    return (
      <div className="min-h-[auto] bg-[#02040A] flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-4 border-neo-blue/20 border-t-neo-blue animate-spin" />
      </div>
    );
  }

  // If not authenticated, redirect to login
  if (!user) {
    return <Navigate to="/admin/login" replace />;
  }

  const navItems = [
    { name: 'Dashboard', path: '/admin', icon: LayoutDashboard },
    { name: 'Leads', path: '/admin/leads', icon: Users },
    { name: 'Blogs', path: '/admin/blogs', icon: FileText },
    { name: 'Case Studies', path: '/admin/case-studies', icon: FileText },
    { name: 'Portfolio', path: '/admin/portfolio', icon: Briefcase },
    { name: 'Testimonials', path: '/admin/testimonials', icon: FileText },
    { name: 'Careers', path: '/admin/careers', icon: Briefcase },
    { name: 'Talent Network', path: '/admin/talent-network', icon: Users },
    { name: 'Services', path: '/admin/services', icon: FileText },
    { name: 'Analytics', path: '/admin/analytics', icon: LayoutDashboard },
    { name: 'Settings', path: '/admin/settings', icon: Settings },
  ];

  return (
    <div className="min-h-[auto] bg-[#02040A] text-slate-200 flex">
      {/* Admin routes are gated by robots.txt Disallow: /admin/ — this
          noindex tag is belt-and-suspenders for crawlers that ignore it. */}
      <Helmet>
        <meta name="robots" content="noindex,nofollow" />
        <title>Admin | Neo Perion Solutions</title>
      </Helmet>
      {/* Mobile Sidebar Toggle */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button 
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 bg-slate-900 border border-white/10 rounded-lg text-white"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Sidebar Navigation */}
      <aside className={`
        fixed inset-y-0 left-0 z-40 w-64 bg-[#050816] border-r border-white/5 flex flex-col transition-transform duration-300
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="h-20 flex items-center px-6 border-b border-white/5">
          <img src="/images/np-logo.png" alt="Neo Perion" className="h-8 w-auto mr-3" />
          <span className="font-display font-bold text-lg text-white tracking-wider">ADMIN</span>
        </div>

        <nav className="flex-1 py-6 px-4 space-y-2 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/admin'}
                className={({ isActive }) => `
                  flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium text-sm
                  ${isActive 
                    ? 'bg-neo-blue/10 text-neo-blue border border-neo-blue/20' 
                    : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'}
                `}
              >
                <Icon size={18} />
                {item.name}
              </NavLink>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/5">
          <div className="flex items-center gap-3 px-4 py-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-sm font-bold border border-white/10">
              {user?.email?.charAt(0).toUpperCase() || 'A'}
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="text-sm font-medium text-white truncate">{user?.email || 'admin@neoperion.com'}</p>
              <p className="text-xs text-slate-500">Super Admin</p>
            </div>
          </div>
          <button 
            onClick={logout}
            className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-500/10 hover:text-red-300 rounded-xl transition-colors font-medium text-sm"
          >
            <LogOut size={18} />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 lg:ml-64 flex flex-col min-h-[auto] relative">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-5 pointer-events-none" />
        <div className="flex-1 p-6 md:p-10 lg:p-12 relative z-10">
          <Outlet />
        </div>
      </main>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-30 lg:hidden backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

