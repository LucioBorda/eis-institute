'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const HERO_SLIDES = [
  {
    src: '/images/alumnos-ninos.webp',
    alt: 'Alumnos niños y jóvenes en EIS Institute',
    label: 'Niños & Jóvenes',
    position: 'object-center',
  },
  {
    src: '/images/aula-eis.png',
    alt: 'Clases interactivas y dinámicas en el aula de EIS Institute',
    label: 'Clases Dinámicas',
    position: 'object-center',
  },
  {
    src: '/images/eis-adultos-mayores.png',
    alt: 'Adultos y adultos mayores aprendiendo inglés en EIS Institute',
    label: 'Adultos & Mayores',
    position: 'object-[center_22%]',
  },
];

export const HeroCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div
      className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#00205B] border border-blue-900 shadow-xl select-none group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides con transición de fundido suave (crossfade) */}
      {HERO_SLIDES.map((slide, index) => {
        const isActive = index === currentIndex;

        return (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className={`object-cover ${slide.position}`}
              priority={index === 0}
              loading={index === 0 ? 'eager' : 'lazy'}
            />
          </div>
        );
      })}

      {/* Gradiente sutil inferior para legibilidad de controles */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/60 to-transparent z-20 pointer-events-none" />

      {/* Badge del nivel/etapa correspondiente a la foto */}
      <div className="absolute top-3 left-3 z-20">
        <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-[#001A4D]/85 text-white border border-white/20 backdrop-blur-xs shadow-xs transition-all duration-300">
          {HERO_SLIDES[currentIndex].label}
        </span>
      </div>

      {/* Indicadores inferiores tipo píldora */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20">
        {HERO_SLIDES.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setCurrentIndex(index)}
            aria-label={`Ver diapositiva: ${slide.label}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'w-6 bg-white'
                : 'w-1.5 bg-white/40 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
