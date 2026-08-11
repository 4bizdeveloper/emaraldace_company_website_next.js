import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Building, CheckCircle2, ChevronRight, PhoneCall, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: "Integrated Facility Management (IFM) Solutions UAE | Emrald Ace",
  description: "Complete Hard, Soft, and Specialized Facility Management solutions in Abu Dhabi & UAE. ISO certified management for commercial, residential, and government properties.",
  alternates: {
    canonical: "https://www.emraldace.com/services/ifm",
  },
};

export default function IFMPage() {
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
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Integrated Facility Management",
        "item": "https://www.emraldace.com/services/ifm"
      }
    ]
  };

  const sections = [
    {
      title: "Hard Facility Management",
      items: [
        "Mechanical Systems (HVAC, chillers, pumps, AHUs, FCUs)",
        "Electrical Systems (LV/MV, switchgear, UPS, generators)",
        "Plumbing & Water Systems",
        "HVAC Preventive Maintenance & Energy Efficiency",
        "Civil & Building Fabric Maintenance (masonry, painting, waterproofing)",
        "Fire & Life Safety Systems (alarms, suppression, testing)",
        "Building Management Systems / BMS Monitoring & Automation"
      ]
    },
    {
      title: "Soft Facility Management",
      items: [
        "Housekeeping & Commercial Deep Cleaning",
        "High-Rise Glass & Façade Cleaning",
        "Landscaping & Grounds Maintenance",
        "Sustainable Waste Management & Recycling",
        "Pest Management & Control",
        "Concierge, Reception & Porter Services",
        "Indoor Plant Care & Decorative Landscaping"
      ]
    },
    {
      title: "Specialized Facility Management",
      items: [
        "Energy Audits & Optimization Management",
        "Asset Lifecycle & Condition Management",
        "Smart FM (CAFM, IoT Integration, Automation)",
        "24/7 Central Helpdesk & Emergency Response",
        "EHS (Environment, Health & Safety) Audits",
        "Disaster Recovery & Risk Mitigation Planning",
        "Vendor & Subcontractor Quality Assurance"
      ]
    }
  ];

  return (
    <main className="pt-32 pb-20 bg-slate-950 text-white min-h-screen">
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Hero Section Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="flex items-center text-xs font-semibold text-slate-400 space-x-2">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <Link href="/services" className="hover:text-white transition-colors">Services</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-blue-400">Integrated Facility Management</span>
        </nav>

        {/* Hero Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900 border border-slate-800 rounded-3xl p-8 lg:p-12">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs font-bold text-blue-400">
              <Building className="w-4 h-4" /> Smarter Facilities. Better Performance.
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight">
              Integrated Facility Management
            </h1>
            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
              Our integrated model brings every essential service together under one accountable team, giving clients a single point of contact, faster response times, and measurable long-term value.
            </p>
          </div>
          <div className="lg:col-span-5 relative h-64 lg:h-80 w-full rounded-2xl overflow-hidden">
            <Image 
              src="/integrated-facility-management-2.webp" 
              alt="Integrated Facility Management" 
              fill 
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover" 
              priority
            />
          </div>
        </div>

        {/* Detailed Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sections.map((section, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h2 className="text-base font-bold text-white uppercase tracking-wider">{section.title}</h2>
                <span className="w-2 h-2 rounded-full bg-blue-500" />
              </div>
              <ul className="space-y-3">
                {section.items.map((item, iIdx) => (
                  <li key={iIdx} className="text-xs text-slate-300 flex items-start gap-2.5 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
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
            <h3 className="text-lg font-bold text-white">Optimize Your Asset Management Operations</h3>
            <p className="text-xs text-slate-400">Request a comprehensive facility audit from our engineering team.</p>
          </div>
          <a href="/contact" className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all">
            Contact FM Desk
          </a>
        </div>

      </div>
    </main>
  );
}