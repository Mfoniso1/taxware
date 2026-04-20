import React from 'react';

export default function FieldAgentLogin() {
  return (
    <div className="bg-surface font-body text-on-surface min-h-screen flex flex-col items-center justify-center p-6 sm:p-12 overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-primary-container/5 blur-[120px]"></div>
        <div className="absolute -bottom-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-secondary-container/10 blur-[120px]"></div>
        {/* Subtle Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{
            backgroundImage: "radial-gradient(#00464d 0.5px, transparent 0.5px)", 
            backgroundSize: "24px 24px"
          }}
        ></div>
      </div>

      {/* Top Branding Anchor */}
      <header className="mb-12 text-center z-10">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary-container mb-6 shadow-sm">
          <span className="material-symbols-outlined text-on-primary-container text-4xl">account_balance</span>
        </div>
        <h1 className="font-headline font-extrabold text-3xl tracking-tighter text-primary">
          TaxTrack Legacy
        </h1>
        <p className="text-on-surface-variant font-label text-sm tracking-wide mt-2 uppercase">
          Field Agent Portal
        </p>
      </header>

      {/* Main Login Canvas */}
      <main className="w-full max-w-md z-10">
        <div className="bg-surface-container-lowest rounded-xl p-8 shadow-[0_32px_64px_-12px_rgba(25,28,29,0.06)]">
          <form className="space-y-6">
            {/* Username Field */}
            <div className="space-y-2">
              <label className="block font-label font-semibold text-on-surface-variant text-sm" htmlFor="username">
                Agent ID / Username
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-outline">
                  <span className="material-symbols-outlined text-xl">person</span>
                </div>
                <input 
                  className="block w-full h-[56px] pl-11 bg-surface-variant border-b-2 border-transparent focus:border-primary-container border-t-0 border-x-0 rounded-lg transition-all focus:ring-0 text-on-surface placeholder:text-outline-variant" 
                  id="username" 
                  name="username" 
                  placeholder="Enter agent ID" 
                  required 
                  type="text"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="block font-label font-semibold text-on-surface-variant text-sm" htmlFor="password">
                Security Credentials
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-outline">
                  <span className="material-symbols-outlined text-xl">lock</span>
                </div>
                <input 
                  className="block w-full h-[56px] pl-11 bg-surface-variant border-b-2 border-transparent focus:border-primary-container border-t-0 border-x-0 rounded-lg transition-all focus:ring-0 text-on-surface placeholder:text-outline-variant" 
                  id="password" 
                  name="password" 
                  placeholder="••••••••" 
                  required 
                  type="password"
                />
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center cursor-pointer text-outline hover:text-primary">
                  <span className="material-symbols-outlined text-xl">visibility</span>
                </div>
              </div>
            </div>

            {/* Primary Action */}
            <button 
              className="w-full h-[56px] bg-gradient-to-br from-primary to-primary-container rounded-lg text-on-primary font-headline font-bold text-lg flex items-center justify-center gap-2 active:scale-[0.98] transition-transform shadow-md hover:shadow-lg" 
              type="submit"
            >
              Initialize Session
              <span className="material-symbols-outlined">login</span>
            </button>
          </form>

          {/* Biometric Integration */}
          <div className="mt-8 pt-8 border-t border-outline-variant/20">
            <div className="text-center mb-6">
              <span className="bg-surface-container-lowest px-4 text-xs font-label text-outline uppercase tracking-widest relative -top-3">
                Or verify with
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 h-14 bg-surface-container-low rounded-lg text-on-surface-variant font-label font-medium hover:bg-surface-container-high transition-colors active:scale-[0.98]">
                <span className="material-symbols-outlined text-2xl">fingerprint</span>
                Biometrics
              </button>
              <button className="flex items-center justify-center gap-2 h-14 bg-surface-container-low rounded-lg text-on-surface-variant font-label font-medium hover:bg-surface-container-high transition-colors active:scale-[0.98]">
                <span className="material-symbols-outlined text-2xl">face</span>
                Face ID
              </button>
            </div>
          </div>
        </div>

        {/* Footer Assistance */}
        <footer className="mt-10 text-center space-y-4">
          <button className="text-sm font-label font-semibold text-primary hover:underline decoration-2 underline-offset-4">
            Forgot access credentials?
          </button>
          <div className="flex items-center justify-center gap-6 mt-8">
            <div className="flex items-center gap-2 text-outline text-xs font-label">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              System Online
            </div>
            <div className="w-px h-4 bg-outline-variant/30"></div>
            <div className="text-outline text-xs font-label">
              v2.4.0-Stable
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
