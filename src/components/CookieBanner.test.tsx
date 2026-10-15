import '@testing-library/jest-dom/vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import { CookieBanner } from './CookieBanner';

describe('Componente CookieBanner (LGPD/GDPR)', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('deve exibir o banner de cookies quando o consentimento não foi dado', () => {
    render(<CookieBanner currentLang="pt" />);

    expect(screen.getByText(/Respeitamos sua privacidade/i)).toBeInTheDocument();
  });

  it('deve ocultar o banner ao clicar no botão de aceitar', () => {
    render(<CookieBanner currentLang="pt" />);

    const acceptBtn = screen.getByRole('button', { name: /Aceitar Cookies/i });
    fireEvent.click(acceptBtn);

    expect(screen.queryByText(/Respeitamos sua privacidade/i)).not.toBeInTheDocument();
    expect(localStorage.getItem('checkspeech_cookie_consent')).toBe('accepted');
  });
});