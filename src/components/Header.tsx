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

  // Force the home page behavior for all paths uniformly
  const isHome = true;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background body scroll when drawer flyout is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
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
        className={`fixed top-0 left-0 right-0 z-50 w-full h-14 md:h-16 transition-all duration-300 ease-in-out antialiased ${
          isTransparent
            ? 'bg-transparent border-b border-transparent shadow-none'
            : 'bg-slate-950/70 backdrop-blur-md border-b border-white/5 shadow-xs'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          
          {/* Company Identity */}
          <Link href="/" className="flex items-center space-x-2 md:space-x-3 group focus:outline-none">
            <div className="relative w-8 h-8 md:w-9 md:h-9 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 will-change-transform">
              <Image 
                src="/logo.png" 
                alt="Emrald Ace Logo" 
                width={36} 
                height={36} 
                className="object-contain w-full h-full"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm md:text-base font-black tracking-tight leading-none transition-colors duration-300 text-white">
                EMRALD ACE
              </span>
              <span className="text-[6.5px] md:text-[7.5px] uppercase tracking-widest font-semibold mt-0.5 md:mt-1 block max-w-[190px] sm:max-w-none transition-colors duration-300 text-slate-400">
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
                    className="inline-flex items-center justify-center bg-[#0b63c5] text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 hover:shadow-md hover:shadow-blue-500/10 transition-all duration-300 transform hover:-translate-y-0.5 group"
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
                      ? 'text-blue-400' 
                      : 'text-slate-200 hover:text-blue-400'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-blue-400 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Enlarged Modern Mobile Interface Toggle Button */}
          <button 
            onClick={() => setIsOpen(true)} 
            className="md:hidden p-2 focus:outline-none transition-all rounded-xl active:scale-95 text-white bg-white/5 hover:bg-white/10"
            aria-label="Open navigation menu"
          >
            <Menu className="w-6 h-6 stroke-[2.25]" />
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
          className="absolute inset-0 bg-slate-950/60 backdrop-blur-xs"
          onClick={() => setIsOpen(false)}
        />
        
        {/* Right Flyout Panel Drawer */}
        <div 
          className={`absolute top-0 right-0 h-full w-[280px] sm:w-[320px] bg-slate-950 border-l border-white/5 shadow-2xl transition-transform duration-300 ease-out transform flex flex-col justify-between ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Drawer Top Header Wrapper */}
          <div>
            <div className="flex items-center justify-between px-5 pt-4 pb-4 border-b border-white/5">
              {/* Brand Logo Placement on the Left */}
              <div className="relative w-8 h-8 flex items-center justify-center">
                <Image 
                  src="/logo.png" 
                  alt="Emrald Ace Logo" 
                  width={32} 
                  height={32} 
                  className="object-contain w-full h-full"
                  priority
                />
              </div>

              {/* Action Close Button Shifted Right */}
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-xl text-white bg-white/5 hover:bg-white/10 transition-colors focus:outline-none"
                aria-label="Close navigation menu"
              >
                <X className="w-6 h-6 stroke-[2.25]" />
              </button>
            </div>

            {/* Nav Links Stack */}
            <div className="p-4 space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block py-3 px-4 text-[15px] font-semibold rounded-xl transition-colors ${
                      isActive 
                        ? 'bg-white/10 text-blue-400' 
                        : 'text-slate-200 hover:bg-white/5 hover:text-blue-400'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      {/* Dynamic Spacer */}
      <div className={isTransparent ? 'h-0 hidden' : 'h-14 md:h-16 w-full'} aria-hidden="true" />
    </>
  );
}