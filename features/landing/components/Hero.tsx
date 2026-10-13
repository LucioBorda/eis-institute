'use client';

import React from 'react';
import { MessageCircle, Compass, CheckCircle2 } from 'lucide-react';
import { buildWhatsAppLink, generateGeneralInquiryMessage } from '../utils/whatsapp';
import { RevealOnScroll } from './RevealOnScroll';
import { HeroCarousel } from './HeroCarousel';

export const Hero: React.FC = () => {
  const directWhatsAppUrl = buildWhatsAppLink(generateGeneralInquiryMessage());

  return (
    <section className="relative bg-[#001A4D] text-white pt-8 pb-14 sm:pt-16 sm:pb-20 border-b border-blue-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Clean Institutional Eyebrow (Sin adornos de IA) */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#E63956] font-condensed mb-3">
              <span>Cultural Inglesa de Ensenada</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-300">30 Años de Trayectoria</span>
            </div>

            {/* Title: Inclusive for all ages with Oswald condensed feel */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white font-condensed">
              Inglés para{' '}
              <span className="text-[#E63956]">
                todas las edades
              </span>.
            </h1>

            {/* Subtitle */}
            <p className="mt-4 text-sm sm:text-lg text-slate-200 leading-relaxed max-w-2xl font-normal">
              Formación integral para niños, adolescentes y adultos. Tres décadas de prestigio en Ensenada brindando fluidez real con <strong className="text-white font-semibold">certificaciones británicas Anglia ESOL</strong> y el aval académico oficial de la <strong className="text-white font-semibold">UTN</strong>.
            </p>

            {/* Micro value props - Clean & clear */}
            <div className="mt-5 grid grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-200 w-full sm:w-auto">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E63956] shrink-0" />
                <span>Examen nivelatorio</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E63956] shrink-0" />
                <span>Desde los 4 años a adultos</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E63956] shrink-0" />
                <span>Exámenes Anglia (UK)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E63956] shrink-0" />
                <span>Aval oficial de UTN</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm sm:text-base shadow-md transition-colors"
                id="hero-cta-whatsapp"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Consultar por WhatsApp</span>
              </a>

              <a
                href="#cursos"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs sm:text-sm border border-white/20 transition-colors"
                id="hero-cta-cursos"
              >
                <Compass className="w-4 h-4 text-[#E63956]" />
                <span>Ver Cursos</span>
              </a>
            </div>

          </div>

          {/* Right Column: Visual Showcase con carrusel de imágenes rotativo */}
          <div className="lg:col-span-5 relative">
            <RevealOnScroll direction="right" className="mx-auto max-w-sm lg:max-w-none">
              <HeroCarousel />
            </RevealOnScroll>
          </div>

        </div>
      </div>
    </section>
  );
};

export const HeroSection = Hero;
