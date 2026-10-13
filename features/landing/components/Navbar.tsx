'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Cursos', href: '#cursos' },
    { label: 'Avales', href: '#avales' },
    { label: 'Orgullo EIS', href: '#orgullo' },
    { label: 'Preguntas', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Official Logo */}
          <Link href="/" className="flex items-center gap-3 group py-2">
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center shrink-0">
              <Image
                src="/images/logo-eis.png"
                alt="EIS Institute"
                fill
                sizes="64px"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-[#00205B] font-condensed leading-none">
                E.I.S. <span className="text-[#E63956]">INSTITUTE</span>
              </span>
              <span className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-slate-500 mt-1">
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
                className="text-sm font-bold text-[#00205B] hover:text-[#E63956] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button: Contactanos (Sin botón de WhatsApp en header) */}
          <div className="flex items-center gap-3">
            <a
              href="#contactanos"
              className="px-5 py-2.5 rounded-full bg-[#00205B] hover:bg-[#001A4D] text-white font-bold text-xs sm:text-sm transition-colors shadow-xs"
              id="btn-navbar-contact"
            >
              Contactanos
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

      {/* Mobile dropdown menu with smooth transition */}
      <div
        className={`lg:hidden grid transition-[grid-template-rows,opacity] duration-300 ease-in-out bg-white border-b border-slate-200 shadow-lg ${
          mobileMenuOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
        }`}
      >
        <div className="overflow-hidden">
          <nav className="flex flex-col gap-1 px-4 pt-2 pb-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-bold text-[#00205B] hover:bg-slate-100 hover:text-[#E63956] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 mt-1 border-t border-slate-100">
              <a
                href="#contactanos"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center w-full py-2.5 rounded-lg bg-[#00205B] text-white font-bold text-sm"
              >
                Contactanos
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
