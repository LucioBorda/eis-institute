'use client';

import React from 'react';
import { ACCREDITATION_PARTNERS } from '../data/institutionInfo';
import { Award, GraduationCap, Globe2, ShieldCheck } from 'lucide-react';

export const AccreditationBar: React.FC = () => {
  return (
    <section id="avales" className="py-10 sm:py-14 bg-white border-y border-slate-200 text-[#001A4D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Compact on mobile */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00205B]/10 border border-[#00205B]/20 text-[#00205B] text-xs font-bold uppercase tracking-wide mb-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#E63956]" />
            <span>Respaldo y Convenios</span>
          </div>
          <h2 className="text-xl sm:text-3xl font-black text-[#00205B] tracking-tight">
            Certificaciones de Validez Real
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-600">
            Homologación con las instituciones de mayor exigencia de Argentina y el Reino Unido.
          </p>
        </div>

        {/* 3 Accreditation Cards - Clean, not invasive */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {ACCREDITATION_PARTNERS.map((partner) => (
            <div
              key={partner.id}
              className="rounded-2xl p-4 sm:p-6 bg-[#F8F9FA] border border-slate-200/90 hover:border-[#E63956]/50 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#E63956]/10 text-[#E63956] border border-[#E63956]/20">
                    <Award className="w-3 h-3" />
                    {partner.badgeText}
                  </span>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                    {partner.countryOrScope}
                  </span>
                </div>

                <div className="flex items-start gap-3 mb-2">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#00205B] text-white flex items-center justify-center shrink-0">
                    {partner.id === 'anglia' && <Globe2 className="w-5 h-5 text-white" />}
                    {partner.id === 'utn' && <GraduationCap className="w-5 h-5 text-white" />}
                    {partner.id === 'chichester' && <Award className="w-5 h-5 text-white" />}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#00205B] leading-snug">
                      {partner.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#E63956] mt-0.5">
                      {partner.role}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mt-2">
                  {partner.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/70 text-[11px] font-medium text-slate-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E63956]" />
                <span>Sede examinadora en Ensenada</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
