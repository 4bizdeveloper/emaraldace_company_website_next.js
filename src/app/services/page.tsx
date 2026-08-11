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
    <main className="relative bg-[#050811] text-white min-h-screen selection:bg-[#0b63c5] selection:text-white overflow-x-hidden">
      {/* Search Engine & AI Structured Schema */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} 
      />

      {/* Hero Section with First Service Background Image (Seamless Transition) */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Crisp Background Image Container */}
        <div className="absolute inset-0 z-0">
          <Image 
            src={serviceOverviewList[0].image}
            alt="Emrald Ace Engineering Hero Background"
            fill
            priority
            quality={95}
            sizes="100vw"
            className="object-cover object-center brightness-110 contrast-105"
          />
          {/* Subtle Balanced Light Gradients for High Readability and Visual Pop */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#050811]/90 via-[#050811]/60 to-[#050811]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050811] via-[#050811]/10 to-[#050811]/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto">
          <header className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-950/80 border border-blue-400/40 backdrop-blur-md shadow-lg">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-xs uppercase tracking-widest font-extrabold text-blue-300">
                Our Core Capability Matrix
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12] text-white drop-shadow-lg">
              Integrated Engineering & Facility Solutions
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-slate-100 font-medium leading-relaxed max-w-2xl drop-shadow-md">
              Precision electromechanical execution, proactive maintenance, and specialized contracting services across Abu Dhabi and the UAE.
            </p>

            {/* Quick Metrics Bar */}
            <div className="pt-4 flex flex-wrap gap-3 sm:gap-6 text-xs sm:text-sm font-medium text-slate-100">
              <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-950/80 border border-slate-700/60 backdrop-blur-md shadow-xl">
                <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" /> ISO Certified Standards
              </span>
              <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-950/80 border border-slate-700/60 backdrop-blur-md shadow-xl">
                <Zap className="w-4 h-4 text-amber-400 shrink-0" /> 24/7 Rapid Response
              </span>
              <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-950/80 border border-slate-700/60 backdrop-blur-md shadow-xl">
                <Building2 className="w-4 h-4 text-emerald-400 shrink-0" /> UAE-Wide Coverage
              </span>
            </div>
          </header>
        </div>
      </section>

      {/* Service Rows Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-20 sm:space-y-28">
        {serviceOverviewList.map((service, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <article 
              key={service.id} 
              className={`group flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                !isEven ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Vibrant Image Column (40% width) */}
              <div className="w-full lg:w-2/5 shrink-0">
                <div className="relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl shadow-blue-950/20 ring-1 ring-white/10 group-hover:ring-[#0b63c5]/50 transition-all duration-300">
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill 
                    priority={idx === 0}
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center brightness-100 contrast-100 group-hover:scale-105 transition-transform duration-500 ease-out" 
                  />
                  
                  {/* Glassmorphic Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-wider text-white bg-slate-950/80 backdrop-blur-md rounded-xl border border-white/20 shadow-xl">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      {service.badge}
                    </span>
                  </div>
                </div>
              </div>

              {/* Spaced Content Column (60% width) */}
              <div className="w-full lg:w-3/5 space-y-4 sm:space-y-6">
                <span className="inline-block text-xs font-black uppercase tracking-widest text-blue-400">
                  {service.tagline}
                </span>
                
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight group-hover:text-blue-200 transition-colors">
                  {service.title}
                </h2>
                
                <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
                  {service.desc}
                </p>

                <div className="pt-2">
                  <Link 
                    href={service.slug}
                    aria-label={`Read full details about ${service.title}`}
                    className="inline-flex items-center gap-2.5 px-6 py-3 text-xs sm:text-sm font-bold text-white bg-[#0b63c5] hover:bg-[#084b96] rounded-xl transition-all duration-300 shadow-md shadow-[#0b63c5]/20 group-hover:shadow-[#0b63c5]/40 active:scale-95"
                  >
                    <span>Read full details</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      {/* CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="relative rounded-3xl overflow-hidden p-8 sm:p-12 border border-[#0b63c5]/40 bg-gradient-to-r from-blue-950/80 via-blue-900/60 to-slate-900/90 backdrop-blur-2xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
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
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white hover:bg-blue-50 text-[#0b63c5] font-black rounded-xl transition-all duration-300 shrink-0 text-xs sm:text-sm normal-case shadow-xl hover:scale-105 active:scale-95"
          >
            <PhoneCall className="w-4.5 h-4.5 text-[#0b63c5] shrink-0" /> 
            <span>Connect with us</span>
          </a>
        </div>
      </section>
    </main>
  );
}