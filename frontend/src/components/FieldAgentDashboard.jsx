import React from 'react';

export default function FieldAgentDashboard() {
  return (
      <main className="pt-20 pb-28 px-4 max-w-md mx-auto">
        {/* Offline Status Banner */}
        <section className="mb-6">
          <div className="bg-tertiary-container text-on-tertiary-container p-4 rounded-xl flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-3">
              <div className="bg-tertiary-fixed-dim/20 p-2 rounded-lg">
                <span className="material-symbols-outlined text-tertiary-fixed">cloud_off</span>
              </div>
              <div>
                <p className="font-label font-bold text-sm tracking-wide uppercase">No Internet</p>
                <p className="text-xs opacity-90">14 records saved on phone</p>
              </div>
            </div>
            <button className="bg-on-tertiary-container text-tertiary-container px-4 py-1.5 rounded-full font-label text-xs font-bold uppercase tracking-widest press-in">
              Sync Now
            </button>
          </div>
        </section>

        {/* KPI Grid: The Snapshot Pattern */}
        <section className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-surface-container-lowest p-4 rounded-xl border-l-4 border-surface-tint">
            <p className="font-label text-[10px] font-bold text-on-surface-variant uppercase tracking-wider mb-1">Today's Total</p>
            <p className="font-headline text-2xl font-extrabold text-primary">₦142.5k</p>
          </div>
          <div className="bg-surface-container-lowest p-4 rounded-xl border-l-4 border-secondary">
            <p className="font-label text-[10px] font-bold text-on-surface-variant uppercase tracking-wider mb-1">Active Walks</p>
            <p className="font-headline text-2xl font-extrabold text-primary">08</p>
          </div>
        </section>

        {/* Quick Actions: Lithic Sheen */}
        <section className="mb-8">
          <h2 className="font-headline font-bold text-on-surface mb-4 px-1">Your Main Jobs</h2>
          <div className="grid grid-cols-1 gap-3">
            <button className="lithic-gradient text-white p-5 rounded-xl flex items-center gap-4 shadow-[0_4px_20px_rgba(0,70,77,0.15)] press-in w-full">
              <div className="bg-white/10 p-3 rounded-lg">
                <span className="material-symbols-outlined">person_add</span>
              </div>
              <div className="text-left">
                <span className="block font-bold text-lg leading-tight">Register Someone</span>
                <span className="text-sm opacity-80">Add a new person now</span>
              </div>
            </button>
            <div className="grid grid-cols-2 gap-3">
              <button className="bg-surface-container-high text-primary p-4 rounded-xl flex flex-col items-center justify-center gap-2 press-in">
                <span className="material-symbols-outlined text-3xl">payments</span>
                <span className="font-label font-bold text-xs uppercase tracking-tighter">Collect Money</span>
              </button>
              <button className="bg-surface-container-high text-primary p-4 rounded-xl flex flex-col items-center justify-center gap-2 press-in">
                <span className="material-symbols-outlined text-3xl">qr_code_scanner</span>
                <span className="font-label font-bold text-xs uppercase tracking-tighter">Scan Code</span>
              </button>
            </div>
          </div>
        </section>

        {/* Recent Ledger Activity */}
        <section className="mb-4">
          <div className="flex justify-between items-center mb-4 px-1">
            <h2 className="font-headline font-bold text-on-surface">Recent Activity</h2>
            <button className="text-primary text-sm font-bold">View All</button>
          </div>
          <div className="bg-surface-container-low rounded-2xl overflow-hidden">
            {/* Transaction Row 1 */}
            <div className="flex items-center justify-between p-4 bg-surface-container-lowest">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">receipt_long</span>
                </div>
                <div>
                  <p className="font-bold text-sm text-on-surface">Alade Market Stall 04</p>
                  <p className="text-[10px] text-on-surface-variant uppercase font-medium">Market Toll • 10:42 AM</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-primary">₦2,500</p>
                <span className="inline-flex items-center text-[9px] font-bold text-tertiary uppercase px-1.5 py-0.5 bg-tertiary-fixed rounded">Local</span>
              </div>
            </div>

            {/* Transaction Row 2 */}
            <div className="flex items-center justify-between p-4 border-t border-outline-variant/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary">how_to_reg</span>
                </div>
                <div>
                  <p className="font-bold text-sm text-on-surface">Johnathan Opeyemi</p>
                  <p className="text-[10px] text-on-surface-variant uppercase font-medium">Business Reg • 09:15 AM</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-primary">₦15,000</p>
                <span className="inline-flex items-center text-[9px] font-bold text-on-secondary-container uppercase px-1.5 py-0.5 bg-secondary-container rounded">Synced</span>
              </div>
            </div>

            {/* Transaction Row 3 */}
            <div className="flex items-center justify-between p-4 bg-surface-container-lowest border-t border-outline-variant/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">receipt_long</span>
                </div>
                <div>
                  <p className="font-bold text-sm text-on-surface">Block B Apartment 12</p>
                  <p className="text-[10px] text-on-surface-variant uppercase font-medium">Waste Levy • 08:30 AM</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-primary">₦4,200</p>
                <span className="inline-flex items-center text-[9px] font-bold text-tertiary uppercase px-1.5 py-0.5 bg-tertiary-fixed rounded">Local</span>
              </div>
            </div>
          </div>
        </section>

        {/* Map Snippet (Agent Tracking) */}
        <section className="mt-8 rounded-2xl overflow-hidden relative h-32">
          <img alt="Field route map" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB16_So_1sriYYpFQKz5yABjrBeaNulv9amJqO1CU4T6nZ2Ma9D2fa_kW-6qDn_r8fyfDt-A8r8i9uUBrFkgVbKiphgQnhTp3vj-lY6HG0V9kmssPgoCf4CLJTGz86pcbCBkYPaT8tjoJCUX_n_0cB-LuUa4FACQGZjec04VgqR7wM5VmR25gxGw3tUeRnBvMaOpsahz4Tr7VbhNPAIaRgvx9jRMAWjmFyoRTuNTlKzIor-OWVj4GEZFyLdeMySt8ljeIc0mgn455mV" />
          <div className="absolute inset-0 bg-primary/20 backdrop-blur-[2px] flex items-center justify-center">
            <div className="bg-surface-container-lowest/90 px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              <span className="font-label font-bold text-[10px] text-primary uppercase tracking-widest">Tracking Active Route</span>
            </div>
          </div>
        </section>
      </main>
  );
}
