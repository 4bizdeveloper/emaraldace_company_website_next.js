'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  ShieldCheck, 
  Award, 
  Calendar, 
  ChevronDown, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  Mail, 
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
    "name": "Interior Fit-Out Company in Abu Dhabi, UAE",
    "provider": {
      "@type": "Organization",
      "name": "Emrald Ace General Contracting & Electromechanical",
      "url": "https://www.emraldace.com",
      "telephone": "+971528976025",
      "email": "sales1@emraldace.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Musaffah Industrial",
        "addressLocality": "Musaffah",
        "addressRegion": "Abu Dhabi",
        "postalCode": "00000",
        "addressCountry": "AE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 24.3477,
        "longitude": 54.5020
      }
    },
    "areaServed": [
      { "@type": "City", "name": "Abu Dhabi" },
      { "@type": "City", "name": "Dubai" },
      { "@type": "Country", "name": "United Arab Emirates" }
    ],
    "description": "Commercial & residential interior fit-out in Abu Dhabi, UAE — office & retail fit-out, partitions, joinery, false ceilings, flooring & full turnkey execution."
  };

  const includedServices = [
    {
      icon: Building2,
      title: "Commercial Interiors",
      desc: "Full interior build-out for offices and commercial spaces, taken from empty shell to move-in ready. Covers space planning, partition layouts, ceiling and lighting design, flooring, and finishing works tailored to how the business operates — reception areas, workstations, meeting rooms, break-out zones, storage. Emrald Ace coordinates civil, electrical, and finishing trades under one team, giving clients a single point of contact from design handover to final snagging."
    },
    {
      icon: LayoutGrid,
      title: "Office Fit-Out",
      desc: "End-to-end workplace fit-out, from partitions to finishes, designed to support how teams work day to day. Includes workstation layouts, meeting and huddle rooms, cabling and power points for IT infrastructure, acoustic partitioning, ceiling and lighting upgrades, and branded finishing touches. Scheduled to minimize disruption for occupied offices, with phased handover available."
    },
    {
      icon: Sparkles,
      title: "Retail Fit-Out",
      desc: "Store and outlet fit-out built for brand and footfall, designed to reflect brand identity while guiding customer flow toward key display and checkout areas. Covers shopfront and signage coordination, display fixtures, flooring and lighting suited to retail environments, changing rooms or service counters, and fast-turnaround scheduling for tight opening-day deadlines."
    },
    {
      icon: Home,
      title: "Residential Interiors",
      desc: "Tailored interior finishing for homes and apartments, from full villa interiors to individual room renovations. Includes wall finishes and painting, flooring, false ceilings, custom joinery (wardrobes, kitchen units, cabinetry), bathroom and kitchen finishing, and coordination with plumbing and electrical works."
    },
    {
      icon: Layers,
      title: "Partitions & False Ceilings",
      desc: "Space planning executed through partitions, ceilings and layout design. Includes drywall and glass partitions for zoning offices or retail areas, acoustic partitioning for meeting rooms, and false ceiling systems (gypsum, grid, or specialty designs) that conceal MEP services while improving lighting and acoustics."
    },
    {
      icon: Paintbrush,
      title: "Flooring, Joinery & Glass Works",
      desc: "A combined finishing package covering flooring (tiles, vinyl, epoxy, wood, laminate), carpentry and joinery (custom furniture, cabinetry, reception counters, wall paneling), aluminium works (framing, partitions, external cladding), and glass works (partition glazing, glass doors, shopfronts, decorative glass). Typically the final-stage trades giving a fit-out its finished look."
    }
  ];

  const whyChooseUs = [
    "Turnkey interior fit-out solutions from shell to move-in ready",
    "Single point of contact for civil, MEP, and decorative finishes",
    "Expertise across commercial, retail, and residential sectors",
    "Acoustic and ergonomic designs optimized for workplace productivity",
    "Custom joinery, glass, and bespoke architectural finishing",
    "Fast-turnaround schedules with phased handover options",
    "Strict compliance with UAE safety and building codes",
    "Transparent pricing and detailed scope management"
  ];

  const steps = [
    { num: "01", title: "Site Assessment & Space Planning", desc: "We review site dimensions, layout specs, and architectural requirements." },
    { num: "02", title: "Tailored Design & Proposal", desc: "Detailed scope, material selections, layout plans, and cost estimates." },
    { num: "03", title: "Execution & Trade Coordination", desc: "Civil, MEP, joinery, partitions, and finishing executed seamlessly." },
    { num: "04", title: "Quality Check & Handover", desc: "Rigorous snagging inspection and seamless move-in delivery." }
  ];

  const industries = [
    "Commercial Offices", "Retail Stores & Boutiques", "Residential Villas & Apartments",
    "Restaurants & Cafes", "Hotels & Hospitality", "Educational Facilities",
    "Healthcare Clinics", "Corporate Showrooms"
  ];

  const faqs = [
    {
      q: "What does Emrald Ace's interior fit-out service cover?",
      a: "Commercial interiors, partitions, painting, joinery, aluminium works, residential interiors, office fit-out, retail fit-out, false ceilings, flooring, carpentry and glass works."
    },
    {
      q: "Does Emrald Ace do both office and retail fit-out?",
      a: "Yes — Emrald Ace delivers office fit-out and retail fit-out projects across the UAE."
    },
    {
      q: "Can Emrald Ace handle residential interior fit-out?",
      a: "Yes, alongside commercial interiors, Emrald Ace delivers residential interior fit-out tailored to homeowner requirements."
    },
    {
      q: "Does interior fit-out include MEP and civil work?",
      a: "Emrald Ace's fit-out projects are often combined with MEP Engineering and General Contracting services when a project needs civil, electrical or mechanical work alongside interiors."
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
              <Award className="w-3.5 h-3.5 text-[#0b63c5]" />
              UAE Trade Licensed
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
                Interior Fit-Out Solutions in <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-sky-400">Abu Dhabi</span> & the UAE
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl mx-auto lg:mx-0">
                Functional, modern and aesthetically pleasing interior environments — expertly designed and delivered for commercial and residential spaces.
              </p>

              {/* Action Buttons - Optimized for Mobile Screens */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
                <a
                  href="#contact"
                  className="w-full sm:w-auto px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl bg-[#0b63c5] hover:bg-[#0b63c5]/90 text-white font-bold text-xs sm:text-sm transition-all shadow-lg shadow-[#0b63c5]/30 hover:shadow-[#0b63c5]/50 active:scale-95 flex items-center justify-center gap-2"
                >
                  <span>Get Fit-Out Plan</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </a>
                <a
                  href="tel:+971528976025"
                  className="w-full sm:w-auto px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl bg-slate-900/90 border border-slate-700 hover:border-[#0b63c5] text-slate-100 hover:text-white font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 backdrop-blur-md"
                >
                  <Phone className="w-4 h-4 text-[#0b63c5] shrink-0" />
                  <span>+971 52 897 6025</span>
                </a>
              </div>
            </div>

            {/* Visual Media Block */}
            <div className="lg:col-span-5 space-y-3">
              <div className="relative h-[260px] sm:h-[360px] w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl group bg-slate-900">
                <Image
                  src="/interior-fit-out-solutions.webp"
                  alt="Interior Fit-Out Company Abu Dhabi"
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
                    <p className="text-[11px] sm:text-xs text-slate-300 font-medium">Headquartered in</p>
                    <p className="text-xs sm:text-sm font-bold text-white">Musaffah, Abu Dhabi, UAE</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 border-y border-slate-800/80 py-6 sm:py-8 text-center">
            <div>
              <p className="text-xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">35+</p>
              <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1">Specialized Craftsmen</p>
            </div>
            <div>
              <p className="text-xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">22+</p>
              <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1">Projects Delivered</p>
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
                  Interior fit-out is the full process of constructing and fitting the interior of a space — including partitions, ceilings, flooring, joinery, and MEP finishes — making it move-in ready. Emrald Ace provides interior fit-out solutions for corporate offices, retail spaces, and residential properties across Abu Dhabi and the UAE.
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
            <p className="text-xs sm:text-sm text-slate-300">Comprehensive interior engineering, custom joinery, and architectural finishes under one expert team.</p>
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
          <div className="relative rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-900 border border-slate-700 p-6 sm:p-12 overflow-hidden shadow-2xl">
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center text-center lg:text-left">
              <div className="lg:col-span-8 space-y-3">
                <h2 className="text-2xl sm:text-4xl font-black text-white">
                  Get a Tailored Interior Fit-Out Plan for Your Property
                </h2>
                <p className="text-xs sm:text-base text-slate-200 max-w-2xl mx-auto lg:mx-0">
                  Connect with our team today to discuss space planning, custom joinery, partitions, MEP integration, or full turnkey fit-out execution.
                </p>
              </div>

              {/* Mobile Concise CTA Buttons */}
              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
                <a
                  href="mailto:sales1@emraldace.com"
                  className="w-full px-5 py-3 sm:py-3.5 rounded-xl bg-[#0b63c5] hover:bg-[#0b63c5]/90 text-white font-bold text-xs sm:text-sm transition-all text-center flex items-center justify-center gap-2 shadow-lg active:scale-95"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  <span>sales1@emraldace.com</span>
                </a>
                <a
                  href="tel:+971528976025"
                  className="w-full px-5 py-3 sm:py-3.5 rounded-xl bg-slate-950 border border-slate-700 hover:border-[#0b63c5] text-white font-bold text-xs sm:text-sm transition-all text-center flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#0b63c5] shrink-0" />
                  <span>+971 52 897 6025</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}