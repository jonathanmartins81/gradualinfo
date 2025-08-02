'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

// ===== TIPOS =====
type ThemeMode = 'dark';

interface ThemeContextType {
  mode: ThemeMode;
  isDark: boolean;
}

// ===== CONTEXTO =====
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// ===== PROVIDER =====
interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false);
  const mode: ThemeMode = 'dark';

  // ===== CARREGAMENTO INICIAL =====
  useEffect(() => {
    setMounted(true);
  }, []);

  // ===== APLICAÇÃO DO TEMA =====
  useEffect(() => {
    if (!mounted) return;

    const currentTheme = getCurrentTheme();
    const root = document.documentElement;

    // Aplicar classes CSS
    root.classList.remove('light');
    root.classList.add('dark');

    // Aplicar variáveis CSS customizadas
    Object.entries(currentTheme).forEach(([key, value]) => {
      root.style.setProperty(`--${key}`, value);
    });

    // Aplicar atributo data-theme
    root.setAttribute('data-theme', 'dark');
  }, [mounted]);

  // ===== FUNÇÕES DE CONTROLE =====
  const getCurrentTheme = () => {
    return {
      'primary-color': '#4F8CFF',
      'secondary-color': '#A5B4FC',
      'accent-color': '#FFC145',
      'background-color': '#181920',
      'text-color': '#FAFAFA',
      'border-color': '#222327',
      'card-color': '#23242BF6',
    };
  };

  const value: ThemeContextType = {
    mode,
    isDark: true,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

// ===== HOOK =====
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme deve ser usado dentro de um ThemeProvider');
  }
  return context;
}
