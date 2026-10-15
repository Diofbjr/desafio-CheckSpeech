import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Footer } from './Footer';

describe('Componente Footer (Rodapé Institucional)', () => {
  it('deve renderizar a marca/logo do CheckSpeech AI', () => {
    render(<Footer currentLang="pt" />);

    // Usa getAllByText pois 'CheckSpeech' aparece no logo e no texto de copyright
    const brandElements = screen.getAllByText(/CheckSpeech/i);
    expect(brandElements.length).toBeGreaterThan(0);
    expect(brandElements[0]).toBeInTheDocument();
  });

  it('deve exibir os links de navegação rápida em Português', () => {
    render(<Footer currentLang="pt" />);

    // Valida presença dos links para seções no footer
    expect(screen.getByRole('link', { name: 'Soluções' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Clientes' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Preços' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Contato' })).toBeInTheDocument();
  });

  it('deve exibir os links das redes sociais com aria-label apropriado', () => {
    render(<Footer currentLang="pt" />);

    // Valida se os links das redes sociais possuem atributos acessíveis
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'GitHub' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Twitter / X' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument();
  });

  it('deve renderizar o texto de copyright e ano atual', () => {
    render(<Footer currentLang="pt" />);

    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`© ${currentYear} CheckSpeech AI`, 'i'))).toBeInTheDocument();
  });
});
