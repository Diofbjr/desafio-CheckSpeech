/**
 * @file src/components/Clients.tsx
 * @description Seção de Prova Social exibindo marcas e parceiros fictícios.
 */

import React from 'react';
import { CLIENT_LOGOS } from '../data/mockData';
import type { SupportedLanguage } from '../types';

interface ClientsProps {
  currentLang: SupportedLanguage;
}

export const Clients: React.FC<ClientsProps> = ({ currentLang }) => {
  const content = {
    pt: {
      title: 'Empresas líderes confiam na CheckSpeech AI',
      subtitle: 'Mais de 300+ corporações utilizam nossa engine de voz para automatizar processos e extrair insights.'
    },
    en: {
      title: 'Industry leaders trust CheckSpeech AI',
      subtitle: 'Over 300+ corporations use our speech engine to automate processes and extract insights.'
    }
  };

  const t = content[currentLang];

  return (
    <section id="clientes" className="py-16 bg-slate-900/60 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <p className="text-xs font-semibold tracking-wider text-brand-500 uppercase">
            {currentLang === 'pt' ? 'PROVA SOCIAL & PARCEIROS' : 'SOCIAL PROOF & PARTNERS'}
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100">
            {t.title}
          </h2>
          <p className="text-sm text-slate-400">
            {t.subtitle}
          </p>
        </div>

        {/* Grid de Logos de Clientes (Responsivo) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center justify-center">
          {CLIENT_LOGOS.map((client) => (
            <div
              key={client.id}
              className="p-4 rounded-xl bg-slate-950/50 border border-slate-800 hover:border-slate-700 transition-all flex flex-col items-center justify-center gap-2 group hover:scale-105 duration-200"
            >
              <img
                src={client.logoUrl}
                alt={`Logo ${client.name}`}
                className="h-10 object-contain opacity-70 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
              />
              <span className="text-[11px] font-mono text-slate-500 group-hover:text-brand-500 transition-colors">
                {client.category}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};