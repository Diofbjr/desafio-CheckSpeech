/**
 * @file src/components/Hero.tsx
 * @description Seção Inicial (Hero) do CheckSpeech AI.
 * Apresenta o valor central do produto, métricas de modelo e inclui o CTA 1 que leva ao formulário.
 */

import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, Play, Volume2 } from 'lucide-react';
import type { SupportedLanguage } from '../types';

interface HeroProps {
  currentLang: SupportedLanguage;
}

export const Hero: React.FC<HeroProps> = ({ currentLang }) => {
  const content = {
    pt: {
      badge: 'IA de Conversão e Análise de Fala',
      titleStart: 'Transforme Voz em Insights com ',
      titleHighlight: 'Inteligência Artificial',
      description:
        'O CheckSpeech AI é uma suíte de APIs de conversão de fala em texto e interpretação de sentimento dominante. Treinada em mais de 500.000 horas de áudio humano com alta diversidade de sotaques e idiomas.',
      cta1: 'Falar com Especialista',
      ctaDemo: 'Ver Demonstração',
      metric1: '+500k Horas',
      metric1Label: 'Áudio Treinado',
      metric2: '52 Idiomas',
      metric2Label: 'Suporte Global',
      metric3: '99.2%',
      metric3Label: 'Precisão em Transcrição',
      simulatedAudioText: '"Nossos clientes relatam alta satisfação com o atendimento..."',
      simulatedSentiment: 'Sentimento: Positivo (98%)',
    },
    en: {
      badge: 'Speech Conversion & Sentiment AI',
      titleStart: 'Transform Voice into Insights with ',
      titleHighlight: 'Artificial Intelligence',
      description:
        'CheckSpeech AI is a suite of speech-to-text and dominant sentiment analysis APIs. Trained on over 500,000 hours of human audio across a wide variety of accents and languages.',
      cta1: 'Talk to an Expert',
      ctaDemo: 'Watch Demo',
      metric1: '+500k Hours',
      metric1Label: 'Trained Audio',
      metric2: '52 Languages',
      metric2Label: 'Global Support',
      metric3: '99.2%',
      metric3Label: 'Transcription Accuracy',
      simulatedAudioText: '"Our customers report high satisfaction with support..."',
      simulatedSentiment: 'Sentiment: Positive (98%)',
    },
  };

  const t = content[currentLang];

  return (
    <section id="hero" className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden bg-slate-950 text-white">
      {/* Luzes de fundo decorativas (Glow Effects) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* COLUNA ESQUERDA: Texto de apresentação e CTA 1 */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-8">
            
            {/* Badge de Destaque */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-500 text-xs sm:text-sm font-semibold">
              <Sparkles className="w-4 h-4" />
              <span>{t.badge}</span>
            </div>

            {/* Título Principal */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-slate-100">
              {t.titleStart}
              <span className="bg-linear-to-r from-brand-500 to-emerald-400 bg-clip-text text-transparent">
                {t.titleHighlight}
              </span>
            </h1>

            {/* Descrição Comercial do Produto */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {t.description}
            </p>

            {/* AÇÕES DE CTA (Obrigatório: Botão CTA 1 direcionando para o form de contato) */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#contato"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-brand-500 hover:bg-brand-600 text-slate-950 font-bold text-base transition-all transform hover:-translate-y-0.5 shadow-lg shadow-brand-500/25 focus:ring-2 focus:ring-brand-500"
              >
                <span>{t.cta1}</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#solucoes"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-base transition-all"
              >
                <Play className="w-4 h-4 text-brand-500 fill-brand-500" />
                <span>{t.ctaDemo}</span>
              </a>
            </div>

            {/* Métricas Principais */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-800/80">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-white">{t.metric1}</p>
                <p className="text-xs sm:text-sm text-slate-400">{t.metric1Label}</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-white">{t.metric2}</p>
                <p className="text-xs sm:text-sm text-slate-400">{t.metric2Label}</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-white">{t.metric3}</p>
                <p className="text-xs sm:text-sm text-slate-400">{t.metric3Label}</p>
              </div>
            </div>
          </div>

          {/* COLUNA DIREITA: Infográfico / Card Simulador Interativo da IA */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-linear-to-b from-slate-800/90 to-slate-900/90 p-6 border border-slate-700 shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-700/80">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-xs font-mono text-slate-400">Live Speech Engine v2.4</span>
              </div>

              {/* Player Simulado */}
              <div className="mt-6 space-y-4">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-brand-500/20 text-brand-500">
                      <Volume2 className="w-5 h-5 animate-pulse" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-200">Call_Center_Audio_042.wav</p>
                      <p className="text-[10px] text-slate-400">00:14 / 01:30 • 16kHz Mono</p>
                    </div>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded bg-slate-800 text-brand-500 font-mono font-medium">
                    Analizando...
                  </span>
                </div>

                {/* Transcrição Simulada */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <p className="text-xs font-mono text-slate-400">Transcrição em Tempo Real:</p>
                  <p className="text-sm text-slate-200 italic leading-relaxed">
                    {t.simulatedAudioText}
                  </p>
                </div>

                {/* Resultado Análise de Sentimento */}
                <div className="p-3 rounded-xl bg-brand-500/10 border border-brand-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-500" />
                    <span className="text-xs font-semibold text-brand-500">{t.simulatedSentiment}</span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">Confiança: 99.8%</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};