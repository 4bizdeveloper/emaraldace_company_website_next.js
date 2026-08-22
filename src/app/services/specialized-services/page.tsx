'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  ShieldCheck, 
  Calendar, 
  Building2,
  Lock,
  Layers,
  Sparkles,
  CheckCircle2,
  ChevronDown,
  ArrowRight
} from 'lucide-react';

// --- FAQ Accordion Component ---
function FAQAccordion({ faq }: { faq: { q: string; a: string } }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-800 transition-colors duration-200">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 sm:py-5 flex justify-between items-center text-left focus:outline-none group cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="text-base sm:text-lg font-bold text-slate-100 group-hover:text-cyan-400 transition-colors pr-4 leading-snug">
          {faq.q}
        </span>
        <div className={`p-2 rounded-full border border-slate-700 bg-slate-900/80 text-slate-300 group-hover:border-cyan-400 group-hover:text-cyan-400 transition-all duration-300 shrink-0 ${isOpen ? 'rotate-180 bg-cyan-500/10 text-cyan-400 border-cyan-400' : ''}`}>
          <ChevronDown className="w-4 h-4" />
        </div>
      </button>
      <div 
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100 pb-5' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden text-sm sm:text-base text-slate-200 leading-relaxed pl-1">
          {faq.a}
        </div>
      </div>
    </div>
  );
}

export default function SpecializedServicesPage() {
  // Breadcrumb Schema for Search Engines, AI Engines, and GEO crawlers
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
        "name": "Smart Access, Automation & Outdoor Solutions",
        "item": "https://www.emraldace.com/services/specialized-services"
      }
    ]
  };

  // Service Schema for Search Engine, AI & GEO Optimization
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Smart Access, Automation & Outdoor Solutions",
    "provider": {
      "@type": "Organization",
      "name": "Emrald Ace General Contracting & Electromechanical",
      "url": "https://www.emraldace.com",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "UAE"
      }
    },
    "areaServed": ["United Arab Emirates", "Abu Dhabi", "Dubai", "Sharjah"],
    "description": "Specialized facility services across the UAE — CCTV, parking access control, automatic gates, waterproofing, epoxy flooring, artificial turf, landscaping, and exterior structural maintenance."
  };

  const smartAccessItems = [
    {
      title: "Parking Access Control",
      desc: "Automated systems including barriers, ticketing, and license plate recognition to efficiently manage vehicle entry and exit while strengthening security."
    },
    {
      title: "Automatic & Remote Control Gates",
      desc: "Motorized gates operated via remote control or automated triggers for vehicular and pedestrian access points, enhancing access control and safety."
    },
    {
      title: "CCTV Systems",
      desc: "Comprehensive surveillance camera networks covering entry points, perimeters, and common areas, equipped with customized monitoring solutions."
    }
  ];

  const outdoorSurfaceItems = [
    {
      title: "Waterproofing",
      desc: "Advanced waterproofing membranes and protective coatings for roofs, basements, and exposed structures to prevent moisture infiltration."
    },
    {
      title: "Epoxy Flooring",
      desc: "High-durability, chemical-resistant epoxy floor coatings engineered for industrial facilities, commercial spaces, and high-traffic areas."
    },
    {
      title: "Artificial Turf & Landscaping",
      desc: "Premium artificial turf installations alongside full-scope softscaping and grounds maintenance for long-lasting outdoor aesthetic appeal."
    },
    {
      title: "Exterior Structural Repairs & Coatings",
      desc: "Facade restoration, concrete repair, anti-carbonation treatments, and protective sealants designed to endure harsh regional climates."
    }
  ];

  const whyChooseUs = [
    "Smart Access & Outdoor expertise consolidated under one team",
    "Highly qualified engineering and technical specialists",
    "Customized service execution plans for every site",
    "Preventive, planned approach ensuring long-term asset value",
    "Integration of modern automation technologies",
    "Rapid response for critical operations and support",
    "Transparent reporting and clear client communication",
    "Safety-driven, ISO 45001-certified operational standards",
    "Sustainable and quality-assured service delivery",
    "Single point of accountability from consultation to completion"
  ];

  const steps = [
    { num: "01", title: "Site Assessment", desc: "We evaluate structural conditions, site requirements, and project scope on location." },
    { num: "02", title: "Proposal & Plan", desc: "A detailed operational scope, implementation schedule, and transparent estimate are structured." },
    { num: "03", title: "Mobilization", desc: "Dedicated personnel, heavy equipment, and material resources are deployed." },
    { num: "04", title: "Delivery & Handover", desc: "Execution is completed to strict quality standards and handed over following full inspection." }
  ];

  const industries = [
    "Commercial Offices", "Residential Communities", "Healthcare Facilities", 
    "Hospitality & Hotels", "Retail Centers", "Industrial Sites", 
    "Government Entities", "Warehouses & Logistics", "Educational Institutions"
  ];

  const faqs = [
    {
      q: "What specialized services does Emrald Ace offer?",
      a: "Emrald Ace provides parking access control, automated gates, CCTV surveillance networks, waterproofing, epoxy flooring, exterior structural repairs, smart building systems, and professional landscaping."
    },
    {
      q: "Does Emrald Ace deliver services across all emirates in the UAE?",
      a: "Yes, our specialized engineering and technical teams deliver turnkey services to commercial, industrial, and residential facilities across the entire UAE."
    },
    {
      q: "Are these services available as standalone projects?",
      a: "Yes, our specialized solutions can be executed as standalone turnkey projects or integrated within broader Annual Maintenance Contracts (AMC)."
    },
    {
      q: "How do outdoor coating and waterproofing systems withstand UAE weather?",
      a: "We utilize industrial-grade, weather-resilient membranes, anti-carbonation coatings, and UV-stabilized materials engineered specifically for harsh environmental conditions."
    }
  ];

  return (
    <main className="bg-[#030712] text-slate-100 min-h-screen font-sans selection:bg-[#0b63c5] selection:text-white pt-0 overflow-x-hidden">
      {/* Structured Data Injection */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbSchema, serviceSchema]) }} 
      />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-14 sm:pb-20 overflow-hidden bg-[#030712]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] bg-gradient-to-b from-[#0b63c5]/25 via-blue-600/10 to-transparent blur-[120px] pointer-events-none -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-3 mb-6 sm:mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-900/90 border border-slate-700 text-slate-200 shadow-sm backdrop-blur-md">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              ISO 45001:2018 Certified
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-900/90 border border-slate-700 text-slate-200 shadow-sm backdrop-blur-md">
              <Calendar className="w-3.5 h-3.5 text-cyan-400" />
              Operating Since 2014
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-white">
                Specialized Services — Smart Access, Automation & Outdoor Solutions
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl mx-auto lg:mx-0">
                Parking access control, automatic gates, CCTV networks, waterproofing, epoxy flooring, landscaping, and exterior structural treatments for properties across the UAE.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2.5 sm:gap-4 pt-2">
                <a
                  href="#contact"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#0b63c5] hover:bg-[#0950a0] text-white font-semibold text-xs sm:text-sm transition-all shadow-lg shadow-[#0b63c5]/30 active:scale-95 flex items-center justify-center gap-2"
                >
                  Explore Solutions
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-3">
              <div className="relative h-[260px] sm:h-[340px] md:h-[380px] w-full rounded-3xl overflow-hidden border border-slate-700 shadow-2xl group bg-slate-900">
                <Image
                  src="/specialized-service-1.webp"
                  alt="Smart Access, Automation & Outdoor Solutions UAE"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-95 brightness-105"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              </div>

              <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-900/90 border border-slate-700 shadow-xl backdrop-blur-md transition-colors hover:border-cyan-500/50">
                <div className="flex items-center gap-3">
                  <div className="p-2 sm:p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400 shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-300 font-medium">Coverage Area</p>
                    <p className="text-xs sm:text-sm font-bold text-white">Serving Facilities All Over UAE</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 border-y border-slate-800 py-6 sm:py-8 text-center">
            <div>
              <p className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">150+</p>
              <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1">Major Skilled Staff</p>
            </div>
            <div>
              <p className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">160+</p>
              <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1">Major Projects Delivered</p>
            </div>
            <div>
              <p className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">2014</p>
              <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1">Established in UAE</p>
            </div>
            <div>
              <p className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">24/7</p>
              <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1">Helpdesk & Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- QUICK ANSWER SECTION --- */}
      <section className="py-8 bg-slate-950/70 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-5 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/50 border border-slate-700 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              <div className="space-y-2">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Quick Answer</span>
                <p className="text-xs sm:text-sm md:text-base text-slate-100 leading-relaxed max-w-5xl">
                  Emrald Ace provides specialized technical solutions across two core pillars: <strong className="text-white font-semibold">Smart Access & Automation</strong> (parking access control, barrier systems, automated gates, and CCTV surveillance) and <strong className="text-white font-semibold">Outdoor & Surface Solutions</strong> (waterproofing, chemical-resistant epoxy flooring, landscaping, artificial turf, and structural protective coatings) throughout the United Arab Emirates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHAT'S INCLUDED SECTION --- */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
          
          <div className="text-center max-w-2xl mx-auto space-y-2.5">
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white">What's Included in Our Scope</h2>
            <p className="text-xs sm:text-sm text-slate-300">Targeted security, automation, and surface engineering engineered for asset protection.</p>
          </div>

          {/* Smart Access & Automation Block */}
          <div className="space-y-6 sm:space-y-8">
            <div className="flex flex-col sm:flex-row items-center justify-center text-center sm:text-left gap-3 border-b border-slate-800 pb-4 max-w-4xl mx-auto">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
                <Lock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg sm:text-2xl font-extrabold text-white">Smart Access & Automation</h3>
                <p className="text-xs sm:text-sm text-slate-300">Intelligent perimeter defense, barrier automation, and surveillance integration</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 auto-rows-fr">
              {smartAccessItems.map((item, idx) => (
                <div 
                  key={idx} 
                  className="p-5 sm:p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between group shadow-lg"
                >
                  <div className="space-y-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-800 text-cyan-400 flex items-center justify-center font-bold text-xs group-hover:bg-[#0b63c5] group-hover:text-white transition-colors">
                      0{idx + 1}
                    </div>
                    <h4 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Outdoor & Surface Solutions Block */}
          <div className="space-y-6 sm:space-y-8 pt-4">
            <div className="flex flex-col sm:flex-row items-center justify-center text-center sm:text-left gap-3 border-b border-slate-800 pb-4 max-w-4xl mx-auto">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg sm:text-2xl font-extrabold text-white">Outdoor & Surface Solutions</h3>
                <p className="text-xs sm:text-sm text-slate-300">Protective coatings, specialized flooring, grounds landscaping, and structural sealing</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center my-6 p-5 sm:p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="lg:col-span-7 space-y-3 text-center lg:text-left">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">High-Performance Exterior & Surface Engineering</span>
                <h4 className="text-base sm:text-xl font-bold text-white">Durable Industrial Coatings & Landscape Enhancement</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  From heavy-duty chemical-resistant epoxy floors in industrial hubs to weather-resilient waterproofing systems, protective exterior coatings, and artificial turf, our field teams deliver durable transformations tailored to UAE climate conditions.
                </p>
              </div>
              <div className="lg:col-span-5 space-y-2">
                <div className="relative h-44 sm:h-56 w-full rounded-xl overflow-hidden border border-slate-700 shadow-md bg-slate-900">
                  <Image
                    src="/specialized-service-2.webp"
                    alt="Epoxy Flooring and Waterproofing Application"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500 brightness-105"
                    sizes="(max-width: 1024px) 100vw, 35vw"
                  />
                </div>
                <div className="text-[11px] sm:text-xs font-semibold text-slate-100 bg-slate-950/90 backdrop-blur-md p-2.5 rounded-lg border border-slate-800 flex items-center justify-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  Weather-Resilient & Industrial Grade Treatments
                </div>
              </div>
            </div>

            {/* 4-Section Grid Layout for Outdoor & Surface Solutions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 auto-rows-fr">
              {outdoorSurfaceItems.map((item, idx) => (
                <div 
                  key={idx} 
                  className="p-5 sm:p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between group shadow-lg"
                >
                  <div className="space-y-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-800 text-cyan-400 flex items-center justify-center font-bold text-xs group-hover:bg-[#0b63c5] group-hover:text-white transition-colors">
                      0{idx + 1}
                    </div>
                    <h4 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* --- WHY EMRALD ACE --- */}
      <section className="py-12 sm:py-16 bg-slate-950/80 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-4 text-center lg:text-left">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">The Advantage</span>
              <h2 className="text-2xl sm:text-4xl font-black text-white">Why Emrald Ace</h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Whether executed as standalone projects or integrated into complete Facility Management contracts, our engineering team guarantees reliable standards and single-source accountability.
              </p>

              <div className="relative h-[220px] sm:h-[280px] w-full rounded-2xl overflow-hidden border border-slate-700 mt-4 sm:mt-6 bg-slate-900">
                <Image
                  src="/specialised-serive-3.webp"
                  alt="Emrald Ace Engineering Team"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700 ease-out brightness-105"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              {whyChooseUs.map((reason, idx) => (
                <div key={idx} className="p-3.5 sm:p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-start gap-3 hover:border-cyan-500/50 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-100 font-medium leading-snug">{reason}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* --- HOW IT WORKS --- */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-4xl font-black text-white">How It Works</h2>
            <p className="text-xs sm:text-sm text-slate-300">Our structured 4-step execution framework</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {steps.map((step, idx) => (
              <div 
                key={idx} 
                className="relative p-5 sm:p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2.5 hover:border-cyan-500/50 transition-colors"
              >
                <span className="text-3xl font-black text-cyan-400">{step.num}</span>
                <h3 className="text-base font-bold text-white">{step.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- INDUSTRIES WE SERVE --- */}
      <section className="py-10 sm:py-12 bg-slate-950/80 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-black text-white">Industries We Serve</h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">Tailored solutions for sectors across the entire UAE</p>
          </div>

          <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-3">
            {industries.map((ind, idx) => (
              <div key={idx} className="px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm font-semibold text-slate-200 hover:border-cyan-400 hover:text-white transition-all shadow-sm">
                {ind}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-12 sm:py-16 bg-slate-950/80 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-4xl font-black text-white">Frequently Asked Questions</h2>
            <p className="text-xs sm:text-sm text-slate-300">Key details regarding our Specialized Services</p>
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
          <div className="relative rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-[#0b63c5]/30 border border-slate-700 p-6 sm:p-10 lg:p-12 overflow-hidden shadow-2xl">
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              <div className="space-y-3 sm:space-y-4 max-w-3xl">
                <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-white">
                  Get a tailored Specialized Services plan for your property.
                </h2>
                <p className="text-xs sm:text-base text-slate-200">
                  Connect with our technical specialists to organize parking access, security systems, waterproof coatings, or exterior landscaping.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}