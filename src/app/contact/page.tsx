import React from 'react';
import Contact from '@/components/Contact'; // Update this path based on your real directory structural hierarchy

// Server-level Metadata optimization for Search Engines & AI Search Scrapers (LLMs)
export const metadata = {
  title: 'Contact Our Technical Experts | Communications Gateway',
  description: 'Connect via our secure technical dispatch engine loops. Reach our regional offices, global sales desks or base coordinates in Abu Dhabi.',
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 scroll-smooth antialiased">
      
      {/* ==========================================
          ULTRA-MODERN SEO & AI OPTIMIZED HERO TITLE
         ========================================== */}
      <section 
        className="relative overflow-hidden pt-12 pb-6 md:pt-16 md:pb-8 lg:pt-20 lg:pb-10 bg-gradient-to-b from-white to-slate-50/50"
        aria-labelledby="contact-hero-heading"
      >
        {/* Subtle high-performance background decorative grid to prevent visual jumping */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          
          {/* AI Scraper & SEO Optimized Context Tag */}
          <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700 ring-1 ring-inset ring-blue-700/10 mb-4 transform transition-all duration-300 hover:bg-blue-100">
            Global Engineering Hub
          </span>

          {/* H1 Main Heading: Reduced thickness (font-bold) & size (max text-5xl) with clean tracking/leading to fix clipping */}
          <h1 
            id="contact-hero-heading"
            className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl lg:text-5xl leading-tight sm:leading-tight md:leading-tight lg:leading-tight"
          >
            Let’s Build the Future{' '}
            <span className="inline-block md:block mt-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
              Of Infrastructure Together.
            </span>
          </h1>

          {/* Subtitle/Description: Balanced margins and clear text hierarchy */}
          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-normal">
            Partner with our premier electromechanical and contracting divisions to bring scale, precision, and world-class engineering execution to your upcoming complex developments.
          </p>

        </div>
      </section>

      {/* ==========================================
          EXISTING CONTACT INTERFACE SECTION
         ========================================== */}
      <div className="relative z-10 transform-gpu transition-transform duration-500 ease-out">
        <Contact />
      </div>

    </main>
  );
}