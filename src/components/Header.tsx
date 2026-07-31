'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Mail } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs transition-all duration-300">
      {/* Top Contact Segment Bar */}
      <div className="bg-[#0B63C5] text-white text-[11px] sm:text-xs py-2.5 px-4 sm:px-6 lg:px-8 font-medium">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <span className="tracking-wide">ISO Certified | ICV Certified | UAE Licensed Contractor</span>
          <div className="flex items-center space-x-4">
            <a href="tel:+971528976025" className="flex items-center space-x-1.5 hover:text-orange-400 transition-colors">
              <Phone className="w-3.5 h-3.5" /> <span>+971 52 897 6025</span>
            </a>
            <a href="mailto:sales1@emraldace.com" className="flex items-center space-x-1.5 hover:text-orange-400 transition-colors">
              <Mail className="w-3.5 h-3.5" /> <span>sales1@emraldace.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Primary Navigation Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Genuine Public Folder Logo Image Target Container */}
        <Link href="/" className="flex items-center space-x-3 group focus:outline-hidden">
          <div className="relative w-14 h-14 bg-slate-50 rounded-lg overflow-hidden flex items-center justify-center p-1">
            <Image 
              src="/logo.png" 
              alt="Emrald Ace Logo" 
              width={56} 
              height={56} 
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tight text-[#0B63C5] leading-none">
              EMRALD ACE
            </span>
            <span className="text-[9px] uppercase tracking-widest text-slate-500 font-bold mt-1 block">
              General Contracting & Electromechanical
            </span>
          </div>
        </Link>

        {/* Desktop Interface Menu Options */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-bold tracking-wide text-slate-700">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-colors py-2 relative ${
                  isActive ? 'text-[#0B63C5]' : 'hover:text-[#0B63C5] text-slate-600'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FF6A00] rounded-full animate-fadeIn" />
                )}
              </Link>
            );
          })}
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center bg-[#0B63C5] text-white px-5 py-2.5 rounded-lg font-bold hover:bg-orange-600 transition-all duration-300 shadow-sm shadow-blue-700/20"
          >
            Consultation
          </Link>
        </nav>

        {/* Mobile Interface Toggle Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden p-2 text-slate-700 hover:text-[#0B63C5] focus:outline-hidden transition-colors"
          aria-label="Toggle navigation interface"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Bar View Overlay Drawer Menu */}
      {isOpen && (
        <div className="md:hidden absolute w-full top-full left-0 bg-white border-b border-slate-200 py-4 px-6 space-y-3 shadow-xl transition-all animate-fadeIn z-50">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block py-2.5 text-base font-bold border-b border-slate-50 ${
                pathname === link.href ? 'text-[#0B63C5]' : 'text-slate-800 hover:text-[#0B63C5]'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}