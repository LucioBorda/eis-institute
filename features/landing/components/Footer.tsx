'use client';

import React from 'react';
import Link from 'next/link';
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  ExternalLink,
  GraduationCap,
  ShieldCheck,
  Award,
  Mail
} from 'lucide-react';
import { EIS_CONTACT, buildWhatsAppLink, generateGeneralInquiryMessage } from '@/utils/whatsapp';

export const Footer: React.FC = () => {
  const currentYear = 2026;
  const whatsappUrl = buildWhatsAppLink(generateGeneralInquiryMessage());

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Column 1: Brand & Identity (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-900 to-indigo-950 flex items-center justify-center text-white shadow-md">
                <GraduationCap className="w-7 h-7 text-amber-300" />
              </div>
              <div>
                <span className="text-2xl font-black text-white tracking-tight leading-none block">
                  EIS <span className="text-blue-400">Institute</span>
                </span>
                <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold mt-0.5 block">
                  Cultural Inglesa de Ensenada
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Institución líder en la enseñanza y difusión del idioma inglés en Ensenada durante más de 30 años. Formamos alumnos bilingües con sólidos valores pedagógicos y certificación internacional.
            </p>

            <div className="flex items-center gap-3">
              <a
                href={EIS_CONTACT.INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-pink-500/50 flex items-center justify-center text-slate-300 hover:text-pink-400 transition-colors shadow-sm"
                aria-label="Instagram de EIS Institute"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href={EIS_CONTACT.FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 flex items-center justify-center text-slate-300 hover:text-blue-400 transition-colors shadow-sm"
                aria-label="Facebook de EIS Institute"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 flex items-center justify-center text-slate-300 hover:text-emerald-400 transition-colors shadow-sm"
                aria-label="WhatsApp de EIS Institute"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Program Navigation (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-extrabold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-400" />
              <span>Programas Académicos</span>
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <a href="#cursos" className="hover:text-amber-300 transition-colors">
                  Playgroup (Jardín 4-5 años)
                </a>
              </li>
              <li>
                <a href="#cursos" className="hover:text-amber-300 transition-colors">
                  Initial 1-3 & Preparatory (5-7 años)
                </a>
              </li>
              <li>
                <a href="#cursos" className="hover:text-amber-300 transition-colors">
                  Children 1-3 (Primaria)
                </a>
              </li>
              <li>
                <a href="#cursos" className="hover:text-amber-300 transition-colors">
                  Juniors 1-3 (Secundaria & Teens)
                </a>
              </li>
              <li>
                <a href="#cursos" className="hover:text-amber-300 transition-colors">
                  Adults 1-6 (Niveles A1 a C1)
                </a>
              </li>
              <li>
                <a href="#cursos" className="hover:text-amber-300 transition-colors">
                  Profesorado & Formación Docente
                </a>
              </li>
              <li>
                <a href="#cursos" className="hover:text-amber-300 transition-colors">
                  Summer Intensive Course (Verano)
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Hours (5 cols) */}
          <div className="lg:col-span-5">
            <h4 className="text-white font-extrabold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span>Sede & Secretaría Ensenada</span>
            </h4>

            <div className="space-y-3.5 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Sede Central Ensenada</p>
                  <p className="text-slate-400 text-xs sm:text-sm">{EIS_CONTACT.ADDRESS}</p>
                  <a
                    href={EIS_CONTACT.MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 hover:underline mt-1 font-semibold"
                  >
                    <span>Ver ubicación en Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <span className="text-slate-400 text-xs block">Teléfono Secretaría:</span>
                  <a
                    href={`tel:${EIS_CONTACT.PHONE_DISPLAY.replace(/[^0-9]/g, '')}`}
                    className="font-bold text-white hover:text-emerald-400 transition-colors"
                  >
                    {EIS_CONTACT.PHONE_DISPLAY} (4695201)
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-amber-400 shrink-0" />
                <div>
                  <span className="text-slate-400 text-xs block">Horario de Atención:</span>
                  <span className="font-medium text-white">{EIS_CONTACT.SCHEDULE_HOURS}</span>
                </div>
              </div>
            </div>

            {/* Quick Map preview badge */}
            <div className="mt-5 p-3.5 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-white block">Convenio Anglia ESOL & UTN</span>
                <span className="text-[11px] text-slate-400">Centro examinador oficial en Ensenada</span>
              </div>
              <a
                href={EIS_CONTACT.MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1 transition-colors"
              >
                <span>Cómo Llegar</span>
              </a>
            </div>

          </div>

        </div>

        {/* Bottom credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {currentYear} EIS Institute (Cultural Inglesa de Ensenada). Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Institución Habilitada con Aval Oficial
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
