/**
 * @file src/components/Pricing.tsx
 * @description Seção de Tabela de Preços e Planos da CheckSpeech AI.
 * Apresenta os 3 pacotes (Beginner, Business, Enterprise), toggle mensal/anual e o CTA 2.
 */

import React, { useState } from 'react';
import { PRICING_PLANS } from '../data/mockData';
import { Check, ArrowRight, Sparkles, Building2,} from 'lucide-react';
import type { SupportedLanguage } from '../types';

interface PricingProps {
  currentLang: SupportedLanguage;
}

export const Pricing: React.FC<PricingProps> = ({ currentLang }) => {
  // Estado para alternar entre faturamento mensal ou anual
  const [isAnnual, setIsAnnual] = useState<boolean>(false);

  const labels = {
    pt: {
      badge: 'TABELA DE PREÇOS',
      title: 'Planos flexíveis para cada fase do seu negócio',
      subtitle: 'Sem taxas escondidas. Escolha o pacote ideal e escale o uso de IA conforme sua demanda.',
      monthly: 'Mensal',
      annual: 'Anual',
      annualDiscount: 'Economize até 15%',
      perMonth: '/mês',
      perYear: '/ano',
      customPrice: 'Sob Consulta',
      includedMinutes: 'Franquia Inclusa',
      exceedingCost: 'Minuto Excedente',
      popularBadge: 'Mais Popular',
      ctaText: 'Escolher Plano',
      enterpriseCta: 'Falar com Consultor'
    },
    en: {
      badge: 'PRICING TABLE',
      title: 'Flexible plans for every stage of your business',
      subtitle: 'No hidden fees. Choose the right package and scale AI usage on demand.',
      monthly: 'Monthly',
      annual: 'Annual',
      annualDiscount: 'Save up to 15%',
      perMonth: '/mo',
      perYear: '/yr',
      customPrice: 'Custom Quote',
      includedMinutes: 'Included Quota',
      exceedingCost: 'Overrate / Min',
      popularBadge: 'Most Popular',
      ctaText: 'Choose Plan',
      enterpriseCta: 'Talk to Consultant'
    }
  }[currentLang];

  return (
    <section id="precos" className="py-20 bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold tracking-widest text-brand-500 uppercase px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20">
            {labels.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {labels.title}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            {labels.subtitle}
          </p>

          {/* TOGGLE MENSAL / ANUAL */}
          <div className="pt-6 flex items-center justify-center gap-3">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-white' : 'text-slate-400'}`}>
              {labels.monthly}
            </span>
            
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-14 h-8 bg-slate-800 rounded-full p-1 transition-colors border border-slate-700 relative focus:outline-none focus:ring-2 focus:ring-brand-500"
              aria-label="Alternar ciclo de cobrança"
            >
              <div
                className={`w-6 h-6 rounded-full bg-brand-500 transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>

            <div className="flex items-center gap-2">
              <span className={`text-sm font-medium ${isAnnual ? 'text-white' : 'text-slate-400'}`}>
                {labels.annual}
              </span>
              <span className="text-[10px] font-bold text-brand-500 bg-brand-500/10 border border-brand-500/30 px-2 py-0.5 rounded-full">
                {labels.annualDiscount}
              </span>
            </div>
          </div>
        </div>

        {/* GRID DOS 3 PLANOS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const isPopular = plan.isPopular;
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;

            return (
              <div
                key={plan.id}
                className={`rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 relative border ${
                  isPopular
                    ? 'bg-slate-900 border-brand-500 shadow-2xl shadow-brand-500/10 ring-1 ring-brand-500/50 scale-100 lg:-translate-y-2'
                    : 'bg-slate-950/80 border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Badge de "Mais Popular" no plano Business */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-linear-to-r from-brand-500 to-emerald-600 text-slate-950 font-bold text-xs uppercase px-4 py-1 rounded-full shadow-lg flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{labels.popularBadge}</span>
                  </div>
                )}

                <div>
                  {/* Nome e Descrição do Plano */}
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                    {plan.id === 'enterprise' && <Building2 className="w-6 h-6 text-brand-500" />}
                  </div>
                  <p className="text-slate-400 text-xs sm:text-sm min-h-10 mb-6">
                    {plan.description}
                  </p>

                  {/* Valor do Plano */}
                  <div className="mb-8 pb-6 border-b border-slate-800">
                    {price !== null ? (
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-extrabold text-white">R$ {price}</span>
                        <span className="text-slate-400 text-sm">
                          {isAnnual ? labels.perYear : labels.perMonth}
                        </span>
                      </div>
                    ) : (
                      <div className="text-3xl font-extrabold text-white">
                        {labels.customPrice}
                      </div>
                    )}
                  </div>

                  {/* Lista de Recursos e Minutos Inclusos */}
                  <div className="space-y-4 mb-8">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      {plan.id === 'enterprise' ? 'Diferenciais Exclusivos:' : 'Franquia de Recursos:'}
                    </p>
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start justify-between gap-2 text-xs sm:text-sm">
                          <div className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                            <span className="text-slate-300">{feature.name}</span>
                          </div>
                          <div className="text-right shrink-0">
                            <span className="font-semibold text-white">{feature.includedMinutes}</span>
                            {feature.exceedingCost && (
                              <p className="text-[10px] text-slate-500">Exced: {feature.exceedingCost}</p>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* BOTÃO CTA DO PLANO (Obrigatório: CTA 2 direcionando para #contato) */}
                <a
                  href="#contato"
                  className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm transition-all shadow-md ${
                    isPopular
                      ? 'bg-brand-500 hover:bg-brand-600 text-slate-950 shadow-brand-500/20'
                      : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                  }`}
                >
                  <span>{plan.id === 'enterprise' ? labels.enterpriseCta : plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};