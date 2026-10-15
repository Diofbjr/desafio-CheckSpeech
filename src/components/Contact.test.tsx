import '@testing-library/jest-dom/vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Contact } from './Contact';

describe('Componente Contact (Formulário & Regras de Negócio)', () => {
  it('deve renderizar todos os campos obrigatórios do formulário', () => {
    render(<Contact currentLang="pt" />);

    expect(screen.getByPlaceholderText(/Ex: Ana Silva/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/ana.silva@empresa.com/i)).toBeInTheDocument();
    expect(screen.getByText(/Eu concordo com a Política de Privacidade/i)).toBeInTheDocument();
  });

  it('deve manter o botão de envio DESABILITADO se a LGPD ou Captcha não forem preenchidos', () => {
    render(<Contact currentLang="pt" />);

    const submitButton = screen.getByRole('button', { name: /Enviar Mensagem/i });
    expect(submitButton).toBeDisabled();
  });

  it('deve habilitar o botão de envio após o aceite da LGPD e resolução correta do Captcha', () => {
    render(<Contact currentLang="pt" />);

    // 1. Marca o checkbox da LGPD
    const lgpdCheckbox = screen.getByRole('checkbox', { name: /Eu concordo/i });
    fireEvent.click(lgpdCheckbox);

    // 2. Identifica a pergunta do Captcha no DOM e insere a resposta correta
    const captchaLabel = screen.getByText(/Quanto é/i);
    const textContent = captchaLabel.textContent || '';
    const match = textContent.match(/Quanto é (\d+) \+ (\d+) \?/);
    
    if (match) {
      const num1 = parseInt(match[1], 10);
      const num2 = parseInt(match[2], 10);
      const answer = num1 + num2;

      const captchaInput = screen.getByPlaceholderText('?');
      fireEvent.change(captchaInput, { target: { value: String(answer) } });
    }

    // 3. Valida que o botão de enviar foi habilitado
    const submitButton = screen.getByRole('button', { name: /Enviar Mensagem/i });
    expect(submitButton).not.toBeDisabled();
  });
});