import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import HomePage from './page';

// Mock do ThemeSwitcher para evitar problemas de contexto
vi.mock('@/components/ThemeSwitcher', () => ({
  default: vi.fn(() => <div data-testid="theme-switcher">Theme Switcher</div>),
}));

// Mock do ThemeContext
vi.mock('@/contexts/ThemeContext', () => ({
  useTheme: vi.fn(() => ({
    isDark: false,
    mode: 'light',
    toggleTheme: vi.fn(),
    setMode: vi.fn(),
  })),
  ThemeProvider: ({ children }: { children: React.ReactNode }) => children,
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

  it('should use light logo by default', () => {
    render(<HomePage />);
    const logo = screen.getByAltText('Aqua9 Logo');
    expect(logo).toHaveAttribute('src', '/img/logo-light.svg');
  });
});
