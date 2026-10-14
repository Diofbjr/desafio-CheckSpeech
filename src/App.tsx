/**
 * @file src/App.tsx
 * @description Componente Raiz da Aplicação CheckSpeech AI.
 * Reúne todas as seções e gerencia o estado global de idioma.
 */

import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Clients } from './components/Clients';
import { Solutions } from './components/Solutions';
import { Pricing } from './components/Pricing';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CookieBanner } from './components/CookieBanner';
import type { SupportedLanguage } from './types';

export function App() {
  const [currentLang, setCurrentLang] = useState<SupportedLanguage>('pt');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-brand-500 selection:text-slate-950">
      {/* Header Flutuante (Bônus Multilíngue) */}
      <Header currentLang={currentLang} onLanguageChange={setCurrentLang} />

      <main>
        {/* Seção 1: Hero + CTA 1 */}
        <Hero currentLang={currentLang} />

        {/* Seção 2: Clientes */}
        <Clients currentLang={currentLang} />

        {/* Seção 3: Soluções (Componente Dinâmico) */}
        <Solutions currentLang={currentLang} />

        {/* Seção 4: Preços + CTA 2 */}
        <Pricing currentLang={currentLang} />

        {/* Seção 5: Formulário de Contato (Validações, LGPD e Captcha) */}
        <Contact currentLang={currentLang} />
      </main>

      {/* Rodapé Institucional */}
      <Footer currentLang={currentLang} />

      {/* Barra de Consentimento de Cookies (Obrigatório) */}
      <CookieBanner currentLang={currentLang} />
    </div>
  );
}

export default App;