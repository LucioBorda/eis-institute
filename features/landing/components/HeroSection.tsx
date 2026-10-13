'use client';

import React from 'react';
import Image from 'next/image';
import { MessageCircle, Compass, ShieldCheck, Award, Users, CheckCircle2, Star } from 'lucide-react';
import { buildWhatsAppLink, generateGeneralInquiryMessage } from '@/utils/whatsapp';

export const HeroSection: React.FC = () => {
  const directWhatsAppUrl = buildWhatsAppLink(generateGeneralInquiryMessage());

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-blue-950 to-slate-900 text-white pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Background ambient lighting effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/60 border border-blue-500/30 text-blue-200 text-xs sm:text-sm font-semibold mb-6 shadow-inner backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-ping" />
              <Award className="w-4 h-4 text-amber-400" />
              <span>30 Años Formando Futuros Bilingües en Ensenada</span>
            </div>

            {/* Impact Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-white text-balance">
              Invertí en el futuro de tus hijos con{' '}
              <span className="bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 bg-clip-text text-transparent underline decoration-amber-400/40 decoration-wavy decoration-2">
                educación de excelencia
              </span>{' '}
              en inglés.
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl text-pretty font-normal">
              La institución con mayor prestigio de la ciudad. Tres décadas guiando a niños, adolescentes y adultos hacia la fluidez real, con <strong className="text-white font-semibold">certificaciones británicas de Anglia ESOL</strong> y el respaldo académico oficial de la <strong className="text-white font-semibold">UTN</strong>.
            </p>

            {/* Micro value props checklist */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Examen nivelatorio sin cargo</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Clases desde los 4 años hasta adultos</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Convenio con Chichester College (UK)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Aulas modernas y docentes graduados</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-base sm:text-lg shadow-xl shadow-emerald-950/40 hover:shadow-emerald-500/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                id="hero-cta-whatsapp"
              >
                <MessageCircle className="w-5 h-5 fill-slate-950" />
                <span>Consultar por WhatsApp</span>
              </a>

              <a
                href="#selector-nivel"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-base border border-white/20 hover:border-white/40 transition-all backdrop-blur-md"
                id="hero-cta-selector"
              >
                <Compass className="w-5 h-5 text-amber-300" />
                <span>Ver Test de Nivel</span>
              </a>
            </div>

            {/* Quick rating & trust footnote */}
            <div className="mt-8 flex items-center gap-3 pt-6 border-t border-slate-800/80 w-full">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-slate-400">
                <strong className="text-white font-medium">30 años de confianza</strong> elegidos por más de 3 generaciones en Ensenada.
              </p>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative card frame */}
              <div className="relative rounded-3xl p-2 bg-gradient-to-b from-blue-400/20 via-slate-700/20 to-amber-500/20 shadow-2xl backdrop-blur-md">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[4/3] bg-slate-900">
                  <Image
                    src="/images/alumnos-ninos.webp"
                    alt="Alumnos de EIS Institute aprendiendo inglés de forma dinámica y alegre"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  {/* Floating badge inside image */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/10 text-white text-xs">
                    <p className="font-bold text-amber-300">Cultural Inglesa de Ensenada</p>
                    <p className="text-slate-300 mt-0.5">Metodología vivencial, didáctica y estimulante desde el primer día.</p>
                  </div>
                </div>
              </div>

              {/* Floating Stat Card 1: 30 Años */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-slate-900/95 border border-blue-500/30 text-white rounded-2xl p-4 shadow-xl backdrop-blur-md flex items-center gap-3 animate-float-gentle">
                <div className="w-11 h-11 rounded-xl bg-blue-600/30 border border-blue-400/40 flex items-center justify-center text-blue-300">
                  <ShieldCheck className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <div className="text-lg font-black text-white">30 Años</div>
                  <div className="text-[11px] text-slate-400 font-medium">Trayectoria Local</div>
                </div>
              </div>

              {/* Floating Stat Card 2: Exámenes Anglia */}
              <div className="absolute -bottom-6 -right-2 sm:-right-6 bg-slate-900/95 border border-amber-500/30 text-white rounded-2xl p-4 shadow-xl backdrop-blur-md flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300">
                  <Users className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <div className="text-lg font-black text-white">Anglia ESOL</div>
                  <div className="text-[11px] text-slate-400 font-medium">Exámenes de UK</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
