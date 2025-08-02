'use client';

import { useTheme } from '@/contexts/ThemeContext';
import React from 'react';

// ===== ÍCONE SVG =====
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
  // ===== CLASSES DINÂMICAS =====
  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg',
  };

  const variantClasses = {
    default:
      'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg',
    minimal: 'bg-transparent text-gray-300',
    outline: 'border-2 border-gray-600 bg-transparent text-gray-300',
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
    ${animated ? 'transform hover:scale-105' : ''}
    ${className}
  `.trim();

  // ===== RENDERIZAÇÃO =====
  return (
    <div
      className={baseClasses}
      aria-label='Dark theme active'
      title='Dark theme active'
      data-testid='theme-switcher'
    >
      {/* Ícone com animação de rotação */}
      <div
        className={`relative ${animated ? 'transition-transform duration-500' : ''}`}
      >
        <MoonIcon
          className={`${animated ? 'animate-in slide-in-from-right-2 duration-300' : ''}`}
        />
      </div>

      {/* Label sempre visível - mostra que o tema dark está ativo */}
      <span className='ml-2 font-medium'>Dark</span>
    </div>
  );
}

// ===== COMPONENTE COMPACTO =====
export function CompactThemeSwitcher({
  className = '',
}: {
  className?: string;
}) {
  return (
    <div
      className={`
        flex
        items-center
        gap-2
        px-3
        py-2
        rounded-lg
        bg-gray-800
        text-gray-300
        transition-all
        duration-200
        ease-in-out
        ${className}
      `.trim()}
      aria-label='Dark theme active'
    >
      <MoonIcon />
      <span className='text-sm font-medium'>Dark</span>
    </div>
  );
}

// ===== COMPONENTE COM MENU =====
export function ThemeSwitcherWithMenu({
  className = '',
}: {
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <div
        className='
          flex
          items-center
          gap-2
          px-3
          py-2
          rounded-lg
          bg-gray-800
          text-gray-300
          transition-all
          duration-200
          ease-in-out
        '
      >
        <MoonIcon />
        <span className='text-sm font-medium'>Tema Dark</span>
      </div>
    </div>
  );
}
