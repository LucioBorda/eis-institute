'use client';

import React, { useState } from 'react';
import {
  User,
  Users,
  Calendar,
  Sparkles,
  HelpCircle,
  MessageCircle,
  Clock,
  Send,
  BookOpen,
  CheckCircle2
} from 'lucide-react';
import {
  EnrollmentTarget,
  CourseStartingMode,
  LevelSelectorState
} from '../types';
import {
  buildWhatsAppLink,
  generateLevelInquiryMessage,
  EIS_CONTACT
} from '@/utils/whatsapp';

export const LevelSelector: React.FC = () => {
  const [formData, setFormData] = useState<LevelSelectorState>({
    target: 'parent_for_child',
    studentName: '',
    studentAge: '8',
    startingMode: 'placement_test',
    preferredSchedule: 'afternoon',
    previousEnglishExperience: true,
    notes: ''
  });

  const [hasInteracted, setHasInteracted] = useState(false);

  const handleTargetChange = (target: EnrollmentTarget) => {
    setFormData((prev) => ({
      ...prev,
      target,
      studentAge: target === 'adult_self' ? '25' : '8'
    }));
    setHasInteracted(true);
  };

  const handleStartingModeChange = (startingMode: CourseStartingMode) => {
    setFormData((prev) => ({
      ...prev,
      startingMode,
      previousEnglishExperience: startingMode === 'placement_test'
    }));
    setHasInteracted(true);
  };

  const generatedMessage = generateLevelInquiryMessage(formData);
  const whatsappUrl = buildWhatsAppLink(generatedMessage);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="selector-nivel" className="relative py-20 bg-gradient-to-b from-slate-900 via-slate-950 to-blue-950 text-white">
      {/* Decorative background glows */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-600/40 text-emerald-300 text-xs font-bold tracking-wide uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Asistente de Inscripción Online</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Descubrí tu Nivel Ideal en 1 Minuto
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300">
            Respondé 3 preguntas simples y contactá a Secretaría por WhatsApp con tu consulta preconfigurada para reservar tu vacante sin demoras.
          </p>
        </div>

        {/* Main Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Form Column */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 text-slate-900 shadow-2xl border border-slate-100">
            <form onSubmit={handleSubmit} className="space-y-7">
              
              {/* Question 1: Who is enrolling */}
              <div>
                <label className="block text-sm font-extrabold uppercase tracking-wider text-slate-700 mb-3 flex items-center justify-between">
                  <span>1. ¿Quién se inscribe?</span>
                  <span className="text-xs font-medium text-slate-500 normal-case">Elegí una opción</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => handleTargetChange('parent_for_child')}
                    className={`flex items-center gap-3.5 p-4 rounded-2xl border-2 text-left transition-all ${
                      formData.target === 'parent_for_child'
                        ? 'border-blue-900 bg-blue-50/70 text-blue-950 ring-2 ring-blue-900/20 shadow-sm'
                        : 'border-slate-200 bg-white hover:border-slate-300 text-slate-700'
                    }`}
                  >
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
                      formData.target === 'parent_for_child'
                        ? 'bg-blue-900 text-white'
                        : 'bg-slate-100 text-slate-600'
                    }`}>
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-sm sm:text-base leading-tight">Soy Padre / Madre</div>
                      <div className="text-xs text-slate-500 mt-0.5">Inscribo a mi hijo/a</div>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleTargetChange('adult_self')}
                    className={`flex items-center gap-3.5 p-4 rounded-2xl border-2 text-left transition-all ${
                      formData.target === 'adult_self'
                        ? 'border-blue-900 bg-blue-50/70 text-blue-950 ring-2 ring-blue-900/20 shadow-sm'
                        : 'border-slate-200 bg-white hover:border-slate-300 text-slate-700'
                    }`}
                  >
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
                      formData.target === 'adult_self'
                        ? 'bg-blue-900 text-white'
                        : 'bg-slate-100 text-slate-600'
                    }`}>
                      <User className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-sm sm:text-base leading-tight">Soy Adulto</div>
                      <div className="text-xs text-slate-500 mt-0.5">Inscripción personal (+17 años)</div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Question 2: Student Age & Optional Name */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                <div className="sm:col-span-6">
                  <label htmlFor="student-age" className="block text-sm font-extrabold uppercase tracking-wider text-slate-700 mb-2">
                    2. Edad del alumno
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      id="student-age"
                      min="4"
                      max="99"
                      value={formData.studentAge}
                      onChange={(e) => {
                        setFormData((prev) => ({ ...prev, studentAge: e.target.value }));
                        setHasInteracted(true);
                      }}
                      className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 focus:border-blue-900 focus:ring-2 focus:ring-blue-900/20 text-slate-900 font-bold text-base transition-colors"
                      placeholder="Ej: 8"
                      required
                    />
                    <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-500 pointer-events-none">
                      años
                    </div>
                  </div>
                  {formData.target === 'parent_for_child' && Number(formData.studentAge) < 4 && (
                    <p className="text-xs text-amber-600 mt-1">
                      💡 En EIS recibimos alumnos a partir de los 4 años cumplidos (Playgroup).
                    </p>
                  )}
                </div>

                <div className="sm:col-span-6">
                  <label htmlFor="student-name" className="block text-sm font-extrabold uppercase tracking-wider text-slate-700 mb-2">
                    Nombre del alumno <span className="text-xs font-normal text-slate-500">(Opcional)</span>
                  </label>
                  <input
                    type="text"
                    id="student-name"
                    value={formData.studentName || ''}
                    onChange={(e) => {
                      setFormData((prev) => ({ ...prev, studentName: e.target.value }));
                      setHasInteracted(true);
                    }}
                    className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 focus:border-blue-900 focus:ring-2 focus:ring-blue-900/20 text-slate-900 text-sm font-medium transition-colors"
                    placeholder="Ej: Sofía o Juan"
                  />
                </div>
              </div>

              {/* Question 3: Placement Test vs Starter Level */}
              <div>
                <label className="block text-sm font-extrabold uppercase tracking-wider text-slate-700 mb-3">
                  3. ¿Cómo prefiere comenzar?
                </label>
                <div className="grid grid-cols-1 gap-3">
                  <button
                    type="button"
                    onClick={() => handleStartingModeChange('placement_test')}
                    className={`flex items-start gap-4 p-4 rounded-2xl border-2 text-left transition-all ${
                      formData.startingMode === 'placement_test'
                        ? 'border-blue-900 bg-blue-50/70 text-blue-950 ring-2 ring-blue-900/20 shadow-sm'
                        : 'border-slate-200 bg-white hover:border-slate-300 text-slate-700'
                    }`}
                  >
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                      formData.startingMode === 'placement_test'
                        ? 'bg-blue-900 text-white'
                        : 'border-2 border-slate-300'
                    }`}>
                      {formData.startingMode === 'placement_test' && <CheckCircle2 className="w-4 h-4" />}
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-sm sm:text-base flex items-center gap-2">
                        <span>Realizar Examen Nivelatorio Gratuito</span>
                        <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                          Recomendado
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1">
                        Ya tiene nociones previas o estudió antes. Coordinamos un diagnóstico ágil para no empezar de cero y ubicarlo en el curso justo.
                      </p>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleStartingModeChange('level_one')}
                    className={`flex items-start gap-4 p-4 rounded-2xl border-2 text-left transition-all ${
                      formData.startingMode === 'level_one'
                        ? 'border-blue-900 bg-blue-50/70 text-blue-950 ring-2 ring-blue-900/20 shadow-sm'
                        : 'border-slate-200 bg-white hover:border-slate-300 text-slate-700'
                    }`}
                  >
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                      formData.startingMode === 'level_one'
                        ? 'bg-blue-900 text-white'
                        : 'border-2 border-slate-300'
                    }`}>
                      {formData.startingMode === 'level_one' && <CheckCircle2 className="w-4 h-4" />}
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-sm sm:text-base">
                        Empezar desde Nivel Inicial (Desde Cero)
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1">
                        Sin conocimientos previos o primer contacto formal con el idioma. Iniciará desde la base más amigable y estructurada.
                      </p>
                    </div>
                  </button>
                </div>
              </div>

              {/* Question 4: Schedule preference */}
              <div>
                <label className="block text-sm font-extrabold uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-slate-500" />
                  <span>Franja horaria preferida</span>
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'morning', label: 'Mañana', time: '09:00 a 12:00' },
                    { id: 'afternoon', label: 'Tarde', time: '14:00 a 17:30' },
                    { id: 'evening', label: 'Vespertino', time: '18:00 a 20:30' },
                  ].map((slot) => (
                    <button
                      key={slot.id}
                      type="button"
                      onClick={() => {
                        setFormData((prev) => ({
                          ...prev,
                          preferredSchedule: slot.id as 'morning' | 'afternoon' | 'evening'
                        }));
                        setHasInteracted(true);
                      }}
                      className={`p-3 rounded-xl border text-center transition-all ${
                        formData.preferredSchedule === slot.id
                          ? 'border-blue-900 bg-blue-900 text-white font-bold shadow-xs'
                          : 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 font-medium'
                      }`}
                    >
                      <div className="text-xs sm:text-sm">{slot.label}</div>
                      <div className={`text-[10px] mt-0.5 ${formData.preferredSchedule === slot.id ? 'text-blue-200' : 'text-slate-500'}`}>
                        {slot.time}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit CTA button for mobile/desktop inside form */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-base sm:text-lg shadow-xl shadow-emerald-700/25 flex items-center justify-center gap-3 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                  id="btn-selector-submit"
                >
                  <MessageCircle className="w-6 h-6 fill-white" />
                  <span>Consultar por WhatsApp con estos datos</span>
                </button>
                <p className="text-center text-xs text-slate-500 mt-2.5">
                  ⚡ Se abrirá WhatsApp con el mensaje ya redactado para la secretaría de EIS.
                </p>
              </div>

            </form>
          </div>

          {/* Right Column: WhatsApp Live Message Preview & Reassurance */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* WhatsApp Simulator Card */}
            <div className="bg-slate-900 rounded-3xl p-5 sm:p-6 border border-slate-800 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold shadow-md">
                    EIS
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm sm:text-base">
                      Secretaría EIS Institute
                    </h3>
                    <p className="text-xs text-emerald-400 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      En línea • Respuesta ágil
                    </p>
                  </div>
                </div>
                <div className="text-xs text-slate-400 font-medium">
                  {EIS_CONTACT.PHONE_DISPLAY}
                </div>
              </div>

              {/* WhatsApp message bubble */}
              <div className="bg-[#0b141a] rounded-2xl p-4 border border-emerald-950/60 shadow-inner">
                <div className="text-[11px] font-semibold text-slate-400 mb-2 uppercase tracking-wider flex items-center gap-1.5">
                  <Send className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Mensaje que se enviará automáticamente:</span>
                </div>
                
                <div className="bg-[#005c4b] text-white rounded-2xl rounded-tr-xs p-4 text-xs sm:text-sm leading-relaxed whitespace-pre-wrap font-sans shadow-md border border-emerald-700/40">
                  {generatedMessage}
                  <div className="text-right text-[10px] text-emerald-200 mt-2 flex items-center justify-end gap-1">
                    <span>Justo ahora</span>
                    <CheckCircle2 className="w-3 h-3 text-emerald-200" />
                  </div>
                </div>
              </div>

              {/* Direct Link Action */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 w-full py-3.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 hover:text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors"
              >
                <Send className="w-4 h-4 text-emerald-400" />
                <span>Abrir directamente en WhatsApp Web / App</span>
              </a>
            </div>

            {/* Why Level Test Box */}
            <div className="bg-blue-950/50 rounded-3xl p-6 border border-blue-800/40 backdrop-blur-md">
              <h4 className="font-bold text-amber-300 text-base flex items-center gap-2 mb-2">
                <BookOpen className="w-5 h-5 text-amber-400" />
                <span>¿Por qué es clave el examen nivelatorio?</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                El examen de nivelación en EIS Institute es una entrevista pedagógica amena y sin costo. Nos permite conocer las fortalezas de cada alumno para que ingrese al curso donde aprenderá al ritmo adecuado, rodeado de compañeros de edad y nivel similares.
              </p>
              <div className="mt-4 pt-4 border-t border-blue-900/60 flex items-center justify-between text-xs text-slate-400">
                <span>⏱️ Duración: 15-20 minutos</span>
                <span>📍 Modalidad presencial u online</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
