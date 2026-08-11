import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  ArrowRight, 
  Sparkles,
  PhoneCall,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Building2
} from 'lucide-react';

export const metadata: Metadata = {
  title: "Engineering & Facility Management Services | Emrald Ace UAE",
  description: "Explore our core electromechanical, facility management, AMC, MEP, interior fit-out, and civil contracting solutions across Abu Dhabi and the UAE.",
  alternates: {
    canonical: "https://www.emraldace.com/services",
  },
};

export default function ServicesPage() {
  const serviceOverviewList = [
    {
      id: "ifm",
      slug: "/services/ifm",
      title: "Integrated Facility Management",
      tagline: "Smarter Facilities. Better Performance.",
      badge: "Full-Service FM",
      image: "/integrated-facility-management-2.webp",
      desc: "Comprehensive Hard, Soft, and Specialized Facility Management solutions. We bring every essential service together under one accountable team."
    },
    {
      id: "amc",
      slug: "/services/amc",
      title: "Annual Maintenance Contracts (AMC)",
      tagline: "Protecting Your Assets Every Day.",
      badge: "24/7 Rapid Response",
      image: "/annual-maintenance-contracts.webp",
      desc: "Tailored AMC packages for residential, commercial, and industrial facilities. Combining scheduled preventive servicing with 24/7 rapid response."
    },
    {
      id: "interior",
      slug: "/services/interior",
      title: "Interior Fit-Out Solutions",
      tagline: "Creating Inspiring & Functional Workspaces.",
      badge: "Turnkey Architecture",
      image: "/interior-fit-out-solutions-2.webp",
      desc: "Complete turnkey architectural interior design, custom joinery, glass partition walls, acoustic ceilings, and space optimization across the UAE."
    },
    {
      id: "mep",
      slug: "/services/mep",
      title: "MEP Engineering Services",
      tagline: "Integrated Mechanical, Electrical & Plumbing Excellence.",
      badge: "Licensed MEP Engineers",
      image: "/mep-engineering-services-2.webp",
      desc: "Full lifecycle HVAC, power distribution, life safety fire systems, and low-voltage electrical engineering installations designed for maximum longevity."
    },
    {
      id: "civil",
      slug: "/services/civil",
      title: "General Contracting & Specialized Civil",
      tagline: "Comprehensive Civil Construction & Smart Access Solutions.",
      badge: "Structural Solutions",
      image: "/general-contracting&specialized-civil.webp",
      desc: "Robust structural renovations, building additions, smart parking barriers, epoxy floor coatings, and commercial waterproofing."
    }
  ];

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
      }
    ]
  };

  return (
    <main className="relative pt-28 sm:pt-36 pb-20 bg-[#070b14] text-white min-h-screen overflow-hidden selection:bg-[#0b63c5] selection:text-white">
      {/* Search Engine & AI Structured Schema */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} 
      />

      {/* Decorative Glow Background Lights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] bg-gradient-to-b from-[#0b63c5]/15 via-blue-900/5 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-[#0b63c5]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">

        {/* Dynamic Header Block */}
        <header className="text-center max-w-3xl mx-auto space-y-4 sm:space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#0b63c5]/10 via-[#0b63c5]/20 to-[#0b63c5]/10 border border-[#0b63c5]/30 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
            <span className="text-xs uppercase tracking-widest font-extrabold text-blue-300">
              Our Core Capability Matrix
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-400">
            Integrated Engineering & Facility Solutions
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto">
            Precision electromechanical execution, proactive maintenance, and specialized contracting services across Abu Dhabi and the UAE.
          </p>

          {/* Quick Metrics Bar */}
          <div className="pt-2 flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-blue-400" /> ISO Certified Standards
            </span>
            <span className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-amber-400" /> 24/7 Rapid Response
            </span>
            <span className="flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-emerald-400" /> UAE-Wide Coverage
            </span>
          </div>
        </header>

        {/* Centered Symmetric Services Grid */}
        <div className="flex flex-wrap justify-center -m-3 sm:-m-4">
          {serviceOverviewList.map((service, idx) => (
            <div 
              key={service.id} 
              className="p-3 sm:p-4 w-full md:w-1/2 lg:w-1/3 flex"
            >
              <article 
                className="w-full group relative bg-slate-900/60 backdrop-blur-md border border-slate-800/80 rounded-3xl overflow-hidden hover:border-[#0b63c5]/60 transition-all duration-500 hover:shadow-2xl hover:shadow-[#0b63c5]/15 flex flex-col justify-between"
              >
                <div>
                  {/* Image Section */}
                  <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-950">
                    <Image 
                      src={service.image} 
                      alt={service.title} 
                      fill 
                      priority={idx < 3}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-[#070b14]/40 to-transparent" />
                    
                    {/* Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-300 bg-slate-950/80 backdrop-blur-md rounded-lg border border-slate-700/60 shadow-lg">
                        <CheckCircle2 className="w-3 h-3 text-blue-400" />
                        {service.badge}
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 space-y-3">
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-blue-400 block">
                      {service.tagline}
                    </span>
                    
                    <h2 className="text-xl font-bold text-white leading-snug group-hover:text-blue-200 transition-colors">
                      {service.title}
                    </h2>
                    
                    <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>

                {/* Concise Action Button (Normal Case, Brand Color #0b63c5, Auto Width) */}
                <div className="p-6 pt-2">
                  <Link 
                    href={service.slug}
                    aria-label={`Read full details about ${service.title}`}
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold normal-case text-white bg-[#0b63c5] hover:bg-[#084b96] rounded-xl transition-all duration-300 shadow-md shadow-[#0b63c5]/20 group-hover:shadow-[#0b63c5]/40 active:scale-[0.98]"
                  >
                    <span>Read full details</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            </div>
          ))}
        </div>

        {/* CTA Callout Banner */}
        <div className="relative mt-12 sm:mt-16 rounded-3xl overflow-hidden p-8 sm:p-10 border border-[#0b63c5]/30 bg-gradient-to-r from-blue-900/40 via-blue-800/30 to-indigo-900/40 backdrop-blur-xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left max-w-xl">
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Need a Customized Technical Proposal?
            </h3>
            <p className="text-xs sm:text-sm text-blue-100 font-normal">
              Consult directly with our Abu Dhabi engineering division to evaluate your facility requirements.
            </p>
          </div>

          <a 
            href="tel:+971528976025" 
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-white hover:bg-blue-50 text-[#0b63c5] font-black rounded-xl transition-all duration-300 shrink-0 text-xs normal-case shadow-xl hover:scale-105 active:scale-95"
          >
            <PhoneCall className="w-4 h-4 text-[#0b63c5]" /> 
            <span>Connect with us</span>
          </a>
        </div>

      </div>
    </main>
  );
}