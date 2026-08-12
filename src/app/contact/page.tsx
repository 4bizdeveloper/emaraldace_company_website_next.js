'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Phone, Mail, MapPin, Send, CheckCircle2, AlertTriangle, Loader2, ChevronDown } from 'lucide-react';

export const pageMetadata = {
  title: 'Contact Our Technical Experts | Communications Gateway',
  description: 'Connect via our secure technical dispatch engine loops. Reach our regional offices, global sales desks or base coordinates in Abu Dhabi.',
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [responseMsg, setResponseMsg] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmission = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '', email: '', message: '' });
      } else {
        setStatus('error');
        setResponseMsg(data.error || 'Transmission failed.');
      }
    } catch (err) {
      setStatus('error');
      setResponseMsg('Server transmission exception occurred.');
    }
  };

  const scrollToContent = () => {
    const section = document.getElementById('contact-interface-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 scroll-smooth antialiased text-slate-200">
      
      {/* Schema Structured Data for Search Engine & AI Crawlers */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Emrald Ace",
            "description": "Connect with our technical electromechanical and contracting experts.",
            "mainEntity": {
              "@type": "Organization",
              "name": "Emrald Ace General Contracting & Electromechanical",
              "telephone": "+971528976025",
              "email": "sales1@emraldace.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Musaffah M-14",
                "addressLocality": "Abu Dhabi",
                "addressCountry": "AE"
              }
            }
          })
        }}
      />

      {/* ==========================================
          ULTRA-MODERN SEO & AI OPTIMIZED HERO SECTION
         ========================================== */}
      <section 
        className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-48 lg:pb-36 bg-slate-950 isolate min-h-[75vh] flex flex-col justify-center items-center"
        aria-labelledby="contact-hero-heading"
      >
        {/* Seamless Masked & Multi-Gradients Image Container */}
        <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]">
          <Image
            src="/integrated-facility-management-2.webp"
            alt="Integrated Facility Management Engineering Background"
            fill
            priority
            quality={95}
            sizes="100vw"
            aria-hidden="true"
            className="object-cover object-center filter brightness-90 contrast-[1.08] opacity-75 transform scale-105 transition-all duration-1000 ease-out"
          />
          {/* Top/Bottom Seamless Soft Vignette */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/30 to-slate-950" />
          {/* Left/Right Seamless Edge Blend */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-slate-950" />
          {/* Ambient Brand Color Tint */}
          <div className="absolute inset-0 bg-blue-950/20 mix-blend-overlay" />
        </div>

        {/* Continuous high-performance background decorative grid pattern */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-20" />

        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 text-center relative z-10 my-auto">
          
          {/* AI Scraper & SEO Optimized Context Tag */}
          <span className="inline-flex items-center rounded-full bg-blue-950/60 backdrop-blur-md px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-300 ring-1 ring-inset ring-blue-400/30 mb-6 shadow-lg shadow-black/40">
            Global Engineering Hub
          </span>

          {/* H1 Main Heading */}
          <h1 
            id="contact-hero-heading"
            className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl leading-tight sm:leading-tight md:leading-tight lg:leading-tight drop-shadow-lg"
          >
            Let’s Build the Future{' '}
            <span className="inline-block md:block mt-2 bg-gradient-to-r from-blue-400 via-indigo-300 to-blue-200 bg-clip-text text-transparent filter drop-shadow">
              Of Infrastructure Together.
            </span>
          </h1>

          {/* Subtitle/Description */}
          <p className="mx-auto mt-6 max-w-2xl text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed font-normal drop-shadow-sm">
            Partner with our premier electromechanical and contracting divisions to bring scale, precision, and world-class engineering execution to your upcoming complex developments.
          </p>

        </div>

        {/* Scroll Down Indicator Component */}
        <div className="relative z-10 pt-8 sm:pt-12 flex flex-col items-center justify-center">
          <button
            onClick={scrollToContent}
            aria-label="Scroll to contact information section"
            className="group flex flex-col items-center space-y-2 text-slate-300 hover:text-white transition-colors duration-300 focus:outline-hidden cursor-pointer"
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-300 group-hover:text-blue-400 transition-colors duration-300">
              Scroll Down
            </span>
            <div className="p-2 rounded-full bg-slate-900/60 backdrop-blur-md border border-white/10 group-hover:border-blue-500/50 group-hover:bg-blue-950/40 transition-all duration-300 shadow-lg">
              <ChevronDown size={18} className="animate-bounce text-blue-400 group-hover:text-blue-300 transition-colors" />
            </div>
          </button>
        </div>
      </section>

      {/* ==========================================
          EXISTING CONTACT INTERFACE SECTION
         ========================================== */}
      <section 
        id="contact-interface-section"
        aria-labelledby="contact-heading" 
        className="py-12 md:py-16 bg-slate-950 font-normal relative z-10"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Symmetric Dual-Column Core Split Layout Container */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-stretch">
            
            {/* Left Column: Title Context + Vertically Centered Contact Informational Channels */}
            <div className="grid-cols-1 lg:col-span-5 flex flex-col justify-center h-full">
              
              {/* Integrated Top Header Context */}
              <div className="space-y-4 mb-12 lg:mb-16 text-center lg:text-left">
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-blue-400 block">
                  Get In Touch
                </span>
                <h2 id="contact-heading" className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white leading-tight">
                  Connect With <span className="font-semibold text-blue-400">Technical Experts</span>
                </h2>
                <p className="text-sm text-slate-400 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
                  Have a project query or technical scope requirement? Reach out and our engineering team will assist you shortly.
                </p>
              </div>

              {/* Ultra-Minimal Stacked Info Blocks */}
              <address className="space-y-10 not-italic flex flex-col items-center lg:items-stretch">
                
                {/* Field 1: Phone */}
                <div className="group flex items-start space-x-5 w-full max-w-sm lg:max-w-none">
                  <div className="p-3 bg-slate-900/60 text-blue-400 rounded-full border border-white/5 shadow-xs transition-colors group-hover:bg-[#0b63c5] group-hover:text-white duration-300 shrink-0">
                    <Phone size={18} strokeWidth={1.5} />
                  </div>
                  <div className="space-y-1 pt-0.5">
                    <span className="block text-[10px] uppercase font-bold text-slate-400 tracking-[0.15em] leading-none">Call Regional Office</span>
                    <a href="tel:+971528976025" className="block text-base font-light text-slate-300 hover:text-blue-400 transition-colors duration-200 tracking-wide">
                      +971 52 897 6025
                    </a>
                  </div>
                </div>

                {/* Field 2: Email */}
                <div className="group flex items-start space-x-5 w-full max-w-sm lg:max-w-none">
                  <div className="p-3 bg-slate-900/60 text-blue-400 rounded-full border border-white/5 shadow-xs transition-colors group-hover:bg-[#0b63c5] group-hover:text-white duration-300 shrink-0">
                    <Mail size={18} strokeWidth={1.5} />
                  </div>
                  <div className="space-y-1 pt-0.5">
                    <span className="block text-[10px] uppercase font-bold text-slate-400 tracking-[0.15em] leading-none">Email Global Sales</span>
                    <a href="mailto:sales1@emraldace.com" className="block text-base font-light text-slate-300 hover:text-blue-400 transition-colors duration-200 tracking-wide">
                      sales1@emraldace.com
                    </a>
                  </div>
                </div>

                {/* Field 3: Location */}
                <div className="group flex items-start space-x-5 w-full max-w-sm lg:max-w-none">
                  <div className="p-3 bg-slate-900/60 text-slate-100 rounded-full border border-white/5 shadow-xs transition-colors group-hover:bg-slate-900 group-hover:text-white duration-300 shrink-0">
                    <MapPin size={18} strokeWidth={1.5} />
                  </div>
                  <div className="space-y-1 pt-0.5">
                    <span className="block text-[10px] uppercase font-bold text-slate-400 tracking-[0.15em] leading-none">Headquarters Coordinates</span>
                    <p className="text-sm font-light text-slate-400 leading-relaxed max-w-xs">
                      Musaffah M-14, Abu Dhabi, United Arab Emirates
                    </p>
                  </div>
                </div>
                
              </address>
            </div>

            {/* Right Column: Premium Form Block */}
            <div className="grid-cols-1 lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border-2 border-slate-300 shadow-sm transition-all duration-300">
              <h3 className="text-xl font-semibold tracking-tight text-[#0b63c5] mb-8">
                Submit Request 
              </h3>
              
              <form onSubmit={handleFormSubmission} className="space-y-6 text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-slate-700 block mb-1">
                      Full Name <span className="text-[#0b63c5]">*</span>
                    </label>
                    <input 
                      id="name" type="text" required name="name" value={formData.name} onChange={handleInputChange}
                      className="w-full bg-slate-50 border-2 border-slate-400 hover:border-slate-500 focus:border-[#0b63c5] focus:bg-white rounded-xl p-3.5 font-normal text-slate-900 placeholder:text-slate-500 transition-all outline-hidden duration-200"
                      placeholder="Drew Feig"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-semibold text-slate-700 block mb-1">
                      Contact Number <span className="text-[#0b63c5]">*</span>
                    </label>
                    <input 
                      id="phone" type="tel" required name="phone" value={formData.phone} onChange={handleInputChange}
                      className="w-full bg-slate-50 border-2 border-slate-400 hover:border-slate-500 focus:border-[#0b63c5] focus:bg-white rounded-xl p-3.5 font-normal text-slate-900 placeholder:text-slate-500 transition-all outline-hidden duration-200"
                      placeholder="+971 52 897 6025"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-slate-700 block mb-1">
                    Email Address <span className="text-[#0b63c5]">*</span>
                  </label>
                  <input 
                    id="email" type="email" required name="email" value={formData.email} onChange={handleInputChange}
                    className="w-full bg-slate-50 border-2 border-slate-400 hover:border-slate-500 focus:border-[#0b63c5] focus:bg-white rounded-xl p-3.5 font-normal text-slate-900 placeholder:text-slate-500 transition-all outline-hidden duration-200"
                    placeholder="operations@client.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-slate-700 block mb-1">
                    Message <span className="text-slate-500 font-normal text-xs ml-1">(Optional)</span>
                  </label>
                  <textarea 
                    id="message" name="message" rows={4} value={formData.message} onChange={handleInputChange}
                    className="w-full bg-slate-50 border-2 border-slate-400 hover:border-slate-500 focus:border-[#0b63c5] focus:bg-white rounded-xl p-3.5 font-normal text-slate-900 placeholder:text-slate-500 transition-all outline-hidden resize-none duration-200"
                    placeholder="Outline modern application details, scope, or facility specifications..."
                  />
                </div>

                {status === 'success' && (
                  <div role="alert" className="p-4 bg-emerald-50/60 border border-emerald-100 rounded-xl text-emerald-800 flex items-center space-x-3 text-xs sm:text-sm font-normal">
                    <CheckCircle2 size={18} className="shrink-0 text-emerald-600" />
                    <span>Your message has been safely delivered to our secure configuration workspace desk.</span>
                  </div>
                )}

                {status === 'error' && (
                  <div role="alert" className="p-4 bg-rose-50/60 border border-rose-100 rounded-xl text-rose-800 flex items-center space-x-3 text-xs sm:text-sm font-normal">
                    <AlertTriangle size={18} className="shrink-0 text-rose-600" />
                    <span>{responseMsg}</span>
                  </div>
                )}

                {/* Symmetrical Action Button */}
                <div className="pt-2 flex justify-start">
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full sm:w-auto px-8 py-3.5 bg-[#0b63c5] text-white font-medium rounded-xl hover:bg-slate-950 transition-all duration-300 shadow-xs hover:shadow-md flex items-center justify-center space-x-2.5 disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed select-none text-xs uppercase tracking-wider will-change-transform"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={13} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}