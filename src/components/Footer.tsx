import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const activeYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-200 text-sm pt-16 pb-8 px-6 sm:px-10 lg:px-12 border-t border-slate-800 relative overflow-hidden select-none">
      {/* Decorative subtle background ambient flare for depth */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 border-b border-slate-800 pb-12 mb-8 relative z-10">
        
        {/* Brand & Identity Column */}
        <div className="md:col-span-5 lg:col-span-6 space-y-5">
          <div className="flex items-center space-x-3">
            <div className="relative w-11 h-11 bg-white rounded-xl p-1 flex items-center justify-center shadow-lg shadow-black/20 transform transition-transform duration-300 hover:scale-105">
              <Image 
                src="/logo.png" 
                alt="Emrald Ace Corporate Logo" 
                width={40} 
                height={40} 
                className="object-contain" 
                priority
              />
            </div>
            <span className="text-xl sm:text-2xl font-black tracking-tight text-white block">
              EMRALD <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">ACE</span>
            </span>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm max-w-md antialiased">
            Integrated engineering expertise, asset maintenance governance, and specialized electromechanical workflow optimization solutions executed across the UAE market scale since 2014.
          </p>
        </div>

        {/* Corporate Navigation Column */}
        <nav className="md:col-span-3 lg:col-span-3 space-y-4" aria-label="Footer Navigation">
          <span className="font-bold text-white uppercase text-xs tracking-wider block border-l-2 border-cyan-400 pl-2.5">
            Corporate Navigation
          </span>
          <ul className="space-y-3 text-sm font-medium">
            <li>
              <Link href="/" className="text-slate-300 hover:text-white transition-all duration-200 hover:translate-x-1 inline-block">
                Home Base
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-slate-300 hover:text-white transition-all duration-200 hover:translate-x-1 inline-block">
                Corporate DNA
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-slate-300 hover:text-white transition-all duration-200 hover:translate-x-1 inline-block">
                Service Matrix
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-slate-300 hover:text-white transition-all duration-200 hover:translate-x-1 inline-block">
                Support Gateway
              </Link>
            </li>
          </ul>
        </nav>

        {/* Global Access Center Column */}
        <div className="md:col-span-4 lg:col-span-3 space-y-4">
          <span className="font-bold text-white uppercase text-xs tracking-wider block border-l-2 border-cyan-400 pl-2.5">
            Global Access Center
          </span>
          <address className="not-italic space-y-3 text-sm font-medium text-slate-200">
            <div className="flex items-center space-x-3 group">
              <Phone className="w-4 h-4 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)] shrink-0 transition-transform group-hover:scale-110" />
              <a href="tel:+971528976025" className="hover:text-cyan-300 transition-colors duration-200 tracking-wide content-visibility-auto">
                +971 52 897 6025
              </a>
            </div>
            <div className="flex items-center space-x-3 group">
              <Mail className="w-4 h-4 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)] shrink-0 transition-transform group-hover:scale-110" />
              <a href="mailto:sales1@emraldace.com" className="hover:text-cyan-300 transition-colors duration-200 tracking-wide content-visibility-auto">
                sales1@emraldace.com
              </a>
            </div>
            <div className="flex items-start space-x-3 text-slate-200 group">
              <MapPin className="w-4 h-4 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)] shrink-0 mt-0.5 transition-transform group-hover:scale-110" />
              <span className="leading-relaxed">
                Musaffah M-14, Abu Dhabi,<br />United Arab Emirates
              </span>
            </div>
          </address>
        </div>

      </div>

      {/* Bottom Copyright & Powered By Bar */}
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center space-y-2 text-slate-400 text-xs sm:text-sm relative z-10">
        <p className="leading-normal text-slate-300">
          &copy; {activeYear} All rights reserved for Emrald Ace 
        </p>
        <p className="text-slate-400 text-xs font-medium">
          Developed by{' '}
          <a
            href="https://www.4bizinternational.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors duration-200"
          >
            4biz international LLC
          </a>
        </p>
      </div>
    </footer>
  );
}