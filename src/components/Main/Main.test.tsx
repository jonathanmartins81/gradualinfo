import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { Main } from './index';

describe('Main Component', () => {
  it('should render with default props', () => {
    render(<Main />);

    expect(screen.getByText('Boilerplate Aqua9')).toBeInTheDocument();
    expect(
      screen.getByText(/Template Next.js profissional/)
    ).toBeInTheDocument();
    expect(screen.getByAltText('Aqua9 Logo')).toBeInTheDocument();
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
});
