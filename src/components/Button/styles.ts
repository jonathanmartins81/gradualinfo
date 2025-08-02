import { ButtonProps } from './types';

// Função utilitária para combinar classes CSS
const cn = (...classes: (string | boolean | undefined | null)[]) => {
  return classes.filter(Boolean).join(' ');
};

// Estilos base do botão
const buttonBase =
  'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

// Variantes de botão
const buttonVariants = {
  primary:
    'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500 shadow-soft hover:shadow-medium',
  secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
  danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
  ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
  outline:
    'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 focus:ring-primary-500',
};

// Tamanhos de botão
const buttonSizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

// Estilos adicionais
const buttonFullWidth = 'w-full';
const buttonLoading = 'cursor-wait';

/**
 * Função otimizada para gerar estilos do botão
 * @param props - Propriedades do botão
 * @returns String com classes CSS combinadas
 */
export const getButtonStyles = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
}: Pick<ButtonProps, 'variant' | 'size' | 'fullWidth' | 'loading'>) => {
  return cn(
    buttonBase,
    buttonVariants[variant],
    buttonSizes[size],
    fullWidth && buttonFullWidth,
    loading && buttonLoading
  );
};

// Exportações para compatibilidade
export {
  buttonBase,
  buttonFullWidth,
  buttonLoading,
  buttonSizes,
  buttonVariants,
};
