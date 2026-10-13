'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MessageCircle, Menu, X, GraduationCap, Award, Phone, Clock } from 'lucide-react';
import { EIS_CONTACT, buildWhatsAppLink, generateGeneralInquiryMessage } from '../utils/whatsapp';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const generalWhatsAppUrl = buildWhatsAppLink(generateGeneralInquiryMessage());

  const navLinks = [
    { label: 'Cursos', href: '#cursos' },
    { label: 'Test de Nivel', href: '#selector-nivel' },
    { label: 'Avales', href: '#avales' },
    { label: 'Orgullo EIS', href: '#orgullo' },
    { label: 'Preguntas', href: '#faq' },
  ];

  return (
    <>
      {/* Top institutional strip - Clean & compact */}
      <div className="bg-[#001A4D] text-slate-200 text-xs py-1.5 px-4 border-b border-blue-950">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-[#E63956] font-bold">
              <Award className="w-3.5 h-3.5" /> 30 Años
            </span>
            <span className="text-slate-400 hidden sm:inline">•</span>
            <span className="text-slate-300 text-[11px] sm:text-xs hidden sm:inline">
              Convenio Anglia ESOL & Aval UTN
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="text-slate-300 hidden md:inline">
              Lun a Vie 14:00 - 20:30 hs
            </span>
            <a
              href={`tel:${EIS_CONTACT.PHONE_DISPLAY.replace(/[^0-9]/g, '')}`}
              className="flex items-center gap-1 font-semibold text-white hover:text-[#E63956] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#E63956]" />
              <span>{EIS_CONTACT.PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky navigation */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#00205B] flex items-center justify-center text-white shadow-md shadow-[#00205B]/20 group-hover:bg-[#001A4D] transition-colors">
                <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-2xl font-black tracking-tight text-[#00205B] leading-none">
                  EIS <span className="text-[#E63956]">Institute</span>
                </span>
                <span className="text-[10px] sm:text-xs font-bold tracking-wider uppercase text-slate-500 mt-0.5">
                  Cultural Inglesa de Ensenada
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-bold text-[#00205B]/80 hover:text-[#E63956] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#E63956] hover:after:w-full after:transition-all"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="flex items-center gap-2">
              <a
                href={generalWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-xs sm:text-sm shadow-md shadow-emerald-900/20 transition-all transform hover:-translate-y-0.5"
                id="btn-navbar-whatsapp"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span className="hidden xs:inline">Consultar Inscripción</span>
                <span className="xs:hidden">WhatsApp</span>
              </a>

              {/* Mobile hamburger menu toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl text-[#00205B] hover:bg-slate-100 transition-colors"
                aria-label="Abrir menú de navegación"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-5 shadow-xl animate-in fade-in duration-150">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-xl text-sm font-bold text-[#00205B] hover:bg-slate-100 hover:text-[#E63956] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 mt-1 border-t border-slate-100">
                <a
                  href={generalWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#25D366] text-white font-black text-sm shadow-md"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Consultar por WhatsApp</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};
