'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { PRIDE_STORIES } from '../data/faqs';
import { Award, Globe, Building } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'exito' | 'campus' | 'docentes'>('all');

  const filterMapping: Record<string, string[]> = {
    all: ['rusia-congreso', 'diplomas-anglia', 'docentes-propios', 'instalaciones-aulas', 'frente-instituto', 'alumnos-ninos'],
    exito: ['rusia-congreso', 'diplomas-anglia'],
    campus: ['instalaciones-aulas', 'frente-instituto', 'alumnos-ninos'],
    docentes: ['docentes-propios', 'diplomas-anglia'],
  };

  const visibleStories = PRIDE_STORIES.filter((story) =>
    filterMapping[activeFilter].includes(story.id)
  );

  return (
    <section id="orgullo" className="py-14 sm:py-20 bg-[#001A4D] text-white relative overflow-hidden">
      {/* Decorative subtle light */}
      <div className="absolute top-0 right-10 w-80 h-80 bg-[#E63956]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header - Compact */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E63956]/20 border border-[#E63956]/30 text-white text-xs font-bold uppercase tracking-wide mb-2">
            <Award className="w-3.5 h-3.5 text-[#E63956]" />
            <span>30 Años de Historia</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Orgullo EIS & Instalaciones
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-300">
            Egresados reconocidos en el mundo, cuerpo docente propio y sede en el centro de Ensenada.
          </p>

          {/* Filter tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 mt-5">
            {[
              { id: 'all', label: 'Todo' },
              { id: 'exito', label: 'Casos de Éxito' },
              { id: 'campus', label: 'Instalaciones' },
              { id: 'docentes', label: 'Docentes' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id as 'all' | 'exito' | 'campus' | 'docentes')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                  activeFilter === tab.id
                    ? 'bg-[#E63956] text-white shadow-xs'
                    : 'bg-white/10 text-slate-300 hover:bg-white/20'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Story Banner: Rusia & Intendente Secco */}
        <div className="mb-8 sm:mb-12 rounded-2xl sm:rounded-3xl bg-[#00205B] border border-blue-900/80 p-4 sm:p-8 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-center">
            
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#E63956] text-white text-[10px] font-black uppercase tracking-wider mb-2">
                <Globe className="w-3 h-3" />
                <span>Distinción Internacional</span>
              </div>
              
              <h3 className="text-lg sm:text-2xl font-black text-white leading-tight">
                Exalumna representó a Argentina en Rusia
              </h3>

              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Seleccionada a nivel nacional para el Congreso Internacional en Rusia, con homenaje y reconocimiento oficial del intendente Mario Secco y el Municipio de Ensenada.
              </p>

              <div className="mt-3 flex flex-wrap gap-1.5 text-[11px]">
                <span className="px-2 py-0.5 rounded bg-white/10 text-slate-200 font-semibold">
                  🇷🇺 Congreso en Rusia
                </span>
                <span className="px-2 py-0.5 rounded bg-[#E63956]/20 text-[#E63956] font-semibold border border-[#E63956]/30">
                  🏛️ Mención Municipal
                </span>
                <span className="px-2 py-0.5 rounded bg-white/10 text-slate-200 font-semibold">
                  🇬🇧 Formada en EIS
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-xl overflow-hidden aspect-[16/10] sm:aspect-[4/3] border border-white/20">
                <Image
                  src="/images/rusia-congreso.webp"
                  alt="Exalumna de EIS Institute con mención de honor municipal"
                  fill
                  sizes="(max-width: 1024px) 100vw, 35vw"
                  className="object-cover object-top"
                />
              </div>
            </div>

          </div>
        </div>

        {/* Gallery Grid - Compact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {visibleStories.map((story) => (
            <div
              key={story.id}
              className="bg-[#00205B]/80 border border-blue-900/60 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                  <Image
                    src={story.imageSrc}
                    alt={story.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#001A4D]/90 text-white border border-white/20">
                      {story.badge}
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#E63956] block">
                    {story.category}
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-white mt-0.5 leading-snug">
                    {story.title}
                  </h4>
                  <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                    {story.shortDescription || story.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Facilities micro-strip */}
        <div className="mt-8 rounded-xl bg-white/5 border border-white/10 p-3.5 sm:p-4 flex items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2.5">
            <Building className="w-4 h-4 text-[#E63956] shrink-0" />
            <span className="text-slate-300">
              Sede céntrica en calle La Merced, Ensenada con aulas climatizadas y multimedia.
            </span>
          </div>
          <a
            href="#selector-nivel"
            className="hidden sm:inline-block px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold shrink-0"
          >
            Conocer
          </a>
        </div>

      </div>
    </section>
  );
};

// Backwards-compatible export
export const PrideAndCampusGallery = Testimonials;
