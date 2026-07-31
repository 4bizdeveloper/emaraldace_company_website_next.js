import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const activeYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-950 text-slate-400 text-xs pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-t-4 border-[#FF6A00] font-medium tracking-wide">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-slate-900 pb-12 mb-8">
        
        {/* Brand Target Layer */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="relative w-10 h-10 bg-white rounded-md p-0.5 flex items-center justify-center">
              <Image src="/logo.png" alt="Emrald Ace Logo" width={40} height={40} className="object-contain" />
            </div>
            <span className="text-lg font-black tracking-tight text-white block">
              EMRALD <span className="text-[#FF6A00]">ACE</span>
            </span>
          </div>
          <p className="text-slate-500 leading-relaxed text-[11px] max-w-xs">
            Integrated engineering expertise, facilities management operations models, and electro-mechanical contracting optimization implementations across the UAE territory since 2014.
          </p>
        </div>

        {/* Navigation Map links */}
        <div className="space-y-3">
          <span className="font-bold text-white uppercase text-[10px] tracking-widest block">Quick Links</span>
          <ul className="space-y-2 text-[11px] text-slate-400 font-semibold">
            <li><Link href="/" className="hover:text-white transition-colors">Home Base</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">About Scope</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">Service Modules</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Support Gateway</Link></li>
          </ul>
        </div>

        {/* Structural Address Layout Pillar */}
        <div className="space-y-3">
          <span className="font-bold text-white uppercase text-[10px] tracking-widest block">Headquarters Base</span>
          <p className="leading-relaxed text-slate-500 text-[11px] flex items-start gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#FF6A00] shrink-0 mt-0.5" />
            <span>Musaffah M-14, Abu Dhabi,<br />United Arab Emirates</span>
          </p>
        </div>

        {/* Compliance Pillar */}
        <div className="space-y-3">
          <span className="font-bold text-white uppercase text-[10px] tracking-widest block">Licensing Standards</span>
          <p className="leading-relaxed text-slate-500 text-[11px] space-y-1">
            <span className="block">• ISO Certified Systems Platform</span>
            <span className="block">• ICV Certified Enterprise Alignment</span>
            <span className="block">• Official UAE Licensed Contractor</span>
          </p>
        </div>

      </div>

      {/* Absolute Legal Footer Layer */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-600 text-[11px]">
        <span>&copy; {activeYear} Emrald Ace Engineering & Facilities Management LLC. All structural rights preserved.</span>
        <div className="flex space-x-4">
          <a href="https://www.emraldace.com" className="hover:text-slate-400 transition-colors">www.emraldace.com</a>
        </div>
      </div>
    </footer>
  );
}