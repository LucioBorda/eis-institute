'use client';

import React, { useState } from 'react';
import { COURSES_CATALOG } from '../data/courses';
import {
  Clock,
  Award,
  Check,
  MessageCircle,
  GraduationCap,
  Sparkles,
  Layers
} from 'lucide-react';
import { buildWhatsAppLink, generateGeneralInquiryMessage } from '../utils/whatsapp';

export const CourseCatalog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');

  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'early-years', label: 'Inicial (4-7)' },
    { id: 'children', label: 'Children (8-11)' },
    { id: 'juniors', label: 'Juniors (12-16)' },
    { id: 'adults', label: 'Adultos (+17)' },
    { id: 'specialized', label: 'Especiales' },
  ];

  const filteredCourses =
    selectedCategory === 'all'
      ? COURSES_CATALOG
      : COURSES_CATALOG.filter((c) => c.category === selectedCategory);

  const generalWhatsAppUrl = buildWhatsAppLink(generateGeneralInquiryMessage());

  return (
    <section id="cursos" className="py-12 sm:py-18 bg-white text-[#001A4D] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00205B]/10 border border-[#00205B]/20 text-[#00205B] text-xs font-bold uppercase tracking-wide mb-2">
            <GraduationCap className="w-3.5 h-3.5 text-[#E63956]" />
            <span>Propuesta Pedagógica</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-[#00205B] tracking-tight">
            Nuestros Cursos
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-600">
            Planes de estudio organizados por edades y niveles, con seguimiento personalizado y aval oficial.
          </p>
        </div>

        {/* View Switcher & Category Pills - Non-overlapping responsive layout */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 pb-4 border-b border-slate-100">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all shrink-0 ${
                  selectedCategory === cat.id
                    ? 'bg-[#00205B] text-white shadow-xs'
                    : 'bg-[#F8F9FA] text-slate-600 border border-slate-200 hover:border-slate-300'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Toggle Cards / Table */}
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl shrink-0 self-start md:self-auto">
            <button
              type="button"
              onClick={() => setViewMode('cards')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                viewMode === 'cards'
                  ? 'bg-white text-[#00205B] shadow-xs'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Tarjetas</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('table')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                viewMode === 'table'
                  ? 'bg-white text-[#00205B] shadow-xs'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <Clock className="w-3.5 h-3.5" />
              <span>Carga Horaria</span>
            </button>
          </div>
        </div>

        {/* Card View - Clean without repetitive "Consultar Horario" buttons */}
        {viewMode === 'cards' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className={`relative rounded-2xl sm:rounded-3xl bg-[#F8F9FA] border p-5 sm:p-6 flex flex-col justify-between transition-all hover:shadow-md ${
                  course.isPopular
                    ? 'border-[#00205B] ring-2 ring-[#00205B]/10 shadow-xs'
                    : 'border-slate-200/90'
                }`}
              >
                {/* Popular badge */}
                {course.isPopular && (
                  <div className="absolute -top-3 left-5 px-2.5 py-0.5 rounded-full bg-[#E63956] text-white text-[10px] font-black uppercase tracking-wider shadow-xs flex items-center gap-1">
                    <Sparkles className="w-2.5 h-2.5 fill-white" />
                    <span>Más Elegido</span>
                  </div>
                )}

                <div>
                  {/* Category & Hours pill */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#00205B] bg-white px-2 py-0.5 rounded border border-slate-200">
                      {course.categoryLabel}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-700 bg-white px-2 py-0.5 rounded border border-slate-200">
                      <Clock className="w-3 h-3 text-[#E63956]" />
                      {course.weeklyHours}
                    </span>
                  </div>

                  {/* Title & Age */}
                  <h3 className="text-lg sm:text-xl font-black text-[#00205B] leading-tight">
                    {course.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Edad: <strong className="text-slate-700">{course.ageRange}</strong>
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                    {course.shortDescription || course.description}
                  </p>

                  {/* Highlights */}
                  <div className="mt-3.5 pt-3 border-t border-slate-200/70 space-y-1.5">
                    {course.highlights.slice(0, 3).map((item, idx) => (
                      <div
                        key={idx}
                        className={`flex items-start gap-2 text-xs text-slate-700 leading-snug ${
                          idx === 2 ? 'hidden sm:flex' : 'flex'
                        }`}
                      >
                        <div className="w-3.5 h-3.5 rounded-full bg-[#E63956]/10 text-[#E63956] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Certification note */}
                {course.certification && (
                  <div className="mt-3.5 pt-3 border-t border-slate-200/50 flex items-center gap-1.5 text-[11px] text-slate-600">
                    <Award className="w-3.5 h-3.5 text-[#E63956] shrink-0" />
                    <span className="truncate">
                      <strong className="text-slate-800">Certificación:</strong> {course.certification}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Table View */}
        {viewMode === 'table' && (
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-4 bg-[#001A4D] text-white flex items-center justify-between">
              <div>
                <h3 className="text-sm sm:text-base font-bold flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#E63956]" />
                  <span>Carga Horaria Semanal</span>
                </h3>
              </div>
              <span className="text-[11px] font-semibold text-slate-300">
                Ciclo Lectivo Regular
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-100 text-slate-700 text-[11px] font-extrabold uppercase tracking-wider border-b border-slate-200">
                    <th className="py-3 px-4">Nivel / Programa</th>
                    <th className="py-3 px-3">Edades</th>
                    <th className="py-3 px-3">Carga Horaria</th>
                    <th className="py-3 px-3">Frecuencia</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-800">
                  {COURSES_CATALOG.map((course) => (
                    <tr key={course.id} className="hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-4 font-bold text-[#00205B]">
                        {course.title}
                        <span className="block text-[11px] font-normal text-slate-500">
                          {course.categoryLabel}
                        </span>
                      </td>
                      <td className="py-3 px-3 text-slate-600">{course.ageRange}</td>
                      <td className="py-3 px-3">
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-[#00205B]/10 text-[#00205B]">
                          {course.weeklyHours}
                        </span>
                      </td>
                      <td className="py-3 px-3 text-slate-600">{course.sessionsPerWeek}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Single clean contact strip for all courses */}
        <div className="mt-8 text-center">
          <p className="text-xs text-slate-500 mb-2">
            ¿Tenés dudas sobre aranceles o comisiones disponibles para tu nivel?
          </p>
          <a
            href={generalWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm shadow-sm transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Consultar por WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export const AcademicOffer = CourseCatalog;
