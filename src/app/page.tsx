'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowRight, ShieldCheck, Wrench, Building2, HardHat, CheckCircle2, 
  ChevronRight, Phone, Mail, Award, ThumbsUp, Sparkles, HelpCircle, ChevronDown,
  ChevronLeft
} from 'lucide-react';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const coreServices = [
    { 
      title: "Integrated Facility Management", 
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
      desc: "Combining engineering maintenance, workplace workflows, and technical operation networks into one single asset lifecycle team strategy." 
    },
    { 
      title: "Annual Maintenance Contracts (AMC)", 
      image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=600&q=80",
      desc: "Customized preventative upkeep programs mapping out regular diagnostic checks with responsive emergency technical dispatch frameworks." 
    },
    { 
      title: "Interior Fit-Out Solutions", 
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80",
      desc: "Designing functional, modern commercial offices, high-spec glass partition modules, joinery structural units, and false ceilings." 
    },
    { 
      title: "MEP Engineering Services", 
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80",
      desc: "Mechanical HVAC architectures, heavy industrial electrical layouts, plumbing networks, and advanced automated building telemetry systems." 
    },
    { 
      title: "General Contracting & Civil", 
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80",
      desc: "Turnkey structural renovations, commercial spatial additions, structural concrete preservation, and institutional execution." 
    },
    { 
      title: "Specialized Infrastructure", 
      image: "https://images.unsplash.com/photo-1516880711640-ef7db81be3e1?auto=format&fit=crop&w=600&q=80",
      desc: "Smart parking gate logic controls, unified CCTV security matrices, clean epoxy chemical flooring protection, and advanced commercial waterproofing." 
    }
  ];

  const clientLogos = [
    { name: "Mubadala", url: "https://images.unsplash.com/photo-1516880711640-ef7db81be3e1?auto=format&fit=crop&w=240&q=80" },
    { name: "GEMS Education", url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=240&q=80" },
    { name: "Baker Hughes", url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=240&q=80" },
    { name: "Hilton", url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=240&q=80" },
    { name: "Emaar", url: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=240&q=80" },
    { name: "Aldar Properties", url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=240&q=80" },
    { name: "Sobha Realty", url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=240&q=80" }
  ];

  const faqs = [
    { q: "What sectors do your Integrated Facility Management solutions support inside the UAE?", a: "Emrald Ace services commercial enterprise office suites, extensive residential gated communities, healthcare hospital complexes, hospitality environments, high-capacity retail hubs, industrial manufacturing zones, corporate warehouses, and government department facilities across all Emirates." },
    { q: "How are urgent engineering service requests handled under an Annual Maintenance Contract?", a: "We operate a comprehensive 24/7 technical emergency dispatch helpdesk. In the event of critical asset failures (such as main HVAC down or electrical system distribution trips), rapid-response units are deployed instantly to achieve baseline stabilization and prevent expensive operational downtime." },
    { q: "What exact compliance certifications does Emrald Ace operate under within the UAE market?", a: "We maintain official certification under rigorous international ISO quality guidelines, operate with full ICV value-addition optimization validation matrices for strategic procurement pipelines, and carry active official UAE Corporate Contracting Licenses." },
    { q: "Can you manage complex MEP installation frameworks along with custom interior fit-out deployments?", a: "Yes, our inter-disciplinary teams provide smooth, unified project delivery. We handle everything from standard mechanical installations and technical automation matrices to precision structural joinery works, partition frameworks, and false ceiling installations under one accountable point of contact." }
  ];

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -280 : 280;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Auto-slide effect for client logos
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 5) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: 240, behavior: 'smooth' });
        }
      }
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full text-slate-900 bg-white selection:bg-[#0b63c5] selection:text-white transform-gpu" style={{ fontFamily: 'Poppins, sans-serif' }}>
      
      {/* 1. FULL SCREEN HERO SECTION WITH ULTRA MODERN VIDEO BACKGROUND */}
      <section className="relative h-screen w-full min-h-[100dvh] flex items-center justify-center bg-slate-950 text-white overflow-hidden">
        
        {/* Background Full-Screen Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=90"
          className="absolute inset-0 w-full h-full object-cover object-center z-0 will-change-transform"
        >
          <source src="/bg-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dynamic Light Overlay Gradient for Maximum Clarity and Contrast */}
        <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[1px] z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-slate-950/40 z-0" />

        {/* Hero Central Overlay Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center w-full my-auto space-y-6 sm:space-y-8 pt-16">
          <div className="inline-flex items-center space-x-2.5 bg-slate-900/80 border border-blue-400/40 backdrop-blur-md rounded-full px-5 py-2.5 shadow-xl">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF6A00] animate-ping"></span>
            <span className="text-xs sm:text-sm font-bold text-blue-100 uppercase tracking-widest">
              ISO Certified | ICV Certified | UAE Licensed Contractor
            </span>
          </div>
          
          {/* Main Hero Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black tracking-tight leading-[1.08] text-white max-w-5xl mx-auto drop-shadow-2xl">
            Engineering Value. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-sky-400 to-indigo-300">
              Optimizing Assets.
            </span>
          </h1>
        </div>
      </section>

      {/* 2. HERO SUB-CONTENTS SECTION (Positioned Directly Below Fullscreen Hero) */}
      <section className="bg-slate-950 text-white border-b border-slate-800 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Description & Call to Actions */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block">About Emrald Ace</span>
              <p className="text-lg sm:text-2xl text-slate-200 font-normal leading-relaxed">
                Welcome to Emrald Ace General Contracting & Electromechanical L.L.C. We deliver reliable facility management, maintenance, and robust engineering setups across the UAE footprint since 2014.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/services" className="px-8 py-4 bg-[#0b63c5] hover:bg-blue-600 text-white font-bold rounded-xl shadow-xl shadow-blue-600/30 transition-all flex items-center justify-center space-x-2 transform hover:-translate-y-0.5 group">
                  <span>Explore Enterprise Solutions</span>
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link href="/contact" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-xl backdrop-blur-md transition-all text-center">
                  Request Engineering Callback
                </Link>
              </div>
            </div>

            {/* Metrics Statistics Panel */}
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-[#0b63c5] rounded-3xl opacity-20 blur-3xl transform rotate-6 scale-95 pointer-events-none"></div>
              <div className="w-full max-w-md mx-auto p-8 bg-slate-900/90 border border-slate-800 rounded-2xl shadow-2xl backdrop-blur-xl space-y-6 relative border-t-2 border-t-[#0b63c5]">
                <div className="flex justify-between items-center border-b border-slate-800 pb-4">
                  <span className="font-extrabold text-blue-400 text-xs tracking-widest uppercase block">Operational Statistics</span>
                  <span className="text-[10px] bg-emerald-500/10 text-emerald-400 font-bold px-2.5 py-1 rounded-full border border-emerald-500/20">Active Coverage</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { metric: "2014", label: "Established Market Footprint" },
                    { metric: "22+", label: "Completed Major Infrastructures" },
                    { metric: "2023", label: "FM Division Expansion Year" },
                    { metric: "100%", label: "UAE Regional Fulfillment" }
                  ].map((stat, sIdx) => (
                    <div key={sIdx} className="p-4 bg-slate-950/60 rounded-xl border border-slate-800 transform hover:scale-[1.02] transition-transform">
                      <span className="block text-3xl font-black text-white tracking-tight">{stat.metric}</span>
                      <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-tight mt-1 block leading-tight">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. CORPORATE CORE COMPLIANCE BADGES SECTION */}
      <section className="bg-slate-50 border-b border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="w-12 h-12 bg-blue-50 text-[#0b63c5] rounded-xl flex items-center justify-center shrink-0 border border-blue-100"><ShieldCheck className="w-6 h-6" /></div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider">ISO Quality Management</h3>
                <p className="text-slate-500 text-xs mt-1 font-medium">Certified systems driving strict control parameters across technical engineering operations.</p>
              </div>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center shrink-0 border border-amber-100"><Award className="w-6 h-6" /></div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider">ICV Value certified</h3>
                <p className="text-slate-500 text-xs mt-1 font-medium">Validating localized supply network execution loops for strategic corporate integration.</p>
              </div>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center shrink-0"><HardHat className="w-6 h-6" /></div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider">UAE Licensed Contractor</h3>
                <p className="text-slate-500 text-xs mt-1 font-medium">Fully credentialed and authorized to deploy large-scale civil and electromechanical contracts.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EXECUTIVE INTRODUCTORY SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 relative">
              <div className="relative w-full h-[450px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" 
                  alt="Emrald Ace Executive Operations Meeting"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#0b63c5] text-white p-6 rounded-2xl shadow-xl hidden sm:block max-w-[220px]">
                <ThumbsUp className="w-8 h-8 text-white mb-2" />
                <p className="text-xs font-bold uppercase tracking-widest leading-tight">Operational Reliability Guaranteed</p>
              </div>
            </div>
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-extrabold text-[#FF6A00] uppercase tracking-widest block">Corporate DNA</span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">Delivering Integrated Engineering Ecosystems Across The UAE</h2>
              <div className="w-12 h-1 bg-[#0b63c5] rounded-full"></div>
              <p className="text-slate-600 text-sm font-medium leading-relaxed">
                Emrald Ace has evolved into a trusted provider of Integrated Facility Management, Annual Maintenance Contracts, and Interior Fit-Out solutions, backed by absolute engineering proficiency. Modern physical plant infrastructures require proactive monitoring methodologies, specialized insight arrays, and direct professional governance metrics.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {["Intelligent Operational Planning", "Rigorous Asset Lifetime Preservation", "Transparent SLA Reporting Structures", "Direct Accountability Frameworks"].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs font-bold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#0b63c5]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="pt-4">
                <Link href="/about" className="inline-flex items-center text-sm font-bold text-[#0b63c5] hover:text-blue-700 transition-colors group">
                  <span>Read full corporate overview portfolio</span>
                  <ChevronRight size={16} className="ml-1 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. OPTIMIZED SERVICES SECTION */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-extrabold text-[#0b63c5] uppercase tracking-widest block">Service Matrix</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">Technical Capability Modules</h2>
            <p className="text-slate-500 text-xs sm:text-sm font-medium">Reliable maintenance, specialized engineering, and operational governance execution under one direct roof structure.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/80 flex flex-col group transform hover:-translate-y-1"
              >
                <div className="relative h-[220px] w-full overflow-hidden">
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                  
                  <div className="absolute bottom-4 left-5 right-5 z-10">
                    <h3 className="text-lg font-bold text-white tracking-tight drop-shadow-md leading-snug">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4 bg-white">
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link href="/services" className="inline-flex items-center justify-center bg-slate-950 text-white font-bold px-8 py-4 rounded-xl hover:bg-[#0b63c5] transition-all text-sm tracking-wide shadow-md">
              View Extended Capabilities Catalogue
            </Link>
          </div>
        </div>
      </section>

      {/* 6. HIGH-CONVERTING CTA SECTION */}
      <section className="py-16 bg-gradient-to-r from-slate-900 via-[#0b63c5] to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-950/20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-slate-950/40 border border-white/10 backdrop-blur-xl rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-4 text-center lg:text-left max-w-2xl">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest inline-flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> 24/7 Rapid Emergency Response
              </span>
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white leading-tight">
                Ready to Upgrade Your Facility Management & MEP Operations?
              </h2>
              <p className="text-slate-200 text-xs sm:text-sm font-normal">
                Speak directly with our technical dispatch engineers now for consultations, emergency support, or AMC inquiries.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto shrink-0">
              <a 
                href="tel:+97126282868" 
                className="w-full sm:w-auto px-6 py-4 bg-white hover:bg-slate-100 text-slate-950 font-black rounded-xl shadow-xl transition-all flex items-center justify-center space-x-3 text-sm tracking-wide group"
              >
                <div className="w-8 h-8 rounded-full bg-[#0b63c5]/10 flex items-center justify-center text-[#0b63c5]">
                  <Phone className="w-4 h-4 text-[#0b63c5] animate-bounce" />
                </div>
                <span>Call +971 2 628 2868</span>
              </a>

              <Link 
                href="/contact" 
                className="w-full sm:w-auto px-6 py-4 bg-transparent hover:bg-white/10 border border-white/30 text-white font-bold rounded-xl transition-all text-center text-sm"
              >
                Request Quotation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SECTOR DIVERSIFICATION FOOTPRINT GRID */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-extrabold text-[#FF6A00] uppercase tracking-widest block">Sector Ecosystems</span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">Diversified Industry Frameworks We Systematically Serve</h2>
              <p className="text-slate-500 text-xs sm:text-sm font-medium leading-relaxed">
                Our active engineering field deployment units are structurally configured to implement continuous preventative, reactive, and asset enhancement operations directly within specialized commercial business verticals throughout the UAE jurisdiction boundaries.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["Commercial Offices", "Residential Units", "Healthcare Centers", "Luxury Hotels", "Retail Spaces", "Industrial Sites"].map((vertical, vIdx) => (
                  <div key={vIdx} className="p-4 bg-slate-50 rounded-xl border border-slate-150 flex items-center space-x-2 text-xs font-bold text-slate-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0b63c5]"></span>
                    <span>{vertical}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-[240px] w-full rounded-2xl overflow-hidden border border-slate-100 shadow-md">
                  <Image src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=400&q=80" alt="Commercial Interiors" fill className="object-cover" />
                </div>
                <div className="relative h-[160px] w-full rounded-2xl overflow-hidden border border-slate-100 shadow-md">
                  <Image src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=400&q=80" alt="MEP Plants" fill className="object-cover" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative h-[160px] w-full rounded-2xl overflow-hidden border border-slate-100 shadow-md">
                  <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80" alt="Corporate Facilities" fill className="object-cover" />
                </div>
                <div className="relative h-[240px] w-full rounded-2xl overflow-hidden border border-slate-100 shadow-md">
                  <Image src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=400&q=80" alt="Civil Development" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. TRUSTED BY INDUSTRY LEADERS */}
      <section className="py-20 bg-slate-950 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="text-xs uppercase font-bold text-blue-400 tracking-widest block">Trusted By Industry Leaders</span>
              <p className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-1">Strategic Partners Across the Last 5 Years</p>
            </div>
            
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => handleScroll('left')} 
                aria-label="Previous Slide" 
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-[#0b63c5] text-white flex items-center justify-center transition-colors border border-slate-700 cursor-pointer"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={() => handleScroll('right')} 
                aria-label="Next Slide" 
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-[#0b63c5] text-white flex items-center justify-center transition-colors border border-slate-700 cursor-pointer"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div 
            ref={scrollRef} 
            className="flex items-center space-x-8 overflow-x-auto scrollbar-none scroll-smooth py-4 no-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {clientLogos.concat(clientLogos).map((logo, lIdx) => (
              <div 
                key={lIdx} 
                className="relative min-w-[200px] h-20 bg-slate-900/60 rounded-xl border border-slate-800 flex items-center justify-center px-6 shrink-0 transition-all hover:border-blue-500/50 group"
              >
                <Image 
                  src={logo.url} 
                  alt={`${logo.name} Corporate Partnership Footprint`} 
                  fill 
                  className="object-cover rounded-xl opacity-60 group-hover:opacity-100 transition-opacity" 
                />
                <span className="relative z-10 text-xs font-semibold text-slate-300 group-hover:text-white bg-slate-950/70 px-3 py-1 rounded-md backdrop-blur-xs">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ SECTION */}
      <section className="py-24 bg-slate-50 border-t border-slate-200 scroll-mt-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <span className="text-xs font-extrabold text-[#0b63c5] uppercase tracking-widest block">Knowledge Base</span>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Frequently Asked Questions</h2>
            <div className="w-12 h-1 bg-[#0b63c5] mx-auto rounded-full"></div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, fIdx) => {
              const isOpen = openFaq === fIdx;
              return (
                <div 
                  key={fIdx} 
                  className="bg-white rounded-xl border border-slate-200/90 shadow-xs overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(fIdx)}
                    className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 focus:outline-hidden group hover:bg-slate-50/60 transition-colors cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <h3 className="text-sm sm:text-base font-semibold text-slate-800 flex items-start gap-3.5 pr-2 leading-snug">
                      <HelpCircle className="w-5 h-5 text-[#0b63c5] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <span>{faq.q}</span>
                    </h3>
                    <div className={`w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? 'rotate-180 bg-[#0b63c5] text-white' : ''}`}>
                      <ChevronDown size={16} />
                    </div>
                  </button>

                  <div 
                    className={`grid transition-all duration-300 ease-in-out border-slate-100 ${
                      isOpen ? 'grid-rows-[1fr] border-t opacity-100' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="p-6 sm:p-7 pl-14 text-xs sm:text-sm font-normal text-slate-600 leading-relaxed bg-slate-50/40">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Structural Artificial Intelligence & Search Engine Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Emrald Ace General Contracting & Electromechanical L.L.C",
                "url": "https://emraldace.com",
                "logo": "https://emraldace.com/logo.png",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+97126282868",
                  "contactType": "customer service",
                  "areaServed": "AE"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": faqs.map(faq => ({
                  "@type": "Question",
                  "name": faq.q,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.a
                  }
                }))
              }
            ])
          }}
        />
      </section>
    </div>
  );
}