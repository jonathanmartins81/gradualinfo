import { ReactNode } from 'react';

export type FooterVariant = 'default' | 'minimal' | 'dark' | 'branded';
export type FooterSize = 'sm' | 'md' | 'lg';

export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface FooterProps {
  variant?: FooterVariant;
  size?: FooterSize;
  className?: string;
  children?: ReactNode;
  copyright?: string;
  sections?: FooterSection[];
  socialLinks?: FooterLink[];
  logo?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  showBackToTop?: boolean;
}
