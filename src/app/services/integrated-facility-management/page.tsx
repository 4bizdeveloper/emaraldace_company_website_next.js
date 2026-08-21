'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  ShieldCheck, 
  Award, 
  Calendar, 
  Wrench, 
  Sparkles, 
  Cpu, 
  ChevronDown, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  Mail, 
  Building2
} from 'lucide-react';

// --- FAQ Accordion Component ---
function FAQAccordion({ faq }: { faq: { q: string; a: string } }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-800/80 transition-colors duration-200 last:border-b-0">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 sm:py-5 flex justify-between items-center text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0b63c5] rounded-lg group cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="text-sm sm:text-base font-semibold text-slate-100 group-hover:text-blue-400 transition-colors pr-3 leading-snug">
          {faq.q}
        </span>
        <div className={`p-2 rounded-full border border-slate-800 bg-slate-900/60 text-slate-300 group-hover:border-[#0b63c5]/50 group-hover:text-blue-400 transition-all duration-300 shrink-0 ${isOpen ? 'rotate-180 bg-[#0b63c5]/20 text-blue-400' : ''}`}>
          <ChevronDown className="w-4 h-4" />
        </div>
      </button>
      <div 
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100 pb-5' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden text-xs sm:text-sm text-slate-300 leading-relaxed pl-1">
          {faq.a}
        </div>
      </div>
    </div>
  );
}

export default function IFMPage() {
  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.emraldace.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://www.emraldace.com/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Integrated Facility Management",
        "item": "https://www.emraldace.com/services/integrated-facility-management"
      }
    ]
  };

  // Service Schema for Advanced AI Search & GEO Optimization
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Integrated Facility Management",
    "serviceType": "Facility Management",
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
    "areaServed": [
      { "@type": "City", "name": "Abu Dhabi" },
      { "@type": "City", "name": "Dubai" },
      { "@type": "Country", "name": "United Arab Emirates" }
    ],
    "description": "ISO 45001-certified Integrated Facility Management in Abu Dhabi & across the UAE. Hard FM, Soft FM & Specialized FM under one accountable team."
  };

  // FAQ Schema for Search Engines & AI Search
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Integrated Facility Management (IFM)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "IFM is a single-provider model combining Hard FM, Soft FM and Specialized FM under one accountable team, instead of managing separate vendors for each service."
        }
      },
      {
        "@type": "Question",
        "name": "What does Emrald Ace's IFM service include?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Hard FM (mechanical, electrical, HVAC, civil, fire safety, BMS, plumbing), Soft FM (cleaning, pest control, waste management, concierge, landscaping) and Specialized FM (asset management, energy management, smart FM, 24/7 helpdesk)."
        }
      },
      {
        "@type": "Question",
        "name": "Which areas does Emrald Ace serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Emrald Ace is headquartered in Musaffah, Abu Dhabi, and serves clients across the UAE, including Abu Dhabi and Dubai."
        }
      },
      {
        "@type": "Question",
        "name": "Is Emrald Ace certified for facility management?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — ISO 45001:2018 certified with a UAE Trade License, operating since 2014."
        }
      },
      {
        "@type": "Question",
        "name": "How is IFM different from an Annual Maintenance Contract?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An AMC covers scheduled maintenance for specific systems. IFM is broader, bundling Hard FM, Soft FM and Specialized FM under one provider."
        }
      }
    ]
  };

  const hardFmItems = [
    {
      title: "Mechanical Systems",
      desc: "Maintenance and servicing of core mechanical equipment that keeps a building running: HVAC units, chillers, pumps, air handling units (AHUs), and fan coil units (FCUs). Includes scheduled inspections, performance checks, and repairs to prevent breakdowns that disrupt occupant comfort or business operations."
    },
    {
      title: "Electrical Systems",
      desc: "Management of a facility's power infrastructure, including low-voltage and medium-voltage (LV/MV) systems, switchgear, uninterruptible power supplies (UPS), backup generators, and lighting systems. Regular testing and preventive checks reduce the risk of outages and keep systems compliant with safety standards."
    },
    {
      title: "HVAC Services",
      desc: "Ongoing preventive maintenance for heating, ventilation, and air conditioning systems, focused on maintaining air quality and improving energy efficiency. Covers filter changes, coil cleaning, refrigerant checks, and performance tuning to extend equipment life and control energy costs."
    },
    {
      title: "Civil & Building Fabric Maintenance",
      desc: "Upkeep of a building's structural and surface elements, including masonry repairs, painting, waterproofing, and façade maintenance. Regular inspection and repair work protects the building envelope from water ingress, wear, and weathering, preserving both appearance and structural integrity."
    },
    {
      title: "Fire & Life Safety Systems",
      desc: "Installation, testing, and maintenance of fire alarms, suppression systems, sprinklers, and life-safety equipment, backed by scheduled compliance testing to meet UAE Civil Defense requirements and keep occupants protected."
    },
    {
      title: "Building Management Systems (BMS)",
      desc: "Centralized monitoring and automation of a building's core systems — HVAC, lighting, security, and energy use — through a BMS platform, enabling real-time performance tracking and energy optimization across the facility."
    },
    {
      title: "Plumbing & Water Systems",
      desc: "Installation and maintenance of water supply lines, drainage systems, and wastewater management infrastructure, engineered to prevent leaks, blockages, and pressure issues."
    }
  ];

  const softFmItemsRow1 = [
    {
      title: "Housekeeping & Cleaning",
      desc: "Scheduled commercial cleaning programs covering interiors, common areas, and building exteriors. Cleaning schedules are tailored to foot traffic and facility type."
    },
    {
      title: "Glass & Façade Cleaning",
      desc: "Scheduled cleaning of glass surfaces and building façades for both high-rise and ground-level structures, using appropriate access equipment and safety protocols to maintain a clean, professional exterior appearance."
    },
    {
      title: "Pest & Waste Management",
      desc: "Preventive pest control programs designed to stop infestations before they start, paired with structured waste collection, segregation, and disposal coordination — keeping facilities compliant with health and environmental regulations."
    }
  ];

  const softFmItemsRow2 = [
    {
      title: "Concierge, Reception & Porter Services",
      desc: "Front-of-house staffing that manages visitor reception, mail and deliveries, and day-to-day porter support, giving tenants and visitors a consistently professional first point of contact."
    },
    {
      title: "Landscaping & Grounds Maintenance",
      desc: "Upkeep of outdoor and green spaces, including planting, irrigation, lawn care, and general grounds maintenance, keeping external areas presentable and well-maintained year-round."
    }
  ];

  const specializedFmItems = [
    {
      title: "Smart FM & Asset Management",
      desc: "Technology-driven facility oversight using CAFM (Computer-Aided Facility Management) software and IoT sensors to track asset condition, monitor energy consumption, and flag maintenance needs before they become failures."
    },
    {
      title: "Asset Management",
      desc: "Structured tracking of facility assets across their lifecycle — condition, maintenance history, and replacement planning — supporting better budgeting decisions and reducing unplanned equipment failure."
    },
    {
      title: "Energy Management",
      desc: "Monitoring and optimization of a facility's energy consumption through data tracking and performance benchmarking, helping reduce operating costs and improve sustainability performance."
    },
    {
      title: "24/7 Helpdesk & Emergency Response",
      desc: "Round-the-clock support desk for logging issues, dispatching technicians, and coordinating emergency response, ensuring urgent facility problems are addressed without delay regardless of time of day."
    }
  ];

  const whyChooseUs = [
    "Integrated Hard & Soft FM expertise under one team",
    "Experienced engineering professionals",
    "Customized service plans per project",
    "Preventive, planned approach to every job",
    "Advanced facility management technologies",
    "Fast emergency response",
    "Transparent monthly reporting",
    "Safety-driven, ISO 45001-certified operations",
    "Sustainable, quality-assured practices",
    "Single point of accountability, start to finish"
  ];

  const steps = [
    { num: "01", title: "Site Assessment", desc: "We evaluate scope, condition and requirements on site" },
    { num: "02", title: "Proposal & Plan", desc: "A tailored scope, schedule and cost estimate" },
    { num: "03", title: "Mobilization", desc: "Dedicated team, materials and permits arranged" },
    { num: "04", title: "Delivery & Handover", desc: "Work executed, quality-checked and signed off" }
  ];

  const industries = [
    "Commercial Offices", "Residential Communities", "Healthcare", 
    "Hotels", "Retail", "Industrial", 
    "Government", "Warehouse", "Education"
  ];

  const faqs = [
    {
      q: "What is Integrated Facility Management (IFM)?",
      a: "IFM is a single-provider model combining Hard FM, Soft FM and Specialized FM under one accountable team, instead of managing separate vendors for each service."
    },
    {
      q: "What does Emrald Ace's IFM service include?",
      a: "Hard FM (mechanical, electrical, HVAC, civil, fire safety, BMS, plumbing), Soft FM (cleaning, pest control, waste management, concierge, landscaping) and Specialized FM (asset management, energy management, smart FM, 24/7 helpdesk)."
    },
    {
      q: "Which areas does Emrald Ace serve?",
      a: "Emrald Ace is headquartered in Musaffah, Abu Dhabi, and serves clients across the UAE, including Abu Dhabi and Dubai."
    },
    {
      q: "Is Emrald Ace certified for facility management?",
      a: "Yes — ISO 45001:2018 certified with a UAE Trade License, operating since 2014."
    },
    {
      q: "How is IFM different from an Annual Maintenance Contract?",
      a: "An AMC covers scheduled maintenance for specific systems. IFM is broader, bundling Hard FM, Soft FM and Specialized FM under one provider."
    }
  ];

  return (
    <main className="bg-[#030712] text-slate-100 min-h-screen font-sans selection:bg-[#0b63c5] selection:text-white pt-0 overflow-x-clip">
      {/* Structural Structured Data Injection for Search Engines, GEO & AI Search */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbSchema, serviceSchema, faqSchema]) }} 
      />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-14 sm:pb-20 overflow-hidden bg-[#030712]">
        {/* Glowing Background Glow - Gradient adjusted for smooth top transition */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[320px] sm:w-[600px] md:w-[900px] h-[300px] md:h-[450px] bg-gradient-to-b from-[#0b63c5]/25 via-[#0b63c5]/10 to-transparent blur-[120px] md:blur-[150px] rounded-full pointer-events-none -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 mb-6 sm:mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-slate-900/90 border border-slate-800 text-slate-200 shadow-sm backdrop-blur-md">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              ISO 45001:2018 Certified
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-slate-900/90 border border-slate-800 text-slate-200 shadow-sm backdrop-blur-md">
              <Award className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              UAE Trade Licensed
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-slate-900/90 border border-slate-800 text-slate-200 shadow-sm backdrop-blur-md">
              <Calendar className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              Operating Since 2014
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.18] text-white">
                Integrated Facility Management in <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-blue-400">Abu Dhabi</span> & Across the UAE
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl mx-auto lg:mx-0">
                One accountable team for Hard FM, Soft FM and Specialized FM — so your buildings run safely, efficiently and predictably, without juggling multiple contractors.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
                <a
                  href="#contact"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#0b63c5] hover:bg-blue-600 text-white font-semibold text-sm transition-all shadow-lg shadow-[#0b63c5]/30 hover:shadow-[#0b63c5]/50 active:scale-98 flex items-center justify-center gap-2"
                >
                  Schedule Consultation
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </a>
                <a
                  href="tel:+971528976025"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900/90 border border-slate-700 hover:border-blue-400 text-slate-100 font-semibold text-sm transition-all flex items-center justify-center gap-2 active:scale-98"
                >
                  <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                  +971 52 897 6025
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-3">
              <div className="relative h-[260px] sm:h-[340px] lg:h-[380px] w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-800 shadow-2xl group bg-slate-900">
                <Image
                  src="/integrated-facility-management-1.webp"
                  alt="Integrated Facility Management Abu Dhabi"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-105 contrast-105"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-900/95 border border-slate-800 shadow-xl backdrop-blur-md transition-colors hover:border-[#0b63c5]/50">
                <div className="flex items-center gap-3">
                  <div className="p-2 sm:p-2.5 rounded-lg sm:rounded-xl bg-[#0b63c5]/20 text-blue-400 shrink-0">
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

          <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 border-y border-slate-800/80 py-6 sm:py-8 text-center">
            <div>
              <p className="text-2xl sm:text-4xl font-black text-white tracking-tight">35+</p>
              <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1">Engineering & FM Staff</p>
            </div>
            <div>
              <p className="text-2xl sm:text-4xl font-black text-white tracking-tight">22+</p>
              <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1">Projects Delivered</p>
            </div>
            <div>
              <p className="text-2xl sm:text-4xl font-black text-white tracking-tight">2014</p>
              <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1">Established in UAE</p>
            </div>
            <div>
              <p className="text-2xl sm:text-4xl font-black text-white tracking-tight">24/7</p>
              <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1">Helpdesk & Emergency</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- QUICK ANSWER SECTION --- */}
      <section className="py-6 sm:py-8 bg-slate-950/80 border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-5 sm:p-7 rounded-2xl bg-slate-900/90 border border-[#0b63c5]/30 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#0b63c5]/10 rounded-full blur-2xl pointer-events-none" />
            <div className="flex flex-col md:flex-row gap-3 items-start md:items-center justify-between">
              <div className="space-y-1.5">
                <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">Quick Answer</span>
                <p className="text-xs sm:text-base text-slate-200 leading-relaxed max-w-5xl">
                  Integrated Facility Management (IFM) combines <strong className="text-white font-semibold">Hard FM</strong> (mechanical, electrical, HVAC, civil, fire safety, BMS), <strong className="text-white font-semibold">Soft FM</strong> (cleaning, pest control, waste, concierge, landscaping) and <strong className="text-white font-semibold">Specialized FM</strong> (asset & energy management, smart building systems) under one accountable team.
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
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">What's Included in Our IFM Solutions</h2>
            <p className="text-xs sm:text-sm text-slate-300">Complete end-to-end facility services designed for operational excellence.</p>
          </div>

          {/* Hard FM Block */}
          <div className="space-y-6 sm:space-y-8">
            <div className="flex flex-col sm:flex-row items-center justify-center text-center sm:text-left gap-3 border-b border-slate-800/80 pb-4 max-w-4xl mx-auto">
              <div className="p-2.5 rounded-xl bg-[#0b63c5]/15 text-blue-400 shrink-0">
                <Wrench className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className="text-lg sm:text-2xl font-bold text-white">Hard Facility Management</h3>
                <p className="text-xs text-slate-300">Core electro-mechanical, HVAC, structural and life safety maintenance</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 auto-rows-fr">
              {hardFmItems.map((item, idx) => (
                <div 
                  key={idx} 
                  className={`p-5 sm:p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-[#0b63c5]/50 transition-all duration-300 flex flex-col justify-between group shadow-md hover:shadow-[#0b63c5]/10 ${
                    idx === hardFmItems.length - 1 && hardFmItems.length % 3 !== 0 ? 'sm:col-span-2 lg:col-span-3' : ''
                  }`}
                >
                  <div className="space-y-2.5">
                    <div className="w-7 h-7 rounded-lg bg-slate-800 text-blue-400 flex items-center justify-center font-bold text-xs group-hover:bg-[#0b63c5] group-hover:text-white transition-colors">
                      0{idx + 1}
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-blue-400 transition-colors">{item.title}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft FM Block */}
          <div className="space-y-6 sm:space-y-8 pt-2">
            <div className="flex flex-col sm:flex-row items-center justify-center text-center sm:text-left gap-3 border-b border-slate-800/80 pb-4 max-w-4xl mx-auto">
              <div className="p-2.5 rounded-xl bg-[#0b63c5]/15 text-blue-400 shrink-0">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className="text-lg sm:text-2xl font-bold text-white">Soft Facility Management</h3>
                <p className="text-xs text-slate-300">Environmental, hygiene, front-of-house and grounds upkeep</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center my-6 p-5 sm:p-6 rounded-2xl bg-slate-900/40 border border-slate-800">
              <div className="lg:col-span-7 space-y-2.5 text-center lg:text-left">
                <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">Premium Soft FM Execution</span>
                <h4 className="text-base sm:text-xl font-bold text-white">Hospitality-Grade Commercial Cleaning & Environmental Maintenance</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Our Soft FM division deploys specialized eco-friendly equipment, non-toxic sanitization, and certified hospitality managers to elevate asset value, occupant health, and corporate prestige across UAE properties.
                </p>
              </div>
              <div className="lg:col-span-5 space-y-2">
                <div className="relative h-44 sm:h-56 w-full rounded-xl overflow-hidden border border-slate-800 shadow-md bg-slate-900">
                  <Image
                    src="/hospitality-cleaning.webp"
                    alt="Commercial Cleaning and Soft Facility Services"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500 brightness-105"
                    sizes="(max-width: 1024px) 100vw, 35vw"
                  />
                </div>
                <div className="text-[11px] font-medium text-slate-200 bg-slate-950/90 backdrop-blur-md p-2 rounded-lg border border-slate-800 flex items-center justify-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  Sustainable & Hygiene Certified Soft Services
                </div>
              </div>
            </div>

            {/* Row 1: 3 Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {softFmItemsRow1.map((item, idx) => (
                <div 
                  key={idx} 
                  className="p-5 sm:p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-[#0b63c5]/50 transition-all duration-300 flex flex-col justify-between group shadow-md hover:shadow-[#0b63c5]/10"
                >
                  <div className="space-y-2.5">
                    <div className="w-7 h-7 rounded-lg bg-slate-800 text-blue-400 flex items-center justify-center font-bold text-xs group-hover:bg-[#0b63c5] group-hover:text-white transition-colors">
                      0{idx + 1}
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-blue-400 transition-colors">{item.title}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Row 2: 2 Items Centered for Desktop & Tablet */}
            <div className="flex flex-col sm:flex-row justify-center items-stretch gap-4 sm:gap-6">
              {softFmItemsRow2.map((item, idx) => (
                <div 
                  key={idx} 
                  className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] p-5 sm:p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-[#0b63c5]/50 transition-all duration-300 flex flex-col justify-between group shadow-md hover:shadow-[#0b63c5]/10"
                >
                  <div className="space-y-2.5">
                    <div className="w-7 h-7 rounded-lg bg-slate-800 text-blue-400 flex items-center justify-center font-bold text-xs group-hover:bg-[#0b63c5] group-hover:text-white transition-colors">
                      0{idx + 4}
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-blue-400 transition-colors">{item.title}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Specialized FM Block */}
          <div className="space-y-6 sm:space-y-8 pt-2">
            <div className="flex flex-col sm:flex-row items-center justify-center text-center sm:text-left gap-3 border-b border-slate-800/80 pb-4 max-w-4xl mx-auto">
              <div className="p-2.5 rounded-xl bg-[#0b63c5]/15 text-blue-400 shrink-0">
                <Cpu className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className="text-lg sm:text-2xl font-bold text-white">Specialized Facility Management</h3>
                <p className="text-xs text-slate-300">Advanced IoT monitoring, asset lifecycle intelligence and 24/7 helpdesk</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 auto-rows-fr">
              {specializedFmItems.map((item, idx) => (
                <div 
                  key={idx} 
                  className="p-5 sm:p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-[#0b63c5]/50 transition-all duration-300 flex flex-col justify-between group shadow-md hover:shadow-[#0b63c5]/10"
                >
                  <div className="space-y-2.5">
                    <div className="w-7 h-7 rounded-lg bg-slate-800 text-blue-400 flex items-center justify-center font-bold text-xs group-hover:bg-[#0b63c5] group-hover:text-white transition-colors">
                      0{idx + 1}
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-blue-400 transition-colors">{item.title}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* --- WHY EMRALD ACE --- */}
      <section className="py-12 sm:py-16 bg-slate-950/90 border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-3.5 text-center lg:text-left">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">The Advantage</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">Why Emrald Ace</h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                By consolidating all building services under a single roof, we eliminate vendor friction, lower operating overheads, and guarantee single-point accountability.
              </p>

              <div className="relative h-[220px] sm:h-[280px] w-full rounded-2xl overflow-hidden border border-slate-800 mt-4 bg-slate-900">
                <Image
                  src="/integrated-facility-management.webp"
                  alt="Emrald Ace Engineering Team"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700 ease-out brightness-105"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              {whyChooseUs.map((reason, idx) => (
                <div key={idx} className="p-3.5 sm:p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3 hover:border-[#0b63c5]/50 transition-colors">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-200 font-medium leading-snug">{reason}</span>
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
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">How It Works</h2>
            <p className="text-xs sm:text-sm text-slate-300">Our structured 4-step deployment process</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {steps.map((step, idx) => (
              <div 
                key={idx} 
                className="relative p-5 sm:p-6 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-2.5 hover:border-[#0b63c5]/50 transition-colors"
              >
                <span className="text-2xl sm:text-3xl font-black text-blue-400">{step.num}</span>
                <h3 className="text-sm sm:text-base font-bold text-white">{step.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- INDUSTRIES WE SERVE --- */}
      <section className="py-10 sm:py-12 bg-slate-950/80 border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5 sm:space-y-6">
          <div className="text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-extrabold text-white">Industries We Serve</h2>
            <p className="text-xs text-slate-300 mt-1">Tailored solutions for sectors across Abu Dhabi & UAE</p>
          </div>

          <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-3">
            {industries.map((ind, idx) => (
              <div key={idx} className="px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm font-semibold text-slate-200 hover:border-blue-400 hover:text-white transition-all shadow-sm">
                {ind}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-12 sm:py-16 bg-slate-950/80 border-t border-slate-800/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">FAQs</h2>
            <p className="text-xs sm:text-sm text-slate-300">Everything you need to know about Integrated Facility Management</p>
          </div>

          <div className="rounded-2xl bg-slate-900/50 border border-slate-800 p-5 sm:p-8 backdrop-blur-sm">
            {faqs.map((faq, idx) => (
              <FAQAccordion key={idx} faq={faq} />
            ))}
          </div>
        </div>
      </section>

      {/* --- CALL TO ACTION (CTA) --- */}
      <section id="contact" className="py-12 sm:py-16 bg-[#030712]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl sm:rounded-3xl bg-slate-900 border border-[#0b63c5]/40 p-6 sm:p-10 md:p-12 overflow-hidden shadow-2xl">
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center text-center lg:text-left">
              <div className="lg:col-span-8 space-y-3">
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                  Let's Build Better Environments Together
                </h2>
                <p className="text-xs sm:text-base text-slate-200 max-w-2xl mx-auto lg:mx-0">
                  Schedule a consultation with our team and get a tailored Integrated Facility Management plan for your property.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
                <a
                  href="mailto:sales@emraldace.com"
                  className="w-full px-5 py-3.5 rounded-xl bg-[#0b63c5] hover:bg-blue-600 text-white font-semibold text-sm transition-all text-center flex items-center justify-center gap-2 shadow-lg active:scale-98"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  sales@emraldace.com
                </a>
                <a
                  href="tel:+97126751747"
                  className="w-full px-5 py-3.5 rounded-xl bg-slate-950 border border-slate-700 hover:border-slate-500 text-white font-semibold text-sm transition-all text-center flex items-center justify-center gap-2 active:scale-98"
                >
                  <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                  +971 2 675 1747
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}