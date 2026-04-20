import React, { useState } from 'react';
import { Outlet, NavLink, Link } from 'react-router-dom';

export default function AdminLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-surface text-on-surface min-h-screen">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-slate-50 flex justify-between items-center px-4 md:px-6 h-16 font-public-sans tracking-tight border-b border-surface-container">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden material-symbols-outlined text-slate-500 p-2 hover:bg-slate-200/50 rounded"
          >
            {isMobileMenuOpen ? 'close' : 'menu'}
          </button>
          <Link to="/admin" className="text-xl font-bold tracking-tighter text-cyan-900">TaxTrack</Link>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-8">
            <NavLink to="/admin" end className={({ isActive }) => isActive ? "text-cyan-700 font-semibold border-b-2 border-cyan-700" : "text-slate-500 font-medium hover:bg-slate-200/50 transition-colors px-2 py-1 rounded"}>Overview</NavLink>
            <NavLink to="/admin/revenue-config" className={({ isActive }) => isActive ? "text-cyan-700 font-semibold border-b-2 border-cyan-700" : "text-slate-500 font-medium hover:bg-slate-200/50 transition-colors px-2 py-1 rounded"}>Tax Types</NavLink>
            <NavLink to="/admin/taxpayers" className={({ isActive }) => isActive ? "text-cyan-700 font-semibold border-b-2 border-cyan-700" : "text-slate-500 font-medium hover:bg-slate-200/50 transition-colors px-2 py-1 rounded"}>Users</NavLink>
          </div>
          <div className="flex items-center gap-3">
            <button className="material-symbols-outlined text-slate-500 hover:bg-slate-200/50 p-2 rounded transition-colors">sync</button>
            <button className="material-symbols-outlined text-slate-500 hover:bg-slate-200/50 p-2 rounded transition-colors">notifications</button>
            <button className="material-symbols-outlined text-cyan-900 p-1">account_circle</button>
          </div>
        </div>
      </nav>

      {/* Side Navigation Bar (Desktop) */}
      <aside className="hidden md:flex h-screen w-64 fixed left-0 top-0 bg-slate-100 flex-col py-4 font-inter text-sm font-medium border-r border-slate-200/10">
        <div className="px-6 py-8 mt-12">
          <h1 className="text-lg font-black text-cyan-900">Admin Console</h1>
          <p className="text-xs text-slate-500 tracking-wider uppercase">TaxTrack</p>
        </div>
        <div className="flex-1 space-y-1">
          <NavLink to="/admin" end className={({ isActive }) => `flex items-center gap-3 px-6 py-3 transition-all ${isActive ? "bg-cyan-100/50 text-cyan-900 border-r-4 border-cyan-800" : "text-slate-600 hover:text-cyan-800 hover:bg-slate-200"}`}>
            <span className="material-symbols-outlined">leaderboard</span>
            Overview
          </NavLink>
          <NavLink to="/admin/revenue-config" className={({ isActive }) => `flex items-center gap-3 px-6 py-3 transition-all ${isActive ? "bg-cyan-100/50 text-cyan-900 border-r-4 border-cyan-800" : "text-slate-600 hover:text-cyan-800 hover:bg-slate-200"}`}>
            <span className="material-symbols-outlined">account_tree</span>
            Tax Types
          </NavLink>
          <NavLink to="/admin/taxpayers" className={({ isActive }) => `flex items-center gap-3 px-6 py-3 transition-all ${isActive ? "bg-cyan-100/50 text-cyan-900 border-r-4 border-cyan-800" : "text-slate-600 hover:text-cyan-800 hover:bg-slate-200"}`}>
            <span className="material-symbols-outlined">group</span>
            Users
          </NavLink>
          <NavLink to="/admin/properties" className={({ isActive }) => `flex items-center gap-3 px-6 py-3 transition-all ${isActive ? "bg-cyan-100/50 text-cyan-900 border-r-4 border-cyan-800" : "text-slate-600 hover:text-cyan-800 hover:bg-slate-200"}`}>
            <span className="material-symbols-outlined">home_work</span>
            Properties
          </NavLink>
          <NavLink to="/admin/certificates" className={({ isActive }) => `flex items-center gap-3 px-6 py-3 transition-all ${isActive ? "bg-cyan-100/50 text-cyan-900 border-r-4 border-cyan-800" : "text-slate-600 hover:text-cyan-800 hover:bg-slate-200"}`}>
            <span className="material-symbols-outlined">verified</span>
            Certificates
          </NavLink>
          <NavLink to="/admin/audit-logs" className={({ isActive }) => `flex items-center gap-3 px-6 py-3 transition-all ${isActive ? "bg-cyan-100/50 text-cyan-900 border-r-4 border-cyan-800" : "text-slate-600 hover:text-cyan-800 hover:bg-slate-200"}`}>
            <span className="material-symbols-outlined">history_edu</span>
            Activity Logs
          </NavLink>
        </div>
        <div className="px-6 py-4 border-t border-slate-200/50">
          <Link to="/" className="flex items-center gap-3 text-slate-600 hover:text-error transition-all">
            <span className="material-symbols-outlined">logout</span>
            Logout
          </Link>
        </div>
      </aside>

      {/* Mobile Menu Drawer */}
      <div className={`md:hidden fixed inset-0 z-40 transition-transform duration-300 ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="absolute inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)}></div>
        <aside className="relative h-full w-64 bg-slate-100 flex flex-col py-4 font-inter text-sm font-medium">
          <div className="px-6 py-8 mt-12">
            <h1 className="text-lg font-black text-cyan-900">Admin Console</h1>
            <p className="text-xs text-slate-500 tracking-wider uppercase">TaxTrack</p>
          </div>
          <div className="flex-1 space-y-1">
            <NavLink to="/admin" end onClick={() => setIsMobileMenuOpen(false)} className={({ isActive }) => `flex items-center gap-3 px-6 py-3 transition-all ${isActive ? "bg-cyan-100/50 text-cyan-900 border-r-4 border-cyan-800" : "text-slate-600 hover:text-cyan-800 hover:bg-slate-200"}`}>
              <span className="material-symbols-outlined">leaderboard</span>
              Analytics
            </NavLink>
            <NavLink to="/admin/revenue-config" onClick={() => setIsMobileMenuOpen(false)} className={({ isActive }) => `flex items-center gap-3 px-6 py-3 transition-all ${isActive ? "bg-cyan-100/50 text-cyan-900 border-r-4 border-cyan-800" : "text-slate-600 hover:text-cyan-800 hover:bg-slate-200"}`}>
              <span className="material-symbols-outlined">account_tree</span>
              Revenue Heads
            </NavLink>
            <NavLink to="/admin/taxpayers" onClick={() => setIsMobileMenuOpen(false)} className={({ isActive }) => `flex items-center gap-3 px-6 py-3 transition-all ${isActive ? "bg-cyan-100/50 text-cyan-900 border-r-4 border-cyan-800" : "text-slate-600 hover:text-cyan-800 hover:bg-slate-200"}`}>
              <span className="material-symbols-outlined">group</span>
              Taxpayers
            </NavLink>
            <NavLink to="/admin/properties" onClick={() => setIsMobileMenuOpen(false)} className={({ isActive }) => `flex items-center gap-3 px-6 py-3 transition-all ${isActive ? "bg-cyan-100/50 text-cyan-900 border-r-4 border-cyan-800" : "text-slate-600 hover:text-cyan-800 hover:bg-slate-200"}`}>
              <span className="material-symbols-outlined">home_work</span>
              Properties
            </NavLink>
            <NavLink to="/admin/certificates" onClick={() => setIsMobileMenuOpen(false)} className={({ isActive }) => `flex items-center gap-3 px-6 py-3 transition-all ${isActive ? "bg-cyan-100/50 text-cyan-900 border-r-4 border-cyan-800" : "text-slate-600 hover:text-cyan-800 hover:bg-slate-200"}`}>
              <span className="material-symbols-outlined">verified</span>
              Certificates
            </NavLink>
            <NavLink to="/admin/audit-logs" onClick={() => setIsMobileMenuOpen(false)} className={({ isActive }) => `flex items-center gap-3 px-6 py-3 transition-all ${isActive ? "bg-cyan-100/50 text-cyan-900 border-r-4 border-cyan-800" : "text-slate-600 hover:text-cyan-800 hover:bg-slate-200"}`}>
              <span className="material-symbols-outlined">history_edu</span>
              Audit Logs
            </NavLink>
          </div>
        </aside>
      </div>

      {/* Main Content Rendered Here */}
      <div className="md:ml-64 min-h-screen">
        <Outlet />
      </div>
    </div>
  );
}
