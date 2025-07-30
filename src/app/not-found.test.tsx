import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import NotFound from './not-found';

describe('NotFound Page', () => {
  it('should render 404 page correctly', () => {
    render(<NotFound />);

    expect(screen.getByText('Página não encontrada')).toBeInTheDocument();
    expect(
      screen.getByText(/A página que você está procurando não existe/)
    ).toBeInTheDocument();
  });

  it('should have a link to home page', () => {
    render(<NotFound />);

    const homeLink = screen.getByRole('link', {
      name: /Voltar ao início/i,
    });

    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', '/');
  });

  it('should have proper styling classes', () => {
    render(<NotFound />);

    const container = screen.getByText('Página não encontrada').closest('div');
    expect(container).toBeInTheDocument();
    // Verificar se o container tem as classes corretas
    expect(container).toHaveClass('text-center');
  });
});
