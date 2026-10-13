'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { PRIDE_STORIES } from '../faqs';
import { PrideStory } from '../types';
import {
  Award,
  Globe,
  GraduationCap,
  Building,
  HeartHandshake,
  Sparkles,
  ExternalLink,
  ChevronRight,
  Quote
} from 'lucide-react';

export const PrideAndCampusGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'exito' | 'campus' | 'docentes'>('all');
  const [selectedStory, setSelectedStory] = useState<PrideStory | null>(null);

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
    <section id="orgullo" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-700/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold tracking-wide uppercase mb-3">
            <Award className="w-4 h-4 text-amber-400" />
            <span>30 Años de Historias Reales</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Orgullo EIS & Infraestructura
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300">
            Nuestros logros no son promesas de folleto: son el reflejo palpable de nuestros egresados triunfando en el mundo, un cuerpo docente apasionado y un espacio pensado para aprender.
          </p>

          {/* Filter tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: 'all', label: 'Ver Todo' },
              { id: 'exito', label: 'Casos de Éxito & Reconocimientos' },
              { id: 'campus', label: 'Instalaciones & Aulas' },
              { id: 'docentes', label: 'Formación Docente' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id as 'all' | 'exito' | 'campus' | 'docentes')}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                  activeFilter === tab.id
                    ? 'bg-amber-400 text-slate-950 shadow-lg shadow-amber-400/20'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Case Study Hero Banner: Rusia & Secco */}
        <div className="mb-14 rounded-3xl bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 border border-blue-600/30 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Story Text */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-500/40 text-red-200 text-xs font-black tracking-wider uppercase mb-4">
                <Globe className="w-3.5 h-3.5 text-red-400" />
                <span>Distinción Internacional Destacada</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
                Exalumna de EIS representó al país en Rusia con mención municipal
              </h3>

              <div className="relative mt-4 pl-4 border-l-2 border-amber-400 italic text-slate-300 text-sm sm:text-base leading-relaxed">
                <Quote className="w-5 h-5 text-amber-400/50 -ml-2 -mt-2 mb-1" />
                Nuestra egresada fue seleccionada tras un riguroso concurso nacional para participar del Congreso en Rusia, recibiendo el cálido homenaje y reconocimiento personal del intendente de Ensenada, Mario Secco, por dejar en alto a nuestra ciudad.
              </div>

              <div className="mt-6 flex flex-wrap gap-3 text-xs">
                <span className="px-3 py-1.5 rounded-lg bg-blue-900/60 border border-blue-500/30 text-blue-200 font-bold">
                  🇷🇺 Participación en Congreso en Rusia
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-amber-500/20 border border-amber-500/30 text-amber-300 font-bold">
                  🏛️ Mención de Honor Municipio de Ensenada
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 font-bold">
                  🇬🇧 Formación Integral desde Niña en EIS
                </span>
              </div>
            </div>

            {/* Story Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border-2 border-amber-400/30 shadow-2xl">
                <Image
                  src="/images/rusia-congreso.webp"
                  alt="Exalumna de EIS Institute seleccionada para congreso internacional en Rusia con reconocimiento de Ensenada"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-top hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-xs text-white font-medium bg-slate-950/70 p-2.5 rounded-xl backdrop-blur-sm border border-white/10">
                  Foto institucional: Reconocimiento municipal en Ensenada
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleStories.map((story) => (
            <div
              key={story.id}
              className="group bg-slate-800/80 border border-slate-700/80 hover:border-amber-400/50 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                  <Image
                    src={story.imageSrc}
                    alt={story.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                  
                  {/* Category Pill on top of image */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-950/80 backdrop-blur-md text-amber-300 border border-amber-400/30 shadow-md">
                      {story.badge}
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6">
                  <div className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-1">
                    {story.category}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-amber-200 transition-colors leading-snug">
                    {story.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
                    {story.description}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-0">
                <div className="pt-4 border-t border-slate-700/60 flex items-center justify-between text-xs text-slate-400">
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    {story.highlightFact || 'Tradición y Excelencia'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Institution Facilities Summary Strip */}
        <div className="mt-16 rounded-2xl bg-slate-800/60 border border-slate-700 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-600/30 border border-blue-400/30 flex items-center justify-center text-blue-300 shrink-0">
              <Building className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <h4 className="font-bold text-white text-base">Instalaciones Propias en el Centro de Ensenada</h4>
              <p className="text-xs sm:text-sm text-slate-400">
                Ubicación privilegiada sobre calle La Merced, aulas seguras, luminosas y completamente equipadas.
              </p>
            </div>
          </div>
          <a
            href="#selector-nivel"
            className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 transition-colors shrink-0"
          >
            Quiero Conocer el Instituto
          </a>
        </div>

      </div>
    </section>
  );
};
