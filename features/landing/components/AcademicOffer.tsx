'use client';

import React, { useState } from 'react';
import { COURSES_CATALOG } from '../courses';
import { CourseCategory, Course } from '../types';
import {
  Clock,
  Calendar,
  Award,
  Check,
  MessageCircle,
  GraduationCap,
  Sparkles,
  ChevronRight,
  Filter,
  Layers
} from 'lucide-react';
import { buildWhatsAppLink, generateCourseInquiryMessage } from '@/utils/whatsapp';

export const AcademicOffer: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');

  const categories = [
    { id: 'all', label: 'Todos los Programas' },
    { id: 'early-years', label: 'Inicial (4-7 años)' },
    { id: 'children', label: 'Children (8-11 años)' },
    { id: 'juniors', label: 'Juniors (12-16 años)' },
    { id: 'adults', label: 'Adultos (+17 años)' },
    { id: 'specialized', label: 'Profesorado & Verano' },
  ];

  const filteredCourses =
    selectedCategory === 'all'
      ? COURSES_CATALOG
      : COURSES_CATALOG.filter((c) => c.category === selectedCategory);

  return (
    <section id="cursos" className="py-20 bg-slate-50 text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-blue-900 text-xs font-bold tracking-wide uppercase mb-3">
            <GraduationCap className="w-4 h-4 text-blue-800" />
            <span>Propuesta Pedagógica Integral</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight">
            Nuestra Oferta Académica
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Cursos estructurados para cada etapa de la vida, con seguimiento individualizado, grupos reducidos y programas avalados internacionalmente.
          </p>
        </div>

        {/* View Switcher & Filters */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200">
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-blue-900 text-white shadow-md shadow-blue-900/20'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Toggle Cards vs Table */}
          <div className="flex items-center gap-1 bg-slate-200/80 p-1 rounded-xl self-end sm:self-auto shrink-0">
            <button
              type="button"
              onClick={() => setViewMode('cards')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                viewMode === 'cards'
                  ? 'bg-white text-blue-950 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
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
                  ? 'bg-white text-blue-950 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Clock className="w-3.5 h-3.5" />
              <span>Tabla de Carga Horaria</span>
            </button>
          </div>
        </div>

        {/* Card View */}
        {viewMode === 'cards' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => {
              const whatsappUrl = buildWhatsAppLink(
                generateCourseInquiryMessage(course.title, course.categoryLabel)
              );

              return (
                <div
                  key={course.id}
                  className={`relative rounded-3xl bg-white border flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                    course.isPopular
                      ? 'border-blue-900 ring-2 ring-blue-900/10 shadow-lg'
                      : 'border-slate-200 shadow-sm hover:border-slate-300'
                  }`}
                >
                  {/* Top Popular Badge */}
                  {course.isPopular && (
                    <div className="absolute -top-3.5 left-6 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 text-xs font-black tracking-wide shadow-md flex items-center gap-1">
                      <Sparkles className="w-3 h-3 fill-slate-950" />
                      <span>Más Elegido</span>
                    </div>
                  )}

                  <div className="p-6 sm:p-7">
                    {/* Header: Category & Hours Pill */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-50 px-2.5 py-1 rounded-md">
                        {course.categoryLabel}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md">
                        <Clock className="w-3.5 h-3.5 text-blue-900" />
                        {course.weeklyHours}
                      </span>
                    </div>

                    {/* Course Title & Age */}
                    <h3 className="text-xl sm:text-2xl font-black text-slate-950 leading-tight">
                      {course.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 mt-1 flex items-center gap-1.5">
                      <span>👥 Edad recomendada:</span>
                      <strong className="text-slate-800">{course.ageRange}</strong>
                    </p>

                    {/* Subtitle / Description */}
                    <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                      {course.description}
                    </p>

                    {/* Highlights list */}
                    <div className="mt-5 pt-5 border-t border-slate-100 space-y-2.5">
                      {course.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-snug">
                          <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Certification note */}
                    {course.certification && (
                      <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-200/70 text-xs text-slate-700 flex items-start gap-2">
                        <Award className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <span>
                          <strong className="font-semibold text-slate-900">Certificación:</strong>{' '}
                          {course.certification}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Card Action Footer */}
                  <div className="p-6 pt-0">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 px-4 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all group"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                      <span>Consultar Horarios y Vacantes</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Table View: Carga Horaria y Modalidad */}
        {viewMode === 'table' && (
          <div className="bg-white rounded-3xl shadow-md border border-slate-200 overflow-hidden">
            <div className="p-6 bg-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg sm:text-xl font-bold flex items-center gap-2">
                  <Clock className="w-5 h-5 text-amber-400" />
                  <span>Cuadro de Carga Horaria Semanal</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  Esquema pedagógico equilibrado para garantizar asimilación y fluidez según la edad.
                </p>
              </div>
              <span className="text-xs font-semibold px-3 py-1 bg-blue-800/60 rounded-full text-blue-200 border border-blue-700">
                Ciclo Lectivo Regular & Especial
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-100/80 text-slate-700 text-xs font-extrabold uppercase tracking-wider border-b border-slate-200">
                    <th className="py-4 px-6">Nivel / Programa</th>
                    <th className="py-4 px-4">Edades</th>
                    <th className="py-4 px-4">Carga Horaria</th>
                    <th className="py-4 px-4">Frecuencia Habitual</th>
                    <th className="py-4 px-4">Certificación</th>
                    <th className="py-4 px-6 text-right">Inscripción</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-800">
                  {COURSES_CATALOG.map((course) => {
                    const whatsappUrl = buildWhatsAppLink(
                      generateCourseInquiryMessage(course.title, course.categoryLabel)
                    );

                    return (
                      <tr key={course.id} className="hover:bg-blue-50/40 transition-colors">
                        <td className="py-4 px-6 font-bold text-slate-950">
                          {course.title}
                          <span className="block text-xs font-normal text-slate-500">
                            {course.categoryLabel}
                          </span>
                        </td>
                        <td className="py-4 px-4 font-medium text-slate-600">
                          {course.ageRange}
                        </td>
                        <td className="py-4 px-4">
                          <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold bg-blue-100 text-blue-900">
                            {course.weeklyHours}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-xs text-slate-600">
                          {course.sessionsPerWeek}
                        </td>
                        <td className="py-4 px-4 text-xs text-slate-600 max-w-xs">
                          {course.certification || 'Evaluación continua EIS'}
                        </td>
                        <td className="py-4 px-6 text-right">
                          <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors"
                          >
                            <MessageCircle className="w-3.5 h-3.5" />
                            <span>Consultar</span>
                          </a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-200 text-xs text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-2">
              <span>* Los horarios exactos se confirman al momento de la matriculación según la disponibilidad de comisiones.</span>
              <a
                href="#selector-nivel"
                className="font-bold text-blue-900 hover:underline flex items-center gap-1"
              >
                <span>Hacer test de nivel previo</span>
                <ChevronRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
