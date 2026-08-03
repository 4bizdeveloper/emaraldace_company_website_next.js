import React from "react";
import Image from "next/image";
import { Metadata } from "next";

// Highly SEO Optimized Metadata (Search Engine & AI Engine friendly)
export const metadata: Metadata = {
  title: "Our Trusted Clients & Strategic Partners | Emrald Ace",
  description: "Discover the industry leaders, government entities, and global brands that trust Emrald Ace for elite general contracting and electromechanical solutions across the region.",
  keywords: ["Emrald Ace clients", "strategic partners", "Abu Dhabi Global Market", "Mubadala", "EGA", "ENOC", "engineering partners"],
  openGraph: {
    title: "Our Trusted Clients & Strategic Partners | Emrald Ace",
    description: "Explore the network of industry giants partnering with Emrald Ace.",
    type: "website",
  },
};

// 100% complete dataset preserved exactly as requested
const clients = [
  { name: "Abu Dhabi Global Market", url: "/client-logos/abudhabi-global-market.webp" },
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

export default function ClientsPage() {
  return (
    <main className="min-h-screen bg-[#030712] bg-gradient-to-b from-[#030712] via-[#071330] to-[#030712] text-white pt-44 md:pt-52 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden select-none">
      
      {/* Structural Schema Markup for Search and AI Crawlers */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Emrald Ace - Clients and Partners",
            "description": "List of elite strategic partners and clients associated with Emrald Ace.",
            "brand": clients.map((c) => ({ "@type": "Brand", "name": c.name })),
          }),
        }}
      />

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto text-center mb-20 relative z-10">
        {/* Ambient background glow using exact brand color */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-[#0b63c5]/15 rounded-full blur-3xl pointer-events-none" />
        
        {/* Brand Tag: Adjusted color to exact #0b63c5 and improved font size visibility */}
        <p className="text-xs sm:text-sm font-bold tracking-widest text-[#0b63c5] uppercase mb-4 drop-shadow-sm">
          Trusted by Industry Leaders
        </p>
        
        {/* Adjusted tracking & padding to ensure letters never overlap or cut on any device width */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-normal text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-300 pb-3 mb-6">
          Our Strategic Clients & Partners
        </h1>
        
        {/* Enhanced text color to slate-300 for premium readability contrast against dark backgrounds */}
        <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-300 font-normal leading-relaxed px-2">
          We collaborate with global enterprises and government organizations to deliver elite electromechanical infrastructure across the region.
        </p>
      </div>

      {/* Modern Responsive Grid Section */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group relative flex items-center justify-center p-5 bg-white rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.04] border border-slate-100/5 aspect-[4/3] overflow-hidden"
            >
              {/* Dynamic brand-color backdrop glow on item hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white opacity-100 transition-opacity duration-300 group-hover:from-blue-50/20 group-hover:to-white" />
              
              {/* Image Container with high quality contrast optimizations */}
              <div className="relative w-full h-full transform transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={client.url}
                  alt={`${client.name} logo - Official Client of Emrald Ace`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                  className="object-contain p-2 filter contrast-[1.04] drop-shadow-sm transition-all duration-300"
                  priority={index < 10}
                  loading={index >= 10 ? "lazy" : undefined}
                />
              </div>

              {/* Accessible Blind/AI Reader Title Tag */}
              <span className="sr-only">{client.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Banner */}
      <div className="max-w-4xl mx-auto mt-24 text-center relative z-10">
        <div className="p-8 rounded-2xl border border-[#0b63c5]/30 bg-gradient-to-r from-blue-950/40 via-[#071330] to-blue-950/40 backdrop-blur-md shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white tracking-wide">
            Ready to Build Your Next Landmark Project?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mb-8 max-w-xl mx-auto leading-relaxed">
            Join our growing ecosystem of industry pioneers and experience engineering execution at its finest.
          </p>
          
          {/* Action button customized with exactly #0b63c5 brand identity colors */}
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-white bg-[#0b63c5] hover:bg-[#0952a4] transition-all duration-300 rounded-lg shadow-lg shadow-[#0b63c5]/30 hover:shadow-[#0b63c5]/50 hover:-translate-y-0.5 tracking-wider uppercase"
          >
            Partner With Us
          </a>
        </div>
      </div>
    </main>
  );
}