'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  ShieldCheck, 
  Award, 
  Calendar, 
  Wrench, 
  Sparkles, 
  ChevronDown, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  Mail, 
  Building2,
  FolderCheck,
  MapPin,
  Check,
  HardHat,
  Compass,
  Hammer,
  Layers,
  FileCheck
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
  // Breadcrumb Schema (No physical HTML tag included as requested)
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
        "name": "General Contracting Company in Abu Dhabi, UAE",
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
      "telephone": "+971528976025",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Musaffah",
        "addressRegion": "Abu Dhabi",
        "addressCountry": "UAE"
      }
    },
    "areaServed": ["Abu Dhabi", "Dubai", "United Arab Emirates"],
    "description": "General contracting in Abu Dhabi, UAE — civil construction, renovation, structural repairs & extensions. ISO 45001-certified contractor since 2014."
  };

  const includedServices = [
    {
      icon: HardHat,
      title: "Civil Construction",
      desc: "Ground-up construction works including foundations, structural framing, and shell-and-core building, managed from groundbreaking through structural completion."
    },
    {
      icon: Sparkles,
      title: "Renovation",
      desc: "Full or partial renovation of existing buildings, covering structural, finishing, and system upgrades needed to modernize a property or adapt it to a new use."
    },
    {
      icon: Wrench,
      title: "Structural Repairs",
      desc: "Assessment and reinforcement of compromised structural elements (cracks, corrosion, load-bearing issues), carried out to restore a building's structural integrity and safety."
    },
    {
      icon: Layers,
      title: "Extensions",
      desc: "Design and construction of additional building space, integrated structurally and aesthetically with the existing property, including permitting and approval coordination."
    },
    {
      icon: Compass,
      title: "Planning & Design Support",
      desc: "Assistance during the pre-construction phase, helping translate concepts into buildable plans and coordinating with consultants and authorities before work begins."
    },
    {
      icon: FileCheck,
      title: "Fit-Out Delivery",
      desc: "Execution of interior fit-out works as part of a broader construction project, ensuring a seamless handover from structural completion to a fully finished, occupancy-ready space."
    }
  ];

  const whyChooseUs = [
    "End-to-end civil & structural engineering execution",
    "ISO 45001-certified high-safety standards",
    "Tailored pre-construction planning & authority approvals",
    "Turnkey handover from shell & core to complete fit-out",
    "Preventive, quality-driven construction procedures",
    "Transparent milestone schedules and cost oversight",
    "Dedicated structural restoration and extension division",
    "Multi-disciplinary engineering staff and craft talent",
    "On-time project delivery across commercial & residential",
    "Single point of accountability throughout project lifecycle"
  ];

  const steps = [
    { num: "01", title: "Site Assessment", desc: "We evaluate structural conditions, scope, and technical requirements on site" },
    { num: "02", title: "Proposal & Plan", desc: "A tailored project scope, technical schedule, and precise cost estimate" },
    { num: "03", title: "Mobilization", desc: "Dedicated engineering teams, heavy equipment, materials, and authority permits arranged" },
    { num: "04", title: "Delivery & Handover", desc: "Turnkey execution, strict QA/QC inspections, and final occupancy sign-off" }
  ];

  const industries = [
    "Commercial Offices", "Residential Villas", "Healthcare", 
    "Hospitality & Hotels", "Retail Outlets", "Industrial Complexes", 
    "Government Buildings", "Warehouses", "Educational Institutions"
  ];

  const projects = [
    {
      title: "Renovation, Extension & Fit-Out",
      location: "Shakhbout City, Abu Dhabi",
      client: "Al Maharat Private School / GEMS Education"
    },
    {
      title: "Outlet Renovation (MEP, Fit-Out, HVAC)",
      location: "Marina Mall, Abu Dhabi",
      client: "National Investment Corporation"
    },
    {
      title: "Civil, MEP & Fit-Out Works",
      location: "Khalifa City, Abu Dhabi",
      client: "Abu Dhabi Cricket & Sports Club"
    },
    {
      title: "Restaurant & Pool Deck Renovation",
      location: "Mubadala Tower, Abu Dhabi",
      client: "Solution Plus Mubadala"
    },
    {
      title: "MEP, HVAC & Civil Works (Private Villa)",
      location: "Al Manhal, Abu Dhabi",
      client: "Al Nasser Properties"
    },
    {
      title: "Boiler Installation, HVAC & Civil",
      location: "Dubai Investment Park",
      client: "Fedorowicz Laundry"
    }
  ];

  const faqs = [
    {
      q: "What does Emrald Ace's General Contracting service include?",
      a: "Civil construction, renovation, structural repairs, extensions, planning and design support, fit-out delivery, and general building works."
    },
    {
      q: "Does Emrald Ace handle building renovations?",
      a: "Yes, renovation is a core part of Emrald Ace's General Contracting service."
    },
    {
      q: "Can Emrald Ace support structural repairs?",
      a: "Yes — structural repairs are included within the General Contracting scope."
    },
    {
      q: "Does General Contracting include design support?",
      a: "Yes, Emrald Ace provides planning and design support alongside construction delivery."
    }
  ];

  return (
    <main className="bg-[#030712] text-slate-100 min-h-screen font-sans selection:bg-cyan-500 selection:text-black overflow-x-hidden">
      {/* Structural Schema Markup Injection for AI and Search Engine Optimization */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbSchema, serviceSchema]) }} 
      />

      {/* Page Title Meta Element for SEO */}
      <title>General Contracting Company in Abu Dhabi, UAE | Emrald Ace</title>
      <meta name="description" content="General contracting in Abu Dhabi, UAE — civil construction, renovation, structural repairs & extensions. ISO 45001-certified contractor since 2014." />

      {/* --- HERO SECTION --- Seamless transparent top connection */}
      <section className="relative pt-24 md:pt-32 pb-16 overflow-hidden bg-[#030712]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[500px] bg-gradient-to-tr from-cyan-600/20 via-blue-600/15 to-transparent blur-[120px] rounded-full pointer-events-none -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3 mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-slate-900/90 border border-slate-700/80 text-cyan-300 shadow-sm backdrop-blur-md">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              ISO 45001-Certified Contractor
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-slate-900/90 border border-slate-700/80 text-cyan-300 shadow-sm backdrop-blur-md">
              <Award className="w-4 h-4 text-cyan-400" />
              UAE Trade Licensed
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-slate-900/90 border border-slate-700/80 text-cyan-300 shadow-sm backdrop-blur-md">
              <Calendar className="w-4 h-4 text-cyan-400" />
              Established Since 2014
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-white">
                General Contracting Services in <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-white">Abu Dhabi & the UAE</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl mx-auto lg:mx-0">
                Comprehensive civil construction, renovation and building solutions — from planning and design support to fit-out delivery.
              </p>

              <div className="flex flex-wrap sm:flex-nowrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
                <a
                  href="#contact"
                  className="w-full sm:w-auto px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-xs sm:text-sm transition-all shadow-lg shadow-cyan-500/25 active:scale-95 flex items-center justify-center gap-2 shrink-0"
                >
                  <span>Get a Tailored Plan</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </a>
                <a
                  href="tel:+971528976025"
                  className="w-full sm:w-auto px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl bg-slate-900/90 border border-slate-700 hover:border-cyan-400 text-slate-100 font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shrink-0"
                >
                  <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>+971 52 897 6025</span>
                </a>
              </div>
            </div>

            {/* Visual Hero Block with Bright Image & Glass Info Tag */}
            <div className="lg:col-span-5 space-y-3">
              <div className="relative h-[320px] sm:h-[400px] w-full rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl group bg-slate-900 ring-1 ring-cyan-500/20">
                <Image
                  src="/general-contracting&specialized-civil.webp"
                  alt="General Contracting Civil Construction Abu Dhabi"
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
                    <p className="text-xs text-slate-300 font-medium">Headquartered in</p>
                    <p className="text-sm font-bold text-white">Musaffah, Abu Dhabi, UAE</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 border-y border-slate-800/80 py-8 text-center">
            <div>
              <p className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">10+ Years</p>
              <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1">Excellence in UAE</p>
            </div>
            <div>
              <p className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">22+</p>
              <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1">Major Projects Delivered</p>
            </div>
            <div>
              <p className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">ISO 45001</p>
              <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1">Safety Certified</p>
            </div>
            <div>
              <p className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">Turnkey</p>
              <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1">End-to-End Solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- QUICK ANSWER SECTION --- */}
      <section className="py-8 bg-slate-950/80 border-y border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/50 border border-cyan-500/30 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              <div className="space-y-2">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Quick Answer</span>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-5xl font-normal">
                  General contracting covers <strong className="text-white font-semibold">civil construction</strong>, <strong className="text-white font-semibold">renovation</strong>, <strong className="text-white font-semibold">structural repairs</strong> and <strong className="text-white font-semibold">building extensions</strong>, managed end-to-end by a single contractor. Emrald Ace delivers general contracting projects across Abu Dhabi and the UAE, from planning support through fit-out delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHAT'S INCLUDED SECTION --- */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white">What's Included</h2>
            <p className="text-sm text-slate-300 font-normal">Comprehensive civil, structural, and finishing capabilities under one team.</p>
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
              <h3 className="text-xl sm:text-2xl font-bold text-white">High-Precision Construction & Structural Engineering</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Emrald Ace combines robust civil construction frameworks, meticulous safety protocols, and modern fit-out precision. Whether executing full scale structural expansions or high-end architectural renovations, our engineering staff delivers on time and within budget.
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
              <h2 className="text-2xl sm:text-4xl font-black text-white">Why Emrald Ace</h2>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                By managing all civil, structural, MEP, and interior phases under one contract, we eliminate multi-vendor conflicts, streamline timeline risks, and guarantee exceptional structural quality.
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
            <h2 className="text-2xl sm:text-4xl font-black text-white">How It Works</h2>
            <p className="text-sm text-slate-300 font-normal">Our structured 4-step contracting execution process</p>
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

      {/* --- INDUSTRIES WE SERVE --- */}
      <section className="py-12 bg-slate-950/80 border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-black text-white">Sectors We Serve</h2>
            <p className="text-xs text-slate-300 mt-1 font-normal">General contracting solutions across Abu Dhabi & the UAE</p>
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

      {/* --- FEATURED PROJECTS --- */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-4xl font-black text-white">Featured Projects</h2>
            <p className="text-sm text-slate-300 font-normal">Demonstrated excellence across civil, commercial, and retail developments</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {projects.map((proj, idx) => (
              <div 
                key={idx} 
                className="group p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-900/50 border border-slate-800 hover:border-cyan-400/50 transition-all duration-300 flex flex-col justify-between relative overflow-hidden shadow-lg"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
                      <FolderCheck className="w-5 h-5" />
                    </div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-cyan-300 bg-cyan-500/10 px-2.5 py-1 rounded-md border border-cyan-500/20 truncate">
                      <MapPin className="w-3 h-3 shrink-0" />
                      {proj.location}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-slate-300 mt-2 font-normal">
                      Client: <span className="text-white font-medium">{proj.client}</span>
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-300 font-medium">
                  <span className="flex items-center gap-1 text-slate-200">
                    <Check className="w-3.5 h-3.5 text-cyan-400" /> Verified Delivery
                  </span>
                  <span className="font-mono text-[10px] text-slate-400">PROJ-0{idx + 1}</span>
                </div>
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
            <p className="text-sm text-slate-300 font-normal">Everything you need to know about our General Contracting services</p>
          </div>

          <div className="divide-y divide-slate-800/80 rounded-2xl bg-slate-900/60 border border-slate-800 p-6 sm:p-8 backdrop-blur-sm">
            {faqs.map((faq, idx) => (
              <FAQAccordion key={idx} faq={faq} />
            ))}
          </div>
        </div>
      </section>

      {/* --- CALL TO ACTION (CTA) --- No bottom border, seamless connection */}
      <section id="contact" className="py-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-cyan-950/40 border border-cyan-500/30 p-8 sm:p-12 overflow-hidden shadow-2xl">
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-center lg:text-left">
              <div className="lg:col-span-8 space-y-4">
                <h2 className="text-2xl sm:text-4xl font-black text-white">
                  Get a tailored General Contracting plan for your property.
                </h2>
                <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto lg:mx-0 font-normal">
                  Connect directly with our construction and engineering team to evaluate your scope and receive a comprehensive proposal.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col space-y-3">
                <a
                  href="mailto:sales1@emraldace.com"
                  className="px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-xs sm:text-sm transition-all text-center flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 active:scale-95"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  <span>sales1@emraldace.com</span>
                </a>
                <a
                  href="tel:+971528976025"
                  className="px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl bg-slate-950/90 border border-slate-700 hover:border-cyan-400 text-white font-semibold text-xs sm:text-sm transition-all text-center flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Call: +971 52 897 6025</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}