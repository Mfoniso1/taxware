import React from 'react';

export default function AdminDashboard() {
  return (
    <div className="bg-surface text-on-surface">
      {/* Main Content Canvas */}
      <main className="pt-16 min-h-screen">
        <div className="p-8 max-w-7xl mx-auto space-y-8">
          {/* Page Header */}
          <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-black font-public-sans text-on-surface tracking-tighter">Money Report</h2>
              <p className="text-on-surface-variant font-medium">This year • Live update</p>
            </div>
            <div className="flex gap-3">
              <button className="bg-surface-container-high px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-surface-container-highest transition-colors">
                <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                Last 30 Days
              </button>
              <button className="bg-primary text-on-primary px-5 py-2 rounded-lg text-sm font-bold flex items-center gap-2 shadow-sm hover:opacity-90 transition-opacity">
                <span className="material-symbols-outlined text-[18px]">download</span>
                Export Report
              </button>
            </div>
          </header>

          {/* KPI Row (The "Snapshot" Pattern) */}
          <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-surface-container-lowest p-6 rounded-xl monolithic-accent flex flex-col justify-between h-32">
              <span className="text-on-surface-variant text-[11px] font-bold uppercase tracking-[0.1em]">Total Money Collected</span>
              <h3 className="text-2xl font-black font-public-sans text-primary">₦2.48B</h3>
              <div className="flex items-center text-xs font-bold text-cyan-600 gap-1">
                <span className="material-symbols-outlined text-sm">trending_up</span>
                12.4% vs prev. month
              </div>
            </div>
            
            <div className="bg-surface-container-lowest p-6 rounded-xl monolithic-accent flex flex-col justify-between h-32">
              <span className="text-on-surface-variant text-[11px] font-bold uppercase tracking-[0.1em]">Goal Progress</span>
              <h3 className="text-2xl font-black font-public-sans text-primary">-4.2%</h3>
              <div className="flex items-center text-xs font-bold text-tertiary gap-1">
                <span className="material-symbols-outlined text-sm">info</span>
                Action recommended
              </div>
            </div>

            <div className="bg-surface-container-lowest p-6 rounded-xl monolithic-accent flex flex-col justify-between h-32">
              <span className="text-on-surface-variant text-[11px] font-bold uppercase tracking-[0.1em]">Money Spent</span>
              <h3 className="text-2xl font-black font-public-sans text-primary">68.5%</h3>
              <div className="w-full bg-surface-container h-1 rounded-full overflow-hidden">
                <div className="bg-surface-tint h-full w-[68%]"></div>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-6 rounded-xl monolithic-accent flex flex-col justify-between h-32">
              <span className="text-on-surface-variant text-[11px] font-bold uppercase tracking-[0.1em]">Active Agents</span>
              <h3 className="text-2xl font-black font-public-sans text-primary">1,402</h3>
              <div className="flex items-center text-xs font-bold text-cyan-600 gap-1">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>circle</span>
                94% Online Now
              </div>
            </div>
          </section>

          {/* Main Analytics Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Revenue Heatmap (Left Column Span 2) */}
            <section className="lg:col-span-2 bg-surface-container-lowest rounded-xl overflow-hidden flex flex-col shadow-sm">
              <div className="p-6 border-b border-surface-container flex justify-between items-center">
                <h4 className="font-bold text-on-surface font-public-sans">Collection Heatmap (by Ward)</h4>
                <div className="flex gap-2">
                  <span className="w-3 h-3 bg-primary-fixed-dim rounded-sm"></span>
                  <span className="w-3 h-3 bg-surface-tint rounded-sm"></span>
                  <span className="w-3 h-3 bg-primary rounded-sm"></span>
                </div>
              </div>
              <div className="relative h-[400px] w-full bg-slate-50">
                <img className="w-full h-full object-cover opacity-80" alt="Heatmap" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjv4yf3uKmld_1JqOrbGWia89FQjIv3bqouT4P0QXHOZYRg0hvw9MVnS1MU6s85FwBrDUVKxd72JTiBDO9YSGbaMyRIb2vMPb3Fa0JGFfXOmKmnn102cy-Lj2VNYLs2HIj6JSb9OEgHkWDP1iFVHyVZLWk2cAgxFDjH6psv7Q91Jzxux_x4koehJXfxBooprpTglRL-iGvSmXyd_sazYGzr_zjfUeftZWHC-ysom8Psp4lhsalxrfCaMXhcTehC9MEIw-_Cs08IzYW" />
                <div className="absolute inset-0 p-8 flex items-start justify-end pointer-events-none">
                  <div className="bg-surface-bright/90 backdrop-blur-md p-4 rounded-lg shadow-lg border border-white/50 pointer-events-auto">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">Highest Performing</p>
                    <p className="text-sm font-bold text-primary">Central District Ward IV</p>
                    <p className="text-lg font-black font-public-sans">₦142.5M</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Budget Utilization (Right Column) */}
            <section className="bg-surface-container-lowest rounded-xl p-6 flex flex-col shadow-sm">
              <h4 className="font-bold text-on-surface font-public-sans mb-6">Revenue Mix Strategy</h4>
              <div className="space-y-6 flex-1">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-slate-500">PROPERTY TAX</span>
                    <span>42%</span>
                  </div>
                  <div className="h-3 bg-surface-container rounded-full overflow-hidden">
                    <div className="bg-primary h-full w-[42%]"></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-slate-500">LICENSES & PERMITS</span>
                    <span>28%</span>
                  </div>
                  <div className="h-3 bg-surface-container rounded-full overflow-hidden">
                    <div className="bg-surface-tint h-full w-[28%]"></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-slate-500">MARKET TOLLS</span>
                    <span>18%</span>
                  </div>
                  <div className="h-3 bg-surface-container rounded-full overflow-hidden">
                    <div className="bg-primary-fixed-dim h-full w-[18%]"></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-slate-500">WASTE MANAGEMENT</span>
                    <span>12%</span>
                  </div>
                  <div className="h-3 bg-surface-container rounded-full overflow-hidden">
                    <div className="bg-secondary-fixed-dim h-full w-[12%]"></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-primary-container rounded-lg">
                <p className="text-on-primary-container text-xs font-medium">Strategic insight: Waste management collection is up 4% this week following the new digital billing rollout.</p>
              </div>
            </section>
          </div>

          {/* Detailed Ledger Table */}
          <section className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm">
            <div className="p-6 flex justify-between items-center">
              <h4 className="font-bold text-on-surface font-public-sans">Recent Payments</h4>
              <div className="flex items-center gap-2">
                <input className="bg-surface-container border-none rounded-lg text-xs px-4 py-2 w-64 focus:ring-1 focus:ring-primary" placeholder="Search entries..." type="text" />
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-high text-[11px] font-bold text-on-surface-variant uppercase tracking-widest">
                    <th className="px-6 py-4">Receipt No.</th>
                    <th className="px-6 py-4">Payment Source</th>
                    <th className="px-6 py-4">Location</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4 text-right">Amount (₦)</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-surface-container-low hover:bg-surface-container/30 transition-colors">
                    <td className="px-6 py-4 font-mono text-xs">TXN-849201</td>
                    <td className="px-6 py-4 font-medium text-on-surface">Commercial Property Tax</td>
                    <td className="px-6 py-4">Zone A - Main Mall</td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-cyan-100 text-cyan-900 rounded text-[10px] font-bold">SETTLED</span>
                    </td>
                    <td className="px-6 py-4 text-right font-bold">450,000.00</td>
                  </tr>
                  <tr className="bg-surface-container-low/50 border-b border-surface-container-low hover:bg-surface-container/30 transition-colors">
                    <td className="px-6 py-4 font-mono text-xs">TXN-849202</td>
                    <td className="px-6 py-4 font-medium text-on-surface">Digital Parking Fee</td>
                    <td className="px-6 py-4">Zone C - City Square</td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-cyan-100 text-cyan-900 rounded text-[10px] font-bold">SETTLED</span>
                    </td>
                    <td className="px-6 py-4 text-right font-bold">1,200.00</td>
                  </tr>
                  <tr className="border-b border-surface-container-low hover:bg-surface-container/30 transition-colors">
                    <td className="px-6 py-4 font-mono text-xs">TXN-849203</td>
                    <td className="px-6 py-4 font-medium text-on-surface">Billboard Permit Renewal</td>
                    <td className="px-6 py-4">Highway Bypass North</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1 text-tertiary">
                        <span className="material-symbols-outlined text-[14px]">history</span>
                        <span className="text-[10px] font-bold">PENDING</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right font-bold">125,500.00</td>
                  </tr>
                  <tr className="bg-surface-container-low/50 border-b border-surface-container-low hover:bg-surface-container/30 transition-colors">
                    <td className="px-6 py-4 font-mono text-xs">TXN-849204</td>
                    <td className="px-6 py-4 font-medium text-on-surface">Waste Management - Resid.</td>
                    <td className="px-6 py-4">Breezy Heights Est.</td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-cyan-100 text-cyan-900 rounded text-[10px] font-bold">SETTLED</span>
                    </td>
                    <td className="px-6 py-4 text-right font-bold">12,000.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-surface-container-low flex justify-center">
              <button className="text-xs font-bold text-primary flex items-center gap-1 hover:underline">
                View all transactions
                <span className="material-symbols-outlined text-sm">chevron_right</span>
              </button>
            </div>
          </section>
        </div>
      </main>

      {/* Bottom Navigation Bar (Mobile only) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-4 h-20 pb-safe bg-white z-50 rounded-t-xl shadow-[0_-4px_20px_rgba(0,0,0,0.05)] font-inter text-[11px] font-bold uppercase tracking-widest border-t border-slate-100">
        <div className="flex flex-col items-center justify-center bg-cyan-100 text-cyan-900 rounded-2xl px-5 py-1.5 transition-all scale-95 duration-100 ease-out">
          <span className="material-symbols-outlined mb-1" style={{ fontVariationSettings: "'FILL' 1" }}>grid_view</span>
          <span>Home</span>
        </div>
        <div className="flex flex-col items-center justify-center text-slate-400">
          <span className="material-symbols-outlined mb-1">payments</span>
          <span>Collect</span>
        </div>
        <div className="flex flex-col items-center justify-center text-slate-400">
          <span className="material-symbols-outlined mb-1">qr_code_scanner</span>
          <span>Scanner</span>
        </div>
        <div className="flex flex-col items-center justify-center text-slate-400">
          <span className="material-symbols-outlined mb-1">cloud_sync</span>
          <span>Sync</span>
        </div>
      </nav>
    </div>
  );
}
