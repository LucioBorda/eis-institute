'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MessageCircle, Menu, X, GraduationCap, Award, Phone, Clock } from 'lucide-react';
import { EIS_CONTACT, buildWhatsAppLink, generateGeneralInquiryMessage } from '@/utils/whatsapp';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const generalWhatsAppUrl = buildWhatsAppLink(generateGeneralInquiryMessage());

  const navLinks = [
    { label: 'Cursos & Niveles', href: '#cursos' },
    { label: 'Test de Nivel', href: '#selector-nivel' },
    { label: 'Avales & Convenios', href: '#avales' },
    { label: 'Orgullo EIS', href: '#orgullo' },
    { label: 'Preguntas Frecuentes', href: '#faq' },
  ];

  return (
    <>
      {/* Top micro-bar for institutional trust */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1 text-amber-400 font-semibold">
              <Award className="w-3.5 h-3.5" /> 30 Años de Trayectoria
            </span>
            <span className="hidden md:inline text-slate-500">•</span>
            <span className="hidden md:inline text-slate-300">
              Convenio Oficial Anglia ESOL & Aval UTN
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <div className="flex items-center gap-1 text-slate-300">
              <Clock className="w-3 h-3 text-slate-400" />
              <span>Lun a Vie 14:00 a 20:30 hs</span>
            </div>
            <a
              href={`tel:${EIS_CONTACT.PHONE_DISPLAY.replace(/[^0-9]/g, '')}`}
              className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              <span className="font-medium">{EIS_CONTACT.PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky navigation */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-950 flex items-center justify-center text-white shadow-md shadow-blue-950/20 group-hover:scale-105 transition-transform duration-200">
                <GraduationCap className="w-7 h-7 text-amber-300" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-950 leading-none">
                  EIS <span className="text-blue-900">Institute</span>
                </span>
                <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-slate-500 mt-1">
                  Cultural Inglesa de Ensenada
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold text-slate-700 hover:text-blue-900 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-900 hover:after:w-full after:transition-all"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={generalWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md shadow-emerald-700/20 hover:shadow-lg hover:shadow-emerald-600/30 transition-all transform hover:-translate-y-0.5"
                id="btn-navbar-whatsapp"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Consultar Inscripción</span>
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:text-blue-950 hover:bg-slate-100 transition-colors"
                aria-label="Abrir menú de navegación"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-950 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-slate-100 mt-2">
                <a
                  href={generalWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-emerald-600 text-white font-bold text-sm shadow-md hover:bg-emerald-500 transition-colors"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
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
