import React from "react";
import { Metadata } from "next";
import { Scale, FileCheck, ShieldAlert, Cpu, Gavel, HelpCircle, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions | Emrald Ace General Contracting UAE",
  description: "Official Terms and Conditions governing website usage, engineering proposals, and service contracts for Emrald Ace General Contracting & Electromechanical UAE.",
  keywords: ["Emrald Ace Terms and Conditions", "General Contracting Agreement UAE", "MEP Engineering Terms Abu Dhabi"],
  openGraph: {
    title: "Terms & Conditions | Emrald Ace General Contracting UAE",
    description: "Legal terms governing website access and engineering contracts with Emrald Ace.",
    url: "https://www.emraldace.ae/terms-and-conditions/",
    type: "website",
  },
  alternates: {
    canonical: "https://www.emraldace.ae/terms-and-conditions/",
  },
};

export default function TermsAndConditionsPage() {
  const effectiveDate = "August 19, 2026";

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms and Conditions - Emrald Ace",
    "url": "https://www.emraldace.ae/terms-and-conditions/",
    "description": "Legal terms governing website utilization and service interactions for Emrald Ace General Contracting & Electromechanical.",
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
          <Scale className="w-4 h-4 text-[#0b63c5]" />
          Legal Terms & Governance
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-4">
          Terms & Conditions
        </h1>
        
        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Please read these terms carefully before utilizing our services or website. By accessing <strong className="text-white font-semibold">emraldace.ae</strong>, you accept full compliance with these conditions.
        </p>

        <p className="text-xs text-cyan-400 font-mono mt-4">
          Effective Date: {effectiveDate}
        </p>
      </header>

      {/* Content Body Container */}
      <article className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
        
        {/* Section 1 */}
        <section className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl backdrop-blur-md">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-[#0b63c5]/20 text-cyan-400 shrink-0">
              <FileCheck className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">1. Scope of Services & Binding Agreement</h2>
          </div>
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
            Emrald Ace General Contracting & Electromechanical provides integrated facility management, MEP engineering, interior fit-out, annual maintenance contracts (AMC), and specialized contracting services. Information presented on this digital platform constitutes an invitation to treat and does not supersede formal physical contracts signed between clients and Emrald Ace.
          </p>
        </section>

        {/* Section 2 */}
        <section className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl backdrop-blur-md">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-[#0b63c5]/20 text-cyan-400 shrink-0">
              <Cpu className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">2. Intellectual Property Rights</h2>
          </div>
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
            All proprietary branding assets, client case studies, engineering graphics, source code, visual design elements, and technical documentation displayed on <strong className="text-white font-semibold">emraldace.ae</strong> remain the exclusive intellectual property of Emrald Ace General Contracting & Electromechanical. Reproduction, scrapers, or unauthorized republication without explicit written authorization is prohibited.
          </p>
        </section>

        {/* Section 3 */}
        <section className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl backdrop-blur-md">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-[#0b63c5]/20 text-cyan-400 shrink-0">
              <ShieldAlert className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">3. Limitation of Liability</h2>
          </div>
          <div className="text-slate-200 text-sm sm:text-base leading-relaxed space-y-3">
            <p>
              While Emrald Ace exercises every effort to ensure instant loading speed, technical accuracy, and site uptime, we shall not be held liable for:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
              <li>Temporary site disruptions caused by third-party hosting networks or ISP routings.</li>
              <li>Outdated information prior to manual website updates.</li>
              <li>Unforeseen indirect loss resulting from site navigation or form transmission delays.</li>
            </ul>
          </div>
        </section>

        {/* Section 4 */}
        <section className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl backdrop-blur-md">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-[#0b63c5]/20 text-cyan-400 shrink-0">
              <Gavel className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">4. Governing Law & Jurisdiction</h2>
          </div>
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
            These Terms and Conditions shall be governed by and interpreted in accordance with the federal laws of the United Arab Emirates and the local regulations of the Emirate of Abu Dhabi. Courts situated in Abu Dhabi, UAE, hold sole jurisdiction over legal proceedings.
          </p>
        </section>

        {/* Contact Block */}
        <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-[#0b63c5]/30 border border-cyan-500/30 shadow-2xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-[#0b63c5] text-white shrink-0">
              <HelpCircle className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">Legal Inquiry Desk</h2>
          </div>
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-6">
            If you have questions regarding these Terms or formal engineering service agreements, contact our legal team directly:
          </p>
          <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-200 text-xs sm:text-sm max-w-xs">
            <MapPin className="w-4 h-4 text-[#0b63c5] shrink-0" />
            <span>Musaffah, Abu Dhabi, all over UAE</span>
          </div>
        </section>

      </article>
    </main>
  );
}