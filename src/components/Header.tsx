'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight, ChevronDown } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Force the home page behavior for all paths uniformly as original
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

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
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

  const serviceLinks = [
    { name: 'All Services', href: '/services/' },
    { name: 'Integrated Facility Management', href: '/services/integrated-facility-management' },
    { name: 'Annual Maintenance Contracts', href: '/services/annual-maintenance-contracts' },
    { name: 'Interior Fit-Out Solutions', href: '/services/interior-fit-out' },
    { name: 'MEP Engineering', href: '/services/mep-engineering' },
    { name: 'General Contracting', href: '/services/general-contracting' },
    { name: 'Specialized Services', href: '/services/specialized-services' },
  ];

  const isTransparent = isHome && !isScrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full h-14 md:h-16 transition-all duration-300 ease-in-out antialiased ${
          isTransparent
            ? 'bg-transparent border-b border-transparent shadow-none'
            : 'bg-slate-950/70 backdrop-blur-md border-b border-white/20 shadow-xs'
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
                General Contracting and Electromechanical-LLC-S.P.C
              </span>
            </div>
          </Link>

          {/* Desktop Interface Navigation Menu */}
          <nav aria-label="Main Navigation" className="hidden md:flex items-center space-x-6 lg:space-x-7 text-sm font-medium tracking-wide">
            {/* Home */}
            <Link
              href="/"
              className={`transition-colors py-1 relative text-[13.5px] font-semibold tracking-wide ${
                pathname === '/' ? 'text-blue-400' : 'text-slate-200 hover:text-blue-400'
              }`}
            >
              Home
              {pathname === '/' && (
                <span className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-blue-400 rounded-full" />
              )}
            </Link>

            {/* About */}
            <Link
              href="/about/"
              className={`transition-colors py-1 relative text-[13.5px] font-semibold tracking-wide ${
                pathname.startsWith('/about') ? 'text-blue-400' : 'text-slate-200 hover:text-blue-400'
              }`}
            >
              About
              {pathname.startsWith('/about') && (
                <span className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-blue-400 rounded-full" />
              )}
            </Link>

            {/* Services Dropdown */}
            <div 
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                type="button"
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`flex items-center space-x-1 py-1 relative text-[13.5px] font-semibold tracking-wide transition-colors focus:outline-none ${
                  pathname.startsWith('/services') ? 'text-blue-400' : 'text-slate-200 hover:text-blue-400'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                {pathname.startsWith('/services') && (
                  <span className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-blue-400 rounded-full" />
                )}
              </button>

              {/* Services Dropdown Menu */}
              <div 
                className={`absolute top-full left-0 w-72 pt-2 transition-all duration-200 ease-out ${
                  isServicesOpen 
                    ? 'opacity-100 translate-y-0 pointer-events-auto' 
                    : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}
              >
                <div className="bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl p-2 space-y-0.5">
                  {serviceLinks.map((service) => {
                    const isServiceActive = pathname === service.href;
                    return (
                      <Link
                        key={service.name}
                        href={service.href}
                        onClick={() => setIsServicesOpen(false)}
                        className={`block px-3 py-2 text-xs font-semibold rounded-lg transition-all duration-150 ${
                          isServiceActive
                            ? 'bg-blue-600/20 text-blue-400'
                            : 'text-slate-200 hover:bg-white/10 hover:text-blue-400'
                        }`}
                      >
                        {service.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Desktop CTA Button */}
            <Link 
              href="/contact/"
              className="inline-flex items-center justify-center bg-[#0b63c5] text-white px-4 py-2 rounded-lg text-xs lg:text-[13px] font-semibold hover:bg-blue-600 hover:shadow-md hover:shadow-blue-500/10 transition-all duration-300 transform hover:-translate-y-0.5 group"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </nav>

          {/* Mobile Navigation Toggle */}
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
        {/* Dark Overlay */}
        <div 
          className="absolute inset-0 bg-slate-950/60 backdrop-blur-xs"
          onClick={() => setIsOpen(false)}
        />
        
        {/* Mobile Right Flyout Drawer */}
        <div 
          className={`absolute top-0 right-0 h-full w-[290px] sm:w-[320px] bg-slate-950 border-l border-white/5 shadow-2xl transition-transform duration-300 ease-out transform flex flex-col justify-between overflow-y-auto ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div>
            <div className="flex items-center justify-between px-5 pt-4 pb-4 border-b border-white/5">
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

              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-xl text-white bg-white/5 hover:bg-white/10 transition-colors focus:outline-none"
                aria-label="Close navigation menu"
              >
                <X className="w-6 h-6 stroke-[2.25]" />
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <div className="p-4 space-y-1">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className={`block py-2.5 px-4 text-[15px] font-semibold rounded-xl transition-colors ${
                  pathname === '/' ? 'bg-white/10 text-blue-400' : 'text-slate-200 hover:bg-white/5 hover:text-blue-400'
                }`}
              >
                Home
              </Link>

              <Link
                href="/about/"
                onClick={() => setIsOpen(false)}
                className={`block py-2.5 px-4 text-[15px] font-semibold rounded-xl transition-colors ${
                  pathname.startsWith('/about') ? 'bg-white/10 text-blue-400' : 'text-slate-200 hover:bg-white/5 hover:text-blue-400'
                }`}
              >
                About
              </Link>

              {/* Mobile Services Accordion */}
              <div>
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className={`flex items-center justify-between w-full py-2.5 px-4 text-[15px] font-semibold rounded-xl transition-colors ${
                    pathname.startsWith('/services') ? 'bg-white/10 text-blue-400' : 'text-slate-200 hover:bg-white/5 hover:text-blue-400'
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>

                {isMobileServicesOpen && (
                  <div className="mt-1 ml-3 pl-3 border-l border-white/10 space-y-1">
                    {serviceLinks.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        onClick={() => {
                          setIsOpen(false);
                          setIsMobileServicesOpen(false);
                        }}
                        className={`block py-2 px-3 text-xs font-medium rounded-lg transition-colors ${
                          pathname === service.href ? 'text-blue-400 font-semibold' : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/contact/"
                onClick={() => setIsOpen(false)}
                className={`block py-2.5 px-4 text-[15px] font-semibold rounded-xl transition-colors ${
                  pathname === '/contact/' || pathname === '/contact' ? 'bg-white/10 text-blue-400' : 'text-slate-200 hover:bg-white/5 hover:text-blue-400'
                }`}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Spacer */}
      <div className={isTransparent ? 'h-0 hidden' : 'h-14 md:h-16 w-full'} aria-hidden="true" />
    </>
  );
}