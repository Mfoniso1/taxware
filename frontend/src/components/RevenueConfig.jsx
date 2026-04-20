import React from 'react';

export default function RevenueConfig() {
  return (
    <div className="bg-background text-on-surface min-h-screen">
      <main className="pt-20 px-8 pb-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <nav className="flex text-xs font-label text-on-surface-variant mb-2 gap-2">
              <span>Dashboard</span>
              <span>/</span>
              <span className="text-primary font-semibold">Revenue Configuration</span>
            </nav>
            <h1 className="text-3xl font-headline font-extrabold text-on-surface tracking-tight">Revenue Head Configuration</h1>
            <p className="text-on-surface-variant text-sm mt-1">Manage and update sovereign levy rates, tax categories, and collection codes.</p>
          </div>
          <div className="flex gap-3">
            <button className="px-5 py-2.5 bg-surface-container text-on-surface-variant rounded-md font-label font-semibold text-sm hover:bg-surface-container-highest transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">download</span>
              Export Ledger
            </button>
            <button className="px-5 py-2.5 bg-primary text-on-primary rounded-md font-label font-semibold text-sm hover:bg-primary-container transition-colors flex items-center gap-2 shadow-sm">
              <span className="material-symbols-outlined text-[18px]">add</span>
              New Revenue Head
            </button>
          </div>
        </div>

        {/* Bento Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-surface-container-lowest p-5 relative overflow-hidden group">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
            <p className="text-[10px] font-label font-bold uppercase tracking-widest text-on-surface-variant mb-1">Active Revenue Heads</p>
            <h3 className="text-2xl font-headline font-bold text-on-surface">42</h3>
            <div className="mt-2 flex items-center text-xs text-green-600 font-semibold">
              <span className="material-symbols-outlined text-[14px] mr-1">trending_up</span>
              +4 this quarter
            </div>
          </div>
          <div className="bg-surface-container-lowest p-5 relative overflow-hidden group">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-surface-tint"></div>
            <p className="text-[10px] font-label font-bold uppercase tracking-widest text-on-surface-variant mb-1">Projected Annual</p>
            <h3 className="text-2xl font-headline font-bold text-on-surface">$12.4M</h3>
            <div className="mt-2 flex items-center text-xs text-on-surface-variant font-medium">
              <span className="material-symbols-outlined text-[14px] mr-1">update</span>
              Last updated 2h ago
            </div>
          </div>
          <div className="bg-surface-container-lowest p-5 relative overflow-hidden group">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-tertiary"></div>
            <p className="text-[10px] font-label font-bold uppercase tracking-widest text-on-surface-variant mb-1">Pending Sync</p>
            <h3 className="text-2xl font-headline font-bold text-on-surface">128</h3>
            <div className="mt-2 flex items-center text-xs text-tertiary font-semibold">
              <span className="material-symbols-outlined text-[14px] mr-1">cloud_off</span>
              Offline agents active
            </div>
          </div>
          <div className="bg-surface-container-lowest p-5 relative overflow-hidden group">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary"></div>
            <p className="text-[10px] font-label font-bold uppercase tracking-widest text-on-surface-variant mb-1">System Health</p>
            <h3 className="text-2xl font-headline font-bold text-on-surface">99.9%</h3>
            <div className="mt-2 flex items-center text-xs text-primary font-semibold">
              <span className="material-symbols-outlined text-[14px] mr-1">check_circle</span>
              All gateways online
            </div>
          </div>
        </div>

        {/* Main Ledger Table */}
        <div className="bg-surface-container-lowest overflow-hidden shadow-sm rounded-xl">
          <div className="px-6 py-4 flex items-center justify-between bg-surface-container-high/50 border-b border-outline-variant/10">
            <div className="flex items-center gap-4">
              <h2 className="font-headline font-bold text-on-surface">Revenue Catalog</h2>
              <div className="flex gap-2">
                <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold rounded uppercase">Active</span>
                <span className="px-2 py-0.5 bg-surface-container-highest text-on-surface-variant text-[10px] font-bold rounded uppercase">Archived</span>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="p-2 text-on-surface-variant hover:bg-surface-container rounded-md flex items-center justify-center">
                <span className="material-symbols-outlined text-sm">filter_list</span>
              </button>
              <button className="p-2 text-on-surface-variant hover:bg-surface-container rounded-md flex items-center justify-center">
                <span className="material-symbols-outlined text-sm">search</span>
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-high text-on-surface-variant">
                  <th className="px-6 py-4 font-label text-[11px] font-bold uppercase tracking-widest">Revenue Head</th>
                  <th className="px-6 py-4 font-label text-[11px] font-bold uppercase tracking-widest">Category</th>
                  <th className="px-6 py-4 font-label text-[11px] font-bold uppercase tracking-widest">Code</th>
                  <th className="px-6 py-4 font-label text-[11px] font-bold uppercase tracking-widest text-right">Current Rate</th>
                  <th className="px-6 py-4 font-label text-[11px] font-bold uppercase tracking-widest">Last Update</th>
                  <th className="px-6 py-4 font-label text-[11px] font-bold uppercase tracking-widest text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/10">
                {/* Table Row 1 */}
                <tr className="hover:bg-primary-fixed-dim/10 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-primary-container/10 flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-[20px]">storefront</span>
                      </div>
                      <div>
                        <p className="font-body font-semibold text-on-surface text-sm">Market Tolls (Level 1)</p>
                        <p className="text-[11px] text-on-surface-variant">Central Trading District</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-xs font-medium text-on-surface-variant">Trade & Commerce</span>
                  </td>
                  <td className="px-6 py-4">
                    <code className="text-[11px] bg-surface-container px-2 py-1 rounded font-mono">REV-MT-01</code>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <p className="font-body font-bold text-on-surface text-sm">₦5,000.00</p>
                    <p className="text-[10px] text-on-surface-variant">per day/stall</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-xs text-on-surface-variant">12 Oct 2023</p>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-primary font-label font-bold text-[11px] uppercase tracking-wider hover:underline px-3 py-1">Edit Rate</button>
                  </td>
                </tr>

                {/* Table Row 2 */}
                <tr className="bg-surface-container-low/30 hover:bg-primary-fixed-dim/10 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-primary-container/10 flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-[20px]">local_shipping</span>
                      </div>
                      <div>
                        <p className="font-body font-semibold text-on-surface text-sm">Road Tax (Heavy Duty)</p>
                        <p className="text-[11px] text-on-surface-variant">Inter-state Logistics</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-xs font-medium text-on-surface-variant">Infrastructure</span>
                  </td>
                  <td className="px-6 py-4">
                    <code className="text-[11px] bg-surface-container px-2 py-1 rounded font-mono">REV-RT-HD</code>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <p className="font-body font-bold text-on-surface text-sm">₦45,000.00</p>
                    <p className="text-[10px] text-on-surface-variant">per transit</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-xs text-on-surface-variant">04 Nov 2023</p>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-primary font-label font-bold text-[11px] uppercase tracking-wider hover:underline px-3 py-1">Edit Rate</button>
                  </td>
                </tr>

                {/* Table Row 3 */}
                <tr className="hover:bg-primary-fixed-dim/10 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-primary-container/10 flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-[20px]">restaurant</span>
                      </div>
                      <div>
                        <p className="font-body font-semibold text-on-surface text-sm">Liquor Licensing (Standard)</p>
                        <p className="text-[11px] text-on-surface-variant">Hospitality Sector</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-xs font-medium text-on-surface-variant">Permits</span>
                  </td>
                  <td className="px-6 py-4">
                    <code className="text-[11px] bg-surface-container px-2 py-1 rounded font-mono">REV-LC-02</code>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <p className="font-body font-bold text-on-surface text-sm">₦250,000.00</p>
                    <p className="text-[10px] text-on-surface-variant">annual</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-xs text-on-surface-variant">28 Oct 2023</p>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-primary font-label font-bold text-[11px] uppercase tracking-wider hover:underline px-3 py-1">Edit Rate</button>
                  </td>
                </tr>

                {/* Table Row 4 */}
                <tr className="bg-surface-container-low/30 hover:bg-primary-fixed-dim/10 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-primary-container/10 flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-[20px]">park</span>
                      </div>
                      <div>
                        <p className="font-body font-semibold text-on-surface text-sm">Environmental Sanitation</p>
                        <p className="text-[11px] text-on-surface-variant">Residential Zones</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-xs font-medium text-on-surface-variant">Municipal</span>
                  </td>
                  <td className="px-6 py-4">
                    <code className="text-[11px] bg-surface-container px-2 py-1 rounded font-mono">REV-ES-RZ</code>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <p className="font-body font-bold text-on-surface text-sm">₦12,000.00</p>
                    <p className="text-[10px] text-on-surface-variant">monthly</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-xs text-on-surface-variant">15 Sep 2023</p>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-primary font-label font-bold text-[11px] uppercase tracking-wider hover:underline px-3 py-1">Edit Rate</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="px-6 py-4 bg-surface-container-low flex items-center justify-between border-t border-outline-variant/10">
            <p className="text-xs text-on-surface-variant">Showing 1-10 of 42 revenue heads</p>
            <div className="flex gap-1">
              <button className="p-1 hover:bg-surface-container-highest rounded text-on-surface-variant disabled:opacity-30" disabled>
                <span className="material-symbols-outlined text-[20px]">chevron_left</span>
              </button>
              <button className="w-8 h-8 bg-primary text-on-primary text-xs font-bold rounded">1</button>
              <button className="w-8 h-8 hover:bg-surface-container-highest text-xs font-bold rounded">2</button>
              <button className="w-8 h-8 hover:bg-surface-container-highest text-xs font-bold rounded">3</button>
              <button className="p-1 hover:bg-surface-container-highest rounded text-on-surface-variant flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">chevron_right</span>
              </button>
            </div>
          </div>
        </div>

        {/* Secondary Management Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h4 className="font-headline font-bold text-lg mb-4 text-cyan-900">Recent Ledger Activity</h4>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="relative">
                  <div className="w-2 h-2 rounded-full bg-primary mt-1.5"></div>
                  <div className="absolute top-4 left-1 bottom-0 w-[1px] bg-outline-variant/30"></div>
                </div>
                <div>
                  <p className="text-xs font-semibold text-on-surface">Rate adjustment: Road Tax</p>
                  <p className="text-[11px] text-on-surface-variant">Modified by Admin_A01 • 14:20</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="relative">
                  <div className="w-2 h-2 rounded-full bg-tertiary mt-1.5"></div>
                  <div className="absolute top-4 left-1 bottom-0 w-[1px] bg-outline-variant/30"></div>
                </div>
                <div>
                  <p className="text-xs font-semibold text-on-surface">New head added: Cinema Levy</p>
                  <p className="text-[11px] text-on-surface-variant">Pending approval • 11:05</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="relative">
                  <div className="w-2 h-2 rounded-full bg-outline mt-1.5"></div>
                </div>
                <div>
                  <p className="text-xs font-semibold text-on-surface">Batch sync completed</p>
                  <p className="text-[11px] text-on-surface-variant">42 nodes updated • 09:30</p>
                </div>
              </div>
            </div>
            <button className="mt-6 text-primary text-xs font-bold uppercase tracking-wider hover:underline">View Full Audit Log</button>
          </div>

          <div className="col-span-1 md:col-span-2 bg-primary-container p-8 rounded-xl relative overflow-hidden">
            <div className="absolute -right-12 -bottom-12 w-64 h-64 rounded-full bg-primary-fixed-dim/10 pointer-events-none"></div>
            <div className="relative z-10">
              <span className="px-2 py-1 bg-primary-fixed text-primary text-[10px] font-bold rounded uppercase mb-4 inline-block">System Intelligence</span>
              <h4 className="text-2xl font-headline font-extrabold text-white mb-2 tracking-tight">Projected Revenue Optimization</h4>
              <p className="text-on-primary-container/80 text-sm max-w-md mb-6 leading-relaxed">Our models suggest that adjusting 'Standard Commercial Tolls' by +1.5% in the North Quarter would yield a 12% revenue increase without increasing default rates.</p>
              <div className="flex gap-4">
                <button className="px-4 py-2 bg-white text-primary rounded font-label font-bold text-xs hover:bg-primary-fixed transition-colors">Run Impact Study</button>
                <button className="px-4 py-2 border border-white/30 text-white rounded font-label font-bold text-xs hover:bg-white/10 transition-colors">Dismiss</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
