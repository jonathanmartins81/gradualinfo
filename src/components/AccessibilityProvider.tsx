'use client';

import { createContext, useContext, useEffect, useState } from 'react';

interface AccessibilityContextType {
  isKeyboardNavigation: boolean;
  isHighContrast: boolean;
  isReducedMotion: boolean;
  fontSize: 'small' | 'medium' | 'large';
  setFontSize: (size: 'small' | 'medium' | 'large') => void;
  toggleHighContrast: () => void;
  toggleReducedMotion: () => void;
}

const AccessibilityContext = createContext<
  AccessibilityContextType | undefined
>(undefined);

interface AccessibilityProviderProps {
  children: React.ReactNode;
}

/**
 * Provider de acessibilidade
 *
 * Gerencia configurações de acessibilidade como navegação por teclado,
 * contraste alto, movimento reduzido e tamanho de fonte.
 */
export function AccessibilityProvider({
  children,
}: AccessibilityProviderProps) {
  const [isKeyboardNavigation, setIsKeyboardNavigation] = useState(false);
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [fontSize, setFontSize] = useState<'small' | 'medium' | 'large'>(
    'medium'
  );

  // Detectar navegação por teclado
  useEffect(() => {
    const handleKeyDown = () => {
      setIsKeyboardNavigation(true);
    };

    const handleMouseDown = () => {
      setIsKeyboardNavigation(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  // Detectar preferências do usuário
  useEffect(() => {
    // Verificar preferência de movimento reduzido
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    setIsReducedMotion(prefersReducedMotion);

    // Verificar preferência de contraste alto
    const prefersHighContrast = window.matchMedia(
      '(prefers-contrast: high)'
    ).matches;
    setIsHighContrast(prefersHighContrast);

    // Aplicar classes CSS baseadas nas preferências
    if (prefersReducedMotion) {
      document.documentElement.classList.add('reduced-motion');
    }

    if (prefersHighContrast) {
      document.documentElement.classList.add('high-contrast');
    }
  }, []);

  // Aplicar tamanho de fonte
  useEffect(() => {
    const fontSizeClasses = {
      small: 'text-sm',
      medium: 'text-base',
      large: 'text-lg',
    };

    // Remover classes anteriores
    document.documentElement.classList.remove(
      'text-sm',
      'text-base',
      'text-lg'
    );

    // Adicionar nova classe
    document.documentElement.classList.add(fontSizeClasses[fontSize]);
  }, [fontSize]);

  const toggleHighContrast = () => {
    const newValue = !isHighContrast;
    setIsHighContrast(newValue);

    if (newValue) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  };

  const toggleReducedMotion = () => {
    const newValue = !isReducedMotion;
    setIsReducedMotion(newValue);

    if (newValue) {
      document.documentElement.classList.add('reduced-motion');
    } else {
      document.documentElement.classList.remove('reduced-motion');
    }
  };

  const value: AccessibilityContextType = {
    isKeyboardNavigation,
    isHighContrast,
    isReducedMotion,
    fontSize,
    setFontSize,
    toggleHighContrast,
    toggleReducedMotion,
  };

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
    </AccessibilityContext.Provider>
  );
}

/**
 * Hook para usar o contexto de acessibilidade
 */
export function useAccessibility() {
  const context = useContext(AccessibilityContext);

  if (context === undefined) {
    throw new Error(
      'useAccessibility must be used within an AccessibilityProvider'
    );
  }

  return context;
}

/**
 * Componente para adicionar focus visible
 */
export function FocusVisible() {
  const { isKeyboardNavigation } = useAccessibility();

  useEffect(() => {
    if (isKeyboardNavigation) {
      document.documentElement.classList.add('focus-visible');
    } else {
      document.documentElement.classList.remove('focus-visible');
    }
  }, [isKeyboardNavigation]);

  return null;
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
