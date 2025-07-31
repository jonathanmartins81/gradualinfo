import { InputHTMLAttributes, ReactNode } from 'react';

export type InputVariant = 'default' | 'outlined' | 'filled' | 'ghost';
export type InputSize = 'sm' | 'md' | 'lg';
export type InputType =
  | 'text'
  | 'email'
  | 'password'
  | 'number'
  | 'tel'
  | 'url'
  | 'search';

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  variant?: InputVariant;
  size?: InputSize;
  type?: InputType;
  error?: string;
  helperText?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
  required?: boolean;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  containerClassName?: string;
}
