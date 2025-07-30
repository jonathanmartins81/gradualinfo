import { ThemeProvider } from '@/contexts/ThemeContext';
import { render, screen } from '@testing-library/react';
import HomePage from './page';

// ===== WRAPPER COM THEME PROVIDER =====
const renderWithTheme = (component: React.ReactElement) => {
  return render(
    <ThemeProvider defaultMode="light">
      {component}
    </ThemeProvider>
  );
};

describe('Home Page', () => {
  it('should render without crashing', () => {
    renderWithTheme(<HomePage />);
    expect(screen.getByText('Boilerplate Aqua9')).toBeInTheDocument();
  });

  it('should render Main component with default props', () => {
    renderWithTheme(<HomePage />);
    expect(screen.getByText('Boilerplate Aqua9')).toBeInTheDocument();
    expect(screen.getByText(/Template Next.js profissional/)).toBeInTheDocument();
  });

  it('should render default technologies', () => {
    renderWithTheme(<HomePage />);
    expect(screen.getByText('Next.js')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
  });

  it('should have proper page structure', () => {
    const { container } = renderWithTheme(<HomePage />);
    const mainElement = container.querySelector('main');
    expect(mainElement).toBeInTheDocument();
  });
});
