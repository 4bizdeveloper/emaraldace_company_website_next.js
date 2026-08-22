'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  ShieldCheck, 
  Calendar, 
  Wrench, 
  Sparkles, 
  ChevronDown, 
  CheckCircle2, 
  Building2,
  HardHat,
  Compass,
  Hammer,
  Layers,
  FileCheck,
  Users,
  Briefcase
} from 'lucide-react';

// --- FAQ Accordion Component ---
function FAQAccordion({ faq }: { faq: { q: string; a: string } }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-800/80 transition-colors duration-200">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex justify-between items-center text-left focus:outline-none group cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="text-base font-semibold text-slate-100 group-hover:text-cyan-400 transition-colors pr-4">
          {faq.q}
        </span>
        <div className={`p-2 rounded-full border border-slate-800 bg-slate-900/60 text-cyan-400 group-hover:border-cyan-400/40 transition-all duration-300 shrink-0 ${isOpen ? 'rotate-180 bg-cyan-500/20 text-cyan-300' : ''}`}>
          <ChevronDown className="w-4 h-4" />
        </div>
      </button>
      <div 
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100 pb-5' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden text-sm text-slate-200 font-normal leading-relaxed pl-1">
          {faq.a}
        </div>
      </div>
    </div>
  );
}

export default function GeneralContractingPage() {
  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.emraldace.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://www.emraldace.com/services/"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "General Contracting Company in UAE",
        "item": "https://www.emraldace.com/services/general-contracting"
      }
    ]
  };

  // Service Schema for Search Engine, AI, and Server Level SEO
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "General Contracting Services",
    "provider": {
      "@type": "Organization",
      "name": "Emrald Ace General Contracting & Electromechanical",
      "url": "https://www.emraldace.com",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "UAE"
      }
    },
    "areaServed": ["Abu Dhabi", "Dubai", "Sharjah", "Ajman", "Ras Al Khaimah", "Fujairah", "Umm Al Quwain", "United Arab Emirates"],
    "description": "General contracting across the UAE — civil construction, renovation, structural repairs & extensions. ISO 45001-certified contractor established since 2014."
  };

  const includedServices = [
    {
      icon: HardHat,
      title: "Civil Construction",
      desc: "Ground-up construction including foundations, structural framing, and shell-and-core building execution."
    },
    {
      icon: Sparkles,
      title: "Renovation",
      desc: "Full or partial structural, finishing, and mechanical upgrades to modernize existing properties."
    },
    {
      icon: Wrench,
      title: "Structural Repairs",
      desc: "Comprehensive repair and reinforcement of load-bearing structures to restore stability and safety."
    },
    {
      icon: Layers,
      title: "Extensions",
      desc: "Seamless design and construction of structural additions integrated with existing builds."
    },
    {
      icon: Compass,
      title: "Planning & Design Support",
      desc: "Pre-construction guidance to translate architectural concepts into fully buildable engineering plans."
    },
    {
      icon: FileCheck,
      title: "Fit-Out Delivery",
      desc: "Complete interior fit-out services providing a smooth transition from structure to occupancy."
    }
  ];

  const whyChooseUs = [
    "End-to-end civil & structural engineering execution",
    "ISO 45001-certified high-safety operations",
    "Turnkey handover from shell & core to interior completion",
    "Over 150 major skilled staff managing execution",
    "Proven track record of 160+ major completed projects",
    "Transparent milestone scheduling and cost oversight",
    "Specialized structural restoration and extension division",
    "On-time project delivery across commercial & residential sectors",
    "Single point of accountability throughout the project lifecycle"
  ];

  const steps = [
    { num: "01", title: "Site Assessment", desc: "We evaluate structural conditions, engineering scope, and technical requirements." },
    { num: "02", title: "Proposal & Planning", desc: "Developing a tailored execution schedule, material specifications, and project scope." },
    { num: "03", title: "Mobilization", desc: "Deploying dedicated engineering teams, heavy equipment, and resource management." },
    { num: "04", title: "Delivery & Handover", desc: "Rigorous QA/QC inspections, turnkey completion, and final occupancy approval." }
  ];

  const industries = [
    "Commercial Offices", "Residential Villas", "Healthcare Facilities", 
    "Hospitality & Hotels", "Retail Outlets", "Industrial Complexes", 
    "Government Properties", "Warehouses", "Educational Institutions"
  ];

  const faqs = [
    {
      q: "What does Emrald Ace's General Contracting service include?",
      a: "Our services encompass civil construction, renovation, structural repairs, building extensions, planning and design support, and interior fit-out delivery."
    },
    {
      q: "Do you offer general contracting services across the entire UAE?",
      a: "Yes, Emrald Ace provides full-scale general contracting operations across all seven emirates in the UAE."
    },
    {
      q: "Does Emrald Ace handle structural repairs and extensions?",
      a: "Yes, structural restoration, repairs, and building extensions are key components of our contracting capability."
    },
    {
      q: "Can you provide assistance during the design and planning phases?",
      a: "Yes, we offer comprehensive pre-construction planning and design support to streamline buildability."
    }
  ];

  return (
    <main className="bg-[#030712] text-slate-100 min-h-screen font-sans selection:bg-cyan-500 selection:text-black overflow-x-hidden">
      {/* Structural Schema Markup Injection for Search Engine & AI Indexing */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbSchema, serviceSchema]) }} 
      />

      {/* Hero Metadata */}
      <title>General Contracting Company in UAE | Emrald Ace</title>
      <meta name="description" content="Leading general contracting company in the UAE — specializing in civil construction, renovation, structural repairs, and extensions. ISO 45001 certified." />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-24 md:pt-32 pb-16 overflow-hidden bg-[#030712]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[500px] bg-gradient-to-tr from-cyan-600/20 via-blue-600/15 to-transparent blur-[120px] rounded-full pointer-events-none -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3 mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-slate-900/90 border border-slate-700/80 text-cyan-300 shadow-sm backdrop-blur-md">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              ISO 45001-Certified Contractor
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-slate-900/90 border border-slate-700/80 text-cyan-300 shadow-sm backdrop-blur-md">
              <Calendar className="w-4 h-4 text-cyan-400" />
              Established Since 2014
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-white">
                General Contracting Services in <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-white">the UAE</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl mx-auto lg:mx-0">
                End-to-end civil construction, renovation, structural engineering, and fit-out solutions tailored for commercial, residential, and industrial developments across the UAE.
              </p>
            </div>

            {/* Visual Hero Block */}
            <div className="lg:col-span-5 space-y-3">
              <div className="relative h-[320px] sm:h-[400px] w-full rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl group bg-slate-900 ring-1 ring-cyan-500/20">
                <Image
                  src="/general-contracting-and-specialized-civil.webp"
                  alt="General Contracting Civil Construction UAE"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-105 contrast-105"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/70 via-transparent to-transparent pointer-events-none" />
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-700/80 shadow-xl backdrop-blur-md transition-colors hover:border-cyan-400/50">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-300 shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] sm:text-xs text-slate-300 font-medium">Serving Industries Across</p>
                    <p className="text-xs sm:text-sm font-bold text-white">UAE</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 border-y border-slate-800/80 py-8 text-center">
            <div>
              <p className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">2014</p>
              <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1">Established in UAE</p>
            </div>
            <div>
              <p className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight flex items-center justify-center gap-1">
                <Briefcase className="w-6 h-6 text-cyan-400 hidden sm:inline" /> 160+
              </p>
              <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1">Major Projects Delivered</p>
            </div>
            <div>
              <p className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight flex items-center justify-center gap-1">
                <Users className="w-6 h-6 text-cyan-400 hidden sm:inline" /> 150+
              </p>
              <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1">Skilled Staffs</p>
            </div>
            <div>
              <p className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">ISO 45001</p>
              <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1">Safety Certified</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- QUICK OVERVIEW SECTION --- */}
      <section className="py-8 bg-slate-950/80 border-y border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/50 border border-cyan-500/30 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              <div className="space-y-2">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Overview</span>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-5xl font-normal">
                  General contracting manages <strong className="text-white font-semibold">civil construction</strong>, <strong className="text-white font-semibold">renovation</strong>, <strong className="text-white font-semibold">structural repairs</strong>, and <strong className="text-white font-semibold">building extensions</strong> under a unified management structure. Emrald Ace delivers reliable contracting solutions throughout the UAE from early phase pre-construction planning to turnkey handover.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHAT IS INCLUDED SECTION --- */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white">What is Included</h2>
            <p className="text-sm text-slate-300 font-normal">Comprehensive civil, structural, and finishing capabilities executed by expert teams.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {includedServices.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={idx} 
                  className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-400/50 transition-all duration-300 flex flex-col justify-between group shadow-lg"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 flex items-center justify-center font-bold group-hover:bg-cyan-500 group-hover:text-black transition-all duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Featured Visual Accent Block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center mt-12 p-6 sm:p-8 rounded-2xl bg-slate-900/50 border border-slate-800">
            <div className="lg:col-span-7 space-y-3 text-center lg:text-left">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Turnkey Project Delivery</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">Precision Engineering & Structural Quality</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Emrald Ace blends robust civil construction practices with rigorous quality control. Whether executing expansive structural modifications or interior turnkeys, our technical staff guarantees projects are delivered safely, on schedule, and within budget.
              </p>
            </div>
            <div className="lg:col-span-5 space-y-2">
              <div className="relative h-48 sm:h-56 w-full rounded-xl overflow-hidden border border-slate-700 shadow-md bg-slate-900">
                <Image
                  src="/general-contracting-2.webp"
                  alt="General Contracting Engineering Execution"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500 brightness-105"
                  sizes="(max-width: 1024px) 100vw, 35vw"
                />
              </div>
              <div className="text-[11px] font-semibold text-slate-100 bg-slate-950/90 backdrop-blur-md p-2.5 rounded-lg border border-slate-800 flex items-center justify-center gap-2">
                <Hammer className="w-3.5 h-3.5 text-cyan-400" />
                ISO 45001-Certified General Contracting Standards
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- WHY EMRALD ACE --- */}
      <section className="py-16 bg-slate-950/80 border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-4 text-center lg:text-left">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">The Advantage</span>
              <h2 className="text-2xl sm:text-4xl font-black text-white">Why Choose Emrald Ace</h2>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                Managing civil, structural, mechanical, and interior phases under single-source accountability prevents vendor conflicts, mitigates scheduling risks, and ensures uncompromising build quality.
              </p>

              <div className="relative h-[240px] sm:h-[280px] w-full rounded-2xl overflow-hidden border border-slate-700 mt-6 bg-slate-900">
                <Image
                  src="/mep-general-contracting.webp"
                  alt="Emrald Ace Engineering Team"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700 ease-out brightness-105"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyChooseUs.map((reason, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3 hover:border-cyan-400/40 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-100 font-medium leading-snug">{reason}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* --- HOW IT WORKS --- */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-4xl font-black text-white">Execution Process</h2>
            <p className="text-sm text-slate-300 font-normal">Our structured 4-step contracting approach</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <div 
                key={idx} 
                className="relative p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3 hover:border-cyan-400/40 transition-colors"
              >
                <span className="text-3xl font-black text-cyan-400">{step.num}</span>
                <h3 className="text-base font-bold text-white">{step.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTORS WE SERVE --- */}
      <section className="py-12 bg-slate-950/80 border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-black text-white">Sectors We Serve</h2>
            <p className="text-xs text-slate-300 mt-1 font-normal">General contracting solutions executed across all sectors in the UAE</p>
          </div>

          <div className="flex flex-wrap justify-center sm:justify-start gap-2.5 sm:gap-3">
            {industries.map((ind, idx) => (
              <div key={idx} className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-700/80 text-xs sm:text-sm font-semibold text-slate-100 hover:border-cyan-400 hover:text-white transition-all shadow-sm">
                {ind}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-16 bg-slate-950/80 border-t border-slate-800/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-4xl font-black text-white">Frequently Asked Questions</h2>
            <p className="text-sm text-slate-300 font-normal">Key information regarding our Contracting services</p>
          </div>

          <div className="divide-y divide-slate-800/80 rounded-2xl bg-slate-900/60 border border-slate-800 p-6 sm:p-8 backdrop-blur-sm">
            {faqs.map((faq, idx) => (
              <FAQAccordion key={idx} faq={faq} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}