import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  ArrowRight, 
  Sparkles,
  PhoneCall,
  ChevronRight
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
      bg: "from-[#0B63C5] to-[#084B96]",
      image: "/integrated-facility-management-2.webp",
      desc: "Comprehensive Hard, Soft, and Specialized Facility Management solutions. We bring every essential service together under one accountable team."
    },
    {
      id: "amc",
      slug: "/services/amc",
      title: "Annual Maintenance Contracts (AMC)",
      tagline: "Protecting Your Assets Every Day.",
      bg: "from-[#FF6A00] to-[#E05D00]",
      image: "/annual-maintenance-contracts.webp",
      desc: "Tailored AMC packages for residential, commercial, and industrial facilities. Combining scheduled preventive servicing with 24/7 rapid response."
    },
    {
      id: "interior",
      slug: "/services/interior",
      title: "Interior Fit-Out Solutions",
      tagline: "Creating Inspiring & Functional Workspaces.",
      bg: "from-slate-900 to-slate-800",
      image: "/interior-fit-out-solutions-2.webp",
      desc: "Complete turnkey architectural interior design, custom joinery, glass partition walls, acoustic ceilings, and space optimization across the UAE."
    },
    {
      id: "mep",
      slug: "/services/mep",
      title: "MEP Engineering Services",
      tagline: "Integrated Mechanical, Electrical & Plumbing Excellence.",
      bg: "from-[#0B63C5] to-[#084B96]",
      image: "/mep-engineering-services-2.webp",
      desc: "Full lifecycle HVAC, power distribution, life safety fire systems, and low-voltage electrical engineering installations designed for maximum longevity."
    },
    {
      id: "civil",
      slug: "/services/civil",
      title: "General Contracting & Specialized Civil",
      tagline: "Comprehensive Civil Construction & Smart Access Solutions.",
      bg: "from-[#FF6A00] to-[#E05D00]",
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
    <section className="pt-32 pb-16 bg-slate-950 text-white min-h-screen">
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Hero Section Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center text-xs font-semibold text-slate-400 space-x-2">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-blue-400">Services</span>
        </nav>

        {/* Header Block */}
        <header className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs uppercase tracking-widest font-black text-blue-400 bg-blue-500/10 rounded-full border border-blue-500/30">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" /> Our Core Capability Matrix
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Integrated Engineering & Facility Solutions
          </h1>
          <p className="text-base sm:text-lg text-slate-400 font-normal">
            Precision electromechanical execution, proactive maintenance, and specialized contracting services across the UAE.
          </p>
        </header>

        {/* Concise Service Cards Matrix */}
        <div className="flex flex-wrap justify-center -m-4">
          {serviceOverviewList.map((service) => (
            <div 
              key={service.id} 
              className="p-4 w-full md:w-1/2 lg:w-1/3 flex"
            >
              <article className="w-full bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-slate-700 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  {/* Image Container */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image 
                      src={service.image} 
                      alt={service.title} 
                      fill 
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                  </div>

                  <div className="p-6 space-y-3">
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-blue-400 block">
                      {service.tagline}
                    </span>
                    <h2 className="text-xl font-bold text-white leading-snug">
                      {service.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-400 font-normal leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>

                {/* Read More Action Button */}
                <div className="p-6 pt-4">
                  <Link 
                    href={service.slug}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all duration-300 shadow-md group-hover:shadow-blue-500/20"
                  >
                    <span>Read Full Details</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            </div>
          ))}
        </div>

        {/* CTA Banner with added top spacing (mt-8 sm:mt-12) to create clear distance from cards */}
        <div className="mt-8 sm:mt-12 bg-gradient-to-r from-[#0B63C5] to-[#084B96] rounded-3xl p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl font-black">Need a Customized Technical Proposal?</h3>
            <p className="text-xs sm:text-sm text-blue-100">Consult with our Abu Dhabi engineering division today.</p>
          </div>
          <a 
            href="tel:+971528976025" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#0B63C5] font-extrabold rounded-xl hover:bg-blue-50 transition-colors shrink-0 text-xs uppercase tracking-wider"
          >
            <PhoneCall className="w-4 h-4" /> Connect With Us
          </a>
        </div>

      </div>
    </section>
  );
}