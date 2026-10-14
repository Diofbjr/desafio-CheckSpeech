
export type SupportedLanguage = 'pt' | 'en';

// Estrutura de uma Solução apresentada na landing page
export interface SolutionItem {
  id: string;
  title: string;
  description: string;
  iconName: 'FileText' | 'Radio' | 'Globe' | 'Smile'; // Mapeamento dinâmico de ícones Lucide
  badge?: string;
  details: string[];
}

// Limites e taxas de cada plano de preço
export interface PricingFeature {
  name: string;
  includedMinutes: number | string; // Minutos inclusos (ou 'Ilimitado')
  exceedingCost?: string;           // Custo do minuto excedente
}

// Tipos de Planos comerciais
export interface PricingPlan {
  id: 'beginner' | 'business' | 'enterprise';
  name: string;
  description: string;
  monthlyPrice: number | null; // null para Enterprise (sob consulta)
  annualPrice: number | null;
  features: PricingFeature[];
  isPopular?: boolean;
  ctaText: string;
}

// Estrutura das informações enviadas pelo Formulário de Contato
export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  message: string;
  privacyConsent: boolean; // Consentimento LGPD obrigatório
  captchaVerified: boolean; // Validação do Captcha
}

// Cliente / Marca parceira que utiliza a plataforma
export interface ClientLogo {
  id: string;
  name: string;
  logoUrl: string;
  category: string;
}