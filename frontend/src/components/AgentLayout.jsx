import React from 'react';
import { Outlet, NavLink, Link } from 'react-router-dom';

export default function AgentLayout() {
  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary-fixed-dim min-h-screen">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-slate-50 dark:bg-cyan-950 flex justify-between items-center px-6 h-16 font-public-sans tracking-tight border-b border-surface-container">
        <div className="flex items-center gap-3">
          <Link to="/agent" className="text-xl font-bold tracking-tighter text-cyan-900 dark:text-cyan-50">TaxTrack</Link>
        </div>
        <div className="flex items-center gap-4 text-cyan-900 dark:text-cyan-100">
          <button className="material-symbols-outlined p-2 hover:bg-slate-200/50 rounded-full transition-colors">sync</button>
          <button className="material-symbols-outlined p-2 hover:bg-slate-200/50 rounded-full transition-colors">notifications</button>
          <button className="material-symbols-outlined p-2 hover:bg-slate-200/50 rounded-full transition-colors">account_circle</button>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="min-h-screen">
        <Outlet />
      </div>

      {/* BottomNavBar */}
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 h-20 pb-safe bg-white dark:bg-cyan-950 rounded-t-xl border-t border-slate-100 dark:border-cyan-900 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] z-50">
        <NavLink to="/agent" end className={({ isActive }) => `flex flex-col items-center justify-center rounded-2xl px-5 py-1.5 duration-100 ease-out ${isActive ? "bg-cyan-100 dark:bg-cyan-800 text-cyan-900 dark:text-cyan-50 scale-100" : "text-slate-400 dark:text-cyan-700 active:bg-slate-100 dark:active:bg-cyan-900 scale-95"}`}>
          <span className="material-symbols-outlined" style={{ fontVariationSettings: isActive ? "'FILL' 1" : "" }}>grid_view</span>
          <span className="font-inter text-[11px] font-bold uppercase tracking-widest mt-1">Home</span>
        </NavLink>
        <NavLink to="/agent/payment" className={({ isActive }) => `flex flex-col items-center justify-center rounded-2xl px-5 py-1.5 duration-100 ease-out ${isActive ? "bg-cyan-100 dark:bg-cyan-800 text-cyan-900 dark:text-cyan-50 scale-100" : "text-slate-400 dark:text-cyan-700 active:bg-slate-100 dark:active:bg-cyan-900 scale-95"}`}>
          <span className="material-symbols-outlined" style={{ fontVariationSettings: isActive ? "'FILL' 1" : "" }}>payments</span>
          <span className="font-inter text-[11px] font-bold uppercase tracking-widest mt-1">Collect</span>
        </NavLink>
        <NavLink to="/agent/scanner" className={({ isActive }) => `flex flex-col items-center justify-center rounded-2xl px-5 py-1.5 duration-100 ease-out ${isActive ? "bg-cyan-100 dark:bg-cyan-800 text-cyan-900 dark:text-cyan-50 scale-100" : "text-slate-400 dark:text-cyan-700 active:bg-slate-100 dark:active:bg-cyan-900 scale-95"}`}>
          <span className="material-symbols-outlined" style={{ fontVariationSettings: isActive ? "'FILL' 1" : "" }}>qr_code_scanner</span>
          <span className="font-inter text-[11px] font-bold uppercase tracking-widest mt-1">Scanner</span>
        </NavLink>
        <button className="flex flex-col items-center justify-center text-slate-400 dark:text-cyan-700 active:bg-slate-100 dark:active:bg-cyan-900 duration-100 ease-out scale-95">
          <div className="relative">
            <span className="material-symbols-outlined">cloud_sync</span>
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-error rounded-full border-2 border-white"></span>
          </div>
          <span className="font-inter text-[11px] font-bold uppercase tracking-widest mt-1">Sync</span>
        </button>
      </nav>
    </div>
  );
}
