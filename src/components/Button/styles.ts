import { ButtonSize, ButtonVariant } from './types';

// Variantes do botão baseadas nos tokens do theme.ts
export const buttonVariants: Record<ButtonVariant, string> = {
  primary:
    'bg-cyan-600 hover:bg-cyan-700 text-white border-cyan-600 hover:border-cyan-700 shadow-md hover:shadow-lg',
  secondary:
    'bg-indigo-600 hover:bg-indigo-700 text-white border-indigo-600 hover:border-indigo-700 shadow-md hover:shadow-lg',
  danger:
    'bg-red-500 hover:bg-red-600 text-white border-red-500 hover:border-red-600 shadow-md hover:shadow-lg',
  ghost:
    'bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 border-transparent',
  outline:
    'bg-transparent border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white',
};

// Tamanhos do botão
export const buttonSizes: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm rounded-md',
  md: 'px-4 py-2 text-base rounded-lg',
  lg: 'px-6 py-3 text-lg rounded-xl',
};

// Classes base do botão
export const buttonBase =
  'inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

// Classes para loading
export const buttonLoading = 'animate-pulse cursor-wait';

// Classes para full width
export const buttonFullWidth = 'w-full';

// Classes para ícones
export const buttonIconLeft = 'mr-2';
export const buttonIconRight = 'ml-2';
