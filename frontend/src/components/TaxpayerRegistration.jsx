import React from 'react';

export default function TaxpayerRegistration() {
  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary-fixed selection:text-on-primary-fixed min-h-screen">
      <main className="pt-20 pb-28 px-4 max-w-md mx-auto">
        {/* Progress/Status Bar */}
        <div className="mb-8 px-2">
          <div className="flex justify-between items-end mb-2">
            <div>
              <span className="block font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-bold">Registration Phase</span>
              <h1 className="font-headline text-2xl font-extrabold text-primary tracking-tight">New Taxpayer</h1>
            </div>
            <div className="flex items-center gap-2 bg-secondary-fixed px-3 py-1 rounded-full">
              <span className="material-symbols-outlined text-sm">cloud_done</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-on-secondary-fixed">Online</span>
            </div>
          </div>
          <div className="h-1 w-full bg-surface-container rounded-full overflow-hidden">
            <div className="h-full bg-primary w-2/3"></div>
          </div>
        </div>

        {/* Registration Form */}
        <div className="space-y-8">
          {/* Section: Identity */}
          <section className="bg-surface-container-lowest p-6 rounded-xl space-y-6 shadow-sm">
            <div className="flex items-center gap-2 border-l-4 border-surface-tint pl-3">
              <h2 className="font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant">Personal Identity</h2>
            </div>
            
            {/* Field: TIN */}
            <div className="space-y-1">
              <label className="block font-label text-sm font-medium text-on-surface-variant px-1" htmlFor="tin">TIN (Tax Identification Number)</label>
              <div className="border-b-2 border-outline-variant/30 flex items-center bg-surface-variant/20 rounded-t-lg transition-all focus-within:border-primary">
                <input className="w-full bg-transparent border-none focus:ring-0 py-4 px-4 text-on-surface placeholder:text-outline-variant font-medium" id="tin" name="tin" placeholder="If available" type="text"/>
                <span className="material-symbols-outlined text-outline-variant pr-4">fingerprint</span>
              </div>
            </div>

            {/* Field: Name */}
            <div className="space-y-1">
              <label className="block font-label text-sm font-medium text-on-surface-variant px-1" htmlFor="full_name">Full Legal Name</label>
              <div className="border-b-2 border-outline-variant/30 flex items-center bg-surface-variant/20 rounded-t-lg transition-all focus-within:border-primary">
                <input className="w-full bg-transparent border-none focus:ring-0 py-4 px-4 text-on-surface placeholder:text-outline-variant font-medium" id="full_name" name="full_name" placeholder="Enter as per ID" type="text"/>
                <span className="material-symbols-outlined text-outline-variant pr-4">person</span>
              </div>
            </div>
          </section>

          {/* Section: Business Details */}
          <section className="bg-surface-container-lowest p-6 rounded-xl space-y-6 shadow-sm">
            <div className="flex items-center gap-2 border-l-4 border-surface-tint pl-3">
              <h2 className="font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant">Business Information</h2>
            </div>
            
            {/* Field: Business Type */}
            <div className="space-y-1">
              <label className="block font-label text-sm font-medium text-on-surface-variant px-1">Business Sector</label>
              <div className="border-b-2 border-outline-variant/30 flex items-center bg-surface-variant/20 rounded-t-lg transition-all relative focus-within:border-primary">
                <select className="w-full bg-transparent border-none focus:ring-0 py-4 px-4 text-on-surface font-medium appearance-none" id="business_type" defaultValue="informal">
                  <option value="informal">Informal Sector (Street Vendor/Market)</option>
                  <option value="retail">Small Retail Store</option>
                  <option value="services">Service Provider</option>
                  <option value="artisan">Artisan/Handicraft</option>
                </select>
                <span className="material-symbols-outlined text-outline-variant absolute right-4 pointer-events-none">storefront</span>
              </div>
            </div>

            {/* Field: Address */}
            <div className="space-y-1">
              <label className="block font-label text-sm font-medium text-on-surface-variant px-1" htmlFor="address">Business Address / Location</label>
              <div className="border-b-2 border-outline-variant/30 flex items-start bg-surface-variant/20 rounded-t-lg transition-all focus-within:border-primary">
                <textarea className="w-full bg-transparent border-none focus:ring-0 py-4 px-4 text-on-surface placeholder:text-outline-variant font-medium resize-none" id="address" placeholder="Plot number, Street, Market stall ID" rows={3}></textarea>
                <span className="material-symbols-outlined text-outline-variant pr-4 pt-4">location_on</span>
              </div>
              <button className="flex items-center gap-2 mt-2 px-1 text-primary font-bold text-xs hover:underline">
                <span className="material-symbols-outlined text-sm">my_location</span>
                CAPTURE GPS COORDINATES
              </button>
            </div>
          </section>

          {/* Section: Biometrics */}
          <section className="bg-surface-container-lowest p-6 rounded-xl space-y-6 shadow-sm">
            <div className="flex items-center gap-2 border-l-4 border-surface-tint pl-3">
              <h2 className="font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant">Verification</h2>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <button className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-outline-variant rounded-xl hover:bg-surface-container-low transition-colors group">
                <div className="h-12 w-12 rounded-full bg-surface-variant flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary">add_a_photo</span>
                </div>
                <span className="font-label text-xs font-bold text-on-surface">Capture Photo</span>
              </button>
              <button className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-outline-variant rounded-xl hover:bg-surface-container-low transition-colors group">
                <div className="h-12 w-12 rounded-full bg-surface-variant flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary">fingerprint</span>
                </div>
                <span className="font-label text-xs font-bold text-on-surface">Biometrics</span>
              </button>
            </div>
            
            <div className="bg-tertiary-container/10 p-4 rounded-lg flex gap-3">
              <span className="material-symbols-outlined text-tertiary">info</span>
              <p className="text-xs text-on-surface-variant leading-relaxed">Ensure the taxpayer's face is clearly visible with neutral lighting. Biometrics require a clean surface scan.</p>
            </div>
          </section>

          {/* Action Area */}
          <div className="pt-4 pb-12">
            <button className="w-full bg-gradient-to-br from-primary to-primary-container text-on-primary font-headline font-bold py-5 rounded-full shadow-[0_12px_24px_rgba(0,70,77,0.2)] flex items-center justify-center gap-3 active:scale-95 transition-transform hover:shadow-lg">
              <span className="material-symbols-outlined">how_to_reg</span>
              COMPLETE REGISTRATION
            </button>
            <p className="text-center text-[11px] text-outline mt-4 font-medium">Record will be locally encrypted and synced to Sovereign Ledger</p>
          </div>
        </div>
      </main>
    </div>
  );
}
