import React from "react";
import { Metadata } from "next";
import { ShieldCheck, Lock, Eye, Server, FileText, UserCheck, Bell, Mail, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Emrald Ace General Contracting & Electromechanical UAE",
  description: "Read the official Privacy Policy of Emrald Ace General Contracting & Electromechanical UAE. Learn how we collect, process, protect, and handle client data under UAE law.",
  keywords: ["Emrald Ace Privacy Policy", "UAE Data Protection Law", "Data Privacy Abu Dhabi", "General Contracting Legal Terms"],
  openGraph: {
    title: "Privacy Policy | Emrald Ace General Contracting & Electromechanical UAE",
    description: "Official Privacy Policy for Emrald Ace General Contracting & Electromechanical.",
    url: "https://www.emraldace.ae/privacy-policy/",
    type: "website",
  },
  alternates: {
    canonical: "https://www.emraldace.ae/privacy-policy/",
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "August 19, 2026";

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy - Emrald Ace",
    "url": "https://www.emraldace.ae/privacy-policy/",
    "description": "Privacy Policy governing client and visitor data processing for Emrald Ace General Contracting & Electromechanical UAE.",
    "publisher": {
      "@type": "Organization",
      "name": "Emrald Ace General Contracting & Electromechanical",
      "url": "https://www.emraldace.ae",
      "logo": "https://www.emraldace.ae/logo.png",
      "telephone": "+971528976025",
      "email": "sales1@emraldace.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Musaffah",
        "addressRegion": "Abu Dhabi",
        "addressCountry": "AE"
      }
    }
  };

  return (
    <main className="min-h-screen bg-[#030712] text-slate-100 font-sans pt-28 sm:pt-36 pb-20 px-4 sm:px-6 lg:px-8 selection:bg-[#0b63c5] selection:text-white overflow-x-hidden">
      {/* Schema Injection for Search Engines & AI Crawlers */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      {/* Hero Header */}
      <header className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-[#0b63c5]/20 rounded-full blur-3xl pointer-events-none -z-10" />
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0b63c5]/20 border border-[#0b63c5]/40 text-cyan-300 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4 backdrop-blur-md">
          <ShieldCheck className="w-4 h-4 text-[#0b63c5]" />
          Data Governance & Trust
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-4">
          Privacy Policy
        </h1>
        
        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          At <strong className="text-white font-semibold">Emrald Ace General Contracting & Electromechanical</strong>, we treat your privacy and data security with absolute accountability under United Arab Emirates data protection laws.
        </p>

        <p className="text-xs text-cyan-400 font-mono mt-4">
          Last Updated: {lastUpdated}
        </p>
      </header>

      {/* Content Body Container */}
      <article className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
        
        {/* Section 1 */}
        <section className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl backdrop-blur-md">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-[#0b63c5]/20 text-cyan-400 shrink-0">
              <Eye className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">1. Information We Collect</h2>
          </div>
          <div className="text-slate-200 text-sm sm:text-base leading-relaxed space-y-4">
            <p>
              We collect personal data required to respond to enquiries, execute electromechanical, MEP, facility management, fit-out, and general contracting contracts across the United Arab Emirates.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-300">
              <li><strong className="text-white">Contact Identity:</strong> Full name, professional designation, and corporate identity.</li>
              <li><strong className="text-white">Communication Coordinates:</strong> Corporate email address, telephone contact numbers, and office locations.</li>
              <li><strong className="text-white">Project Scope Specs:</strong> Architectural, civil engineering, or MEP scope requirements shared via web enquiry forms.</li>
              <li><strong className="text-white">Technical Analytics:</strong> Anonymized server logs, browser types, and interaction telemetry to improve site performance.</li>
            </ul>
          </div>
        </section>

        {/* Section 2 */}
        <section className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl backdrop-blur-md">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-[#0b63c5]/20 text-cyan-400 shrink-0">
              <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">2. How We Use Your Data</h2>
          </div>
          <div className="text-slate-200 text-sm sm:text-base leading-relaxed space-y-3">
            <p>Your submitted data is strictly processed for legitimate engineering business purposes:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs sm:text-sm text-slate-200">
                <strong className="text-white block mb-1">Contract Bidding & Quotes</strong>
                Evaluating project requirements and generating precise commercial proposals.
              </div>
              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs sm:text-sm text-slate-200">
                <strong className="text-white block mb-1">Regulatory Approvals</strong>
                Coordinating permits with UAE regulatory and municipality entities when executing contracts.
              </div>
              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs sm:text-sm text-slate-200">
                <strong className="text-white block mb-1">Client Support & Communication</strong>
                Direct communications concerning maintenance schedules or site updates.
              </div>
              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs sm:text-sm text-slate-200">
                <strong className="text-white block mb-1">Infrastructure Optimization</strong>
                Improving page load speed, security routing, and user interface compatibility.
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl backdrop-blur-md">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-[#0b63c5]/20 text-cyan-400 shrink-0">
              <Lock className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">3. Protection, Security & Hosting</h2>
          </div>
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
            Emrald Ace deploys robust encryption protocols across transport layers (SSL/TLS) and strict node-level firewall rules. We maintain zero tolerance for unauthorized data monetization. <strong className="text-white font-semibold">We never sell, rent, or trade client personal or corporate information</strong> to third-party marketing entities.
          </p>
        </section>

        {/* Section 4 */}
        <section className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl backdrop-blur-md">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-[#0b63c5]/20 text-cyan-400 shrink-0">
              <Server className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">4. Legal Jurisdiction & UAE Law Compliance</h2>
          </div>
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
            This Privacy Policy adheres strictly to Federal Decree-Law No. 45 of 2021 regarding the Protection of Personal Data (PDPL) in the United Arab Emirates. Any dispute concerning data handling shall fall under the jurisdiction of Abu Dhabi, UAE courts.
          </p>
        </section>

        {/* Section 5 */}
        <section className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl backdrop-blur-md">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-[#0b63c5]/20 text-cyan-400 shrink-0">
              <UserCheck className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">5. Your Data Rights</h2>
          </div>
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-3">
            Clients and website users reserve full legal authority to:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-300 text-sm sm:text-base">
            <li>Request a copy of stored personal contact records.</li>
            <li>Request immediate correction or updating of out-of-date information.</li>
            <li>Request full erasure of contact data unless retention is mandated by UAE financial/contract law.</li>
          </ul>
        </section>

        {/* Contact Block */}
        <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-[#0b63c5]/30 border border-cyan-500/30 shadow-2xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-[#0b63c5] text-white shrink-0">
              <Bell className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">Privacy Officer Contact</h2>
          </div>
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-6">
            For data inquiries, access requests, or regulatory queries, reach out to our legal and governance desk directly:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
            <a href="mailto:sales1@emraldace.com" className="flex items-center gap-2 p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-200 hover:border-[#0b63c5] transition-colors">
              <Mail className="w-4 h-4 text-[#0b63c5] shrink-0" />
              <span className="truncate">sales1@emraldace.com</span>
            </a>
            <a href="tel:+971528976025" className="flex items-center gap-2 p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-200 hover:border-[#0b63c5] transition-colors">
              <Phone className="w-4 h-4 text-[#0b63c5] shrink-0" />
              <span>+971 52 897 6025</span>
            </a>
            <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-200">
              <MapPin className="w-4 h-4 text-[#0b63c5] shrink-0" />
              <span>Musaffah, Abu Dhabi, UAE</span>
            </div>
          </div>
        </section>

      </article>
    </main>
  );
}