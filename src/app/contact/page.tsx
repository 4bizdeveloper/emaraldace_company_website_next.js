'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, AlertTriangle, Loader2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [responseMsg, setResponseMsg] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmission = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '', email: '', message: '' });
      } else {
        setStatus('error');
        setResponseMsg(data.error || 'Transmission failed.');
      }
    } catch (err) {
      setStatus('error');
      setResponseMsg('Server transmission exception occurred.');
    }
  };

  return (
    <div className="py-24 bg-white font-medium">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <span className="text-xs uppercase tracking-widest font-extrabold text-[#0b63c5] block">Communications Gateway</span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">Connect With Technical Experts</h1>
          <div className="w-12 h-1 bg-[#0b63c5] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Quick Access Information Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl flex items-start space-x-4 transform transition-transform hover:scale-[1.01]">
              <div className="p-3 bg-[#0b63c5] text-white rounded-xl shadow-xs"><Phone size={22} /></div>
              <div>
                <span className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider leading-none mb-1">Call Regional Office</span>
                <a href="tel:+971528976025" className="text-base font-black text-slate-900 hover:text-[#0b63c5] transition-colors tracking-wide">+971 52 897 6025</a>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl flex items-start space-x-4 transform transition-transform hover:scale-[1.01]">
              <div className="p-3 bg-[#0b63c5] text-white rounded-xl shadow-xs"><Mail size={22} /></div>
              <div>
                <span className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider leading-none mb-1">Email Global Sales</span>
                <a href="mailto:sales1@emraldace.com" className="text-base font-black text-slate-900 hover:text-[#0b63c5] transition-colors tracking-wide">sales1@emraldace.com</a>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl flex items-start space-x-4 transform transition-transform hover:scale-[1.01]">
              <div className="p-3 bg-slate-900 text-white rounded-xl shadow-xs"><MapPin size={22} /></div>
              <div>
                <span className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider leading-none mb-1">Base Headquarters Coordinates</span>
                <p className="text-xs sm:text-sm font-bold text-slate-700 leading-relaxed">Musaffah M-14, Abu Dhabi, United Arab Emirates</p>
              </div>
            </div>
          </div>

          {/* Secure Technical SMTP Form Engine Container */}
          <div className="lg:col-span-7 bg-white border border-slate-200 p-8 rounded-3xl shadow-xl border-t-4 border-t-[#0b63c5]">
            <h3 className="text-lg font-black tracking-tight text-slate-950 mb-6">Submit Verification Dispatch Request</h3>
            
            <form onSubmit={handleFormSubmission} className="space-y-5 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Full Name *</label>
                  <input 
                    type="text" required name="name" value={formData.name} onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-[#0b63c5] focus:bg-white rounded-xl p-3.5 font-semibold text-slate-800 transition-all outline-hidden text-xs sm:text-sm"
                    placeholder="e.g., Drew Feig"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Contact Number *</label>
                  <input 
                    type="tel" required name="phone" value={formData.phone} onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-[#0b63c5] focus:bg-white rounded-xl p-3.5 font-semibold text-slate-800 transition-all outline-hidden text-xs sm:text-sm"
                    placeholder="e.g., +971 52 897 6025"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Email Address *</label>
                <input 
                  type="email" required name="email" value={formData.email} onChange={handleInputChange}
                  className="w-full bg-slate-50 border border-slate-200 focus:border-[#0b63c5] focus:bg-white rounded-xl p-3.5 font-semibold text-slate-800 transition-all outline-hidden text-xs sm:text-sm"
                  placeholder="e.g., operations@client.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Message Document / Requirement Scope (Optional)</label>
                <textarea 
                  name="message" rows={4} value={formData.message} onChange={handleInputChange}
                  className="w-full bg-slate-50 border border-slate-200 focus:border-[#0b63c5] focus:bg-white rounded-xl p-3.5 font-semibold text-slate-800 transition-all outline-hidden resize-none text-xs sm:text-sm"
                  placeholder="Outline physical plant details, scope, or facility dimensions..."
                />
              </div>

              {status === 'success' && (
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 flex items-center space-x-2 text-xs sm:text-sm font-semibold">
                  <CheckCircle2 size={18} className="shrink-0 text-emerald-600" />
                  <span>Your request has been delivered to our engineering desk via secure SMTP pipeline loops.</span>
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 bg-rose-50 border border-rose-200 rounded-xl text-rose-800 flex items-center space-x-2 text-xs sm:text-sm font-semibold">
                  <AlertTriangle size={18} className="shrink-0 text-rose-600" />
                  <span>{responseMsg}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-[#0b63c5] text-white font-bold p-4 rounded-xl hover:bg-slate-900 transition-all duration-300 shadow-md flex items-center justify-center space-x-2 disabled:bg-slate-300 disabled:cursor-not-allowed select-none text-xs sm:text-sm uppercase tracking-wider"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    <span>Processing Secure Dispatch Hub...</span>
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Transmit Requirements</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}