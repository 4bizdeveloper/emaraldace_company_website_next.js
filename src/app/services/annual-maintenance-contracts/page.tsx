'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  ShieldCheck, 
  Calendar, 
  Clock, 
  Search, 
  FileText, 
  Users, 
  CheckCircle2, 
  ChevronDown, 
  ArrowRight, 
  Building2, 
  Zap, 
  PackageCheck, 
  Layers 
} from 'lucide-react';

// --- FAQ Accordion Component ---
function FAQAccordion({ faq }: { faq: { q: string; a: string } }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-800/80 transition-colors duration-200">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 sm:py-5 flex justify-between items-center text-left focus:outline-none group cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="text-sm sm:text-base font-semibold text-slate-100 group-hover:text-white transition-colors pr-3 sm:pr-4">
          {faq.q}
        </span>
        <div className={`p-1.5 sm:p-2 rounded-full border border-slate-800 bg-slate-900/80 text-slate-300 group-hover:border-[#0b63c5] group-hover:text-white transition-all duration-300 shrink-0 ${isOpen ? 'rotate-180 bg-[#0b63c5]/20 text-white border-[#0b63c5]' : ''}`}>
          <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </div>
      </button>
      <div 
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100 pb-4 sm:pb-5' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden text-xs sm:text-sm text-slate-200 leading-relaxed sm:leading-relaxed pl-1">
          {faq.a}
        </div>
      </div>
    </div>
  );
}

export default function AMCPage() {
  // Breadcrumb Schema Format
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
        "name": "Annual Maintenance Contracts (AMC) in UAE",
        "item": "https://www.emraldace.com/services/annual-maintenance-contracts"
      }
    ]
  };

  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Annual Maintenance Contracts (AMC) in UAE",
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
    "description": "Customized Annual Maintenance Contracts across the UAE — preventive maintenance, 24/7 emergency support, and monthly performance reporting. ISO 45001 certified."
  };

  const whatsIncludedItems = [
    {
      icon: Calendar,
      title: "Scheduled Preventive Maintenance",
      desc: "Planned, calendar-based servicing of equipment and systems carried out before problems occur to reduce unexpected breakdowns and preserve warranties."
    },
    {
      icon: Zap,
      title: "Corrective & Emergency Maintenance",
      desc: "Rapid repair response when equipment fails or underperforms outside scheduled cycles, minimizing downtime and avoiding costly failures."
    },
    {
      icon: Search,
      title: "Routine Equipment Inspections",
      desc: "Regular physical checks of mechanical, electrical, and building systems to catch early signs of wear or malfunction and track performance."
    },
    {
      icon: Clock,
      title: "24/7 Emergency Support",
      desc: "Round-the-clock availability for urgent facility issues so operations remain safe and uninterrupted without delay."
    },
    {
      icon: PackageCheck,
      title: "Spare Parts Coordination",
      desc: "Proactive sourcing and stocking of essential spare parts to drastically cut down repair turnaround times."
    },
    {
      icon: FileText,
      title: "Monthly Performance Reporting",
      desc: "Comprehensive monthly updates detailing maintenance activities, asset health, and proactive recommendations."
    },
    {
      icon: Users,
      title: "Dedicated Service Team",
      desc: "An assigned technical team familiar with your specific facility requirements, assets, and operational history."
    },
    {
      icon: ShieldCheck,
      title: "Compliance & Safety Checks",
      desc: "Structured safety reviews ensuring your building systems continually comply with official UAE safety and regulatory standards."
    }
  ];

  const benefits = [
    "Reduced operational downtime",
    "Lower long-term maintenance costs",
    "Extended machinery & equipment lifespan",
    "Predictable annual budgeting",
    "Rapid emergency response times",
    "Single point of accountability"
  ];

  const steps = [
    { num: "01", title: "Site Survey", desc: "We thoroughly evaluate your facility assets, existing systems, and service history." },
    { num: "02", title: "Custom AMC Scope", desc: "A tailored contract structured specifically around residential, commercial, or industrial requirements." },
    { num: "03", title: "Scheduled Servicing", desc: "Timely preventive maintenance visits begin according to an agreed calendar." },
    { num: "04", title: "Reporting & Support", desc: "Transparent monthly performance insights backed by 24/7 emergency availability." }
  ];

  const industries = [
    "Commercial Offices", "Residential Communities", "Healthcare", 
    "Hotels", "Retail", "Industrial", 
    "Government", "Warehouses", "Education"
  ];

  const faqs = [
    {
      q: "What is included in Emrald Ace's Annual Maintenance Contract?",
      a: "Our AMC packages include scheduled preventive servicing, rapid corrective maintenance, routine system inspections, 24/7 emergency response, spare parts coordination, monthly reporting, dedicated technical support, and strict safety compliance audits."
    },
    {
      q: "What are the primary benefits of securing an AMC?",
      a: "Key advantages include minimized facility downtime, lower long-term repair expenses, prolonged equipment life, transparent operational budgeting, fast response rates, and a single point of accountability."
    },
    {
      q: "Do you offer AMCs across all property types in the UAE?",
      a: "Yes. We design and execute tailored Annual Maintenance Contracts for residential, commercial, and industrial facilities across the UAE."
    },
    {
      q: "Is emergency support included within the AMC?",
      a: "Yes, Emrald Ace provides round-the-clock 24/7 emergency support as part of every AMC agreement."
    }
  ];

  return (
    <main className="bg-[#030712] text-slate-100 min-h-screen font-sans selection:bg-[#0b63c5] selection:text-white pt-0 overflow-x-hidden">
      {/* Search Engine, AI & Server Level JSON-LD Schema */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbSchema, serviceSchema]) }} 
      />

      {/* --- HERO SECTION WITH TRANSPARENT HEADER COMPATIBILITY --- */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-14 md:pb-20 overflow-hidden">
        {/* Background glow and subtle ambient gradient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-b from-[#0b63c5]/15 via-blue-500/5 to-transparent blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#030712] via-[#030712]/80 to-transparent pointer-events-none z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-2.5 mb-6 sm:mb-8">
            <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-semibold bg-slate-900/90 border border-slate-700/80 text-slate-200 shadow-sm backdrop-blur-md">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0b63c5]" />
              ISO 45001 Certified
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-semibold bg-slate-900/90 border border-slate-700/80 text-slate-200 shadow-sm backdrop-blur-md">
              <Calendar className="w-3.5 h-3.5 text-[#0b63c5]" />
              Operating Since 2014
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-white">
                Annual Maintenance Contracts (AMC) in <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#0b63c5]">UAE</span>
              </h1>
              <p className="text-sm sm:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl mx-auto lg:mx-0">
                Scheduled inspections, preventive maintenance, emergency response, and continuous performance monitoring — ensuring small operational issues never become costly system failures.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2 w-full sm:w-auto">
                <a
                  href="#contact"
                  className="w-full sm:w-auto px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-[#0b63c5] hover:bg-[#0b63c5]/90 text-white font-semibold text-xs sm:text-sm transition-all shadow-lg shadow-[#0b63c5]/25 hover:shadow-[#0b63c5]/40 active:scale-95 flex items-center justify-center gap-2"
                >
                  <span>Get a Tailored AMC Plan</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </a>
              </div>
            </div>

            {/* Hero Image Block */}
            <div className="lg:col-span-5 space-y-3">
              <div className="relative h-[260px] sm:h-[360px] lg:h-[380px] w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl group bg-slate-900">
                <Image
                  src="/annual-maintenance-contract.webp"
                  alt="Annual Maintenance Contracts AMC UAE"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-95 group-hover:opacity-100"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-60" />
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-900/90 border border-slate-700/80 shadow-xl backdrop-blur-md transition-colors hover:border-[#0b63c5]">
                <div className="flex items-center gap-3">
                  <div className="p-2 sm:p-2.5 rounded-lg sm:rounded-xl bg-[#0b63c5]/20 text-white shrink-0">
                    <Building2 className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] sm:text-xs text-slate-300 font-medium">Serving Industries Across</p>
                    <p className="text-xs sm:text-sm font-bold text-white">UAE</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 border-t border-slate-800/80 pt-8 text-center">
            <div className="p-2">
              <p className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">150+</p>
              <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1">Major Skilled Staff</p>
            </div>
            <div className="p-2">
              <p className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">160+</p>
              <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1">Major Projects Delivered</p>
            </div>
            <div className="p-2">
              <p className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">2014</p>
              <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1">Established in UAE</p>
            </div>
            <div className="p-2">
              <p className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">24/7</p>
              <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1">Emergency Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- QUICK ANSWER SECTION --- */}
      <section className="py-8 bg-slate-950/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-5 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-700/80 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#0b63c5]/15 rounded-full blur-2xl pointer-events-none" />
            <div className="flex flex-col md:flex-row gap-3 sm:gap-4 items-start md:items-center justify-between relative z-10">
              <div className="space-y-1.5 sm:space-y-2">
                <span className="text-[11px] sm:text-xs font-bold text-white uppercase tracking-wider bg-[#0b63c5]/30 px-2.5 py-0.5 rounded-md border border-[#0b63c5]/40 inline-block">Quick Answer</span>
                <p className="text-xs sm:text-base text-slate-100 leading-relaxed max-w-5xl">
                  An <strong className="text-white font-bold">Annual Maintenance Contract (AMC)</strong> is a comprehensive yearly agreement covering regular preventive servicing, rapid emergency repairs, and routine system audits—ensuring predictable maintenance budgets and minimal operational downtime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHAT'S INCLUDED SECTION --- */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2.5 sm:space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0b63c5]/20 border border-[#0b63c5]/40 text-white text-xs font-bold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5 text-[#0b63c5]" />
              Comprehensive Scope
            </div>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white">What's Included in Our AMC</h2>
            <p className="text-xs sm:text-sm text-slate-300">Complete end-to-end facility protection and preventive care</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 auto-rows-fr">
            {whatsIncludedItems.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={idx} 
                  className="p-5 sm:p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-[#0b63c5] transition-all duration-300 flex flex-col justify-between group shadow-md hover:shadow-[#0b63c5]/10"
                >
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between">
                      <div className="p-2.5 rounded-xl bg-[#0b63c5]/20 text-white group-hover:bg-[#0b63c5] transition-colors">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-300">0{idx + 1}</span>
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-white transition-colors">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* --- BENEFITS SECTION --- */}
      <section className="py-12 sm:py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-3.5 sm:space-y-4 text-center lg:text-left">
              <span className="text-xs font-bold text-white bg-[#0b63c5]/30 px-2.5 py-1 rounded-md border border-[#0b63c5]/40 uppercase tracking-wider inline-block">Key Advantages</span>
              <h2 className="text-2xl sm:text-4xl font-black text-white">Benefits of an AMC</h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Partnering with Emrald Ace for your Annual Maintenance Contract delivers tangible operational efficiency, long-term asset security, and financial clarity for residential, commercial, or industrial properties.
              </p>

              <div className="relative h-[220px] sm:h-[280px] w-full rounded-2xl overflow-hidden border border-slate-700/80 mt-4 sm:mt-6 bg-slate-900">
                <Image
                  src="/anual-maintenance-contract-2.webp"
                  alt="AMC Benefits and Facility Management"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700 ease-out opacity-90 hover:opacity-100"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-3 hover:border-[#0b63c5] transition-colors shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-100 font-semibold leading-snug">{benefit}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* --- HOW IT WORKS --- */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-4xl font-black text-white">How It Works</h2>
            <p className="text-xs sm:text-sm text-slate-300">Our structured 4-step deployment process</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {steps.map((step, idx) => (
              <div 
                key={idx} 
                className="relative p-5 sm:p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2.5 sm:space-y-3 hover:border-[#0b63c5] transition-colors"
              >
                <span className="text-2xl sm:text-3xl font-black text-[#0b63c5]">{step.num}</span>
                <h3 className="text-sm sm:text-base font-bold text-white">{step.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- INDUSTRIES WE SERVE --- */}
      <section className="py-10 sm:py-12 bg-slate-950/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5 sm:space-y-6">
          <div className="text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-black text-white">Industries We Serve</h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">Tailored AMC solutions for sectors across the UAE</p>
          </div>

          <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-3">
            {industries.map((ind, idx) => (
              <div key={idx} className="px-3.5 sm:px-4 py-2 rounded-xl bg-slate-900 border border-slate-700/80 text-xs sm:text-sm font-medium text-slate-100 hover:border-[#0b63c5] hover:text-white transition-all shadow-sm">
                {ind}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-12 sm:py-16 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-4xl font-black text-white">FAQs</h2>
            <p className="text-xs sm:text-sm text-slate-300">Everything you need to know about Annual Maintenance Contracts</p>
          </div>

          <div className="divide-y divide-slate-800/80 rounded-2xl bg-slate-900/60 border border-slate-800 p-4 sm:p-8 backdrop-blur-sm">
            {faqs.map((faq, idx) => (
              <FAQAccordion key={idx} faq={faq} />
            ))}
          </div>
        </div>
      </section>

      {/* --- CALL TO ACTION (CTA) SECTION --- */}
      <section id="contact" className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-[#0b63c5]/30 border border-[#0b63c5]/40 p-6 sm:p-12 overflow-hidden shadow-2xl">
            
            <div className="relative z-10 flex flex-col md:flex-row gap-6 items-center justify-between text-center md:text-left">
              <div className="space-y-3 sm:space-y-4">
                <h2 className="text-2xl sm:text-4xl font-black text-white">
                  Get a Tailored Annual Maintenance Contract Plan for Your Property
                </h2>
                <p className="text-xs sm:text-base text-slate-200 max-w-2xl">
                  Protect your assets with proactive maintenance, 24/7 emergency response, and customized contract scopes.
                </p>
              </div>

              <div className="w-full md:w-auto shrink-0">
                <a
                  href="#contact"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#0b63c5] hover:bg-[#0b63c5]/90 text-white font-semibold text-xs sm:text-sm transition-all text-center flex items-center justify-center gap-2 shadow-lg active:scale-95"
                >
                  <span>Request Custom AMC Proposal</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}