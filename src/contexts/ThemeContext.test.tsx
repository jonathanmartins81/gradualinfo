import { render, screen } from '@testing-library/react';
import React from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { ThemeProvider, useTheme } from './ThemeContext';

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

// Componente de teste para usar o contexto
const TestComponent = () => {
  const { mode, isDark } = useTheme();

  return (
    <div>
      <span data-testid='current-theme'>{mode}</span>
      <span data-testid='is-dark'>{isDark.toString()}</span>
    </div>
  );
};

describe('ThemeContext', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorageMock.getItem.mockReturnValue(null);
  });

  it('should render without crashing', () => {
    expect(() => {
      render(
        <ThemeProvider>
          <TestComponent />
        </ThemeProvider>
      );
    }).not.toThrow();
  });

  it('should initialize with dark theme by default', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId('current-theme')).toHaveTextContent('dark');
    expect(screen.getByTestId('is-dark')).toHaveTextContent('true');
  });

  it('should always return dark theme regardless of localStorage', () => {
    localStorageMock.getItem.mockReturnValue('light');

    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId('current-theme')).toHaveTextContent('dark');
    expect(screen.getByTestId('is-dark')).toHaveTextContent('true');
  });

  it('should handle localStorage errors gracefully', () => {
    localStorageMock.getItem.mockImplementation(() => {
      throw new Error('localStorage error');
    });

    expect(() => {
      render(
        <ThemeProvider>
          <TestComponent />
        </ThemeProvider>
      );
    }).not.toThrow();

    expect(screen.getByTestId('current-theme')).toHaveTextContent('dark');
    expect(screen.getByTestId('is-dark')).toHaveTextContent('true');
  });

  it('should apply dark theme classes to document element', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    // Verificar se a classe dark está aplicada
    expect(document.documentElement).toHaveClass('dark');
    expect(document.documentElement).not.toHaveClass('light');
  });

  it('should set data-theme attribute to dark', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
  });

  it('should apply CSS custom properties for dark theme', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    const root = document.documentElement;
    
    expect(root.style.getPropertyValue('--primary-color')).toBe('#4F8CFF');
    expect(root.style.getPropertyValue('--secondary-color')).toBe('#A5B4FC');
    expect(root.style.getPropertyValue('--accent-color')).toBe('#FFC145');
    expect(root.style.getPropertyValue('--background-color')).toBe('#181920');
    expect(root.style.getPropertyValue('--text-color')).toBe('#FAFAFA');
    expect(root.style.getPropertyValue('--border-color')).toBe('#222327');
    expect(root.style.getPropertyValue('--card-color')).toBe('#23242BF6');
  });

  it('should handle theme context in nested components', () => {
    const NestedComponent = () => {
      const { mode, isDark } = useTheme();
      return (
        <div>
          <span data-testid='nested-theme'>{mode}</span>
          <span data-testid='nested-is-dark'>{isDark.toString()}</span>
        </div>
      );
    };

    render(
      <ThemeProvider>
        <div>
          <TestComponent />
          <NestedComponent />
        </div>
      </ThemeProvider>
    );

    expect(screen.getByTestId('current-theme')).toHaveTextContent('dark');
    expect(screen.getByTestId('is-dark')).toHaveTextContent('true');
    expect(screen.getByTestId('nested-theme')).toHaveTextContent('dark');
    expect(screen.getByTestId('nested-is-dark')).toHaveTextContent('true');
  });

  it('should maintain dark theme state across re-renders', () => {
    const { rerender } = render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId('current-theme')).toHaveTextContent('dark');

    // Re-renderizar o componente
    rerender(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId('current-theme')).toHaveTextContent('dark');
    expect(screen.getByTestId('is-dark')).toHaveTextContent('true');
  });

  it('should throw error when useTheme is used outside ThemeProvider', () => {
    expect(() => {
      render(<TestComponent />);
    }).toThrow('useTheme deve ser usado dentro de um ThemeProvider');
  });
});
