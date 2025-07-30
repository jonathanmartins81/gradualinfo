import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import NotFound from './not-found';

describe('NotFound Page', () => {
  it('should render 404 page correctly', () => {
    render(<NotFound />);

    expect(screen.getByText('404')).toBeInTheDocument();
    expect(screen.getByText('Página não encontrada')).toBeInTheDocument();
    expect(
      screen.getByText(/A página que você está procurando não existe/)
    ).toBeInTheDocument();
  });

  it('should have a link to home page', () => {
    render(<NotFound />);

    const homeLink = screen.getByRole('link', {
      name: /Voltar para o início/i,
    });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', '/');
  });

  it('should have links to other pages', () => {
    render(<NotFound />);

    const aboutLink = screen.getByRole('link', { name: /Sobre/i });
    const portfolioLink = screen.getByRole('link', { name: /Portfólio/i });

    expect(aboutLink).toBeInTheDocument();
    expect(aboutLink).toHaveAttribute('href', '/about');

    expect(portfolioLink).toBeInTheDocument();
    expect(portfolioLink).toHaveAttribute('href', '/portfolio');
  });

  it('should have proper styling classes', () => {
    render(<NotFound />);

    const container = screen.getByText('404').closest('div')?.parentElement;
    expect(container).toBeInTheDocument();
    expect(container).toHaveClass('min-h-screen');
    expect(container).toHaveClass('justify-center');
  });

  it('should display Aqua9 branding', () => {
    render(<NotFound />);

    expect(
      screen.getByText(/Desenvolvido com ❤️ pela Aqua9/)
    ).toBeInTheDocument();
  });
});
