import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Header from './index';

describe('Header Component', () => {
  it('should render header with title', () => {
    render(<Header title="Test Header" />);

    expect(screen.getByText('Test Header')).toBeInTheDocument();
  });

  it('should render header with subtitle', () => {
    render(<Header title="Test Header" subtitle="Test Subtitle" />);

    expect(screen.getByText('Test Header')).toBeInTheDocument();
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument();
  });

  it('should render header with different variants', () => {
    const { rerender } = render(<Header title="Default" variant="default" />);
    expect(screen.getByText('Default').closest('header')).toHaveClass('bg-white');

    rerender(<Header title="Hero" variant="hero" />);
    expect(screen.getByText('Hero').closest('header')).toHaveClass('bg-gradient-to-r');

    rerender(<Header title="Dashboard" variant="dashboard" />);
    expect(screen.getByText('Dashboard').closest('header')).toHaveClass('bg-gray-50');
  });

  it('should render header with different sizes', () => {
    const { rerender } = render(<Header title="Small" size="sm" />);
    expect(screen.getByText('Small').closest('header')).toHaveClass('py-3 px-4');

    rerender(<Header title="Large" size="lg" />);
    expect(screen.getByText('Large').closest('header')).toHaveClass('py-6 px-8');
  });

  it('should render header with logo', () => {
    render(
      <Header
        title="With Logo"
        logo={{
          src: '/test-logo.svg',
          alt: 'Test Logo',
        }}
      />
    );

    const logo = screen.getByAltText('Test Logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src');
  });

  it('should render header with actions', () => {
    render(
      <Header
        title="With Actions"
        actions={<button>Action Button</button>}
      />
    );

    expect(screen.getByText('Action Button')).toBeInTheDocument();
  });

  it('should render header with breadcrumbs', () => {
    render(
      <Header
        title="With Breadcrumbs"
        breadcrumbs={<span>Home / Page</span>}
      />
    );

    expect(screen.getByText('Home / Page')).toBeInTheDocument();
  });

  it('should render header with children', () => {
    render(
      <Header title="With Children">
        <p>Additional content</p>
      </Header>
    );

    expect(screen.getByText('Additional content')).toBeInTheDocument();
  });

  it('should render with custom className', () => {
    render(<Header title="Custom" className="custom-class" />);

    const header = screen.getByText('Custom').closest('header');
    expect(header).toHaveClass('custom-class');
  });
});
