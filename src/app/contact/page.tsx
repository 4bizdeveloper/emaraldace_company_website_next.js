import React from 'react';
import { Phone, Mail, MapPin, Clock, Shield } from 'lucide-react';

export default function Contact() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <h1 className="text-xs uppercase tracking-widest font-extrabold text-[#FF6A00]">Gateway Portal</h1>
          <p className="text-4xl font-black text-slate-900 tracking-tight">Connect With Our Technical Experts</p>
          <div className="w-12 h-1 bg-[#0B63C5] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Card Contact Modules Row Layout */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl flex items-start space-x-4">
              <div className="p-3 bg-[#0B63C5] text-white rounded-lg"><Phone size={24} /></div>
              <div>
                <span className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">Call Regional Office</span>
                <a href="tel:+971528976025" className="text-base font-black text-slate-900 hover:text-[#0B63C5] transition-colors">+971 52 897 6025</a>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl flex items-start space-x-4">
              <div className="p-3 bg-[#FF6A00] text-white rounded-lg"><Mail size={24} /></div>
              <div>
                <span className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">Email Global Sales</span>
                <a href="mailto:sales1@emraldace.com" className="text-base font-black text-slate-900 hover:text-[#0B63C5] transition-colors">sales1@emraldace.com</a>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl flex items-start space-x-4">
              <div className="p-3 bg-slate-900 text-white rounded-lg"><MapPin size={24} /></div>
              <div>
                <span className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">Base Coordinates</span>
                <p className="text-sm font-bold text-slate-800 leading-relaxed">Musaffah M-14, Abu Dhabi, United Arab Emirates</p>
              </div>
            </div>
          </div>

          {/* Compliance Info Frame */}
          <div className="lg:col-span-7 bg-slate-950 text-white p-8 rounded-2xl border border-slate-900 space-y-6 shadow-xl">
            <h3 className="text-xl font-black tracking-tight text-white flex items-center gap-2">
              <Shield className="text-[#FF6A00]" />
              <span>Certifications & Compliance Information</span>
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed font-medium">
              Emrald Ace Engineering & Facilities Management LLC is a fully licensed enterprise alignment entity officially recognized throughout the UAE jurisdiction grid matrix.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-slate-800 pt-6">
              <div className="p-4 bg-slate-900 rounded-xl border border-slate-850"><span className="text-xs font-bold text-slate-300 block mb-1">ISO Quality Alignment</span><span className="text-[11px] font-bold text-orange-400 uppercase">Certified System</span></div>
              <div className="p-4 bg-slate-900 rounded-xl border border-slate-850"><span className="text-xs font-bold text-slate-300 block mb-1">ICV Value Addition</span><span className="text-[11px] font-bold text-orange-400 uppercase">Certified Alignment</span></div>
              <div className="p-4 bg-slate-900 rounded-xl border border-slate-850"><span className="text-xs font-bold text-slate-300 block mb-1">UAE Corporate License</span><span className="text-[11px] font-bold text-orange-400 uppercase">Licensed Contractor</span></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}