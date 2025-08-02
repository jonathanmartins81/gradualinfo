import { render, screen } from '@testing-library/react';
import React from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import ThemeSwitcher from './ThemeSwitcher';

// Mock do localStorage
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
};
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

// Mock do matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

describe('ThemeSwitcher Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorageMock.getItem.mockReturnValue(null);
  });

  it('should render without crashing', () => {
    expect(() => {
      render(<ThemeSwitcher />);
    }).not.toThrow();
  });

  it('should render theme indicator', () => {
    render(<ThemeSwitcher />);
    expect(screen.getByTestId('theme-switcher')).toBeInTheDocument();
  });

  it('should have correct aria-label for dark theme', () => {
    render(<ThemeSwitcher />);
    const indicator = screen.getByTestId('theme-switcher');
    expect(indicator).toHaveAttribute('aria-label', 'Dark theme active');
  });

  it('should display dark theme text', () => {
    render(<ThemeSwitcher />);
    expect(screen.getByText('Dark')).toBeInTheDocument();
  });

  it('should show moon icon', () => {
    render(<ThemeSwitcher />);
    const indicator = screen.getByTestId('theme-switcher');
    expect(indicator.querySelector('svg')).toBeInTheDocument();
  });

  it('should always show dark theme regardless of localStorage', () => {
    localStorageMock.getItem.mockReturnValue('light');
    render(<ThemeSwitcher />);

    expect(screen.getByText('Dark')).toBeInTheDocument();
    expect(screen.getByTestId('theme-switcher')).toHaveAttribute(
      'aria-label',
      'Dark theme active'
    );
  });

  it('should handle localStorage errors gracefully', () => {
    localStorageMock.getItem.mockImplementation(() => {
      throw new Error('localStorage error');
    });

    expect(() => {
      render(<ThemeSwitcher />);
    }).not.toThrow();

    expect(screen.getByText('Dark')).toBeInTheDocument();
  });

  it('should have proper accessibility attributes', () => {
    render(<ThemeSwitcher />);
    const indicator = screen.getByTestId('theme-switcher');

    expect(indicator).toHaveAttribute('aria-label', 'Dark theme active');
    expect(indicator).toHaveAttribute('title', 'Dark theme active');
  });

  it('should maintain dark theme state across re-renders', () => {
    const { rerender } = render(<ThemeSwitcher />);

    expect(screen.getByText('Dark')).toBeInTheDocument();

    // Re-renderizar o componente
    rerender(<ThemeSwitcher />);

    expect(screen.getByText('Dark')).toBeInTheDocument();
    expect(screen.getByTestId('theme-switcher')).toHaveAttribute(
      'aria-label',
      'Dark theme active'
    );
  });

  it('should render with different sizes', () => {
    const { rerender } = render(<ThemeSwitcher size='sm' />);
    expect(screen.getByTestId('theme-switcher')).toBeInTheDocument();

    rerender(<ThemeSwitcher size='md' />);
    expect(screen.getByTestId('theme-switcher')).toBeInTheDocument();

    rerender(<ThemeSwitcher size='lg' />);
    expect(screen.getByTestId('theme-switcher')).toBeInTheDocument();
  });

  it('should render with different variants', () => {
    const { rerender } = render(<ThemeSwitcher variant='default' />);
    expect(screen.getByTestId('theme-switcher')).toBeInTheDocument();

    rerender(<ThemeSwitcher variant='minimal' />);
    expect(screen.getByTestId('theme-switcher')).toBeInTheDocument();

    rerender(<ThemeSwitcher variant='outline' />);
    expect(screen.getByTestId('theme-switcher')).toBeInTheDocument();
  });

  it('should render with and without animation', () => {
    const { rerender } = render(<ThemeSwitcher animated={true} />);
    expect(screen.getByTestId('theme-switcher')).toBeInTheDocument();

    rerender(<ThemeSwitcher animated={false} />);
    expect(screen.getByTestId('theme-switcher')).toBeInTheDocument();
  });
});
