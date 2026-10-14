/**
 * @file src/components/Contact.tsx
 * @description Formulário de Contato da CheckSpeech AI com validações estritas,
 * suporte a telefone nacional/internacional, consentimento LGPD obrigatório e Captcha dinâmico.
 */

import React, { useState, useCallback } from 'react';
import { COUNTRY_OPTIONS } from '../data/mockData';
import type { ContactFormData, SupportedLanguage } from '../types';
import { Send, CheckCircle2, ShieldCheck, RefreshCw, AlertCircle } from 'lucide-react';

interface ContactProps {
  currentLang: SupportedLanguage;
}

// Função utilitária pura fora do componente para gerar números do Captcha
const createRandomCaptcha = () => {
  const num1 = Math.floor(Math.random() * 9) + 1;
  const num2 = Math.floor(Math.random() * 9) + 1;
  return { num1, num2, answer: num1 + num2 };
};

export const Contact: React.FC<ContactProps> = ({ currentLang }) => {
  // Estado inicial dos campos do formulário
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    country: 'BR',
    message: '',
    privacyConsent: false,
    captchaVerified: false,
  });

  // Inicialização Lazy/Síncrona do estado do Captcha (evita disparar setState em useEffect)
  const [captchaChallenge, setCaptchaChallenge] = useState<{ num1: number; num2: number; answer: number }>(
    () => createRandomCaptcha()
  );
  
  const [userCaptchaInput, setUserCaptchaInput] = useState<string>('');
  const [captchaError, setCaptchaError] = useState<boolean>(false);

  // Estados de feedback de envio do formulário
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmittedSuccess, setIsSubmittedSuccess] = useState<boolean>(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  // Gerador/Regerador de Captcha (invocado apenas ao clicar em "Atualizar" ou após submissão)
  const generateCaptcha = useCallback(() => {
    setCaptchaChallenge(createRandomCaptcha());
    setUserCaptchaInput('');
    setCaptchaError(false);
    setFormData((prev) => ({ ...prev, captchaVerified: false }));
  }, []);

  // Validação em tempo real do Captcha
  const handleCaptchaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setUserCaptchaInput(val);

    if (parseInt(val, 10) === captchaChallenge.answer) {
      setFormData((prev) => ({ ...prev, captchaVerified: true }));
      setCaptchaError(false);
    } else {
      setFormData((prev) => ({ ...prev, captchaVerified: false }));
      if (val.length >= String(captchaChallenge.answer).length) {
        setCaptchaError(true);
      }
    }
  };

  // Atualizador genérico dos campos do formulário
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    if (validationError) setValidationError(null);
  };

  // Submissão e Validação Estrita do Formulário
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Validação de campos obrigatórios
    if (!formData.fullName.trim()) {
      setValidationError(currentLang === 'pt' ? 'Por favor, informe seu nome completo.' : 'Please enter your full name.');
      return;
    }

    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      setValidationError(currentLang === 'pt' ? 'Informe um e-mail válido.' : 'Please enter a valid email address.');
      return;
    }

    if (!formData.country) {
      setValidationError(currentLang === 'pt' ? 'Selecione o seu país.' : 'Please select your country.');
      return;
    }

    // 2. Validação LGPD
    if (!formData.privacyConsent) {
      setValidationError(
        currentLang === 'pt'
          ? 'Você precisa concordar com a Política de Privacidade (LGPD) para enviar.'
          : 'You must agree to the Privacy Policy to submit.'
      );
      return;
    }

    // 3. Validação do Captcha
    if (!formData.captchaVerified) {
      setValidationError(currentLang === 'pt' ? 'Por favor, resolva o desafio do Captcha corretamente.' : 'Please solve the Captcha challenge correctly.');
      return;
    }

    // Simulação de Envio Assíncrono para API
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmittedSuccess(true);
    }, 1500);
  };

  const labels = {
    pt: {
      badge: 'FALE CONOSCO',
      title: 'Pronto para impulsionar seu negócio com IA de Voz?',
      subtitle: 'Preencha o formulário abaixo para receber um atendimento personalizado ou solicitar uma demonstração.',
      nameLabel: 'Nome Completo *',
      emailLabel: 'E-mail Corporativo *',
      phoneLabel: 'Telefone (Com DDD/Código de Área)',
      countryLabel: 'País *',
      messageLabel: 'Mensagem',
      lgpdText: 'Eu concordo com a Política de Privacidade.',
      captchaLabel: 'Verificação de Segurança (Captcha) *',
      sendBtn: 'Enviar Mensagem',
      sendingBtn: 'Enviando...',
      successTitle: 'Mensagem enviada com sucesso!',
      successDesc: 'Nosso time de especialistas entrará em contato em até 24 horas úteis.'
    },
    en: {
      badge: 'CONTACT US',
      title: 'Ready to power your business with Voice AI?',
      subtitle: 'Fill out the form below to receive personalized service or request a live demo.',
      nameLabel: 'Full Name *',
      emailLabel: 'Corporate Email *',
      phoneLabel: 'Phone (With Area Code)',
      countryLabel: 'Country *',
      messageLabel: 'Message',
      lgpdText: 'I agree to the Privacy Policy.',
      captchaLabel: 'Security Verification (Captcha) *',
      sendBtn: 'Send Message',
      sendingBtn: 'Sending...',
      successTitle: 'Message sent successfully!',
      successDesc: 'Our specialist team will get back to you within 24 business hours.'
    }
  }[currentLang];

  return (
    <section id="contato" className="py-20 bg-slate-950 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho */}
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-bold tracking-widest text-brand-500 uppercase px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20">
            {labels.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {labels.title}
          </h2>
          <p className="text-slate-400 text-base">
            {labels.subtitle}
          </p>
        </div>

        {/* FEEDBACK DE SUCESSO PÓS-ENVIO */}
        {isSubmittedSuccess ? (
          <div className="bg-slate-900 border border-brand-500/50 rounded-2xl p-8 sm:p-12 text-center space-y-4 shadow-2xl animate-fadeIn">
            <div className="w-16 h-16 bg-brand-500/20 text-brand-500 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-white">{labels.successTitle}</h3>
            <p className="text-slate-300 max-w-md mx-auto">{labels.successDesc}</p>
            <button
              onClick={() => {
                setIsSubmittedSuccess(false);
                generateCaptcha();
                setFormData({
                  fullName: '',
                  email: '',
                  phone: '',
                  country: 'BR',
                  message: '',
                  privacyConsent: false,
                  captchaVerified: false,
                });
              }}
              className="mt-4 px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-sm font-semibold transition-all"
            >
              {currentLang === 'pt' ? 'Enviar outra mensagem' : 'Send another message'}
            </button>
          </div>
        ) : (
          /* FORMULÁRIO DE CONTATO */
          <form onSubmit={handleSubmit} className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-2xl space-y-6">
            
            {/* Mensagem de Erro de Validação */}
            {validationError && (
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-3 text-red-400 text-sm">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <span>{validationError}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* NOME COMPLETO * */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  {labels.nameLabel}
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Ex: Ana Silva"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all text-sm"
                  required
                />
              </div>

              {/* E-MAIL * */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  {labels.emailLabel}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ana.silva@empresa.com"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all text-sm"
                  required
                />
              </div>

              {/* SELETOR DE PAÍS * */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  {labels.countryLabel}
                </label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all text-sm"
                  required
                >
                  {COUNTRY_OPTIONS.map((c) => (
                    <option key={c.code} value={c.code} className="bg-slate-900 text-white">
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* TELEFONE (Nacional/Internacional) */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  {labels.phoneLabel}
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+55 (11) 99999-9999"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all text-sm"
                />
              </div>

            </div>

            {/* MENSAGEM */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                {labels.messageLabel}
              </label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Conte-nos brevemente sobre sua necessidade de transcrição ou volume estimado..."
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all text-sm resize-none"
              />
            </div>

            {/* BLOCO CAPTCHA */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-slate-300 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-brand-500" />
                  <span>{labels.captchaLabel}</span>
                </label>
                <button
                  type="button"
                  onClick={generateCaptcha}
                  className="text-xs text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
                  title="Gerar novo desafio"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Atualizar</span>
                </button>
              </div>

              <div className="flex items-center gap-4">
                <div className="px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white font-mono font-bold tracking-wider text-sm select-none">
                  Quanto é {captchaChallenge.num1} + {captchaChallenge.num2} ?
                </div>
                <input
                  type="number"
                  value={userCaptchaInput}
                  onChange={handleCaptchaChange}
                  placeholder="?"
                  className={`w-24 px-3 py-2.5 rounded-lg bg-slate-900 border text-center font-mono font-bold text-white focus:outline-none text-sm ${
                    formData.captchaVerified
                      ? 'border-brand-500 ring-1 ring-brand-500'
                      : captchaError
                      ? 'border-red-500'
                      : 'border-slate-700'
                  }`}
                  required
                />
                {formData.captchaVerified && (
                  <span className="text-xs text-brand-500 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4" /> Verificado
                  </span>
                )}
              </div>
            </div>

            {/* CONSENTIMENTO LGPD (OBRIGATÓRIO) */}
            <div className="flex items-start gap-3 pt-2">
              <input
                type="checkbox"
                id="privacyConsent"
                name="privacyConsent"
                checked={formData.privacyConsent}
                onChange={handleChange}
                className="mt-1 w-4 h-4 rounded border-slate-700 bg-slate-950 text-brand-500 focus:ring-brand-500 focus:ring-offset-slate-900"
                required
              />
              <label htmlFor="privacyConsent" className="text-xs sm:text-sm text-slate-300 cursor-pointer leading-relaxed">
                {labels.lgpdText}{' '}
                <a href="#hero" className="text-brand-500 underline hover:text-brand-400">
                  Termos e LGPD
                </a>.
              </label>
            </div>

            {/* BOTAO ENVIAR (Desabilitado até aceitar LGPD e Captcha) */}
            <button
              type="submit"
              disabled={isSubmitting || !formData.privacyConsent || !formData.captchaVerified}
              className={`w-full py-4 px-6 rounded-xl font-bold text-base flex items-center justify-center gap-2 transition-all shadow-lg ${
                formData.privacyConsent && formData.captchaVerified && !isSubmitting
                  ? 'bg-brand-500 hover:bg-brand-600 text-slate-950 shadow-brand-500/20 cursor-pointer'
                  : 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700'
              }`}
            >
              {isSubmitting ? (
                <>
                  <RefreshCw className="w-5 h-5 animate-spin" />
                  <span>{labels.sendingBtn}</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>{labels.sendBtn}</span>
                </>
              )}
            </button>

          </form>
        )}

      </div>
    </section>
  );
};