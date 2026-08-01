import React from 'react';
import Image from 'next/image';
import { Compass, Layers, ShieldCheck, Award, Building, HardHat } from 'lucide-react';

export default function About() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Head Block Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <h1 className="text-xs uppercase tracking-widest font-extrabold text-[#FF6A00]">Corporate Identity</h1>
          <p className="text-4xl font-black text-slate-900 tracking-tight">About Emrald Ace</p>
          <div className="w-12 h-1 bg-[#0B63C5] mx-auto rounded-full"></div>
        </div>

        {/* Chairman's Section Block Template */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24 bg-slate-50 p-8 sm:p-12 rounded-2xl border border-slate-150">
          <div className="lg:col-span-4 flex flex-col items-center text-center space-y-4">
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-[#0B63C5] shadow-lg">
              <Image 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80" 
                alt="Nithin Gopinathan Nair Chairman Placeholder Image Target"
                fill
                className="object-cover object-top"
              />
            </div>
            <div>
              <h3 className="text-lg font-black text-slate-950">Nithin Gopinathan Nair</h3>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Chairman Statement Lead</p>
            </div>
          </div>
          <div className="lg:col-span-8 space-y-4">
            <h4 className="text-xl font-bold text-slate-900">Chairman's Message: Building Lasting Partnerships Through Excellence</h4>
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              Welcome to Emrald Ace General Contracting & Electromechanical L.L.C., where engineering expertise meets operational excellence. Since our establishment, we have built our reputation by delivering reliable facility management, maintenance, and engineering solutions that create long-term value for our clients. Today, our organization has evolved into a trusted provider of Integrated Facility Management, Annual Maintenance Contracts, and Interior Fit-Out, supported by strong MEP Engineering and General Contracting capabilities across the UAE.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              We understand that modern facilities demand more than routine maintenance—they require intelligent planning, technical expertise, proactive management, and a commitment to continuous improvement. Our experienced team works closely with clients to provide customized solutions that improve operational efficiency, extend asset life, and create safe, productive environments.
            </p>
          </div>
        </div>

        {/* Strategic Identity Parameters Row Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-20">
          <div className="p-8 bg-[#0B63C5]/5 border border-[#0B63C5]/10 rounded-2xl space-y-4">
            <div className="w-12 h-12 bg-[#0B63C5] rounded-xl flex items-center justify-center text-white">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Our Vision</h3>
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              To become one of the UAE's most trusted providers of integrated facility management solutions by delivering excellence, innovation, sustainability, and customer satisfaction metrics.
            </p>
          </div>

          <div className="p-8 bg-orange-50/50 border border-orange-100 rounded-2xl space-y-4">
            <div className="w-12 h-12 bg-[#FF6A00] rounded-xl flex items-center justify-center text-white">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Our Mission</h3>
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              To provide reliable, cost-effective, and innovative facility management solutions that maximize asset performance while creating safe, productive, and sustainable environments through engineering excellence and continuous improvement.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}