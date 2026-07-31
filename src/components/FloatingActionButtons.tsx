'use client';

import React from 'react';
import { Phone } from 'lucide-react';

export default function FloatingActionButtons() {
  const phoneNumber = '+971528976025';
  const whatsappNumber = '971528976025';
  const whatsappMessage = encodeURIComponent(
    'Hello Emrald Ace, I reviewed your corporate engineering solutions and would like to schedule an asset optimization consultation.'
  );

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-center gap-5 pointer-events-none print:hidden">
      
      {/* 1. FIXED PHONE CALL HUB BUTTON (TOP Position) */}
      <div className="relative group pointer-events-auto">
        {/* Pulsing Energy Rings */}
        <div className="absolute inset-0 bg-[#0b63c5] rounded-full opacity-40 animate-energyRing pointer-events-none" />
        <div className="absolute inset-0 bg-[#0b63c5] rounded-full opacity-20 animate-energyRing [animation-delay:0.8s] pointer-events-none" />
        
        {/* Accessible Device Tooltip */}
        <span className="absolute right-16 top-1/2 -translate-y-1/2 scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 bg-slate-900 text-white font-bold text-[11px] uppercase tracking-wider px-3 py-1.5 rounded-lg border border-slate-800 shadow-xl pointer-events-none whitespace-nowrap">
          Call Engineering Desk
        </span>

        {/* Core Button Interactive Node */}
        <a
          href={`tel:${phoneNumber}`}
          aria-label="Initiate direct voice call connection with Emrald Ace"
          className="relative flex items-center justify-center w-14 h-14 bg-[#0b63c5] text-white rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 hover:bg-blue-600 focus:outline-hidden focus:ring-4 focus:ring-blue-300"
        >
          <Phone className="w-5 h-5 animate-[wiggle_2s_infinite_ease-in-out]" />
        </a>
      </div>

      {/* 2. WHATSAPP ENGINE CONNECTIVITY BUTTON (BOTTOM Position) */}
      <div className="relative group pointer-events-auto">
        {/* Pulsing Energy Rings */}
        <div className="absolute inset-0 bg-[#25D366] rounded-full opacity-40 animate-energyRing [animation-delay:0.4s] pointer-events-none" />
        <div className="absolute inset-0 bg-[#25D366] rounded-full opacity-20 animate-energyRing [animation-delay:1.2s] pointer-events-none" />
        
        {/* Accessible Device Tooltip */}
        <span className="absolute right-16 top-1/2 -translate-y-1/2 scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 bg-slate-900 text-white font-bold text-[11px] uppercase tracking-wider px-3 py-1.5 rounded-lg border border-slate-800 shadow-xl pointer-events-none whitespace-nowrap">
          WhatsApp Chat Pipeline
        </span>

        {/* Core Button Interactive Node */}
        <a
          href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open secure digital communication link with Emrald Ace on WhatsApp"
          className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 hover:bg-[#20ba5a] focus:outline-hidden focus:ring-4 focus:ring-emerald-300"
        >
          {/* Custom Modern Vector WhatsApp Asset Graphic */}
          <svg 
            className="w-6 h-6 fill-current" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.413 9.863-9.847.001-2.63-1.019-5.101-2.871-6.957C16.548 1.951 14.074.933 11.46.933c-5.443 0-9.865 4.412-9.867 9.846-.001 1.814.497 3.591 1.442 5.184l-.999 3.646 3.732-.975zm13.116-7.399c-.3-.149-1.777-.874-2.053-.974-.276-.102-.476-.151-.675.151-.199.302-.77.974-.944 1.176-.175.203-.35.228-.65.077-.3-.15-1.267-.467-2.414-1.492-.893-.797-1.496-1.782-1.671-2.083-.176-.302-.019-.465.131-.615.136-.134.301-.352.451-.528.15-.177.2-.303.3-.504.1-.202.05-.378-.025-.529-.075-.151-.675-1.628-.925-2.229-.244-.588-.493-.508-.675-.517-.174-.009-.374-.01-.574-.01-.2 0-.526.075-.802.376-.276.301-1.052 1.029-1.052 2.512 0 1.484 1.077 2.918 1.228 3.12.15.201 2.118 3.235 5.132 4.537.717.31 1.277.494 1.714.633.721.23 1.377.198 1.896.121.578-.088 1.777-.726 2.027-1.43.25-.704.25-1.307.175-1.43-.075-.124-.275-.199-.575-.349z"/>
          </svg>
        </a>
      </div>

    </div>
  );
}