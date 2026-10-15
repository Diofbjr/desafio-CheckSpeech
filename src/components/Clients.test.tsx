import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Clients } from './Clients';

describe('Componente Clients (Prova Social)', () => {
  it('deve exibir o título institucional e as marcas parceiras', () => {
    render(<Clients currentLang="pt" />);

    // 1. Valida o título principal da seção
    expect(screen.getByText(/Empresas líderes confiam na CheckSpeech AI/i)).toBeInTheDocument();

    // 2. Valida as marcas através do atributo 'alt' das imagens das logos
    expect(screen.getByAltText(/Logo VoiceCorp/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Logo AudioMetrics/i)).toBeInTheDocument();

    // 3. Valida as categorias exibidas na tela
    expect(screen.getByText(/Enterprise/i)).toBeInTheDocument();
    expect(screen.getByText(/Analytics/i)).toBeInTheDocument();
  });
});