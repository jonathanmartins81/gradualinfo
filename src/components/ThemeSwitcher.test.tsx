import { fireEvent, render, screen } from '@testing-library/react';
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

  it('should render theme toggle button', () => {
    render(<ThemeSwitcher />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should have correct aria-label', () => {
    render(<ThemeSwitcher />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label');
  });

  it('should toggle theme when clicked', () => {
    render(<ThemeSwitcher />);
    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(localStorageMock.setItem).toHaveBeenCalledWith('theme', 'dark');
  });

  it('should initialize with light theme by default', () => {
    localStorageMock.getItem.mockReturnValue(null);
    render(<ThemeSwitcher />);

    // Verificar se o tema padrão é light
    expect(document.documentElement).not.toHaveClass('dark');
  });

  it('should initialize with dark theme from localStorage', () => {
    localStorageMock.getItem.mockReturnValue('dark');
    render(<ThemeSwitcher />);

    // Verificar se o tema dark é aplicado
    expect(document.documentElement).toHaveClass('dark');
  });

  it('should handle theme persistence', () => {
    render(<ThemeSwitcher />);
    const button = screen.getByRole('button');

    // Clicar para alternar para dark
    fireEvent.click(button);
    expect(localStorageMock.setItem).toHaveBeenCalledWith('theme', 'dark');

    // Clicar novamente para alternar para light
    fireEvent.click(button);
    expect(localStorageMock.setItem).toHaveBeenCalledWith('theme', 'light');
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
    render(<ThemeSwitcher />);

    // Verificar se o tema do sistema é aplicado
    expect(document.documentElement).toHaveClass('dark');
  });

  it('should handle invalid theme values gracefully', () => {
    localStorageMock.getItem.mockReturnValue('invalid-theme');
    expect(() => {
      render(<ThemeSwitcher />);
    }).not.toThrow();
  });

  it('should handle localStorage errors gracefully', () => {
    localStorageMock.getItem.mockImplementation(() => {
      throw new Error('localStorage error');
    });

    expect(() => {
      render(<ThemeSwitcher />);
    }).not.toThrow();
  });

  it('should handle localStorage setItem errors gracefully', () => {
    localStorageMock.setItem.mockImplementation(() => {
      throw new Error('localStorage setItem error');
    });

    render(<ThemeSwitcher />);
    const button = screen.getByRole('button');

    expect(() => {
      fireEvent.click(button);
    }).not.toThrow();
  });

  it('should have proper keyboard accessibility', () => {
    render(<ThemeSwitcher />);
    const button = screen.getByRole('button');

    // Verificar se o botão pode ser focado
    button.focus();
    expect(button).toHaveFocus();

    // Verificar se pode ser ativado com Enter
    fireEvent.keyDown(button, { key: 'Enter', code: 'Enter' });
    expect(localStorageMock.setItem).toHaveBeenCalled();
  });

  it('should have proper mouse accessibility', () => {
    render(<ThemeSwitcher />);
    const button = screen.getByRole('button');

    // Verificar se pode ser ativado com clique
    fireEvent.mouseDown(button);
    fireEvent.mouseUp(button);
    fireEvent.click(button);

    expect(localStorageMock.setItem).toHaveBeenCalled();
  });

  it('should handle multiple rapid clicks', () => {
    render(<ThemeSwitcher />);
    const button = screen.getByRole('button');

    // Múltiplos cliques rápidos
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);

    // Verificar se localStorage foi chamado múltiplas vezes
    expect(localStorageMock.setItem).toHaveBeenCalledTimes(3);
  });

  it('should maintain theme state across re-renders', () => {
    const { rerender } = render(<ThemeSwitcher />);
    const button = screen.getByRole('button');

    // Alternar para dark
    fireEvent.click(button);

    // Re-renderizar o componente
    rerender(<ThemeSwitcher />);

    // Verificar se o estado foi mantido
    expect(localStorageMock.setItem).toHaveBeenCalledWith('theme', 'dark');
  });
});
