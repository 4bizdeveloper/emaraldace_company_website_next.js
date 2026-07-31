import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, MapPin, Shield, ExternalLink } from 'lucide-react';

export default function Footer() {
  const activeYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-950 text-slate-400 text-xs pt-20 pb-12 px-4 sm:px-6 lg:px-8 border-t-4 border-[#0b63c5] font-medium tracking-wide">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-slate-900 pb-16 mb-8">
        
        {/* Identity Grid Container */}
        <div className="md:col-span-4 space-y-4">
          <div className="flex items-center space-x-3">
            <div className="relative w-10 h-10 bg-white rounded-xl p-1 flex items-center justify-center">
              <Image src="/logo.png" alt="Emrald Ace Corporate Logo" width={36} height={36} className="object-contain" />
            </div>
            <span className="text-lg font-black tracking-tight text-white block">
              EMRALD <span className="text-[#0b63c5]">ACE</span>
            </span>
          </div>
          <p className="text-slate-500 leading-relaxed text-[11px] max-w-sm">
            Integrated engineering expertise, asset maintenance governance, and specialized electromechanical workflow optimization solutions executed across the UAE market scale since 2014.
          </p>
        </div>

        {/* Central Core Nav Navigation Links */}
        <div className="md:col-span-2 space-y-4">
          <span className="font-bold text-white uppercase text-[10px] tracking-widest block border-l-2 border-[#0b63c5] pl-2">Corporate Navigation</span>
          <ul className="space-y-2.5 text-[11px] font-semibold">
            <li><Link href="/" className="hover:text-white transition-colors">Home Base</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">Corporate DNA</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">Service Matrix</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Support Gateway</Link></li>
          </ul>
        </div>

        {/* Global Operations Dispatch Center Hub */}
        <div className="md:col-span-3 space-y-4">
          <span className="font-bold text-white uppercase text-[10px] tracking-widest block border-l-2 border-[#0b63c5] pl-2">Global Access Center</span>
          <ul className="space-y-3 text-[11px] font-semibold text-slate-300">
            <li className="flex items-center space-x-2">
              <Phone className="w-3.5 h-3.5 text-[#0b63c5] shrink-0" />
              <a href="tel:+971528976025" className="hover:text-white transition-colors tracking-wide">+971 52 897 6025</a>
            </li>
            <li className="flex items-center space-x-2">
              <Mail className="w-3.5 h-3.5 text-[#0b63c5] shrink-0" />
              <a href="mailto:sales1@emraldace.com" className="hover:text-white transition-colors tracking-wide">sales1@emraldace.com</a>
            </li>
            <li className="flex items-start space-x-2 text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-[#0b63c5] shrink-0 mt-0.5" />
              <span className="leading-relaxed">Musaffah M-14, Abu Dhabi,<br />United Arab Emirates</span>
            </li>
          </ul>
        </div>

        {/* Compliance Pillar Framework */}
        <div className="md:col-span-3 space-y-4">
          <span className="font-bold text-white uppercase text-[10px] tracking-widest block border-l-2 border-[#0b63c5] pl-2">Compliance Directives</span>
          <div className="space-y-2 bg-slate-900/50 p-4 rounded-xl border border-slate-900 text-[11px] text-slate-400">
            <div className="flex items-center space-x-2"><Shield className="w-3.5 h-3.5 text-blue-400 shrink-0" /> <span>ISO Systems Regulatory Matrix</span></div>
            <div className="flex items-center space-x-2"><Shield className="w-3.5 h-3.5 text-amber-500 shrink-0" /> <span>ICV Certified Alignment Log</span></div>
            <div className="flex items-center space-x-2"><Shield className="w-3.5 h-3.5 text-slate-400 shrink-0" /> <span>Active Official UAE Trade License</span></div>
          </div>
        </div>

      </div>

      {/* Legal and Copyright Protection Bar */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-600 text-[11px] pt-4">
        <span>&copy; {activeYear} Emrald Ace Engineering & Facilities Management LLC. All core commercial operations preserved.</span>
        <div className="flex items-center space-x-1 hover:text-slate-400 transition-colors">
          <a href="https://www.emraldace.com" target="_blank" rel="noopener noreferrer">www.emraldace.com</a>
          <ExternalLink size={10} />
        </div>
      </div>
    </footer>
  );
}