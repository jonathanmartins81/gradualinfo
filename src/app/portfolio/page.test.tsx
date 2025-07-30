import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import PortfolioPage from './page';

// Mock do next/image
vi.mock('next/image', () => ({
  default: ({
    src,
    alt,
    ...props
  }: {
    src: string;
    alt: string;
    [key: string]: unknown;
  }) => <img src={src} alt={alt} {...props} />,
}));

describe('Portfolio Page', () => {
  it('should render without crashing', () => {
    render(<PortfolioPage />);
    expect(screen.getByText('Nosso Portfólio')).toBeInTheDocument();
  });

  it('should render page content correctly', () => {
    render(<PortfolioPage />);

    expect(screen.getByText('Nosso Portfólio')).toBeInTheDocument();
    expect(
      screen.getByText(
        /Explore nossos projetos e trabalhos realizados com as melhores tecnologias web/
      )
    ).toBeInTheDocument();
  });

  it('should have proper page structure', () => {
    const { container } = render(<PortfolioPage />);

    // Verificar se a página tem a estrutura básica
    expect(container.firstChild).toBeTruthy();
    expect(screen.getByText('Nosso Portfólio')).toBeInTheDocument();
  });

  it('should render main content sections', () => {
    render(<PortfolioPage />);

    // Verificar se as seções principais estão presentes
    expect(screen.getByText('Nosso Portfólio')).toBeInTheDocument();
    expect(screen.getByText('Projetos em Destaque')).toBeInTheDocument();
  });
});
