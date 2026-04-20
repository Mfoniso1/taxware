import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';

export default function CertificateOfOrigin() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: 'Jonathan Doe',
    lga: '',
    ward: '',
    duration: '',
  });

  const [certificateData, setCertificateData] = useState(null);

  const handleApply = (e) => {
    e.preventDefault();
    // Simulate generation
    setCertificateData({
      id: `COO-${Math.floor(Math.random() * 1000000)}`,
      issueDate: new Date().toLocaleDateString(),
      ...formData
    });
    setStep(2);
  };

  const qrUrl = certificateData ? `https://taxtrack.gov.ng/verify/coo/${certificateData.id}` : '';

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div className="mb-10">
        <span className="text-xs font-bold text-primary tracking-[0.2em] uppercase mb-2 block">Identity & Documentation</span>
        <h1 className="text-4xl font-extrabold text-on-surface font-public-sans tracking-tighter">Digital Certificate of Origin</h1>
        <p className="text-on-surface-variant mt-2 max-w-2xl">Apply for or view your verifiable State Certificate of Origin. This digital credential is required for state-sponsored benefits and employment.</p>
      </div>

      {step === 1 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-outline-variant/20">
            <h2 className="text-xl font-bold font-public-sans mb-6">New Application</h2>
            <form onSubmit={handleApply} className="space-y-6">
              <div>
                <label className="block font-label text-sm font-semibold text-on-surface-variant mb-2">Legal Name</label>
                <input 
                  type="text" 
                  className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary text-on-surface font-medium"
                  value={formData.fullName}
                  disabled
                />
                <p className="text-xs text-outline mt-1">Populated from your verified BVN profile.</p>
              </div>

              <div>
                <label className="block font-label text-sm font-semibold text-on-surface-variant mb-2">Local Government Area (LGA)</label>
                <select 
                  required
                  className="w-full bg-surface-variant/30 border-b-2 border-outline-variant/30 rounded-t-xl px-4 py-3 focus:ring-0 focus:border-primary text-on-surface font-medium appearance-none"
                  value={formData.lga}
                  onChange={(e) => setFormData({...formData, lga: e.target.value})}
                >
                  <option value="" disabled>Select LGA</option>
                  <option value="Ikeja">Ikeja</option>
                  <option value="Alimosho">Alimosho</option>
                  <option value="Surulere">Surulere</option>
                </select>
              </div>

              <div>
                <label className="block font-label text-sm font-semibold text-on-surface-variant mb-2">Ward Designator</label>
                <input 
                  required
                  type="text" 
                  placeholder="E.g. Ward C"
                  className="w-full bg-surface-variant/30 border-b-2 border-outline-variant/30 rounded-t-xl px-4 py-3 focus:ring-0 focus:border-primary text-on-surface font-medium"
                  value={formData.ward}
                  onChange={(e) => setFormData({...formData, ward: e.target.value})}
                />
              </div>

              <div>
                <label className="block font-label text-sm font-semibold text-on-surface-variant mb-2">Duration of Residency (Years)</label>
                <input 
                  required
                  type="number" 
                  min="1"
                  className="w-full bg-surface-variant/30 border-b-2 border-outline-variant/30 rounded-t-xl px-4 py-3 focus:ring-0 focus:border-primary text-on-surface font-medium"
                  value={formData.duration}
                  onChange={(e) => setFormData({...formData, duration: e.target.value})}
                />
              </div>

              <div className="pt-4">
                <button type="submit" className="w-full bg-primary hover:bg-primary-container text-on-primary font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all flex justify-center items-center gap-2">
                  <span className="material-symbols-outlined">how_to_reg</span>
                  Submit Application
                </button>
              </div>
            </form>
          </div>
          
          <div className="hidden md:flex flex-col items-center justify-center bg-surface-container p-8 rounded-2xl relative overflow-hidden">
            <div className="absolute w-64 h-64 bg-primary/10 rounded-full blur-3xl -top-10 -right-10"></div>
            <div className="absolute w-64 h-64 bg-tertiary/10 rounded-full blur-3xl -bottom-10 -left-10"></div>
            
            <div className="relative z-10 w-full max-w-sm bg-surface-container-lowest rounded-2xl p-6 shadow-2xl rotate-3 border border-outline-variant/10">
              <div className="flex justify-between items-start mb-8">
                <div className="w-12 h-12 bg-surface-container rounded-lg animate-pulse"></div>
                <div className="w-24 h-6 bg-surface-container rounded animate-pulse"></div>
              </div>
              <div className="space-y-4">
                <div className="w-full h-4 bg-surface-container rounded animate-pulse delay-75"></div>
                <div className="w-3/4 h-4 bg-surface-container rounded animate-pulse delay-100"></div>
                <div className="w-1/2 h-4 bg-surface-container rounded animate-pulse delay-150"></div>
              </div>
              <div className="mt-8 flex justify-center">
                <div className="w-32 h-32 bg-surface-container rounded-lg animate-pulse delay-200"></div>
              </div>
            </div>
            
            <p className="mt-8 text-on-surface-variant font-medium text-center z-10 max-w-xs">Secure, cryptographically verifiable certificates generated instantly upon approval.</p>
          </div>
        </div>
      )}

      {step === 2 && certificateData && (
        <div className="flex flex-col items-center max-w-2xl mx-auto">
          <div className="w-full bg-surface-container-lowest rounded-3xl shadow-xl overflow-hidden border border-outline-variant/20">
            {/* Certificate Header */}
            <div className="bg-gradient-to-r from-primary to-primary-container p-6 text-on-primary flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <span className="material-symbols-outlined text-white">verified_user</span>
                </div>
                <div>
                  <h3 className="font-public-sans font-bold text-lg leading-tight">State Validate ID</h3>
                  <p className="text-white/80 text-xs font-medium uppercase tracking-wider">Certificate of Origin</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-4xl opacity-50">hotel_class</span>
            </div>
            
            {/* Certificate Body */}
            <div className="p-8 pb-12 flex flex-col md:flex-row gap-8 items-center bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-surface-container-lowest via-surface-container-lowest to-surface-container-low/50">
              <div className="flex-1 space-y-6 w-full">
                <div>
                  <p className="text-[10px] font-bold text-outline-variant uppercase tracking-widest mb-1">Citizen Name</p>
                  <p className="text-2xl font-black font-public-sans text-on-surface">{certificateData.fullName}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-[10px] font-bold text-outline-variant uppercase tracking-widest mb-1">LGA</p>
                    <p className="font-semibold text-on-surface-variant">{certificateData.lga}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-outline-variant uppercase tracking-widest mb-1">Ward</p>
                    <p className="font-semibold text-on-surface-variant">{certificateData.ward}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-outline-variant uppercase tracking-widest mb-1">Issue Date</p>
                    <p className="font-semibold text-on-surface-variant">{certificateData.issueDate}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-outline-variant uppercase tracking-widest mb-1">Certificate ID</p>
                    <p className="font-mono font-semibold text-on-surface-variant text-sm">{certificateData.id}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-xl shadow-inner border border-slate-100 flex-shrink-0">
                <QRCodeSVG 
                  value={qrUrl}
                  size={160}
                  level={"H"}
                  includeMargin={false}
                  imageSettings={{
                    src: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%2300464d"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>',
                    x: undefined,
                    y: undefined,
                    height: 24,
                    width: 24,
                    excavate: true,
                  }}
                />
                <p className="text-center text-[9px] font-mono mt-2 text-slate-400">SCAN TO VERIFY</p>
              </div>
            </div>
            
            {/* Warning Footer */}
            <div className="bg-error-container/50 p-3 text-center border-t border-error-container">
              <p className="text-on-error-container text-xs font-semibold">Contains sensitive PII. Present only to authorized personnel.</p>
            </div>
          </div>
          
          <div className="mt-8 flex gap-4">
            <button className="bg-surface-container-high hover:bg-surface-container-highest text-on-surface px-6 py-3 rounded-xl font-bold transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">download</span> PDF Export
            </button>
            <button className="bg-primary hover:bg-primary-container text-on-primary px-6 py-3 rounded-xl font-bold transition-colors shadow-lg shadow-primary/20 flex items-center gap-2" onClick={() => setStep(1)}>
              <span className="material-symbols-outlined text-[18px]">done_all</span> Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
