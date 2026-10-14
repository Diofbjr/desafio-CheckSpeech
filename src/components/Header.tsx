/**
 * @file src/components/Header.tsx
 * @description Top Menu Flutuante (Sticky Header) com navegação por scroll suave,
 * responsividade mobile e seletor de idioma (Bônus Multilíngue).
 */

import React, { useState } from 'react';
import { Mic, Globe, Menu, X } from 'lucide-react';
import type { SupportedLanguage } from '../types';

interface HeaderProps {
  currentLang: SupportedLanguage;
  onLanguageChange: (lang: SupportedLanguage) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentLang, onLanguageChange }) => {
  // Estado para controlar a abertura/fechamento do menu mobile (hambúrguer)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  // Função para fechar o menu mobile ao clicar em um link
  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Dicionário de traduções simples para os links de navegação
  const navLabels = {
    pt: { solutions: 'Soluções', clients: 'Clientes', pricing: 'Preços', contact: 'Contato' },
    en: { solutions: 'Solutions', clients: 'Clients', pricing: 'Pricing', contact: 'Contact' }
  };

  const labels = navLabels[currentLang];

  return (
    <header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* LOGO: Clicar direciona/rola para o topo da mesma página */}
        <a 
          href="#hero" 
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-brand-500 rounded-lg p-1"
          aria-label="CheckSpeech AI - Voltar ao Topo"
        >
          <div className="w-10 h-10 rounded-xl bg-linear-to-br from-brand-500 to-emerald-700 flex items-center justify-center shadow-lg shadow-brand-500/20 group-hover:scale-105 transition-transform">
            <Mic className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-extrabold tracking-tight text-white flex items-center gap-1">
              CheckSpeech <span className="text-brand-500">AI</span>
            </span>
            <span className="text-[10px] text-slate-400 font-medium tracking-widest uppercase">
              Speech Intelligence
            </span>
          </div>
        </a>

        {/* NAVEGAÇÃO DESKTOP */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#solucoes" className="text-sm font-medium text-slate-300 hover:text-brand-500 transition-colors">
            {labels.solutions}
          </a>
          <a href="#clientes" className="text-sm font-medium text-slate-300 hover:text-brand-500 transition-colors">
            {labels.clients}
          </a>
          <a href="#precos" className="text-sm font-medium text-slate-300 hover:text-brand-500 transition-colors">
            {labels.pricing}
          </a>
          <a href="#contato" className="text-sm font-medium text-slate-300 hover:text-brand-500 transition-colors">
            {labels.contact}
          </a>
        </nav>

        {/* SELETOR MULTILÍNGUE + BOTAO MOBILE */}
        <div className="flex items-center gap-4">
          
          {/* Seletor de Idioma (PT / EN) */}
          <div className="flex items-center gap-1 bg-slate-800/80 p-1 rounded-lg border border-slate-700">
            <Globe className="w-4 h-4 text-slate-400 ml-1.5" />
            <button
              onClick={() => onLanguageChange('pt')}
              className={`px-2 py-1 text-xs font-semibold rounded transition-all ${
                currentLang === 'pt'
                  ? 'bg-brand-500 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              PT
            </button>
            <button
              onClick={() => onLanguageChange('en')}
              className={`px-2 py-1 text-xs font-semibold rounded transition-all ${
                currentLang === 'en'
                  ? 'bg-brand-500 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              EN
            </button>
          </div>

          {/* Botão Menu Mobile (Hambúrguer) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white focus:outline-none"
            aria-label="Alternar Menu de Navegação"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MENU MOBILE DROP DOWN */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-6 space-y-3 animate-fadeIn">
          <a
            href="#solucoes"
            onClick={handleNavClick}
            className="block py-2 text-base font-medium text-slate-300 hover:text-brand-500"
          >
            {labels.solutions}
          </a>
          <a
            href="#clientes"
            onClick={handleNavClick}
            className="block py-2 text-base font-medium text-slate-300 hover:text-brand-500"
          >
            {labels.clients}
          </a>
          <a
            href="#precos"
            onClick={handleNavClick}
            className="block py-2 text-base font-medium text-slate-300 hover:text-brand-500"
          >
            {labels.pricing}
          </a>
          <a
            href="#contato"
            onClick={handleNavClick}
            className="block py-2 text-base font-medium text-slate-300 hover:text-brand-500"
          >
            {labels.contact}
          </a>
        </div>
      )}
    </header>
  );
};