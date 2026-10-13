'use client';

import React, { useState } from 'react';
import { FAQS_DATA } from '../data/faqs';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { buildWhatsAppLink, generateGeneralInquiryMessage } from '../utils/whatsapp';

export const FAQ: React.FC = () => {
  // Solo una pregunta abierta a la vez; al abrir una se cierra la anterior
  const [openId, setOpenId] = useState<string | null>('faq-nivel');

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const generalWhatsAppUrl = buildWhatsAppLink(generateGeneralInquiryMessage());

  return (
    <section id="faq" className="py-14 sm:py-20 bg-[#F8F9FA] text-[#001A4D] border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00205B]/10 border border-[#00205B]/20 text-[#00205B] text-xs font-bold uppercase tracking-wide mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-[#E63956]" />
            <span>Dudas Frecuentes</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-[#00205B] tracking-tight">
            Preguntas Frecuentes
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-600">
            Información rápida sobre inscripción, niveles y certificados.
          </p>
        </div>

        {/* Accordion List con transicion suave */}
        <div className="space-y-2.5 sm:space-y-3">
          {FAQS_DATA.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-xl transition-all duration-300 ease-in-out border overflow-hidden ${
                  isOpen
                    ? 'bg-white border-[#00205B]/40 shadow-sm'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full py-3.5 px-4 sm:py-4 sm:px-6 text-left flex items-center justify-between gap-3 focus:outline-hidden transition-colors"
                >
                  <span className="font-bold text-xs sm:text-base text-[#00205B] leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ease-in-out ${
                      isOpen
                        ? 'bg-[#00205B] text-white rotate-180'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300" />
                  </div>
                </button>

                {/* Desplegable animado con CSS Grid */}
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-4 pb-4 sm:px-6 sm:pb-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      <p className="mt-3">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Support Card */}
        <div className="mt-8 sm:mt-10 rounded-xl bg-[#001A4D] text-white p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h3 className="font-bold text-sm sm:text-base">¿Tenés otra consulta puntual?</h3>
            <p className="text-xs text-slate-300 mt-0.5">
              Secretaría de EIS responde por WhatsApp aranceles, promociones y vacantes.
            </p>
          </div>

          <a
            href={generalWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm flex items-center gap-2 shrink-0 transition-transform active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Hablar con Secretaría</span>
          </a>
        </div>

      </div>
    </section>
  );
};

// Backwards-compatible export
export const FaqAccordion = FAQ;
