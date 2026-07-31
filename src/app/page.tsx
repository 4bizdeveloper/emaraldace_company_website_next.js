import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Award, ShieldCheck, Wrench, Building2, HardHat, CheckCircle } from 'lucide-react';

export default function Home() {
  const featuredProjects = [
    { name: "Renovation, Extension & Fit-Out", loc: "Shakhbout City, Abu Dhabi", client: "Al Maharat Private School / GEMS Education" },
    { name: "Outlet Renovation - MEP, Fit-Out & HVAC", loc: "Marina Mall, Abu Dhabi", client: "National Investment Corporation" },
    { name: "Civil, MEP & Fit-Out Infrastructure", loc: "Khalifa City, Abu Dhabi", client: "Abu Dhabi Cricket & Sports Club" },
  ];

  return (
    <div className="relative w-full overflow-hidden">
      {/* Dynamic Modern Hero Section with Background Image Layout Template */}
      <section className="relative min-h-[85vh] flex items-center bg-slate-900 py-24 text-white">
        <div className="absolute inset-0 z-0 opacity-25">
          <Image 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1920&q=80"
            alt="Engineering Infrastructure Background Placeholder"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center space-x-2 bg-[#0B63C5]/20 border border-[#0B63C5]/40 rounded-full px-4 py-1.5 backdrop-blur-xs">
              <span className="w-2 h-2 rounded-full bg-[#FF6A00] animate-pulse"></span>
              <span className="text-xs font-bold text-blue-200 uppercase tracking-wider">Established Since 2014</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white">
              Building Lasting Partnerships Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B63C5] to-blue-400">Excellence</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-xl font-normal leading-relaxed">
              Welcome to Emrald Ace General Contracting & Electromechanical L.L.C., where engineering expertise meets operational excellence. Supported by strong MEP capabilities across the UAE.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/services" className="px-6 py-3.5 bg-gradient-to-r from-[#0B63C5] to-[#0045A3] text-white font-bold rounded-xl shadow-lg transition-all flex items-center space-x-2 hover:scale-[1.02]">
                <span>Our Core Business</span>
                <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className="px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-xl transition-all">
                Contact Technical Experts
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative flex justify-center">
            <div className="w-full max-w-md p-8 bg-slate-900/80 border border-slate-800 rounded-2xl shadow-2xl backdrop-blur-md space-y-6">
              <span className="font-extrabold text-[#FF6A00] text-xs tracking-widest uppercase block border-b border-slate-850 pb-2">Overview At A Glance</span>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-slate-950/50 rounded-xl border border-slate-850">
                  <span className="block text-2xl font-black text-[#0B63C5]">2014</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">Established Year</span>
                </div>
                <div className="p-4 bg-slate-950/50 rounded-xl border border-slate-850">
                  <span className="block text-2xl font-black text-[#0B63C5]">22+</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">Completed Projects</span>
                </div>
                <div className="p-4 bg-slate-950/50 rounded-xl border border-slate-850">
                  <span className="block text-2xl font-black text-[#0B63C5]">2023</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">FM Division Expansion</span>
                </div>
                <div className="p-4 bg-slate-950/50 rounded-xl border border-slate-850">
                  <span className="block text-2xl font-black text-[#0B63C5]">100%</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">UAE Coverage Matrix</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Summary Row Block */}
      <section className="py-20 bg-slate-50 border-b border-slate-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <h2 className="text-xs font-extrabold text-[#FF6A00] tracking-widest uppercase mb-1">Execution Log</h2>
              <p className="text-3xl font-black text-slate-900 tracking-tight">Featured Enterprise Projects</p>
            </div>
            <Link href="/services" className="text-sm font-bold text-[#0B63C5] hover:text-[#0045A3] flex items-center gap-1">
              <span>View details & metrics</span> <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((proj, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-slate-250/60 shadow-xs flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase block mb-2">{proj.loc}</span>
                  <h3 className="text-base font-bold text-slate-900 tracking-tight mb-4">{proj.name}</h3>
                </div>
                <div className="border-t border-slate-100 pt-3 text-xs font-semibold text-[#0B63C5]">
                  Client: {proj.client}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}