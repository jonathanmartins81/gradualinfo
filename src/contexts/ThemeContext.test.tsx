import { fireEvent, render, screen } from '@testing-library/react';
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
  const { mode, toggleMode, setMode } = useTheme();

  return (
    <div>
      <span data-testid='current-theme'>{mode}</span>
      <button onClick={toggleMode} data-testid='toggle-theme'>
        Toggle Theme
      </button>
      <button onClick={() => setMode('dark')} data-testid='set-dark'>
        Set Dark
      </button>
      <button onClick={() => setMode('light')} data-testid='set-light'>
        Set Light
      </button>
      <button onClick={() => setMode('system')} data-testid='set-system'>
        Set System
      </button>
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

  it('should initialize with light theme by default', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId('current-theme')).toHaveTextContent('light');
  });

  it('should initialize with theme from localStorage', () => {
    localStorageMock.getItem.mockReturnValue('dark');

    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId('current-theme')).toHaveTextContent('dark');
  });

  it('should handle invalid localStorage theme gracefully', () => {
    localStorageMock.getItem.mockReturnValue('invalid-theme');

    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId('current-theme')).toHaveTextContent('light');
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

    expect(screen.getByTestId('current-theme')).toHaveTextContent('light');
  });

  it('should toggle theme from light to dark', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId('current-theme')).toHaveTextContent('light');

    fireEvent.click(screen.getByTestId('toggle-theme'));

    expect(screen.getByTestId('current-theme')).toHaveTextContent('dark');
    expect(localStorageMock.setItem).toHaveBeenCalledWith('theme-mode', 'dark');
  });

  it('should toggle theme from dark to light', () => {
    localStorageMock.getItem.mockReturnValue('dark');

    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId('current-theme')).toHaveTextContent('dark');

    fireEvent.click(screen.getByTestId('toggle-theme'));

    expect(screen.getByTestId('current-theme')).toHaveTextContent('light');
    expect(localStorageMock.setItem).toHaveBeenCalledWith(
      'theme-mode',
      'light'
    );
  });

  it('should set theme to dark', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    fireEvent.click(screen.getByTestId('set-dark'));

    expect(screen.getByTestId('current-theme')).toHaveTextContent('dark');
    expect(localStorageMock.setItem).toHaveBeenCalledWith('theme', 'dark');
  });

  it('should set theme to light', () => {
    localStorageMock.getItem.mockReturnValue('dark');

    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    fireEvent.click(screen.getByTestId('set-light'));

    expect(screen.getByTestId('current-theme')).toHaveTextContent('light');
    expect(localStorageMock.setItem).toHaveBeenCalledWith('theme', 'light');
  });

  it('should set theme to system', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    fireEvent.click(screen.getByTestId('set-system'));

    expect(screen.getByTestId('current-theme')).toHaveTextContent('system');
    expect(localStorageMock.setItem).toHaveBeenCalledWith('theme', 'system');
  });

  it('should handle system theme preference', () => {
    // Mock matchMedia para simular preferência do sistema
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation(query => ({
        matches: query === '(prefers-color-scheme: dark)',
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });

    localStorageMock.getItem.mockReturnValue('system');

    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId('current-theme')).toHaveTextContent('system');
  });

  it('should handle localStorage setItem errors gracefully', () => {
    localStorageMock.setItem.mockImplementation(() => {
      throw new Error('localStorage setItem error');
    });

    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    expect(() => {
      fireEvent.click(screen.getByTestId('toggle-theme'));
    }).not.toThrow();

    // Deve ainda funcionar mesmo com erro no localStorage
    expect(screen.getByTestId('current-theme')).toHaveTextContent('dark');
  });

  it('should handle multiple theme changes', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    // Múltiplas mudanças de tema
    fireEvent.click(screen.getByTestId('set-dark'));
    fireEvent.click(screen.getByTestId('set-light'));
    fireEvent.click(screen.getByTestId('set-system'));
    fireEvent.click(screen.getByTestId('toggle-theme'));

    expect(localStorageMock.setItem).toHaveBeenCalledTimes(4);
    expect(localStorageMock.setItem).toHaveBeenCalledWith('theme-mode', 'dark');
    expect(localStorageMock.setItem).toHaveBeenCalledWith(
      'theme-mode',
      'light'
    );
    expect(localStorageMock.setItem).toHaveBeenCalledWith(
      'theme-mode',
      'system'
    );
    expect(localStorageMock.setItem).toHaveBeenCalledWith(
      'theme-mode',
      'light'
    );
  });

  it('should apply theme classes to document element', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    // Verificar se a classe light está aplicada inicialmente
    expect(document.documentElement).not.toHaveClass('dark');

    // Alternar para dark
    fireEvent.click(screen.getByTestId('set-dark'));
    expect(document.documentElement).toHaveClass('dark');

    // Alternar para light
    fireEvent.click(screen.getByTestId('set-light'));
    expect(document.documentElement).not.toHaveClass('dark');
  });

  it('should handle theme changes in nested components', () => {
    const NestedComponent = () => {
      const { theme } = useTheme();
      return <span data-testid='nested-theme'>{theme}</span>;
    };

    render(
      <ThemeProvider>
        <div>
          <TestComponent />
          <NestedComponent />
        </div>
      </ThemeProvider>
    );

    expect(screen.getByTestId('current-theme')).toHaveTextContent('light');
    expect(screen.getByTestId('nested-theme')).toHaveTextContent('light');

    fireEvent.click(screen.getByTestId('set-dark'));

    expect(screen.getByTestId('current-theme')).toHaveTextContent('dark');
    expect(screen.getByTestId('nested-theme')).toHaveTextContent('dark');
  });

  it('should handle rapid theme changes', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    // Múltiplos cliques rápidos
    fireEvent.click(screen.getByTestId('toggle-theme'));
    fireEvent.click(screen.getByTestId('toggle-theme'));
    fireEvent.click(screen.getByTestId('toggle-theme'));

    // Deve ter feito múltiplas chamadas para localStorage
    expect(localStorageMock.setItem).toHaveBeenCalledTimes(3);
  });

  it('should maintain theme state across re-renders', () => {
    const { rerender } = render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    fireEvent.click(screen.getByTestId('set-dark'));

    // Re-renderizar o componente
    rerender(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId('current-theme')).toHaveTextContent('dark');
  });
});
