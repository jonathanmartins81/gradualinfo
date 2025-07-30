import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import PortfolioPage from './page';

// Mock do componente DynamicSEO
vi.mock('@/components/DynamicSEO', () => ({
  DynamicSEO: ({ title, description }: { title?: string; description?: string }) => (
    <div
      data-testid='dynamic-seo'
      data-title={title}
      data-description={description}
    />
  ),
}));

// Mock do generateDynamicSEO
vi.mock('@/utils/SEO', () => ({
  generateDynamicSEO: vi.fn(() => ({
    title: 'Portfólio - Boilerplate Aqua9',
    description: 'Conheça nossos projetos e trabalhos',
  })),
}));

describe('Portfolio Page', () => {
  it('should render without crashing', () => {
    render(<PortfolioPage />);
    expect(screen.getByText('Portfólio de Projetos')).toBeInTheDocument();
  });

  it('should render page content correctly', () => {
    render(<PortfolioPage />);

    expect(screen.getByText('Portfólio de Projetos')).toBeInTheDocument();
    expect(
      screen.getByText('Projetos desenvolvidos com o Boilerplate Aqua9')
    ).toBeInTheDocument();
  });

  it('should have proper page structure', () => {
    const { container } = render(<PortfolioPage />);

    // Verificar se a página tem a estrutura básica
    expect(container.firstChild).toBeTruthy();
    expect(screen.getByText('Portfólio de Projetos')).toBeInTheDocument();
  });

  it('should render main content sections', () => {
    render(<PortfolioPage />);

    // Verificar se as seções principais estão presentes
    expect(screen.getByText('Portfólio de Projetos')).toBeInTheDocument();
    expect(screen.getByText('Projetos em Destaque')).toBeInTheDocument();
  });
});
