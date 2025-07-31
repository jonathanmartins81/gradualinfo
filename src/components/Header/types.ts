import { ReactNode } from 'react';

export type HeaderVariant = 'default' | 'minimal' | 'hero' | 'dashboard';
export type HeaderSize = 'sm' | 'md' | 'lg';

export interface HeaderProps {
  title?: string;
  subtitle?: string;
  variant?: HeaderVariant;
  size?: HeaderSize;
  className?: string;
  children?: ReactNode;
  actions?: ReactNode;
  breadcrumbs?: ReactNode;
  logo?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
}
