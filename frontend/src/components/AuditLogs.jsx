import React from 'react';

export default function AuditLogs() {
  return (
    <div className="bg-surface text-on-surface min-h-screen">
      <main className="pt-24 pb-12 px-8">
        {/* Header & Search */}
        <div className="mb-10 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-4xl font-extrabold text-primary tracking-tight mb-2">Audit Trails</h1>
              <p className="text-on-surface-variant max-w-xl font-body">Complete chronological ledger of all system interactions, administrative changes, and high-value revenue operations.</p>
            </div>
            <div className="flex gap-3">
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
                <input className="pl-10 pr-4 h-12 w-64 bg-surface-container-low border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 rounded-t-lg text-sm font-body" placeholder="Search by User or Action..." type="text"/>
              </div>
              <button className="flex items-center gap-2 px-6 h-12 bg-primary-container text-on-primary-container font-semibold rounded-lg hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-[20px]">filter_list</span>
                <span>Filter</span>
              </button>
            </div>
          </div>
        </div>

        {/* System Integrity KPI Bento */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10 max-w-7xl mx-auto">
          <div className="bg-surface-container-lowest p-6 rounded-xl relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-surface-tint"></div>
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-on-surface-variant mb-2">Total actions (24H)</p>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold font-headline text-primary">12,842</span>
              <span className="text-xs font-semibold text-primary-container">+4.2%</span>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-6 rounded-xl relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-surface-tint"></div>
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-on-surface-variant mb-2">Admin Modifies</p>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold font-headline text-primary">48</span>
              <span className="text-xs font-semibold text-outline">Nominal</span>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-6 rounded-xl relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-tertiary"></div>
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-on-surface-variant mb-2">Sync Conflicts</p>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold font-headline text-tertiary">03</span>
              <span className="text-xs font-semibold text-tertiary">Action Needed</span>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-6 rounded-xl relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-on-surface-variant mb-2">Active Sessions</p>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold font-headline text-primary">156</span>
              <span className="text-xs font-semibold text-primary">Encrypted</span>
            </div>
          </div>
        </div>

        {/* The Ledger Table */}
        <div className="max-w-7xl mx-auto bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm">
          <div className="bg-surface-container-high px-6 py-4 grid grid-cols-12 gap-4 items-center">
            <div className="col-span-3 text-[11px] font-bold uppercase tracking-wider text-on-surface-variant">Timestamp</div>
            <div className="col-span-3 text-[11px] font-bold uppercase tracking-wider text-on-surface-variant">User / Administrator</div>
            <div className="col-span-3 text-[11px] font-bold uppercase tracking-wider text-on-surface-variant">System Action</div>
            <div className="col-span-2 text-[11px] font-bold uppercase tracking-wider text-on-surface-variant">Location / ID</div>
            <div className="col-span-1 text-right text-[11px] font-bold uppercase tracking-wider text-on-surface-variant">Status</div>
          </div>

          {/* Row 1 */}
          <div className="px-6 py-5 grid grid-cols-12 gap-4 items-center bg-surface hover:bg-primary-fixed-dim/10 transition-colors cursor-pointer group border-b border-outline-variant/10">
            <div className="col-span-3">
              <p className="text-sm font-semibold text-on-surface">Oct 24, 2023</p>
              <p className="text-xs text-on-surface-variant">14:32:01 UTC</p>
            </div>
            <div className="col-span-3 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container text-xs font-bold">SM</div>
              <div>
                <p className="text-sm font-bold text-on-surface">Samuel Mwangi</p>
                <p className="text-[10px] uppercase font-bold text-outline">Regional Director</p>
              </div>
            </div>
            <div className="col-span-3">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-primary">security_update_good</span>
                <p className="text-sm font-medium text-on-surface">Modified Tax Tier Level 4</p>
              </div>
              <p className="text-[11px] text-on-surface-variant mt-1">Increased baseline by 0.5% for Sector A</p>
            </div>
            <div className="col-span-2">
              <div className="flex items-center gap-1.5 text-on-surface-variant">
                <span className="material-symbols-outlined text-[16px]">location_on</span>
                <p className="text-xs font-medium">Headquarters (Node 04)</p>
              </div>
              <p className="text-[10px] font-mono text-outline mt-1">IP: 192.168.1.104</p>
            </div>
            <div className="col-span-1 text-right">
              <span className="inline-flex items-center px-2 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded uppercase">Verified</span>
            </div>
          </div>

          {/* Row 2 */}
          <div className="px-6 py-5 grid grid-cols-12 gap-4 items-center bg-surface-container-low hover:bg-primary-fixed-dim/10 transition-colors cursor-pointer group border-b border-outline-variant/10">
            <div className="col-span-3">
              <p className="text-sm font-semibold text-on-surface">Oct 24, 2023</p>
              <p className="text-xs text-on-surface-variant">13:15:44 UTC</p>
            </div>
            <div className="col-span-3 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-on-secondary text-xs font-bold">AL</div>
              <div>
                <p className="text-sm font-bold text-on-surface">Amina Lekuti</p>
                <p className="text-[10px] uppercase font-bold text-outline">Field Agent Supervisor</p>
              </div>
            </div>
            <div className="col-span-3">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-secondary">cloud_sync</span>
                <p className="text-sm font-medium text-on-surface">Bulk Sync Finalized</p>
              </div>
              <p className="text-[11px] text-on-surface-variant mt-1">450 local records committed to ledger</p>
            </div>
            <div className="col-span-2">
              <div className="flex items-center gap-1.5 text-on-surface-variant">
                <span className="material-symbols-outlined text-[16px]">devices</span>
                <p className="text-xs font-medium">Mobile (Agent ID: 9928)</p>
              </div>
              <p className="text-[10px] font-mono text-outline mt-1">Lat: -1.286389, Lon: 36.817223</p>
            </div>
            <div className="col-span-1 text-right">
              <span className="inline-flex items-center px-2 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded uppercase">Verified</span>
            </div>
          </div>

          {/* Row 3 (Alert Row) */}
          <div className="px-6 py-5 grid grid-cols-12 gap-4 items-center bg-surface hover:bg-primary-fixed-dim/10 transition-colors cursor-pointer group border-b border-outline-variant/10">
            <div className="col-span-3">
              <p className="text-sm font-semibold text-on-surface">Oct 24, 2023</p>
              <p className="text-xs text-on-surface-variant">12:04:12 UTC</p>
            </div>
            <div className="col-span-3 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center text-outline text-xs font-bold">S</div>
              <div>
                <p className="text-sm font-bold text-on-surface">System Process</p>
                <p className="text-[10px] uppercase font-bold text-outline">Automated Task</p>
              </div>
            </div>
            <div className="col-span-3">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-tertiary">warning</span>
                <p className="text-sm font-medium text-on-surface">Database Integrity Check</p>
              </div>
              <p className="text-[11px] text-tertiary font-semibold mt-1">Found 3 Orphaned Revenue Tokens</p>
            </div>
            <div className="col-span-2">
              <div className="flex items-center gap-1.5 text-on-surface-variant">
                <span className="material-symbols-outlined text-[16px]">storage</span>
                <p className="text-xs font-medium">Core Server Cluster B</p>
              </div>
              <p className="text-[10px] font-mono text-outline mt-1">Process_UID: 0xFFFF821</p>
            </div>
            <div className="col-span-1 text-right">
              <span className="inline-flex items-center px-2 py-1 bg-tertiary-container text-on-tertiary-container text-[10px] font-bold rounded uppercase">Alert</span>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-8 max-w-7xl mx-auto flex items-center justify-between">
          <p className="text-sm text-on-surface-variant">Showing <span className="font-bold text-on-surface">1 - 50</span> of <span className="font-bold text-on-surface">1,242</span> records</p>
          <div className="flex gap-2">
            <button className="h-10 px-4 bg-surface-container text-on-surface font-semibold rounded-lg hover:bg-surface-container-high transition-colors disabled:opacity-50">Previous</button>
            <div className="flex gap-1">
              <button className="h-10 w-10 flex items-center justify-center bg-primary text-on-primary rounded-lg font-bold">1</button>
              <button className="h-10 w-10 flex items-center justify-center bg-surface-container hover:bg-surface-container-high rounded-lg font-bold">2</button>
              <button className="h-10 w-10 flex items-center justify-center bg-surface-container hover:bg-surface-container-high rounded-lg font-bold">3</button>
              <span className="h-10 w-10 flex items-center justify-center">...</span>
              <button className="h-10 w-10 flex items-center justify-center bg-surface-container hover:bg-surface-container-high rounded-lg font-bold">25</button>
            </div>
            <button className="h-10 px-4 bg-surface-container text-on-surface font-semibold rounded-lg hover:bg-surface-container-high transition-colors">Next</button>
          </div>
        </div>
      </main>

      {/* Map Context Widget (Fixed/Floating) */}
      <div className="fixed bottom-8 right-8 w-80 bg-surface-container-lowest rounded-2xl shadow-[0_-4px_20px_rgba(0,0,0,0.05)] overflow-hidden hidden xl:block z-30">
        <div className="h-32 w-full bg-surface-container-high overflow-hidden">
            <img className="w-full h-full object-cover opacity-60" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBs0uaumxzKQD_tn9-H5dxi7TJ5zdi9Ot3C0EqTFUKlOkw2ZQiF12cjW7U9kYXAgnwPcsZWqxRGnYQAaCKxJNJ8OI8Nudsf5u3S_lCuRAq3kWBdTa_FgY81Nfk3iwjQzEO12aXdcCtiUikXlnoso3HpsuwDs2c-U7XeLZRv1hgazln0W7ZX8FFmzXLZtq4jTMMIY0vZ3PjDeR3KDgi-FynXg58Q2RruliP8YqWSlfBF3iuVj3ZirGz38PLa-jhAXMHZNH32s6VcUT6k" alt="Map" />
        </div>
        <div className="p-5">
          <div className="flex items-center justify-between mb-3">
            <p className="text-[11px] font-bold uppercase tracking-wider text-on-surface-variant">Live Activity Feed</p>
            <span className="h-2 w-2 rounded-full bg-secondary animate-pulse"></span>
          </div>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="h-8 w-1 bg-primary rounded-full"></div>
              <div>
                <p className="text-xs font-bold text-on-surface">Ledger Sync Successful</p>
                <p className="text-[10px] text-outline">District 7 • Just now</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="h-8 w-1 bg-tertiary rounded-full"></div>
              <div>
                <p className="text-xs font-bold text-on-surface">Unauth Login Attempt</p>
                <p className="text-[10px] text-outline">Public IP • 12 mins ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
