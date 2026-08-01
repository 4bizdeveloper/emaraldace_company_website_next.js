'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, AlertTriangle, Loader2 } from 'lucide-react';

// NOTE: Next.js App Router demands metadata to be in a server component. 
// Since this is a combined client file ('use client'), ensure you export this metadata 
// from a separate layout.tsx or a parent server page if strict build errors occur, 
// or leverage it directly here if using alternative architectures.
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

  return (
    <main className="min-h-screen bg-slate-950 scroll-smooth antialiased text-slate-200">
      
      {/* ==========================================
          ULTRA-MODERN SEO & AI OPTIMIZED HERO TITLE
         ========================================== */}
      <section 
        className="relative overflow-hidden pt-16 pb-8 md:pt-24 md:pb-12 lg:pt-28 lg:pb-16 bg-slate-950"
        aria-labelledby="contact-hero-heading"
      >
        {/* Continuous high-performance background decorative grid pattern */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />

        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 text-center">
          
          {/* AI Scraper & SEO Optimized Context Tag */}
          <span className="inline-flex items-center rounded-full bg-blue-950/50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-blue-400 ring-1 ring-inset ring-blue-500/20 mb-6 transform transition-all duration-300 hover:bg-blue-900/50">
            Global Engineering Hub
          </span>

          {/* H1 Main Heading */}
          <h1 
            id="contact-hero-heading"
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl leading-tight sm:leading-tight md:leading-tight lg:leading-tight"
          >
            Let’s Build the Future{' '}
            <span className="inline-block md:block mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-300 bg-clip-text text-transparent">
              Of Infrastructure Together.
            </span>
          </h1>

          {/* Subtitle/Description */}
          <p className="mx-auto mt-6 max-w-2xl text-sm sm:text-base md:text-lg text-slate-400 leading-relaxed font-light">
            Partner with our premier electromechanical and contracting divisions to bring scale, precision, and world-class engineering execution to your upcoming complex developments.
          </p>

        </div>
      </section>

      {/* ==========================================
          EXISTING CONTACT INTERFACE SECTION
         ========================================== */}
      <section 
        aria-labelledby="contact-heading" 
        className="py-12 md:py-16 bg-slate-950 font-normal containment-layout content-visibility-auto"
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
              <h3 className="text-xl font-medium tracking-tight text-slate-900 mb-8">
                Submit Request / Requirement Scope
              </h3>
              
              <form onSubmit={handleFormSubmission} className="space-y-6 text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-medium text-slate-600 block">
                      Full Name <span className="text-[#0b63c5]">*</span>
                    </label>
                    <input 
                      id="name" type="text" required name="name" value={formData.name} onChange={handleInputChange}
                      className="w-full bg-slate-50 border-2 border-slate-300/80 focus:border-[#0b63c5] focus:bg-white rounded-xl p-3.5 font-normal text-slate-800 transition-all outline-hidden duration-200"
                      placeholder="Drew Feig"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-xs font-medium text-slate-600 block">
                      Contact Number <span className="text-[#0b63c5]">*</span>
                    </label>
                    <input 
                      id="phone" type="tel" required name="phone" value={formData.phone} onChange={handleInputChange}
                      className="w-full bg-slate-50 border-2 border-slate-300/80 focus:border-[#0b63c5] focus:bg-white rounded-xl p-3.5 font-normal text-slate-800 transition-all outline-hidden duration-200"
                      placeholder="+971 52 897 6025"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-medium text-slate-600 block">
                    Email Address <span className="text-[#0b63c5]">*</span>
                  </label>
                  <input 
                    id="email" type="email" required name="email" value={formData.email} onChange={handleInputChange}
                    className="w-full bg-slate-50 border-2 border-slate-300/80 focus:border-[#0b63c5] focus:bg-white rounded-xl p-3.5 font-normal text-slate-800 transition-all outline-hidden duration-200"
                    placeholder="operations@client.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-medium text-slate-600 block">
                    Message Scope <span className="text-slate-400 font-light">(Optional)</span>
                  </label>
                  <textarea 
                    id="message" name="message" rows={4} value={formData.message} onChange={handleInputChange}
                    className="w-full bg-slate-50 border-2 border-slate-300/80 focus:border-[#0b63c5] focus:bg-white rounded-xl p-3.5 font-normal text-slate-800 transition-all outline-hidden resize-none duration-200"
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