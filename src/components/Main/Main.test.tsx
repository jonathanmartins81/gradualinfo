import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Main } from './index';

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

describe('Main Component', () => {
  it('should render with default props', () => {
    render(<Main />);
    expect(screen.getByText('Boilerplate Aqua9')).toBeInTheDocument();
    expect(screen.getByText(/Template Next.js profissional/)).toBeInTheDocument();
  });

  it('should render with custom title', () => {
    render(<Main title='Custom Title' />);
    expect(screen.getByText('Custom Title')).toBeInTheDocument();
  });

  it('should render with custom description', () => {
    render(<Main description='Custom description' />);
    expect(screen.getByText('Custom description')).toBeInTheDocument();
  });

  it('should render technologies list', () => {
    render(<Main />);
    expect(screen.getByText('Next.js')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
  });

  it('should render with custom technologies', () => {
    const customTechs = ['Vue.js', 'Node.js', 'MongoDB'];
    render(<Main technologies={customTechs} />);
    expect(screen.getByText('Vue.js')).toBeInTheDocument();
    expect(screen.getByText('Node.js')).toBeInTheDocument();
    expect(screen.getByText('MongoDB')).toBeInTheDocument();
  });

  it('should render hero illustration', () => {
    render(<Main />);
    expect(screen.getByAltText('Hero Illustration')).toBeInTheDocument();
  });

  it('should have proper image attributes', () => {
    render(<Main />);
    const logo = screen.getByAltText('Aqua9 Logo');
    const hero = screen.getByAltText('Hero Illustration');
    expect(logo).toHaveAttribute('src', '/img/logo-light.svg');
    expect(hero).toHaveAttribute('src', '/img/illustration.svg');
  });

  it('should render with all custom props', () => {
    const customProps = {
      title: 'Custom Project',
      description: 'Custom project description',
      technologies: ['Custom Tech 1', 'Custom Tech 2'],
    };
    render(<Main {...customProps} />);
    expect(screen.getByText('Custom Project')).toBeInTheDocument();
    expect(screen.getByText('Custom project description')).toBeInTheDocument();
    expect(screen.getByText('Custom Tech 1')).toBeInTheDocument();
    expect(screen.getByText('Custom Tech 2')).toBeInTheDocument();
  });

  it('should handle empty technologies array', () => {
    render(<Main technologies={[]} />);
    expect(screen.queryByText('Next.js')).not.toBeInTheDocument();
    expect(screen.queryByText('React')).not.toBeInTheDocument();
    expect(screen.queryByText('TypeScript')).not.toBeInTheDocument();
  });

  it('should have proper component structure', () => {
    const { container } = render(<Main />);
    const mainElement = container.querySelector('main');
    expect(mainElement).toBeInTheDocument();

    const title = mainElement?.querySelector('h1');
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent('Boilerplate Aqua9');

    const description = mainElement?.querySelector('p');
    expect(description).toBeInTheDocument();
    expect(description).toHaveTextContent(/Template Next.js profissional/);
  });

  it('should render technology badges with proper styling', () => {
    render(<Main />);
    const nextJsElement = screen.getByText('Next.js');
    const reactElement = screen.getByText('React');
    const typescriptElement = screen.getByText('TypeScript');

    expect(nextJsElement).toBeInTheDocument();
    expect(reactElement).toBeInTheDocument();
    expect(typescriptElement).toBeInTheDocument();

    expect(nextJsElement.tagName).toBe('SPAN');
    expect(reactElement.tagName).toBe('SPAN');
    expect(typescriptElement.tagName).toBe('SPAN');
  });
});
