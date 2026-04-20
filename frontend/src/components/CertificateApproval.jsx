import React, { useState } from 'react';

// Mock Applications
const MOCK_APPLICATIONS = [
  { id: 'APP-9281A', name: 'Jonathan Doe', lga: 'Ikeja', ward: 'Ward C', date: '2023-10-25', status: 'Pending' },
  { id: 'APP-9281B', name: 'Sarah Opeyemi', lga: 'Alimosho', ward: 'Ward A', date: '2023-10-25', status: 'Pending' },
  { id: 'APP-9280X', name: 'Michael Afolabi', lga: 'Epe', ward: 'Ward F', date: '2023-10-24', status: 'Approved' },
  { id: 'APP-9279R', name: 'Zainab Bello', lga: 'Surulere', ward: 'Ward B', date: '2023-10-24', status: 'Approved' },
  { id: 'APP-9278M', name: 'Chukwudi Eze', lga: 'Oshodi-Isolo', ward: 'Ward D', date: '2023-10-23', status: 'Rejected' },
];

export default function CertificateApproval() {
  const [activeOverlay, setActiveOverlay] = useState(null);
  const [filter, setFilter] = useState('All');

  const filteredApps = filter === 'All' ? MOCK_APPLICATIONS : MOCK_APPLICATIONS.filter(a => a.status === filter);

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <span className="text-xs font-bold text-primary tracking-[0.2em] uppercase mb-2 block">Identity & Compliance</span>
          <h1 className="text-4xl font-extrabold text-on-surface font-public-sans tracking-tighter">Certificate Approvals</h1>
          <p className="text-on-surface-variant mt-2 max-w-xl">Review and approve applications for State Certificates of Origin. Ensure BVN and residency requirements are met.</p>
        </div>
        <div className="flex gap-3 bg-surface-container-low p-1.5 rounded-xl">
           <button 
             onClick={() => setFilter('All')}
             className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${filter === 'All' ? 'bg-white shadow text-primary' : 'text-on-surface-variant hover:text-on-surface'}`}
           >
             All
           </button>
           <button 
             onClick={() => setFilter('Pending')}
             className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${filter === 'Pending' ? 'bg-white shadow text-primary' : 'text-on-surface-variant hover:text-on-surface'}`}
           >
             Pending <span className="ml-1 bg-error text-white text-[10px] px-1.5 py-0.5 rounded-full">2</span>
           </button>
           <button 
             onClick={() => setFilter('Approved')}
             className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${filter === 'Approved' ? 'bg-white shadow text-primary' : 'text-on-surface-variant hover:text-on-surface'}`}
           >
             Approved
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Application List */}
        <div className="lg:col-span-2 space-y-4">
          {filteredApps.map(app => (
            <div 
              key={app.id}
              onClick={() => setActiveOverlay(app)}
              className={`bg-surface-container-lowest p-6 rounded-2xl border transition-all cursor-pointer shadow-sm hover:shadow-md ${activeOverlay?.id === app.id ? 'border-primary ring-1 ring-primary/20' : 'border-surface-container'}`}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 bg-surface-container-high rounded-full flex items-center justify-center text-primary font-bold font-public-sans text-xl">
                    {app.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-on-surface font-public-sans text-lg">{app.name}</h3>
                    <p className="font-mono text-xs text-on-surface-variant">{app.id} • Submitted {app.date}</p>
                  </div>
                </div>
                <div>
                  {app.status === 'Pending' && <span className="bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">Requires Review</span>}
                  {app.status === 'Approved' && <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">Approved</span>}
                  {app.status === 'Rejected' && <span className="bg-error-container text-on-error-container px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">Rejected</span>}
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-surface-container-low">
                 <div>
                   <p className="text-[10px] font-bold text-outline uppercase tracking-widest mb-1">Declared LGA</p>
                   <p className="font-semibold text-sm">{app.lga}</p>
                 </div>
                 <div>
                   <p className="text-[10px] font-bold text-outline uppercase tracking-widest mb-1">Ward Name</p>
                   <p className="font-semibold text-sm">{app.ward}</p>
                 </div>
                 <div>
                   <p className="text-[10px] font-bold text-outline uppercase tracking-widest mb-1">NIN/BVN Match</p>
                   <div className="flex items-center gap-1 text-secondary font-semibold text-sm">
                     <span className="material-symbols-outlined text-[16px]">verified</span> 100% Match
                   </div>
                 </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Panel / Review Inspector */}
        <div className="lg:col-span-1">
          {activeOverlay ? (
            <div className="bg-surface-container-lowest border border-surface-container rounded-2xl shadow-lg sticky top-24 overflow-hidden animate-in slide-in-from-right-4 duration-300">
              <div className="bg-primary-container p-6 text-on-primary-container">
                <div className="flex justify-between items-center mb-4">
                  <span className="bg-white/20 px-2 py-1 rounded text-[10px] font-mono font-bold">{activeOverlay.id}</span>
                  <button onClick={() => setActiveOverlay(null)} className="hover:bg-white/20 p-1 rounded-full transition-colors">
                    <span className="material-symbols-outlined text-sm">close</span>
                  </button>
                </div>
                <h2 className="text-2xl font-black font-public-sans">{activeOverlay.name}</h2>
                <p className="text-sm mt-1 font-medium opacity-90">Reviewing documentation for issuance</p>
              </div>
              
              <div className="p-6 space-y-6">
                <div className="flex items-center gap-4 bg-tertiary-container/20 p-4 rounded-xl border border-tertiary-container/30">
                  <span className="material-symbols-outlined text-tertiary text-3xl">smart_toy</span>
                  <div>
                    <h4 className="font-bold text-tertiary text-sm">AI Verification Passed</h4>
                    <p className="text-xs text-on-surface-variant mt-1">Facial biometrics match BVN database records with 98.4% confidence.</p>
                  </div>
                </div>

                <div className="space-y-4">
                   <div>
                     <p className="text-[10px] font-bold text-outline uppercase tracking-widest mb-1">Residential Address</p>
                     <p className="text-sm font-medium">14 Awolowo Road, {activeOverlay.lga}, Lagos State</p>
                   </div>
                   <div>
                     <p className="text-[10px] font-bold text-outline uppercase tracking-widest mb-1">Claimed Duration</p>
                     <p className="text-sm font-medium">12 Years</p>
                   </div>
                   <div>
                     <p className="text-[10px] font-bold text-outline uppercase tracking-widest mb-1">Supporting Documents</p>
                     <div className="flex flex-col gap-2 mt-2">
                       <button className="flex items-center gap-2 bg-surface-container-low p-2 rounded-lg text-sm font-medium hover:bg-surface-container-high transition-colors text-left text-primary">
                         <span className="material-symbols-outlined text-[18px]">badge</span> Guarantor ID Form
                       </button>
                       <button className="flex items-center gap-2 bg-surface-container-low p-2 rounded-lg text-sm font-medium hover:bg-surface-container-high transition-colors text-left text-primary">
                         <span className="material-symbols-outlined text-[18px]">receipt</span> Utility Bill Proof
                       </button>
                     </div>
                   </div>
                </div>
                
                {activeOverlay.status === 'Pending' ? (
                  <div className="pt-6 border-t border-surface-container-low flex gap-3">
                    <button className="flex-1 border-2 border-error text-error font-bold py-3 rounded-xl hover:bg-error hover:text-white transition-colors">
                      Reject
                    </button>
                    <button className="flex-1 bg-primary text-on-primary font-bold py-3 rounded-xl shadow-lg shadow-primary/20 hover:bg-primary-container transition-all">
                      Approve & Issue
                    </button>
                  </div>
                ) : (
                  <div className="pt-6 border-t border-surface-container-low">
                    <div className={`p-4 rounded-xl text-center font-bold ${activeOverlay.status === 'Approved' ? 'bg-secondary-container/50 text-secondary' : 'bg-error-container/50 text-error'}`}>
                      Application {activeOverlay.status}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="bg-surface-container-low border border-dashed border-outline-variant/50 rounded-2xl h-96 flex flex-col items-center justify-center text-center p-8">
               <span className="material-symbols-outlined text-outline-variant text-6xl mb-4">rate_review</span>
               <h3 className="font-bold text-on-surface">Select an application</h3>
               <p className="text-on-surface-variant text-sm mt-2">Click on an application from the list to view its complete details and perform the review process.</p>
            </div>
          )}
        </div>
      </div>
      
    </div>
  );
}
