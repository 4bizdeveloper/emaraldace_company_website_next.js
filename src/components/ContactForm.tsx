'use client';

import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [status, setStatus] = useState<{ type: 'idle' | 'loading' | 'success' | 'error'; msg: string }>({ type: 'idle', msg: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading', msg: 'Transmitting secure dispatch logs...' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ type: 'success', msg: 'Communication logs saved. Technical experts will verify parameters.' });
        setFormData({ name: '', phone: '', email: '', message: '' });
      } else {
        throw new Error('System verification drop.');
      }
    } catch {
      setStatus({ type: 'error', msg: 'Delivery channel interruption occurred. Retrying connection...' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-slate-50 border border-slate-200 p-8 rounded-2xl space-y-5 shadow-xs">
      <h3 className="text-lg font-black text-slate-950 tracking-tight">Technical Request Gateway</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">Full Name *</label>
          <input 
            type="text" required 
            value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
            className="w-full text-xs font-medium px-4 py-3 bg-white border border-slate-250 rounded-xl focus:outline-hidden focus:border-brand focus:ring-1 focus:ring-brand"
          />
        </div>
        <div>
          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">Contact Number *</label>
          <input 
            type="tel" required 
            value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})}
            className="w-full text-xs font-medium px-4 py-3 bg-white border border-slate-250 rounded-xl focus:outline-hidden focus:border-brand focus:ring-1 focus:ring-brand"
          />
        </div>
      </div>

      <div>
        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">Email Address *</label>
        <input 
          type="email" required 
          value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
          className="w-full text-xs font-medium px-4 py-3 bg-white border border-slate-250 rounded-xl focus:outline-hidden focus:border-brand focus:ring-1 focus:ring-brand"
        />
      </div>

      <div>
        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">Project Scope / Message (Optional)</label>
        <textarea 
          rows={4} 
          value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}
          className="w-full text-xs font-medium p-4 bg-white border border-slate-250 rounded-xl focus:outline-hidden focus:border-brand focus:ring-1 focus:ring-brand resize-none"
        />
      </div>

      {status.msg && (
        <div className={`p-4 rounded-xl text-xs font-bold ${
          status.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 
          status.type === 'error' ? 'bg-red-50 text-red-700 border border-red-200' : 'bg-blue-50 text-brand'
        }`}>
          {status.msg}
        </div>
      )}

      <button 
        type="submit" disabled={status.type === 'loading'}
        className="w-full bg-brand hover:bg-brand-dark text-white font-bold py-3.5 rounded-xl transition-all text-xs tracking-wider uppercase disabled:opacity-50 shadow-md shadow-blue-700/10"
      >
        Transmit Message
      </button>
    </form>
  );
}