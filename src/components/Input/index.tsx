'use client';

import React from 'react';
import { getInputStyles } from './styles';
import { InputProps } from './types';

const Input = React.memo<InputProps>(
  ({
    label,
    error,
    helperText,
    leftIcon,
    rightIcon,
    required = false,
    disabled = false,
    loading = false,
    fullWidth = false,
    variant = 'default',
    size = 'md',
    type = 'text',
    className = '',
    containerClassName = '',
    ...props
  }) => {
    const inputStyles = getInputStyles({
      variant,
      size,
      error,
      disabled,
      loading,
      fullWidth,
    });
    const combinedInputClassName = `${inputStyles} ${className}`.trim();
    const combinedContainerClassName =
      `relative ${fullWidth ? 'w-full' : ''} ${containerClassName}`.trim();

    return (
      <div className={combinedContainerClassName}>
        {label && (
          <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'>
            {label}
            {required && <span className='text-red-500 ml-1'>*</span>}
          </label>
        )}

        <div className='relative'>
          {leftIcon && (
            <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
              <span className='text-gray-400'>{leftIcon}</span>
            </div>
          )}

          <input
            type={type}
            className={combinedInputClassName}
            disabled={disabled || loading}
            required={required}
            {...props}
          />

          {rightIcon && (
            <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
              <span className='text-gray-400'>{rightIcon}</span>
            </div>
          )}

          {loading && (
            <div className='absolute inset-y-0 right-0 pr-3 flex items-center'>
              <svg
                className='animate-spin h-4 w-4 text-gray-400'
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
            </div>
          )}
        </div>

        {error && (
          <p className='mt-1 text-sm text-red-600 dark:text-red-400'>{error}</p>
        )}

        {helperText && !error && (
          <p className='mt-1 text-sm text-gray-500 dark:text-gray-400'>
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
