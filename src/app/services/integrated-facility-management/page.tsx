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
  Building2,
  FolderCheck,
  MapPin,
  Check
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
        <span className="text-base font-semibold text-slate-100 group-hover:text-[#0b63c5] transition-colors pr-4">
          {faq.q}
        </span>
        <div className={`p-2 rounded-full border border-slate-800 bg-slate-900/50 text-slate-400 group-hover:border-[#0b63c5]/40 group-hover:text-[#0b63c5] transition-all duration-300 shrink-0 ${isOpen ? 'rotate-180 bg-[#0b63c5]/10 text-[#0b63c5]' : ''}`}>
          <ChevronDown className="w-4 h-4" />
        </div>
      </button>
      <div 
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100 pb-5' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden text-sm text-slate-400 leading-relaxed pl-1">
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

  // Service Schema for Advanced AI Search & SEO
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Integrated Facility Management",
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
    "description": "Comprehensive Hard FM, Soft FM, and Specialized Facility Management solutions in Abu Dhabi and across the UAE."
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
    <main className="bg-[#030712] text-slate-100 min-h-screen font-sans selection:bg-[#0b63c5] selection:text-white pt-20 overflow-x-hidden">
      {/* Structural Structured Data Injection for Search Engine & AI Optimization */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbSchema, serviceSchema]) }} 
      />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-8 md:pt-12 pb-16 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] md:w-[900px] h-[350px] md:h-[450px] bg-gradient-to-tr from-[#0b63c5]/20 via-blue-500/10 to-transparent blur-[140px] rounded-full pointer-events-none -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 md:gap-3 mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-slate-900/90 border border-slate-800 text-slate-300 shadow-sm backdrop-blur-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0b63c5]" />
              ISO 45001:2018 Certified
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-slate-900/90 border border-slate-800 text-slate-300 shadow-sm backdrop-blur-sm">
              <Award className="w-3.5 h-3.5 text-[#0b63c5]" />
              UAE Trade Licensed
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-slate-900/90 border border-slate-800 text-slate-300 shadow-sm backdrop-blur-sm">
              <Calendar className="w-3.5 h-3.5 text-[#0b63c5]" />
              Operating Since 2014
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-white">
                Integrated Facility Management in <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-[#0b63c5]">Abu Dhabi</span> & Across the UAE
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto lg:mx-0">
                One accountable team for Hard FM, Soft FM and Specialized FM — so your buildings run safely, efficiently and predictably, without juggling multiple contractors.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
                <a
                  href="#contact"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#0b63c5] hover:bg-[#0b63c5]/90 text-white font-semibold text-sm transition-all shadow-lg shadow-[#0b63c5]/25 hover:shadow-[#0b63c5]/40 active:scale-95 flex items-center justify-center gap-2"
                >
                  Schedule Consultation
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="tel:+971528976025"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-[#0b63c5]/50 text-slate-200 font-semibold text-sm transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#0b63c5]" />
                  +971 52 897 6025
                </a>
              </div>
            </div>

            {/* --- HERO IMAGE COLUMN (TEXT OVERLAY REMOVED FROM IMAGE & PLACED BELOW) --- */}
            <div className="lg:col-span-5 space-y-3">
              <div className="relative h-[320px] sm:h-[380px] w-full rounded-3xl overflow-hidden border border-slate-800/80 shadow-2xl group bg-slate-900">
                <Image
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
                  alt="Integrated Facility Management Abu Dhabi"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>

              {/* Relocated Location Badge Box Outside / Below Image */}
              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800/90 shadow-xl backdrop-blur-md transition-colors hover:border-[#0b63c5]/40">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#0b63c5]/20 text-[#0b63c5] shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Headquartered in</p>
                    <p className="text-sm font-bold text-white">Musaffah, Abu Dhabi, UAE</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 border-y border-slate-800/80 py-8 text-center">
            <div>
              <p className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">35+</p>
              <p className="text-xs sm:text-sm text-slate-400 font-medium mt-1">Engineering & FM Staff</p>
            </div>
            <div>
              <p className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">22+</p>
              <p className="text-xs sm:text-sm text-slate-400 font-medium mt-1">Projects Delivered</p>
            </div>
            <div>
              <p className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">2014</p>
              <p className="text-xs sm:text-sm text-slate-400 font-medium mt-1">Established in UAE</p>
            </div>
            <div>
              <p className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">24/7</p>
              <p className="text-xs sm:text-sm text-slate-400 font-medium mt-1">Helpdesk & Emergency</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- QUICK ANSWER SECTION --- */}
      <section className="py-8 bg-slate-950/60 border-y border-slate-900/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-slate-900/40 border border-[#0b63c5]/25 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#0b63c5]/10 rounded-full blur-2xl pointer-events-none" />
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              <div className="space-y-2">
                <span className="text-xs font-bold text-[#0b63c5] uppercase tracking-wider">Quick Answer</span>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-5xl">
                  Integrated Facility Management (IFM) combines <strong className="text-white font-semibold">Hard FM</strong> (mechanical, electrical, HVAC, civil, fire safety, BMS), <strong className="text-white font-semibold">Soft FM</strong> (cleaning, pest control, waste, concierge, landscaping) and <strong className="text-white font-semibold">Specialized FM</strong> (asset & energy management, smart building systems) under one accountable team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHAT'S INCLUDED SECTION --- */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white">What's Included in Our IFM Solutions</h2>
            <p className="text-sm text-slate-400">Complete end-to-end facility services designed for operational excellence.</p>
          </div>

          {/* Hard FM Block */}
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row items-center justify-center text-center sm:text-left gap-3 border-b border-slate-800 pb-4 max-w-4xl mx-auto">
              <div className="p-2.5 rounded-xl bg-[#0b63c5]/10 text-[#0b63c5] shrink-0">
                <Wrench className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">Hard Facility Management</h3>
                <p className="text-xs text-slate-400">Core electro-mechanical, HVAC, structural and life safety maintenance</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
              {hardFmItems.map((item, idx) => (
                <div 
                  key={idx} 
                  className={`p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-[#0b63c5]/40 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-[#0b63c5]/5 ${
                    idx === hardFmItems.length - 1 && hardFmItems.length % 3 !== 0 ? 'sm:col-span-2 lg:col-span-3' : ''
                  }`}
                >
                  <div className="space-y-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-800/80 text-[#0b63c5] flex items-center justify-center font-bold text-xs group-hover:bg-[#0b63c5] group-hover:text-white transition-colors">
                      0{idx + 1}
                    </div>
                    <h4 className="text-base font-bold text-white group-hover:text-[#0b63c5] transition-colors">{item.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft FM Block with Center-Aligned 2-Column Row & Content-Integrated Visual */}
          <div className="space-y-8 pt-4">
            <div className="flex flex-col sm:flex-row items-center justify-center text-center sm:text-left gap-3 border-b border-slate-800 pb-4 max-w-4xl mx-auto">
              <div className="p-2.5 rounded-xl bg-[#0b63c5]/10 text-[#0b63c5] shrink-0">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">Soft Facility Management</h3>
                <p className="text-xs text-slate-400">Environmental, hygiene, front-of-house and grounds upkeep</p>
              </div>
            </div>

            {/* High-Quality Visual Feature integrated with text content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center my-6 p-6 rounded-2xl bg-slate-900/30 border border-slate-800/80">
              <div className="lg:col-span-7 space-y-3 text-center lg:text-left">
                <span className="text-xs font-bold text-[#0b63c5] uppercase tracking-wider">Premium Soft FM Execution</span>
                <h4 className="text-lg sm:text-xl font-bold text-white">Hospitality-Grade Commercial Cleaning & Environmental Maintenance</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Our Soft FM division deploys specialized eco-friendly equipment, non-toxic sanitization, and certified hospitality managers to elevate asset value, occupant health, and corporate prestige across UAE properties.
                </p>
              </div>
              <div className="lg:col-span-5 space-y-2">
                <div className="relative h-48 sm:h-56 w-full rounded-xl overflow-hidden border border-slate-800 shadow-md bg-slate-900">
                  <Image
                    src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80"
                    alt="Commercial Cleaning and Soft Facility Services"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 35vw"
                  />
                </div>
                <div className="text-[11px] font-semibold text-slate-200 bg-slate-950/80 backdrop-blur-md p-2.5 rounded-lg border border-slate-800 flex items-center justify-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#0b63c5]" />
                  Sustainable & Hygiene Certified Soft Services
                </div>
              </div>
            </div>

            {/* Row 1: 3 Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {softFmItemsRow1.map((item, idx) => (
                <div 
                  key={idx} 
                  className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-[#0b63c5]/40 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-[#0b63c5]/5"
                >
                  <div className="space-y-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-800/80 text-[#0b63c5] flex items-center justify-center font-bold text-xs group-hover:bg-[#0b63c5] group-hover:text-white transition-colors">
                      0{idx + 1}
                    </div>
                    <h4 className="text-base font-bold text-white group-hover:text-[#0b63c5] transition-colors">{item.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Row 2: 2 Items Strictly Centered for Desktop & Tablet */}
            <div className="flex flex-col sm:flex-row justify-center items-stretch gap-6">
              {softFmItemsRow2.map((item, idx) => (
                <div 
                  key={idx} 
                  className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-[#0b63c5]/40 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-[#0b63c5]/5"
                >
                  <div className="space-y-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-800/80 text-[#0b63c5] flex items-center justify-center font-bold text-xs group-hover:bg-[#0b63c5] group-hover:text-white transition-colors">
                      0{idx + 4}
                    </div>
                    <h4 className="text-base font-bold text-white group-hover:text-[#0b63c5] transition-colors">{item.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Specialized FM Block */}
          <div className="space-y-8 pt-4">
            <div className="flex flex-col sm:flex-row items-center justify-center text-center sm:text-left gap-3 border-b border-slate-800 pb-4 max-w-4xl mx-auto">
              <div className="p-2.5 rounded-xl bg-[#0b63c5]/10 text-[#0b63c5] shrink-0">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">Specialized Facility Management</h3>
                <p className="text-xs text-slate-400">Advanced IoT monitoring, asset lifecycle intelligence and 24/7 helpdesk</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
              {specializedFmItems.map((item, idx) => (
                <div 
                  key={idx} 
                  className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-[#0b63c5]/40 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-[#0b63c5]/5"
                >
                  <div className="space-y-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-800/80 text-[#0b63c5] flex items-center justify-center font-bold text-xs group-hover:bg-[#0b63c5] group-hover:text-white transition-colors">
                      0{idx + 1}
                    </div>
                    <h4 className="text-base font-bold text-white group-hover:text-[#0b63c5] transition-colors">{item.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* --- WHY EMRALD ACE --- */}
      <section className="py-16 bg-slate-950 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-4 text-center lg:text-left">
              <span className="text-xs font-bold text-[#0b63c5] uppercase tracking-wider">The Advantage</span>
              <h2 className="text-2xl sm:text-4xl font-black text-white">Why Emrald Ace for Integrated FM?</h2>
              <p className="text-sm text-slate-400 leading-relaxed">
                By consolidating all building services under a single roof, we eliminate vendor friction, lower operating overheads, and guarantee single-point accountability.
              </p>

              <div className="relative h-[240px] sm:h-[280px] w-full rounded-2xl overflow-hidden border border-slate-800/80 mt-6 bg-slate-900">
                <Image
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
                  alt="Emrald Ace Engineering Team"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyChooseUs.map((reason, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-start gap-3 hover:border-[#0b63c5]/40 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-[#0b63c5] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-200 font-medium leading-snug">{reason}</span>
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
            <p className="text-sm text-slate-400">Our structured 4-step deployment process</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <div 
                key={idx} 
                className="relative p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 space-y-3 hover:border-[#0b63c5]/40 transition-colors"
              >
                <span className="text-3xl font-black text-[#0b63c5]">{step.num}</span>
                <h3 className="text-base font-bold text-white">{step.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- INDUSTRIES WE SERVE --- */}
      <section className="py-12 bg-slate-950/60 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-black text-white">Industries We Serve</h2>
            <p className="text-xs text-slate-400 mt-1">Tailored solutions for sectors across Abu Dhabi & UAE</p>
          </div>

          <div className="flex flex-wrap justify-center sm:justify-start gap-2.5 sm:gap-3">
            {industries.map((ind, idx) => (
              <div key={idx} className="px-4 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-xs sm:text-sm font-semibold text-slate-300 hover:border-[#0b63c5] hover:text-white transition-all shadow-sm">
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
            <p className="text-sm text-slate-400">Demonstrated excellence across commercial, retail, and civil facilities</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {projects.map((proj, idx) => (
              <div 
                key={idx} 
                className="group p-6 rounded-2xl bg-gradient-to-b from-slate-900/80 to-slate-900/30 border border-slate-800 hover:border-[#0b63c5]/50 transition-all duration-300 flex flex-col justify-between relative overflow-hidden shadow-lg"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-[#0b63c5]/10 text-[#0b63c5]">
                      <FolderCheck className="w-5 h-5" />
                    </div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#0b63c5] bg-[#0b63c5]/10 px-2.5 py-1 rounded-md border border-[#0b63c5]/20">
                      <MapPin className="w-3 h-3" />
                      {proj.location}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-[#0b63c5] transition-colors leading-snug">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-2">
                      Client: <span className="text-slate-200 font-medium">{proj.client}</span>
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1 text-slate-300">
                    <Check className="w-3.5 h-3.5 text-[#0b63c5]" /> Verified Delivery
                  </span>
                  <span className="font-mono text-[10px] text-slate-500">PROJ-0{idx + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-16 bg-slate-950 border-t border-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-4xl font-black text-white">Frequently Asked Questions</h2>
            <p className="text-sm text-slate-400">Everything you need to know about Integrated Facility Management</p>
          </div>

          <div className="divide-y divide-slate-800 rounded-2xl bg-slate-900/30 border border-slate-800 p-6 sm:p-8 backdrop-blur-sm">
            {faqs.map((faq, idx) => (
              <FAQAccordion key={idx} faq={faq} />
            ))}
          </div>
        </div>
      </section>

      {/* --- CALL TO ACTION (CTA) --- */}
      <section id="contact" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-[#0b63c5]/30 border border-[#0b63c5]/30 p-8 sm:p-12 overflow-hidden shadow-2xl">
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-center lg:text-left">
              <div className="lg:col-span-8 space-y-4">
                <h2 className="text-2xl sm:text-4xl font-black text-white">
                  Let's Build Better Environments Together
                </h2>
                <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto lg:mx-0">
                  Schedule a consultation with our team and get a tailored Integrated Facility Management plan for your property.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col space-y-3">
                <a
                  href="mailto:sales1@emraldace.com"
                  className="px-6 py-3.5 rounded-xl bg-[#0b63c5] hover:bg-[#0b63c5]/90 text-white font-semibold text-sm transition-all text-center flex items-center justify-center gap-2 shadow-lg active:scale-95"
                >
                  <Mail className="w-4 h-4" />
                  sales1@emraldace.com
                </a>
                <a
                  href="tel:+971528976025"
                  className="px-6 py-3.5 rounded-xl bg-slate-950/80 border border-slate-700 hover:border-slate-500 text-white font-semibold text-sm transition-all text-center flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#0b63c5]" />
                  Call: +971 52 897 6025
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}