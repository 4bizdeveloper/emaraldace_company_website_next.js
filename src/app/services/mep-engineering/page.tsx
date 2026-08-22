'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Award, 
  Calendar, 
  Wrench, 
  Cpu, 
  ChevronDown, 
  CheckCircle2, 
  Building2,
  Zap,
  Flame,
  Droplet,
  Activity,
  ArrowRight
} from 'lucide-react';

// --- FAQ Accordion Component ---
function FAQAccordion({ faq }: { faq: { q: string; a: string } }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-800/90 last:border-b-0 transition-colors duration-200">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 sm:py-5 flex justify-between items-center text-left focus:outline-none focus:ring-2 focus:ring-[#0b63c5] focus:ring-offset-2 focus:ring-offset-slate-950 rounded-lg group cursor-pointer transition-all"
        aria-expanded={isOpen}
      >
        <span className="text-sm sm:text-base font-semibold text-slate-100 group-hover:text-cyan-400 transition-colors pr-3">
          {faq.q}
        </span>
        <div className={`p-1.5 sm:p-2 rounded-full border border-slate-700 bg-slate-900/80 text-cyan-400 group-hover:border-[#0b63c5] group-hover:text-white transition-all duration-300 shrink-0 ${isOpen ? 'rotate-180 bg-[#0b63c5] text-white shadow-lg shadow-[#0b63c5]/30' : ''}`}>
          <ChevronDown className="w-4 h-4" />
        </div>
      </button>
      <div 
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100 pb-5' : 'grid-rows-[0fr] opacity-0 overflow-hidden'
        }`}
      >
        <div className="overflow-hidden text-xs sm:text-sm text-slate-300 leading-relaxed pl-1 pr-2">
          {faq.a}
        </div>
      </div>
    </div>
  );
}

export default function MEPPage() {
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
        "name": "MEP Engineering",
        "item": "https://www.emraldace.com/services/mep-engineering"
      }
    ]
  };

  // Service Schema for Advanced AI Search & Local GEO Optimization
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "MEP Engineering Services",
    "provider": {
      "@type": "Organization",
      "name": "Emrald Ace General Contracting & Electromechanical",
      "url": "https://www.emraldace.com",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "UAE"
      }
    },
    "areaServed": "United Arab Emirates",
    "description": "MEP engineering contractor across the UAE — delivering electrical, mechanical, HVAC, plumbing, fire fighting, and building automation solutions."
  };

  const mepIncludedItems = [
    {
      title: "Electrical Installation",
      desc: "Design and installation of power distribution systems, wiring, panel boards, and lighting circuits, built to UAE electrical codes and sized to match facility load requirements.",
      icon: Zap
    },
    {
      title: "Mechanical Works",
      desc: "Installation and upkeep of core mechanical infrastructure supporting operational systems, fully coordinated alongside HVAC and plumbing works.",
      icon: Wrench
    },
    {
      title: "HVAC Systems",
      desc: "Full-cycle HVAC delivery: design, equipment selection, installation, and commissioning, engineered specifically for building occupancy and Gulf climate demands.",
      icon: Cpu
    },
    {
      title: "Plumbing & Drainage",
      desc: "Installation of water supply lines, drainage systems, and wastewater management infrastructure engineered to prevent leaks and pressure drops.",
      icon: Droplet
    },
    {
      title: "Fire Fighting & Fire Alarm",
      desc: "Installation of fire suppression systems (sprinklers, hydrants) and detection systems, fully tested to meet UAE Civil Defense standards.",
      icon: Flame
    },
    {
      title: "Building Automation & Commissioning",
      desc: "Integration of ELV systems and building automation controls for centralized monitoring of HVAC, lighting, and security with complete handover.",
      icon: Activity
    }
  ];

  const whyChooseUs = [
    "Integrated Mechanical, Electrical, and Plumbing expertise",
    "ISO 45001 certified and safety-first engineering team",
    "Full UAE Civil Defense compliance for life safety systems",
    "Seamless integration with fit-out and general contracting",
    "Energy-efficient HVAC design tailored to Gulf climate",
    "Rigorous testing and commissioning prior to handover",
    "End-to-end service coverage across all seven Emirates",
    "Single point of accountability from design to execution"
  ];

  const steps = [
    { num: "01", title: "Site Assessment & Design", desc: "We evaluate load demands, site parameters, and project compliance requirements." },
    { num: "02", title: "Engineering & Procurement", desc: "Detailed system modeling, material selection, and code-aligned design approval." },
    { num: "03", title: "Installation & Integration", desc: "Precision execution of electrical, HVAC, plumbing, and fire safety systems on site." },
    { num: "04", title: "Testing & Handover", desc: "Formal validation, Civil Defense compliance testing, and seamless client sign-off." }
  ];

  const industries = [
    "Commercial Offices", "Residential Towers", "Healthcare Facilities", 
    "Hotels & Hospitality", "Retail Centers", "Industrial Plants", 
    "Government Buildings", "Warehouses", "Educational Campuses"
  ];

  const faqs = [
    {
      q: "What does MEP stand for and what does Emrald Ace's MEP service include?",
      a: "MEP stands for Mechanical, Electrical, and Plumbing. Our services cover electrical installations, mechanical works, HVAC systems, plumbing, drainage, fire fighting, fire alarm systems, ELV systems, building automation, and final testing and commissioning."
    },
    {
      q: "Does Emrald Ace handle fire fighting and fire alarm installation?",
      a: "Yes. Complete life-safety system engineering, including fire fighting sprinklers and Civil Defense-compliant fire alarms, is core to our MEP scope."
    },
    {
      q: "Does Emrald Ace provide testing and commissioning for MEP systems?",
      a: "Yes. Comprehensive testing, balancing, and commissioning are standard procedures prior to final project handover."
    },
    {
      q: "Can MEP Engineering be combined with fit-out or general contracting?",
      a: "Yes. We routinely manage turnkey solutions combining structural civil works, interior fit-outs, and complete MEP integration."
    }
  ];

  return (
    <main className="bg-[#030712] text-slate-100 min-h-screen font-sans selection:bg-[#0b63c5] selection:text-white pt-0 overflow-x-hidden">
      {/* Structural Schema Injection */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbSchema, serviceSchema]) }} 
      />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-14 sm:pb-16 overflow-hidden bg-[#030712]">
        {/* Blended Background Gradient Glow for Seamless Header Alignment */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-b from-[#0b63c5]/25 via-blue-600/10 to-transparent blur-[120px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Certifications Badges */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-3 mb-6 sm:mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 sm:py-1.5 rounded-full text-xs font-semibold bg-slate-900/90 border border-slate-700/80 text-cyan-300 shadow-sm backdrop-blur-md">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              ISO 45001 Certified
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 sm:py-1.5 rounded-full text-xs font-semibold bg-slate-900/90 border border-slate-700/80 text-cyan-300 shadow-sm backdrop-blur-md">
              <Calendar className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              Operating Since 2014
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-white">
                MEP Engineering Contractor in <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-cyan-400">the UAE</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl mx-auto lg:mx-0">
                Integrated Mechanical, Electrical & Plumbing solutions — from site execution to testing and handover across UAE.
              </p>
              
              {/* CTA Button */}

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
                <a
                  href="#contact"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#0b63c5] hover:bg-blue-600 text-white font-semibold text-sm transition-all shadow-lg shadow-[#0b63c5]/30 hover:shadow-[#0b63c5]/50 active:scale-98 flex items-center justify-center gap-2"
                >
                  Schedule Consultation
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </a>
              </div>
            </div>

            {/* Brightened & High Visibility Hero Image */}
            <div className="lg:col-span-5 space-y-3">
              <div className="relative h-[260px] sm:h-[340px] lg:h-[380px] w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl group bg-slate-900">
                <Image
                  src="/mep-engineering-services.webp"
                  alt="MEP Engineering Contractor UAE"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-110 contrast-105"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-900/90 border border-slate-700/80 shadow-xl backdrop-blur-md transition-colors hover:border-cyan-400/50">
                <div className="flex items-center gap-3">
                  <div className="p-2 sm:p-2.5 rounded-lg sm:rounded-xl bg-[#0b63c5]/20 text-cyan-400 shrink-0">
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

          {/* Stats Bar */}
          <div className="mt-10 sm:mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 border-y border-slate-800/90 py-6 sm:py-8 text-center">
            <div>
              <p className="text-xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">100%</p>
              <p className="text-xs sm:text-sm text-slate-300 font-medium mt-0.5 sm:mt-1">Civil Defense Compliant</p>
            </div>
            <div>
              <p className="text-xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">160+</p>
              <p className="text-xs sm:text-sm text-slate-300 font-medium mt-0.5 sm:mt-1">Major Projects</p>
            </div>
            <div>
              <p className="text-xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">150+</p>
              <p className="text-xs sm:text-sm text-slate-300 font-medium mt-0.5 sm:mt-1">Skilled Staffs</p>
            </div>
            <div>
              <p className="text-xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">Full</p>
              <p className="text-xs sm:text-sm text-slate-300 font-medium mt-0.5 sm:mt-1">Testing & Handover</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- QUICK ANSWER SECTION --- */}
      <section className="py-6 sm:py-8 bg-slate-950/80 border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-5 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/50 border border-cyan-500/30 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#0b63c5]/15 rounded-full blur-2xl pointer-events-none" />
            <div className="flex flex-col md:flex-row gap-3 sm:gap-4 items-start md:items-center justify-between">
              <div className="space-y-1.5 sm:space-y-2">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Quick Answer</span>
                <p className="text-xs sm:text-sm md:text-base text-slate-200 leading-relaxed max-w-5xl font-medium">
                  MEP Engineering covers the design, installation, and commissioning of a building's Mechanical, Electrical, and Plumbing systems — including HVAC, power, fire safety, drainage, and automation — delivered by Emrald Ace across the UAE.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHAT'S INCLUDED SECTION --- */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2.5">
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white">What's Included in Our MEP Scope</h2>
            <p className="text-xs sm:text-sm text-slate-300">Complete, end-to-end electromechanical engineering and installation solutions.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 auto-rows-fr">
            {mepIncludedItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx} 
                  className="p-5 sm:p-6 rounded-2xl bg-slate-900/70 border border-slate-800/90 hover:border-cyan-400/50 transition-all duration-300 flex flex-col justify-between group shadow-md hover:shadow-cyan-500/10"
                >
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between">
                      <div className="p-2.5 rounded-xl bg-[#0b63c5]/20 text-cyan-400 group-hover:bg-[#0b63c5] group-hover:text-white transition-colors shrink-0">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <span className="text-xs font-mono text-cyan-300/80 font-bold">0{idx + 1}</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* --- WHY EMRALD ACE --- */}
      <section className="py-12 sm:py-16 bg-slate-950 border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-3.5 text-center lg:text-left">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">The Engineering Advantage</span>
              <h2 className="text-2xl sm:text-4xl font-black text-white">Why Emrald Ace for MEP?</h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                We combine precise electromechanical design with flawless site execution to deliver safe, high-performance infrastructure built to withstand regional climate conditions.
              </p>

              <div className="relative h-[200px] sm:h-[280px] w-full rounded-2xl overflow-hidden border border-slate-700/80 mt-4 sm:mt-6 bg-slate-900">
                <Image
                  src="/mep-engineering-services-2.webp"
                  alt="Emrald Ace MEP Engineering Team"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700 ease-out brightness-105"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {whyChooseUs.map((reason, idx) => (
                <div key={idx} className="p-3.5 sm:p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-2.5 sm:gap-3 hover:border-cyan-400/50 transition-colors">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 shrink-0 mt-0.5" />
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
            <h2 className="text-2xl sm:text-4xl font-black text-white">How We Deliver</h2>
            <p className="text-xs sm:text-sm text-slate-300">Our systematic 4-step execution methodology</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {steps.map((step, idx) => (
              <div 
                key={idx} 
                className="relative p-5 sm:p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2.5 hover:border-cyan-400/50 transition-colors"
              >
                <span className="text-2xl sm:text-3xl font-black text-cyan-400">{step.num}</span>
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
            <h2 className="text-xl sm:text-2xl font-black text-white">Sectors We Serve</h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-0.5">Tailored MEP solutions across commercial and industrial infrastructure</p>
          </div>

          <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-3">
            {industries.map((ind, idx) => (
              <div key={idx} className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-slate-900 border border-slate-700/80 text-xs sm:text-sm font-semibold text-slate-200 hover:border-cyan-400 hover:text-white transition-all shadow-sm">
                {ind}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-12 sm:py-16 bg-slate-950 border-t border-slate-800/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-4xl font-black text-white">Frequently Asked Questions</h2>
            <p className="text-xs sm:text-sm text-slate-300">Everything you need to know about our MEP Engineering services</p>
          </div>

          <div className="rounded-2xl bg-slate-900/50 border border-slate-800 p-4 sm:p-8 backdrop-blur-sm">
            {faqs.map((faq, idx) => (
              <FAQAccordion key={idx} faq={faq} />
            ))}
          </div>
        </div>
      </section>

      {/* --- CALL TO ACTION (CTA) --- */}
      <section id="contact" className="py-12 sm:py-16 bg-[#030712]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-[#0b63c5]/30 border border-cyan-500/30 p-6 sm:p-12 overflow-hidden shadow-2xl">
            <div className="relative z-10 text-center space-y-3 sm:space-y-4 max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-4xl font-black text-white">
                Get a Tailored MEP Engineering Plan for Your Property
              </h2>
              <p className="text-xs sm:text-base text-slate-200">
                Connect with our electromechanical specialists to discuss your design, installation, or testing requirements across the United Arab Emirates.
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}