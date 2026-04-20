import React from 'react';

export default function RecordPayment() {
  return (
    <div className="bg-background text-on-surface font-body min-h-screen flex flex-col">
      <main className="flex-1 pt-20 pb-28 px-4 max-w-lg mx-auto w-full">
        {/* Context Header */}
        <div className="mb-8 mt-2">
          <p className="font-label text-[11px] font-bold uppercase tracking-[0.15em] text-on-surface-variant mb-1">Collection Mode</p>
          <h2 className="font-headline text-3xl font-extrabold text-primary leading-tight">Record Payment</h2>
          <p className="text-on-surface-variant mt-1 text-sm">Authorized Agent Portal • Lagos Central Zone</p>
        </div>

        {/* Form Section */}
        <div className="space-y-6">
          {/* Revenue Head Selection */}
          <section>
            <label className="block font-label text-sm font-semibold text-on-surface mb-3 ml-1">Select Revenue Head</label>
            <div className="grid grid-cols-2 gap-3">
              <button className="flex flex-col items-start p-4 bg-surface-container-lowest rounded-xl border-l-4 border-surface-tint shadow-sm active:scale-95 transition-transform text-left hover:bg-surface-container-low">
                <span className="material-symbols-outlined text-primary mb-2">storefront</span>
                <span className="font-label text-xs font-bold text-on-surface-variant uppercase tracking-wider">Market Toll</span>
              </button>
              <button className="flex flex-col items-start p-4 bg-surface-container-low rounded-xl border-l-4 border-outline-variant text-left hover:bg-surface-container-high transition-colors">
                <span className="material-symbols-outlined text-secondary mb-2">directions_car</span>
                <span className="font-label text-xs font-bold text-on-surface-variant uppercase tracking-wider">Road Tax</span>
              </button>
              <button className="flex flex-col items-start p-4 bg-surface-container-low rounded-xl border-l-4 border-outline-variant text-left hover:bg-surface-container-high transition-colors">
                <span className="material-symbols-outlined text-secondary mb-2">home_work</span>
                <span className="font-label text-xs font-bold text-on-surface-variant uppercase tracking-wider">Property Fee</span>
              </button>
              <button className="flex flex-col items-start p-4 bg-surface-container-low rounded-xl border-l-4 border-outline-variant text-left hover:bg-surface-container-high transition-colors">
                <span className="material-symbols-outlined text-secondary mb-2">more_horiz</span>
                <span className="font-label text-xs font-bold text-on-surface-variant uppercase tracking-wider">Others</span>
              </button>
            </div>
          </section>

          {/* Amount Input */}
          <section>
            <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border-b-2 border-primary-container focus-within:border-primary transition-colors">
              <label className="block font-label text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">Transaction Amount (NGN)</label>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-headline font-bold text-primary">₦</span>
                <input className="w-full bg-transparent border-none p-0 text-4xl font-headline font-black text-on-surface focus:ring-0 placeholder:text-surface-variant" placeholder="0.00" type="number"/>
              </div>
            </div>
          </section>

          {/* Payment Method */}
          <section>
            <label className="block font-label text-sm font-semibold text-on-surface mb-3 ml-1">Payment Method</label>
            <div className="space-y-2">
              <label className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-xl cursor-pointer group hover:bg-primary-fixed-dim/10 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary group-active:scale-90 transition-transform">
                    <span className="material-symbols-outlined">payments</span>
                  </div>
                  <div>
                    <p className="font-label font-bold text-on-surface">Cash Payment</p>
                    <p className="text-xs text-on-surface-variant">Physical currency collection</p>
                  </div>
                </div>
                <input className="w-5 h-5 text-primary focus:ring-primary border-outline-variant" name="payment" type="radio" defaultChecked/>
              </label>

              <label className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-xl cursor-pointer group hover:bg-primary-fixed-dim/10 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary transition-transform group-active:scale-90">
                    <span className="material-symbols-outlined">credit_card</span>
                  </div>
                  <div>
                    <p className="font-label font-bold text-on-surface">POS Terminal</p>
                    <p className="text-xs text-on-surface-variant">Debit/Credit card swipe</p>
                  </div>
                </div>
                <input className="w-5 h-5 text-primary focus:ring-primary border-outline-variant" name="payment" type="radio"/>
              </label>

              <label className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-xl cursor-pointer group hover:bg-primary-fixed-dim/10 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary transition-transform group-active:scale-90">
                    <span className="material-symbols-outlined">cell_tower</span>
                  </div>
                  <div>
                    <p className="font-label font-bold text-on-surface">Mobile Transfer</p>
                    <p className="text-xs text-on-surface-variant">Bank app transfer verification</p>
                  </div>
                </div>
                <input className="w-5 h-5 text-primary focus:ring-primary border-outline-variant" name="payment" type="radio"/>
              </label>
            </div>
          </section>

          {/* Metadata Info */}
          <div className="p-4 bg-tertiary-container/10 rounded-lg flex gap-3 items-start">
            <span className="material-symbols-outlined text-tertiary text-sm mt-0.5">info</span>
            <p className="text-[11px] text-tertiary font-medium">This transaction will be geotagged and timestamped for the Sovereign Ledger audit log.</p>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-10 px-2 pb-12">
          <button className="w-full bg-gradient-to-br from-primary to-primary-container py-5 rounded-xl text-on-primary font-headline font-bold text-lg shadow-xl shadow-primary/20 active:scale-[0.97] transition-all flex items-center justify-center gap-3 hover:shadow-2xl">
            <span className="material-symbols-outlined">check_circle</span>
            Confirm Collection
          </button>
        </div>
      </main>
    </div>
  );
}
