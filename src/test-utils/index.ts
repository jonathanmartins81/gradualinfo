/**
 * Test Utilities - Aqua9 Boilerplate v2
 *
 * Utilitários avançados para facilitar testes unitários e de integração,
 * incluindo mocks, factories, helpers e configurações comuns.
 */

import { render, RenderOptions } from '@testing-library/react';
import { ReactElement } from 'react';
import { ThemeProvider } from 'next-themes';

// ===== TIPOS =====
export interface TestUser {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin' | 'moderator';
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface TestProject {
  id: string;
  title: string;
  description: string;
  slug: string;
  image: string;
  technologies: string[];
  isPublished: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface TestPost {
  id: string;
  title: string;
  content: string;
  slug: string;
  excerpt: string;
  authorId: string;
  isPublished: boolean;
  publishedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

// ===== PROVIDERS DE TESTE =====
interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {
  theme?: 'light' | 'dark' | 'system';
  locale?: string;
}

const AllTheProviders = ({
  children,
  theme = 'light',
  locale = 'pt-BR'
}: {
  children: React.ReactNode;
  theme?: 'light' | 'dark' | 'system';
  locale?: string;
}) => {
  return (
    <ThemeProvider attribute="class" defaultTheme={theme}>
      <div lang={locale}>
        {children}
      </div>
    </ThemeProvider>
  );
};

// ===== FUNÇÃO DE RENDER CUSTOMIZADA =====
export function renderWithProviders(
  ui: ReactElement,
  options: CustomRenderOptions = {}
) {
  const { theme, locale, ...renderOptions } = options;

  return render(ui, {
    wrapper: ({ children }) => (
      <AllTheProviders theme={theme} locale={locale}>
        {children}
      </AllTheProviders>
    ),
    ...renderOptions,
  });
}

// ===== FACTORIES =====
export const UserFactory = {
  // Cria um usuário básico
  create: (overrides: Partial<TestUser> = {}): TestUser => ({
    id: `user-${Math.random().toString(36).substr(2, 9)}`,
    email: `user${Math.random().toString(36).substr(2, 9)}@example.com`,
    name: `User ${Math.random().toString(36).substr(2, 9)}`,
    role: 'user',
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    ...overrides,
  }),

  // Cria um admin
  createAdmin: (overrides: Partial<TestUser> = {}): TestUser =>
    UserFactory.create({ role: 'admin', ...overrides }),

  // Cria um moderador
  createModerator: (overrides: Partial<TestUser> = {}): TestUser =>
    UserFactory.create({ role: 'moderator', ...overrides }),

  // Cria um usuário inativo
  createInactive: (overrides: Partial<TestUser> = {}): TestUser =>
    UserFactory.create({ isActive: false, ...overrides }),

  // Cria múltiplos usuários
  createMany: (count: number, overrides: Partial<TestUser> = {}): TestUser[] =>
    Array.from({ length: count }, () => UserFactory.create(overrides)),
};

export const ProjectFactory = {
  // Cria um projeto básico
  create: (overrides: Partial<TestProject> = {}): TestProject => ({
    id: `project-${Math.random().toString(36).substr(2, 9)}`,
    title: `Project ${Math.random().toString(36).substr(2, 9)}`,
    description: `Description for project ${Math.random().toString(36).substr(2, 9)}`,
    slug: `project-${Math.random().toString(36).substr(2, 9)}`,
    image: `/projects/project-${Math.random().toString(36).substr(2, 9)}.jpg`,
    technologies: ['React', 'TypeScript', 'Next.js'],
    isPublished: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    ...overrides,
  }),

  // Cria um projeto não publicado
  createUnpublished: (overrides: Partial<TestProject> = {}): TestProject =>
    ProjectFactory.create({ isPublished: false, ...overrides }),

  // Cria um projeto com tecnologias específicas
  createWithTechnologies: (technologies: string[], overrides: Partial<TestProject> = {}): TestProject =>
    ProjectFactory.create({ technologies, ...overrides }),

  // Cria múltiplos projetos
  createMany: (count: number, overrides: Partial<TestProject> = {}): TestProject[] =>
    Array.from({ length: count }, () => ProjectFactory.create(overrides)),
};

export const PostFactory = {
  // Cria um post básico
  create: (overrides: Partial<TestPost> = {}): TestPost => ({
    id: `post-${Math.random().toString(36).substr(2, 9)}`,
    title: `Post ${Math.random().toString(36).substr(2, 9)}`,
    content: `Content for post ${Math.random().toString(36).substr(2, 9)}`,
    slug: `post-${Math.random().toString(36).substr(2, 9)}`,
    excerpt: `Excerpt for post ${Math.random().toString(36).substr(2, 9)}`,
    authorId: `user-${Math.random().toString(36).substr(2, 9)}`,
    isPublished: true,
    publishedAt: new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
    ...overrides,
  }),

  // Cria um post não publicado
  createUnpublished: (overrides: Partial<TestPost> = {}): TestPost =>
    PostFactory.create({ isPublished: false, publishedAt: undefined, ...overrides }),

  // Cria um post com autor específico
  createWithAuthor: (authorId: string, overrides: Partial<TestPost> = {}): TestPost =>
    PostFactory.create({ authorId, ...overrides }),

  // Cria múltiplos posts
  createMany: (count: number, overrides: Partial<TestPost> = {}): TestPost[] =>
    Array.from({ length: count }, () => PostFactory.create(overrides)),
};

// ===== MOCKS =====
export const MockRouter = {
  push: jest.fn(),
  replace: jest.fn(),
  back: jest.fn(),
  forward: jest.fn(),
  refresh: jest.fn(),
  prefetch: jest.fn(),
  pathname: '/',
  query: {},
  asPath: '/',
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn(),
  },
  isFallback: false,
  isLocaleDomain: false,
  isReady: true,
  defaultLocale: 'pt-BR',
  domainLocales: [],
  isPreview: false,
};

export const MockNextRouter = {
  useRouter: () => MockRouter,
};

// Mock do Next.js Image
export const MockNextImage = ({ src, alt, ...props }: any) => {
  return <img src={src} alt={alt} {...props} />;
};

// Mock do Next.js Link
export const MockNextLink = ({ href, children, ...props }: any) => {
  return <a href={href} {...props}>{children}</a>;
};

// ===== HELPERS DE TESTE =====
export const TestHelpers = {
  // Aguarda um elemento aparecer
  waitForElement: async (callback: () => HTMLElement | null, timeout = 5000) => {
    const startTime = Date.now();

    while (Date.now() - startTime < timeout) {
      const element = callback();
      if (element) return element;
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    throw new Error('Element not found within timeout');
  },

  // Simula um clique
  click: async (element: HTMLElement) => {
    element.click();
    await new Promise(resolve => setTimeout(resolve, 0));
  },

  // Simula digitação
  type: async (element: HTMLInputElement | HTMLTextAreaElement, text: string) => {
    element.focus();
    element.value = text;
    element.dispatchEvent(new Event('input', { bubbles: true }));
    element.dispatchEvent(new Event('change', { bubbles: true }));
    await new Promise(resolve => setTimeout(resolve, 0));
  },

  // Simula envio de formulário
  submitForm: async (form: HTMLFormElement) => {
    form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
    await new Promise(resolve => setTimeout(resolve, 0));
  },

  // Verifica se um elemento está visível
  isVisible: (element: HTMLElement) => {
    const style = window.getComputedStyle(element);
    return style.display !== 'none' &&
           style.visibility !== 'hidden' &&
           element.offsetParent !== null;
  },

  // Verifica se um elemento está focado
  isFocused: (element: HTMLElement) => {
    return document.activeElement === element;
  },

  // Verifica se um elemento tem uma classe específica
  hasClass: (element: HTMLElement, className: string) => {
    return element.classList.contains(className);
  },

  // Verifica se um elemento tem um atributo específico
  hasAttribute: (element: HTMLElement, attribute: string, value?: string) => {
    if (value) {
      return element.getAttribute(attribute) === value;
    }
    return element.hasAttribute(attribute);
  },
};

// ===== MOCKS DE API =====
export const ApiMocks = {
  // Mock de resposta de API bem-sucedida
  success: <T>(data: T, status = 200) => ({
    ok: true,
    status,
    json: async () => data,
    text: async () => JSON.stringify(data),
  }),

  // Mock de resposta de API com erro
  error: (message: string, status = 400) => ({
    ok: false,
    status,
    json: async () => ({ error: message }),
    text: async () => JSON.stringify({ error: message }),
  }),

  // Mock de resposta de API não autorizada
  unauthorized: () => ApiMocks.error('Unauthorized', 401),

  // Mock de resposta de API não encontrada
  notFound: () => ApiMocks.error('Not Found', 404),

  // Mock de resposta de API de servidor
  serverError: () => ApiMocks.error('Internal Server Error', 500),
};

// ===== MOCKS DE LOCAL STORAGE =====
export const MockLocalStorage = {
  store: {} as Record<string, string>,

  getItem: jest.fn((key: string) => {
    return MockLocalStorage.store[key] || null;
  }),

  setItem: jest.fn((key: string, value: string) => {
    MockLocalStorage.store[key] = value;
  }),

  removeItem: jest.fn((key: string) => {
    delete MockLocalStorage.store[key];
  }),

  clear: jest.fn(() => {
    MockLocalStorage.store = {};
  }),

  get length() {
    return Object.keys(MockLocalStorage.store).length;
  },

  key: jest.fn((index: number) => {
    const keys = Object.keys(MockLocalStorage.store);
    return keys[index] || null;
  }),
};

// ===== MOCKS DE SESSION STORAGE =====
export const MockSessionStorage = {
  store: {} as Record<string, string>,

  getItem: jest.fn((key: string) => {
    return MockSessionStorage.store[key] || null;
  }),

  setItem: jest.fn((key: string, value: string) => {
    MockSessionStorage.store[key] = value;
  }),

  removeItem: jest.fn((key: string) => {
    delete MockSessionStorage.store[key];
  }),

  clear: jest.fn(() => {
    MockSessionStorage.store = {};
  }),

  get length() {
    return Object.keys(MockSessionStorage.store).length;
  },

  key: jest.fn((index: number) => {
    const keys = Object.keys(MockSessionStorage.store);
    return keys[index] || null;
  }),
};

// ===== CONFIGURAÇÕES DE TESTE =====
export const TestConfig = {
  // Timeout padrão para testes
  timeout: 5000,

  // Configurações de retry
  retry: {
    attempts: 3,
    delay: 1000,
  },

  // Configurações de snapshot
  snapshot: {
    updateOnChange: false,
    ignoreWhitespace: true,
  },

  // Configurações de coverage
  coverage: {
    threshold: {
      global: {
        branches: 80,
        functions: 80,
        lines: 80,
        statements: 80,
      },
    },
  },
};

// ===== SETUP E TEARDOWN =====
export const TestSetup = {
  // Setup antes de cada teste
  beforeEach: () => {
    // Limpa todos os mocks
    jest.clearAllMocks();

    // Limpa localStorage e sessionStorage
    MockLocalStorage.clear();
    MockSessionStorage.clear();

    // Reseta o router
    Object.values(MockRouter).forEach(mock => {
      if (typeof mock === 'function') {
        mock.mockClear();
      }
    });

    // Configura localStorage e sessionStorage
    Object.defineProperty(window, 'localStorage', {
      value: MockLocalStorage,
      writable: true,
    });

    Object.defineProperty(window, 'sessionStorage', {
      value: MockSessionStorage,
      writable: true,
    });
  },

  // Teardown após cada teste
  afterEach: () => {
    // Limpa o DOM
    document.body.innerHTML = '';

    // Limpa todos os timers
    jest.clearAllTimers();
  },
};

// ===== EXPORTS =====
export default {
  renderWithProviders,
  UserFactory,
  ProjectFactory,
  PostFactory,
  MockRouter,
  MockNextRouter,
  MockNextImage,
  MockNextLink,
  TestHelpers,
  ApiMocks,
  MockLocalStorage,
  MockSessionStorage,
  TestConfig,
  TestSetup,
};
