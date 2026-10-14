/**
 * @file src/components/Solutions.tsx
 * @description Seção de Soluções com Componente Dinâmico Interativo (Tabs/Accordion).
 * Atende ao requisito de trazer interatividade e dynamismo na exibição dos recursos do produto.
 */

import React, { useState } from 'react';
import { SOLUTIONS_DATA } from '../data/mockData';
import type { SolutionItem, SupportedLanguage } from '../types';
import { FileText, Radio, Globe, Smile, CheckCircle, ArrowRight } from 'lucide-react';


interface SolutionsProps {
  currentLang: SupportedLanguage;
}

export const Solutions: React.FC<SolutionsProps> = ({ currentLang }) => {
  // Estado para controlar a solução ativa no componente dinâmico
  const [activeSolutionId, setActiveSolutionId] = useState<string>(SOLUTIONS_DATA[0].id);

  // Solução selecionada no momento
  const selectedSolution = SOLUTIONS_DATA.find((item) => item.id === activeSolutionId) || SOLUTIONS_DATA[0];

  // Helper para renderizar o ícone correto do Lucide dinamicamente
  const renderIcon = (iconName: SolutionItem['iconName'], className: string) => {
    switch (iconName) {
      case 'FileText': return <FileText className={className} />;
      case 'Radio': return <Radio className={className} />;
      case 'Globe': return <Globe className={className} />;
      case 'Smile': return <Smile className={className} />;
      default: return <FileText className={className} />;
    }
  };

  const labels = {
    pt: {
      sectionBadge: 'SOLUÇÕES DE IA',
      title: 'Tecnologia de ponta para cada necessidade de voz',
      subtitle: 'Explore os 4 pilares da nossa plataforma e entenda como acelerar suas operações.',
      cta: 'Ver Planos & Preços'
    },
    en: {
      sectionBadge: 'AI SOLUTIONS',
      title: 'Cutting-edge tech for every speech need',
      subtitle: 'Explore our 4 core platform pillars and see how to accelerate your workflow.',
      cta: 'See Plans & Pricing'
    }
  }[currentLang];

  return (
    <section id="solucoes" className="py-20 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold tracking-widest text-brand-500 uppercase px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20">
            {labels.sectionBadge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {labels.title}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            {labels.subtitle}
          </p>
        </div>

        {/* COMPONENTE DINÂMICO: TABS & CONTEÚDO */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Navegação de Tabs (Lista de Soluções Interativas) */}
          <div className="lg:col-span-5 space-y-3">
            {SOLUTIONS_DATA.map((item) => {
              const isActive = item.id === activeSolutionId;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSolutionId(item.id)}
                  className={`w-full text-left p-5 rounded-2xl transition-all duration-200 border flex items-center justify-between gap-4 ${
                    isActive
                      ? 'bg-linear-to-r from-slate-900 to-slate-800 border-brand-500/50 shadow-lg shadow-brand-500/10 ring-1 ring-brand-500/30'
                      : 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-900 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-3 rounded-xl transition-colors ${
                        isActive ? 'bg-brand-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {renderIcon(item.iconName, 'w-6 h-6')}
                    </div>
                    <div>
                      <h3 className={`font-bold text-base ${isActive ? 'text-white' : 'text-slate-300'}`}>
                        {item.title}
                      </h3>
                      {item.badge && (
                        <span className="text-[10px] font-mono text-brand-500 uppercase tracking-wider">
                          {item.badge}
                        </span>
                      )}
                    </div>
                  </div>

                  <ArrowRight
                    className={`w-5 h-5 transition-transform ${
                      isActive ? 'text-brand-500 translate-x-1' : 'text-slate-600 opacity-0 group-hover:opacity-100'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Painel do Conteúdo Selecionado (Exibição Expandida com Animação Visual) */}
          <div className="lg:col-span-7">
            <div className="bg-linear-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-8 shadow-2xl relative">
              
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-brand-500/20 text-brand-500">
                  {renderIcon(selectedSolution.iconName, 'w-8 h-8')}
                </div>
                <div>
                  <span className="text-xs font-mono text-brand-500 uppercase tracking-widest">
                    {selectedSolution.badge || 'Recurso Oficial'}
                  </span>
                  <h3 className="text-2xl font-bold text-white">
                    {selectedSolution.title}
                  </h3>
                </div>
              </div>

              <p className="text-slate-300 text-base leading-relaxed mb-8">
                {selectedSolution.description}
              </p>

              {/* Tópicos de Detalhes da Solução */}
              <div className="space-y-4 mb-8 pt-6 border-t border-slate-800">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  {currentLang === 'pt' ? 'Destaques Técnicos:' : 'Technical Highlights:'}
                </p>
                <ul className="space-y-3">
                  {selectedSolution.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-300 text-sm">
                      <CheckCircle className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Botão de Redirecionamento para Preços */}
              <a
                href="#precos"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-sm font-semibold transition-all hover:text-brand-500"
              >
                <span>{labels.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};