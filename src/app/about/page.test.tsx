import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import AboutPage from './page';

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

describe('About Page', () => {
  it('should render without crashing', () => {
    render(<AboutPage />);
    expect(screen.getByText('Sobre o Aqua9 Boilerplate')).toBeInTheDocument();
  });

  it('should render page content correctly', () => {
    render(<AboutPage />);

    // Verificar se as seções principais estão presentes
    expect(screen.getByText('Sobre o Aqua9 Boilerplate')).toBeInTheDocument();
    expect(
      screen.getByText(
        /Um template Next.js profissional desenvolvido para acelerar o desenvolvimento de aplicações web modernas/
      )
    ).toBeInTheDocument();
  });

  it('should render main content sections', () => {
    render(<AboutPage />);

    // Verificar se as seções principais estão presentes
    expect(screen.getByText('Sobre o Aqua9 Boilerplate')).toBeInTheDocument();
  });
});
