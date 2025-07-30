import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';
import { Main } from './index';
import { ThemeProvider } from '@/contexts/ThemeContext';

// ===== WRAPPER COM THEME PROVIDER =====
const renderWithTheme = (component: React.ReactElement) => {
  return render(
    <ThemeProvider defaultMode="light">
      {component}
    </ThemeProvider>
  );
};

describe('Main Component', () => {
  it('should render with default props', () => {
    renderWithTheme(<Main />);

    expect(screen.getByText('Boilerplate Aqua9')).toBeInTheDocument();
    expect(screen.getByText(/Template Next.js profissional/)).toBeInTheDocument();
  });

  it('should render with custom title', () => {
    renderWithTheme(<Main title='Custom Title' />);

    expect(screen.getByText('Custom Title')).toBeInTheDocument();
  });

  it('should render with custom description', () => {
    renderWithTheme(<Main description='Custom description' />);

    expect(screen.getByText('Custom description')).toBeInTheDocument();
  });

  it('should render technologies list', () => {
    renderWithTheme(<Main />);

    expect(screen.getByText('Next.js')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
  });

  it('should render with custom technologies', () => {
    const customTechs = ['Vue.js', 'Node.js', 'MongoDB'];
    renderWithTheme(<Main technologies={customTechs} />);

    expect(screen.getByText('Vue.js')).toBeInTheDocument();
    expect(screen.getByText('Node.js')).toBeInTheDocument();
    expect(screen.getByText('MongoDB')).toBeInTheDocument();
  });

  it('should render hero illustration', () => {
    renderWithTheme(<Main />);

    expect(screen.getByAltText('Hero Illustration')).toBeInTheDocument();
  });

  it('should have proper image attributes', () => {
    renderWithTheme(<Main />);

    const logo = screen.getByAltText('Aqua9 Logo');
    const hero = screen.getByAltText('Hero Illustration');

    expect(logo).toHaveAttribute('src', '/img/logo.svg');
    expect(hero).toHaveAttribute('src', '/img/illustration.svg');
  });

  it('should render with all custom props', () => {
    const customProps = {
      title: 'Custom Project',
      description: 'Custom project description',
      technologies: ['Custom Tech 1', 'Custom Tech 2'],
    };

    renderWithTheme(<Main {...customProps} />);

    expect(screen.getByText('Custom Project')).toBeInTheDocument();
    expect(screen.getByText('Custom project description')).toBeInTheDocument();
    expect(screen.getByText('Custom Tech 1')).toBeInTheDocument();
    expect(screen.getByText('Custom Tech 2')).toBeInTheDocument();
  });

  it('should handle empty technologies array', () => {
    renderWithTheme(<Main technologies={[]} />);

    // Deve renderizar sem tecnologias
    expect(screen.queryByText('Next.js')).not.toBeInTheDocument();
    expect(screen.queryByText('React')).not.toBeInTheDocument();
    expect(screen.queryByText('TypeScript')).not.toBeInTheDocument();
  });

  it('should have proper component structure', () => {
    const { container } = renderWithTheme(<Main />);

    // Verificar se o componente tem a estrutura correta
    const mainElement = container.querySelector('main');
    expect(mainElement).toBeInTheDocument();

    // Verificar se tem o título
    const title = mainElement?.querySelector('h1');
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent('Boilerplate Aqua9');

    // Verificar se tem a descrição
    const description = mainElement?.querySelector('p');
    expect(description).toBeInTheDocument();
    expect(description).toHaveTextContent(/Template Next.js profissional/);
  });

  it('should render technology badges with proper styling', () => {
    renderWithTheme(<Main />);

    // Verificar se as tecnologias estão presentes como spans
    const nextJsElement = screen.getByText('Next.js');
    const reactElement = screen.getByText('React');
    const typescriptElement = screen.getByText('TypeScript');

    expect(nextJsElement).toBeInTheDocument();
    expect(reactElement).toBeInTheDocument();
    expect(typescriptElement).toBeInTheDocument();

    // Verificar se são elementos span
    expect(nextJsElement.tagName).toBe('SPAN');
    expect(reactElement.tagName).toBe('SPAN');
    expect(typescriptElement.tagName).toBe('SPAN');
  });
});
