'use client';

import { useTheme } from '@/contexts/ThemeContext';
import React from 'react';

// ===== ÍCONES SVG =====
const SunIcon = ({ className = '' }: { className?: string }) => (
  <svg
    className={className}
    width='20'
    height='20'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <circle cx='12' cy='12' r='4' />
    <path d='M12 2v2' />
    <path d='M12 20v2' />
    <path d='m4.93 4.93 1.41 1.41' />
    <path d='m17.66 17.66 1.41 1.41' />
    <path d='M2 12h2' />
    <path d='M20 12h2' />
    <path d='m6.34 17.66-1.41 1.41' />
    <path d='m19.07 4.93-1.41 1.41' />
  </svg>
);

const MoonIcon = ({ className = '' }: { className?: string }) => (
  <svg
    className={className}
    width='20'
    height='20'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z' />
    <path d='M19 3v4' />
    <path d='M21 5h-4' />
  </svg>
);

// ===== TIPOS =====
interface ThemeSwitcherProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'minimal' | 'outline';
  animated?: boolean;
}

// ===== COMPONENTE PRINCIPAL =====
export default function ThemeSwitcher({
  className = '',
  size = 'md',
  variant = 'default',
  animated = true,
}: ThemeSwitcherProps) {
  const { mode, toggleMode, isDark } = useTheme();

  // ===== CLASSES DINÂMICAS =====
  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg',
  };

  const variantClasses = {
    default:
      'bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white shadow-lg hover:shadow-xl',
    minimal:
      'bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300',
    outline:
      'border-2 border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 bg-transparent text-gray-700 dark:text-gray-300',
  };

  const baseClasses = `
    relative
    inline-flex
    items-center
    justify-center
    rounded-full
    transition-all
    duration-300
    ease-in-out
    focus:outline-none
    focus:ring-2
    focus:ring-offset-2
    focus:ring-cyan-500
    dark:focus:ring-cyan-400
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${animated ? 'transform hover:scale-105 active:scale-95' : ''}
    ${className}
  `.trim();

  // ===== RENDERIZAÇÃO =====
  return (
    <button
      onClick={toggleMode}
      className={baseClasses}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      title={`Switch to ${isDark ? 'light' : 'dark'} theme`}
    >
      {/* Ícone com animação de rotação */}
      <div
        className={`relative ${animated ? 'transition-transform duration-500' : ''}`}
      >
        {isDark ? (
          <SunIcon
            className={`${animated ? 'animate-in slide-in-from-left-2 duration-300' : ''}`}
          />
        ) : (
          <MoonIcon
            className={`${animated ? 'animate-in slide-in-from-right-2 duration-300' : ''}`}
          />
        )}
      </div>

      {/* Label sempre visível - mostra o nome do tema atual */}
      <span className='ml-2 font-medium'>{isDark ? 'Light' : 'Dark'}</span>

      {/* Indicador de carregamento (opcional) */}
      {mode === 'system' && (
        <div className='absolute -top-1 -right-1 w-2 h-2 bg-cyan-500 rounded-full animate-pulse' />
      )}
    </button>
  );
}

// ===== COMPONENTE COMPACTO =====
export function CompactThemeSwitcher({
  className = '',
}: {
  className?: string;
}) {
  const { toggleMode, isDark } = useTheme();

  return (
    <button
      onClick={toggleMode}
      className={`
        flex
        items-center
        gap-2
        px-3
        py-2
        rounded-lg
        bg-gray-100
        dark:bg-gray-800
        hover:bg-gray-200
        dark:hover:bg-gray-700
        text-gray-700
        dark:text-gray-300
        transition-all
        duration-200
        ease-in-out
        focus:outline-none
        focus:ring-2
        focus:ring-cyan-500
        dark:focus:ring-cyan-400
        ${className}
      `.trim()}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
      <span className='text-sm font-medium'>{isDark ? 'Light' : 'Dark'}</span>
    </button>
  );
}

// ===== COMPONENTE COM MENU =====
export function ThemeSwitcherWithMenu({
  className = '',
}: {
  className?: string;
}) {
  const { mode, setMode, isDark } = useTheme();
  const [isOpen, setIsOpen] = React.useState(false);

  const options = [
    { value: 'light' as const, label: 'Light', icon: <SunIcon /> },
    { value: 'dark' as const, label: 'Dark', icon: <MoonIcon /> },
    {
      value: 'system' as const,
      label: 'System',
      icon: <span className='text-xs'>⚙️</span>,
    },
  ];

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='
          flex
          items-center
          gap-2
          px-3
          py-2
          rounded-lg
          bg-gray-100
          dark:bg-gray-800
          hover:bg-gray-200
          dark:hover:bg-gray-700
          text-gray-700
          dark:text-gray-300
          transition-all
          duration-200
          ease-in-out
          focus:outline-none
          focus:ring-2
          focus:ring-cyan-500
          dark:focus:ring-cyan-400
        '
      >
        {isDark ? <SunIcon /> : <MoonIcon />}
        <span className='text-sm font-medium'>Tema</span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M19 9l-7 7-7-7'
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className='
          absolute
          top-full
          right-0
          mt-2
          w-48
          bg-white
          dark:bg-gray-800
          rounded-lg
          shadow-lg
          border
          border-gray-200
          dark:border-gray-700
          py-1
          z-50
        '
        >
          {options.map(option => (
            <button
              key={option.value}
              onClick={() => {
                setMode(option.value);
                setIsOpen(false);
              }}
              className={`
                w-full
                flex
                items-center
                gap-3
                px-4
                py-2
                text-left
                text-sm
                transition-colors
                duration-200
                ease-in-out
                ${
                  mode === option.value
                    ? 'bg-cyan-50 dark:bg-cyan-900/20 text-cyan-700 dark:text-cyan-300'
                    : 'hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                }
              `}
            >
              {option.icon}
              {option.label}
              {mode === option.value && (
                <svg
                  className='w-4 h-4 ml-auto'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    fillRule='evenodd'
                    d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                    clipRule='evenodd'
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
