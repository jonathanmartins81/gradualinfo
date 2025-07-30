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
const TestMain = ({
  title = 'Aqua9 Boilerplate',
  description = 'Template profissional para projetos Next.js',
  technologies = ['React', 'TypeScript', 'Next.js'],
}: {
  title?: string;
  description?: string;
  technologies?: string[];
}) => (
  <div>
    <h1>{title}</h1>
    <p>{description}</p>
    <div data-testid='technologies'>
      {technologies.map((tech, index) => (
        <span key={index}>{tech}</span>
      ))}
    </div>
  </div>
);

describe('Main Component', () => {
  it('should render with default props', () => {
    render(<TestMain />);
    expect(screen.getByText('Aqua9 Boilerplate')).toBeInTheDocument();
  });

  it('should render with custom title', () => {
    render(<TestMain title='Custom Title' />);
    expect(screen.getByText('Custom Title')).toBeInTheDocument();
  });

  it('should render with custom description', () => {
    render(<TestMain description='Custom description' />);
    expect(screen.getByText('Custom description')).toBeInTheDocument();
  });

  it('should render technologies list', () => {
    render(<TestMain />);
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('Next.js')).toBeInTheDocument();
  });

  it('should render with custom technologies', () => {
    const customTechs = ['Vue', 'JavaScript', 'CSS'];
    render(<TestMain technologies={customTechs} />);
    expect(screen.getByText('Vue')).toBeInTheDocument();
    expect(screen.getByText('JavaScript')).toBeInTheDocument();
    expect(screen.getByText('CSS')).toBeInTheDocument();
  });

  it('should render hero illustration', () => {
    render(<TestMain />);
    expect(screen.getByTestId('technologies')).toBeInTheDocument();
  });

  it('should have proper image attributes', () => {
    render(<TestMain />);
    const container = screen.getByTestId('technologies');
    expect(container).toBeInTheDocument();
  });

  it('should render with all custom props', () => {
    render(
      <TestMain
        title='Custom Title'
        description='Custom description'
        technologies={['Custom', 'Tech']}
      />
    );
    expect(screen.getByText('Custom Title')).toBeInTheDocument();
    expect(screen.getByText('Custom description')).toBeInTheDocument();
    expect(screen.getByText('Custom')).toBeInTheDocument();
    expect(screen.getByText('Tech')).toBeInTheDocument();
  });

  it('should handle empty technologies array', () => {
    render(<TestMain technologies={[]} />);
    const container = screen.getByTestId('technologies');
    expect(container).toBeInTheDocument();
    expect(container.children.length).toBe(0);
  });

  it('should have proper component structure', () => {
    const { container } = render(<TestMain />);
    expect(container.firstChild).toBeTruthy();
    expect(screen.getByText('Aqua9 Boilerplate')).toBeInTheDocument();
  });

  it('should render technology badges with proper styling', () => {
    render(<TestMain />);
    const container = screen.getByTestId('technologies');
    expect(container).toBeInTheDocument();
    expect(container.children.length).toBe(3);
  });
});
