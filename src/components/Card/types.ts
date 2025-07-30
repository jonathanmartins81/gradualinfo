import { ReactNode } from 'react';

export type CardVariant = 'default' | 'elevated' | 'outlined' | 'filled';
export type CardSize = 'sm' | 'md' | 'lg';

export interface CardProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  variant?: CardVariant;
  size?: CardSize;
  className?: string;
  headerActions?: ReactNode;
  footer?: ReactNode;
  image?: {
    src: string;
    alt: string;
    height?: number;
    width?: number;
  };
  onClick?: () => void;
  hoverable?: boolean;
}
