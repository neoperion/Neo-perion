import React from 'react';
import { Helmet } from 'react-helmet-async';
import { servicesData } from '@/data/servicesData';
import { useNavigate } from 'react-router-dom';

export default function AdminServices() {
  const navigate = useNavigate();

  return (
    <div className="animate-in fade-in duration-500">
      <Helmet><title>Services | Admin | Neo Perion</title></Helmet>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Services</h1>
        <p className="text-slate-400">Overview of all service pages.</p>
      </div>

      <div className="bg-slate-900 border border-white/10 rounded-2xl overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/5 bg-slate-800/50">
              <th className="p-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Service</th>
              <th className="p-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Slug</th>
              <th className="p-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Features</th>
              <th className="p-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Live Page</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {servicesData.map((s) => (
              <tr key={s.slug} className="hover:bg-white/[0.02] transition-colors">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <s.icon size={20} className="text-slate-400" />
                    <span className="font-bold text-white">{s.title}</span>
                  </div>
                </td>
                <td className="p-4 text-sm text-slate-400">/{s.slug}</td>
                <td className="p-4 text-sm text-slate-400">{s.features.length}</td>
                <td className="p-4">
                  <button onClick={() => navigate(`/services/${s.slug}`)}
                    className="text-sm text-neo-blue hover:text-neo-blue-bright transition-colors">
                    View &rarr;
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
