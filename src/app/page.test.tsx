import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

// Mock do ThemeSwitcher
vi.mock('@/components/ThemeSwitcher', () => ({
  default: vi.fn(() => <div data-testid="theme-switcher">Theme Switcher</div>),
}));

// Mock do ThemeContext - mock simples que retorna valores padrão
vi.mock('@/contexts/ThemeContext', () => ({
  useTheme: () => ({
    isDark: false,
    mode: 'light',
    toggleTheme: vi.fn(),
    setMode: vi.fn(),
  }),
}));

// Importar o componente APÓS os mocks
import HomePage from './page';

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
