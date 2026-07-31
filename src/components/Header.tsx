'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  const isTransparent = isHome && !isScrolled;

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          isTransparent
            ? 'bg-transparent border-b border-transparent shadow-none'
            : 'bg-white/95 backdrop-blur-xl border-b border-slate-100 shadow-xs'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Company Identity */}
          <Link href="/" className="flex items-center space-x-3 group focus:outline-hidden">
            <div className={`relative w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center p-1 border transition-all duration-300 group-hover:scale-105 ${
              isTransparent ? 'bg-white/10 border-white/20' : 'bg-slate-50 border-slate-100'
            }`}>
              <Image 
                src="/logo.png" 
                alt="Emrald Ace Logo" 
                width={48} 
                height={48} 
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className={`text-lg font-black tracking-tight leading-none transition-colors duration-300 ${
                isTransparent ? 'text-white' : 'text-[#0b63c5]'
              }`}>
                EMRALD ACE
              </span>
              <span className={`text-[8px] uppercase tracking-widest font-bold mt-1 block max-w-[220px] sm:max-w-none transition-colors duration-300 ${
                isTransparent ? 'text-slate-300' : 'text-slate-400'
              }`}>
                General Contracting & Electromechanical
              </span>
            </div>
          </Link>

          {/* Desktop Interface Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-bold tracking-wide">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const isLast = link.name === 'Contact';
              
              if (isLast) {
                return (
                  <Link 
                    key={link.name}
                    href={link.href}
                    className="inline-flex items-center justify-center bg-[#0b63c5] text-white px-5 py-2.5 rounded-xl font-bold hover:bg-slate-900 hover:shadow-lg hover:shadow-slate-950/10 transition-all duration-300 transform hover:-translate-y-0.5 group"
                  >
                    <span>Connect Now</span>
                    <ArrowUpRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`transition-colors py-2 relative text-sm tracking-wide ${
                    isActive 
                      ? isTransparent ? 'text-white' : 'text-[#0b63c5]' 
                      : isTransparent ? 'text-slate-200 hover:text-white' : 'text-slate-600 hover:text-[#0b63c5]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FF6A00] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Interface Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className={`md:hidden p-2 focus:outline-hidden transition-colors rounded-xl ${
              isTransparent 
                ? 'text-white hover:bg-white/10' 
                : 'text-slate-700 hover:text-[#0b63c5] hover:bg-slate-50'
            }`}
            aria-label="Toggle navigation interface"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Drawer Overlay Menu */}
        {isOpen && (
          <div className="md:hidden absolute w-full top-full left-0 bg-white border-b border-slate-200 py-4 px-6 space-y-2 shadow-xl animate-fadeIn z-50">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block py-3 px-4 text-base font-bold rounded-xl transition-colors ${
                  pathname === link.href 
                    ? 'bg-blue-50 text-[#0b63c5]' 
                    : 'text-slate-800 hover:bg-slate-50 hover:text-[#0b63c5]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* Dynamic Y-Axis Layout Spacer:
          Reserves exact height (80px / h-20) when the header is opaque so page contents 
          sit strictly below it. Hidden when transparent so home background extends behind. */}
      <div className={isTransparent ? 'h-0 hidden' : 'h-20 w-full'} aria-hidden="true" />
    </>
  );
}