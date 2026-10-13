'use client';

import React from 'react';
import Image from 'next/image';
import { PRIDE_STORIES } from '../data/faqs';
import { Award, Globe } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

export const Testimonials: React.FC = () => {
  const featuredStory = PRIDE_STORIES[0]; // Mención Secco
  const galleryStories = PRIDE_STORIES.slice(1);

  return (
    <section id="orgullo" className="py-12 sm:py-18 bg-[#001A4D] text-white relative overflow-hidden">
      {/* Decorative subtle ambient light */}
      <div className="absolute top-0 right-10 w-80 h-80 bg-[#E63956]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E63956]/20 border border-[#E63956]/30 text-white text-xs font-bold uppercase tracking-wide mb-2">
            <Award className="w-3.5 h-3.5 text-[#E63956]" />
            <span>30 Años de Historia</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Orgullo EIS & Instalaciones
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-300">
            Egresados reconocidos, cuerpo docente propio y sede a pasos del centro de Ensenada.
          </p>
        </div>

        {/* Featured Story Banner: Mención Municipal de Honor (Mario Secco) */}
        {featuredStory && (
          <div className="mb-8 sm:mb-12 rounded-2xl sm:rounded-3xl bg-[#00205B] border border-blue-900/80 p-5 sm:p-8 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-center">
              
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#E63956] text-white text-[10px] font-black uppercase tracking-wider mb-2.5">
                  <Globe className="w-3 h-3" />
                  <span>{featuredStory.badge}</span>
                </div>
                
                <h3 className="text-lg sm:text-2xl font-black text-white leading-tight">
                  {featuredStory.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {featuredStory.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5 text-[11px]">
                  <span className="px-2.5 py-0.5 rounded bg-white/10 text-slate-200 font-semibold">
                    🏛️ Municipalidad de Ensenada
                  </span>
                  <span className="px-2.5 py-0.5 rounded bg-[#E63956]/20 text-white font-semibold border border-[#E63956]/30">
                    🤝 Intendente Mario Secco
                  </span>
                  <span className="px-2.5 py-0.5 rounded bg-white/10 text-slate-200 font-semibold">
                    🎓 Orgullo Comunitario EIS
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5">
                <RevealOnScroll direction="right">
                  <div className="relative rounded-xl overflow-hidden aspect-[4/3] border border-white/20 shadow-md">
                    <Image
                      src={featuredStory.imageSrc}
                      alt={featuredStory.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover object-center"
                      priority
                    />
                  </div>
                </RevealOnScroll>
              </div>

            </div>
          </div>
        )}

        {/* Gallery Grid - Clean without filters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {galleryStories.map((story, index) => (
            <RevealOnScroll
              key={story.id}
              direction={index % 2 === 0 ? 'left' : 'right'}
              delay={(index % 3) * 120}
              className="h-full"
            >
              <div
                className="h-full bg-[#00205B]/80 border border-blue-900/60 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between"
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
            </RevealOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
};

export const PrideAndCampusGallery = Testimonials;
