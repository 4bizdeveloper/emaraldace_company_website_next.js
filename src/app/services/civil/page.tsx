import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { HardHat, CheckCircle2, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: "General Contracting & Civil Works UAE | Emrald Ace",
  description: "Turnkey civil contracting, structural alterations, concrete restoration, waterproofing, and smart access systems across Abu Dhabi.",
  alternates: {
    canonical: "https://www.emraldace.com/services/civil",
  },
};

export default function CivilPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.emraldace.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.emraldace.com/services" },
      { "@type": "ListItem", "position": 3, "name": "General Contracting & Specialized Civil", "item": "https://www.emraldace.com/services/civil" }
    ]
  };

  const sections = [
    {
      title: "Civil & Extension Focus",
      items: [
        "Civil Construction & Structural Repairs",
        "Facility Extensions & Major Structural Modifications",
        "General Building Development & Refurbishment",
        "Architectural Planning & Design Delivery Support",
        "Foundation Reinforcement & Concrete Restoration"
      ]
    },
    {
      title: "Smart Access & Automation",
      items: [
        "Automated Parking Access Control Systems",
        "Remote Control Gates & Barrier Solutions",
        "High-Definition CCTV & Integrated Security Systems",
        "Smart Building IoT & Access Management",
        "Biometric Access & Visitor Management Systems"
      ]
    },
    {
      title: "Specialized Outdoor & Surface Works",
      items: [
        "Waterproofing & Structural Leak Remediation",
        "Industrial Epoxy & Protective Floor Coatings",
        "Artificial Turf Installation & Commercial Landscaping",
        "Hardscaping & Exterior Site Upgrades",
        "Interlocking Paving & Boundary Wall Finishes"
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
          <span className="text-orange-400">General Contracting & Civil</span>
        </nav>

        {/* Hero Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900 border border-slate-800 rounded-3xl p-8 lg:p-12">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full text-xs font-bold text-orange-400">
              <HardHat className="w-4 h-4" /> Civil Construction & Smart Automation Solutions
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight">
              General Contracting & Specialized Civil
            </h1>
            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
              Robust construction, structural restoration, smart gate automation, and specialized waterproofing services designed for modern commercial and residential infrastructure.
            </p>
          </div>
          <div className="lg:col-span-5 relative h-64 lg:h-80 w-full rounded-2xl overflow-hidden">
            <Image 
              src="/general-contracting&specialized-civil.webp" 
              alt="General Contracting & Specialized Civil" 
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
                <span className="w-2 h-2 rounded-full bg-orange-500" />
              </div>
              <ul className="space-y-3">
                {section.items.map((item, iIdx) => (
                  <li key={iIdx} className="text-xs text-slate-300 flex items-start gap-2.5 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
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
            <h3 className="text-lg font-bold text-white">Have a Civil, Structural, or Barrier Automation Project?</h3>
            <p className="text-xs text-slate-400">Speak with our civil contracting division to schedule a site inspection.</p>
          </div>
          <a href="/contact" className="px-6 py-3 bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all">
            Contact Civil Desk
          </a>
        </div>

      </div>
    </main>
  );
}