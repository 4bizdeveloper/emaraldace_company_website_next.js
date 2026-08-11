import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Paintbrush, CheckCircle2, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: "Commercial & Office Interior Fit-Out UAE | Emrald Ace",
  description: "Bespoke corporate interior fit-out solutions, architectural joinery, glass partition solutions, and workspace transformation in Abu Dhabi.",
  alternates: {
    canonical: "https://www.emraldace.com/services/interior",
  },
};

export default function InteriorPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.emraldace.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.emraldace.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Interior Fit-Out Solutions", "item": "https://www.emraldace.com/services/interior" }
    ]
  };

  const sections = [
    {
      title: "Commercial & Retail Fit-Out",
      items: [
        "Corporate Office Space Planning & Fit-Out",
        "Retail Outlets & Showroom Interior Fit-Outs",
        "Commercial Building Interior Renovations",
        "High-End Residential Interiors & Upgrades",
        "Turnkey Project Design & Delivery Services",
        "Space Optimization & Ergonomic Layouts"
      ]
    },
    {
      title: "Architectural & Joinery Works",
      items: [
        "Custom Partitions & False Ceiling Systems",
        "Flooring Solutions (Epoxy, Vinyl, Carpet, Tile)",
        "Professional Wall Painting & Decorative Finishes",
        "Bespoke Wood Joinery & Carpentry Works",
        "Decorative Architectural Metal & Glass Features",
        "Custom Acoustic Wall Panelling & Treatments"
      ]
    },
    {
      title: "Glazing & Aluminum Systems",
      items: [
        "Glass Partitions & Acoustic Frameless Walls",
        "Aluminum Door & Window Fabrication",
        "Custom Glass Fixtures & Shopfronts",
        "Acoustic Ceiling Panels & Thermal Insulation",
        "Automated Sliding & Sensor Glass Entrances",
        "Fire-Rated Glass & Barrier Systems"
      ]
    }
  ];

  return (
    <main className="pt-32 pb-20 bg-slate-950 text-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Hero Section Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="flex items-center text-xs font-semibold text-slate-400 space-x-2">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <Link href="/services" className="hover:text-white transition-colors">Services</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-slate-200">Interior Fit-Out Solutions</span>
        </nav>

        {/* Hero Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900 border border-slate-800 rounded-3xl p-8 lg:p-12">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-xs font-bold text-slate-300">
              <Paintbrush className="w-4 h-4" /> Creating Inspiring & Functional Workspaces
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight">
              Interior Fit-Out Solutions
            </h1>
            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
              We design and deliver modern, aesthetically pleasing interior environments tailored to commercial, business, and luxury residential specifications across the UAE.
            </p>
          </div>
          <div className="lg:col-span-5 relative h-64 lg:h-80 w-full rounded-2xl overflow-hidden">
            <Image 
              src="/interior-fit-out-solutions-2.webp" 
              alt="Interior Fit-Out Solutions" 
              fill 
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover" 
              priority
            />
          </div>
        </div>

        {/* Detailed Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sections.map((section, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h2 className="text-base font-bold text-white uppercase tracking-wider">{section.title}</h2>
                <span className="w-2 h-2 rounded-full bg-slate-400" />
              </div>
              <ul className="space-y-3">
                {section.items.map((item, iIdx) => (
                  <li key={iIdx} className="text-xs text-slate-300 flex items-start gap-2.5 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-white">Plan Your Interior Transformation</h3>
            <p className="text-xs text-slate-400">Turnkey design, joinery, and authority approvals handled completely by us.</p>
          </div>
          <a href="/contact" className="px-6 py-3 bg-slate-100 hover:bg-white text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all">
            Consult Design Team
          </a>
        </div>

      </div>
    </main>
  );
}