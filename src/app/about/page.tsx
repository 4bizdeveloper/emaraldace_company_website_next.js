import React from 'react';
import Image from 'next/image';
import { Compass, Layers, ShieldCheck, Award, Building, CheckCircle2 } from 'lucide-react';

export default function About() {
  // Structured Data for SEO / AEO / GEO Search Engine Crawlers
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'Emrald Ace General Contracting & Electromechanical L.L.C.',
    'alternateName': 'Emrald Ace',
    'url': 'https://emraldace.com',
    'logo': 'https://emraldace.com/logo.png',
    'foundingDate': '2014',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Abu Dhabi',
      'addressCountry': 'AE'
    },
    'description': 'ISO & ICV certified engineering and integrated facilities management contractor operating across the UAE.',
    'knowsAbout': [
      'Integrated Facility Management',
      'Electromechanical Contracting',
      'Annual Maintenance Contracts',
      'MEP Engineering',
      'Interior Fit-Out'
    ]
  };

  return (
    <main 
      aria-label="About Emrald Ace"
      className="pt-28 sm:pt-36 md:pt-40 pb-16 sm:pb-24 bg-slate-950 selection:bg-[#0B63C5]/30 selection:text-[#0B63C5] overflow-x-hidden transition-colors duration-300"
    >
      {/* Schema.org Json-LD Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Dynamic SEO Split Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20 lg:mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
          
          {/* Left Text Content Grid (On mobile, this displays FIRST) */}
          <article 
            itemScope 
            itemType="https://schema.org/Organization"
            className="lg:col-span-7 space-y-5 sm:space-y-6 text-left order-1 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 bg-[#0B63C5]/10 border border-[#0B63C5]/25 px-3.5 py-1.5 rounded-full backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#0B63C5] animate-pulse"></span>
              <span className="text-[11px] sm:text-xs uppercase tracking-widest font-extrabold text-[#0B63C5]">
                Engineering & Facilities Management
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              About <span className="text-[#0B63C5] inline-block">Emrald</span> <span className="text-[#FF6A00] inline-block">Ace</span>
            </h1>

            <p 
              itemProp="description"
              className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl"
            >
              An industry-leading, ISO & ICV certified engineering and integrated facilities management contractor operating across the UAE. We deliver complete mechanical, electrical, plumbing, and general contracting solutions designed for maximum operational longevity.
            </p>
            
            {/* Quick trust metrics */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-2 sm:pt-4 sm:grid-cols-3">
              <div className="flex items-center gap-2.5 bg-slate-900/60 border border-slate-800/80 p-2.5 rounded-xl sm:bg-transparent sm:border-0 sm:p-0">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF6A00] flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-100">ISO Certified</span>
              </div>
              <div className="flex items-center gap-2.5 bg-slate-900/60 border border-slate-800/80 p-2.5 rounded-xl sm:bg-transparent sm:border-0 sm:p-0">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF6A00] flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-100">ICV Certified</span>
              </div>
              <div className="flex items-center gap-2.5 bg-slate-900/60 border border-slate-800/80 p-2.5 rounded-xl col-span-2 sm:col-span-1 sm:bg-transparent sm:border-0 sm:p-0">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF6A00] flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-100">UAE Licensed</span>
              </div>
            </div>
          </article>

          {/* Right Logo Presentation Grid (On mobile, this displays BELOW content) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end order-2 lg:order-2 mt-4 lg:mt-0">
            <div className="relative w-full max-w-[280px] sm:max-w-[360px] lg:max-w-[400px] aspect-square flex items-center justify-center p-6 bg-slate-900/70 border border-slate-800/80 rounded-3xl shadow-2xl transition-all duration-300 hover:scale-[1.01] hover:border-[#0B63C5]/30">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0B63C5]/10 via-transparent to-[#FF6A00]/10 rounded-3xl pointer-events-none" />
              <Image 
                src="/logo.png" 
                alt="Emrald Ace General Contracting & Electromechanical Logo"
                width={360}
                height={360}
                priority
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 360px, 400px"
                className="w-auto h-auto max-h-[85%] object-contain filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] select-none"
              />
            </div>
          </div>

        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Profile Corporate Metrics Block */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mb-16 sm:mb-20 lg:mb-24">
          <div className="p-4 sm:p-6 text-center bg-slate-900/80 border border-slate-800/80 rounded-2xl shadow-sm hover:border-slate-700 transition-colors">
            <div className="text-2xl sm:text-3xl font-black text-[#0B63C5] mb-1">2014</div>
            <div className="text-[10px] sm:text-xs uppercase tracking-wider font-extrabold text-slate-300">Established</div>
          </div>
          <div className="p-4 sm:p-6 text-center bg-slate-900/80 border border-slate-800/80 rounded-2xl shadow-sm hover:border-slate-700 transition-colors">
            <div className="text-2xl sm:text-3xl font-black text-[#0B63C5] mb-1">Abu Dhabi</div>
            <div className="text-[10px] sm:text-xs uppercase tracking-wider font-extrabold text-slate-300">Headquarters</div>
          </div>
          <div className="p-4 sm:p-6 text-center bg-slate-900/80 border border-slate-800/80 rounded-2xl shadow-sm hover:border-slate-700 transition-colors">
            <div className="text-2xl sm:text-3xl font-black text-[#0B63C5] mb-1">22+</div>
            <div className="text-[10px] sm:text-xs uppercase tracking-wider font-extrabold text-slate-300">Projects Delivered</div>
          </div>
          <div className="p-4 sm:p-6 text-center bg-slate-900/80 border border-slate-800/80 rounded-2xl shadow-sm hover:border-slate-700 transition-colors">
            <div className="text-2xl sm:text-3xl font-black text-[#0B63C5] mb-1">100%</div>
            <div className="text-[10px] sm:text-xs uppercase tracking-wider font-extrabold text-slate-300">UAE Business Coverage</div>
          </div>
        </section>

        {/* Chairman's Section Block Template */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 sm:mb-20 lg:mb-24 bg-slate-900/80 p-6 sm:p-10 lg:p-12 rounded-3xl border border-slate-800/80 shadow-xl">
          <div className="lg:col-span-4 flex flex-col items-center text-center space-y-3 sm:space-y-4">
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-[#0B63C5] shadow-xl ring-2 ring-[#0B63C5]/30">
              <Image 
                src="/nithin-gopinathan-nair.jpeg" 
                alt="Nithin Gopinathan Nair - Chairman of Emrald Ace"
                fill
                sizes="(max-width: 640px) 144px, 176px"
                className="object-cover object-top"
              />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-black text-white">Nithin Gopinathan Nair</h3>
              <p className="text-xs text-slate-300 font-bold uppercase tracking-wider mt-0.5">Chairman Statement Lead</p>
            </div>
          </div>
          
          <div className="lg:col-span-8 space-y-3 sm:space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Chairman's Message: Building Lasting Partnerships Through Excellence
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Welcome to Emrald Ace General Contracting & Electromechanical L.L.C., where engineering expertise meets operational excellence. Since our establishment, we have built our reputation by delivering reliable facility management, maintenance, and engineering solutions that create long-term value for our clients. Today, our organization has evolved into a trusted provider of Integrated Facility Management, Annual Maintenance Contracts, and Interior Fit-Out, supported by strong MEP Engineering and General Contracting capabilities across the UAE.
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              We understand that modern facilities demand more than routine maintenance—they require intelligent planning, technical expertise, proactive management, and a commitment to continuous improvement. Our experienced team works closely with clients to provide customized solutions that improve operational efficiency, extend asset life, and create safe, productive environments.
            </p>
          </div>
        </section>

        {/* Strategic Identity Parameters Row Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch mb-16 sm:mb-20">
          <div className="p-6 sm:p-8 bg-slate-900/60 border border-[#0B63C5]/20 rounded-3xl space-y-4 hover:border-[#0B63C5]/40 transition-colors">
            <div className="w-12 h-12 bg-[#0B63C5] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-[#0B63C5]/20">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Our Vision</h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              To become one of the UAE's most trusted providers of integrated facility management solutions by delivering excellence, innovation, sustainability, and customer satisfaction metrics.
            </p>
          </div>

          <div className="p-6 sm:p-8 bg-slate-900/60 border border-[#FF6A00]/20 rounded-3xl space-y-4 hover:border-[#FF6A00]/40 transition-colors">
            <div className="w-12 h-12 bg-[#FF6A00] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-[#FF6A00]/20">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Our Mission</h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              To provide reliable, cost-effective, and innovative facility management solutions that maximize asset performance while creating safe, productive, and sustainable environments through engineering excellence and continuous improvement.
            </p>
          </div>
        </section>

        {/* Core Values Section Grid */}
        <section className="pt-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 space-y-2">
            <span className="text-xs uppercase tracking-widest font-extrabold text-[#FF6A00]">Foundational Standards</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Our Core Corporate Values</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="p-5 sm:p-6 bg-slate-900/80 border border-slate-800/80 rounded-2xl flex gap-4 items-start hover:border-slate-700 transition-colors">
              <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800 text-[#0B63C5] flex-shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-white text-base">Excellence</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  Delivering unmatched quality without technical or operational compromises.
                </p>
              </div>
            </div>

            <div className="p-5 sm:p-6 bg-slate-900/80 border border-slate-800/80 rounded-2xl flex gap-4 items-start hover:border-slate-700 transition-colors">
              <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800 text-[#0B63C5] flex-shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-white text-base">Safety First</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  Proactively protecting personnel, physical properties, and the environment.
                </p>
              </div>
            </div>

            <div className="p-5 sm:p-6 bg-slate-900/80 border border-slate-800/80 rounded-2xl flex gap-4 items-start hover:border-slate-700 transition-colors sm:col-span-2 lg:col-span-1">
              <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800 text-[#0B63C5] flex-shrink-0">
                <Building className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-white text-base">Sustainability</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  Creating enduring structural value through smart resource operations.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}