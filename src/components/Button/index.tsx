'use client';

import {
  buttonBase,
  buttonFullWidth,
  buttonIconLeft,
  buttonIconRight,
  buttonLoading,
  buttonSizes,
  buttonVariants,
} from './styles';
import { ButtonProps } from './types';
// Função utilitária para combinar classes CSS
const cn = (...classes: (string | boolean | undefined | null)[]) => {
  return classes.filter(Boolean).join(' ');
};

/**
 * Componente Button reutilizável e responsivo
 *
 * @example
 * ```tsx
 * <Button variant="primary" size="md">
 *   Clique aqui
 * </Button>
 *
 * <Button variant="outline" icon={<Icon />} iconPosition="left">
 *   Com ícone
 * </Button>
 * ```
 */
const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  fullWidth = false,
  icon,
  iconPosition = 'left',
  className,
  disabled,
  ...rest
}: ButtonProps) => {
  const isDisabled = disabled || loading;

  return (
    <button
      className={cn(
        buttonBase,
        buttonVariants[variant],
        buttonSizes[size],
        fullWidth && buttonFullWidth,
        loading && buttonLoading,
        className
      )}
      disabled={isDisabled}
      {...rest}
    >
      {loading && (
        <svg
          className='animate-spin -ml-1 mr-2 h-4 w-4'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
        >
          <circle
            className='opacity-25'
            cx='12'
            cy='12'
            r='10'
            stroke='currentColor'
            strokeWidth='4'
          />
          <path
            className='opacity-75'
            fill='currentColor'
            d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
          />
        </svg>
      )}

      {!loading && icon && iconPosition === 'left' && (
        <span className={buttonIconLeft}>{icon}</span>
      )}

      {children}

      {!loading && icon && iconPosition === 'right' && (
        <span className={buttonIconRight}>{icon}</span>
      )}
    </button>
  );
};

export default Button;
