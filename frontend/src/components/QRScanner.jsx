import React from 'react';

export default function QRScanner() {
  return (
    <div className="bg-black text-on-background font-body overflow-hidden h-screen flex flex-col relative w-full">
      {/* Top Navigation Shell (mocking for now without actual links, to match UI) */}
      <header className="fixed top-0 w-full z-50 bg-slate-50 dark:bg-cyan-950 flex justify-between items-center px-6 h-16">
        <div className="flex items-center gap-3">
          <span className="text-xl font-bold tracking-tighter text-cyan-900 dark:text-cyan-50 font-headline">Sovereign Revenue</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 text-cyan-900 dark:text-cyan-100 hover:bg-slate-200/50 transition-colors">
            <span className="material-symbols-outlined">sync</span>
          </button>
          <button className="p-2 text-cyan-900 dark:text-cyan-100 hover:bg-slate-200/50 transition-colors">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button className="p-2 text-cyan-900 dark:text-cyan-100 hover:bg-slate-200/50 transition-colors">
            <span className="material-symbols-outlined">account_circle</span>
          </button>
        </div>
      </header>

      {/* Main Viewport (Camera Simulator) */}
      <main className="flex-1 relative mt-16 pb-20 overflow-hidden bg-black">
        {/* Camera Background */}
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center opacity-70" 
            style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuABN4IKYPL9k9IDS_yBSU0_ZTE9JZmYqC8UvnMHcuuLIn1f4bTZjZrTydPbIRJkBQa8RV-uZxXGN3fQ2xcBOHt6ikBxtRzefI7FwJ3n5E51QQHgdb2i64e8g-ikxGaze65BsxcmQzhxcFurZ8f6TVARssXearHwrIOmBdmVOsCWMkmUFHAdWBofbYG4YSXreGWMCp-c347Vfpq-H7yt1sEt0AMGL1rsaxdcNHnc1VWvULJ3YvBaWkNz-A3s1xJaOlbI43Z4tkV5Hy7A')"}}
          />
        </div>

        {/* Scanner UI Overlay */}
        <div className="absolute inset-0 z-10 backdrop-blur-[1px]" 
            style={{
                background: "linear-gradient(rgba(0, 70, 77, 0.4), rgba(0, 70, 77, 0.4))",
                clipPath: "polygon(0% 0%, 0% 100%, 15% 100%, 15% 25%, 85% 25%, 85% 65%, 15% 65%, 15% 100%, 100% 100%, 100% 0%)"
            }}>
        </div>

        {/* Scanning Frame */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-start pt-[176px]">
          <div className="w-[70vw] lg:w-[400px] aspect-[3/4] relative">
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-primary-fixed-dim rounded-tl-xl"></div>
            <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-primary-fixed-dim rounded-tr-xl"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-primary-fixed-dim rounded-bl-xl"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-primary-fixed-dim rounded-br-xl"></div>
            
            {/* Moving Scanner Line */}
            <div className="w-full absolute top-[20%] h-0.5 bg-primary-fixed-dim shadow-[0_0_15px_#90d1da] animate-pulse"></div>
            
            {/* Targeting Reticle */}
            <div className="absolute inset-0 flex items-center justify-center opacity-30">
              <span className="material-symbols-outlined text-primary-fixed text-6xl">filter_center_focus</span>
            </div>
          </div>

          {/* Contextual Instructions */}
          <div className="mt-8 text-center px-8">
            <h2 className="text-white font-headline text-lg font-bold tracking-tight mb-2">Align QR Code</h2>
            <p className="text-primary-fixed text-sm font-medium opacity-90 max-w-sm mx-auto">Position the taxpayer receipt or ID card within the frame to begin verification.</p>
          </div>
        </div>

        {/* Action Selector (Floating Layer) */}
        <div className="absolute bottom-8 left-0 w-full z-30 px-6 max-w-lg mx-auto right-0">
          <div className="bg-surface-container-lowest/80 backdrop-blur-xl rounded-full p-1.5 flex gap-1 shadow-2xl">
            <button className="flex-1 py-3 px-4 rounded-full flex items-center justify-center gap-2 bg-gradient-to-br from-primary to-primary-container text-on-primary font-label text-sm font-semibold">
              <span className="material-symbols-outlined text-lg">receipt_long</span>
              Validate Receipt
            </button>
            <button className="flex-1 py-3 px-4 rounded-full flex items-center justify-center gap-2 text-on-surface-variant font-label text-sm font-medium hover:bg-surface-container-high transition-colors">
              <span className="material-symbols-outlined text-lg">badge</span>
              Scan ID Card
            </button>
          </div>
        </div>

        {/* Camera Controls */}
        <div className="absolute right-6 top-6 z-30 flex flex-col gap-4">
          <button className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white border border-white/20 hover:bg-black/60 transition-colors">
            <span className="material-symbols-outlined">flashlight_on</span>
          </button>
          <button className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white border border-white/20 hover:bg-black/60 transition-colors">
            <span className="material-symbols-outlined">zoom_in</span>
          </button>
        </div>
      </main>
    </div>
  );
}
