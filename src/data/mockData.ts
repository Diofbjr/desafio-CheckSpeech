/**
 * @file src/data/mockData.ts
 * @description Fonte da verdade para os dados institucionais e comerciais do CheckSpeech AI.
 * Centraliza textos, valores dos planos e dados dos clientes para facilitar manutenção.
 */

import type { ClientLogo, PricingPlan, SolutionItem } from "../types";


// Soluções da CheckSpeech AI exigidas nas instruções
export const SOLUTIONS_DATA: SolutionItem[] = [
  {
    id: 'async-transcription',
    title: 'Transcrição de Áudio Assíncrono',
    description: 'API de transcrição de voz para áudios pré-gravados com alta precisão.',
    iconName: 'FileText',
    badge: 'Alta Precisão',
    details: [
      'Extração de insights em escala para arquivos pré-gravados.',
      'Uma das melhores engines de reconhecimento de fala do mundo.',
      'Suporte a múltiplos formatos de áudio (MP3, WAV, AAC, OGG).'
    ]
  },
  {
    id: 'streaming-transcription',
    title: 'Transcrição de Áudio em Tempo Real',
    description: 'Recurso live-speech-to-text com geração de legendas instantâneas.',
    iconName: 'Radio',
    badge: 'Streaming ao Vivo',
    details: [
      'Legendas ao vivo para palestras, reuniões e transmissões.',
      'Arquivamento automático para consultas e análises futuras.',
      'Baixíssima latência na conversão de fala para texto.'
    ]
  },
  {
    id: 'language-identification',
    title: 'Identificação de Idiomas em Áudios',
    description: 'Detecção automática do idioma falado em nível global.',
    iconName: 'Globe',
    badge: '52 Idiomas',
    details: [
      'Suporte nativo a 52 idiomas e sotaques regionais.',
      'Detecção de troca de idioma na mesma gravação.',
      'Treinado com mais de 500.000 horas de áudio humano.'
    ]
  },
  {
    id: 'sentiment-analysis',
    title: 'Análise de Sentimento em Áudio',
    description: 'Mapeamento de sentimentos e tom de voz dominante.',
    iconName: 'Smile',
    badge: 'Insights de Negócio',
    details: [
      'Diferenciação precisa entre falas positivas, neutras e negativas.',
      'Identificação dos momentos mais críticos do atendimento.',
      'Tomada de decisão estratégica com base na percepção do cliente.'
    ]
  }
];

// Tabela de Preços e Pacotes conforme o edital do desafio
export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'beginner',
    name: 'Beginner',
    description: 'Ideal para pequenos projetos e validações iniciais de IA de áudio.',
    monthlyPrice: 29,
    annualPrice: 328,
    ctaText: 'Começar Agora',
    features: [
      { name: 'Transcrição Assíncrona', includedMinutes: '120 min/mês', exceedingCost: 'R$ 0,20/min' },
      { name: 'Transcrição em Tempo Real', includedMinutes: '90 min/mês', exceedingCost: 'R$ 0,40/min' },
      { name: 'Identificação de Idiomas', includedMinutes: '200 min/mês', exceedingCost: 'R$ 0,05/min' },
      { name: 'Análise de Sentimento', includedMinutes: '120 min/mês', exceedingCost: 'R$ 0,40/min' },
    ]
  },
  {
    id: 'business',
    name: 'Business',
    description: 'Para empresas em crescimento que precisam de escala e análise avançada.',
    monthlyPrice: 44,
    annualPrice: 499,
    isPopular: true, // Destaque visual na tabela de preços
    ctaText: 'Assinar Pacote Business',
    features: [
      { name: 'Transcrição Assíncrona', includedMinutes: '200 min/mês', exceedingCost: 'R$ 0,15/min' },
      { name: 'Transcrição em Tempo Real', includedMinutes: '120 min/mês', exceedingCost: 'R$ 0,40/min' },
      { name: 'Identificação de Idiomas', includedMinutes: '500 min/mês', exceedingCost: 'R$ 0,03/min' },
      { name: 'Análise de Sentimento', includedMinutes: '200 min/mês', exceedingCost: 'R$ 0,35/min' },
    ]
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Solução sob medida para grandes volumes e demandas de missão crítica.',
    monthlyPrice: null,
    annualPrice: null,
    ctaText: 'Falar com Consultor',
    features: [
      { name: 'Volume de Minutos', includedMinutes: 'Customizado' },
      { name: 'Suporte Técnico', includedMinutes: 'Prioritário 24/7' },
      { name: 'Gestor de Conta', includedMinutes: 'Dedicado' },
      { name: 'Condições Comerciais', includedMinutes: 'Preços especiais por volume' },
    ]
  }
];

// Logos fictícias de clientes para a seção Clientes
export const CLIENT_LOGOS: ClientLogo[] = [
  { id: '1', name: 'VoiceCorp', logoUrl: 'https://placehold.co/180x60/0f172a/22c55e?text=VoiceCorp&font=montserrat', category: 'Enterprise' },
  { id: '2', name: 'AudioMetrics', logoUrl: 'https://placehold.co/180x60/0f172a/38bdf8?text=AudioMetrics&font=montserrat', category: 'Analytics' },
  { id: '3', name: 'StreamSpeak', logoUrl: 'https://placehold.co/180x60/0f172a/c084fc?text=StreamSpeak&font=montserrat', category: 'Streaming' },
  { id: '4', name: 'GlobalDial', logoUrl: 'https://placehold.co/180x60/0f172a/fb7185?text=GlobalDial&font=montserrat', category: 'Telecom' },
  { id: '5', name: 'OmniAI Voice', logoUrl: 'https://placehold.co/180x60/0f172a/4ade80?text=OmniAI+Voice&font=montserrat', category: 'Customer Care' },
];

// Lista de países para o formulário de contato (Internacionalização do campo telefone/país)
export const COUNTRY_OPTIONS = [
  { code: 'BR', name: 'Brasil (+55)', dialCode: '+55' },
  { code: 'US', name: 'Estados Unidos (+1)', dialCode: '+1' },
  { code: 'ES', name: 'Espanha (+34)', dialCode: '+34' },
  { code: 'PT', name: 'Portugal (+351)', dialCode: '+351' },
  { code: 'MX', name: 'México (+52)', dialCode: '+52' },
];