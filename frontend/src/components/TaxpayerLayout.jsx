import React, { useState } from 'react';
import { Outlet, NavLink, Link } from 'react-router-dom';

export default function TaxpayerLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-background text-on-surface min-h-screen">
      {/* TopNavBar */}
      <header className="fixed top-0 w-full z-50 bg-slate-50 dark:bg-cyan-950 flex justify-between items-center px-4 md:px-6 h-16 border-b border-slate-200 dark:border-cyan-900">
        <div className="flex items-center gap-4 md:gap-8">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden material-symbols-outlined text-cyan-900 dark:text-cyan-100 p-2 hover:bg-slate-200/50 rounded"
          >
            {isMobileMenuOpen ? 'close' : 'menu'}
          </button>
          <Link to="/taxpayer" className="text-xl font-bold tracking-tighter text-cyan-900 dark:text-cyan-50 font-public-sans">TaxTrack</Link>
          <nav className="hidden md:flex gap-6">
            <NavLink to="/taxpayer" end className={({ isActive }) => `font-semibold py-4 font-public-sans tracking-tight ${isActive ? "text-cyan-700 dark:text-cyan-300 border-b-2 border-cyan-700" : "text-slate-500 dark:text-slate-400 hover:text-cyan-800 transition-colors"}`}>Home</NavLink>
            <NavLink to="/taxpayer/filing" className={({ isActive }) => `font-semibold py-4 font-public-sans tracking-tight ${isActive ? "text-cyan-700 dark:text-cyan-300 border-b-2 border-cyan-700" : "text-slate-500 dark:text-slate-400 hover:text-cyan-800 transition-colors"}`}>Pay Tax</NavLink>
            <NavLink to="/taxpayer/certificate-of-origin" className={({ isActive }) => `font-semibold py-4 font-public-sans tracking-tight ${isActive ? "text-cyan-700 dark:text-cyan-300 border-b-2 border-cyan-700" : "text-slate-500 dark:text-slate-400 hover:text-cyan-800 transition-colors"}`}>Certificates</NavLink>
            <NavLink to="/taxpayer/property-rental" className={({ isActive }) => `font-semibold py-4 font-public-sans tracking-tight ${isActive ? "text-cyan-700 dark:text-cyan-300 border-b-2 border-cyan-700" : "text-slate-500 dark:text-slate-400 hover:text-cyan-800 transition-colors"}`}>Rentals</NavLink>
            <NavLink to="/taxpayer/marketplace" className={({ isActive }) => `font-semibold py-4 font-public-sans tracking-tight ${isActive ? "text-cyan-700 dark:text-cyan-300 border-b-2 border-cyan-700" : "text-slate-500 dark:text-slate-400 hover:text-cyan-800 transition-colors"}`}>Market</NavLink>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-full hover:bg-slate-200/50 dark:hover:bg-cyan-800/50 transition-colors text-cyan-900 dark:text-cyan-100"><span className="material-symbols-outlined">sync</span></button>
            <button className="p-2 rounded-full hover:bg-slate-200/50 dark:hover:bg-cyan-800/50 transition-colors text-cyan-900 dark:text-cyan-100"><span className="material-symbols-outlined">notifications</span></button>
            <button className="p-2 rounded-full hover:bg-slate-200/50 dark:hover:bg-cyan-800/50 transition-colors text-cyan-900 dark:text-cyan-100"><span className="material-symbols-outlined">account_circle</span></button>
          </div>
        </div>
      </header>

      {/* SideNavBar (Desktop) */}
      <aside className="h-screen w-64 fixed left-0 top-0 pt-16 bg-slate-100 dark:bg-cyan-950 flex-col hidden md:flex border-r border-slate-200 dark:border-cyan-900">
        <div className="px-6 py-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-cyan-800 flex items-center justify-center text-white">
              <span className="material-symbols-outlined">person</span>
            </div>
            <div>
              <h3 className="text-sm font-black text-cyan-900 dark:text-cyan-100 leading-tight">My Profile</h3>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Taxpayer</p>
            </div>
          </div>
          <nav className="space-y-1">
            <NavLink to="/taxpayer" end className={({ isActive }) => `flex items-center gap-3 px-4 py-3 font-inter text-sm font-medium transition-all rounded-lg ${isActive ? "bg-cyan-800 text-white shadow-md shadow-cyan-900/20" : "text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-cyan-900"}`}>
              <span className="material-symbols-outlined">grid_view</span> Home
            </NavLink>
            <NavLink to="/taxpayer/filing" className={({ isActive }) => `flex items-center gap-3 px-4 py-3 font-inter text-sm font-medium transition-all rounded-lg ${isActive ? "bg-cyan-800 text-white shadow-md shadow-cyan-900/20" : "text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-cyan-900"}`}>
              <span className="material-symbols-outlined">payments</span> Pay Tax
            </NavLink>
            <NavLink to="/taxpayer/certificate-of-origin" className={({ isActive }) => `flex items-center gap-3 px-4 py-3 font-inter text-sm font-medium transition-all rounded-lg ${isActive ? "bg-cyan-800 text-white shadow-md shadow-cyan-900/20" : "text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-cyan-900"}`}>
              <span className="material-symbols-outlined">verified</span> Certificates
            </NavLink>
            <NavLink to="/taxpayer/property-rental" className={({ isActive }) => `flex items-center gap-3 px-4 py-3 font-inter text-sm font-medium transition-all rounded-lg ${isActive ? "bg-cyan-800 text-white shadow-md shadow-cyan-900/20" : "text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-cyan-900"}`}>
              <span className="material-symbols-outlined">meeting_room</span> Rentals
            </NavLink>
            <NavLink to="/taxpayer/marketplace" className={({ isActive }) => `flex items-center gap-3 px-4 py-3 font-inter text-sm font-medium transition-all rounded-lg ${isActive ? "bg-cyan-800 text-white shadow-md shadow-cyan-900/20" : "text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-cyan-900"}`}>
              <span className="material-symbols-outlined">storefront</span> Market
            </NavLink>
          </nav>
        </div>
        <div className="mt-auto px-6 py-4 border-t border-slate-200 dark:border-cyan-900">
          <Link to="/" className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:text-red-500 font-inter text-sm font-medium">
            <span className="material-symbols-outlined">logout</span> Exit
          </Link>
        </div>
      </aside>

      {/* Mobile Drawer */}
      <div className={`md:hidden fixed inset-0 z-[60] transition-transform duration-300 ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}></div>
        <aside className="relative h-full w-72 bg-white dark:bg-cyan-950 flex flex-col py-4 font-inter text-sm font-medium overflow-y-auto shadow-2xl">
          <div className="px-6 py-8 border-b border-slate-100 dark:border-cyan-900 mb-4 bg-slate-50 dark:bg-cyan-900/20">
            <h1 className="text-xl font-bold text-cyan-900 dark:text-cyan-100">Tax Records</h1>
            <p className="text-xs text-slate-500 dark:text-cyan-500 tracking-wider font-semibold">User Portal</p>
          </div>
          <div className="flex-1 px-4 space-y-1">
            <NavLink to="/taxpayer" end onClick={() => setIsMobileMenuOpen(false)} className={({ isActive }) => `flex items-center gap-3 px-4 py-4 rounded-xl transition-all ${isActive ? "bg-cyan-800 text-white" : "text-slate-600 dark:text-slate-400"}`}>
              <span className="material-symbols-outlined">grid_view</span> Home
            </NavLink>
            <NavLink to="/taxpayer/filing" onClick={() => setIsMobileMenuOpen(false)} className={({ isActive }) => `flex items-center gap-3 px-4 py-4 rounded-xl transition-all ${isActive ? "bg-cyan-800 text-white" : "text-slate-600 dark:text-slate-400"}`}>
              <span className="material-symbols-outlined">payments</span> Pay Tax
            </NavLink>
            <NavLink to="/taxpayer/certificate-of-origin" onClick={() => setIsMobileMenuOpen(false)} className={({ isActive }) => `flex items-center gap-3 px-4 py-4 rounded-xl transition-all ${isActive ? "bg-cyan-800 text-white" : "text-slate-600 dark:text-slate-400"}`}>
              <span className="material-symbols-outlined">verified</span> Certificates
            </NavLink>
            <NavLink to="/taxpayer/property-rental" onClick={() => setIsMobileMenuOpen(false)} className={({ isActive }) => `flex items-center gap-3 px-4 py-4 rounded-xl transition-all ${isActive ? "bg-cyan-800 text-white" : "text-slate-600 dark:text-slate-400"}`}>
              <span className="material-symbols-outlined">meeting_room</span> Rentals
            </NavLink>
            <NavLink to="/taxpayer/marketplace" onClick={() => setIsMobileMenuOpen(false)} className={({ isActive }) => `flex items-center gap-3 px-4 py-4 rounded-xl transition-all ${isActive ? "bg-cyan-800 text-white" : "text-slate-600 dark:text-slate-400"}`}>
              <span className="material-symbols-outlined">storefront</span> Market
            </NavLink>
          </div>
          <div className="mt-auto px-6 py-4 border-t border-slate-100 dark:border-cyan-900">
            <Link to="/" className="flex items-center gap-3 py-4 text-slate-600 dark:text-slate-400 hover:text-red-500 font-bold">
              <span className="material-symbols-outlined">logout</span> Exit
            </Link>
          </div>
        </aside>
      </div>

      {/* Main Content Canvas */}
      <div className="md:pl-64 pt-16 min-h-screen">
        <Outlet />
      </div>

      {/* BottomNavBar (Mobile Only) */}
      <footer className="md:hidden fixed bottom-0 left-0 w-full bg-white dark:bg-cyan-950 flex justify-around items-center px-2 h-16 pb-safe z-50 border-t border-slate-100 dark:border-cyan-900 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        <NavLink to="/taxpayer" end className={({ isActive }) => `flex flex-col items-center justify-center flex-1 py-1 ${isActive ? "text-cyan-800 scale-105" : "text-slate-400"}`}>
          <span className="material-symbols-outlined text-[24px]">home</span>
          <span className="text-[10px] font-bold mt-0.5">Home</span>
        </NavLink>
        <NavLink to="/taxpayer/filing" className={({ isActive }) => `flex flex-col items-center justify-center flex-1 py-1 ${isActive ? "text-cyan-800 scale-105" : "text-slate-400"}`}>
          <span className="material-symbols-outlined text-[24px]">payments</span>
          <span className="text-[10px] font-bold mt-0.5">Pay Tax</span>
        </NavLink>
        <NavLink to="/taxpayer/certificate-of-origin" className={({ isActive }) => `flex flex-col items-center justify-center flex-1 py-1 ${isActive ? "text-cyan-800 scale-105" : "text-slate-400"}`}>
          <span className="material-symbols-outlined text-[24px]">verified</span>
          <span className="text-[10px] font-bold mt-0.5">Certs</span>
        </NavLink>
        <NavLink to="/taxpayer/marketplace" className={({ isActive }) => `flex flex-col items-center justify-center flex-1 py-1 ${isActive ? "text-cyan-800 scale-105" : "text-slate-400"}`}>
          <span className="material-symbols-outlined text-[24px]">storefront</span>
          <span className="text-[10px] font-bold mt-0.5">Market</span>
        </NavLink>
      </footer>
    </div>
  );
}
