import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const activeYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-950 text-slate-300 text-sm pt-16 pb-8 px-4 sm:px-6 lg:px-8 border-t-4 border-[#0b63c5] font-normal tracking-normal select-none">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 border-b border-slate-800/80 pb-12 mb-8">
        
        {/* Brand & Identity Column */}
        <div className="md:col-span-5 lg:col-span-6 space-y-4">
          <div className="flex items-center space-x-3">
            <div className="relative w-11 h-11 bg-white rounded-xl p-1 flex items-center justify-center shadow-md">
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
              EMRALD <span className="text-[#0b63c5]">ACE</span>
            </span>
          </div>
          <p className="text-slate-400 leading-relaxed text-sm max-w-md">
            Integrated engineering expertise, asset maintenance governance, and specialized electromechanical workflow optimization solutions executed across the UAE market scale since 2014.
          </p>
        </div>

        {/* Corporate Navigation Column */}
        <div className="md:col-span-3 lg:col-span-3 space-y-4">
          <span className="font-bold text-white uppercase text-xs tracking-wider block border-l-2 border-[#0b63c5] pl-2.5">
            Corporate Navigation
          </span>
          <ul className="space-y-3 text-sm font-medium">
            <li>
              <Link href="/" className="hover:text-white transition-colors duration-200 hover:underline underline-offset-4">
                Home Base
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition-colors duration-200 hover:underline underline-offset-4">
                Corporate DNA
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white transition-colors duration-200 hover:underline underline-offset-4">
                Service Matrix
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition-colors duration-200 hover:underline underline-offset-4">
                Support Gateway
              </Link>
            </li>
          </ul>
        </div>

        {/* Global Access Center Column */}
        <div className="md:col-span-4 lg:col-span-3 space-y-4">
          <span className="font-bold text-white uppercase text-xs tracking-wider block border-l-2 border-[#0b63c5] pl-2.5">
            Global Access Center
          </span>
          <ul className="space-y-3 text-sm font-medium text-slate-300">
            <li className="flex items-center space-x-3">
              <Phone className="w-4 h-4 text-[#0b63c5] shrink-0" />
              <a href="tel:+971528976025" className="hover:text-white transition-colors duration-200 tracking-wide">
                +971 52 897 6025
              </a>
            </li>
            <li className="flex items-center space-x-3">
              <Mail className="w-4 h-4 text-[#0b63c5] shrink-0" />
              <a href="mailto:sales1@emraldace.com" className="hover:text-white transition-colors duration-200 tracking-wide">
                sales1@emraldace.com
              </a>
            </li>
            <li className="flex items-start space-x-3 text-slate-400">
              <MapPin className="w-4 h-4 text-[#0b63c5] shrink-0 mt-0.5" />
              <span className="leading-relaxed">
                Musaffah M-14, Abu Dhabi,<br />United Arab Emirates
              </span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Copyright & Powered By Bar */}
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center space-y-2 text-slate-400 text-xs sm:text-sm">
        <p className="leading-normal">
          &copy; {activeYear} All rights reserved for Emrald Ace 
        </p>
        <p className="text-slate-500 text-xs font-medium">
          Powered by{' '}
          <a
            href="https://www.4bizinternational.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-white font-semibold transition-colors duration-200 underline underline-offset-2"
          >
            4biz international
          </a>
        </p>
      </div>
    </footer>
  );
}