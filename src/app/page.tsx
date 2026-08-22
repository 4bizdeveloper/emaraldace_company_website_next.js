import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { Poppins } from 'next/font/google';
import DynamicHomeContent from '@/components/Home-Clients';

// GTmetrix Performance Optimization: Zero render-blocking CSS fonts via Next.js Google Font Engine
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

// 1. Dynamic Technical SEO, AEO, & GEO Metadata Configuration
export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const host = headersList.get('host') || 'emraldace.com';
  const protocol = process.env.NODE_ENV === 'development' ? 'https' : 'https';
  const currentUrl = `${protocol}://${host.replace(/^https?:\/\//, '')}`;

  return {
    title: 'Integrated Facility Management & MEP Services UAE | Emrald Ace',
    description: 'Emrald Ace delivers reliable Integrated Facility Management, MEP Engineering, and Interior Fit-Out solutions all over UAE.',
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
      description: 'Reliable Integrated Facility Management, MEP Engineering, and Interior Fit-Out solutions all over UAE.',
      url: './',
      siteName: 'Emrald Ace General Contracting & Electromechanical L.L.C',
      images: [
        {
          url: 'https://www.emraldace.ae/integrated-engineering-aco-system-uae.webp',
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
      description: 'Reliable Integrated Facility Management, MEP Engineering, and Interior Fit-Out solutions all over UAE.',
      images: ['https://www.emraldace.ae/integrated-engineering-aco-system-uae.webp'],
    },
  };
}

export default async function Home() {
  const headersList = await headers();
  const host = headersList.get('host') || 'emraldace.com';
  const protocol = process.env.NODE_ENV === 'development' ? 'https' : 'https';
  const baseUrl = `${protocol}://${host.replace(/^https?:\/\//, '')}`;

  const coreServices = [
    { 
      title: "Integrated Facility Management", 
      image: "/inegrated-facility-management-cleaning.webp",
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
      image: "/specialized-service-cctv.webp",
      desc: "Smart parking barriers, CCTV security networks, durable epoxy floor coatings, and professional commercial waterproofing." 
    }
  ];

const clientLogos = [
  { name: "Abu Dhabi Global Market", url: "/client-logos/abhudhabi-global-market.webp" },
  { name: "Almaharat", url: "/client-logos/almaharat.webp" },
  { name: "Al Nasser", url: "/client-logos/alnasser.webp" },
  { name: "Al Wathba", url: "/client-logos/alwathba.jpeg" },
  { name: "Baker Hughes", url: "/client-logos/baker-hughes.webp" },
  { name: "Capital Engineering Consultancy", url: "/client-logos/Capital-Engineering-Consultancy.webp" },
  { name: "Capital Motion", url: "/client-logos/capital-motion.webp" },
  { name: "Design Infinity", url: "/client-logos/design-ifinity.webp" },
  { name: "EFS Facilities Services", url: "/client-logos/efs.jpeg" },
  { name: "EGA", url: "/client-logos/ega.webp" },
  { name: "Emichem", url: "/client-logos/emichem.webp" },
  { name: "Envirocon", url: "/client-logos/envirocon.webp" },
  { name: "GEMS Education", url: "/client-logos/gems-education.webp" },
  { name: "GHD", url: "/client-logos/ghd.jpeg" },
  { name: "Gulf Rock", url: "/client-logos/gulf-rock.webp" },
  { name: "Hilton Hotels", url: "/client-logos/hilton-hotels.webp" },
  { name: "KEZAD Group", url: "/client-logos/kezad-group.webp" },
  { name: "Mubadala", url: "/client-logos/mubadala.webp" },
  { name: "NYU Abu Dhabi", url: "/client-logos/nyu-abu-dhabi.jpeg" },
  { name: "Rotana Hotels", url: "/client-logos/rotana-hotels.webp" },
  { name: "RTA", url: "/client-logos/rta.webp" },
  { name: "SEHA", url: "/client-logos/seha.webp" },
  { name: "Sharjah Book Authority", url: "/client-logos/sharja-book-authority.webp" },
  { name: "Trojan", url: "/client-logos/trojan.webp" },
  { name: "Winner Holistic Consultant", url: "/client-logos/winner-holistic-consultant.webp" },
  { name: "Infinity Drinks", url: "/client-logos/infinity-drinks-logo.png" },
  { name: "Abrar", url: "/client-logos/abrar-logo.png" },
  { name: "Geco", url: "/client-logos/geco.webp" }
];

  const faqs = [
    { 
      q: "What is Integrated Facility Management and what sectors does Emrald Ace support in UAE?", 
      a: "Integrated Facility Management (IFM) is the unified management of building engineering, electromechanical upkeep, and daily facility operations under a single team. Key sectors supported include: Commercial offices and towers, Residential communities, Healthcare facilities and medical centers, Hotels and hospitality venues, Retail hubs and shopping malls, Industrial warehouses and plants." 
    },
    { 
      q: "How are urgent engineering requests handled under an Annual Maintenance Contract?", 
      a: "Emergency requests follow a strict SLA response workflow: 1. Instant Logging: Received at our 24/7 central helpdesk. 2. Rapid Dispatch: Emergency engineering team dispatched within 15 minutes. 3. Guaranteed On-Site Arrival: Technicians on-site within 60 minutes all over UAE. 4. Containment & Resolution: Immediate physical isolation of fault followed by structural repair." 
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

  // Schema Graph for Search Engines, Voice Assistants (AEO), and AI Search Engine Optimization (GEO)
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${baseUrl}/#webpage`,
        "url": `${baseUrl}/`,
        "name": "Integrated Facility Management & MEP Services UAE | Emrald Ace",
        "description": "Emrald Ace delivers reliable Integrated Facility Management, MEP Engineering, and Interior Fit-Out solutions all over UAE.",
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
          "addressCountry": "AE"
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
    <main className={`w-full text-slate-100 bg-slate-950 selection:bg-blue-600 selection:text-white transform-gpu antialiased scroll-smooth ${poppins.className} overflow-x-hidden`}>
      
      {/* Utility Styles for Hardware Accelerated Smooth Performance */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* 1. ULTRA MODERN HERO SECTION */}
      <section className="relative min-h-dvh w-full flex flex-col justify-center items-center bg-slate-950 text-white overflow-hidden py-16 sm:py-20">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/integrated-facility-management-2.webp"
            className="w-full h-full object-cover object-center scale-[1.02] will-change-transform"
          >
            <source src="/bg-video-2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Adjusted Multi-tier Gradient Overlay for Higher Video Brightness and Whitened Top Bar Area */}
        <div className="absolute inset-0 bg-slate-950/20 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-transparent to-slate-950/80 z-10 pointer-events-none" />

        {/* Hero Interactive Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20 text-center w-full space-y-5 sm:space-y-6 my-auto pt-16 sm:pt-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/10 border border-white/20 backdrop-blur-md text-white font-bold text-xs sm:text-sm tracking-wide shadow-lg">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
            Premier MEP & Facility Engineering in UAE
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.25] text-white max-w-4xl mx-auto drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)]">
            Integrated Facility Management <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-blue-300 via-sky-200 to-indigo-200 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              & MEP Services in UAE
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-slate-100 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] px-2">
            Trusted Integrated Facility Management, MEP Engineering, and Fit-Out Solutions all over UAE.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2 sm:pt-3">
            <Link 
              href="/contact" 
              className="w-full sm:w-auto min-w-[160px] max-w-[220px] px-6 py-3 sm:px-8 sm:py-3.5 bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-500 hover:to-sky-400 text-white font-semibold rounded-2xl shadow-xl shadow-blue-600/30 transition-all transform hover:-translate-y-0.5 text-sm sm:text-base flex items-center justify-center gap-2 group"
            >
              <span>Get In Touch</span>
              <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
            </Link>

            <Link 
              href="/about" 
              className="w-full sm:w-auto min-w-[160px] max-w-[220px] px-6 py-3 sm:px-8 sm:py-3.5 bg-slate-900/80 hover:bg-slate-900 text-slate-100 font-semibold rounded-2xl border border-slate-700/80 backdrop-blur-md transition-all text-center text-sm sm:text-base flex items-center justify-center gap-2 group"
            >
              <span>About Us</span>
              <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
            </Link>
          </div>
        </div>

        {/* Border Blend Component at Junction Only */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-10 pointer-events-none" />
      </section>

      {/* 2. ABOUT SECTION & OPERATIONAL FLOW */}
      <section className="bg-slate-950 text-white py-12 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-extrabold text-blue-400 uppercase tracking-widest block mb-1">About Emrald Ace</span>
                
                <p className="text-xs sm:text-base text-slate-300 font-normal leading-relaxed mb-3">
                  Since 2014, Emrald Ace General Contracting & Electromechanical L.L.C. has maintained an unbroken track record all over UAE. We engineer, maintain, and upgrade physical spaces with high precision and transparency.
                </p>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-100 tracking-tight leading-snug mb-3">
                  How Does MEP Engineering Support Integrated Facility Management?
                </h2>
              </div>

              {/* Definition Block */}
              <div className="p-5 rounded-2xl bg-slate-900/90 border-l-4 border-blue-500 border-y border-r border-slate-800 shadow-xl">
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  Mechanical, Electrical, and Plumbing (MEP) engineering forms the core physical infrastructure of modern real estate. When integrated with facility operations, it guarantees optimized energy consumption, continuous asset performance, and preventive risk management.
                </p>
              </div>
              
              {/* How We Work Timeline Flow */}
              <div className="space-y-3 pt-2">
                <h3 className="text-xs font-bold text-blue-400 uppercase tracking-widest">How Our Operating Procedure Works:</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <li className="p-4 rounded-2xl bg-slate-900 border border-slate-800 relative">
                    <span className="text-2xl font-black text-blue-500/20 absolute top-2 right-3">01</span>
                    <strong className="text-white text-xs sm:text-sm block mb-1">1. On-Site Audit</strong>
                    <span className="text-xs text-slate-400">Comprehensive HVAC and electromechanical diagnostic check.</span>
                  </li>
                  <li className="p-4 rounded-2xl bg-slate-900 border border-slate-800 relative">
                    <span className="text-2xl font-black text-blue-500/20 absolute top-2 right-3">02</span>
                    <strong className="text-white text-xs sm:text-sm block mb-1">2. Tailored AMC</strong>
                    <span className="text-xs text-slate-400">Custom preventive schedules and guaranteed 60-min emergency response SLAs.</span>
                  </li>
                  <li className="p-4 rounded-2xl bg-slate-900 border border-slate-800 relative">
                    <span className="text-2xl font-black text-blue-500/20 absolute top-2 right-3">03</span>
                    <strong className="text-white text-xs sm:text-sm block mb-1">3. Active Operations</strong>
                    <span className="text-xs text-slate-400">In-house engineers managing day-to-day asset execution.</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/services" className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-lg shadow-blue-600/20 transition-all flex items-center justify-center gap-2 group text-sm">
                  <span>Explore Our Solutions</span>
                  <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                </Link>
                <Link href="/contact" className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold rounded-xl border border-slate-800 transition-all text-center text-sm">
                  Speak with an Engineer
                </Link>
              </div>
            </div>

            {/* Visual Media & Verified Performance Column */}
            <div className="lg:col-span-5 relative space-y-4">
              <div className="relative h-[260px] sm:h-[300px] w-full rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
                <Image 
                  src="/mep-engineer.jpg" 
                  alt="Emrald Ace Engineering Team Operations UAE" 
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-xs font-medium text-slate-200 bg-slate-950/80 p-3 rounded-xl border border-slate-800 backdrop-blur-md">
                  Real-World Execution: Commercial MEP Maintenance in UAE
                </div>
              </div>

              {/* Verified Performance Benchmarks Card */}
              <div className="p-5 bg-slate-900/90 rounded-3xl border border-slate-800 shadow-xl">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-extrabold text-blue-400 text-xs tracking-widest uppercase">Verified Benchmarks</h3>
                  <span className="text-[10px] bg-emerald-500/10 text-emerald-400 font-bold px-3 py-1 rounded-full border border-emerald-500/20">100% On-Time Execution</span>
                </div>
                <ul className="grid grid-cols-2 gap-3">
                  <li className="p-3 bg-slate-950/80 rounded-2xl border border-slate-800/80">
                    <span className="block text-xl sm:text-2xl font-extrabold text-white">2014</span>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold">Year Established</span>
                  </li>
                  <li className="p-3 bg-slate-950/80 rounded-2xl border border-slate-800/80">
                    <span className="block text-xl sm:text-2xl font-extrabold text-white">160+</span>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold">Major Projects</span>
                  </li>
                  <li className="p-3 bg-slate-950/80 rounded-2xl border border-slate-800/80">
                    <span className="block text-xl sm:text-2xl font-extrabold text-white">150+</span>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold">Skilled Staffs</span>
                  </li>
                  <li className="p-3 bg-slate-950/80 rounded-2xl border border-slate-800/80">
                    <span className="block text-xl sm:text-2xl font-extrabold text-white">7/7</span>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold">Emirates Covered</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. STRATEGY SECTION */}
      <section className="py-12 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
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
              <div className="absolute -bottom-4 -right-2 bg-gradient-to-r from-blue-600 to-sky-600 text-white p-4 rounded-2xl shadow-2xl max-w-[220px] hidden sm:block border border-blue-400/30">
                <p className="text-xs font-extrabold uppercase tracking-widest leading-tight">Reliable Operations Guaranteed</p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-extrabold text-sky-400 uppercase tracking-widest block">Our Operational Philosophy</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-100 tracking-tight">
                Why Choose Emrald Ace for Building Asset Protection in UAE?
              </h2>
              <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
              
              <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
                Modern buildings require proactive engineering upkeep rather than reactive patching. We integrate real-time scheduling, energy optimization, and dedicated mechanical teams so your facilities function seamlessly 365 days a year.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Predictive Maintenance Scheduling", 
                  "Long-Term Structural Asset Protection", 
                  "Transparent Monthly Audit Reports", 
                  "Single Point of Executive Contact"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-xs sm:text-sm font-semibold text-slate-200">
                    <span className="w-2 h-2 rounded-full bg-blue-400 shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <Link href="/about" className="inline-flex items-center bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all text-sm group">
                  <span>Learn More About Our Company</span>
                  <span className="ml-2 transition-transform group-hover:translate-x-1">&rarr;</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. CORE SERVICES SECTION */}
      <section className="py-12 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-2 mb-10">
            <span className="text-xs font-extrabold text-blue-400 uppercase tracking-widest block">Core Solutions</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">What Services Are Included in Our Facility Management Spectrum?</h2>
            <p className="text-slate-300 text-xs sm:text-sm font-normal">
              End-to-end engineering, preventive upkeep, and interior transformations delivered by experienced specialists.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreServices.map((service, index) => (
              <div 
                key={index} 
                className="group relative bg-slate-900/90 rounded-3xl overflow-hidden border border-slate-800 shadow-xl hover:border-blue-500/40 transition-all duration-300 flex flex-col"
              >
                <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
                  
                  <span className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-blue-400 text-[10px] font-extrabold px-3 py-1 rounded-full border border-slate-800">
                    Service 0{index + 1}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed font-normal">
                    {service.desc}
                  </p>
                  <div className="pt-2 text-xs font-bold text-blue-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Learn details</span>
                    <span>&rarr;</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link href="/services" className="inline-flex items-center justify-center bg-blue-600 text-white font-bold px-8 py-4 rounded-2xl hover:bg-blue-500 transition-all text-sm tracking-wide shadow-xl shadow-blue-600/20">
              View All Facility Services
            </Link>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="py-12 bg-slate-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-950 via-slate-900 to-slate-900 border border-blue-500/30 p-8 sm:p-12 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
            
            <div className="space-y-3 text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold">
                <span>⚡ 24/7 Technical Response Active</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                How Can You Book Immediate MEP Support or Get a Custom AMC Quote?
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Connect with our UAE engineering response team for site audits, emergency dispatch, or annual contract pricing.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto shrink-0 justify-center">
              <Link 
                href="/contact" 
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-500 hover:to-sky-400 text-white font-bold rounded-2xl shadow-xl transition-all text-center text-sm"
              >
                Get a Free Quote
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* 6. SECTOR DIVERSIFICATION FOOTPRINT */}
      <section className="py-12 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-extrabold text-sky-400 uppercase tracking-widest block">Industries We Serve</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-100 tracking-tight">
                Which Business Sectors Do We Support All Over UAE?
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Our multi-disciplinary teams deliver tailored preventive maintenance, quick emergency dispatch, and complex engineering upgrades across diverse commercial environments:
              </p>

              <ul className="grid grid-cols-2 gap-3">
                {[
                  "Commercial Office Towers", "Residential Communities", 
                  "Healthcare & Medical Centers", "Hotels & Hospitality Venues", 
                  "Retail Outlets & Malls", "Industrial Warehouses",
                  "Corporate Facilities", "Educational Hubs"
                ].map((vertical, vIdx) => (
                  <li key={vIdx} className="p-3 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-2.5 text-xs font-semibold text-slate-200">
                    <span className="w-2 h-2 rounded-full bg-blue-400 shrink-0"></span>
                    <span>{vertical}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-40 sm:h-48 w-full rounded-3xl overflow-hidden border border-slate-800 shadow-xl">
                  <Image src="/sector-ecosystem-1.jpg" alt="Commercial Interiors UAE" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
                </div>
                <div className="relative h-28 sm:h-36 w-full rounded-3xl overflow-hidden border border-slate-800 shadow-xl">
                  <Image src="/sector-ecosystem-2.jpg" alt="MEP Plant Maintenance UAE" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
                </div>
              </div>
              <div className="space-y-4 pt-6">
                <div className="relative h-28 sm:h-36 w-full rounded-3xl overflow-hidden border border-slate-800 shadow-xl">
                  <Image src="/sector-ecosystem-3.jpg" alt="Corporate Facilities UAE" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
                </div>
                <div className="relative h-40 sm:h-48 w-full rounded-3xl overflow-hidden border border-slate-800 shadow-xl">
                  <Image src="/sector-ecosystem-4.jpg" alt="Civil Engineering Works UAE" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. CLIENT CAROUSEL & INTERACTIVE FAQ SECTION */}
      <DynamicHomeContent clientLogos={clientLogos} faqs={faqs} />

      {/* JSON-LD Schema Integration for AI Assistants & Search Engine Bots */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaGraph)
        }}
      />
    </main>
  );
}