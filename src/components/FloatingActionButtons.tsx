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
    <>
      {/* Enhanced Ultra-Modern Energy Pulse Keyframes */}
      <style jsx global>{`
        @keyframes energyPulse {
          0% {
            transform: scale(0.9);
            opacity: 0.95;
            box-shadow: 0 0 12px var(--pulse-color);
          }
          70% {
            transform: scale(1.6);
            opacity: 0;
            box-shadow: 0 0 24px var(--pulse-color);
          }
          100% {
            transform: scale(1.6);
            opacity: 0;
          }
        }
        .animate-energy-pulse-1 {
          animation: energyPulse 2.2s cubic-bezier(0.16, 1, 0.3, 1) infinite;
        }
        .animate-energy-pulse-2 {
          animation: energyPulse 2.2s cubic-bezier(0.16, 1, 0.3, 1) 0.8s infinite;
        }
      `}</style>

      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9999] flex flex-col items-center gap-3 sm:gap-4 pointer-events-none print:hidden">
        
        {/* 1. CALL BUTTON (TOP) */}
        <div className="relative group pointer-events-auto">
          {/* Vibrant Energy Radiation Layers (High visibility on light backgrounds) */}
          <div 
            className="absolute inset-0 rounded-full border-2 border-blue-500/80 bg-blue-500/20 animate-energy-pulse-1 pointer-events-none"
            style={{ '--pulse-color': 'rgba(37, 99, 235, 0.6)' } as React.CSSProperties}
          />
          <div 
            className="absolute inset-0 rounded-full border border-cyan-400/70 bg-cyan-400/15 animate-energy-pulse-2 pointer-events-none"
            style={{ '--pulse-color': 'rgba(6, 182, 212, 0.5)' } as React.CSSProperties}
          />

          {/* Accessible Device Tooltip */}
          <span className="absolute right-14 sm:right-16 top-1/2 -translate-y-1/2 scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 bg-slate-900/90 backdrop-blur-md text-white font-semibold text-[10px] sm:text-[11px] uppercase tracking-wider px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg border border-slate-700/50 shadow-xl pointer-events-none whitespace-nowrap">
            Call Engineering Desk
          </span>

          {/* Core Interactive Node with Modern Blue Gradient */}
          <a
            href={`tel:${phoneNumber}`}
            aria-label="Initiate direct voice call connection with Emrald Ace"
            className="relative flex items-center justify-center w-10 h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 bg-gradient-to-tr from-[#024393] via-[#0b63c5] to-[#2563eb] text-white rounded-full shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
            <Phone className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:rotate-12" />
          </a>
        </div>

        {/* 2. OFFICIAL WHATSAPP BUTTON (BOTTOM) */}
        <div className="relative group pointer-events-auto">
          {/* Vibrant Energy Radiation Layers (High visibility on light backgrounds) */}
          <div 
            className="absolute inset-0 rounded-full border-2 border-emerald-500/80 bg-emerald-500/20 animate-energy-pulse-1 pointer-events-none"
            style={{ '--pulse-color': 'rgba(16, 185, 129, 0.6)' } as React.CSSProperties}
          />
          <div 
            className="absolute inset-0 rounded-full border border-teal-400/70 bg-teal-400/15 animate-energy-pulse-2 pointer-events-none"
            style={{ '--pulse-color': 'rgba(45, 212, 191, 0.5)' } as React.CSSProperties}
          />

          {/* Accessible Device Tooltip */}
          <span className="absolute right-14 sm:right-16 top-1/2 -translate-y-1/2 scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 bg-slate-900/90 backdrop-blur-md text-white font-semibold text-[10px] sm:text-[11px] uppercase tracking-wider px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg border border-slate-700/50 shadow-xl pointer-events-none whitespace-nowrap">
            WhatsApp Chat Pipeline
          </span>

          {/* Core Interactive Node with Modern Emerald Gradient */}
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open secure digital communication link with Emrald Ace on WhatsApp"
            className="relative flex items-center justify-center w-10 h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 bg-gradient-to-tr from-[#128C7E] via-[#25D366] to-[#34D399] text-white rounded-full shadow-lg shadow-emerald-600/30 hover:shadow-xl hover:shadow-emerald-500/50 transition-all duration-300 transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
          >
            {/* Official WhatsApp Brand Vector Icon */}
            <svg
              className="w-5 h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.67-1.622-.918-2.214-.242-.577-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.029 6.987 2.894A9.825 9.825 0 0121.892 12c0 5.45-4.436 9.885-9.841 9.885M12 0C5.373 0 0 5.373 0 12c0 2.115.55 4.175 1.597 5.996L0 24l6.183-1.622C7.902 23.385 9.92 24 12 24c6.627 0 12-5.373 12-12C24 5.373 18.627 0 12 0z" />
            </svg>
          </a>
        </div>

      </div>
    </>
  );
}