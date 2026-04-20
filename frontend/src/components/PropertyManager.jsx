import React from 'react';

export default function PropertyManager() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <span className="text-xs font-bold text-primary tracking-[0.2em] uppercase mb-2 block">Admin Console</span>
          <h1 className="text-4xl font-extrabold text-on-surface font-public-sans tracking-tighter">Property Register</h1>
          <p className="text-on-surface-variant mt-2 max-w-xl">Supervise Land Use Charges, real estate ownership, and commercial rental compliance across the state.</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-surface-container-high hover:bg-surface-container-highest text-on-surface px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all">
            <span className="material-symbols-outlined text-sm">filter_alt</span> Filter
          </button>
          <button className="bg-primary hover:bg-primary-container text-on-primary px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-sm">add_home</span> New Entry
          </button>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-surface-container-lowest p-6 rounded-2xl border border-surface-container shadow-sm flex flex-col justify-between h-32">
          <span className="text-on-surface-variant text-[11px] font-bold uppercase tracking-[0.1em]">Total Registered</span>
          <h3 className="text-3xl font-black font-public-sans text-on-surface">14,892</h3>
          <div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
            <div className="bg-primary h-full w-[80%]"></div>
          </div>
        </div>
        
        <div className="bg-surface-container-lowest p-6 rounded-2xl border border-surface-container shadow-sm flex flex-col justify-between h-32">
          <span className="text-on-surface-variant text-[11px] font-bold uppercase tracking-[0.1em]">Commercial Use</span>
          <h3 className="text-3xl font-black font-public-sans text-surface-tint">4,210</h3>
          <p className="text-[10px] uppercase font-bold text-outline">Targeting for WHT audits</p>
        </div>

        <div className="bg-surface-container-lowest p-6 rounded-2xl border border-surface-container shadow-sm flex flex-col justify-between h-32">
          <span className="text-on-surface-variant text-[11px] font-bold uppercase tracking-[0.1em]">Compliance Rate</span>
          <h3 className="text-3xl font-black font-public-sans text-on-surface">78.4%</h3>
          <div className="flex items-center text-xs font-bold text-cyan-600 gap-1">
            <span className="material-symbols-outlined text-sm">trending_up</span>
            +2.1% vs prev. month
          </div>
        </div>

        <div className="bg-primary p-6 rounded-2xl shadow-sm text-on-primary flex flex-col justify-between h-32">
          <span className="text-primary-fixed-dim text-[11px] font-bold uppercase tracking-[0.1em]">LUC Revenue (YTD)</span>
          <h3 className="text-3xl font-black font-public-sans">₦1.8B</h3>
          <p className="text-[10px] text-white opacity-90 uppercase font-bold">Land Use Charge</p>
        </div>
      </div>

      {/* Main Table */}
      <div className="bg-surface-container-lowest rounded-2xl overflow-hidden border border-surface-container shadow-sm">
        <div className="p-6 border-b border-surface-container flex justify-between items-center bg-surface-bright">
          <div className="relative w-72">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]">search</span>
            <input 
              type="text" 
              placeholder="Search by PID, address, or owner..."
              className="w-full bg-white border-b-2 border-outline-variant/30 px-9 py-2 rounded-t-lg focus:ring-0 focus:border-primary text-sm font-medium"
            />
          </div>
          <div className="flex gap-2">
             <span className="px-3 py-1 bg-surface-container-high rounded text-xs font-bold text-on-surface-variant uppercase flex items-center gap-1 cursor-pointer hover:bg-surface-container-highest">
               Sector <span className="material-symbols-outlined text-[14px]">arrow_drop_down</span>
             </span>
             <span className="px-3 py-1 bg-surface-container-high rounded text-xs font-bold text-on-surface-variant uppercase flex items-center gap-1 cursor-pointer hover:bg-surface-container-highest">
               Status <span className="material-symbols-outlined text-[14px]">arrow_drop_down</span>
             </span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low text-[11px] font-bold text-on-surface-variant uppercase tracking-widest border-b border-surface-container">
                <th className="px-6 py-4">Property ID</th>
                <th className="px-6 py-4">Address</th>
                <th className="px-6 py-4">Owner / Entity</th>
                <th className="px-6 py-4">Classification</th>
                <th className="px-6 py-4">LUC Status</th>
                <th className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container text-sm">
              <tr className="hover:bg-primary-fixed-dim/10 transition-colors group cursor-pointer">
                <td className="px-6 py-4 font-mono text-xs font-semibold text-primary">PR-LGS-8821</td>
                <td className="px-6 py-4 font-medium max-w-[200px] truncate" title="Plot 12, Financial District, VI">Plot 12, Financial District, VI</td>
                <td className="px-6 py-4">
                  <div className="font-semibold text-on-surface">Nexus Global Dynamics LTD</div>
                  <div className="text-xs text-on-surface-variant font-mono">TIN: 29384-X92-2023</div>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center text-[10px] font-bold uppercase px-2 py-0.5 bg-surface-container-highest text-on-surface rounded-full">Commercial</span>
                </td>
                <td className="px-6 py-4">
                   <div className="flex items-center gap-1.5 text-secondary">
                      <span className="material-symbols-outlined text-[16px]">check_circle</span>
                      <span className="text-xs font-bold uppercase tracking-wider">Settled</span>
                   </div>
                </td>
                <td className="px-6 py-4 text-right">
                   <button className="text-primary hover:bg-primary/10 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all">
                     <span className="material-symbols-outlined">more_vert</span>
                   </button>
                </td>
              </tr>

              <tr className="bg-surface-container-low/30 hover:bg-primary-fixed-dim/10 transition-colors group cursor-pointer">
                <td className="px-6 py-4 font-mono text-xs font-semibold text-primary">PR-LGS-9034</td>
                <td className="px-6 py-4 font-medium max-w-[200px] truncate" title="45 Bayview Avenue, Lekki Phase 1">45 Bayview Avenue, Lekki Phase 1</td>
                <td className="px-6 py-4">
                  <div className="font-semibold text-on-surface">Nexus Global Dynamics LTD</div>
                  <div className="text-xs text-on-surface-variant font-mono">TIN: 29384-X92-2023</div>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center text-[10px] font-bold uppercase px-2 py-0.5 bg-surface-container-highest text-on-surface rounded-full">Residential</span>
                </td>
                <td className="px-6 py-4">
                   <div className="flex items-center gap-1.5 text-secondary">
                      <span className="material-symbols-outlined text-[16px]">check_circle</span>
                      <span className="text-xs font-bold uppercase tracking-wider">Settled</span>
                   </div>
                </td>
                <td className="px-6 py-4 text-right">
                   <button className="text-primary hover:bg-primary/10 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all">
                     <span className="material-symbols-outlined">more_vert</span>
                   </button>
                </td>
              </tr>

              <tr className="hover:bg-primary-fixed-dim/10 transition-colors group cursor-pointer">
                <td className="px-6 py-4 font-mono text-xs font-semibold text-primary">PR-LGS-5102</td>
                <td className="px-6 py-4 font-medium max-w-[200px] truncate" title="Block 4, Industrial Estate, Ikeja">Block 4, Industrial Estate, Ikeja</td>
                <td className="px-6 py-4">
                  <div className="font-semibold text-on-surface">Oluwa Logistics Co.</div>
                  <div className="text-xs text-on-surface-variant font-mono">TIN: 81920-A11-2020</div>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center text-[10px] font-bold uppercase px-2 py-0.5 bg-surface-container-highest text-on-surface rounded-full">Industrial</span>
                </td>
                <td className="px-6 py-4">
                   <div className="flex items-center gap-1.5 text-error">
                      <span className="material-symbols-outlined text-[16px]">warning</span>
                      <span className="text-xs font-bold uppercase tracking-wider">Overdue</span>
                   </div>
                </td>
                <td className="px-6 py-4 text-right">
                   <button className="text-primary hover:bg-primary/10 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all">
                     <span className="material-symbols-outlined">more_vert</span>
                   </button>
                </td>
              </tr>
              
              <tr className="bg-surface-container-low/30 hover:bg-primary-fixed-dim/10 transition-colors group cursor-pointer">
                <td className="px-6 py-4 font-mono text-xs font-semibold text-primary">PR-LGS-2219</td>
                <td className="px-6 py-4 font-medium max-w-[200px] truncate" title="19a Broad Street, Lagos Island">19a Broad Street, Lagos Island</td>
                <td className="px-6 py-4">
                  <div className="font-semibold text-on-surface">Bank of Commerce Tower</div>
                  <div className="text-xs text-on-surface-variant font-mono">TIN: 10029-B94-2015</div>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center text-[10px] font-bold uppercase px-2 py-0.5 bg-surface-container-highest text-on-surface rounded-full">Commercial</span>
                </td>
                <td className="px-6 py-4">
                   <div className="flex items-center gap-1.5 text-tertiary">
                      <span className="material-symbols-outlined text-[16px]">hourglass_empty</span>
                      <span className="text-xs font-bold uppercase tracking-wider">Pending Assess.</span>
                   </div>
                </td>
                <td className="px-6 py-4 text-right">
                   <button className="text-primary hover:bg-primary/10 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all">
                     <span className="material-symbols-outlined">more_vert</span>
                   </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="p-4 border-t border-surface-container flex items-center justify-between bg-surface-bright">
           <span className="text-xs font-medium text-on-surface-variant">Showing 1-4 of 14,892 properties</span>
           <div className="flex gap-1">
             <button className="w-8 h-8 rounded bg-surface-container flex items-center justify-center text-outline-variant hover:text-on-surface" disabled><span className="material-symbols-outlined text-sm">chevron_left</span></button>
             <button className="w-8 h-8 rounded bg-primary text-white flex items-center justify-center text-xs font-bold">1</button>
             <button className="w-8 h-8 rounded bg-transparent hover:bg-surface-container flex items-center justify-center text-xs font-bold text-on-surface">2</button>
             <button className="w-8 h-8 rounded bg-transparent hover:bg-surface-container flex items-center justify-center text-xs font-bold text-on-surface">3</button>
             <button className="w-8 h-8 rounded bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high"><span className="material-symbols-outlined text-sm">chevron_right</span></button>
           </div>
        </div>
      </div>
    </div>
  );
}
