import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Wrench, CheckCircle2, ChevronRight, PhoneCall } from 'lucide-react';

export const metadata: Metadata = {
  title: "Annual Maintenance Contracts (AMC) UAE | Emrald Ace",
  description: "Comprehensive Annual Maintenance Contracts (AMC) in Abu Dhabi and UAE for HVAC, Electrical, MEP, and Civil infrastructure.",
  alternates: {
    canonical: "https://www.emraldace.com/services/amc",
  },
};

export default function AMCPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.emraldace.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.emraldace.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Annual Maintenance Contracts", "item": "https://www.emraldace.com/services/amc" }
    ]
  };

  const sections = [
    {
      title: "What's Included",
      items: [
        "Scheduled Preventive Maintenance Plans",
        "Corrective & Rapid Emergency Repairs",
        "Routine Equipment Audits & Inspections",
        "24/7 Dedicated Rapid Emergency Support",
        "Spare Parts Sourcing & Logistics",
        "Detailed Monthly Performance Reporting",
        "Dedicated On-Site Engineering Team",
        "Full Compliance & Regulatory Safety Audits"
      ]
    },
    {
      title: "Key Client Benefits",
      items: [
        "Significantly Reduced Operational Downtime",
        "Lower Long-Term Asset Maintenance Costs",
        "Extended Life Expectancy of Capital Assets",
        "Predictable Annual Operational Budgeting",
        "Guaranteed Response Times with Strict SLAs",
        "Single Point of Operational Accountability",
        "Improved Energy & Utility Cost Efficiency",
        "Complete Risk Assessment & Hazard Prevention"
      ]
    },
    {
      title: "Customization & Scope",
      items: [
        "Comprehensive All-Inclusive Coverage Plans",
        "Non-Comprehensive Labor-Only Contracts",
        "Custom SLAs Tailored for Critical Assets",
        "Multi-Site Portfolio Aggregation Discounts",
        "Real-time Digital Maintenance Tracking Portal",
        "Seasonal Systems Preparedness Inspections",
        "Dedicated Account Manager & Technical Support",
        "Tailored Payment & Lifecycle Schedules"
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
          <span className="text-orange-400">Annual Maintenance Contracts</span>
        </nav>

        {/* Hero Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900 border border-slate-800 rounded-3xl p-8 lg:p-12">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full text-xs font-bold text-orange-400">
              <Wrench className="w-4 h-4" /> Protecting Your Assets Every Day
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight">
              Annual Maintenance Contracts (AMC)
            </h1>
            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
              We tailor every AMC to the specific operational needs of residential, commercial, or industrial facilities across the UAE, combining planned servicing with rapid-response emergency support.
            </p>
          </div>
          <div className="lg:col-span-5 relative h-64 lg:h-80 w-full rounded-2xl overflow-hidden">
            <Image 
              src="/annual-maintenance-contracts.webp" 
              alt="Annual Maintenance Contracts" 
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
            <h3 className="text-lg font-bold text-white">Need a Tailored AMC SLA Proposal?</h3>
            <p className="text-xs text-slate-400">Speak directly with our technical AMC asset management team.</p>
          </div>
          <a href="/contact" className="px-6 py-3 bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all">
            Get AMC Quote
          </a>
        </div>

      </div>
    </main>
  );
}