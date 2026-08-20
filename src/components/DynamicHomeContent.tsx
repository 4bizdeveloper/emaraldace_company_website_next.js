'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HelpCircle, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

interface DynamicHomeContentProps {
  clientLogos: { name: string; url: string }[];
  faqs: { q: string; a: string }[];
}

export default function DynamicHomeContent({ clientLogos = [], faqs = [] }: DynamicHomeContentProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleScroll = useCallback((direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -280 : 280;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    if (!clientLogos.length) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: 240, behavior: 'smooth' });
        }
      }
    }, 3500);

    return () => clearInterval(interval);
  }, [clientLogos.length]);

  const displayLogos = clientLogos.length > 0 ? clientLogos.concat(clientLogos) : [];

  return (
    <main className="bg-slate-950 text-white font-sans antialiased selection:bg-blue-500 selection:text-white">
      {/* TRUSTED BY INDUSTRY LEADERS */}
      <section 
        className="py-12 sm:py-16 bg-slate-950 text-white relative overflow-hidden" 
        aria-label="Trusted Industry Partners"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8">
            <header className="space-y-1">
              <span className="text-xs font-bold text-blue-400 tracking-widest uppercase block">
                Trusted By Industry Leaders
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Strategic Partners Across the Last 5 Years
              </h2>
            </header>
            
            <div className="flex items-center space-x-3 shrink-0">
              <button 
                onClick={() => handleScroll('left')} 
                aria-label="Previous Slide" 
                type="button"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-900 border border-slate-800 hover:bg-[#0b63c5] text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={() => handleScroll('right')} 
                aria-label="Next Slide" 
                type="button"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-900 border border-slate-800 hover:bg-[#0b63c5] text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={scrollRef} 
            className="flex items-center space-x-4 sm:space-x-6 overflow-x-auto py-6 no-scrollbar scroll-smooth snap-x snap-mandatory touch-pan-x"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {displayLogos.map((logo, lIdx) => (
              <article 
                key={`${logo.name}-${lIdx}`} 
                className="relative w-[180px] sm:w-[220px] h-28 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg p-4 snap-center transition-transform duration-300 hover:scale-105"
              >
                <Image 
                  src={logo.url} 
                  alt={`${logo.name} Corporate Partnership Logo`} 
                  fill 
                  sizes="(max-width: 640px) 180px, 220px"
                  priority={lIdx < 4}
                  className="object-contain p-3 rounded-2xl" 
                />
              </article>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-10">
            <Link 
              href="/clients" 
              className="inline-flex w-full sm:w-auto items-center justify-center bg-[#0b63c5] hover:bg-blue-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-blue-600/20 transition-all text-sm group tracking-wide focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <span>Our Clients</span>
              <ChevronRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ SECTION WITH EXPLICIT AEO ANSWERS */}
      <section className="py-12 sm:py-16 bg-slate-950 scroll-mt-10" aria-label="Frequently Asked Questions">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center space-y-3 mb-10 sm:mb-12">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block">
              Knowledge Base
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Frequently Asked Questions
            </h2>
            <div className="w-12 h-1 bg-[#0b63c5] mx-auto rounded-full" aria-hidden="true"></div>
          </header>

          <div className="space-y-4">
            {faqs.map((faq, fIdx) => {
              const isOpen = openFaq === fIdx;
              const faqId = `faq-answer-${fIdx}`;
              return (
                <div 
                  key={fIdx} 
                  className="bg-slate-900 rounded-xl overflow-hidden shadow-md transition-colors border border-slate-800"
                >
                  <button
                    onClick={() => toggleFaq(fIdx)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none focus:bg-slate-800/80 group hover:bg-slate-800/50 transition-colors cursor-pointer"
                    aria-expanded={isOpen}
                    aria-controls={faqId}
                    type="button"
                  >
                    <h3 className="text-sm sm:text-base font-semibold text-slate-100 flex items-start gap-3.5 pr-2 leading-snug">
                      <HelpCircle className="w-5 h-5 text-blue-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" aria-hidden="true" />
                      <span>{faq.q}</span>
                    </h3>
                    <div 
                      className={`w-8 h-8 rounded-full bg-slate-800 text-slate-300 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 bg-[#0b63c5] text-white' : ''
                      }`}
                      aria-hidden="true"
                    >
                      <ChevronDown size={16} />
                    </div>
                  </button>

                  <div 
                    id={faqId}
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="p-5 sm:p-6 pl-12 sm:pl-14 text-xs sm:text-sm font-normal text-slate-300 leading-relaxed bg-slate-950/40 border-t border-slate-800/50">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}