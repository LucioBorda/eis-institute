'use client';

import React from 'react';
import Image from 'next/image';
import { MessageCircle, Compass, ShieldCheck, Award, CheckCircle2, Star } from 'lucide-react';
import { buildWhatsAppLink, generateGeneralInquiryMessage } from '../utils/whatsapp';

export const Hero: React.FC = () => {
  const directWhatsAppUrl = buildWhatsAppLink(generateGeneralInquiryMessage());

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#001A4D] via-[#00205B] to-[#001A4D] text-white pt-8 pb-16 sm:pt-14 sm:pb-24">
      {/* Background subtle light effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#E63956]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Pill Badge - Crisp and concise */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E63956]/20 border border-[#E63956]/40 text-[#ffffff] text-xs font-bold mb-4 sm:mb-6 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-[#E63956] animate-ping" />
              <Award className="w-3.5 h-3.5 text-[#E63956]" />
              <span>30 Años Formando en Ensenada</span>
            </div>

            {/* Title: Impactful without taking over the mobile screen */}
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-white">
              Invertí en el futuro de tus hijos con{' '}
              <span className="text-[#E63956] underline decoration-[#E63956]/40 decoration-wavy decoration-2">
                educación de excelencia
              </span>{' '}
              en inglés.
            </h1>

            {/* Subtitle: Short and scannable on mobile */}
            <p className="mt-3 sm:mt-5 text-sm sm:text-lg text-slate-200 leading-relaxed max-w-2xl font-normal">
              La institución referente de la ciudad. Tres décadas guiando hacia la fluidez real con <strong className="text-white font-semibold">certificaciones británicas Anglia ESOL</strong> y el aval académico oficial de la <strong className="text-white font-semibold">UTN</strong>.
            </p>

            {/* Mobile-friendly compact micro-props */}
            <div className="mt-4 sm:mt-6 grid grid-cols-2 gap-2 sm:gap-3 text-xs sm:text-sm text-slate-200 w-full sm:w-auto">
              <div className="flex items-center gap-1.5 bg-white/5 sm:bg-transparent px-2.5 py-1.5 sm:p-0 rounded-lg">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E63956] shrink-0" />
                <span className="font-medium">Nivelación sin cargo</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/5 sm:bg-transparent px-2.5 py-1.5 sm:p-0 rounded-lg">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E63956] shrink-0" />
                <span className="font-medium">Desde los 4 años a adultos</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/5 sm:bg-transparent px-2.5 py-1.5 sm:p-0 rounded-lg">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E63956] shrink-0" />
                <span className="font-medium">Exámenes Anglia (UK)</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/5 sm:bg-transparent px-2.5 py-1.5 sm:p-0 rounded-lg">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E63956] shrink-0" />
                <span className="font-medium">Aval oficial de UTN</span>
              </div>
            </div>

            {/* Action buttons: Clear, thumb-friendly on mobile */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:py-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-sm sm:text-base shadow-lg shadow-emerald-950/40 transition-transform active:scale-95"
                id="hero-cta-whatsapp"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Consultar por WhatsApp</span>
              </a>

              <a
                href="#selector-nivel"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all"
                id="hero-cta-selector"
              >
                <Compass className="w-4 h-4 text-[#E63956]" />
                <span>Descubrí tu Nivel</span>
              </a>
            </div>

            {/* Quick trust footnote */}
            <div className="mt-6 flex items-center gap-2 pt-4 border-t border-blue-900/60 w-full text-xs text-slate-300">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <span>
                <strong className="text-white font-semibold">3 décadas</strong> de confianza en Ensenada
              </span>
            </div>

          </div>

          {/* Right Column: Visual Showcase (Compact & Clean on mobile) */}
          <div className="lg:col-span-5 relative mt-2 sm:mt-0">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              
              {/* Outer decorative card */}
              <div className="relative rounded-2xl sm:rounded-3xl p-2 bg-gradient-to-b from-white/15 to-[#E63956]/20 shadow-2xl backdrop-blur-md">
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[4/3] bg-[#001A4D]">
                  <Image
                    src="/images/alumnos-ninos.webp"
                    alt="Alumnos de EIS Institute en Ensenada"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover object-center"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001A4D]/85 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-[#001A4D]/90 backdrop-blur-md border border-white/10 text-white text-xs">
                    <p className="font-bold text-[#E63956]">Cultural Inglesa de Ensenada</p>
                    <p className="text-slate-300 text-[11px] mt-0.5">Metodología vivencial y grupos reducidos.</p>
                  </div>
                </div>
              </div>

              {/* Floating Stat Card - 30 Años */}
              <div className="absolute -top-3 -left-3 sm:-left-4 bg-[#001A4D]/95 border border-white/15 text-white rounded-xl p-2.5 sm:p-3 shadow-lg flex items-center gap-2.5">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#E63956]/30 border border-[#E63956]/40 flex items-center justify-center text-[#E63956]">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#E63956]" />
                </div>
                <div>
                  <div className="text-sm sm:text-base font-black text-white">30 Años</div>
                  <div className="text-[10px] text-slate-400 font-medium">Ensenada</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// Backwards-compatible export
export const HeroSection = Hero;
