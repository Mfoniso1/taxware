import React from 'react';
import { Outlet, NavLink, Link } from 'react-router-dom';

export default function TaxpayerLayout() {
  return (
    <div className="bg-background text-on-surface min-h-screen">
      {/* TopNavBar */}
      <header className="fixed top-0 w-full z-50 bg-slate-50 dark:bg-cyan-950 flex justify-between items-center px-6 h-16">
        <div className="flex items-center gap-8">
          <Link to="/taxpayer" className="text-xl font-bold tracking-tighter text-cyan-900 dark:text-cyan-50 font-public-sans">TaxTrack</Link>
          <nav className="hidden md:flex gap-6">
            <NavLink to="/taxpayer" end className={({ isActive }) => `font-semibold py-4 font-public-sans tracking-tight ${isActive ? "text-cyan-700 dark:text-cyan-300 border-b-2 border-cyan-700" : "text-slate-500 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-cyan-800/50 transition-colors"}`}>Dashboard</NavLink>
            <NavLink to="/taxpayer/filing" className={({ isActive }) => `font-semibold py-4 font-public-sans tracking-tight ${isActive ? "text-cyan-700 dark:text-cyan-300 border-b-2 border-cyan-700" : "text-slate-500 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-cyan-800/50 transition-colors"}`}>Filing</NavLink>
            <NavLink to="/taxpayer/certificate-of-origin" className={({ isActive }) => `font-semibold py-4 font-public-sans tracking-tight ${isActive ? "text-cyan-700 dark:text-cyan-300 border-b-2 border-cyan-700" : "text-slate-500 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-cyan-800/50 transition-colors"}`}>Certificates</NavLink>
            <NavLink to="/taxpayer/property-rental" className={({ isActive }) => `font-semibold py-4 font-public-sans tracking-tight ${isActive ? "text-cyan-700 dark:text-cyan-300 border-b-2 border-cyan-700" : "text-slate-500 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-cyan-800/50 transition-colors"}`}>Properties</NavLink>
            <NavLink to="/taxpayer/marketplace" className={({ isActive }) => `font-semibold py-4 font-public-sans tracking-tight ${isActive ? "text-cyan-700 dark:text-cyan-300 border-b-2 border-cyan-700" : "text-slate-500 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-cyan-800/50 transition-colors"}`}>Marketplace</NavLink>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative hidden sm:block">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">search</span>
            <input className="bg-surface-container-high border-none rounded-xl pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary w-64" placeholder="Search records..." type="text" />
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-full hover:bg-slate-200/50 dark:hover:bg-cyan-800/50 transition-colors text-cyan-900 dark:text-cyan-100"><span className="material-symbols-outlined">sync</span></button>
            <button className="p-2 rounded-full hover:bg-slate-200/50 dark:hover:bg-cyan-800/50 transition-colors text-cyan-900 dark:text-cyan-100"><span className="material-symbols-outlined">notifications</span></button>
            <button className="p-2 rounded-full hover:bg-slate-200/50 dark:hover:bg-cyan-800/50 transition-colors text-cyan-900 dark:text-cyan-100"><span className="material-symbols-outlined">account_circle</span></button>
          </div>
        </div>
      </header>

      {/* SideNavBar */}
      <aside className="h-screen w-64 fixed left-0 top-0 pt-16 bg-slate-100 dark:bg-cyan-950/80 flex-col hidden md:flex">
        <div className="px-6 py-8">
          <div className="flex items-center gap-3 mb-6">
            <img alt="Government Administrator Profile" className="w-10 h-10 rounded-full bg-surface-container-highest" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVQ12ijYT3775GvhBGr-LHz-0svXz6bfMf5o18d0VnUXMgW9SwMlEFWbhmEi-XKpcBsXlubSTQSHy3z3GPpchE8o0KguG2tqD95kebI6v6C6QLkdv4aBmgitC0g25v4IC0V3qd-yv8GyDsnWuScAOOakuJqFpdTwDVUf6Aoc899nXalm3ew9K8zsMLzgldrFGwRMmm_DK1vEk7uHc-bZJwMuml4pspfvyXCzGxMoNdoZu-dwM4uoLubyBBAEFUWH9wzMy5pVvMdl3t" />
            <div>
              <h3 className="text-sm font-black text-cyan-900 dark:text-cyan-100 leading-tight">Taxpayer Portal</h3>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">TaxTrack</p>
            </div>
          </div>
          <nav className="space-y-1">
            <NavLink to="/taxpayer" end className={({ isActive }) => `flex items-center gap-3 px-4 py-3 font-inter text-sm font-medium transition-all ${isActive ? "bg-cyan-100/50 dark:bg-cyan-800/40 text-cyan-900 dark:text-cyan-50 border-r-4 border-cyan-800" : "text-slate-600 dark:text-slate-400 hover:text-cyan-800 hover:bg-slate-200 dark:hover:bg-cyan-900"}`}>
              <span className="material-symbols-outlined">leaderboard</span> Overview
            </NavLink>
            <NavLink to="/taxpayer/filing" className={({ isActive }) => `flex items-center gap-3 px-4 py-3 font-inter text-sm font-medium transition-all ${isActive ? "bg-cyan-100/50 dark:bg-cyan-800/40 text-cyan-900 dark:text-cyan-50 border-r-4 border-cyan-800" : "text-slate-600 dark:text-slate-400 hover:text-cyan-800 hover:bg-slate-200 dark:hover:bg-cyan-900"}`}>
              <span className="material-symbols-outlined">description</span> Self Service Filing
            </NavLink>
            <NavLink to="/taxpayer/certificate-of-origin" className={({ isActive }) => `flex items-center gap-3 px-4 py-3 font-inter text-sm font-medium transition-all ${isActive ? "bg-cyan-100/50 dark:bg-cyan-800/40 text-cyan-900 dark:text-cyan-50 border-r-4 border-cyan-800" : "text-slate-600 dark:text-slate-400 hover:text-cyan-800 hover:bg-slate-200 dark:hover:bg-cyan-900"}`}>
              <span className="material-symbols-outlined">verified</span> Certificate of Origin
            </NavLink>
            <NavLink to="/taxpayer/property-rental" className={({ isActive }) => `flex items-center gap-3 px-4 py-3 font-inter text-sm font-medium transition-all ${isActive ? "bg-cyan-100/50 dark:bg-cyan-800/40 text-cyan-900 dark:text-cyan-50 border-r-4 border-cyan-800" : "text-slate-600 dark:text-slate-400 hover:text-cyan-800 hover:bg-slate-200 dark:hover:bg-cyan-900"}`}>
              <span className="material-symbols-outlined">home_work</span> Property Rental
            </NavLink>
            <NavLink to="/taxpayer/marketplace" className={({ isActive }) => `flex items-center gap-3 px-4 py-3 font-inter text-sm font-medium transition-all ${isActive ? "bg-cyan-100/50 dark:bg-cyan-800/40 text-cyan-900 dark:text-cyan-50 border-r-4 border-cyan-800" : "text-slate-600 dark:text-slate-400 hover:text-cyan-800 hover:bg-slate-200 dark:hover:bg-cyan-900"}`}>
              <span className="material-symbols-outlined">storefront</span> OLGOP Marketplace
            </NavLink>
          </nav>
        </div>
        <div className="mt-auto px-6 py-4 border-t border-slate-200/50">
          <Link to="/" className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:text-error font-inter text-sm font-medium">
            <span className="material-symbols-outlined">logout</span> Logout
          </Link>
        </div>
      </aside>

      {/* Main Content Canvas */}
      <div className="md:pl-64 min-h-screen">
        <Outlet />
      </div>

      {/* BottomNavBar (Mobile Only) */}
      <footer className="md:hidden fixed bottom-0 left-0 w-full bg-white dark:bg-cyan-950 flex justify-around items-center px-4 h-20 pb-safe z-50 rounded-t-xl border-t border-slate-100 dark:border-cyan-900 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <NavLink to="/taxpayer" end className={({ isActive }) => `flex flex-col items-center justify-center rounded-2xl px-5 py-1.5 duration-100 ease-out ${isActive ? "bg-cyan-100 dark:bg-cyan-800 text-cyan-900 dark:text-cyan-50 scale-100" : "text-slate-400 dark:text-cyan-700 active:bg-slate-100 dark:active:bg-cyan-900 scale-95"}`}>
          <span className="material-symbols-outlined">grid_view</span>
          <span className="font-inter text-[11px] font-bold uppercase tracking-widest mt-1">Home</span>
        </NavLink>
        <NavLink to="/taxpayer/filing" className={({ isActive }) => `flex flex-col items-center justify-center rounded-2xl px-5 py-1.5 duration-100 ease-out ${isActive ? "bg-cyan-100 dark:bg-cyan-800 text-cyan-900 dark:text-cyan-50 scale-100" : "text-slate-400 dark:text-cyan-700 active:bg-slate-100 dark:active:bg-cyan-900 scale-95"}`}>
          <span className="material-symbols-outlined">description</span>
          <span className="font-inter text-[11px] font-bold uppercase tracking-widest mt-1">Filing</span>
        </NavLink>
        <NavLink to="/taxpayer/certificate-of-origin" className={({ isActive }) => `flex flex-col items-center justify-center rounded-2xl px-5 py-1.5 duration-100 ease-out ${isActive ? "bg-cyan-100 dark:bg-cyan-800 text-cyan-900 dark:text-cyan-50 scale-100" : "text-slate-400 dark:text-cyan-700 active:bg-slate-100 dark:active:bg-cyan-900 scale-95"}`}>
          <span className="material-symbols-outlined">verified</span>
          <span className="font-inter text-[11px] font-bold uppercase tracking-widest mt-1">C.o.O.</span>
        </NavLink>
        <NavLink to="/taxpayer/marketplace" className={({ isActive }) => `flex flex-col items-center justify-center rounded-2xl px-5 py-1.5 duration-100 ease-out ${isActive ? "bg-cyan-100 dark:bg-cyan-800 text-cyan-900 dark:text-cyan-50 scale-100" : "text-slate-400 dark:text-cyan-700 active:bg-slate-100 dark:active:bg-cyan-900 scale-95"}`}>
          <span className="material-symbols-outlined">storefront</span>
          <span className="font-inter text-[11px] font-bold uppercase tracking-widest mt-1">Market</span>
        </NavLink>
      </footer>
    </div>
  );
}
