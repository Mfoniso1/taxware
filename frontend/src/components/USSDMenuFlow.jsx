import React from 'react';

export default function USSDMenuFlow() {
  return (
    <div className="bg-background text-on-surface font-body min-h-screen">
      <main className="pt-24 pb-20 px-4 md:px-12 max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="font-headline text-4xl font-extrabold text-primary mb-2">USSD Protocol Design</h1>
          <p className="text-on-surface-variant font-medium">Informal Sector Revenue Collection: Dial-in Workflow (*829#)</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Step 1: Welcome */}
          <div className="flex flex-col gap-4">
            <div className="text-xs font-bold uppercase tracking-widest text-outline mb-1 px-2">Step 1: Welcome</div>
            <div className="relative w-full aspect-[9/19] bg-zinc-900 rounded-[2.5rem] p-4 border-[6px] border-zinc-800 shadow-2xl">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-zinc-800 rounded-b-xl"></div>
              <div className="h-full w-full bg-[#f0f0f0] rounded-[1.8rem] flex flex-col overflow-hidden shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.05)]">
                <div className="bg-zinc-200 px-4 py-2 flex justify-between items-center text-[10px] font-bold text-zinc-600">
                  <span>10:42 AM</span>
                  <span>4G+</span>
                </div>
                <div className="flex-grow p-6 flex items-center justify-center">
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-zinc-200 w-full font-mono text-sm leading-relaxed">
                    <p className="mb-4">Welcome to TaxTrack Ledger.</p>
                    <p>1. Retrieve TIN</p>
                    <p>2. Pay Local Tax</p>
                    <p>3. Check Balance</p>
                    <p>4. Agent Support</p>
                    <div className="mt-4 pt-4 border-t border-zinc-100 flex gap-2">
                      <div className="flex-grow h-8 bg-zinc-50 border border-zinc-300 px-2 flex items-center">1</div>
                      <div className="bg-primary text-white px-3 py-1 text-xs flex items-center rounded cursor-pointer">SEND</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2: Identification */}
          <div className="flex flex-col gap-4">
            <div className="text-xs font-bold uppercase tracking-widest text-outline mb-1 px-2">Step 2: Identification</div>
            <div className="relative w-full aspect-[9/19] bg-zinc-900 rounded-[2.5rem] p-4 border-[6px] border-zinc-800 shadow-2xl">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-zinc-800 rounded-b-xl"></div>
              <div className="h-full w-full bg-[#f0f0f0] rounded-[1.8rem] flex flex-col overflow-hidden shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.05)]">
                <div className="bg-zinc-200 px-4 py-2 flex justify-between items-center text-[10px] font-bold text-zinc-600">
                  <span>10:43 AM</span>
                  <span>4G+</span>
                </div>
                <div className="flex-grow p-6 flex items-center justify-center">
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-zinc-200 w-full font-mono text-sm leading-relaxed">
                    <p className="mb-4 text-primary font-bold">REVENUE LEDGER</p>
                    <p className="mb-4">Enter National ID (NIN) to retrieve your Taxpayer Number:</p>
                    <div className="mt-4 pt-4 border-t border-zinc-100 flex gap-2">
                      <div className="flex-grow h-8 bg-zinc-50 border border-zinc-300 px-2 flex items-center text-xs opacity-40">123456789...</div>
                      <div className="bg-primary text-white px-3 py-1 text-xs flex items-center rounded cursor-pointer">SEND</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3: Confirmation */}
          <div className="flex flex-col gap-4">
            <div className="text-xs font-bold uppercase tracking-widest text-outline mb-1 px-2">Step 3: Confirmation</div>
            <div className="relative w-full aspect-[9/19] bg-zinc-900 rounded-[2.5rem] p-4 border-[6px] border-zinc-800 shadow-2xl">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-zinc-800 rounded-b-xl"></div>
              <div className="h-full w-full bg-[#f0f0f0] rounded-[1.8rem] flex flex-col overflow-hidden shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.05)]">
                <div className="bg-zinc-200 px-4 py-2 flex justify-between items-center text-[10px] font-bold text-zinc-600">
                  <span>10:44 AM</span>
                  <span>4G+</span>
                </div>
                <div className="flex-grow p-6 flex items-center justify-center">
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-zinc-200 w-full font-mono text-sm leading-relaxed">
                    <p className="mb-4">TIN FOUND: 9022-XXXX</p>
                    <p className="mb-2">Name: AMINU K.</p>
                    <p className="mb-4 text-primary">Pending: ₦2,500 (Market Fee)</p>
                    <p>1. Pay with Mobile Money</p>
                    <p>2. Exit</p>
                    <div className="mt-4 pt-4 border-t border-zinc-100 flex gap-2">
                      <div className="flex-grow h-8 bg-zinc-50 border border-zinc-300 px-2 flex items-center">1</div>
                      <div className="bg-primary text-white px-3 py-1 text-xs flex items-center rounded cursor-pointer">SEND</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4: Success */}
          <div className="flex flex-col gap-4">
            <div className="text-xs font-bold uppercase tracking-widest text-outline mb-1 px-2">Step 4: Success</div>
            <div className="relative w-full aspect-[9/19] bg-zinc-900 rounded-[2.5rem] p-4 border-[6px] border-zinc-800 shadow-2xl">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-zinc-800 rounded-b-xl"></div>
              <div className="h-full w-full bg-[#f0f0f0] rounded-[1.8rem] flex flex-col overflow-hidden shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.05)]">
                <div className="bg-zinc-200 px-4 py-2 flex justify-between items-center text-[10px] font-bold text-zinc-600">
                  <span>10:45 AM</span>
                  <span>4G+</span>
                </div>
                <div className="flex-grow p-6 flex items-center justify-center">
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-zinc-200 w-full font-mono text-sm leading-relaxed">
                    <p className="mb-4 text-green-700 font-bold">PAYMENT INITIATED</p>
                    <p className="mb-4">Please enter your Mobile Money PIN on the next pop-up to authorize ₦2,500.</p>
                    <p>Ref: REV-82921-X</p>
                    <div className="mt-4 pt-4 border-t border-zinc-100 flex justify-center">
                      <div className="bg-zinc-800 text-white px-6 py-1 text-xs flex items-center rounded cursor-pointer">OK</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-16 bg-surface-container-low p-8 rounded-xl">
          <h2 className="font-headline text-2xl font-bold text-primary mb-6">User Context & Infrastructure</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface-container-lowest p-6 rounded-lg relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-surface-tint"></div>
              <div className="text-xs font-bold uppercase tracking-widest text-outline mb-2">Connectivity</div>
              <div className="text-xl font-headline font-bold text-on-surface">Offline-First USSD</div>
              <p className="text-sm text-on-surface-variant mt-2">Operates on GSM signaling channels, requiring zero mobile data for informal sector accessibility.</p>
            </div>
            <div className="bg-surface-container-lowest p-6 rounded-lg relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-surface-tint"></div>
              <div className="text-xs font-bold uppercase tracking-widest text-outline mb-2">Security</div>
              <div className="text-xl font-headline font-bold text-on-surface">Session Encryption</div>
              <p className="text-sm text-on-surface-variant mt-2">Temporary sessions (120s timeout) ensure data integrity and prevent unauthorized access.</p>
            </div>
            <div className="bg-surface-container-lowest p-6 rounded-lg relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-surface-tint"></div>
              <div className="text-xs font-bold uppercase tracking-widest text-outline mb-2">Identity</div>
              <div className="text-xl font-headline font-bold text-on-surface">NIN Harmonization</div>
              <p className="text-sm text-on-surface-variant mt-2">Direct integration with national identity databases for instant TIN retrieval via USSD.</p>
            </div>
          </div>
        </section>

        <section className="mt-12 overflow-hidden rounded-2xl shadow-sm border border-outline-variant/15">
          <div className="bg-surface-container-high px-6 py-3">
            <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Live Transactional Stream (Simulated)</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-surface-container-high/50">
                <tr>
                  <th className="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Session ID</th>
                  <th className="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Phone Number</th>
                  <th className="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Action</th>
                  <th className="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Timestamp</th>
                  <th className="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y-0">
                <tr className="bg-surface hover:bg-primary-fixed-dim/20 transition-colors">
                  <td className="px-6 py-4 font-mono text-sm">#USSD-9281-1</td>
                  <td className="px-6 py-4 text-sm font-medium">+234 802 *** 4910</td>
                  <td className="px-6 py-4 text-sm">TIN Retrieval</td>
                  <td className="px-6 py-4 text-sm text-on-surface-variant">Just Now</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-secondary-container text-on-secondary-container">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed animate-pulse"></span> ACTIVE
                    </span>
                  </td>
                </tr>
                <tr className="bg-surface-container-low hover:bg-primary-fixed-dim/20 transition-colors">
                  <td className="px-6 py-4 font-mono text-sm">#USSD-9280-5</td>
                  <td className="px-6 py-4 text-sm font-medium">+234 703 *** 1122</td>
                  <td className="px-6 py-4 text-sm">Revenue Payment</td>
                  <td className="px-6 py-4 text-sm text-on-surface-variant">2 mins ago</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-tertiary-container text-on-tertiary-container">
                      PENDING
                    </span>
                  </td>
                </tr>
                <tr className="bg-surface hover:bg-primary-fixed-dim/20 transition-colors">
                  <td className="px-6 py-4 font-mono text-sm">#USSD-9279-8</td>
                  <td className="px-6 py-4 text-sm font-medium">+234 815 *** 0042</td>
                  <td className="px-6 py-4 text-sm">Balance Check</td>
                  <td className="px-6 py-4 text-sm text-on-surface-variant">5 mins ago</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-primary-container text-on-primary-container">
                      COMPLETED
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}
