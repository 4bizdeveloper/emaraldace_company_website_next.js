import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import DynamicHomeContent from '@/app/DynamicHomeContent';

// 1. Dynamic Technical SEO & Metadata Configuration
export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const host = headersList.get('host') || 'localhost:3000';
  const protocol = headersList.get('x-forwarded-proto') || 'https';
  const currentUrl = `${protocol}://${host}`;

  return {
    title: 'Integrated Facility Management & MEP Services UAE | Emrald Ace',
    description: 'Emrald Ace delivers premium Integrated Facility Management, MEP Engineering, and Interior Fit-Out solutions across Abu Dhabi and the UAE.',
    metadataBase: new URL(currentUrl),
    alternates: {
      canonical: '/',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title: 'Integrated Facility Management & MEP Services UAE | Emrald Ace',
      description: 'Premier Integrated Facility Management, MEP Engineering, and Interior Fit-Out solutions across Abu Dhabi & UAE.',
      url: '/',
      siteName: 'Emrald Ace General Contracting & Electromechanical L.L.C',
      images: [
        {
          url: '/integrated-facility-management-2.webp',
          width: 1200,
          height: 630,
          alt: 'Emrald Ace Facility Management Services UAE',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Integrated Facility Management & MEP Services UAE | Emrald Ace',
      description: 'Premier Integrated Facility Management, MEP Engineering, and Interior Fit-Out solutions across Abu Dhabi & UAE.',
      images: ['/integrated-facility-management-2.webp'],
    },
  };
}

export default async function Home() {
  const headersList = await headers();
  const host = headersList.get('host') || 'localhost:3000';
  const protocol = headersList.get('x-forwarded-proto') || 'https';
  const baseUrl = `${protocol}://${host}`;

  const coreServices = [
    { 
      title: "Integrated Facility Management", 
      image: "/integrated-facility-management.webp",
      desc: "Combining engineering maintenance, workplace workflows, and technical operation networks into one single asset lifecycle team strategy." 
    },
    { 
      title: "Annual Maintenance Contracts (AMC)", 
      image: "/annual-maintenance-contract.webp",
      desc: "Customized preventative upkeep programs mapping out regular diagnostic checks with responsive emergency technical dispatch frameworks." 
    },
    { 
      title: "Interior Fit-Out Solutions", 
      image: "/interior-fit-out-solutions.webp",
      desc: "Designing functional, modern commercial offices, high-spec glass partition modules, joinery structural units, and false ceilings." 
    },
    { 
      title: "MEP Engineering Services", 
      image: "/mep-engineering-services.webp",
      desc: "Mechanical HVAC architectures, heavy industrial electrical layouts, plumbing networks, and advanced automated building telemetry systems." 
    },
    { 
      title: "General Contracting & Civil", 
      image: "/general-contracting-and-specialized-civil.webp",
      desc: "Turnkey structural renovations, commercial spatial additions, structural concrete preservation, and institutional execution." 
    },
    { 
      title: "Specialized Infrastructure", 
      image: "/specialized-infrastructure.webp",
      desc: "Smart parking gate logic controls, unified CCTV security matrices, clean epoxy chemical flooring protection, and advanced commercial waterproofing." 
    }
  ];

  const clientLogos = [
    { name: "Abu Dhabi Global Market", url: "/client-logos/abhudhabi-global-market.webp" },
    { name: "Almaharat", url: "/client-logos/almaharat.webp" },
    { name: "Al Nasser", url: "/client-logos/alnasser.webp" },
    { name: "Baker Hughes", url: "/client-logos/baker-hughes.webp" },
    { name: "Capital Engineering Consultancy", url: "/client-logos/Capital-Engineering-Consultancy.webp" },
    { name: "Capital Motion", url: "/client-logos/capital-motion.webp" },
    { name: "Design Infinity", url: "/client-logos/design-ifinity.webp" },
    { name: "EGA", url: "/client-logos/ega.webp" },
    { name: "Emichem", url: "/client-logos/emichem.webp" },
    { name: "ENOC", url: "/client-logos/enoc.webp" },
    { name: "Envirocon", url: "/client-logos/envirocon.webp" },
    { name: "GEMS Education", url: "/client-logos/gems-education.webp" },
    { name: "Gulf Rock", url: "/client-logos/gulf-rock.webp" },
    { name: "Hilton Hotels", url: "/client-logos/hilton-hotels.webp" },
    { name: "KEZAD Group", url: "/client-logos/kezad-group.webp" },
    { name: "Mubadala", url: "/client-logos/mubadala.webp" },
    { name: "Rotana Hotels", url: "/client-logos/rotana-hotels.webp" },
    { name: "RTA", url: "/client-logos/rta.webp" },
    { name: "SEHA", url: "/client-logos/seha.webp" },
    { name: "Sharjah Book Authority", url: "/client-logos/sharja-book-authority.webp" },
    { name: "Trojan", url: "/client-logos/trojan.webp" },
    { name: "Winner Holistic Consultant", url: "/client-logos/winner-holistic-consultant.webp" }
  ];

  const faqs = [
    { 
      q: "What is Integrated Facility Management and what sectors does Emrald Ace support in the UAE?", 
      a: "Integrated Facility Management (IFM) consolidates all building maintenance, engineering operations, and space management under a single accountable provider. Emrald Ace serves commercial office buildings, residential developments, healthcare facilities, hospitality venues, retail hubs, and industrial sites across Abu Dhabi and all UAE Emirates." 
    },
    { 
      q: "How to manage urgent engineering service requests under an Annual Maintenance Contract?", 
      a: "Under an Emrald Ace Annual Maintenance Contract (AMC), urgent engineering issues are logged via a 24/7 technical dispatch helpdesk. Dispatch teams arrive on-site with emergency response SLAs to restore main HVAC, power distribution, or plumbing failures and prevent operational downtime." 
    },
    { 
      q: "Who should use Emrald Ace facility management and MEP engineering services?", 
      a: "Our services are designed for commercial real estate owners, asset managers, corporate facility heads, residential community developers, and retail operators looking for unified MEP, AMC, and interior fit-out execution through a single specialized partner." 
    },
    { 
      q: "Can you manage complex MEP installation frameworks along with custom interior fit-out deployments?", 
      a: "Yes, our inter-disciplinary engineering teams deliver end-to-end projects. We handle HVAC mechanical architectures, heavy electrical layouts, plumbing networks, glass partitions, structural joinery, and ceiling installations under unified project governance." 
    }
  ];

  // Schema Graph for Search Engines, Voice Assistants (AEO), and AI Search (GEO)
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${baseUrl}/#webpage`,
        "url": `${baseUrl}/`,
        "name": "Integrated Facility Management & MEP Services UAE | Emrald Ace",
        "description": "Integrated Facility Management, MEP Engineering, and Interior Fit-Out solutions across Abu Dhabi & UAE.",
        "inLanguage": "en",
        "isPartOf": {
          "@type": "WebSite",
          "@id": `${baseUrl}/#website`,
          "url": `${baseUrl}/`,
          "name": "Emrald Ace General Contracting & Electromechanical L.L.C"
        }
      },
      {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        "name": "Emrald Ace General Contracting & Electromechanical L.L.C",
        "url": `${baseUrl}`,
        "logo": `${baseUrl}/logo.png`,
        "foundingDate": "2014",
        "sameAs": [
          "https://www.linkedin.com/company/emrald-ace",
          "https://www.google.com/search?q=Emrald+Ace+General+Contracting"
        ],
        "knowsAbout": [
          "Integrated Facility Management",
          "MEP Engineering",
          "Annual Maintenance Contracts",
          "Interior Fit-Out",
          "HVAC Systems"
        ],
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Abu Dhabi",
          "addressCountry": "AE"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+97126751747",
          "contactType": "customer service",
          "areaServed": "AE"
        }
      },
      {
        "@type": "Service",
        "@id": `${baseUrl}/#service`,
        "name": "Integrated Facility Management & MEP Engineering Services UAE",
        "provider": {
          "@id": `${baseUrl}/#organization`
        },
        "areaServed": "United Arab Emirates",
        "audience": {
          "@type": "Audience",
          "audienceType": "Commercial Property Managers, Building Owners, Industrial Asset Operators, Retail Heads"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Facility Engineering & Fit-Out Services",
          "itemListElement": coreServices.map((service, index) => ({
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": service.title,
              "description": service.desc
            },
            "position": index + 1
          }))
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${baseUrl}/#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": `${baseUrl}/`
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `${baseUrl}/#faq`,
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      }
    ]
  };

  return (
    <main className="w-full text-slate-100 bg-slate-950 selection:bg-[#0b63c5] selection:text-white transform-gpu antialiased scroll-smooth font-poppins overflow-x-hidden">
      
      {/* Dynamic Font Loading & Optimization Style Injection */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
        
        body, main {
          font-family: 'Poppins', sans-serif !important;
        }

        @keyframes floatUpDown {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float-reciprocate {
          animation: floatUpDown 3.5s ease-in-out infinite;
          will-change: transform;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

{/* 1. HERO SECTION - Moderately increased font size with clean weight */}
      <section className="relative h-screen w-full min-h-[100dvh] flex items-center justify-center bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/integrated-facility-management-2.webp"
            className="w-full h-full object-cover object-center scale-[1.01] will-change-transform"
          >
            <source src="/bg-video-1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Optimized dual overlay: clearer bottom video visibility with seamless bottom edge merge */}
        <div className="absolute inset-0 bg-slate-950/15 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-transparent to-slate-950 z-10" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20 text-center w-full my-auto space-y-6 sm:space-y-8 pt-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.18] text-white max-w-5xl mx-auto drop-shadow-md">
            Engineering Value. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-sky-300 to-indigo-300 drop-shadow-sm font-medium">
              Optimizing Assets.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-100 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-sm">
            Premier Integrated Facility Management, MEP Engineering, and Fit-Out Solutions in the UAE.
          </p>
        </div>
      </section>

      {/* 2. EXECUTIVE SUMMARY & TARGET AUDIENCE BLOCK (AEO & GEO High Extraction Node) */}
      <section className="bg-slate-950 py-8 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900/90 border border-slate-800 p-6 sm:p-8 rounded-2xl shadow-2xl backdrop-blur-md">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-3 h-3 rounded-full bg-[#0b63c5] animate-pulse"></span>
              <h2 className="text-xs font-bold uppercase tracking-widest text-blue-400">Executive Overview & Direct Answer Summary</h2>
            </div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
              <strong>What Emrald Ace Delivers:</strong> Established in 2014, Emrald Ace General Contracting & Electromechanical L.L.C is a full-service provider of 360-degree Integrated Facility Management (IFM), 24/7 Annual Maintenance Contracts (AMC), MEP engineering, and commercial interior fit-outs across Abu Dhabi and the wider UAE.
            </p>
            
            <div className="mt-4 pt-4 border-t border-slate-800/80">
              <h3 className="text-xs font-bold text-sky-400 uppercase tracking-widest mb-2">Target Audience & Industry Use Cases</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Designed specifically for corporate facility managers, asset management firms, commercial developers, and property directors seeking guaranteed uptime, SLA compliance, and streamlined MEP engineering workflows across the UAE. Learn more about regional engineering standards via <a href="https://www.iso.org/standard/60270.html" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">ISO 41001 Facility Management Standards</a>.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-slate-800/80 text-xs sm:text-sm">
              <div className="text-slate-300"><strong className="text-white block mb-1">Target Sectors:</strong> Commercial Offices, Healthcare, Hospitality, Retail & Industrial.</div>
              <div className="text-slate-300"><strong className="text-white block mb-1">Service Execution:</strong> Turnkey MEP, AMC & Interior Fit-Out Solutions.</div>
              <div className="text-slate-300"><strong className="text-white block mb-1">Emergency SLA:</strong> 24/7 Rapid Helpdesk & On-Site Technical Dispatch.</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT SECTION - Restructured layout to eliminate vertical gaps */}
      <section className="bg-slate-950 text-white py-12 lg:py-16 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block">About Emrald Ace</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-100 tracking-tight leading-snug">
                Integrated Facility Management & Electromechanical Engineering Excellence
              </h2>
              <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed">
                Welcome to Emrald Ace General Contracting & Electromechanical L.L.C. We deliver reliable facility management, preventive maintenance programs, and robust engineering setups across the UAE footprint since 2014.
              </p>
              
              <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-xl space-y-2">
                <h3 className="text-xs font-bold text-blue-400 uppercase tracking-widest">How Our Process Works</h3>
                <ul className="text-xs sm:text-sm text-slate-300 space-y-1.5 list-disc list-inside">
                  <li><strong>Step 1: On-Site Audit</strong> – Thorough diagnostic audit of building MEP systems and structural assets.</li>
                  <li><strong>Step 2: Custom Maintenance SLA</strong> – Tailored AMC contract establishing diagnostic intervals and 24/7 dispatch SLAs.</li>
                  <li><strong>Step 3: Rapid Execution</strong> – Deployment of dedicated engineers for proactive maintenance and emergency support.</li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link href="/services" className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-[#0b63c5] hover:bg-blue-600 text-white font-bold rounded-xl shadow-xl shadow-blue-600/30 transition-all flex items-center justify-center space-x-2 transform hover:-translate-y-0.5 group text-sm sm:text-base">
                  <span>Explore Enterprise Solutions</span>
                  <span className="ml-1 transition-transform group-hover:translate-x-1">&rarr;</span>
                </Link>
                <Link href="/contact" className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl backdrop-blur-md transition-all text-center text-sm sm:text-base">
                  Request Engineering Callback
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-[#0b63c5] rounded-3xl opacity-20 blur-3xl transform rotate-6 scale-95 pointer-events-none"></div>
              
              <div className="relative w-full h-[220px] rounded-2xl overflow-hidden mb-6 border border-slate-800 shadow-xl">
                <Image 
                  src="/mep-1.webp" 
                  alt="Emrald Ace Engineering Team Operations UAE" 
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>

              <div className="w-full max-w-md mx-auto p-6 bg-slate-900/90 rounded-2xl shadow-2xl backdrop-blur-xl space-y-6 relative border border-slate-800">
                <div className="flex justify-between items-center pb-2">
                  <h3 className="font-bold text-blue-400 text-xs tracking-widest uppercase block">Operational Statistics</h3>
                  <span className="text-[10px] bg-emerald-500/10 text-emerald-400 font-bold px-2.5 py-1 rounded-full">Active Coverage</span>
                </div>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {[
                    { metric: "2014", label: "Established Market Footprint" },
                    { metric: "150+", label: "Completed Major Infrastructures" },
                    { metric: "2023", label: "FM Division Expansion Year" },
                    { metric: "100%", label: "UAE Regional Fulfillment" }
                  ].map((stat, sIdx) => (
                    <div key={sIdx} className="p-3.5 sm:p-4 bg-slate-950/80 rounded-xl transform hover:scale-[1.02] transition-transform">
                      <span className="block text-2xl sm:text-3xl font-bold text-white tracking-tight">{stat.metric}</span>
                      <span className="text-[10px] sm:text-xs font-medium text-slate-300 uppercase tracking-tight mt-1 block leading-tight">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. COMPARISON TABLE (AEO & GEO Decision Support Node) */}
      <section className="py-14 bg-slate-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Why Choose Emrald Ace for UAE Facility Contracting?</h2>
            <p className="text-slate-300 text-sm">Comparative breakdown of unified facility contracting versus standard ad-hoc vendors.</p>
          </div>

          <div className="overflow-x-auto no-scrollbar">
            <table className="w-full text-left text-xs sm:text-sm text-slate-200 border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-slate-900 border-b border-slate-800">
                  <th className="p-4 font-bold text-blue-400 w-1/3">Feature / Capability</th>
                  <th className="p-4 font-bold text-white bg-blue-950/40 border-x border-slate-800 w-1/3">Emrald Ace Integrated Services</th>
                  <th className="p-4 font-bold text-slate-400 w-1/3">Conventional Ad-Hoc Vendors</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 bg-slate-950/40">
                <tr>
                  <td className="p-4 font-semibold text-white">Service Delivery Model</td>
                  <td className="p-4 bg-blue-950/20 border-x border-slate-800 text-emerald-400 font-medium">Single Accountable Turnkey Partner (IFM + MEP + Fit-Out)</td>
                  <td className="p-4 text-slate-400">Fragmented multiple sub-contractors</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">Emergency Response SLA</td>
                  <td className="p-4 bg-blue-950/20 border-x border-slate-800 text-emerald-400 font-medium">24/7 Dedicated Technical Helpdesk & Instant Dispatch</td>
                  <td className="p-4 text-slate-400">Delayed business-hours only support</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">Contract Accountability</td>
                  <td className="p-4 bg-blue-950/20 border-x border-slate-800 text-emerald-400 font-medium">Single SLA contact point with unified reporting</td>
                  <td className="p-4 text-slate-400">Multiple vendors with overlapping scope gaps</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. CORPORATE STRATEGY SECTION */}
      <section className="py-14 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 relative">
              <div className="relative w-full aspect-square max-w-md mx-auto lg:max-w-none rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
                <Image 
                  src="/integrated-engineering-aco-system-uae.webp" 
                  alt="Emrald Ace Executive Operations Meeting"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#0b63c5] text-white p-6 rounded-2xl shadow-xl hidden sm:block max-w-[220px] animate-float-reciprocate">
                <p className="text-xs font-bold uppercase tracking-widest leading-tight">Operational Reliability Guaranteed</p>
              </div>
            </div>
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold text-sky-400 uppercase tracking-widest block">Corporate Framework</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-100 tracking-tight">Delivering Integrated Engineering Ecosystems Across The UAE</h2>
              <div className="w-12 h-1 bg-[#0b63c5] rounded-full"></div>
              <p className="text-slate-300 text-sm sm:text-base font-normal leading-relaxed">
                Emrald Ace delivers Integrated Facility Management, Annual Maintenance Contracts, and Interior Fit-Out solutions, backed by absolute engineering proficiency. Modern physical plant infrastructures require proactive monitoring methodologies, specialized insight arrays, and direct professional governance metrics.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {[
                  "Intelligent Operational Planning", 
                  "Rigorous Asset Lifetime Preservation", 
                  "Transparent SLA Reporting Structures", 
                  "Direct Accountability Frameworks"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs sm:text-sm font-semibold text-slate-200">
                    <span className="w-2 h-2 rounded-full bg-[#0b63c5]"></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="pt-4">
                <Link href="/about" className="inline-flex w-full sm:w-auto items-center justify-center bg-[#0b63c5] hover:bg-blue-600 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-blue-600/20 transition-all text-sm group">
                  <span>Read full corporate overview portfolio</span>
                  <span className="ml-2 transition-transform group-hover:translate-x-1">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. OPTIMIZED SERVICES SECTION */}
      <section className="py-14 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block">Service Matrix</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight">Technical Capability Modules</h2>
            <p className="text-slate-300 text-xs sm:text-sm font-normal">Reliable maintenance, specialized engineering, and operational governance execution under one direct roof structure.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <div 
                key={index} 
                className="bg-slate-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col group transform hover:-translate-y-1 border border-slate-800"
              >
                <div className="relative h-[240px] w-full overflow-hidden">
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                  
                  <div className="absolute bottom-4 left-5 right-5 z-10">
                    <h3 className="text-lg font-bold text-white tracking-tight drop-shadow-md leading-snug">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4 bg-slate-900">
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/services" className="inline-flex w-full sm:w-auto items-center justify-center bg-[#0b63c5] text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-600 transition-all text-sm tracking-wide shadow-md shadow-blue-600/10">
              View Extended Capabilities Catalogue
            </Link>
          </div>
        </div>
      </section>

      {/* 7. HIGH-CONVERTING CTA SECTION */}
      <section className="py-12 bg-slate-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-slate-900/90 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 sm:p-12 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-4 text-center lg:text-left max-w-2xl">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest inline-flex items-center gap-2">
                24/7 Rapid Emergency Response
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                Ready to Upgrade Your Facility Management & MEP Operations?
              </h2>
              <p className="text-slate-200 text-xs sm:text-sm font-normal">
                Speak directly with our technical dispatch engineers now for consultations, emergency support, or AMC inquiries.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full lg:w-auto shrink-0">
              <a 
                href="tel:+97126751747" 
                className="w-full sm:w-auto px-6 py-3.5 sm:py-4 bg-white hover:bg-slate-100 text-slate-950 font-bold rounded-xl shadow-xl transition-all flex items-center justify-center space-x-3 text-sm tracking-wide group"
              >
                <span>Call +971 2 675 1747</span>
              </a>

              <Link 
                href="/contact" 
                className="w-full sm:w-auto px-6 py-3.5 sm:py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-all text-center text-sm"
              >
                Request Quotation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. SECTOR DIVERSIFICATION FOOTPRINT GRID */}
      <section className="py-14 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-sky-400 uppercase tracking-widest block">Sector Ecosystems</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-100 tracking-tight">Diversified Industry Frameworks We Systematically Serve</h2>
              <p className="text-slate-300 text-xs sm:text-sm font-normal leading-relaxed">
                Our field deployment units are structurally configured to implement continuous preventative, reactive, and asset enhancement operations across specialized commercial business verticals throughout the UAE jurisdiction boundaries.
              </p>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {["Commercial Offices", "Residential Units", "Healthcare Centers", "Luxury Hotels", "Retail Spaces", "Industrial Sites"].map((vertical, vIdx) => (
                  <div key={vIdx} className="p-3.5 sm:p-4 bg-slate-900 rounded-xl flex items-center space-x-2 text-xs sm:text-sm font-semibold text-slate-200 border border-slate-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0b63c5]"></span>
                    <span>{vertical}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-[200px] sm:h-[240px] w-full rounded-2xl overflow-hidden shadow-xl border border-slate-800">
                  <Image src="/sector-ecosystem-1.jpg" alt="Commercial Interiors" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
                </div>
                <div className="relative h-[140px] sm:h-[160px] w-full rounded-2xl overflow-hidden shadow-xl border border-slate-800">
                  <Image src="/sector-ecosystem-2.jpg" alt="MEP Plants" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
                </div>
              </div>
              <div className="space-y-4 pt-6 sm:pt-8">
                <div className="relative h-[140px] sm:h-[160px] w-full rounded-2xl overflow-hidden shadow-xl border border-slate-800">
                  <Image src="/sector-ecosystem-3.jpg" alt="Corporate Facilities" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
                </div>
                <div className="relative h-[200px] sm:h-[240px] w-full rounded-2xl overflow-hidden shadow-xl border border-slate-800">
                  <Image src="/sector-ecosystem-4.jpg" alt="Civil Development" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CLIENT CAROUSEL & INTERACTIVE FAQ */}
      <DynamicHomeContent clientLogos={clientLogos} faqs={faqs} />

      {/* Structured AI & Search Engine JSON-LD Schema Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaGraph)
        }}
      />
    </main>
  );
}