import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet-async";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line
} from 'recharts';
import { Users, FileText, CheckCircle2, TrendingUp } from 'lucide-react';
import { supabase } from '@/lib/supabase';

// Mock data for charts
const monthlyData = [
  { name: 'Jan', leads: 4, views: 1200 },
  { name: 'Feb', leads: 7, views: 2100 },
  { name: 'Mar', leads: 5, views: 1800 },
  { name: 'Apr', leads: 12, views: 3400 },
  { name: 'May', leads: 18, views: 4200 },
  { name: 'Jun', leads: 24, views: 5100 },
];

const StatCard = ({ title, value, icon: Icon, trend }: any) => (
  <div className="bg-slate-900 border border-white/10 rounded-2xl p-6">
    <div className="flex justify-between items-start">
      <div>
        <p className="text-slate-400 font-medium text-sm mb-2">{title}</p>
        <h3 className="text-3xl font-bold text-white mb-2">{value}</h3>
      </div>
      <div className="w-12 h-12 rounded-xl bg-neo-blue/10 flex items-center justify-center text-neo-blue">
        <Icon size={24} />
      </div>
    </div>
    {trend && (
      <div className="flex items-center gap-2 mt-4">
        <TrendingUp size={16} className="text-emerald-400" />
        <span className="text-emerald-400 font-medium text-sm">+{trend}%</span>
        <span className="text-slate-500 text-sm">vs last month</span>
      </div>
    )}
  </div>
);

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalLeads: 0,
    totalBlogs: 0,
    totalCaseStudies: 0
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [leadsRes, blogsRes, caseStudiesRes] = await Promise.all([
          supabase.from('leads').select('*', { count: 'exact', head: true }),
          supabase.from('blogs').select('*', { count: 'exact', head: true }),
          supabase.from('case_studies').select('*', { count: 'exact', head: true }),
        ]);

        setStats({
          totalLeads: leadsRes.count || 0,
          totalBlogs: blogsRes.count || 0,
          totalCaseStudies: caseStudiesRes.count || 0,
        });
      } catch (err) {
        console.error("Error fetching stats:", err);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="animate-in fade-in duration-500">
      <Helmet>
        <title>Dashboard | Admin | AINCURU</title>
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Overview</h1>
        <p className="text-slate-400">Welcome back! Here's what's happening with AINCURU today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard title="Total Leads" value={stats.totalLeads} icon={Users} trend={12} />
        <StatCard title="Published Blogs" value={stats.totalBlogs} icon={FileText} trend={8} />
        <StatCard title="Active Case Studies" value={stats.totalCaseStudies} icon={CheckCircle2} trend={2} />
        <StatCard title="Monthly Views" value="12.4k" icon={TrendingUp} trend={24} />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Leads Chart */}
        <div className="bg-slate-900 border border-white/10 rounded-2xl p-6">
          <h3 className="text-lg font-bold text-white mb-6">Lead Generation</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                <XAxis dataKey="name" stroke="#64748b" tick={{fill: '#64748b'}} axisLine={false} tickLine={false} />
                <YAxis stroke="#64748b" tick={{fill: '#64748b'}} axisLine={false} tickLine={false} />
                <Tooltip 
                  cursor={{fill: '#ffffff05'}}
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#ffffff10', borderRadius: '8px' }} 
                />
                <Bar dataKey="leads" fill="#00d4ff" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Views Chart */}
        <div className="bg-slate-900 border border-white/10 rounded-2xl p-6">
          <h3 className="text-lg font-bold text-white mb-6">Website Traffic</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                <XAxis dataKey="name" stroke="#64748b" tick={{fill: '#64748b'}} axisLine={false} tickLine={false} />
                <YAxis stroke="#64748b" tick={{fill: '#64748b'}} axisLine={false} tickLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#ffffff10', borderRadius: '8px' }} 
                />
                <Line type="monotone" dataKey="views" stroke="#8b5cf6" strokeWidth={3} dot={{ fill: '#8b5cf6', strokeWidth: 2 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
