import '@testing-library/jest-dom/vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Header } from './Header';

describe('Componente Header (Navegação & Idioma)', () => {
  it('deve renderizar os links de navegação em Português por padrão', () => {
    const handleLanguageChange = vi.fn();
    render(<Header currentLang="pt" onLanguageChange={handleLanguageChange} />);

    expect(screen.getByText('Soluções')).toBeInTheDocument();
    expect(screen.getByText('Clientes')).toBeInTheDocument();
    expect(screen.getByText('Preços')).toBeInTheDocument();
    expect(screen.getByText('Contato')).toBeInTheDocument();
  });

  it('deve disparar a função de troca de idioma ao clicar no botão EN', () => {
    const handleLanguageChange = vi.fn();
    render(<Header currentLang="pt" onLanguageChange={handleLanguageChange} />);

    const enButton = screen.getByRole('button', { name: 'EN' });
    fireEvent.click(enButton);

    expect(handleLanguageChange).toHaveBeenCalledWith('en');
  });
});