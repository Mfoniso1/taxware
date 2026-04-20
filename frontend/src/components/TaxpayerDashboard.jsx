import React from 'react';

export default function TaxpayerDashboard() {
  console.log('TaxpayerDashboard rendering');
  return (
    <div className="bg-background text-on-surface min-h-screen border-4 border-red-500/10">
      <main className="pt-20 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
        {/* Debug Header - will be removed after confirmation */}
        <div className="bg-primary/10 p-2 rounded mb-4 text-[10px] font-bold uppercase tracking-widest text-primary flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
          Live View: Taxpayer Portal Dashboard
        </div>

        {/* Dashboard Header Section */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-bold text-primary tracking-[0.2em] uppercase mb-2 block font-public-sans">Enterprise Portal</span>
            <h1 className="text-4xl font-extrabold text-on-surface font-public-sans tracking-tighter">Taxpayer Dashboard</h1>
            <p className="text-on-surface-variant mt-2 max-w-lg leading-relaxed">Manage your corporate fiscal obligations and compliance certifications from the central TaxTrack platform.</p>
          </div>
          <div className="flex gap-3">
            <button className="bg-primary hover:bg-primary-container text-on-primary px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all shadow-lg shadow-primary/10 active:scale-95">
              <span className="material-symbols-outlined text-sm">post_add</span> File Annual Return
            </button>
            <button className="bg-surface-container-high hover:bg-surface-container-highest text-on-surface px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all active:scale-95">
              <span className="material-symbols-outlined text-sm">verified</span> Request e-TCC
            </button>
          </div>
        </div>

        {/* Bento Grid Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Profile Summary Card (Bento Large) */}
          <div className="md:col-span-8 bg-surface-container-lowest rounded-xl p-8 flex flex-col md:flex-row gap-8 relative overflow-hidden border border-surface-container shadow-sm">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-surface-tint"></div>
            <div className="w-24 h-24 bg-surface-container-high rounded-2xl flex-shrink-0 overflow-hidden shadow-inner">
              <img alt="Corporate Building" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsDtO0ErI58ZegUJIJgxafpLg4zHb3zSwnuOwFNunI7Ih6iia-BjmVZSCFh83lwoNYEk8QAC7M1mNEAefpyWHm0-tounFFuUz3MqaEBXV2SiZdQnL0ond9KfczYchCrWQXnYJa1sKDnnCOR0tsOE8OxQ5pRMo4YbGOF1ePvA8GGQB4rcRNi8tSsd7MkWdUQYuV6Az5oHNfsVc0PEIUnxfgpdgpYiUtM2-p3TOTIUIu2EttLZLqlbd2LXiGL1K0femYp930QiXpPgRZ" />
            </div>
            <div className="flex-grow">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold font-public-sans text-on-surface">Nexus Global Dynamics LTD</h2>
                  <p className="text-on-surface-variant font-medium font-mono text-sm">TIN: 29384-X92-2023</p>
                </div>
                <span className="px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-[10px] font-bold uppercase tracking-wider">Formal Sector</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6 border-t border-surface-container">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-outline mb-1">Tax Office</p>
                  <p className="text-sm font-semibold text-on-surface">Central Business District</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-outline mb-1">Company Secretary</p>
                  <p className="text-sm font-semibold text-on-surface">Elena Rodriguez</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-outline mb-1">Compliance Status</p>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_rgba(76,97,108,0.4)]"></div>
                    <p className="text-sm font-semibold text-on-surface">Active</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tax Liability Snapshot (Bento Tall) */}
          <div className="md:col-span-4 bg-primary text-on-primary rounded-xl p-8 flex flex-col justify-between relative overflow-hidden shadow-xl">
            <div className="absolute -right-12 -top-12 w-48 h-48 bg-primary-container/30 rounded-full blur-3xl"></div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary-fixed/60 mb-1 block">Total Liability</span>
              <h3 className="text-4xl font-bold font-public-sans tracking-tighter">₦4,285,000.00</h3>
              <p className="text-primary-fixed/80 text-xs mt-2">Due by November 30, 2023</p>
            </div>
            <div className="mt-8">
              <button className="w-full bg-primary-fixed text-on-primary-fixed hover:bg-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all active:scale-95 shadow-md">
                Pay Now <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="md:col-span-4 bg-surface-container-low rounded-xl p-6 relative border border-surface-container shadow-sm">
            <div className="absolute left-0 top-6 bottom-6 w-1 bg-surface-tint"></div>
            <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-on-surface-variant mb-2 font-public-sans">Assessments Raised</p>
            <div className="flex items-end justify-between">
              <h4 className="text-3xl font-bold font-public-sans text-on-surface tracking-tight">12</h4>
              <span className="text-secondary font-bold text-xs flex items-center gap-1 bg-secondary-container px-2 py-1 rounded">
                <span className="material-symbols-outlined text-xs">trending_up</span> +2
              </span>
            </div>
          </div>

          <div className="md:col-span-4 bg-surface-container-low rounded-xl p-6 relative border border-surface-container shadow-sm">
            <div className="absolute left-0 top-6 bottom-6 w-1 bg-surface-tint"></div>
            <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-on-surface-variant mb-2 font-public-sans">Pending Objections</p>
            <div className="flex items-end justify-between">
              <h4 className="text-3xl font-bold font-public-sans text-on-surface tracking-tight">02</h4>
              <span className="text-tertiary font-bold text-xs flex items-center gap-1 bg-tertiary-fixed px-2 py-1 rounded">
                <span className="material-symbols-outlined text-xs">hourglass_empty</span> Active
              </span>
            </div>
          </div>

          <div className="md:col-span-4 bg-surface-container-low rounded-xl p-6 relative border border-surface-container shadow-sm">
            <div className="absolute left-0 top-6 bottom-6 w-1 bg-surface-tint"></div>
            <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-on-surface-variant mb-2 font-public-sans">Next Audit Date</p>
            <div className="flex items-end justify-between">
              <h4 className="text-xl font-bold font-public-sans text-on-surface tracking-tight">Dec 15, 2023</h4>
              <span className="material-symbols-outlined text-on-surface-variant">calendar_month</span>
            </div>
          </div>

          {/* Recent Activity Table */}
          <div className="md:col-span-12 bg-surface-container-lowest rounded-xl overflow-hidden mt-2 border border-surface-container shadow-sm">
            <div className="px-8 py-6 flex flex-col sm:flex-row sm:items-center justify-between border-b border-surface-container gap-4 bg-surface-bright">
              <h3 className="text-lg font-bold font-public-sans text-on-surface">Recent Transactions & Filings</h3>
              <button className="text-sm font-bold text-primary flex items-center gap-1 hover:underline">
                View Full Ledger <span className="material-symbols-outlined text-sm">chevron_right</span>
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-surface-container-high border-b border-surface-container">
                    <th className="px-8 py-4 text-[11px] font-bold uppercase tracking-widest text-on-surface-variant">Date</th>
                    <th className="px-8 py-4 text-[11px] font-bold uppercase tracking-widest text-on-surface-variant">Reference</th>
                    <th className="px-8 py-4 text-[11px] font-bold uppercase tracking-widest text-on-surface-variant">Type</th>
                    <th className="px-8 py-4 text-[11px] font-bold uppercase tracking-widest text-on-surface-variant">Amount</th>
                    <th className="px-8 py-4 text-[11px] font-bold uppercase tracking-widest text-on-surface-variant text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-container-low">
                  <tr className="hover:bg-primary-fixed-dim/20 transition-colors">
                    <td className="px-8 py-4 text-sm font-medium">Oct 24, 2023</td>
                    <td className="px-8 py-4 text-sm font-mono text-outline">PAY-772910</td>
                    <td className="px-8 py-4 text-sm font-medium">VAT Monthly Remittance</td>
                    <td className="px-8 py-4 text-sm font-black text-on-surface">₦1,250,000</td>
                    <td className="px-8 py-4 text-right">
                      <span className="px-3 py-1 bg-secondary-fixed text-on-secondary-fixed rounded-full text-[10px] font-black uppercase tracking-tighter">Successful</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-primary-fixed-dim/20 transition-colors">
                    <td className="px-8 py-4 text-sm font-medium">Oct 12, 2023</td>
                    <td className="px-8 py-4 text-sm font-mono text-outline">RET-221083</td>
                    <td className="px-8 py-4 text-sm font-medium">WHT Schedule Filing</td>
                    <td className="px-8 py-4 text-sm font-black text-on-surface">--</td>
                    <td className="px-8 py-4 text-right">
                      <span className="px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed rounded-full text-[10px] font-black uppercase tracking-tighter">Under Review</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-primary-fixed-dim/20 transition-colors">
                    <td className="px-8 py-4 text-sm font-medium">Sep 30, 2023</td>
                    <td className="px-8 py-4 text-sm font-mono text-outline">PAY-771522</td>
                    <td className="px-8 py-4 text-sm font-medium">Corporate Income Tax</td>
                    <td className="px-8 py-4 text-sm font-black text-on-surface">₦3,035,000</td>
                    <td className="px-8 py-4 text-right">
                      <span className="px-3 py-1 bg-secondary-fixed text-on-secondary-fixed rounded-full text-[10px] font-black uppercase tracking-tighter">Successful</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

