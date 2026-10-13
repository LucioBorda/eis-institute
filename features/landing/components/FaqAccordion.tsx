'use client';

import React, { useState } from 'react';
import { FAQS_DATA } from '../faqs';
import {
  ChevronDown,
  HelpCircle,
  MessageCircle,
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { buildWhatsAppLink, generateGeneralInquiryMessage, EIS_CONTACT } from '@/utils/whatsapp';

export const FaqAccordion: React.FC = () => {
  // Default open first FAQ for instant engagement
  const [openIds, setOpenIds] = useState<string[]>(['faq-nivel']);

  const toggleFaq = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const generalWhatsAppUrl = buildWhatsAppLink(generateGeneralInquiryMessage());

  return (
    <section id="faq" className="py-20 bg-slate-50 text-slate-900 border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-blue-900 text-xs font-bold tracking-wide uppercase mb-3">
            <HelpCircle className="w-4 h-4 text-blue-800" />
            <span>Respuestas Claras para Familias & Alumnos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Preguntas Frecuentes
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Todo lo que necesitás saber sobre niveles de ingreso, certificaciones internacionales y metodología de estudio.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {FAQS_DATA.map((faq) => {
            const isOpen = openIds.includes(faq.id);

            return (
              <div
                key={faq.id}
                className={`rounded-2xl transition-all duration-200 border ${
                  isOpen
                    ? 'bg-white border-blue-900/30 shadow-md ring-1 ring-blue-900/10'
                    : 'bg-white border-slate-200/90 hover:border-slate-300 shadow-xs'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full py-5 px-6 sm:px-7 text-left flex items-center justify-between gap-4 focus:outline-hidden"
                >
                  <span className="font-extrabold text-base sm:text-lg text-slate-950 leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-blue-900 text-white rotate-180'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-7 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in-50 duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Contact Card for Unanswered Questions */}
        <div className="mt-12 rounded-3xl bg-gradient-to-r from-blue-950 to-slate-900 text-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-blue-900/40">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400 shrink-0 mx-auto sm:mx-0">
              <MessageCircle className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold">¿Tenés alguna otra consulta puntual?</h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                La secretaría de EIS está a tu disposición para asesorarte sobre aranceles, promociones familiares y horarios.
              </p>
            </div>
          </div>

          <a
            href={generalWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-sm flex items-center gap-2.5 shadow-lg shadow-emerald-950/30 shrink-0 transition-transform hover:scale-105"
          >
            <MessageCircle className="w-4 h-4 fill-slate-950" />
            <span>Hablar con Secretaría</span>
          </a>
        </div>

      </div>
    </section>
  );
};
