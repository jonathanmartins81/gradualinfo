import '@testing-library/jest-dom/vitest';
import React from 'react';
import { vi } from 'vitest';

// Configurações globais para testes
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Interfaces para tipagem dos mocks
interface ImageProps {
  src: string;
  alt: string;
  priority?: boolean;
  [key: string]: unknown;
}

interface LinkProps {
  children: React.ReactNode;
  href: string;
  [key: string]: unknown;
}

// Mock do Next.js Image component
vi.mock('next/image', () => ({
  default: ({ src, alt, ...props }: ImageProps) => {
    return React.createElement('img', { src, alt, ...props });
  },
}));

// Mock do Next.js Link component
vi.mock('next/link', () => ({
  default: ({ children, href, ...props }: LinkProps) => {
    return React.createElement('a', { href, ...props }, children);
  },
}));

// Mock do Next.js useRouter
vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
    back: vi.fn(),
    forward: vi.fn(),
    refresh: vi.fn(),
  }),
  useSearchParams: () => new URLSearchParams(),
  usePathname: () => '/',
}));
