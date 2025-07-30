'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

// ===== TIPOS =====
interface AccessibilityState {
  highContrast: boolean;
  fontSize: 'small' | 'medium' | 'large';
  reducedMotion: boolean;
}

interface AccessibilityContextType extends AccessibilityState {
  setHighContrast: (enabled: boolean) => void;
  setFontSize: (size: 'small' | 'medium' | 'large') => void;
  setReducedMotion: (enabled: boolean) => void;
  resetSettings: () => void;
}

// ===== CONTEXTO =====
const AccessibilityContext = createContext<
  AccessibilityContextType | undefined
>(undefined);

// ===== PROVIDER =====
export function AccessibilityProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [highContrast, setHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState<'small' | 'medium' | 'large'>(
    'medium'
  );
  const [reducedMotion, setReducedMotion] = useState(false);
  const [mounted, setMounted] = useState(false);

  // ===== CARREGAMENTO INICIAL =====
  useEffect(() => {
    setMounted(true);

    // Carregar configurações do localStorage apenas no cliente
    if (typeof window !== 'undefined') {
      const savedHighContrast = window.localStorage.getItem(
        'accessibility-highContrast'
      );
      const savedFontSize = window.localStorage.getItem(
        'accessibility-fontSize'
      );
      const savedReducedMotion = window.localStorage.getItem(
        'accessibility-reducedMotion'
      );

      if (savedHighContrast) setHighContrast(JSON.parse(savedHighContrast));
      if (savedFontSize)
        setFontSize(savedFontSize as 'small' | 'medium' | 'large');
      if (savedReducedMotion) setReducedMotion(JSON.parse(savedReducedMotion));
    }
  }, []);

  // ===== PERSISTÊNCIA =====
  useEffect(() => {
    if (!mounted || typeof window === 'undefined') return;

    window.localStorage.setItem(
      'accessibility-highContrast',
      JSON.stringify(highContrast)
    );
  }, [highContrast, mounted]);

  useEffect(() => {
    if (!mounted || typeof window === 'undefined') return;

    window.localStorage.setItem('accessibility-fontSize', fontSize);
  }, [fontSize, mounted]);

  useEffect(() => {
    if (!mounted || typeof window === 'undefined') return;

    window.localStorage.setItem(
      'accessibility-reducedMotion',
      JSON.stringify(reducedMotion)
    );
  }, [reducedMotion, mounted]);

  // ===== APLICAÇÃO DE ESTILOS =====
  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;

    // Aplicar alto contraste
    if (highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Aplicar tamanho da fonte
    root.classList.remove(
      'font-size-small',
      'font-size-medium',
      'font-size-large'
    );
    root.classList.add(`font-size-${fontSize}`);

    // Aplicar redução de movimento
    if (reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
  }, [highContrast, fontSize, reducedMotion, mounted]);

  // ===== FUNÇÕES DE CONTROLE =====
  const resetSettings = () => {
    setHighContrast(false);
    setFontSize('medium');
    setReducedMotion(false);
  };

  // ===== CONTROLES DE ACESSIBILIDADE =====
  const AccessibilityControls = () => {
    if (!mounted) return null;

    return (
      <div className='fixed bottom-4 right-4 z-50 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 p-4 min-w-[280px]'>
        <h3 className='text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3'>
          Configurações de Acessibilidade
        </h3>

        <div className='space-y-3'>
          {/* Alto Contraste */}
          <div className='flex items-center justify-between'>
            <label className='text-sm text-gray-700 dark:text-gray-300'>
              Alto Contraste
            </label>
            <button
              onClick={() => setHighContrast(!highContrast)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                highContrast ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-600'
              }`}
              aria-label={`${highContrast ? 'Desativar' : 'Ativar'} alto contraste`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  highContrast ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          {/* Tamanho da Fonte */}
          <div>
            <label className='text-sm text-gray-700 dark:text-gray-300 mb-2 block'>
              Tamanho da Fonte
            </label>
            <div className='flex gap-2'>
              {(['small', 'medium', 'large'] as const).map(size => (
                <button
                  key={size}
                  onClick={() => setFontSize(size)}
                  className={`px-3 py-1 text-xs rounded-md transition-colors ${
                    fontSize === size
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {size === 'small' && 'A'}
                  {size === 'medium' && 'A'}
                  {size === 'large' && 'A'}
                </button>
              ))}
            </div>
          </div>

          {/* Redução de Movimento */}
          <div className='flex items-center justify-between'>
            <label className='text-sm text-gray-700 dark:text-gray-300'>
              Reduzir Movimento
            </label>
            <button
              onClick={() => setReducedMotion(!reducedMotion)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                reducedMotion ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-600'
              }`}
              aria-label={`${reducedMotion ? 'Desativar' : 'Ativar'} redução de movimento`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  reducedMotion ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          {/* Reset */}
          <button
            onClick={resetSettings}
            className='w-full px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors'
          >
            Restaurar Padrões
          </button>
        </div>
      </div>
    );
  };

  const value: AccessibilityContextType = {
    highContrast,
    fontSize,
    reducedMotion,
    setHighContrast,
    setFontSize,
    setReducedMotion,
    resetSettings,
  };

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
      <AccessibilityControls />
    </AccessibilityContext.Provider>
  );
}

// ===== HOOK =====
export function useAccessibility() {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error(
      'useAccessibility deve ser usado dentro de um AccessibilityProvider'
    );
  }
  return context;
}

/**
 * Componente para skip link
 */
export function SkipLink() {
  return (
    <a
      href='#main-content'
      className='sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50'
    >
      Pular para o conteúdo principal
    </a>
  );
}

/**
 * Componente para anunciar mudanças para leitores de tela
 */
export function ScreenReaderAnnouncement({ message }: { message: string }) {
  const [announcement, setAnnouncement] = useState('');

  useEffect(() => {
    if (message) {
      setAnnouncement(message);

      // Limpar após 1 segundo
      const timer = window.setTimeout(() => {
        setAnnouncement('');
      }, 1000);

      return () => window.clearTimeout(timer);
    }
  }, [message]);

  return (
    <div aria-live='polite' aria-atomic='true' className='sr-only'>
      {announcement}
    </div>
  );
}
