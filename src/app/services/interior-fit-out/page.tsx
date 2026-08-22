'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  ShieldCheck, 
  Calendar, 
  ChevronDown, 
  CheckCircle2, 
  ArrowRight, 
  Building2,
  Layers,
  LayoutGrid,
  Paintbrush,
  Home,
  Sparkles
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
        <span className="text-sm sm:text-base font-semibold text-slate-100 group-hover:text-white transition-colors pr-3">
          {faq.q}
        </span>
        <div className={`p-2 rounded-full border border-slate-700 bg-slate-900/80 text-slate-300 group-hover:border-[#0b63c5] group-hover:text-white transition-all duration-300 shrink-0 ${isOpen ? 'rotate-180 bg-[#0b63c5] text-white' : ''}`}>
          <ChevronDown className="w-4 h-4" />
        </div>
      </button>
      <div 
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100 pb-5' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden text-xs sm:text-sm text-slate-200 leading-relaxed pl-1">
          {faq.a}
        </div>
      </div>
    </div>
  );
}

export default function InteriorFitOutPage() {
  // Breadcrumb Schema (JSON-LD)
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
        "name": "Interior Fit-Out",
        "item": "https://www.emraldace.com/services/interior-fit-out"
      }
    ]
  };

  // Service Schema for Search Engines, AI Engines (AEO), & GEO Search
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Interior Fit-Out Company in UAE",
    "provider": {
      "@type": "Organization",
      "name": "Emrald Ace General Contracting & Electromechanical",
      "url": "https://www.emraldace.com",
      "telephone": "+971528976025",
      "email": "sales1@emraldace.com",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "AE"
      }
    },
    "areaServed": [
      { "@type": "Country", "name": "United Arab Emirates" }
    ],
    "description": "Commercial & residential interior fit-out services across the UAE — office & retail fit-out, partitions, joinery, false ceilings, flooring & full turnkey execution."
  };

  const includedServices = [
    {
      icon: Building2,
      title: "Commercial Interiors",
      desc: "Full interior build-out for offices and commercial spaces, transforming empty shell units into move-in ready properties. Covers space planning, partition layouts, ceiling and lighting design, flooring, and finishing works tailored to business operations — including reception areas, workstations, meeting rooms, break-out zones, and storage. Emrald Ace coordinates civil, electrical, and finishing trades under one team, providing clients with a single point of contact from design handover to final snagging."
    },
    {
      icon: LayoutGrid,
      title: "Office Fit-Out",
      desc: "End-to-end workplace fit-out, from partitions to finishes, engineered to enhance daily operations. Includes workstation layouts, meeting rooms, IT power and cabling infrastructure, acoustic partitioning, ceiling and lighting upgrades, and customized branded finishes. Scheduled to minimize operational downtime, with phased handover options available."
    },
    {
      icon: Sparkles,
      title: "Retail Fit-Out",
      desc: "Store and outlet fit-outs designed to reflect brand identity while guiding customer flow efficiently toward display and checkout zones. Covers shopfronts, display fixtures, specialty flooring and lighting, changing rooms, service counters, and fast-turnaround scheduling to meet strict opening deadlines."
    },
    {
      icon: Home,
      title: "Residential Interiors",
      desc: "Tailored interior finishing for homes and apartments, spanning villa interiors to single-room renovations. Features wall finishes, painting, custom joinery (wardrobes, kitchen units, cabinetry), false ceilings, flooring, and bathroom and kitchen upgrades coordinated with electrical and plumbing work."
    },
    {
      icon: Layers,
      title: "Partitions & False Ceilings",
      desc: "Space planning executed through structural partitions, false ceilings, and customized layout designs. Includes drywall and glass partitions for zoning, high-grade acoustic walls for meeting rooms, and ceiling systems (gypsum, grid, or decorative) that conceal MEP services while optimizing illumination and sound absorption."
    },
    {
      icon: Paintbrush,
      title: "Flooring, Joinery & Glass Works",
      desc: "A comprehensive finishing package encompassing high-grade flooring (tiles, vinyl, epoxy, hardwood, laminate), custom carpentry and joinery (reception counters, cabinetry, decorative wall paneling), aluminium framing, and architectural glass works (glazed partitions, glass doors, and shopfronts)."
    }
  ];

  const whyChooseUs = [
    "Turnkey interior fit-out solutions from shell to move-in ready",
    "Single point of contact for civil, MEP, and decorative finishes",
    "Proven track record across commercial, retail, and residential sectors",
    "Acoustic and ergonomic designs optimized for workplace productivity",
    "Custom joinery, glass, and bespoke architectural finishing",
    "Fast-turnaround schedules with phased handover options",
    "Strict compliance with UAE safety and building codes",
    "Transparent pricing and detailed scope management"
  ];

  const steps = [
    { num: "01", title: "Site Assessment & Space Planning", desc: "We evaluate site dimensions, layout specifications, and architectural requirements." },
    { num: "02", title: "Tailored Design & Proposal", desc: "We provide detailed scope documents, material selections, layout plans, and transparent cost estimates." },
    { num: "03", title: "Execution & Trade Coordination", desc: "Our team manages civil, MEP, joinery, partition, and finishing works seamlessly on site." },
    { num: "04", title: "Quality Check & Handover", desc: "We conduct a thorough inspection and snagging process to ensure flawless move-in delivery." }
  ];

  const industries = [
    "Commercial Offices", "Retail Stores & Boutiques", "Residential Villas & Apartments",
    "Restaurants & Cafes", "Hotels & Hospitality", "Educational Facilities",
    "Healthcare Clinics", "Corporate Showrooms"
  ];

  const faqs = [
    {
      q: "What does Emrald Ace's interior fit-out service cover?",
      a: "Our services cover commercial interiors, office and retail fit-outs, residential interiors, acoustic partitions, painting, joinery, aluminium works, false ceilings, flooring, custom carpentry, and architectural glass works."
    },
    {
      q: "Does Emrald Ace deliver projects across all Emirates?",
      a: "Yes, Emrald Ace delivers commercial, retail, and residential fit-out projects across the entire UAE."
    },
    {
      q: "Does interior fit-out include MEP and civil work?",
      a: "Yes, our fit-out projects integrate seamlessly with our in-house MEP engineering and general contracting capabilities whenever civil, electrical, or mechanical scope is required."
    }
  ];

  return (
    <main className="bg-[#030712] text-slate-100 min-h-screen font-sans selection:bg-[#0b63c5] selection:text-white pt-0 overflow-x-hidden">
      {/* Structural Schema for SEO/AEO/GEO */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbSchema, serviceSchema]) }} 
      />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-14 md:pb-20 overflow-hidden bg-[#030712]">
        {/* Ambient Top Glow - Matches transparent header seamlessly */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] md:w-[1000px] h-[350px] md:h-[500px] bg-gradient-to-b from-[#0b63c5]/30 via-[#0b63c5]/10 to-transparent blur-[120px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Badges Bar */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 mb-6 sm:mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-semibold bg-slate-900/90 border border-slate-700 text-slate-100 shadow-md backdrop-blur-md">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0b63c5]" />
              ISO 45001:2018 Certified
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-semibold bg-slate-900/90 border border-slate-700 text-slate-100 shadow-md backdrop-blur-md">
              <Calendar className="w-3.5 h-3.5 text-[#0b63c5]" />
              Operating Since 2014
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Title & Actions */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12] text-white">
                Interior Fit-Out Solutions Across the <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-sky-400">UAE</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl mx-auto lg:mx-0">
                Functional, modern, and aesthetically pleasing interior environments — expertly designed and delivered for commercial and residential spaces.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
                <a
                  href="#contact"
                  className="w-full sm:w-auto px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl bg-[#0b63c5] hover:bg-[#0b63c5]/90 text-white font-bold text-xs sm:text-sm transition-all shadow-lg shadow-[#0b63c5]/30 hover:shadow-[#0b63c5]/50 active:scale-95 flex items-center justify-center gap-2"
                >
                  <span>Get Fit-Out Plan</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </a>
              </div>
            </div>

            {/* Visual Media Block */}
            <div className="lg:col-span-5 space-y-3">
              <div className="relative h-[260px] sm:h-[360px] w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl group bg-slate-900">
                <Image
                  src="/interior-fit-out-solutions.webp"
                  alt="Interior Fit-Out Company UAE"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
              </div>

              <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl backdrop-blur-md transition-colors hover:border-[#0b63c5]">
                <div className="flex items-center gap-3">
                  <div className="p-2 sm:p-2.5 rounded-xl bg-[#0b63c5]/20 text-[#0b63c5] shrink-0">
                    <Building2 className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] sm:text-xs text-slate-300 font-medium">Serving Operations</p>
                    <p className="text-xs sm:text-sm font-bold text-white">All Across the UAE</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 border-y border-slate-800/80 py-6 sm:py-8 text-center">
            <div>
              <p className="text-xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">150+</p>
              <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1">Major Skilled Staffs</p>
            </div>
            <div>
              <p className="text-xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">160+</p>
              <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1">Major Projects Delivered</p>
            </div>
            <div>
              <p className="text-xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">2014</p>
              <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1">Established in UAE</p>
            </div>
            <div>
              <p className="text-xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">Turnkey</p>
              <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1">Civil & MEP Integration</p>
            </div>
          </div>

        </div>
      </section>

      {/* --- QUICK ANSWER SECTION (AEO Optimized) --- */}
      <section className="py-8 bg-slate-950/70 border-y border-slate-900/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-5 sm:p-7 rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/50 border border-slate-800 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#0b63c5]/10 rounded-full blur-2xl pointer-events-none" />
            <div className="flex flex-col md:flex-row gap-3 items-start md:items-center justify-between">
              <div className="space-y-1.5">
                <span className="text-[11px] sm:text-xs font-extrabold text-[#0b63c5] uppercase tracking-wider">Quick Summary</span>
                <p className="text-xs sm:text-base text-slate-100 leading-relaxed max-w-5xl font-normal">
                  Interior fit-out is the complete process of constructing and furnishing internal spaces — including structural partitions, ceilings, flooring, joinery, and MEP integrations — into functional, move-in-ready environments. Emrald Ace provides comprehensive fit-out services for commercial offices, retail outlets, and residential properties across the UAE.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHAT'S INCLUDED SECTION --- */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white">What's Included in Our Interior Fit-Out</h2>
            <p className="text-xs sm:text-sm text-slate-300">Comprehensive interior engineering, custom joinery, and architectural finishes managed by one expert team.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 auto-rows-fr">
            {includedServices.map((service, idx) => {
              const IconComp = service.icon;
              return (
                <div 
                  key={idx} 
                  className="p-5 sm:p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-[#0b63c5] transition-all duration-300 flex flex-col justify-between group shadow-md"
                >
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between">
                      <div className="p-3 rounded-xl bg-[#0b63c5]/10 text-[#0b63c5] group-hover:bg-[#0b63c5] group-hover:text-white transition-colors">
                        <IconComp className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-400">0{idx + 1}</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-sky-300 transition-colors">{service.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">{service.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* --- WHY EMRALD ACE --- */}
      <section className="py-12 sm:py-16 bg-slate-950/80 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-4 text-center lg:text-left">
              <span className="text-xs font-bold text-[#0b63c5] uppercase tracking-wider">The Advantage</span>
              <h2 className="text-2xl sm:text-4xl font-black text-white">Why Emrald Ace</h2>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                We combine creative space optimization with rigorous MEP and civil engineering coordination. Managing all trades end-to-end eliminates scheduling delays and guarantees high-grade finish quality.
              </p>

              <div className="relative h-[200px] sm:h-[260px] w-full rounded-2xl overflow-hidden border border-slate-700/80 mt-4 bg-slate-900 shadow-xl">
                <Image
                  src="/interior-fit-out-solutions-2.webp"
                  alt="Emrald Ace Fit-Out Craftsmanship"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              {whyChooseUs.map((reason, idx) => (
                <div key={idx} className="p-3.5 sm:p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3 hover:border-[#0b63c5] transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-[#0b63c5] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-100 font-medium leading-snug">{reason}</span>
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
            <p className="text-xs sm:text-sm text-slate-300">Our structured 4-step fit-out delivery framework</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {steps.map((step, idx) => (
              <div 
                key={idx} 
                className="relative p-5 sm:p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3 hover:border-[#0b63c5] transition-colors"
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
      <section className="py-10 sm:py-12 bg-slate-950/70 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <div className="text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-black text-white">Sectors We Serve</h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">Tailored fit-out solutions for commercial and residential properties across the UAE</p>
          </div>

          <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-3">
            {industries.map((ind, idx) => (
              <div key={idx} className="px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs sm:text-sm font-semibold text-slate-100 hover:border-[#0b63c5] transition-all shadow-sm">
                {ind}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-12 sm:py-16 bg-slate-950/80 border-t border-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-4xl font-black text-white">Frequently Asked Questions</h2>
            <p className="text-xs sm:text-sm text-slate-300">Key information regarding our interior fit-out services</p>
          </div>

          <div className="divide-y divide-slate-800 rounded-2xl bg-slate-900/60 border border-slate-800 p-4 sm:p-8 backdrop-blur-sm">
            {faqs.map((faq, idx) => (
              <FAQAccordion key={idx} faq={faq} />
            ))}
          </div>
        </div>
      </section>

      {/* --- CALL TO ACTION (CTA) --- */}
      <section id="contact" className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-900 border border-slate-700 p-6 sm:p-12 overflow-hidden shadow-2xl text-center">
            
            <div className="relative z-10 max-w-3xl mx-auto space-y-5">
              <h2 className="text-2xl sm:text-4xl font-black text-white">
                Get a Tailored Interior Fit-Out Plan for Your Property
              </h2>
              <p className="text-xs sm:text-base text-slate-200">
                Connect with our team today to discuss space planning, custom joinery, partitions, MEP integration, or full turnkey fit-out execution across the UAE.
              </p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}