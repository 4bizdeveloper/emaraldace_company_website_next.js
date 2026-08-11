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
  Check,
  Zap,
  Flame,
  Droplet,
  Activity
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

export default function MEPPage() {
  // Breadcrumb Schema (JSON-LD Only - Format: Home > Services > Current Page Name)
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
        "name": "MEP Engineering",
        "item": "https://www.emraldace.com/services/mep-engineering"
      }
    ]
  };

  // Service Schema for Advanced AI Search & Search Engine Level SEO
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "MEP Engineering Services",
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
    "description": "MEP engineering contractor in Abu Dhabi, UAE — electrical, mechanical, HVAC, plumbing, fire fighting & building automation. ISO 45001 certified."
  };

  const mepIncludedItems = [
    {
      title: "Electrical Installation",
      desc: "Design and installation of power distribution systems, wiring, panel boards, and lighting circuits, built to UAE electrical codes and sized to match the facility's current and future load requirements.",
      icon: Zap
    },
    {
      title: "Mechanical Works",
      desc: "Installation and upkeep of core mechanical infrastructure supporting a building's operational systems, coordinated alongside HVAC and plumbing works.",
      icon: Wrench
    },
    {
      title: "HVAC System",
      desc: "Full-cycle HVAC delivery: design, equipment selection, installation, and commissioning, sized for the building's occupancy and climate demands, with energy efficiency built into the design.",
      icon: Cpu
    },
    {
      title: "Plumbing & Drainage",
      desc: "Installation of water supply lines, drainage systems, and wastewater management infrastructure, engineered to prevent leaks, blockages, and pressure issues.",
      icon: Droplet
    },
    {
      title: "Fire Fighting & Fire Alarm",
      desc: "Installation of fire suppression systems (sprinklers, hydrants) and fire alarm/detection systems, tested and commissioned to meet UAE Civil Defense compliance requirements.",
      icon: Flame
    },
    {
      title: "Building Automation & Commissioning",
      desc: "Integration of ELV (Extra-Low Voltage) systems and building automation controls for centralized monitoring of HVAC, lighting, and security, followed by formal testing and commissioning before handover.",
      icon: Activity
    }
  ];

  const whyChooseUs = [
    "Integrated Mechanical, Electrical & Plumbing expertise",
    "ISO 45001 certified & safety-first engineering team",
    "Full UAE Civil Defense compliance for life safety",
    "Seamless integration with fit-out & general contracting",
    "Energy-efficient HVAC design tailored to Gulf climate",
    "Rigorous testing and commissioning prior to handover",
    "Operating across Abu Dhabi, Dubai, and the broader UAE",
    "Single point of accountability from design to execution"
  ];

  const steps = [
    { num: "01", title: "Site Assessment & Design", desc: "We evaluate load demands, site parameters, and project compliance requirements." },
    { num: "02", title: "Engineering & Procurement", desc: "Detailed system modeling, material selection, and code-aligned design approval." },
    { num: "03", title: "Installation & Integration", desc: "Execution of electrical, HVAC, plumbing, and fire safety systems on site." },
    { num: "04", title: "Testing, Commissioning & Handover", desc: "Formal validation, Civil Defense compliance testing, and seamless client sign-off." }
  ];

  const industries = [
    "Commercial Offices", "Residential Towers", "Healthcare Facilities", 
    "Hotels & Hospitality", "Retail Centers", "Industrial Plants", 
    "Government Buildings", "Warehouses", "Educational Campuses"
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
      q: "What does MEP stand for and what does Emrald Ace's MEP service include?",
      a: "MEP stands for Mechanical, Electrical and Plumbing. Covers electrical installation, mechanical works, HVAC systems, plumbing and drainage, fire fighting and fire alarm systems, ELV systems, building automation, and testing and commissioning."
    },
    {
      q: "Does Emrald Ace handle fire fighting and fire alarm installation?",
      a: "Yes, fire fighting and fire alarm systems are part of Emrald Ace's MEP Engineering scope."
    },
    {
      q: "Does Emrald Ace provide testing and commissioning for MEP systems?",
      a: "Yes — included as the final stage of MEP Engineering delivery."
    },
    {
      q: "Can MEP Engineering be combined with fit-out or general contracting?",
      a: "Yes, frequently delivered alongside Interior Fit-Out and General Contracting on the same project."
    }
  ];

  return (
    <main className="bg-[#030712] text-slate-100 min-h-screen font-sans selection:bg-[#0b63c5] selection:text-white pt-20 overflow-x-hidden">
      {/* Structural Schema Injection for Search Engine, AI Search & Breadcrumbs */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbSchema, serviceSchema]) }} 
      />

      {/* Page Title & Meta Description context kept intact in HTML Metadata Head when rendered via Next.js Metadata API or Layout */}

      {/* --- HERO SECTION --- */}
      <section className="relative pt-8 md:pt-12 pb-16 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] md:w-[900px] h-[350px] md:h-[450px] bg-gradient-to-tr from-[#0b63c5]/20 via-blue-500/10 to-transparent blur-[140px] rounded-full pointer-events-none -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 md:gap-3 mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-slate-900/90 border border-slate-800 text-slate-300 shadow-sm backdrop-blur-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0b63c5]" />
              ISO 45001 Certified
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-slate-900/90 border border-slate-800 text-slate-300 shadow-sm backdrop-blur-sm">
              <Award className="w-3.5 h-3.5 text-[#0b63c5]" />
              UAE Code Compliant
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-slate-900/90 border border-slate-800 text-slate-300 shadow-sm backdrop-blur-sm">
              <Calendar className="w-3.5 h-3.5 text-[#0b63c5]" />
              Operating Since 2014
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-white">
                MEP Engineering Contractor in <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-[#0b63c5]">Abu Dhabi & the UAE</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto lg:mx-0">
                Integrated Mechanical, Electrical & Plumbing solutions — from installation through testing and commissioning.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
                <a
                  href="#contact"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#0b63c5] hover:bg-[#0b63c5]/90 text-white font-semibold text-sm transition-all shadow-lg shadow-[#0b63c5]/25 hover:shadow-[#0b63c5]/40 active:scale-95 flex items-center justify-center gap-2"
                >
                  Get a Tailored MEP Plan
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
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
                  alt="MEP Engineering Contractor Abu Dhabi UAE"
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
              <p className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">100%</p>
              <p className="text-xs sm:text-sm text-slate-400 font-medium mt-1">Civil Defense Compliant</p>
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
              <p className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">Full</p>
              <p className="text-xs sm:text-sm text-slate-400 font-medium mt-1">Testing & Commissioning</p>
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
                  MEP Engineering covers the design, installation and commissioning of a building's Mechanical, Electrical and Plumbing systems — HVAC, power, fire safety, drainage and building automation — delivered by Emrald Ace as an integrated service across the UAE.
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
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white">What's Included in Our MEP Scope</h2>
            <p className="text-sm text-slate-400">Complete, end-to-end electromechanical engineering and installation solutions.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {mepIncludedItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx} 
                  className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-[#0b63c5]/40 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-[#0b63c5]/5"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="p-2.5 rounded-xl bg-[#0b63c5]/10 text-[#0b63c5] group-hover:bg-[#0b63c5] group-hover:text-white transition-colors shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono text-slate-500 font-semibold">0{idx + 1}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-[#0b63c5] transition-colors">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{item.desc}</p>
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
              <span className="text-xs font-bold text-[#0b63c5] uppercase tracking-wider">The Engineering Advantage</span>
              <h2 className="text-2xl sm:text-4xl font-black text-white">Why Emrald Ace for MEP?</h2>
              <p className="text-sm text-slate-400 leading-relaxed">
                We combine precise electromechanical design with flawless site execution. Delivering safer, high-performance infrastructure built to withstand regional climate conditions.
              </p>

              <div className="relative h-[240px] sm:h-[280px] w-full rounded-2xl overflow-hidden border border-slate-800/80 mt-6 bg-slate-900">
                <Image
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
                  alt="Emrald Ace MEP Engineering Team"
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
            <h2 className="text-2xl sm:text-4xl font-black text-white">How We Deliver</h2>
            <p className="text-sm text-slate-400">Our systematic 4-step execution methodology</p>
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
            <p className="text-xs text-slate-400 mt-1">Tailored MEP solutions across commercial and industrial infrastructure</p>
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
            <p className="text-sm text-slate-400">Demonstrated excellence across commercial, educational, and public facilities</p>
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
                    <Check className="w-3.5 h-3.5 text-[#0b63c5]" /> MEP Execution Verified
                  </span>
                  <span className="font-mono text-[10px] text-slate-500">MEP-0{idx + 1}</span>
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
            <p className="text-sm text-slate-400">Everything you need to know about our MEP Engineering services</p>
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
                  Get a Tailored MEP Engineering Plan for Your Property
                </h2>
                <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto lg:mx-0">
                  Connect with our electromechanical specialists to discuss design, installation, or testing requirements across Abu Dhabi and the UAE.
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