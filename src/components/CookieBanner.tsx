/**
 * @file src/components/CookieBanner.tsx
 * @description Barra de Consentimento de Cookies (LGPD/GDPR) com persistência via localStorage.
 * Utiliza inicialização preguiçosa de estado para evitar chamadas de setState em useEffect.
 */

import React, { useState } from 'react';
import { Cookie, ShieldCheck, X } from 'lucide-react';
import type { SupportedLanguage } from '../types';

interface CookieBannerProps {
  currentLang: SupportedLanguage;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ currentLang }) => {
  // Inicialização síncrona/lazy do estado lendo o localStorage (evita o alerta do ESLint)
  const [isVisible, setIsVisible] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    const consent = localStorage.getItem('checkspeech_cookie_consent');
    return !consent; // Exibe o banner apenas se NÃO houver consentimento salvo
  });

  const handleAccept = () => {
    localStorage.setItem('checkspeech_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 bg-slate-900/95 border border-slate-800 rounded-2xl p-5 shadow-2xl backdrop-blur-md animate-slideUp">
      <div className="flex items-start gap-4">
        <div className="p-2.5 rounded-xl bg-brand-500/20 text-brand-500 shrink-0">
          <Cookie className="w-6 h-6" />
        </div>
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-brand-500" />
            <span>{currentLang === 'pt' ? 'Respeitamos sua privacidade' : 'We value your privacy'}</span>
          </h4>
          <p className="text-xs text-slate-300 leading-relaxed">
            {currentLang === 'pt'
              ? 'Utilizamos cookies essenciais para otimizar sua experiência e analisar o tráfego da nossa API de acordo com a LGPD.'
              : 'We use essential cookies to optimize your experience and analyze traffic in accordance with LGPD/GDPR.'}
          </p>
          <div className="flex items-center gap-3 pt-1">
            <button
              onClick={handleAccept}
              className="px-4 py-2 bg-brand-500 hover:bg-brand-600 text-slate-950 font-bold rounded-lg text-xs transition-all shadow-md shadow-brand-500/20"
            >
              {currentLang === 'pt' ? 'Aceitar Cookies' : 'Accept Cookies'}
            </button>
            <button
              onClick={() => setIsVisible(false)}
              className="p-2 text-slate-400 hover:text-white transition-colors"
              aria-label="Fechar aviso"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};