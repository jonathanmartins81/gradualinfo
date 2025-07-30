import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import AboutPage from './page';

// Mock do componente DynamicSEO
vi.mock('@/components/DynamicSEO', () => ({
  DynamicSEO: ({
    title,
    description,
  }: {
    title?: string;
    description?: string;
  }) => (
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
    title: 'Sobre - Boilerplate Aqua9',
    description: 'Conheça mais sobre o Boilerplate Aqua9',
  })),
}));

describe('About Page', () => {
  it('should render without crashing', () => {
    render(<AboutPage />);
    expect(screen.getByText('Sobre o Boilerplate Aqua9')).toBeInTheDocument();
  });

  it('should render page content correctly', () => {
    render(<AboutPage />);

    expect(screen.getByText('Sobre o Boilerplate Aqua9')).toBeInTheDocument();
    expect(
      screen.getByText('Template profissional para projetos Next.js')
    ).toBeInTheDocument();
  });

  it('should have proper page structure', () => {
    const { container } = render(<AboutPage />);

    // Verificar se a página tem a estrutura básica
    expect(container.firstChild).toBeTruthy();
    expect(screen.getByText('Sobre o Boilerplate Aqua9')).toBeInTheDocument();
  });

  it('should render main content sections', () => {
    render(<AboutPage />);

    // Verificar se as seções principais estão presentes
    expect(screen.getByText('Sobre o Boilerplate Aqua9')).toBeInTheDocument();
    expect(
      screen.getByText('Template profissional para projetos Next.js')
    ).toBeInTheDocument();
  });

  it('should render without DynamicSEO component (server component)', () => {
    render(<AboutPage />);

    // Como é um server component, o DynamicSEO não é renderizado no teste
    expect(screen.getByText('Sobre o Boilerplate Aqua9')).toBeInTheDocument();
  });
});
