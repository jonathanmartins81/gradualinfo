import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';
import Footer from './index';

describe('Footer Component', () => {
  it('should render basic footer', () => {
    render(<Footer />);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('should render with copyright', () => {
    const copyright = '© 2024 Aqua9';
    render(<Footer copyright={copyright} />);
    expect(screen.getByText(copyright)).toBeInTheDocument();
  });

  it('should render with logo', () => {
    const logo = { src: '/logo.svg', alt: 'Logo' };
    render(<Footer logo={logo} />);
    const logoImg = screen.getByAltText('Logo');
    expect(logoImg).toBeInTheDocument();
    expect(logoImg).toHaveAttribute('src', '/logo.svg');
  });

  it('should render with sections', () => {
    const sections = [
      {
        title: 'Produtos',
        links: [
          { label: 'Boilerplate', href: '/' },
          { label: 'Documentação', href: '/docs' },
        ],
      },
    ];
    render(<Footer sections={sections} />);
    expect(screen.getByText('Produtos')).toBeInTheDocument();
    expect(screen.getByText('Boilerplate')).toBeInTheDocument();
    expect(screen.getByText('Documentação')).toBeInTheDocument();
  });

  it('should render with social links', () => {
    const socialLinks = [
      { label: 'GitHub', href: 'https://github.com' },
      { label: 'Twitter', href: 'https://twitter.com' },
    ];
    render(<Footer socialLinks={socialLinks} />);
    expect(screen.getByText('GitHub')).toBeInTheDocument();
    expect(screen.getByText('Twitter')).toBeInTheDocument();
  });

  it('should render back to top button when showBackToTop is true', () => {
    render(<Footer showBackToTop />);
    expect(
      screen.getByRole('button', { name: /voltar ao topo/i })
    ).toBeInTheDocument();
  });

  it('should not render back to top button when showBackToTop is false', () => {
    render(<Footer showBackToTop={false} />);
    expect(
      screen.queryByRole('button', { name: /voltar ao topo/i })
    ).not.toBeInTheDocument();
  });

  it('should apply correct variant classes', () => {
    render(<Footer variant='dark' />);
    const footer = screen.getByRole('contentinfo');
    expect(footer).toHaveClass('bg-gray-900', 'text-white');
  });

  it('should apply correct size classes', () => {
    render(<Footer size='lg' />);
    const footer = screen.getByRole('contentinfo');
    expect(footer).toHaveClass('py-12');
  });

  it('should render with custom className', () => {
    const customClass = 'custom-footer-class';
    render(<Footer className={customClass} />);
    const footer = screen.getByRole('contentinfo');
    expect(footer).toHaveClass(customClass);
  });
});
