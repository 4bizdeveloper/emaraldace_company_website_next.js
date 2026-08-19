import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import DynamicHomeContent from '@/app/DynamicHomeContent';

// 1. Dynamic Technical SEO & Metadata Configuration
export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const host = headersList.get('host') || 'emraldace.com';
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
  const currentUrl = `${protocol}://${host.replace(/^https?:\/\//, '')}`;

  return {
    title: 'Integrated Facility Management & MEP Services UAE | Emrald Ace',
    description: 'Emrald Ace delivers reliable Integrated Facility Management, MEP Engineering, and Interior Fit-Out solutions across Abu Dhabi and the UAE.',
    metadataBase: new URL(currentUrl),
    alternates: {
      canonical: './',
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
      description: 'Reliable Integrated Facility Management, MEP Engineering, and Interior Fit-Out solutions across Abu Dhabi & UAE.',
      url: './',
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
      description: 'Reliable Integrated Facility Management, MEP Engineering, and Interior Fit-Out solutions across Abu Dhabi & UAE.',
      images: ['/integrated-facility-management-2.webp'],
    },
  };
}

export default async function Home() {
  const headersList = await headers();
  const host = headersList.get('host') || 'emraldace.com';
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
  const baseUrl = `${protocol}://${host.replace(/^https?:\/\//, '')}`;

  const coreServices = [
    { 
      title: "Integrated Facility Management", 
      image: "/integrated-facility-management.webp",
      desc: "Bringing engineering maintenance, daily workplace operations, and technical management together under one reliable team." 
    },
    { 
      title: "Annual Maintenance Contracts (AMC)", 
      image: "/annual-maintenance-contract.webp",
      desc: "Tailored preventive maintenance plans with regular inspection schedules and fast emergency dispatch when you need it most." 
    },
    { 
      title: "Interior Fit-Out Solutions", 
      image: "/interior-fit-out-solutions.webp",
      desc: "Crafting modern commercial interiors, custom glass partitions, quality joinery work, and seamless false ceiling installations." 
    },
    { 
      title: "MEP Engineering Services", 
      image: "/mep-engineering-services.webp",
      desc: "Complete HVAC systems, industrial electrical wiring, plumbing setups, and automated building management systems." 
    },
    { 
      title: "General Contracting & Civil Works", 
      image: "/general-contracting-and-specialized-civil.webp",
      desc: "Full structural renovations, commercial expansions, concrete repairs, and complete building upgrades." 
    },
    { 
      title: "Specialized Infrastructure Services", 
      image: "/specialized-infrastructure.webp",
      desc: "Smart parking barriers, CCTV security networks, durable epoxy floor coatings, and professional commercial waterproofing." 
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
      a: "Integrated Facility Management (IFM) is the unified management of building engineering, electromechanical upkeep, and daily facility operations under a single team. Key sectors supported include: Commercial offices and towers, Residential communities, Healthcare facilities and medical centers, Hotels and hospitality venues, Retail hubs and shopping malls, Industrial warehouses and plants." 
    },
    { 
      q: "How are urgent engineering requests handled under an Annual Maintenance Contract?", 
      a: "Emergency requests follow a strict 4-step SLA response workflow: 1. Instant Logging: Call or ticket received at our 24/7 central helpdesk. 2. Rapid Dispatch: Emergency engineering team dispatched within 15 minutes. 3. Guaranteed On-Site Arrival: Technicians on-site within 60 minutes across Abu Dhabi & major UAE nodes. 4. Containment & Resolution: Immediate physical isolation of fault followed by structural repair." 
    },
    { 
      q: "Who can benefit from Emrald Ace facility management and MEP services?", 
      a: "Our services are engineered specifically for: Commercial property managers looking to reduce operational overheads, Building owners needing long-term asset value protection, Corporate facility directors requiring zero downtime guarantees, Retail operations heads managing multi-site fit-out standards." 
    },
    { 
      q: "Can you handle complex MEP installations alongside custom interior fit-outs?", 
      a: "Yes. Emrald Ace provides turnkey MEP and interior fit-out services handled by in-house engineering squads. Projects combine central HVAC ducting, power distribution, plumbing systems, custom glass partitions, acoustic ceilings, and architectural joinery under one single project manager." 
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
        "description": "Emrald Ace delivers reliable Integrated Facility Management, MEP Engineering, and Interior Fit-Out solutions across Abu Dhabi & UAE.",
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
        "url": `${baseUrl}/`,
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

      {/* 1. HERO SECTION - PRESERVED STYLING & COLOR GRADIENTS */}
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

        <div className="absolute inset-0 bg-slate-950/15 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-transparent to-slate-950 z-10" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20 text-center w-full my-auto space-y-6 sm:space-y-8 pt-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.18] text-white max-w-5xl mx-auto drop-shadow-md">
            Integrated Facility Management <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-sky-300 to-indigo-300 drop-shadow-sm font-medium">
              & MEP Services in UAE 
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-100 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-sm">
            Trusted Integrated Facility Management, MEP Engineering, and Fit-Out Solutions across Abu Dhabi & the UAE.
          </p>
        </div>
      </section>

      {/* 2. EXECUTIVE SUMMARY, TOP ANSWER SIGNAL & AUDIENCE CLARITY */}
      <section className="bg-slate-950 py-12 relative z-20 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-950/40 via-slate-900/80 to-slate-900 border border-blue-500/20 p-8 sm:p-10 backdrop-blur-xl shadow-2xl mb-12">
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex items-center gap-3 mb-4">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400">Key Takeaway & Overview</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Integrated Facility Management & MEP Engineering Services in UAE
            </h2>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal max-w-5xl mb-6">
              <strong>Direct Answer:</strong> Integrated Facility Management (IFM) is an all-in-one approach that consolidates electromechanical maintenance, HVAC services, civil works, and day-to-day operations under a single contracted provider. Founded in 2014, <strong>Emrald Ace General Contracting & Electromechanical L.L.C</strong> delivers end-to-end IFM, 24/7 Annual Maintenance Contracts (AMC), specialized MEP engineering, and interior fit-out solutions tailored for asset managers across Abu Dhabi and all seven UAE Emirates.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-slate-800/80">
              <div>
                <span className="text-xs font-bold text-sky-400 uppercase tracking-widest block mb-1">Target Audience</span>
                <p className="text-xs sm:text-sm text-slate-300">
                  Commercial property owners, corporate facility heads, building operations directors, retail chains, and developers.
                </p>
              </div>
              <div>
                <span className="text-xs font-bold text-sky-400 uppercase tracking-widest block mb-1">Core Operational Context</span>
                <p className="text-xs sm:text-sm text-slate-300">
                  Ideal for assets requiring continuous cooling, zero unplanned electrical outages, rapid emergency repair, and ISO-compliant operations.
                </p>
              </div>
              <div>
                <span className="text-xs font-bold text-sky-400 uppercase tracking-widest block mb-1">Industry Compliance</span>
                <p className="text-xs sm:text-sm text-slate-300">
                  Built to align with international <a href="https://www.iso.org/standard/60270.html" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">ISO 41001 Facility Management Standards</a>.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. ABOUT SECTION */}
      <section className="bg-slate-950 text-white py-16 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block mb-2">About Emrald Ace</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-100 tracking-tight leading-snug">
                  What is MEP Engineering & Integrated Facility Management?
                </h2>
              </div>

              {/* AEO Definition Block */}
              <div className="p-5 rounded-2xl bg-slate-900/90 border-l-4 border-[#0b63c5] border-y border-r border-slate-800 shadow-xl">
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  <strong>Definition:</strong> Mechanical, Electrical, and Plumbing (MEP) engineering forms the core infrastructure of any modern building, encompassing HVAC cooling, high-voltage distribution, fire safety systems, and water management. Combined with Integrated Facility Management (IFM), it ensures optimal building performance, reduced power consumption, and zero workflow interruption.
                </p>
              </div>

              <p className="text-base text-slate-300 font-normal leading-relaxed">
                Since 2014, Emrald Ace General Contracting & Electromechanical L.L.C. has maintained an unbroken track record across Abu Dhabi and the wider UAE. We engineer, maintain, and upgrade physical spaces with total transparency.
              </p>
              
              {/* How We Work Timeline Flow */}
              <div className="space-y-4">
                <h3 className="text-xs font-bold text-blue-400 uppercase tracking-widest">Our Standard Operating Procedure</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 relative">
                    <span className="text-xl font-extrabold text-blue-500/30 absolute top-2 right-3">01</span>
                    <strong className="text-white text-xs block mb-1">On-Site Audit</strong>
                    <span className="text-xs text-slate-400">Complete HVAC and electromechanical health check.</span>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 relative">
                    <span className="text-xl font-extrabold text-blue-500/30 absolute top-2 right-3">02</span>
                    <strong className="text-white text-xs block mb-1">Tailored AMC</strong>
                    <span className="text-xs text-slate-400">Custom preventive schedules and 60-min emergency SLAs.</span>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 relative">
                    <span className="text-xl font-extrabold text-blue-500/30 absolute top-2 right-3">03</span>
                    <strong className="text-white text-xs block mb-1">Active Operations</strong>
                    <span className="text-xs text-slate-400">Dedicated engineers managing day-to-day uptime.</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link href="/services" className="px-8 py-4 bg-[#0b63c5] hover:bg-blue-600 text-white font-bold rounded-xl shadow-xl shadow-blue-600/20 transition-all flex items-center justify-center space-x-2 group text-sm">
                  <span>Explore Our Solutions</span>
                  <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                </Link>
                <Link href="/contact" className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl border border-slate-800 transition-all text-center text-sm">
                  Speak with an Engineer
                </Link>
              </div>
            </div>

            {/* Media & Proof Column (GEO Real Experience Signals) */}
            <div className="lg:col-span-5 relative space-y-6">
              <div className="relative h-[280px] w-full rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
                <Image 
                  src="/mep-1.webp" 
                  alt="Emrald Ace Engineering Team Operations UAE" 
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-xs font-medium text-slate-200">
                  Real-World Execution: Commercial MEP Maintenance in Abu Dhabi
                </div>
              </div>

              {/* Verified Performance Benchmarks Card */}
              <div className="p-6 bg-slate-900/90 rounded-2xl border border-slate-800 shadow-xl">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-blue-400 text-xs tracking-widest uppercase">Verified Benchmarks</h3>
                  <span className="text-[10px] bg-emerald-500/10 text-emerald-400 font-bold px-2.5 py-1 rounded-full">100% On-Time Execution</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-slate-950/80 rounded-xl">
                    <span className="block text-2xl font-bold text-white">2014</span>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold">Established</span>
                  </div>
                  <div className="p-3 bg-slate-950/80 rounded-xl">
                    <span className="block text-2xl font-bold text-white">150+</span>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold">Major Projects</span>
                  </div>
                  <div className="p-3 bg-slate-950/80 rounded-xl">
                    <span className="block text-2xl font-bold text-white">150+</span>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold">Skilled Staff Members</span>
                  </div>
                  <div className="p-3 bg-slate-950/80 rounded-xl">
                    <span className="block text-2xl font-bold text-white">7/7</span>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold">UAE Emirates</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. COMPARISON TABLE */}
      <section className="py-16 bg-slate-900/40 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">How Does Integrated Management Compare?</h2>
            <p className="text-slate-300 text-sm">Why unified single-source accountability outperforms multi-vendor maintenance setups.</p>
          </div>

          <div className="overflow-x-auto no-scrollbar rounded-2xl border border-slate-800 bg-slate-950">
            <table className="w-full text-left text-xs sm:text-sm text-slate-200 border-collapse min-w-[650px]">
              <thead>
                <tr className="bg-slate-900/80 border-b border-slate-800">
                  <th className="p-5 font-bold text-blue-400 w-1/3">Evaluation Metric</th>
                  <th className="p-5 font-bold text-white bg-blue-950/30 border-x border-slate-800/80 w-1/3">Emrald Ace Integrated Services</th>
                  <th className="p-5 font-bold text-slate-400 w-1/3">Multiple Separate Vendors</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                <tr>
                  <td className="p-5 font-semibold text-white">Service Management</td>
                  <td className="p-5 bg-blue-950/10 border-x border-slate-800/80 text-emerald-400 font-medium">Single point of contact for IFM, MEP & Fit-Outs</td>
                  <td className="p-5 text-slate-400">Managing multiple uncoordinated contractors</td>
                </tr>
                <tr>
                  <td className="p-5 font-semibold text-white">Emergency Response SLA</td>
                  <td className="p-5 bg-blue-950/10 border-x border-slate-800/80 text-emerald-400 font-medium">24/7 Helpdesk with guaranteed &lt; 60-min dispatch</td>
                  <td className="p-5 text-slate-400">Standard business-hours only; varying response times</td>
                </tr>
                <tr>
                  <td className="p-5 font-semibold text-white">Accountability & Cost Control</td>
                  <td className="p-5 bg-blue-950/10 border-x border-slate-800/80 text-emerald-400 font-medium">Unified SLA with fixed monthly pricing and operational audits</td>
                  <td className="p-5 text-slate-400">Overlapping vendor fees and unclear dispute boundaries</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. CORPORATE STRATEGY SECTION */}
      <section className="py-16 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 relative">
              <div className="relative w-full aspect-square max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
                <Image 
                  src="/integrated-engineering-aco-system-uae.webp" 
                  alt="Emrald Ace Executive Operations Meeting"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-2 bg-gradient-to-r from-blue-600 to-sky-600 text-white p-5 rounded-2xl shadow-2xl max-w-[220px] hidden sm:block">
                <p className="text-xs font-bold uppercase tracking-widest leading-tight">Reliable Operations Guaranteed</p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold text-sky-400 uppercase tracking-widest block">Our Operational Philosophy</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-100 tracking-tight">
                Engineering Long-Term Asset Value Across the UAE
              </h2>
              <div className="w-12 h-1 bg-[#0b63c5] rounded-full"></div>
              
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Modern buildings require proactive maintenance rather than reactive patching. We integrate real-time scheduling, energy optimization, and dedicated mechanical teams so your facilities function seamlessly 365 days a year.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  "Predictive Maintenance Scheduling", 
                  "Long-Term Structural Asset Protection", 
                  "Transparent Monthly Audit Reports", 
                  "Single Point of Executive Contact"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3 p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm font-semibold text-slate-200">
                    <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link href="/about" className="inline-flex items-center bg-[#0b63c5] hover:bg-blue-600 text-white font-bold px-7 py-3.5 rounded-xl shadow-lg transition-all text-sm group">
                  <span>Learn More About Our Company</span>
                  <span className="ml-2 transition-transform group-hover:translate-x-1">&rarr;</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. OPTIMIZED SERVICES SECTION */}
      <section className="py-16 bg-slate-950 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block">Core Solutions</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight">Our Core Services</h2>
            <p className="text-slate-300 text-xs sm:text-sm font-normal">
              End-to-end engineering, preventive upkeep, and interior transformations delivered by experienced specialists.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <div 
                key={index} 
                className="group relative bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-xl hover:border-blue-500/40 transition-all duration-300 flex flex-col"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                  
                  <span className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md text-blue-400 text-[10px] font-bold px-3 py-1 rounded-full border border-slate-800">
                    Service 0{index + 1}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                  <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                    {service.desc}
                  </p>
                  <div className="pt-2 text-xs font-semibold text-blue-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Learn detail</span>
                    <span>&rarr;</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/services" className="inline-flex items-center justify-center bg-[#0b63c5] text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-600 transition-all text-sm tracking-wide shadow-md shadow-blue-600/10">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* 7. HIGH-CONVERTING CTA SECTION */}
      <section className="py-12 bg-slate-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-900/60 via-slate-900 to-slate-900 border border-blue-500/30 p-8 sm:p-12 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
            
            <div className="space-y-3 text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold">
                <span>⚡ 24/7 Technical Support Active</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
                Need Fast Support or a Custom Facility Plan?
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm">
                Get direct access to our UAE engineering teams for immediate site audits, emergency repairs, or AMC proposals.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto shrink-0">
              <a 
                href="tel:+97126751747" 
                className="w-full sm:w-auto px-7 py-4 bg-white hover:bg-slate-100 text-slate-950 font-bold rounded-xl shadow-xl transition-all flex items-center justify-center space-x-2 text-sm"
              >
                <span>Call +971 2 675 1747</span>
              </a>

              <Link 
                href="/contact" 
                className="w-full sm:w-auto px-7 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl border border-slate-700 transition-all text-center text-sm"
              >
                Get a Free Quote
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* 8. SECTOR DIVERSIFICATION FOOTPRINT */}
      <section className="py-16 bg-slate-950 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-sky-400 uppercase tracking-widest block">Industries We Serve</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-100 tracking-tight">
                Tailored Solutions for Key Business Sectors
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Our multi-disciplinary teams deliver tailored preventive maintenance, quick emergency dispatch, and complex engineering upgrades across diverse commercial environments:
              </p>

              <div className="grid grid-cols-2 gap-3">
                {[
                  "Commercial Offices", "Residential Communities", 
                  "Healthcare Centers", "Luxury Hotels & Hospitality", 
                  "Retail Outlets", "Industrial Complexes",
                  "Shopping Malls", "Educational Facilities"
                ].map((vertical, vIdx) => (
                  <div key={vIdx} className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center space-x-2 text-xs font-semibold text-slate-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                    <span>{vertical}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-48 w-full rounded-2xl overflow-hidden border border-slate-800 shadow-xl">
                  <Image src="/sector-ecosystem-1.jpg" alt="Commercial Interiors UAE" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
                </div>
                <div className="relative h-36 w-full rounded-2xl overflow-hidden border border-slate-800 shadow-xl">
                  <Image src="/sector-ecosystem-2.jpg" alt="MEP Plant Maintenance UAE" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
                </div>
              </div>
              <div className="space-y-4 pt-6">
                <div className="relative h-36 w-full rounded-2xl overflow-hidden border border-slate-800 shadow-xl">
                  <Image src="/sector-ecosystem-3.jpg" alt="Corporate Facilities UAE" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
                </div>
                <div className="relative h-48 w-full rounded-2xl overflow-hidden border border-slate-800 shadow-xl">
                  <Image src="/sector-ecosystem-4.jpg" alt="Civil Engineering Works UAE" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 9. CLIENT CAROUSEL & INTERACTIVE FAQ SECTION */}
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