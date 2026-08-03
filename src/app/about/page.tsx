import React from 'react';
import Image from 'next/image';
import { Compass, Layers, ShieldCheck, Award, Building, HardHat, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-36 pb-20 sm:pt-40 bg-slate-950 selection:bg-[#0B63C5]/20 selection:text-[#0B63C5]">
      
      {/* Dynamic SEO Split Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Content Grid */}
          <div className="lg:col-span-7 space-y-6 text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-[#0B63C5]/5 border border-[#0B63C5]/10 px-3 py-1 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#0B63C5] animate-pulse"></span>
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#0B63C5]">Engineering & Facilities Management</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-none">
              About <span className="text-[#0B63C5]">Emrald</span> <span className="text-[#FF6A00]">Ace</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-medium max-w-2xl">
              An industry-leading, ISO & ICV certified engineering and integrated facilities management contractor operating across the UAE. We deliver complete mechanical, electrical, plumbing, and general contracting solutions designed for maximum operational longevity.
            </p>
            
            {/* Quick trust metrics */}
            <div className="grid grid-cols-2 gap-4 pt-4 sm:grid-cols-3">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-slate-200">ISO Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-slate-200">ICV Certified</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-slate-200">UAE Licensed</span>
              </div>
            </div>
          </div>

          {/* Right Logo Presentation Grid */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-full max-w-[320px] sm:max-w-[400px] aspect-square flex items-center justify-center p-6 bg-slate-900/60 border border-white/5 rounded-3xl transition-transform duration-500 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0B63C5]/5 via-transparent to-[#FF6A00]/5 rounded-3xl pointer-events-none" />
              <Image 
                src="/logo.png" 
                alt="Emrald Ace General Contracting & Electromechanical Logo"
                width={360}
                height={360}
                priority
                className="w-auto h-auto max-h-[85%] object-contain drop-shadow-sm select-none"
              />
            </div>
          </div>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Profile Corporate Metrics Block */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          <div className="p-6 text-center bg-slate-900 border border-slate-800 rounded-2xl">
            <div className="text-3xl font-black text-[#0B63C5] mb-1">2014</div>
            <div className="text-xs uppercase tracking-wider font-extrabold text-slate-400">Established</div>
          </div>
          <div className="p-6 text-center bg-slate-900 border border-slate-800 rounded-2xl">
            <div className="text-3xl font-black text-[#0B63C5] mb-1">Abu Dhabi</div>
            <div className="text-xs uppercase tracking-wider font-extrabold text-slate-400">Headquarters</div>
          </div>
          <div className="p-6 text-center bg-slate-900 border border-slate-800 rounded-2xl">
            <div className="text-3xl font-black text-[#0B63C5] mb-1">22+</div>
            <div className="text-xs uppercase tracking-wider font-extrabold text-slate-400">Projects Delivered</div>
          </div>
          <div className="p-6 text-center bg-slate-900 border border-slate-800 rounded-2xl">
            <div className="text-3xl font-black text-[#0B63C5] mb-1">100%</div>
            <div className="text-xs uppercase tracking-wider font-extrabold text-slate-400">UAE Business Coverage</div>
          </div>
        </div>

        {/* Chairman's Section Block Template */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24 bg-slate-900 p-8 sm:p-12 rounded-2xl border border-white/5">
          <div className="lg:col-span-4 flex flex-col items-center text-center space-y-4">
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-[#0B63C5] shadow-lg">
              <Image 
                src="/nithin-gopinathan-nair.jpeg" 
                alt="Nithin Gopinathan Nair Chairman"
                fill
                className="object-cover object-top"
              />
            </div>
            <div>
              <h3 className="text-lg font-black text-slate-100">Nithin Gopinathan Nair</h3>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Chairman Statement Lead</p>
            </div>
          </div>
          <div className="lg:col-span-8 space-y-4">
            <h4 className="text-xl font-bold text-white">Chairman's Message: Building Lasting Partnerships Through Excellence</h4>
            <p className="text-sm text-slate-400 leading-relaxed font-medium">
              Welcome to Emrald Ace General Contracting & Electromechanical L.L.C., where engineering expertise meets operational excellence. Since our establishment, we have built our reputation by delivering reliable facility management, maintenance, and engineering solutions that create long-term value for our clients. Today, our organization has evolved into a trusted provider of Integrated Facility Management, Annual Maintenance Contracts, and Interior Fit-Out, supported by strong MEP Engineering and General Contracting capabilities across the UAE.
            </p>
            <p className="text-sm text-slate-400 leading-relaxed font-medium">
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
            <h3 className="text-xl font-bold text-white">Our Vision</h3>
            <p className="text-sm text-slate-400 leading-relaxed font-medium">
              To become one of the UAE's most trusted providers of integrated facility management solutions by delivering excellence, innovation, sustainability, and customer satisfaction metrics.
            </p>
          </div>

          <div className="p-8 bg-orange-950/20 border border-orange-900/30 rounded-2xl space-y-4">
            <div className="w-12 h-12 bg-[#FF6A00] rounded-xl flex items-center justify-center text-white">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Our Mission</h3>
            <p className="text-sm text-slate-400 leading-relaxed font-medium">
              To provide reliable, cost-effective, and innovative facility management solutions that maximize asset performance while creating safe, productive, and sustainable environments through engineering excellence and continuous improvement.
            </p>
          </div>
        </div>

        {/* Core Values Section Grid Add-on */}
        <div className="pt-4 border-t border-slate-800">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <h2 className="text-xs uppercase tracking-widest font-extrabold text-[#FF6A00]">Foundational Standards</h2>
            <p className="text-2xl font-black text-white tracking-tight">Our Core Corporate Values</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-slate-900 border border-white/5 rounded-2xl flex gap-4 items-start">
              <div className="p-2 bg-slate-950 rounded-lg border border-slate-800 text-[#0B63C5] flex-shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">Excellence</h4>
                <p className="text-xs text-slate-400 leading-relaxed font-medium">Delivering unmatched quality without technical or operational compromises.</p>
              </div>
            </div>
            <div className="p-6 bg-slate-900 border border-white/5 rounded-2xl flex gap-4 items-start">
              <div className="p-2 bg-slate-950 rounded-lg border border-slate-800 text-[#0B63C5] flex-shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">Safety First</h4>
                <p className="text-xs text-slate-400 leading-relaxed font-medium">Proactively protecting personnel, physical properties, and the environment.</p>
              </div>
            </div>
            <div className="p-6 bg-slate-900 border border-white/5 rounded-2xl flex gap-4 items-start">
              <div className="p-2 bg-slate-950 rounded-lg border border-slate-800 text-[#0B63C5] flex-shrink-0">
                <Building className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">Sustainability</h4>
                <p className="text-xs text-slate-400 leading-relaxed font-medium">Creating enduring structural value through smart resource operations.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}