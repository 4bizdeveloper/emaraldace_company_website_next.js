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
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background body scroll when drawer flyout is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

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
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out antialiased ${
          isTransparent
            ? 'bg-transparent border-b border-transparent shadow-none'
            : 'bg-white/95 backdrop-blur-md border-b border-[#0b63c5] shadow-xs'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Company Identity */}
          <Link href="/" className="flex items-center space-x-2.5 group focus:outline-hidden">
            <div className={`relative w-9 h-9 rounded-lg overflow-hidden flex items-center justify-center p-0.5 border transition-all duration-300 group-hover:scale-105 ${
              isTransparent ? 'bg-white/10 border-white/20' : 'bg-slate-50 border-slate-100'
            }`}>
              <Image 
                src="/logo.png" 
                alt="Emrald Ace Logo" 
                width={36} 
                height={36} 
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className={`text-base font-black tracking-tight leading-none transition-colors duration-300 ${
                isTransparent ? 'text-white' : 'text-[#0b63c5]'
              }`}>
                EMRALD ACE
              </span>
              <span className={`text-[7.5px] uppercase tracking-widest font-semibold mt-0.5 block max-w-[190px] sm:max-w-none transition-colors duration-300 ${
                isTransparent ? 'text-slate-300' : 'text-slate-500'
              }`}>
                General Contracting & Electromechanical
              </span>
            </div>
          </Link>

          {/* Desktop Interface Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-7 text-sm font-medium tracking-wide">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const isLast = link.name === 'Contact';
              
              if (isLast) {
                return (
                  <Link 
                    key={link.name}
                    href={link.href}
                    className="inline-flex items-center justify-center bg-[#0b63c5] text-white px-4 py-2 rounded-lg font-semibold hover:bg-slate-900 hover:shadow-md hover:shadow-slate-950/10 transition-all duration-300 transform hover:-translate-y-0.5 group"
                  >
                    <span>Contact Us</span>
                    <ArrowUpRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`transition-colors py-1 relative text-[13.5px] font-semibold tracking-wide ${
                    isActive 
                      ? isTransparent ? 'text-white' : 'text-[#0b63c5]' 
                      : isTransparent ? 'text-slate-200 hover:text-white' : 'text-slate-600 hover:text-[#0b63c5]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-[#FF6A00] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Enlarged Modern Mobile Interface Toggle Button */}
          <button 
            onClick={() => setIsOpen(true)} 
            className={`md:hidden p-2.5 focus:outline-hidden transition-all rounded-xl active:scale-95 ${
              isTransparent 
                ? 'text-white bg-white/10 hover:bg-white/20' 
                : 'text-[#0b63c5] bg-blue-50/50 hover:bg-blue-50'
            }`}
            aria-label="Open navigation menu"
          >
            <Menu className="w-7 h-7 stroke-[2.25]" />
          </button>
        </div>
      </header>

      {/* Flyout Mobile Drawer System */}
      <div 
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Dark Backdrop Overlay */}
        <div 
          className="absolute inset-0 bg-slate-900/40 backdrop-blur-xs"
          onClick={() => setIsOpen(false)}
        />
        
        {/* Right Flyout Panel Drawer */}
        <div 
          className={`absolute top-0 right-0 h-full w-[280px] sm:w-[320px] bg-white shadow-2xl transition-transform duration-300 ease-out transform flex flex-col justify-between ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Drawer Top Header Wrapper */}
          <div>
            <div className="flex items-center justify-between px-5 pt-4 pb-4 border-b border-slate-100">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Navigation</span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-xl text-[#0b63c5] bg-blue-50/50 hover:bg-blue-50 transition-colors focus:outline-hidden"
                aria-label="Close navigation menu"
              >
                <X className="w-6 h-6 stroke-[2.25]" />
              </button>
            </div>

            {/* Nav Links Stack */}
            <div className="p-4 space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                const isLast = link.name === 'Contact';

                if (isLast) return null;

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block py-3 px-4 text-[15px] font-semibold rounded-xl transition-colors ${
                      isActive 
                        ? 'bg-blue-50 text-[#0b63c5]' 
                        : 'text-slate-700 hover:bg-slate-50 hover:text-[#0b63c5]'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Drawer Bottom Action Block */}
          <div className="p-4 border-t border-slate-100 bg-slate-50/50">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center w-full bg-[#0b63c5] text-white py-3 px-4 rounded-xl text-sm font-semibold shadow-xs hover:bg-slate-900 transition-colors group"
            >
              <span>Connect Now</span>
              <ArrowUpRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

        </div>
      </div>

      {/* Dynamic Y-Axis Layout Spacer (Matching perfectly to h-16 / 64px size to keep content perfectly underneath) */}
      <div className={isTransparent ? 'h-0 hidden' : 'h-16 w-full'} aria-hidden="true" />
    </>
  );
}