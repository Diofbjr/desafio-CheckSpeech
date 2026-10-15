import '@testing-library/jest-dom/vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Solutions } from './Solutions';

describe('Componente Solutions (Componente Dinâmico)', () => {
  it('deve renderizar a solução inicial selecionada por padrão', () => {
    render(<Solutions currentLang="pt" />);

    // Usa getAllByText pois o título aparece na tab e no painel de detalhes
    const titles = screen.getAllByText(/Transcrição de Áudio Assíncrono/i);
    expect(titles.length).toBeGreaterThan(0);
    expect(titles[0]).toBeInTheDocument();
  });

  it('deve alternar dinamicamente o painel ao clicar em outra solução', () => {
    render(<Solutions currentLang="pt" />);

    // Clica no botão de "Análise de Sentimento em Áudio"
    const sentimentTab = screen.getByRole('button', { name: /Análise de Sentimento em Áudio/i });
    fireEvent.click(sentimentTab);

    // Valida que o detalhe exclusivo da nova solução é exibido na tela
    expect(screen.getByText(/Mapeamento de sentimentos e tom de voz dominante/i)).toBeInTheDocument();
  });
});