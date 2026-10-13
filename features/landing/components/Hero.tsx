'use client';

import React from 'react';
import Image from 'next/image';
import { MessageCircle, Compass, Award, CheckCircle2, Star } from 'lucide-react';
import { buildWhatsAppLink, generateGeneralInquiryMessage } from '../utils/whatsapp';

export const Hero: React.FC = () => {
  const directWhatsAppUrl = buildWhatsAppLink(generateGeneralInquiryMessage());

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#001A4D] via-[#00205B] to-[#001A4D] text-white pt-8 pb-14 sm:pt-14 sm:pb-20">
      {/* Background subtle light effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#E63956]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E63956]/20 border border-[#E63956]/40 text-white text-xs font-bold mb-4 sm:mb-6 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-[#E63956] animate-ping" />
              <Award className="w-3.5 h-3.5 text-[#E63956]" />
              <span>30 Años Formando en Ensenada</span>
            </div>

            {/* Title: Inclusive for children, teens and adults */}
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-white">
              Educación de excelencia en inglés para{' '}
              <span className="text-[#E63956] underline decoration-[#E63956]/40 decoration-wavy decoration-2">
                todas las edades
              </span>.
            </h1>

            {/* Subtitle */}
            <p className="mt-3 sm:mt-5 text-sm sm:text-lg text-slate-200 leading-relaxed max-w-2xl font-normal">
              Formación integral para niños, adolescentes y adultos. Tres décadas guiando hacia la fluidez real con <strong className="text-white font-semibold">certificaciones británicas Anglia ESOL</strong> y el aval académico oficial de la <strong className="text-white font-semibold">UTN</strong>.
            </p>

            {/* Mobile-friendly micro-props */}
            <div className="mt-4 sm:mt-6 grid grid-cols-2 gap-2 sm:gap-3 text-xs sm:text-sm text-slate-200 w-full sm:w-auto">
              <div className="flex items-center gap-1.5 bg-white/5 sm:bg-transparent px-2.5 py-1.5 sm:p-0 rounded-lg">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E63956] shrink-0" />
                <span className="font-medium">Examen nivelatorio</span>
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

            {/* Action buttons */}
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
                href="#contactanos"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all"
                id="hero-cta-contactanos"
              >
                <Compass className="w-4 h-4 text-[#E63956]" />
                <span>Contactanos</span>
              </a>
            </div>

            {/* Trust footnote */}
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

          {/* Right Column: Clean Visual Showcase (No floating badges over image) */}
          <div className="lg:col-span-5 relative mt-2 sm:mt-0">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
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
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export const HeroSection = Hero;
