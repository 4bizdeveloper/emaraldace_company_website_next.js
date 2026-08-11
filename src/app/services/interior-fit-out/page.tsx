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
  Layers,
  LayoutGrid,
  Paintbrush,
  Home,
  CheckSquare
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

export default function InteriorFitOutPage() {
  // Breadcrumb Schema (JSON-LD only - no visual HTML rendering)
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

  // Service Schema for Search Engines & AI Assistants
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
        "addressLocality": "Musaffah",
        "addressRegion": "Abu Dhabi",
        "addressCountry": "UAE"
      }
    },
    "areaServed": ["Abu Dhabi", "Dubai", "United Arab Emirates"],
    "description": "Commercial & residential interior fit-out in Abu Dhabi, UAE — office & retail fit-out, partitions, joinery, false ceilings, flooring & more."
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
                Interior Fit-Out Solutions in <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-[#0b63c5]">Abu Dhabi</span> & the UAE
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto lg:mx-0">
                Functional, modern and aesthetically pleasing interior environments — designed and delivered for commercial and residential requirements.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
                <a
                  href="#contact"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#0b63c5] hover:bg-[#0b63c5]/90 text-white font-semibold text-sm transition-all shadow-lg shadow-[#0b63c5]/25 hover:shadow-[#0b63c5]/40 active:scale-95 flex items-center justify-center gap-2"
                >
                  Get Fit-Out Plan
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

            <div className="lg:col-span-5 space-y-3">
              <div className="relative h-[320px] sm:h-[380px] w-full rounded-3xl overflow-hidden border border-slate-800/80 shadow-2xl group bg-slate-900">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                  alt="Interior Fit-Out Company Abu Dhabi"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>

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
              <p className="text-xs sm:text-sm text-slate-400 font-medium mt-1">Specialized Engineers & Craftsmen</p>
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
              <p className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">Turnkey</p>
              <p className="text-xs sm:text-sm text-slate-400 font-medium mt-1">Civil, MEP & Finish Coordination</p>
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
                  Interior fit-out is the process of designing and building the interior of a space — partitions, ceilings, flooring, joinery and finishes — to make it functional and ready for use. Emrald Ace delivers fit-out for offices, retail units and residential interiors across the UAE.
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
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white">What's Included in Our Interior Fit-Out</h2>
            <p className="text-sm text-slate-400">Comprehensive interior engineering, joinery, and architectural finishes under one team.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {includedServices.map((service, idx) => {
              const IconComp = service.icon;
              return (
                <div 
                  key={idx} 
                  className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-[#0b63c5]/40 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-[#0b63c5]/5"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="p-3 rounded-xl bg-[#0b63c5]/10 text-[#0b63c5] group-hover:bg-[#0b63c5] group-hover:text-white transition-colors">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-500">0{idx + 1}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-[#0b63c5] transition-colors">{service.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{service.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* --- WHY EMRALD ACE --- */}
      <section className="py-16 bg-slate-950 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-4 text-center lg:text-left">
              <span className="text-xs font-bold text-[#0b63c5] uppercase tracking-wider">The Advantage</span>
              <h2 className="text-2xl sm:text-4xl font-black text-white">Why Emrald Ace</h2>
              <p className="text-sm text-slate-400 leading-relaxed">
                We combine creative space optimization with rigorous engineering coordination. By handling civil, MEP, joinery, and finishes together, we reduce delays and ensure pristine craftsmanship.
              </p>

              <div className="relative h-[240px] sm:h-[280px] w-full rounded-2xl overflow-hidden border border-slate-800/80 mt-6 bg-slate-900">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
                  alt="Emrald Ace Fit-Out Craftsmanship"
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
            <p className="text-sm text-slate-400">Our structured 4-step delivery process</p>
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
            <h2 className="text-xl sm:text-2xl font-black text-white">Sectors We Serve</h2>
            <p className="text-xs text-slate-400 mt-1">Tailored fit-out solutions for commercial and residential properties across the UAE</p>
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
            <p className="text-sm text-slate-400">Demonstrated excellence across commercial, retail, and residential interiors</p>
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
            <h2 className="text-2xl sm:text-4xl font-black text-white">FAQs</h2>
            <p className="text-sm text-slate-400">Everything you need to know about our interior fit-out services</p>
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
                  Get a Tailored Interior Fit-Out Plan for Your Property
                </h2>
                <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto lg:mx-0">
                  Connect with our team today to discuss space planning, custom joinery, partitions, MEP integration, or full turnkey execution.
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
                  href="tel:+971 52 897 6025"
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