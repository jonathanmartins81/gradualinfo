import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import Home from './page';

// Mock do componente Main
vi.mock('@/components/Main', () => ({
  Main: ({
    title,
    description,
    technologies,
  }: {
    title?: string;
    description?: string;
    technologies?: string[];
  }) => (
    <div data-testid='main-component'>
      <h1>{title}</h1>
      <p>{description}</p>
      <div data-testid='technologies'>
        {technologies?.map((tech: string, index: number) => (
          <span key={index} data-testid={`tech-${index}`}>
            {tech}
          </span>
        ))}
      </div>
    </div>
  ),
}));

// Mock do generateDynamicSEO
vi.mock('@/utils/SEO', () => ({
  generateDynamicSEO: vi.fn(() => ({
    title: 'Test Title',
    description: 'Test Description',
  })),
}));

describe('Home Page', () => {
  it('should render without crashing', () => {
    render(<Home />);
    expect(screen.getByText('Boilerplate Aqua9')).toBeInTheDocument();
  });

  it('should render Main component with default props', () => {
    render(<Home />);

    // Verificar se o título padrão está presente
    expect(screen.getByText('Boilerplate Aqua9')).toBeInTheDocument();

    // Verificar se a descrição padrão está presente
    expect(
      screen.getByText(
        'Template Next.js profissional com TypeScript e SEO otimizado'
      )
    ).toBeInTheDocument();
  });

  it('should render default technologies', () => {
    render(<Home />);

    // Verificar se as tecnologias padrão estão presentes
    expect(screen.getByText('Next.js')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
  });

  it('should have proper page structure', () => {
    const { container } = render(<Home />);

    // Verificar se a página tem a estrutura básica
    expect(container.firstChild).toBeTruthy();
    expect(screen.getByText('Boilerplate Aqua9')).toBeInTheDocument();
  });
});
