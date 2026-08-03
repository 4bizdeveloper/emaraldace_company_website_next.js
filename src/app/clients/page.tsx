'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, Building2, ShieldCheck, CheckCircle2 } from 'lucide-react';

const clientLogos = [
  { 
    name: "Abu Dhabi Global Market", 
    url: "/client-logos/abudhabi-global-market.webp" 
  },
  { 
    name: "Almaharat", 
    url: "/client-logos/almaharat.webp" 
  },
  { 
    name: "Al Nasser", 
    url: "/client-logos/alnasser.webp" 
  },
  { 
    name: "Baker Hughes", 
    url: "/client-logos/baker-hughes.webp" 
  },
  { 
    name: "Capital Engineering Consultancy", 
    url: "/client-logos/Capital-Engineering-Consultancy.webp" 
  },
  { 
    name: "Capital Motion", 
    url: "/client-logos/capital-motion.webp" 
  },
  { 
    name: "Design Infinity", 
    url: "/client-logos/design-ifinity.webp" 
  },
  { 
    name: "EGA", 
    url: "/client-logos/ega.webp" 
  },
  { 
    name: "Emichem", 
    url: "/client-logos/emichem.webp" 
  },
  { 
    name: "ENOC", 
    url: "/client-logos/enoc.webp" 
  },
  { 
    name: "Envirocon", 
    url: "/client-logos/envirocon.webp" 
  },
  { 
    name: "GEMS Education", 
    url: "/client-logos/gems-education.webp" 
  },
  { 
    name: "Gulf Rock", 
    url: "/client-logos/gulf-rock.webp" 
  },
  { 
    name: "Hilton Hotels", 
    url: "/client-logos/hilton-hotels.webp" 
  },
  { 
    name: "KEZAD Group", 
    url: "/client-logos/kezad-group.webp" 
  },
  { 
    name: "Mubadala", 
    url: "/client-logos/mubadala.webp" 
  },
  { 
    name: "Rotana Hotels", 
    url: "/client-logos/rotana-hotels.webp" 
  },
  { 
    name: "RTA", 
    url: "/client-logos/rta.webp" 
  },
  { 
    name: "SEHA", 
    url: "/client-logos/seha.webp" 
  },
  { 
    name: "Sharjah Book Authority", 
    url: "/client-logos/sharja-book-authority.webp" 
  },
  { 
    name: "Trojan", 
    url: "/client-logos/trojan.webp" 
  },
  { 
    name: "Winner Holistic Consultant", 
    url: "/client-logos/winner-holistic-consultant.webp" 
  }
];

export default function ClientsPage() {
  return (
    <main className="w-full min-h-screen text-slate-100 bg-slate-950 selection:bg-[#0b63c5] selection:text-white transform-gpu antialiased scroll-smooth" style={{ fontFamily: 'Poppins, sans-serif' }}>
      
      {/* Dynamic Background Mesh Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* 1. HERO HEADER SECTION */}
      <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center space-y-4 max-w-4xl mx-auto flex flex-col items-center">
          <span className="text-xs font-bold text-blue-400 uppercase tracking-widest inline-flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-400" /> Strategic Partners & Track Record
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Trusted by{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-400 to-indigo-400">
              Industry Leaders
            </span>
          </h1>
          <p className="text-slate-400 text-sm sm:text-base md:text-lg font-normal leading-relaxed max-w-3xl">
            Over the last 5 years, Emrald Ace has systematically executed enterprise facility management, 
            MEP setups, and large-scale structural additions for the UAE’s most demanding corporate, 
            governmental, and industrial ecosystems.
          </p>
        </div>

        {/* Dynamic Trust Pillars Block */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 pt-8 border-t border-slate-900">
          <div className="flex items-center gap-3 p-4 bg-slate-900/40 rounded-xl backdrop-blur-md">
            <Building2 className="w-5 h-5 text-[#FF6A00]" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-300">22+ Major Blue-Chip Clients</span>
          </div>
          <div className="flex items-center gap-3 p-4 bg-slate-900/40 rounded-xl backdrop-blur-md">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-300">100% SLA Fulfillment Matrix</span>
          </div>
          <div className="flex items-center gap-3 p-4 bg-slate-900/40 rounded-xl backdrop-blur-md">
            <CheckCircle2 className="w-5 h-5 text-cyan-400" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-300">UAE-Wide Project Footprint</span>
          </div>
        </div>
      </section>

      {/* 2. PREMIUM HIGH-PERFORMANCE GRID */}
      <section className="relative pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {clientLogos.map((logo, index) => (
            <div 
              key={index}
              className="group relative w-full h-32 bg-white rounded-2xl flex items-center justify-center p-4 shadow-xl overflow-hidden transform-gpu transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl border border-transparent hover:border-blue-500/30"
            >
              {/* Subtle Ambient Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-blue-500/5 to-transparent transition-opacity duration-300 pointer-events-none" />
              
              <div className="relative w-full h-full">
                <Image 
                  src={logo.url} 
                  alt={`${logo.name} Corporate Partnership Logo - Emrald Ace Authorized Vendor`} 
                  fill 
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                  priority={index < 10} // Priority load top rows to hit extreme LCP targets
                  loading={index >= 10 ? "lazy" : undefined}
                  className="object-contain rounded-xl filter transition-transform duration-300 group-hover:scale-102"
                />
              </div>

              {/* Invisible Meta Label for AI Crawlers & Accessibility */}
              <span className="sr-only">{logo.name} Facility Management Client</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CONVERSION ENGAGEMENT ROW */}
      <section className="pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-slate-900/60 backdrop-blur-xl border border-white/5 rounded-3xl p-8 text-center max-w-4xl mx-auto space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Partner with a Credentialed Engineering Contractor
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto font-medium">
            Join our structural deployment network. Enjoy proactive engineering diagnostics, automated facility updates, and 24/7 dedicated account management workflows.
          </p>
          <div className="pt-2">
            <Link href="/contact" className="inline-flex items-center justify-center bg-[#0b63c5] hover:bg-blue-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all text-sm tracking-wide">
              Initiate Enterprise Partnership Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* SEARCH ENGINE & AI AGENT KNOWLEDGE GRAPH SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemPage",
            "name": "Corporate Partners and Enterprise Clients - Emrald Ace",
            "description": "Directory of strategic institutional partners and corporate entities operating under Emrald Ace Integrated Facility Management framework in the UAE.",
            "publisher": {
              "@type": "Organization",
              "name": "Emrald Ace General Contracting & Electromechanical L.L.C",
              "url": "https://emraldace.com"
            },
            "mainEntity": {
              "@type": "ItemList",
              "numberOfItems": clientLogos.length,
              "itemListElement": clientLogos.map((logo, idx) => ({
                "@type": "ListItem",
                "position": idx + 1,
                "name": logo.name
              }))
            }
          })
        }}
      />
    </main>
  );
}