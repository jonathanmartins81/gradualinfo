import { InputProps } from './types';

// Função utilitária para combinar classes CSS
const cn = (...classes: (string | boolean | undefined | null)[]) => {
  return classes.filter(Boolean).join(' ');
};

// Estilos base do input
const inputBase =
  'block w-full border border-gray-300 dark:border-gray-600 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 disabled:opacity-50 disabled:cursor-not-allowed bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100';

// Variantes de input
const inputVariants = {
  default: 'border-gray-300 dark:border-gray-600',
  filled: 'bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600',
  outlined: 'border-2 border-gray-300 dark:border-gray-600',
};

// Tamanhos de input
const inputSizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

// Estilos para ícones
const inputWithLeftIcon = 'pl-10';
const inputWithRightIcon = 'pr-10';
const inputWithBothIcons = 'pl-10 pr-10';

// Estilos para estados
const inputError =
  'border-red-500 dark:border-red-400 focus:ring-red-500 focus:border-red-500';
const inputLoading = 'cursor-wait';

/**
 * Função otimizada para gerar estilos do input
 * @param props - Propriedades do input
 * @returns String com classes CSS combinadas
 */
export const getInputStyles = ({
  variant = 'default',
  size = 'md',
  error = false,
  loading = false,
  leftIcon = false,
  rightIcon = false,
}: Pick<InputProps, 'variant' | 'size' | 'error' | 'loading'> & {
  leftIcon?: boolean;
  rightIcon?: boolean;
}) => {
  const hasLeftIcon = !!leftIcon;
  const hasRightIcon = !!rightIcon;
  const hasError = !!error;

  return cn(
    inputBase,
    inputVariants[variant],
    inputSizes[size],
    hasLeftIcon && inputWithLeftIcon,
    hasRightIcon && inputWithRightIcon,
    hasLeftIcon && hasRightIcon && inputWithBothIcons,
    hasError && inputError,
    loading && inputLoading
  );
};

// Exportações para compatibilidade
export {
  inputBase,
  inputError,
  inputLoading,
  inputSizes,
  inputVariants,
  inputWithBothIcons,
  inputWithLeftIcon,
  inputWithRightIcon,
};
