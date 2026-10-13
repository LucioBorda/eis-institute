'use client';

import React, { useState } from 'react';
import {
  User,
  Users,
  MessageCircle,
  Clock,
  CheckCircle2,
  Mail
} from 'lucide-react';
import {
  EnrollmentTarget,
  CourseStartingMode,
  LevelSelectionForm
} from '../types';
import {
  buildWhatsAppLink,
  generateLevelInquiryMessage
} from '../utils/whatsapp';

export const LevelSelector: React.FC = () => {
  const [formData, setFormData] = useState<LevelSelectionForm>({
    target: 'parent_for_child',
    studentName: '',
    studentAge: '8',
    startingMode: 'placement_test',
    preferredSchedule: 'afternoon',
    previousEnglishExperience: true,
    notes: ''
  });

  const [ageError, setAgeError] = useState<string | null>(null);

  const handleTargetChange = (target: EnrollmentTarget) => {
    setAgeError(null);
    setFormData((prev) => {
      let newAge = prev.studentAge;
      if (target === 'adult_self') {
        const num = Number(prev.studentAge);
        if (!num || num < 17) newAge = '20';
      } else {
        const num = Number(prev.studentAge);
        if (!num || num > 16) newAge = '8';
      }
      return {
        ...prev,
        target,
        studentAge: newAge
      };
    });
  };

  const handleAgeChange = (val: string) => {
    const num = Number(val);
    if (formData.target === 'adult_self') {
      if (val !== '' && num < 17) {
        setAgeError('Para cursos de adultos la edad mínima es 17 años.');
      } else {
        setAgeError(null);
      }
    } else {
      if (val !== '' && num < 4) {
        setAgeError('La edad mínima de ingreso en EIS es de 4 años (Playgroup).');
      } else {
        setAgeError(null);
      }
    }
    setFormData((prev) => ({ ...prev, studentAge: val }));
  };

  const handleStartingModeChange = (startingMode: CourseStartingMode) => {
    setFormData((prev) => ({
      ...prev,
      startingMode,
      previousEnglishExperience: startingMode === 'placement_test'
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const num = Number(formData.studentAge);
    if (formData.target === 'adult_self' && num < 17) {
      setAgeError('Para cursos de adultos la edad debe ser igual o mayor a 17 años.');
      return;
    }
    if (formData.target === 'parent_for_child' && num < 4) {
      setAgeError('La edad mínima en nivel inicial es de 4 años.');
      return;
    }

    const generatedMessage = generateLevelInquiryMessage(formData);
    const whatsappUrl = buildWhatsAppLink(generatedMessage);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contactanos" className="py-14 sm:py-20 bg-[#F8F9FA] text-[#001A4D] border-t border-slate-200 scroll-mt-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E63956]/10 border border-[#E63956]/30 text-[#E63956] text-xs font-bold uppercase tracking-wide mb-2">
            <Mail className="w-3.5 h-3.5" />
            <span>Inscripciones y Nivelación</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-[#00205B] tracking-tight">
            Contactanos
          </h2>
          <p className="mt-1 text-xs sm:text-base text-slate-600">
            Completá tus datos y envianos tu consulta directa a Secretaría para coordinar vacante o examen de nivel.
          </p>
        </div>

        {/* Contact Form Container - Editorial & clean styling */}
        <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-slate-200">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Question 1: Who is enrolling */}
            <div>
              <label className="block text-xs sm:text-sm font-bold uppercase tracking-wider text-[#00205B] mb-2 sm:mb-2.5">
                1. ¿Quién se inscribe?
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => handleTargetChange('parent_for_child')}
                  className={`flex items-center gap-2.5 sm:gap-3 p-3 sm:p-3.5 rounded-lg border text-left transition-all ${
                    formData.target === 'parent_for_child'
                      ? 'border-[#00205B] bg-[#00205B]/[0.03] text-[#00205B] ring-1 ring-[#00205B]'
                      : 'border-slate-200 bg-white hover:border-slate-300 text-slate-700'
                  }`}
                >
                  <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-md flex items-center justify-center shrink-0 ${
                    formData.target === 'parent_for_child'
                      ? 'bg-[#00205B] text-white'
                      : 'bg-slate-100 text-slate-600'
                  }`}>
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-xs sm:text-sm leading-tight">Padre / Madre</div>
                    <div className="text-[10px] sm:text-xs text-slate-500 mt-0.5">Para mi hijo/a (4 a 16 años)</div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => handleTargetChange('adult_self')}
                  className={`flex items-center gap-2.5 sm:gap-3 p-3 sm:p-3.5 rounded-lg border text-left transition-all ${
                    formData.target === 'adult_self'
                      ? 'border-[#00205B] bg-[#00205B]/[0.03] text-[#00205B] ring-1 ring-[#00205B]'
                      : 'border-slate-200 bg-white hover:border-slate-300 text-slate-700'
                  }`}
                >
                  <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-md flex items-center justify-center shrink-0 ${
                    formData.target === 'adult_self'
                      ? 'bg-[#00205B] text-white'
                      : 'bg-slate-100 text-slate-600'
                  }`}>
                    <User className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-xs sm:text-sm leading-tight">Adulto</div>
                    <div className="text-[10px] sm:text-xs text-slate-500 mt-0.5">A partir de 17 años</div>
                  </div>
                </button>
              </div>
            </div>

            {/* Question 2: Student Age & Optional Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="student-age" className="block text-xs sm:text-sm font-bold uppercase tracking-wider text-[#00205B] mb-1.5">
                  2. Edad del alumno
                </label>
                <div className="relative">
                  <input
                    type="number"
                    id="student-age"
                    min={formData.target === 'adult_self' ? 17 : 4}
                    max={formData.target === 'adult_self' ? 99 : 17}
                    value={formData.studentAge}
                    onChange={(e) => handleAgeChange(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 focus:border-[#00205B] focus:ring-1 focus:ring-[#00205B] text-[#001A4D] font-bold text-sm outline-hidden transition-all"
                    placeholder={formData.target === 'adult_self' ? 'Ej: 20' : 'Ej: 8'}
                    required
                  />
                  <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 pointer-events-none">
                    años
                  </div>
                </div>
                {ageError && (
                  <p className="text-xs text-[#E63956] font-semibold mt-1">
                    ⚠️ {ageError}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="student-name" className="block text-xs sm:text-sm font-bold uppercase tracking-wider text-[#00205B] mb-1.5">
                  Nombre del alumno <span className="text-[10px] sm:text-xs text-slate-400 font-normal">(Opcional)</span>
                </label>
                <input
                  type="text"
                  id="student-name"
                  value={formData.studentName || ''}
                  onChange={(e) => setFormData((prev) => ({ ...prev, studentName: e.target.value }))}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 focus:border-[#00205B] focus:ring-1 focus:ring-[#00205B] text-[#001A4D] text-sm outline-hidden transition-all"
                  placeholder="Ej: Sofía o Juan"
                />
              </div>
            </div>

            {/* Question 3: Starting Mode */}
            <div>
              <label className="block text-xs sm:text-sm font-bold uppercase tracking-wider text-[#00205B] mb-2 sm:mb-2.5">
                3. ¿Cómo preferís comenzar?
              </label>
              <div className="space-y-2">
                <button
                  type="button"
                  onClick={() => handleStartingModeChange('placement_test')}
                  className={`w-full flex items-start gap-3 p-3 sm:p-3.5 rounded-lg border text-left transition-all ${
                    formData.startingMode === 'placement_test'
                      ? 'border-[#00205B] bg-[#00205B]/[0.03] text-[#00205B] ring-1 ring-[#00205B]'
                      : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/50 text-slate-700'
                  }`}
                >
                  <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                    formData.startingMode === 'placement_test'
                      ? 'bg-[#00205B] text-white'
                      : 'border border-slate-300'
                  }`}>
                    {formData.startingMode === 'placement_test' && <CheckCircle2 className="w-3 h-3" />}
                  </div>
                  <div>
                    <div className="font-bold text-xs sm:text-sm flex items-center gap-2">
                      <span>Examen Nivelatorio</span>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-rose-50 text-[#E63956] border border-rose-200/70">
                        Con conocimientos previos
                      </span>
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-500 mt-1 leading-relaxed">
                      Para quienes ya estudiaron antes. Permite ingresar al curso exacto correspondiente a su nivel.
                    </p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => handleStartingModeChange('level_one')}
                  className={`w-full flex items-start gap-3 p-3 sm:p-3.5 rounded-lg border text-left transition-all ${
                    formData.startingMode === 'level_one'
                      ? 'border-[#00205B] bg-[#00205B]/[0.03] text-[#00205B] ring-1 ring-[#00205B]'
                      : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/50 text-slate-700'
                  }`}
                >
                  <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                    formData.startingMode === 'level_one'
                      ? 'bg-[#00205B] text-white'
                      : 'border border-slate-300'
                  }`}>
                    {formData.startingMode === 'level_one' && <CheckCircle2 className="w-3 h-3" />}
                  </div>
                  <div>
                    <div className="font-bold text-xs sm:text-sm">
                      Nivel Inicial (Comenzar desde Cero)
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-500 mt-1 leading-relaxed">
                      Sin conocimientos previos. Ingreso directo a los grupos iniciales para empezar desde la base.
                    </p>
                  </div>
                </button>
              </div>
            </div>

            {/* Question 4: Schedule */}
            <div>
              <label className="block text-xs sm:text-sm font-bold uppercase tracking-wider text-[#00205B] mb-2 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-slate-500" />
                <span>Turno preferido</span>
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'morning', label: 'Mañana' },
                  { id: 'afternoon', label: 'Tarde' },
                  { id: 'evening', label: 'Vespertino' },
                ].map((slot) => (
                  <button
                    key={slot.id}
                    type="button"
                    onClick={() =>
                      setFormData((prev) => ({
                        ...prev,
                        preferredSchedule: slot.id as 'morning' | 'afternoon' | 'evening'
                      }))
                    }
                    className={`py-2 px-2 rounded-lg border text-center text-xs font-semibold transition-all ${
                      formData.preferredSchedule === slot.id
                        ? 'border-[#00205B] bg-[#00205B] text-white'
                        : 'border-slate-200 bg-slate-50/80 hover:bg-slate-100 text-slate-700'
                    }`}
                  >
                    {slot.label}
                  </button>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 px-5 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm sm:text-base shadow-sm flex items-center justify-center gap-2.5 transition-colors"
                id="btn-contactanos-whatsapp"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Enviar consulta a Secretaría por WhatsApp</span>
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
};
