'use client';

import React from 'react';
import { ACCREDITATION_PARTNERS } from '../data/institutionInfo';
import { Award, GraduationCap, Globe2 } from 'lucide-react';

export const AccreditationBar: React.FC = () => {
  return (
    <section id="avales" className="py-8 sm:py-12 bg-white border-y border-slate-200 text-[#001A4D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Minimalist Section Header */}
        <div className="text-center max-w-xl mx-auto mb-6 sm:mb-8">
          <h2 className="text-lg sm:text-2xl font-black text-[#00205B] tracking-tight">
            Respaldo y Convenios Internacionales
          </h2>
        </div>

        {/* 3 Minimalist Cards: Solo el icono y datos esenciales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {ACCREDITATION_PARTNERS.map((partner) => (
            <div
              key={partner.id}
              className="rounded-2xl p-4 sm:p-5 bg-[#F8F9FA] border border-slate-200 hover:border-[#00205B]/30 transition-all flex items-center gap-3.5"
            >
              <div className="w-12 h-12 rounded-xl bg-[#00205B] text-white flex items-center justify-center shrink-0 shadow-xs">
                {partner.id === 'anglia' && <Globe2 className="w-6 h-6 text-white" />}
                {partner.id === 'utn' && <GraduationCap className="w-6 h-6 text-white" />}
                {partner.id === 'chichester' && <Award className="w-6 h-6 text-white" />}
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-[#00205B] leading-tight">
                  {partner.name}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  {partner.role}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
