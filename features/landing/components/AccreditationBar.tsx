'use client';

import React from 'react';
import Image from 'next/image';
import { ACCREDITATION_PARTNERS } from '../data/institutionInfo';
import { ShieldCheck } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

const PARTNER_LOGOS: Record<string, { src: string; alt: string; bg: string; padding: string }> = {
  anglia: {
    src: '/images/anglia-logo2.png',
    alt: 'Logo Anglia ESOL Examinations',
    bg: 'bg-[#1882C0]',
    padding: 'p-0',
  },
  utn: {
    src: '/images/logo-utn.png',
    alt: 'Logo UTN La Plata',
    bg: 'bg-white',
    padding: 'p-1',
  },
  chichester: {
    src: '/images/logo-chichester.png',
    alt: 'Logo Chichester College',
    bg: 'bg-white',
    padding: 'p-1.5',
  },
};

export const AccreditationBar: React.FC = () => {
  return (
    <section id="avales" className="py-10 sm:py-14 bg-white border-y border-slate-200 text-[#001A4D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00205B]/10 border border-[#00205B]/20 text-[#00205B] text-xs font-bold uppercase tracking-wide mb-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#E63956]" />
            <span>Respaldo y Convenios</span>
          </div>
          <h2 className="text-xl sm:text-3xl font-black text-[#00205B] tracking-tight">
            Certificaciones de Validez Real
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-600">
            Homologación con las instituciones de mayor exigencia de Argentina y el Reino Unido.
          </p>
        </div>

        {/* 3 Accreditation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {ACCREDITATION_PARTNERS.map((partner, index) => {
            const logo = PARTNER_LOGOS[partner.id];

            return (
              <RevealOnScroll
                key={partner.id}
                direction={index === 0 ? 'left' : index === 2 ? 'right' : 'left'}
                delay={index * 120}
                className="h-full"
              >
                <div
                  className="h-full rounded-2xl p-5 sm:p-6 bg-[#F8F9FA] border border-slate-200/90 hover:border-[#00205B]/30 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start gap-3 sm:gap-4 mb-2">
                      {/* Logo institucional */}
                      <div
                        className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl border border-slate-200/90 shadow-xs flex items-center justify-center shrink-0 overflow-hidden ${
                          logo?.bg || 'bg-white'
                        } ${logo?.padding || 'p-1'}`}
                      >
                        {logo && (
                          <Image
                            src={logo.src}
                            alt={logo.alt}
                            fill
                            sizes="56px"
                            className="object-contain"
                          />
                        )}
                      </div>

                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-[#00205B] leading-snug">
                          {partner.name}
                        </h3>
                        <p className="text-xs font-semibold text-[#E63956] mt-0.5">
                          {partner.role}
                        </p>
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed mt-2.5">
                      {partner.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-200/70 text-[11px] font-medium text-slate-500 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E63956]" />
                    <span>Sede examinadora en Ensenada</span>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>

      </div>
    </section>
  );
};
