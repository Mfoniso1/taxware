import React from 'react';

export default function SelfServiceFiling() {
  return (
    <div className="bg-surface font-body text-on-surface flex min-h-screen">
      <main className="flex-grow pt-20 pb-12 px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Page Header */}
          <div className="flex justify-between items-end">
            <div>
              <nav className="flex text-xs font-label text-on-surface-variant mb-2 gap-2">
                <span>Taxpayer Portal</span>
                <span>/</span>
                <span className="text-primary font-semibold">Self-Service Filing</span>
              </nav>
              <h2 className="text-3xl font-bold font-headline text-primary tracking-tight">PAYE Monthly Filing</h2>
              <p className="text-on-surface-variant mt-1">Submit payroll schedules and calculate statutory liabilities for June 2024.</p>
            </div>
            <div className="flex space-x-3">
              <button className="px-5 py-2.5 rounded-lg font-semibold text-sm bg-surface-container-high text-primary hover:bg-surface-container-highest transition-colors">
                Download Template
              </button>
              <button className="px-5 py-2.5 rounded-lg font-semibold text-sm lithic-cta text-white shadow-lg shadow-primary/10">
                Upload Schedule
              </button>
            </div>
          </div>

          {/* Bento Grid Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-surface-container-lowest p-6 rounded-xl border-l-4 border-surface-tint shadow-sm">
              <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-2">Total Employees</p>
              <h3 className="text-2xl font-bold font-headline text-primary">1,248</h3>
              <p className="text-xs text-secondary mt-1 flex items-center">
                <span className="material-symbols-outlined text-sm mr-1">trending_up</span> +12 from last month
              </p>
            </div>
            <div className="bg-surface-container-lowest p-6 rounded-xl border-l-4 border-surface-tint shadow-sm">
              <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-2">Gross Payroll</p>
              <h3 className="text-2xl font-bold font-headline text-primary">₦42,850,000</h3>
              <p className="text-xs text-on-surface-variant mt-1">Base salary & allowances</p>
            </div>
            <div className="bg-surface-container-lowest p-6 rounded-xl border-l-4 border-tertiary shadow-sm">
              <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-2">Calculated Tax (PAYE)</p>
              <h3 className="text-2xl font-bold font-headline text-tertiary">₦4,285,000</h3>
              <p className="text-xs text-on-surface-variant mt-1">Statutory deduction</p>
            </div>
            <div className="bg-surface-container-lowest p-6 rounded-xl border-l-4 border-primary-fixed-dim shadow-sm">
              <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-2">Filing Status</p>
              <div className="flex items-center mt-2 text-primary">
                <span className="material-symbols-outlined mr-2">pending</span>
                <span className="text-sm font-bold">Draft / In Review</span>
              </div>
            </div>
          </div>

          {/* Main Interactive Section: Two Column */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Schedule Table */}
            <div className="lg:col-span-2 bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm">
              <div className="px-6 py-4 bg-surface-container-high flex justify-between items-center">
                <h4 className="font-bold text-sm uppercase tracking-wider text-on-surface-variant">Payroll Preview</h4>
                <span className="text-xs text-on-surface-variant font-medium">Showing 5 of 1,248 records</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-surface-container-low border-b border-outline-variant/10">
                      <th className="px-6 py-4 text-[11px] font-bold uppercase text-on-surface-variant tracking-widest">Employee ID</th>
                      <th className="px-6 py-4 text-[11px] font-bold uppercase text-on-surface-variant tracking-widest">Full Name</th>
                      <th className="px-6 py-4 text-[11px] font-bold uppercase text-on-surface-variant tracking-widest">Gross Income</th>
                      <th className="px-6 py-4 text-[11px] font-bold uppercase text-on-surface-variant tracking-widest">Tax (PAYE)</th>
                      <th className="px-6 py-4 text-[11px] font-bold uppercase text-on-surface-variant tracking-widest">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/10">
                    <tr className="hover:bg-primary/5 transition-colors">
                      <td className="px-6 py-4 font-mono text-xs text-primary font-bold">EMP-9021</td>
                      <td className="px-6 py-4 text-sm font-medium text-on-surface">Adeola Benson</td>
                      <td className="px-6 py-4 text-sm font-semibold">₦450,000.00</td>
                      <td className="px-6 py-4 text-sm font-semibold text-tertiary">₦45,000.00</td>
                      <td className="px-6 py-4"><span className="px-2 py-1 rounded bg-secondary-container text-on-secondary-container text-[10px] font-bold uppercase">Verified</span></td>
                    </tr>
                    <tr className="bg-surface-container-low/30 hover:bg-primary/5 transition-colors">
                      <td className="px-6 py-4 font-mono text-xs text-primary font-bold">EMP-8842</td>
                      <td className="px-6 py-4 text-sm font-medium text-on-surface">Chinonso Okafor</td>
                      <td className="px-6 py-4 text-sm font-semibold">₦620,000.00</td>
                      <td className="px-6 py-4 text-sm font-semibold text-tertiary">₦62,000.00</td>
                      <td className="px-6 py-4"><span className="px-2 py-1 rounded bg-secondary-container text-on-secondary-container text-[10px] font-bold uppercase">Verified</span></td>
                    </tr>
                    <tr className="hover:bg-primary/5 transition-colors">
                      <td className="px-6 py-4 font-mono text-xs text-primary font-bold">EMP-7710</td>
                      <td className="px-6 py-4 text-sm font-medium text-on-surface">Ibrahim Musa</td>
                      <td className="px-6 py-4 text-sm font-semibold">₦210,000.00</td>
                      <td className="px-6 py-4 text-sm font-semibold text-tertiary">₦21,000.00</td>
                      <td className="px-6 py-4"><span className="px-2 py-1 rounded bg-secondary-container text-on-secondary-container text-[10px] font-bold uppercase">Verified</span></td>
                    </tr>
                    <tr className="bg-surface-container-low/30 hover:bg-primary/5 transition-colors">
                      <td className="px-6 py-4 font-mono text-xs text-primary font-bold">EMP-9112</td>
                      <td className="px-6 py-4 text-sm font-medium text-on-surface">Sarah Williams</td>
                      <td className="px-6 py-4 text-sm font-semibold">₦380,000.00</td>
                      <td className="px-6 py-4 text-sm font-semibold text-tertiary">₦38,000.00</td>
                      <td className="px-6 py-4"><span className="px-2 py-1 rounded bg-secondary-container text-on-secondary-container text-[10px] font-bold uppercase">Verified</span></td>
                    </tr>
                    <tr className="hover:bg-primary/5 transition-colors">
                      <td className="px-6 py-4 font-mono text-xs text-primary font-bold">EMP-5431</td>
                      <td className="px-6 py-4 text-sm font-medium text-on-surface">David Adeleke</td>
                      <td className="px-6 py-4 text-sm font-semibold">₦1,200,000.00</td>
                      <td className="px-6 py-4 text-sm font-semibold text-tertiary">₦120,000.00</td>
                      <td className="px-6 py-4"><span className="px-2 py-1 rounded bg-secondary-container text-on-secondary-container text-[10px] font-bold uppercase">Verified</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Payment Action Card */}
            <div className="space-y-6">
              <div className="bg-primary text-white p-8 rounded-2xl shadow-xl relative overflow-hidden lithic-cta">
                <div className="relative z-10">
                  <h4 className="text-sm font-bold uppercase tracking-[0.2em] opacity-80 mb-4">Liability Summary</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-white/10 pb-3">
                      <span className="text-sm opacity-90">PAYE Liability</span>
                      <span className="text-xl font-bold">₦4,285,000</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/10 pb-3">
                      <span className="text-sm opacity-90">Arrears/Interests</span>
                      <span className="text-xl font-bold">₦0.00</span>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-lg font-headline font-bold">Total Due</span>
                      <span className="text-3xl font-headline font-black">₦4,285,000</span>
                    </div>
                  </div>
                  <button className="w-full mt-8 py-4 bg-white text-primary rounded-xl font-bold text-lg hover:bg-primary-fixed transition-transform active:scale-95 shadow-lg">
                    Make Payment
                  </button>
                  <p className="text-[10px] text-center mt-4 opacity-60 uppercase tracking-widest font-bold">Secure Bank Transfer or Card Payment</p>
                </div>
                {/* Decorative element */}
                <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
              </div>

              <div className="bg-surface-container-low p-6 rounded-2xl">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="material-symbols-outlined text-tertiary">info</span>
                  <h5 className="text-sm font-bold text-primary">Submission Guidelines</h5>
                </div>
                <ul className="space-y-3">
                  <li className="text-xs text-on-surface-variant leading-relaxed">
                    • Ensure all employee Tax IDs are valid to avoid rejection.
                  </li>
                  <li className="text-xs text-on-surface-variant leading-relaxed">
                    • Late filing attracts a penalty of ₦500,000 per month of default.
                  </li>
                  <li className="text-xs text-on-surface-variant leading-relaxed">
                    • Payment must be completed before the 10th of every month.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Historical Context (Bottom Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm">
              <h4 className="font-headline font-bold text-primary mb-6 flex items-center">
                <span className="material-symbols-outlined mr-2">history</span> Filing History
              </h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 hover:bg-surface-container transition-colors rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined">description</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold">May 2024</p>
                      <p className="text-[10px] uppercase text-on-surface-variant">Completed • 08 May</p>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-primary">₦4,120,500</span>
                </div>
                <div className="flex items-center justify-between p-3 hover:bg-surface-container transition-colors rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined">description</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold">April 2024</p>
                      <p className="text-[10px] uppercase text-on-surface-variant">Completed • 05 April</p>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-primary">₦4,050,000</span>
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden group h-full">
              <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFV0vXUASoXnSX5YAEErEEGBs6sR9lHJCsd9TM1DlSyiLyfCHiQqj_UGcWKHEv56pStKDTiZ7wFgYA8rOHH3kOg7SF_zFkR02yKd0vZ_6wBFBXEtPXGp2NQpPBvyMT9mmr1LfG1sGMqzsoMUJ2DTUTvaqzf_C7Yv-xPqpzdW9CT2WAvlyjmnf6hOrl7bkA6Gy3ReYaxvrBCKPEb4XWstw4BU6_fF4ezcK2SVUk6uuVrs9Pxvoi1cldc3tYaeel7qf8VliyQ7q8bS1a" alt="Workspace" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent p-8 flex flex-col justify-end">
                <h4 className="text-white font-headline font-bold text-lg">Need Assistance?</h4>
                <p className="text-white/80 text-sm mt-2 mb-4">Our dedicated revenue support team is available 24/7 to help with your corporate tax inquiries.</p>
                <button className="w-fit px-6 py-2 bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold rounded-lg text-xs uppercase tracking-widest hover:bg-white/30 transition-all">
                  Live Chat Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
