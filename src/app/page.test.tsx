import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import HomePage from './page';

// Mock do ThemeSwitcher para evitar problemas de contexto
vi.mock('@/components/ThemeSwitcher', () => ({
  default: vi.fn(() => <div data-testid="theme-switcher">Theme Switcher</div>),
}));

describe('Home Page', () => {
  it('should render without crashing', () => {
    render(<HomePage />);
    expect(screen.getByText('Boilerplate Aqua9')).toBeInTheDocument();
  });

  it('should render Main component with default props', () => {
    render(<HomePage />);
    expect(screen.getByText('Boilerplate Aqua9')).toBeInTheDocument();
    expect(screen.getByText(/Template Next.js profissional/)).toBeInTheDocument();
  });

  it('should render default technologies', () => {
    render(<HomePage />);
    expect(screen.getByText('Next.js')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
  });

  it('should have proper page structure', () => {
    const { container } = render(<HomePage />);
    const mainElement = container.querySelector('main');
    expect(mainElement).toBeInTheDocument();
  });
});
