import React, { useState } from 'react';

// Mock Data for the Registry
const MOCK_TAXPAYERS = [
  { id: 'TX-9921', name: 'Zainab Bello', tin: '2928-11A-9', lga: 'Ikeja', sector: 'Formal', status: 'Verified', date: '2023-11-01' },
  { id: 'TX-9920', name: 'Michael Afolabi', tin: '2812-44B-1', lga: 'Alimosho', sector: 'Informal', status: 'Pending', date: '2023-10-28' },
  { id: 'TX-9919', name: 'Alade Market Stall 04', tin: 'TEMP-922', lga: 'Oshodi', sector: 'Informal', status: 'Verified', date: '2023-10-25' },
  { id: 'TX-9918', name: 'Elena Rodriguez', tin: '1092-22X-4', lga: 'Ikeja', sector: 'Formal', status: 'Incomplete', date: '2023-10-22' },
  { id: 'TX-9917', name: 'Chukwudi Eze', tin: '2039-33C-0', lga: 'Epe', sector: 'Formal', status: 'Verified', date: '2023-10-20' },
  { id: 'TX-9916', name: 'Sarah Opeyemi', tin: 'TEMP-881', lga: 'Surulere', sector: 'Informal', status: 'Verified', date: '2023-10-18' },
];

export default function TaxpayerPipeline() {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const filteredData = MOCK_TAXPAYERS.filter(t => {
    const matchesFilter = filter === 'All' || t.sector === filter;
    const matchesSearch = t.name.toLowerCase().includes(search.toLowerCase()) || t.tin.includes(search);
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
      {/* Header & Stats */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-4">
        <div>
          <span className="text-xs font-bold text-primary tracking-[0.2em] uppercase mb-2 block">Governance & Compliance</span>
          <h1 className="text-4xl font-extrabold text-on-surface font-public-sans tracking-tighter">Taxpayer Pipeline</h1>
          <p className="text-on-surface-variant mt-2 max-w-xl">Monitor state-wide enumeration progress and manage the central taxpayer registry across all 57 LGAs and LCDAs.</p>
        </div>
        <div className="flex gap-4">
           <div className="bg-surface-container-low p-4 rounded-xl border border-surface-container text-center px-8 min-w-[140px]">
             <p className="text-[10px] font-bold text-outline uppercase tracking-widest mb-1">Total Enumerated</p>
             <p className="text-2xl font-black text-primary">14,882</p>
           </div>
           <div className="bg-surface-container-low p-4 rounded-xl border border-surface-container text-center px-8 min-w-[140px]">
             <p className="text-[10px] font-bold text-outline uppercase tracking-widest mb-1">Target Achievement</p>
             <div className="flex items-center justify-center gap-2">
               <p className="text-2xl font-black text-secondary">82%</p>
               <span className="material-symbols-outlined text-secondary text-lg">trending_up</span>
             </div>
           </div>
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-surface-container-lowest p-4 rounded-2xl border border-surface-container shadow-sm">
        <div className="flex gap-2 w-full md:w-auto">
           {['All', 'Formal', 'Informal'].map(s => (
             <button 
               key={s}
               onClick={() => setFilter(s)}
               className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${filter === s ? 'bg-primary text-on-primary shadow-lg shadow-primary/20' : 'bg-surface-container-high text-on-surface hover:bg-surface-container-highest'}`}
             >
               {s}
             </button>
           ))}
        </div>
        <div className="relative w-full md:w-96">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
          <input 
            type="text" 
            placeholder="Search by Name or TIN..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-surface-container-low border-none rounded-xl pl-12 pr-4 py-3 text-sm focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      {/* Main Table */}
      <div className="bg-surface-container-lowest rounded-2xl overflow-hidden border border-surface-container shadow-sm">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-surface-container-high border-b border-surface-container">
              <th className="px-8 py-4 text-[11px] font-bold uppercase tracking-widest text-on-surface-variant">Taxpayer Identity</th>
              <th className="px-8 py-4 text-[11px] font-bold uppercase tracking-widest text-on-surface-variant">TIN Reference</th>
              <th className="px-8 py-4 text-[11px] font-bold uppercase tracking-widest text-on-surface-variant">Jurisdiction</th>
              <th className="px-8 py-4 text-[11px] font-bold uppercase tracking-widest text-on-surface-variant">Sector</th>
              <th className="px-8 py-4 text-[11px] font-bold uppercase tracking-widest text-on-surface-variant">Verification</th>
              <th className="px-8 py-4 text-[11px] font-bold uppercase tracking-widest text-on-surface-variant text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-surface-container-low">
            {filteredData.map(t => (
              <tr key={t.id} className="hover:bg-primary-fixed-dim/10 transition-colors group">
                <td className="px-8 py-5">
                   <div className="flex items-center gap-3">
                     <div className="w-10 h-10 bg-surface-container-high rounded-full flex items-center justify-center font-bold text-primary">
                       {t.name.charAt(0)}
                     </div>
                     <div>
                       <p className="font-bold text-sm text-on-surface">{t.name}</p>
                       <p className="text-[10px] text-on-surface-variant uppercase font-medium">Joined {t.date}</p>
                     </div>
                   </div>
                </td>
                <td className="px-8 py-5">
                   <span className="font-mono text-sm bg-surface-container-high px-2 py-1 rounded border border-surface-container">
                     {t.tin}
                   </span>
                </td>
                <td className="px-8 py-5 text-sm font-medium">{t.lga} LGA</td>
                <td className="px-8 py-5">
                   <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm ${t.sector === 'Formal' ? 'bg-secondary-fixed text-on-secondary-fixed' : 'bg-tertiary-fixed text-on-tertiary-fixed'}`}>
                     {t.sector}
                   </span>
                </td>
                <td className="px-8 py-5 text-sm">
                   <div className="flex items-center gap-2">
                     <span className={`w-2 h-2 rounded-full ${
                       t.status === 'Verified' ? 'bg-secondary' : 
                       t.status === 'Pending' ? 'bg-tertiary' : 'bg-error'
                     }`}></span>
                     <p className="font-bold">{t.status}</p>
                   </div>
                </td>
                <td className="px-8 py-5 text-right">
                   <button className="p-2 rounded-full hover:bg-surface-container-high text-on-surface-variant transition-colors group-hover:text-primary">
                     <span className="material-symbols-outlined">more_vert</span>
                   </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {filteredData.length === 0 && (
          <div className="p-20 text-center space-y-4">
             <span className="material-symbols-outlined text-outline-variant text-6xl">search_off</span>
             <p className="text-on-surface-variant font-medium">No taxpayers found matching your criteria</p>
          </div>
        )}

        <div className="bg-surface-container-high/50 p-4 px-8 border-t border-surface-container flex justify-between items-center">
           <p className="text-xs text-on-surface-variant font-medium">Showing {filteredData.length} records</p>
           <div className="flex gap-2">
             <button className="p-1 px-3 border border-surface-container rounded-lg text-xs font-bold hover:bg-white transition-colors disabled:opacity-50">Prev</button>
             <button className="p-1 px-3 border border-surface-container rounded-lg text-xs font-bold hover:bg-white transition-colors">Next</button>
           </div>
        </div>
      </div>
    </div>
  );
}
