'use client';

import React, { useState } from 'react';
import {
  User,
  Users,
  Sparkles,
  MessageCircle,
  Clock,
  Send,
  BookOpen,
  CheckCircle2,
  ChevronDown
} from 'lucide-react';
import {
  EnrollmentTarget,
  CourseStartingMode,
  LevelSelectionForm
} from '../types';
import {
  buildWhatsAppLink,
  generateLevelInquiryMessage,
  EIS_CONTACT
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

  const [showPreviewMobile, setShowPreviewMobile] = useState(false);

  const handleTargetChange = (target: EnrollmentTarget) => {
    setFormData((prev) => ({
      ...prev,
      target,
      studentAge: target === 'adult_self' ? '25' : '8'
    }));
  };

  const handleStartingModeChange = (startingMode: CourseStartingMode) => {
    setFormData((prev) => ({
      ...prev,
      startingMode,
      previousEnglishExperience: startingMode === 'placement_test'
    }));
  };

  const generatedMessage = generateLevelInquiryMessage(formData);
  const whatsappUrl = buildWhatsAppLink(generatedMessage);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="selector-nivel" className="py-14 sm:py-20 bg-[#F8F9FA] text-[#001A4D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title - Compact */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E63956]/10 border border-[#E63956]/30 text-[#E63956] text-xs font-bold uppercase tracking-wide mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Test de Nivel Rápido</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-[#00205B] tracking-tight">
            Descubrí tu Nivel en 1 Minuto
          </h2>
          <p className="mt-1.5 text-xs sm:text-base text-slate-600">
            Elegí las opciones y recibí el contacto directo con secretaría con tu consulta preconfigurada.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Form Column */}
          <div className="lg:col-span-7 bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-md border border-slate-200">
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              
              {/* Question 1: Who is enrolling */}
              <div>
                <label className="block text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#00205B] mb-2 sm:mb-3">
                  1. ¿Quién se inscribe?
                </label>
                <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                  <button
                    type="button"
                    onClick={() => handleTargetChange('parent_for_child')}
                    className={`flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl sm:rounded-2xl border-2 text-left transition-all ${
                      formData.target === 'parent_for_child'
                        ? 'border-[#00205B] bg-[#00205B]/5 text-[#00205B] shadow-xs'
                        : 'border-slate-200 bg-white hover:border-slate-300 text-slate-700'
                    }`}
                  >
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0 ${
                      formData.target === 'parent_for_child'
                        ? 'bg-[#00205B] text-white'
                        : 'bg-slate-100 text-slate-600'
                    }`}>
                      <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-xs sm:text-base leading-tight">Padre / Madre</div>
                      <div className="text-[10px] sm:text-xs text-slate-500">Para mi hijo/a</div>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleTargetChange('adult_self')}
                    className={`flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl sm:rounded-2xl border-2 text-left transition-all ${
                      formData.target === 'adult_self'
                        ? 'border-[#00205B] bg-[#00205B]/5 text-[#00205B] shadow-xs'
                        : 'border-slate-200 bg-white hover:border-slate-300 text-slate-700'
                    }`}
                  >
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0 ${
                      formData.target === 'adult_self'
                        ? 'bg-[#00205B] text-white'
                        : 'bg-slate-100 text-slate-600'
                    }`}>
                      <User className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-xs sm:text-base leading-tight">Adulto</div>
                      <div className="text-[10px] sm:text-xs text-slate-500">+17 años</div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Question 2: Student Age & Optional Name */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="student-age" className="block text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#00205B] mb-1.5">
                    2. Edad del alumno
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      id="student-age"
                      min="4"
                      max="99"
                      value={formData.studentAge}
                      onChange={(e) => setFormData((prev) => ({ ...prev, studentAge: e.target.value }))}
                      className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl border-2 border-slate-200 focus:border-[#00205B] text-[#001A4D] font-bold text-sm sm:text-base"
                      placeholder="Ej: 8"
                      required
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 pointer-events-none">
                      años
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="student-name" className="block text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#00205B] mb-1.5">
                    Nombre <span className="text-[10px] sm:text-xs text-slate-400 font-normal">(Opcional)</span>
                  </label>
                  <input
                    type="text"
                    id="student-name"
                    value={formData.studentName || ''}
                    onChange={(e) => setFormData((prev) => ({ ...prev, studentName: e.target.value }))}
                    className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl border-2 border-slate-200 focus:border-[#00205B] text-[#001A4D] text-sm"
                    placeholder="Ej: Sofía"
                  />
                </div>
              </div>

              {/* Question 3: Starting Mode */}
              <div>
                <label className="block text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#00205B] mb-2 sm:mb-3">
                  3. ¿Cómo prefiere comenzar?
                </label>
                <div className="space-y-2 sm:space-y-2.5">
                  <button
                    type="button"
                    onClick={() => handleStartingModeChange('placement_test')}
                    className={`w-full flex items-start gap-3 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl border-2 text-left transition-all ${
                      formData.startingMode === 'placement_test'
                        ? 'border-[#00205B] bg-[#00205B]/5 text-[#00205B] shadow-xs'
                        : 'border-slate-200 bg-white hover:border-slate-300 text-slate-700'
                    }`}
                  >
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                      formData.startingMode === 'placement_test'
                        ? 'bg-[#00205B] text-white'
                        : 'border-2 border-slate-300'
                    }`}>
                      {formData.startingMode === 'placement_test' && <CheckCircle2 className="w-3.5 h-3.5" />}
                    </div>
                    <div>
                      <div className="font-bold text-xs sm:text-sm flex items-center gap-1.5">
                        <span>Examen Nivelatorio Gratuito</span>
                        <span className="text-[10px] font-bold px-1.5 py-0.2 rounded-full bg-[#E63956] text-white">
                          Recomendado
                        </span>
                      </div>
                      <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                        Ya tiene nociones previas. Para ingresar al nivel exacto.
                      </p>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleStartingModeChange('level_one')}
                    className={`w-full flex items-start gap-3 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl border-2 text-left transition-all ${
                      formData.startingMode === 'level_one'
                        ? 'border-[#00205B] bg-[#00205B]/5 text-[#00205B] shadow-xs'
                        : 'border-slate-200 bg-white hover:border-slate-300 text-slate-700'
                    }`}
                  >
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                      formData.startingMode === 'level_one'
                        ? 'bg-[#00205B] text-white'
                        : 'border-2 border-slate-300'
                    }`}>
                      {formData.startingMode === 'level_one' && <CheckCircle2 className="w-3.5 h-3.5" />}
                    </div>
                    <div>
                      <div className="font-bold text-xs sm:text-sm">
                        Nivel Inicial (Desde Cero)
                      </div>
                      <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                        Sin conocimientos previos. Para empezar desde la base.
                      </p>
                    </div>
                  </button>
                </div>
              </div>

              {/* Question 4: Schedule */}
              <div>
                <label className="block text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#00205B] mb-2 flex items-center gap-1.5">
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
                      className={`py-2 px-2 rounded-xl border text-center text-xs font-bold transition-all ${
                        formData.preferredSchedule === slot.id
                          ? 'border-[#00205B] bg-[#00205B] text-white shadow-xs'
                          : 'border-slate-200 bg-slate-50 text-slate-700'
                      }`}
                    >
                      {slot.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit CTA Button directly below form */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-sm sm:text-base shadow-md flex items-center justify-center gap-2.5 transition-transform active:scale-95"
                  id="btn-selector-submit"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>Consultar por WhatsApp con mis datos</span>
                </button>
              </div>

              {/* Mobile message toggle for preview without cluttering */}
              <div className="block lg:hidden pt-1">
                <button
                  type="button"
                  onClick={() => setShowPreviewMobile(!showPreviewMobile)}
                  className="w-full text-center text-xs text-slate-500 font-semibold flex items-center justify-center gap-1 hover:text-[#00205B]"
                >
                  <span>{showPreviewMobile ? 'Ocultar' : 'Ver'} mensaje redactado para secretaría</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showPreviewMobile ? 'rotate-180' : ''}`} />
                </button>

                {showPreviewMobile && (
                  <div className="mt-2 p-3 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-700 whitespace-pre-wrap leading-relaxed animate-in fade-in duration-150">
                    {generatedMessage}
                  </div>
                )}
              </div>

            </form>
          </div>

          {/* Right Column: WhatsApp Simulator on Desktop (Hidden on mobile to avoid text wall) */}
          <div className="hidden lg:flex lg:col-span-5 flex-col gap-5">
            <div className="bg-[#001A4D] rounded-3xl p-5 border border-blue-900 shadow-xl text-white">
              <div className="flex items-center justify-between pb-3 border-b border-blue-900/80 mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center text-white font-bold text-xs">
                    EIS
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm">Secretaría EIS</h3>
                    <p className="text-[11px] text-[#25D366] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                      En línea • Respuesta rápida
                    </p>
                  </div>
                </div>
                <span className="text-xs text-slate-400">{EIS_CONTACT.PHONE_DISPLAY}</span>
              </div>

              <div className="bg-[#0b141a] rounded-xl p-3 border border-emerald-950/60 shadow-inner">
                <div className="text-[10px] font-semibold text-slate-400 mb-1.5 flex items-center gap-1">
                  <Send className="w-3 h-3 text-[#25D366]" />
                  <span>Mensaje preconfigurado:</span>
                </div>
                
                <div className="bg-[#005c4b] text-white rounded-xl p-3 text-xs leading-relaxed whitespace-pre-wrap font-sans">
                  {generatedMessage}
                </div>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <Send className="w-3.5 h-3.5 text-[#25D366]" />
                <span>Abrir en WhatsApp</span>
              </a>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm text-xs text-slate-600 space-y-2">
              <div className="font-bold text-[#00205B] text-sm flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-[#E63956]" />
                <span>¿Por qué realizar el test previo?</span>
              </div>
              <p className="leading-relaxed">
                Nos permite conocer las fortalezas de cada alumno para que ingrese en el grupo justo, con compañeros de edad y nivel similares.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
