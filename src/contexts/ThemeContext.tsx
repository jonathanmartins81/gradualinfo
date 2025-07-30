'use client';

import { darkTheme, lightTheme, ThemeColors, ThemeMode } from '@/styles/theme';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

// ===== TIPOS =====
interface ThemeContextType {
  mode: ThemeMode;
  theme: ThemeColors;
  isDark: boolean;
  toggleTheme: () => void;
  setMode: (mode: ThemeMode) => void;
}

// ===== CONTEXTO =====
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// ===== PROVIDER =====
interface ThemeProviderProps {
  children: ReactNode;
  defaultMode?: ThemeMode;
}

export function ThemeProvider({
  children,
  defaultMode = 'system'
}: ThemeProviderProps) {
  const [mode, setMode] = useState<ThemeMode>(defaultMode);
  const [mounted, setMounted] = useState(false);

  // ===== DETECÇÃO DE TEMA DO SISTEMA =====
  const getSystemTheme = (): 'light' | 'dark' => {
    if (typeof window === 'undefined') return 'light';
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  // ===== OBTENÇÃO DO TEMA ATUAL =====
  const getCurrentTheme = (): ThemeColors => {
    if (mode === 'system') {
      return getSystemTheme() === 'dark' ? darkTheme : lightTheme;
    }
    return mode === 'dark' ? darkTheme : lightTheme;
  };

  // ===== PERSISTÊNCIA NO LOCAL STORAGE =====
  const saveTheme = (newMode: ThemeMode) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme-mode', newMode);
    }
  };

  const loadTheme = (): ThemeMode => {
    if (typeof window === 'undefined') return defaultMode;

    const saved = localStorage.getItem('theme-mode') as ThemeMode;
    if (saved && ['light', 'dark', 'system'].includes(saved)) {
      return saved;
    }
    return defaultMode;
  };

  // ===== INICIALIZAÇÃO =====
  useEffect(() => {
    const savedMode = loadTheme();
    setMode(savedMode);
    setMounted(true);
  }, []);

  // ===== SALVAR MUDANÇAS =====
  useEffect(() => {
    if (mounted) {
      saveTheme(mode);
    }
  }, [mode, mounted]);

  // ===== LISTENER PARA MUDANÇAS DO SISTEMA =====
  useEffect(() => {
    if (mode !== 'system') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      // Força re-render quando o tema do sistema muda
      setMode('system');
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [mode]);

  // ===== APLICAR TEMA NO DOCUMENT =====
  useEffect(() => {
    if (!mounted) return;

    const currentTheme = getCurrentTheme();
    const root = document.documentElement;

    // Aplicar classes CSS
    root.classList.remove('light', 'dark');
    root.classList.add(getSystemTheme());

    // Aplicar variáveis CSS customizadas
    Object.entries(currentTheme).forEach(([key, value]) => {
      root.style.setProperty(`--${key}`, value);
    });

    // Aplicar atributo data-theme
    root.setAttribute('data-theme', getSystemTheme());
  }, [mode, mounted]);

  // ===== FUNÇÕES DE CONTROLE =====
  const toggleTheme = () => {
    setMode(current => {
      if (current === 'system') {
        return getSystemTheme() === 'dark' ? 'light' : 'dark';
      }
      return current === 'dark' ? 'light' : 'dark';
    });
  };

  const handleSetMode = (newMode: ThemeMode) => {
    setMode(newMode);
  };

  // ===== VALORES DO CONTEXTO =====
  const contextValue: ThemeContextType = {
    mode,
    theme: getCurrentTheme(),
    isDark: getCurrentTheme() === darkTheme,
    toggleTheme,
    setMode: handleSetMode,
  };

  // ===== PREVENIR HYDRATION MISMATCH =====
  if (!mounted) {
    return (
      <ThemeContext.Provider value={contextValue}>
        <div style={{ visibility: 'hidden' }}>{children}</div>
      </ThemeContext.Provider>
    );
  }

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

// ===== HOOK PERSONALIZADO =====
export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useTheme deve ser usado dentro de um ThemeProvider');
  }

  return context;
}

// ===== HOOK PARA DETECTAR MUDANÇAS DO SISTEMA =====
export function useSystemTheme() {
  const [systemTheme, setSystemTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const updateTheme = () => {
      setSystemTheme(mediaQuery.matches ? 'dark' : 'light');
    };

    updateTheme();
    mediaQuery.addEventListener('change', updateTheme);

    return () => mediaQuery.removeEventListener('change', updateTheme);
  }, []);

  return systemTheme;
}

export default ThemeContext;
