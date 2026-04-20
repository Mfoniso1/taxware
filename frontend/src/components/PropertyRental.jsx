import React, { useState } from 'react';

export default function PropertyRental() {
  const [activeTab, setActiveTab] = useState('my-properties');

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <span className="text-xs font-bold text-primary tracking-[0.2em] uppercase mb-2 block">Asset Management</span>
          <h1 className="text-4xl font-extrabold text-on-surface font-public-sans tracking-tighter">Property Portal</h1>
          <p className="text-on-surface-variant mt-2 max-w-2xl">Register real estate properties, declare rental income, and fulfill property tax obligations.</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-primary hover:bg-primary-container text-on-primary px-6 py-3 rounded-lg font-semibold flex items-center gap-2 shadow-lg shadow-primary/20 transition-all active:scale-[0.98]">
            <span className="material-symbols-outlined text-sm">home_work</span> Register New Property
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-surface-container gap-8">
        <button 
          onClick={() => setActiveTab('my-properties')}
          className={`pb-4 text-sm font-bold transition-all border-b-2 ${activeTab === 'my-properties' ? 'text-primary border-primary' : 'text-on-surface-variant border-transparent hover:text-on-surface'}`}
        >
          My Properties
        </button>
        <button 
          onClick={() => setActiveTab('rental-income')}
          className={`pb-4 text-sm font-bold transition-all border-b-2 ${activeTab === 'rental-income' ? 'text-primary border-primary' : 'text-on-surface-variant border-transparent hover:text-on-surface'}`}
        >
          Rental Income Declaration
        </button>
        <button 
          onClick={() => setActiveTab('tax-assessments')}
          className={`pb-4 text-sm font-bold transition-all border-b-2 ${activeTab === 'tax-assessments' ? 'text-primary border-primary' : 'text-on-surface-variant border-transparent hover:text-on-surface'}`}
        >
          Assessments
        </button>
      </div>

      {activeTab === 'my-properties' && (
        <div className="space-y-6">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface-container-lowest p-6 rounded-2xl border border-surface-container shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                <span className="material-symbols-outlined">apartment</span>
              </div>
              <div>
                <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">Registered Assets</p>
                <p className="text-2xl font-black font-public-sans text-on-surface">3</p>
              </div>
            </div>
            
            <div className="bg-surface-container-lowest p-6 rounded-2xl border border-surface-container shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 bg-surface-tint/10 text-surface-tint rounded-xl flex items-center justify-center">
                <span className="material-symbols-outlined">account_balance_wallet</span>
              </div>
              <div>
                <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">Estimated Value</p>
                <p className="text-2xl font-black font-public-sans text-on-surface">₦145.2M</p>
              </div>
            </div>

            <div className="bg-primary p-6 rounded-2xl shadow-sm text-on-primary flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 text-white rounded-xl flex items-center justify-center">
                <span className="material-symbols-outlined">gavel</span>
              </div>
              <div>
                <p className="text-[10px] font-bold text-primary-fixed uppercase tracking-widest mb-1">Land Use Charge</p>
                <p className="text-2xl font-black font-public-sans">₦1,250,500</p>
                <p className="text-[10px] opacity-80 mt-1">Due in 14 days</p>
              </div>
            </div>
          </div>

          {/* Property List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            {/* Property 1 */}
            <div className="bg-surface-container-lowest rounded-2xl overflow-hidden border border-surface-container shadow-sm hover:shadow-md transition-all">
              <div className="h-48 bg-surface-container-high relative">
                <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800" alt="Office Building" className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 bg-primary text-on-primary text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
                  Commercial
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold font-public-sans text-on-surface">Nexus Towers</h3>
                  <p className="text-sm font-medium text-on-surface-variant">Plot 12, Financial District, VI</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-surface-container-low">
                  <div>
                    <p className="text-[10px] font-bold text-outline uppercase tracking-widest mb-1">Property ID</p>
                    <p className="font-mono text-sm font-medium">PR-LGS-8821</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-outline uppercase tracking-widest mb-1">Units Leased</p>
                    <p className="font-semibold text-sm">18 / 24</p>
                  </div>
                </div>

                <div className="pt-2 flex gap-2">
                  <button className="flex-1 bg-surface-container-high hover:bg-surface-container-highest text-primary font-bold py-2 rounded-lg text-sm transition-colors">
                    Manage
                  </button>
                  <button className="flex-1 bg-surface-container-high hover:bg-surface-container-highest text-primary font-bold py-2 rounded-lg text-sm transition-colors">
                    View Taxes
                  </button>
                </div>
              </div>
            </div>

            {/* Property 2 */}
            <div className="bg-surface-container-lowest rounded-2xl overflow-hidden border border-surface-container shadow-sm hover:shadow-md transition-all">
              <div className="h-48 bg-surface-container-high relative">
                <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800" alt="Residential Duplex" className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 bg-tertiary-fixed text-on-tertiary-fixed text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
                  Residential
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold font-public-sans text-on-surface">Sunset Duplex</h3>
                  <p className="text-sm font-medium text-on-surface-variant">45 Bayview Avenue, Lekki Phase 1</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-surface-container-low">
                  <div>
                    <p className="text-[10px] font-bold text-outline uppercase tracking-widest mb-1">Property ID</p>
                    <p className="font-mono text-sm font-medium">PR-LGS-9034</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-outline uppercase tracking-widest mb-1">Tenant Status</p>
                    <p className="font-semibold text-sm text-secondary">Occupied</p>
                  </div>
                </div>

                <div className="pt-2 flex gap-2">
                  <button className="flex-1 bg-surface-container-high hover:bg-surface-container-highest text-primary font-bold py-2 rounded-lg text-sm transition-colors">
                    Manage
                  </button>
                  <button className="flex-1 bg-surface-container-high hover:bg-surface-container-highest text-primary font-bold py-2 rounded-lg text-sm transition-colors">
                    View Taxes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'rental-income' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="bg-surface-container-lowest p-8 rounded-2xl border border-surface-container shadow-sm">
             <h2 className="text-xl font-bold font-public-sans mb-6">Declare Rental Income</h2>
             <form className="space-y-6">
                <div>
                  <label className="block font-label text-sm font-semibold text-on-surface-variant mb-2">Select Property</label>
                  <select className="w-full bg-surface-variant/30 border-b-2 border-outline-variant/30 rounded-t-xl px-4 py-3 focus:ring-0 focus:border-primary text-on-surface font-medium appearance-none">
                    <option>Nexus Towers (PR-LGS-8821)</option>
                    <option>Sunset Duplex (PR-LGS-9034)</option>
                  </select>
                </div>
                <div>
                  <label className="block font-label text-sm font-semibold text-on-surface-variant mb-2">Tenant Name / Company</label>
                  <input type="text" className="w-full bg-surface-variant/30 border-b-2 border-outline-variant/30 rounded-t-xl px-4 py-3 focus:ring-0 focus:border-primary text-on-surface font-medium" placeholder="E.g. Globex Inc" />
                </div>
                <div>
                  <label className="block font-label text-sm font-semibold text-on-surface-variant mb-2">Annual Rent (₦)</label>
                  <input type="number" className="w-full bg-surface-variant/30 border-b-2 border-outline-variant/30 rounded-t-xl px-4 py-3 focus:ring-0 focus:border-primary text-on-surface font-medium text-2xl" placeholder="0.00" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-label text-sm font-semibold text-on-surface-variant mb-2">Lease Start</label>
                    <input type="date" className="w-full bg-surface-variant/30 border-b-2 border-outline-variant/30 rounded-t-xl px-4 py-3 focus:ring-0 focus:border-primary text-on-surface font-medium text-sm" />
                  </div>
                  <div>
                    <label className="block font-label text-sm font-semibold text-on-surface-variant mb-2">Lease End</label>
                    <input type="date" className="w-full bg-surface-variant/30 border-b-2 border-outline-variant/30 rounded-t-xl px-4 py-3 focus:ring-0 focus:border-primary text-on-surface font-medium text-sm" />
                  </div>
                </div>
                <div className="pt-4">
                  <button type="button" className="w-full bg-primary hover:bg-primary-container text-on-primary font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all flex justify-center items-center gap-2">
                    <span className="material-symbols-outlined">receipt_long</span>
                    Submit Declaration
                  </button>
                </div>
             </form>
           </div>
           
           <div>
             <div className="bg-primary-container/10 p-6 rounded-2xl border border-primary-container/20 space-y-4">
               <div className="flex items-start gap-4">
                 <span className="material-symbols-outlined text-primary text-3xl">lightbulb</span>
                 <div>
                   <h3 className="font-bold text-primary mb-1">Withholding Tax Note</h3>
                   <p className="text-sm text-on-surface-variant leading-relaxed">Ensure corporate tenants deduct 10% Withholding Tax (WHT) before rent remittance. Once they file it, the credit will automatically appear on your dashboard.</p>
                 </div>
               </div>
             </div>
           </div>
        </div>
      )}

      {activeTab === 'tax-assessments' && (
        <div className="bg-surface-container-lowest rounded-2xl border border-surface-container shadow-sm overflow-hidden flex flex-col items-center justify-center p-20 text-center">
            <span className="material-symbols-outlined text-6xl text-outline-variant mb-4">task</span>
            <h3 className="text-xl font-bold font-public-sans text-on-surface">No Pending Assessments</h3>
            <p className="text-on-surface-variant max-w-sm mt-2">You are fully compliant. Your next standard property tax assessment will be generated in March next year.</p>
        </div>
      )}

    </div>
  );
}
