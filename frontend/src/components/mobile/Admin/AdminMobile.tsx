import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { LayoutDashboard, FileText, Briefcase, Users, BarChart3, Settings, Menu, X, ChevronRight, type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface AdminTabItem { label: string; href: string; icon: LucideIcon }

const DEFAULT_TABS: AdminTabItem[] = [
  { label: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { label: 'Content', href: '/admin/blogs', icon: FileText },
  { label: 'Careers', href: '/admin/careers', icon: Briefcase },
  { label: 'Leads', href: '/admin/leads', icon: Users },
  { label: 'Analytics', href: '/admin/analytics', icon: BarChart3 },
  { label: 'Settings', href: '/admin/settings', icon: Settings },
];

export function BottomTabBar({ tabs = DEFAULT_TABS }: { tabs?: AdminTabItem[] }) {
  const location = useLocation();
  return (
    <nav aria-label="Admin" className="fixed bottom-0 left-0 right-0 z-mobile-nav md:hidden flex justify-center px-3 pb-safe-or-6 pt-2 pointer-events-none">
      <div className="relative pointer-events-auto flex items-center gap-1 px-1.5 py-1.5 rounded-[28px] bg-[rgba(15,23,42,0.82)] backdrop-blur-glass-3 border border-white/[0.14] shadow-[0_16px_56px_rgba(0,0,0,0.55)] overflow-x-auto scrollbar-hide max-w-full">
        <span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-[0.04] mix-blend-overlay" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")" }} />
        {tabs.map((t) => {
          const active = location.pathname === t.href || (t.href !== '/admin' && location.pathname.startsWith(t.href));
          const Icon = t.icon;
          return (
            <Link key={t.href} to={t.href}
              className={cn('relative shrink-0 h-11 px-3 rounded-2xl flex flex-col items-center justify-center text-[10px] font-bold uppercase tracking-[0.08em] transition-all min-w-[56px]',
                active ? 'bg-gradient-to-br from-neo-blue to-neo-highlight text-white shadow-[0_4px_12px_rgba(0,229,255,0.4)]' : 'text-white/65 active:scale-95')}>
              <Icon size={16} /><span className="mt-0.5">{t.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export function AdminTopBar({ title, onMenu, onAction, actionLabel }: { title: string; onMenu: () => void; onAction?: () => void; actionLabel?: string }) {
  return (
    <header className="sticky top-0 z-mobile-nav md:hidden bg-[rgba(15,23,42,0.78)] backdrop-blur-glass-3 border-b border-white/[0.10] pt-safe-or-4 pb-3 px-mobile-base flex items-center justify-between">
      <button type="button" onClick={onMenu} aria-label="Open menu" className="h-10 w-10 rounded-full bg-white/[0.05] border border-white/[0.10] flex items-center justify-center text-white/80"><Menu size={18} /></button>
      <h1 className="text-[15px] font-bold text-white truncate flex-1 mx-3 text-center">{title}</h1>
      {onAction && actionLabel ? (
        <button type="button" onClick={onAction} className="h-10 px-3.5 rounded-full bg-gradient-to-br from-neo-blue to-neo-highlight text-white text-[12px] font-bold active:scale-95">{actionLabel}</button>
      ) : <div className="w-10" />}
    </header>
  );
}

export function AdminDrawer({ open, onClose, tabs = DEFAULT_TABS }: { open: boolean; onClose: () => void; tabs?: AdminTabItem[] }) {
  const location = useLocation();
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 z-mobile-overlay bg-black/60 backdrop-blur-glass-2" />
          <motion.aside initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }} transition={{ type: 'spring', stiffness: 380, damping: 28, mass: 0.8 }}
            role="dialog" aria-modal="true" aria-label="Admin menu"
            className="fixed top-0 bottom-0 left-0 z-mobile-sheet w-[300px] bg-[rgba(2,4,10,0.92)] backdrop-blur-glass-3 border-r border-white/[0.14] p-4 pt-safe"
          >
            <div className="flex items-center justify-between mb-6"><span className="text-base font-bold text-white">Admin</span>
              <button onClick={onClose} className="h-9 w-9 rounded-full bg-white/[0.06] text-white/70 flex items-center justify-center"><X size={16} /></button>
            </div>
            <nav className="space-y-1">
              {tabs.map((t) => {
                const active = location.pathname === t.href || (t.href !== '/admin' && location.pathname.startsWith(t.href));
                const Icon = t.icon;
                return (
                  <Link key={t.href} to={t.href} onClick={onClose}
                    className={cn('flex items-center gap-3 h-12 px-3 rounded-xl text-[14px] font-semibold transition-colors',
                      active ? 'bg-gradient-to-br from-neo-blue/20 to-neo-highlight/10 text-neo-highlight border border-neo-highlight/30' : 'text-white/80 hover:bg-white/[0.05]')}>
                    <Icon size={16} /> {t.label} {active && <ChevronRight size={14} className="ml-auto" />}
                  </Link>
                );
              })}
            </nav>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

export interface AdminStatCardProps {
  label: string; value: string | number; delta?: string; accent?: 'cyan' | 'purple' | 'gradient';
}

export function AdminStatCard({ label, value, delta, accent = 'cyan' }: { label: string; value: string | number; delta?: string; accent?: 'cyan' | 'purple' | 'gradient' }) {
  const a = { cyan: 'from-neo-blue/15 to-neo-highlight/5 border-neo-highlight/30', purple: 'from-purple-500/15 to-neo-blue/5 border-purple-400/30', gradient: 'from-neo-blue/15 via-purple-500/10 to-cyan-500/15 border-neo-highlight/30' }[accent];
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      className={cn('relative rounded-2xl border bg-gradient-to-br backdrop-blur-glass-1 p-4 overflow-hidden', a)}>
      <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.18] to-transparent" />
      <p className="text-[10px] uppercase tracking-[0.15em] text-white/55 font-bold">{label}</p>
      <p className="text-[26px] font-bold text-white mt-1 tracking-tight">{value}</p>
      {delta && <p className="text-[10px] text-neo-highlight mt-0.5 font-semibold">{delta}</p>}
    </motion.div>
  );
}

export interface AdminTableRow { id: string; primary: string; secondary?: string; badge?: string; meta?: string }
export function AdminTable({ headers, rows }: { headers: string[]; rows: AdminTableRow[] }) {
  return (
    <div className="rounded-2xl border border-white/[0.10] bg-white/[0.03] backdrop-blur-glass-1 overflow-hidden">
      <div className="px-4 py-3 border-b border-white/[0.08] hidden sm:block">
        <div className="grid gap-2 text-[10px] uppercase tracking-[0.15em] text-white/45 font-bold" style={{ gridTemplateColumns: `2fr 1fr 1fr auto` }}>
          {headers.map((h) => <span key={h}>{h}</span>)}
        </div>
      </div>
      <ul className="divide-y divide-white/[0.06]">
        {rows.map((r) => (
          <li key={r.id} className="px-4 py-3 active:bg-white/[0.04] transition-colors">
            <div className="flex items-center justify-between gap-3">
              <div className="min-w-0 flex-1">
                <p className="text-[13px] font-semibold text-white truncate">{r.primary}</p>
                {r.secondary && <p className="text-[11px] text-white/55 truncate">{r.secondary}</p>}
              </div>
              {r.badge && <span className="shrink-0 h-6 px-2 rounded-full bg-neo-highlight/15 text-neo-highlight text-[10px] font-bold uppercase tracking-[0.1em]">{r.badge}</span>}
              {r.meta && <span className="shrink-0 text-[11px] text-white/50">{r.meta}</span>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function MobileAdminShell({ title, actionLabel, onAction, children }: { title: string; actionLabel?: string; onAction?: () => void; children: React.ReactNode }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <div className="md:hidden min-h-screen bg-[#030B1D]">
      <AdminTopBar title={title} onMenu={() => setDrawerOpen(true)} onAction={onAction} actionLabel={actionLabel} />
      <AdminDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <main className="px-mobile-base pt-4 pb-mobile-4xl">{children}</main>
      <BottomTabBar />
    </div>
  );
}
