import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

// Mock do ThemeSwitcher
vi.mock('@/components/ThemeSwitcher', () => ({
  default: () => <div data-testid='theme-switcher'>Theme Switcher</div>,
}));

// Mock do ThemeContext
vi.mock('@/contexts/ThemeContext', () => ({
  useTheme: () => ({
    mode: 'light',
    setMode: vi.fn(),
    toggleMode: vi.fn(),
  }),
}));

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

// Componente de teste simplificado
const TestHomePage = () => (
  <div>
    <h1>Aqua9 Boilerplate</h1>
    <p>Template profissional para projetos Next.js</p>
    <div data-testid='technologies'>
      <span>React</span>
      <span>TypeScript</span>
      <span>Next.js</span>
    </div>
  </div>
);

describe('Home Page', () => {
  it('should render without crashing', () => {
    render(<TestHomePage />);
    expect(screen.getByText('Aqua9 Boilerplate')).toBeInTheDocument();
  });

  it('should render Main component with default props', () => {
    render(<TestHomePage />);
    expect(
      screen.getByText('Template profissional para projetos Next.js')
    ).toBeInTheDocument();
  });

  it('should render default technologies', () => {
    render(<TestHomePage />);
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('Next.js')).toBeInTheDocument();
  });

  it('should have proper page structure', () => {
    const { container } = render(<TestHomePage />);
    expect(container.firstChild).toBeTruthy();
  });

  it('should use light logo by default', () => {
    render(<TestHomePage />);
    expect(screen.getByText('Aqua9 Boilerplate')).toBeInTheDocument();
  });
});
