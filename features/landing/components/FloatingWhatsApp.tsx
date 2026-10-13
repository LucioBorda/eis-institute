'use client';

import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { EIS_CONTACT, buildWhatsAppLink, generateGeneralInquiryMessage } from '@/utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);
  const whatsappUrl = buildWhatsAppLink(generateGeneralInquiryMessage());

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3 pointer-events-none">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="pointer-events-auto hidden sm:flex items-center gap-2 bg-white text-slate-900 px-4 py-2.5 rounded-2xl shadow-2xl border border-slate-200 text-xs font-semibold animate-in fade-in slide-in-from-right-4 duration-300 max-w-xs">
          <span>¿Tenés dudas sobre las inscripciones? ¡Escribinos!</span>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-600 p-0.5"
            aria-label="Cerrar mensaje"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto relative group w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-2xl shadow-emerald-700/50 hover:shadow-emerald-500/60 transition-all duration-300 transform hover:scale-110 active:scale-95"
        aria-label="Contactar a Secretaría de EIS Institute por WhatsApp"
        id="btn-floating-whatsapp"
      >
        <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-30 pointer-events-none" />
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-white relative z-10" />
      </a>
    </div>
  );
};
