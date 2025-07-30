/**
 * Test Utilities - Aqua9 Boilerplate v2
 *
 * Utilitários avançados para facilitar testes unitários e de integração,
 * incluindo mocks, factories, helpers e configurações comuns.
 */

import { render, RenderOptions } from '@testing-library/react';
import { ReactElement } from 'react';
import { vi } from 'vitest';

// ===== TIPOS =====
interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {
  theme?: 'light' | 'dark' | 'system';
  locale?: string;
}

// ===== RENDER CUSTOMIZADO =====
function customRender(ui: ReactElement, options: CustomRenderOptions = {}) {
  return render(ui, options);
}

// ===== RENDER COM TEMA =====
export function renderWithTheme(
  ui: ReactElement,
  theme: 'light' | 'dark' | 'system' = 'dark'
) {
  return customRender(ui, { theme });
}

// ===== RENDER COM LOCALE =====
export function renderWithLocale(ui: ReactElement, locale: string = 'pt-BR') {
  return customRender(ui, { locale });
}

// ===== RENDER COMPLETO =====
export function renderWithProviders(
  ui: ReactElement,
  options: CustomRenderOptions = {}
) {
  return customRender(ui, options);
}

// ===== RE-EXPORT =====
export * from '@testing-library/react';
export { customRender as render };

// ===== MOCKS =====

// Mock do Next.js Router
export const mockRouter = {
  push: vi.fn(),
  replace: vi.fn(),
  back: vi.fn(),
  forward: vi.fn(),
  refresh: vi.fn(),
  prefetch: vi.fn(),
  pathname: '/',
  query: {},
  asPath: '/',
  events: {
    on: vi.fn(),
    off: vi.fn(),
    emit: vi.fn(),
  },
};

// ===== FACTORIES =====

// Factory para usuários
export const createMockUser = (overrides = {}) => ({
  id: '1',
  name: 'João Silva',
  email: 'joao@example.com',
  role: 'user',
  avatar: '/avatar.jpg',
  createdAt: new Date().toISOString(),
  ...overrides,
});

// Factory para projetos
export const createMockProject = (overrides = {}) => ({
  id: '1',
  title: 'Projeto Exemplo',
  description: 'Descrição do projeto',
  image: '/project.jpg',
  technologies: ['React', 'TypeScript'],
  category: 'web',
  status: 'published',
  createdAt: new Date().toISOString(),
  ...overrides,
});

// Factory para posts
export const createMockPost = (overrides = {}) => ({
  id: '1',
  title: 'Post Exemplo',
  content: 'Conteúdo do post',
  excerpt: 'Resumo do post',
  author: createMockUser(),
  status: 'published',
  createdAt: new Date().toISOString(),
  ...overrides,
});

// ===== HELPERS =====

// Helper para simular localStorage
export const mockLocalStorage = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
};

// Helper para simular sessionStorage
export const mockSessionStorage = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
};

// Helper para simular fetch
export const mockFetch = vi.fn();

// Helper para simular console
export const mockConsole = {
  log: vi.fn(),
  error: vi.fn(),
  warn: vi.fn(),
  info: vi.fn(),
};

// ===== CLEANUP =====

// Cleanup global mocks
export const cleanupGlobalMocks = () => {
  vi.clearAllMocks();
  vi.resetAllMocks();
};
