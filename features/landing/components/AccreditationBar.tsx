'use client';

import React from 'react';
import { ACCREDITATION_PARTNERS } from '../courses';
import { Award, GraduationCap, Globe2, CheckCircle, ShieldCheck } from 'lucide-react';

export const AccreditationBar: React.FC = () => {
  return (
    <section id="avales" className="relative py-14 bg-slate-900 border-y border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header indicator */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-700/50 text-blue-300 text-xs font-bold tracking-wide uppercase mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>Respaldo y Convenios Internacionales</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Títulos y Certificaciones con Auténtico Peso Curricular
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300">
            Nuestros planes de estudio y exámenes no son meros diplomas de asistencia: cuentan con la homologación y convenios de las instituciones más exigentes de Argentina y el Reino Unido.
          </p>
        </div>

        {/* 3 Accreditation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ACCREDITATION_PARTNERS.map((partner) => {
            return (
              <div
                key={partner.id}
                className="group relative rounded-2xl p-6 bg-gradient-to-b from-slate-800/80 to-slate-900/90 border border-slate-700/80 hover:border-amber-400/50 shadow-lg hover:shadow-2xl hover:shadow-blue-950/50 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top Badge */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-400/10 text-amber-300 border border-amber-400/30">
                      <Award className="w-3.5 h-3.5" />
                      {partner.badgeText}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      {partner.countryOrScope}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start gap-3.5 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-blue-900/60 border border-blue-500/30 flex items-center justify-center text-blue-200 shrink-0 group-hover:scale-105 transition-transform">
                      {partner.id === 'anglia' && <Globe2 className="w-6 h-6 text-amber-300" />}
                      {partner.id === 'utn' && <GraduationCap className="w-6 h-6 text-blue-300" />}
                      {partner.id === 'chichester' && <Award className="w-6 h-6 text-emerald-300" />}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-amber-200 transition-colors leading-snug">
                        {partner.name}
                      </h3>
                      <p className="text-xs font-semibold text-blue-300 mt-0.5">
                        {partner.role}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2">
                    {partner.description}
                  </p>
                </div>

                {/* Footer validation feature */}
                <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-400">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Vigencia institucional continua en EIS</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footnote reassurance */}
        <div className="mt-8 text-center text-xs text-slate-400">
          📍 Sede examinadora presencial en Ensenada. Los alumnos de EIS pueden rendir sus exámenes internacionales en su propia sede.
        </div>

      </div>
    </section>
  );
};
