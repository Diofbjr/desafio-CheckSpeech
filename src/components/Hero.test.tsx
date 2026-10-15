import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Hero } from './Hero';

describe('Componente Hero', () => {
  it('deve renderizar o título principal e as métricas de áudio', () => {
    render(<Hero currentLang="pt" />);

    expect(screen.getByText(/Transforme Voz em Insights com/i)).toBeInTheDocument();
    expect(screen.getByText(/\+500k Horas/i)).toBeInTheDocument();
    expect(screen.getByText(/52 Idiomas/i)).toBeInTheDocument();
  });

  it('deve conter o link de CTA direcionando para o formulário de contato', () => {
    render(<Hero currentLang="pt" />);

    const ctaButton = screen.getByRole('link', { name: /Falar com Especialista/i });
    expect(ctaButton).toBeInTheDocument();
    expect(ctaButton).toHaveAttribute('href', '#contato');
  });
});