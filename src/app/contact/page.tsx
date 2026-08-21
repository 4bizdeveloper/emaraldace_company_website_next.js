'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Send, CheckCircle2, AlertTriangle, Loader2, ChevronDown } from 'lucide-react';

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
    <main className="min-h-screen bg-slate-950 scroll-smooth antialiased text-slate-100 border-none outline-none">
      
      {/* Schema Structured Data for Search Engine, AI Crawlers & GEO Search */}
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
              "telephone": "+97126751747",
              "email": "sales@emraldace.ae",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Musaffah M-14",
                "addressLocality": "Abu Dhabi",
                "postalCode": "91201",
                "addressCountry": "AE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "addressCountry": "AE"
              }
            }
          })
        }}
      />

      {/* Hero Section */}
      <section 
        className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24 md:pt-40 md:pb-28 lg:pt-48 lg:pb-36 bg-slate-950 isolate min-h-[75vh] flex flex-col justify-center items-center border-b-0"
        aria-labelledby="contact-hero-heading"
      >
        <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)]">
          <Image
            src="/integrated-facility-management-2.webp"
            alt="Integrated Facility Management Engineering Background"
            fill
            priority
            quality={95}
            sizes="100vw"
            aria-hidden="true"
            className="object-cover object-center filter brightness-105 contrast-[1.1] opacity-90 transform scale-105 transition-all duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-slate-950" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-transparent to-slate-950/85" />
          <div className="absolute inset-0 bg-blue-950/15 mix-blend-overlay" />
        </div>

        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-25" />

        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12 text-center relative z-10 my-auto">
          <span className="inline-flex items-center rounded-full bg-blue-900/80 backdrop-blur-md px-3.5 py-1.5 sm:px-4 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-blue-200 ring-1 ring-inset ring-blue-400/40 mb-5 sm:mb-6 shadow-lg shadow-black/50">
            Global Engineering Hub
          </span>

          <h1 
            id="contact-hero-heading"
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-snug sm:leading-tight md:leading-tight lg:leading-tight drop-shadow-xl"
          >
            Let’s Build the Future{' '}
            <span className="inline-block md:block mt-1 sm:mt-2 bg-gradient-to-r from-blue-300 via-indigo-200 to-blue-100 bg-clip-text text-transparent filter drop-shadow">
              Of Infrastructure Together.
            </span>
          </h1>

          <p className="mx-auto mt-5 sm:mt-6 max-w-2xl text-sm sm:text-base md:text-lg text-slate-100 leading-relaxed font-medium drop-shadow-md px-2">
            Partner with our premier electromechanical and contracting divisions to bring scale, precision, and world-class engineering execution to your upcoming complex developments.
          </p>
        </div>

        <div className="relative z-10 pt-6 sm:pt-10 flex flex-col items-center justify-center">
          <button
            onClick={scrollToContent}
            aria-label="Scroll to contact form"
            className="group flex flex-col items-center space-y-2 text-slate-200 hover:text-white transition-colors duration-300 focus:outline-hidden cursor-pointer"
          >
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-slate-200 group-hover:text-blue-300 transition-colors duration-300">
              Scroll Down
            </span>
            <div className="p-2 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/15 group-hover:border-blue-400/60 group-hover:bg-blue-950/60 transition-all duration-300 shadow-lg">
              <ChevronDown size={18} className="animate-bounce text-blue-300 group-hover:text-blue-200 transition-colors" />
            </div>
          </button>
        </div>
      </section>

      {/* Contact Form Section */}
      <section 
        id="contact-interface-section"
        aria-labelledby="contact-heading" 
        className="py-10 sm:py-14 md:py-16 bg-slate-950 font-normal relative z-10 border-none outline-none"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12">
          
          <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-12 text-center">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-blue-400 block">
              Get In Touch
            </span>
            <h2 id="contact-heading" className="text-2xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white leading-tight">
              Connect With <span className="font-semibold text-blue-400">Technical Experts</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-200 max-w-xl mx-auto font-normal leading-relaxed">
              Have a project query or technical scope requirement? Submit your details below and our engineering team will assist you shortly.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-10 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold tracking-tight text-[#0b63c5] mb-6 sm:mb-8">
              Submit Request 
            </h3>
            
            <form onSubmit={handleFormSubmission} className="space-y-5 sm:space-y-6 text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-slate-800 block mb-1">
                    Full Name <span className="text-[#0b63c5]">*</span>
                  </label>
                  <input 
                    id="name" type="text" required name="name" value={formData.name} onChange={handleInputChange}
                    className="w-full bg-slate-50 border-2 border-slate-300 hover:border-slate-400 focus:border-[#0b63c5] focus:bg-white rounded-xl p-3 sm:p-3.5 font-medium text-slate-900 placeholder:text-slate-500 transition-all outline-hidden duration-200"
                    placeholder="Drew Feig"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-bold text-slate-800 block mb-1">
                    Contact Number <span className="text-[#0b63c5]">*</span>
                  </label>
                  <input 
                    id="phone" type="tel" required name="phone" value={formData.phone} onChange={handleInputChange}
                    className="w-full bg-slate-50 border-2 border-slate-300 hover:border-slate-400 focus:border-[#0b63c5] focus:bg-white rounded-xl p-3 sm:p-3.5 font-medium text-slate-900 placeholder:text-slate-500 transition-all outline-hidden duration-200"
                    placeholder="+971 2 675 1747"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-bold text-slate-800 block mb-1">
                  Email Address <span className="text-[#0b63c5]">*</span>
                </label>
                <input 
                  id="email" type="email" required name="email" value={formData.email} onChange={handleInputChange}
                  className="w-full bg-slate-50 border-2 border-slate-300 hover:border-slate-400 focus:border-[#0b63c5] focus:bg-white rounded-xl p-3 sm:p-3.5 font-medium text-slate-900 placeholder:text-slate-500 transition-all outline-hidden duration-200"
                  placeholder="operations@client.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-slate-800 block mb-1">
                  Message <span className="text-slate-600 font-medium text-xs ml-1">(Optional)</span>
                </label>
                <textarea 
                  id="message" name="message" rows={4} value={formData.message} onChange={handleInputChange}
                  className="w-full bg-slate-50 border-2 border-slate-300 hover:border-slate-400 focus:border-[#0b63c5] focus:bg-white rounded-xl p-3 sm:p-3.5 font-medium text-slate-900 placeholder:text-slate-500 transition-all outline-hidden resize-none duration-200"
                  placeholder="Outline modern application details, scope, or facility specifications..."
                />
              </div>

              {status === 'success' && (
                <div role="alert" className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-900 flex items-center space-x-3 text-xs sm:text-sm font-medium">
                  <CheckCircle2 size={18} className="shrink-0 text-emerald-600" />
                  <span>Your message has been safely delivered to our secure configuration workspace desk.</span>
                </div>
              )}

              {status === 'error' && (
                <div role="alert" className="p-4 bg-rose-50 border border-rose-200 rounded-xl text-rose-900 flex items-center space-x-3 text-xs sm:text-sm font-medium">
                  <AlertTriangle size={18} className="shrink-0 text-rose-600" />
                  <span>{responseMsg}</span>
                </div>
              )}

              <div className="pt-2 flex justify-start">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full sm:w-auto px-6 sm:px-8 py-3.5 bg-[#0b63c5] text-white font-semibold rounded-xl hover:bg-slate-950 active:scale-95 sm:active:scale-100 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center space-x-2.5 disabled:bg-slate-300 disabled:text-slate-500 disabled:cursor-not-allowed select-none text-xs uppercase tracking-wider will-change-transform cursor-pointer"
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
      </section>

    </main>
  );
}