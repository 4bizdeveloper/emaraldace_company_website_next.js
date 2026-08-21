import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, MapPin, Globe, ShieldCheck, Lock, Scale } from 'lucide-react';

export default function Footer() {
  const activeYear = new Date().getFullYear();

  return (
    <footer 
      className="w-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-200 text-sm pt-16 pb-36 sm:pb-28 lg:pb-24 px-6 sm:px-10 lg:px-12 border-t border-slate-800 relative overflow-hidden select-none transform-gpu"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Emrald Ace Engineering & Facilities Management LLC Footer
      </h2>

      {/* Modern ambient glow elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none transform-gpu" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none transform-gpu" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-10 lg:gap-12 border-b border-slate-800/80 pb-12 mb-8 relative z-10">
        
        {/* Brand & Identity Column */}
        <div className="col-span-1 sm:col-span-2 md:col-span-5 lg:col-span-6 space-y-6">
          <div className="flex items-center space-x-4">
            <div className="relative w-16 h-16 bg-white rounded-xl p-1.5 flex items-center justify-center shadow-xl shadow-black/40 transform-gpu transition-all duration-300 hover:scale-105 hover:rotate-1">
              <Image 
                src="/logo.png" 
                alt="Emrald Ace Corporate Logo" 
                width={56} 
                height={56} 
                className="object-contain w-full h-full transform-gpu" 
                priority
              />
            </div>
            <div>
              <span className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight text-white block antialiased">
                EMRALD <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">ACE</span>
              </span>
              <p className="text-xs text-slate-400 font-medium tracking-wide mt-0.5">
                Engineering & Facilities Management LLC
              </p>
            </div>
          </div>

          <p className="text-slate-300 leading-relaxed text-sm max-w-md antialiased font-normal">
            Integrated engineering expertise, asset maintenance governance, and specialized electromechanical workflow optimization solutions executed across the UAE market scale since 2014.
          </p>

          {/* Business Credentials Badges */}
          <div className="flex flex-wrap items-center gap-2.5 pt-1">
            <div className="flex items-center space-x-1.5 bg-slate-800/90 border border-slate-700/70 px-3 py-1.5 rounded-full text-xs font-medium text-cyan-300 shadow-inner">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>ISO 45001:2018 Certified</span>
            </div>
          </div>
        </div>

        {/* Corporate Navigation Column */}
        <nav className="col-span-1 md:col-span-3 lg:col-span-3 space-y-4" aria-label="Footer Navigation">
          <span className="font-bold text-white uppercase text-xs tracking-wider block border-l-2 border-cyan-400 pl-2.5 antialiased">
            Corporate Navigation
          </span>
          <ul className="space-y-3 text-sm font-medium">
            <li>
              <Link href="/" className="text-slate-300 hover:text-white transition-all duration-200 hover:translate-x-1 inline-block transform-gpu">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-slate-300 hover:text-white transition-all duration-200 hover:translate-x-1 inline-block transform-gpu">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-slate-300 hover:text-white transition-all duration-200 hover:translate-x-1 inline-block transform-gpu">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-slate-300 hover:text-white transition-all duration-200 hover:translate-x-1 inline-block transform-gpu">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        {/* Global Access Center Column */}
        <div className="col-span-1 md:col-span-4 lg:col-span-3 space-y-4">
          <span className="font-bold text-white uppercase text-xs tracking-wider block border-l-2 border-cyan-400 pl-2.5 antialiased">
            Global Access Center
          </span>
          <address className="not-italic space-y-3 text-sm font-medium text-slate-200">
            <div className="flex items-center space-x-3 group">
              <Phone className="w-4 h-4 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)] shrink-0 transition-transform duration-200 group-hover:scale-110 transform-gpu" />
              <a href="tel:+97126751747" className="hover:text-cyan-300 transition-colors duration-200 tracking-wide antialiased">
                +971 2 675 1747
              </a>
            </div>
            <div className="flex items-center space-x-3 group">
              <Mail className="w-4 h-4 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)] shrink-0 transition-transform duration-200 group-hover:scale-110 transform-gpu" />
              <a href="mailto:sales@emraldace.ae" className="hover:text-cyan-300 transition-colors duration-200 tracking-wide antialiased">
                sales@emraldace.ae
              </a>
            </div>
            <div className="flex items-center space-x-3 group">
              <Globe className="w-4 h-4 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)] shrink-0 transition-transform duration-200 group-hover:scale-110 transform-gpu" />
              <a href="https://www.emraldace.ae" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition-colors duration-200 tracking-wide antialiased">
                www.emraldace.ae
              </a>
            </div>
            <div className="flex items-start space-x-3 text-slate-200 group">
              <MapPin className="w-4 h-4 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)] shrink-0 mt-0.5 transition-transform duration-200 group-hover:scale-110 transform-gpu" />
              <span className="leading-relaxed antialiased">
                Musaffah M-14, Abu Dhabi,<br />U.A.E — P.O. Box 91201
              </span>
            </div>
          </address>
        </div>

      </div>

      {/* Bottom Legal & Meta Bar */}
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center space-y-4 text-xs text-slate-400 relative z-10 antialiased">
        
        {/* Legal Privacy Policy & Terms Links */}
        <div className="flex items-center justify-center flex-wrap gap-x-4 gap-y-2 text-slate-300 font-medium pt-1">
          <Link 
            href="/privacy-policy" 
            className="inline-flex items-center gap-1.5 hover:text-cyan-400 transition-colors duration-200 group"
          >
            <Lock className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition-transform duration-200" />
            <span>Privacy Policy</span>
          </Link>

          <span className="text-slate-600 select-none">•</span>

          <Link 
            href="/terms-and-conditions" 
            className="inline-flex items-center gap-1.5 hover:text-cyan-400 transition-colors duration-200 group"
          >
            <Scale className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition-transform duration-200" />
            <span>Terms & Conditions</span>
          </Link>
        </div>

        {/* Copyright & Developer Credits */}
        <p className="text-slate-400 font-medium pt-1">
          &copy; {activeYear} All rights reserved for Emrald Ace | Developed by{' '}
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