    import '@testing-library/jest-dom/vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Pricing } from './Pricing';

describe('Componente Pricing (Planos & Alternância de Ciclo)', () => {
  it('deve exibir os valores mensais dos planos por padrão', () => {
    render(<Pricing currentLang="pt" />);

    // Plano Beginner Mensal: R$ 29
    expect(screen.getByText(/R\$ 29/i)).toBeInTheDocument();
    // Plano Business Mensal: R$ 44
    expect(screen.getByText(/R\$ 44/i)).toBeInTheDocument();
  });

  it('deve recalcular os valores para cobrança anual ao alternar o toggle', () => {
    render(<Pricing currentLang="pt" />);

    // Clica no botão de alternância (Toggle)
    const toggleButton = screen.getByRole('button', { name: /Alternar ciclo de cobrança/i });
    fireEvent.click(toggleButton);

    // Valida os novos valores anuais (R$ 328 e R$ 499)
    expect(screen.getByText(/R\$ 328/i)).toBeInTheDocument();
    expect(screen.getByText(/R\$ 499/i)).toBeInTheDocument();
  });
});