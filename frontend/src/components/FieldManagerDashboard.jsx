import React, { useState } from 'react';

export default function FieldManagerDashboard() {
  const [approvals, setApprovals] = useState([
    { id: 1, agent: 'Musa Bello', amount: '₦5,200', location: 'Market Ward A', time: '10:15 AM' },
    { id: 2, agent: 'Chioma Okoro', amount: '₦12,000', location: 'Plaza Ward B', time: '10:22 AM' },
    { id: 3, agent: 'Musa Bello', amount: '₦3,500', location: 'Market Ward A', time: '10:30 AM' },
  ]);

  const approve = (id) => {
    setApprovals(approvals.filter(item => item.id !== id));
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 font-inter pb-24">
      {/* Header */}
      <header className="bg-cyan-900 text-white px-6 pt-12 pb-6 rounded-b-[2rem] shadow-lg">
        <h1 className="text-2xl font-bold">Manager Dashboard</h1>
        <p className="text-cyan-200 text-sm">Managing 12 Field Agents</p>
      </header>

      {/* Team Summary Cards */}
      <div className="px-6 -mt-6 grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-2xl shadow-md border-b-4 border-cyan-700">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Total Collected Today</p>
          <p className="text-xl font-black text-cyan-900">₦242,500</p>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow-md border-b-4 border-green-600">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Active Agents</p>
          <p className="text-xl font-black text-green-700">08 / 12</p>
        </div>
      </div>

      {/* Main Jobs Section */}
      <main className="px-6 py-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold text-lg">Approve Collections</h2>
          <span className="bg-orange-100 text-orange-700 text-xs font-bold px-2 py-1 rounded-full">
            {approvals.length} Pending
          </span>
        </div>

        {/* Approval List */}
        <div className="space-y-4">
          {approvals.map(item => (
            <div key={item.id} className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-cyan-100 text-cyan-900 flex items-center justify-center font-bold">
                  {item.agent[0]}
                </div>
                <div>
                  <p className="font-bold text-sm">{item.agent}</p>
                  <p className="text-[10px] text-slate-500">{item.location} • {item.time}</p>
                </div>
              </div>
              <div className="text-right flex flex-col items-end gap-2">
                <p className="font-black text-cyan-800">{item.amount}</p>
                <button 
                  onClick={() => approve(item.id)}
                  className="bg-cyan-900 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg active:scale-95 transition-all"
                >
                  Confirm
                </button>
              </div>
            </div>
          ))}
          {approvals.length === 0 && (
            <div className="text-center py-12 bg-white rounded-2xl border-2 border-dashed border-slate-200">
              <span className="material-symbols-outlined text-slate-300 text-4xl mb-2">check_circle</span>
              <p className="text-slate-500 text-sm">All collections are confirmed!</p>
            </div>
          )}
        </div>

        {/* Team Map Preview */}
        <h2 className="font-bold text-lg mt-10 mb-4">Live Agent Tracking</h2>
        <div className="relative rounded-2xl overflow-hidden h-40 shadow-inner border border-slate-200">
          <img 
            alt="Agent Map" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB16_So_1sriYYpFQKz5yABjrBeaNulv9amJqO1CU4T6nZ2Ma9D2fa_kW-6qDn_r8fyfDt-A8r8i9uUBrFkgVbKiphgQnhTp3vj-lY6HG0V9kmssPgoCf4CLJTGz86pcbCBkYPaT8tjoJCUX_n_0cB-LuUa4FACQGZjec04VgqR7wM5VmR25gxGw3tUeRnBvMaOpsahz4Tr7VbhNPAIaRgvx9jRMAWjmFyoRTuNTlKzIor-OWVj4GEZFyLdeMySt8ljeIc0mgn455mV" 
          />
          <div className="absolute inset-0 bg-cyan-900/10 flex items-center justify-center">
            <button className="bg-white text-cyan-900 px-4 py-2 rounded-full text-xs font-bold shadow-lg flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">map</span> Open Live Map
            </button>
          </div>
        </div>

        {/* Quick Message */}
        <div className="mt-8 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
           <h2 className="font-bold text-sm mb-3">Send Message to All Agents</h2>
           <div className="flex gap-2">
              <input 
                type="text" 
                placeholder="Type your message..." 
                className="flex-1 bg-slate-100 border-none rounded-xl px-4 py-2 text-sm focus:ring-1 focus:ring-cyan-700" 
              />
              <button className="bg-cyan-900 text-white p-2 rounded-xl">
                 <span className="material-symbols-outlined">send</span>
              </button>
           </div>
        </div>
      </main>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 left-0 w-full bg-white h-20 border-t border-slate-100 flex justify-around items-center px-6 z-50">
          <div className="flex flex-col items-center text-cyan-900">
              <span className="material-symbols-outlined">dashboard</span>
              <span className="text-[10px] font-bold mt-1">Home</span>
          </div>
          <div className="flex flex-col items-center text-slate-400">
              <span className="material-symbols-outlined">group</span>
              <span className="text-[10px] font-bold mt-1">Agents</span>
          </div>
          <div className="flex flex-col items-center text-slate-400">
              <span className="material-symbols-outlined">chat</span>
              <span className="text-[10px] font-bold mt-1">Chat</span>
          </div>
          <div className="flex flex-col items-center text-slate-400">
              <span className="material-symbols-outlined">settings</span>
              <span className="text-[10px] font-bold mt-1">Settings</span>
          </div>
      </nav>
    </div>
  );
}
