import { InputSize, InputVariant } from './types';

// Variantes do input
export const inputVariants: Record<InputVariant, string> = {
  default:
    'bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:border-cyan-500 focus:ring-cyan-500',
  outlined:
    'bg-transparent border-2 border-gray-300 dark:border-gray-600 focus:border-cyan-500 focus:ring-cyan-500',
  filled:
    'bg-gray-50 dark:bg-gray-700 border-0 focus:ring-2 focus:ring-cyan-500',
  ghost: 'bg-transparent border-0 focus:ring-2 focus:ring-cyan-500',
};

// Tamanhos do input
export const inputSizes: Record<InputSize, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

// Classes base do input
export const inputBase =
  'w-full rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

// Classes para o container
export const inputContainer = 'relative';

export const inputContainerFullWidth = 'w-full';

// Classes para o label
export const inputLabel =
  'block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1';

export const inputLabelRequired = 'text-red-500';

// Classes para o input com ícones
export const inputWithLeftIcon = 'pl-10';

export const inputWithRightIcon = 'pr-10';

export const inputWithBothIcons = 'px-10';

// Classes para ícones
export const inputLeftIcon =
  'absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400';

export const inputRightIcon =
  'absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400';

// Classes para texto de ajuda
export const inputHelperText = 'mt-1 text-sm text-gray-600 dark:text-gray-400';

// Classes para erro
export const inputError = 'mt-1 text-sm text-red-600 dark:text-red-400';

export const inputErrorBorder =
  'border-red-500 focus:border-red-500 focus:ring-red-500';

// Classes para loading
export const inputLoading = 'animate-pulse';
