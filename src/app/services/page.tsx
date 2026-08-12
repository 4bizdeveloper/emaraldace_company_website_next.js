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
  Building2,
  Layers
} from 'lucide-react';

export const metadata: Metadata = {
  title: "Engineering & Facility Management Services | Emrald Ace UAE",
  description: "Explore core electromechanical, facility management, AMC, MEP, interior fit-out, civil contracting, and specialized automation solutions across Abu Dhabi and the UAE.",
  alternates: {
    canonical: "https://www.emraldace.com/services/",
  },
  openGraph: {
    title: "Engineering & Facility Management Services | Emrald Ace UAE",
    description: "Explore core electromechanical, facility management, AMC, MEP, interior fit-out, civil contracting, and specialized automation solutions across Abu Dhabi and the UAE.",
    url: "https://www.emraldace.com/services/",
    siteName: "Emrald Ace",
    locale: "en_US",
    type: "website",
  },
};

export default function ServicesPage() {
  const serviceOverviewList = [
    {
      id: "ifm",
      slug: "/services/integrated-facility-management/",
      title: "Integrated Facility Management",
      tagline: "Smarter Facilities. Better Performance.",
      badge: "ISO 45001 Certified",
      image: "/integrated-facility-management-2.webp",
      desc: "One accountable team for Hard FM, Soft FM, and Specialized FM (CAFM, Energy & Asset Management) so your buildings run safely, efficiently, and predictably without juggling multiple contractors."
    },
    {
      id: "amc",
      slug: "/services/annual-maintenance-contracts/",
      title: "Annual Maintenance Contracts (AMC)",
      tagline: "Protecting Your Assets Every Day.",
      badge: "24/7 Rapid Response",
      image: "/annual-maintenance-contract-1.webp",
      desc: "Scheduled inspections, planned preventive maintenance, emergency repairs, and monthly performance monitoring tailored to keep facility operations smooth and eliminate unexpected downtime."
    },
    {
      id: "interior",
      slug: "/services/interior-fit-out/",
      title: "Interior Fit-Out Solutions",
      tagline: "Creating Inspiring & Functional Workspaces.",
      badge: "Turnkey Design & Build",
      image: "/interior-fit-out-solution-2.webp",
      desc: "Functional, modern interior build-outs for commercial offices, retail outlets, and residential properties across the UAE—including partitions, false ceilings, custom joinery, flooring, and glass works."
    },
    {
      id: "mep",
      slug: "/services/mep-engineering/",
      title: "MEP Engineering Services",
      tagline: "Integrated Electrical, Mechanical & Plumbing Excellence.",
      badge: "Licensed MEP Engineers",
      image: "/mep-engineering-services-2.webp",
      desc: "Comprehensive engineering solutions covering HVAC, power distribution, plumbing, fire fighting, fire alarm systems, and building automation from design and installation to final testing and commissioning."
    },
    {
      id: "civil",
      slug: "/services/general-contracting/",
      title: "General Contracting Services",
      tagline: "Comprehensive Civil Construction & Structural Excellence.",
      badge: "Structural Solutions",
      image: "/general-contracting&specialized-civil.webp",
      desc: "End-to-end civil construction, complete building renovations, structural repairs, space extensions, and pre-construction planning delivered with precision across Abu Dhabi and the UAE."
    },
    {
      id: "specialized",
      slug: "/services/specialized-services/",
      title: "Specialized Services",
      tagline: "Smart Access, Automation & Outdoor Solutions.",
      badge: "Smart Automation",
      image: "/specialized-service-1.webp",
      desc: "High-performance facility enhancements including parking access control, automatic gates, CCTV networks, structural waterproofing, industrial epoxy flooring, artificial turf, and landscaping."
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
        "item": "https://www.emraldace.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://www.emraldace.com/services/"
      }
    ]
  };

  const serviceCatalogSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Engineering & Facility Management Services",
    "description": "Comprehensive list of engineering, facility management, AMC, MEP, interior fit-out, general contracting, and specialized automation services provided by Emrald Ace in the UAE.",
    "itemListElement": serviceOverviewList.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": service.title,
        "description": service.desc,
        "url": `https://www.emraldace.com${service.slug}`,
        "provider": {
          "@type": "Organization",
          "name": "Emrald Ace",
          "url": "https://www.emraldace.com/"
        }
      }
    }))
  };

  return (
    <main className="relative bg-[#030712] text-slate-100 min-h-screen selection:bg-[#0b63c5] selection:text-white overflow-x-hidden antialiased scroll-smooth">
      {/* Search Engine, AI Crawler & Server-Level Structured Data */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} 
      />
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceCatalogSchema) }} 
      />

      {/* Hero Section - Optimized Mobile/Tablet/Desktop Ultra-Modern Dynamic Layout */}
      <section className="relative w-full min-h-[85vh] lg:min-h-screen pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
          <Image 
            src={serviceOverviewList[0].image}
            alt="Emrald Ace Engineering Hero Background"
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover object-center brightness-105 contrast-105 opacity-80 scale-[1.01] transform-gpu will-change-transform"
          />
          {/* Subtle gradient overlay ensuring contrast, instant rendering, and zero layout shift */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/70 via-[#030712]/40 to-[#030712]" />
          <div className="absolute inset-0 bg-radial from-transparent via-[#030712]/30 to-[#030712]/90" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
          <header className="space-y-6 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-[#0b63c5]/40 backdrop-blur-xl shadow-lg shadow-[#0b63c5]/20">
              <Sparkles className="w-4 h-4 text-blue-400 shrink-0" />
              <span className="text-xs uppercase tracking-widest font-extrabold text-blue-300">
                Core Engineering & FM Capabilities
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-white drop-shadow-2xl max-w-4xl">
              Engineering & Facility Solutions in Abu Dhabi & Across the UAE
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-slate-100 font-medium leading-relaxed max-w-2xl drop-shadow-md">
              Integrated FM, AMC, MEP Engineering, Interior Fit-Out, General Contracting, and Smart Specialized Services delivered with precision since 2014.
            </p>

            <div className="pt-4 flex flex-wrap justify-center items-center gap-2.5 sm:gap-4 text-xs sm:text-sm font-medium text-slate-100">
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/80 border border-slate-700/60 backdrop-blur-md shadow-lg hover:border-[#0b63c5]/50 transition-colors">
                <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
                <span>ISO 45001:2018 Certified</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/80 border border-slate-700/60 backdrop-blur-md shadow-lg hover:border-amber-500/50 transition-colors">
                <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                <span>24/7 Rapid Response</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/80 border border-slate-700/60 backdrop-blur-md shadow-lg hover:border-emerald-500/50 transition-colors">
                <Building2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>UAE Trade Licensed</span>
              </div>
            </div>
          </header>
        </div>
      </section>

      {/* Service Rows Section - Borderless Modern Layout with Hardware Acceleration */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-16 lg:mt-24 pb-12 sm:pb-20 lg:pb-24 space-y-12 sm:space-y-20 lg:space-y-24">
        {serviceOverviewList.map((service, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <article 
              key={service.id} 
              className={`group flex flex-col lg:flex-row items-center gap-8 lg:gap-14 p-2 sm:p-4 rounded-3xl transition-all duration-300 ${
                !isEven ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Container */}
              <div className="w-full lg:w-5/12 shrink-0">
                <div className="relative isolate aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] w-full rounded-2xl overflow-hidden bg-[#030712]">
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill 
                    priority={idx === 0}
                    loading={idx === 0 ? "eager" : "lazy"}
                    quality={90}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 500px"
                    className="object-cover object-center scale-[1.02] group-hover:scale-105 transition-transform duration-500 ease-out transform-gpu will-change-transform" 
                  />

                  {/* Dark Edge Blend Gradient */}
                  <div className="absolute inset-0 rounded-2xl pointer-events-none ring-1 ring-inset ring-white/10" />

                  {/* Glassmorphic Badge */}
                  <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 z-10 pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-white bg-[#030712]/85 backdrop-blur-md rounded-xl border border-white/15 shadow-xl">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      {service.badge}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content Column */}
              <div className="w-full lg:w-7/12 flex flex-col justify-center space-y-4 sm:space-y-5 py-2">
                <div>
                  <span className="inline-block text-xs font-black uppercase tracking-widest text-[#0b63c5] mb-1">
                    {service.tagline}
                  </span>
                  
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight group-hover:text-blue-300 transition-colors">
                    {service.title}
                  </h2>
                </div>
                
                <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
                  {service.desc}
                </p>

                <div className="pt-2">
                  <Link 
                    href={service.slug}
                    aria-label={`Read full details about ${service.title}`}
                    className="inline-flex items-center gap-2.5 px-6 py-3 text-xs sm:text-sm font-bold text-white bg-[#0b63c5] hover:bg-[#084b96] active:bg-[#063870] rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 active:scale-[0.98] transform-gpu"
                  >
                    <span>Read full details</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      {/* Call to Action Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        <div className="relative rounded-3xl overflow-hidden p-6 sm:p-10 lg:p-12 bg-gradient-to-r from-blue-950/90 via-slate-900/90 to-blue-950/90 backdrop-blur-2xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
          <div className="space-y-2 text-center md:text-left max-w-xl">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight">
              Need a Customized Technical Proposal?
            </h3>
            <p className="text-xs sm:text-sm text-blue-100 font-normal">
              Consult directly with our Abu Dhabi engineering division to evaluate your facility requirements or request a free site assessment.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <a 
              href="tel:+971528976025" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-white hover:bg-blue-50 text-[#0b63c5] font-black rounded-xl transition-all duration-200 shrink-0 text-xs sm:text-sm shadow-xl hover:scale-[1.02] active:scale-[0.98] transform-gpu"
            >
              <PhoneCall className="w-4 h-4 text-[#0b63c5] shrink-0" /> 
              <span>Connect with us</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}