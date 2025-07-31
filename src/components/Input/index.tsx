'use client';

import {
  inputBase,
  inputContainer,
  inputContainerFullWidth,
  inputError,
  inputErrorBorder,
  inputHelperText,
  inputLabel,
  inputLabelRequired,
  inputLeftIcon,
  inputLoading,
  inputRightIcon,
  inputSizes,
  inputVariants,
  inputWithBothIcons,
  inputWithLeftIcon,
  inputWithRightIcon,
} from './styles';
import { InputProps } from './types';

// Função utilitária para combinar classes CSS
const cn = (...classes: (string | boolean | undefined | null)[]) => {
  return classes.filter(Boolean).join(' ');
};

/**
 * Componente Input reutilizável e responsivo
 *
 * @example
 * ```tsx
 * <Input
 *   label="Email"
 *   type="email"
 *   placeholder="seu@email.com"
 *   required
 * />
 *
 * <Input
 *   label="Senha"
 *   type="password"
 *   leftIcon={<LockIcon />}
 *   error="Senha é obrigatória"
 * />
 * ```
 */
const Input = ({
  label,
  variant = 'default',
  size = 'md',
  type = 'text',
  error,
  helperText,
  leftIcon,
  rightIcon,
  fullWidth = false,
  required = false,
  disabled = false,
  loading = false,
  className,
  containerClassName,
  ...rest
}: InputProps) => {
  const hasLeftIcon = !!leftIcon;
  const hasRightIcon = !!rightIcon;
  const hasError = !!error;

  const getInputClasses = () => {
    const baseClasses = [
      inputBase,
      inputVariants[variant],
      inputSizes[size],
    ];

    // Adicionar classes para ícones
    if (hasLeftIcon && hasRightIcon) {
      baseClasses.push(inputWithBothIcons);
    } else if (hasLeftIcon) {
      baseClasses.push(inputWithLeftIcon);
    } else if (hasRightIcon) {
      baseClasses.push(inputWithRightIcon);
    }

    // Adicionar classes para erro
    if (hasError) {
      baseClasses.push(inputErrorBorder);
    }

    // Adicionar classes para loading
    if (loading) {
      baseClasses.push(inputLoading);
    }

    return cn(...baseClasses, className);
  };

  const getContainerClasses = () => {
    return cn(
      inputContainer,
      fullWidth && inputContainerFullWidth,
      containerClassName
    );
  };

  return (
    <div className={getContainerClasses()}>
      {label && (
        <label className={cn(inputLabel, required && inputLabelRequired)}>
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <div className="relative">
        {leftIcon && (
          <div className={inputLeftIcon}>
            {leftIcon}
          </div>
        )}

        <input
          type={type}
          disabled={disabled || loading}
          className={getInputClasses()}
          {...rest}
        />

        {rightIcon && (
          <div className={inputRightIcon}>
            {rightIcon}
          </div>
        )}
      </div>

      {error && <p className={inputError}>{error}</p>}
      {helperText && !error && <p className={inputHelperText}>{helperText}</p>}
    </div>
  );
};

export default Input;
