/**
 * Sistema de SEO Dinâmico - Aqua9 Boilerplate v2
 *
 * Este arquivo implementa um sistema completo de SEO dinâmico para o projeto,
 * incluindo metadados, Open Graph, Twitter Cards, JSON-LD e configurações
 * específicas por rota.
 *
 * Funcionalidades:
 * - SEO dinâmico baseado em rotas
 * - Open Graph para redes sociais
 * - Twitter Cards otimizados
 * - JSON-LD para dados estruturados
 * - Sitemap dinâmico
 * - Robots.txt configurável
 *
 * @author Jonathan Simão
 * @version 2.0.0
 * @since 2024-01-01
 */

import type { Metadata } from 'next';

/**
 * Configuração central do SEO
 *
 * Contém todas as informações básicas do projeto e desenvolvedor
 * que serão usadas em todo o sistema de SEO.
 */
export const SEOConfig = {
  // Informações do desenvolvedor
  developer: {
    name: 'Jonathan Simão',
    email: 'contato@aqua9.com.br',
    website: 'https://aqua9.com.br',
    twitter: '@aqua9dev',
    linkedin: 'https://linkedin.com/in/jonathansimao',
    github: 'https://github.com/jonathansimao',
  },

  // Informações do projeto
  project: {
    name: 'Aqua9 Boilerplate v2',
    description:
      'Boilerplate Next.js profissional da Aqua9 v2 para projetos internos. Template moderno com TypeScript, SEO otimizado e ferramentas de qualidade de código.',
    version: '2.0.0',
    url: 'https://aqua9.com.br',
    repository: 'https://github.com/aqua9/boilerplate_aqua9_v2',
    license: 'MIT',
    category: 'Web Development Tools',
  },

  // Palavras-chave otimizadas para SEO
  keywords: [
    // Tecnologias principais
    'boilerplate',
    'nextjs',
    'react',
    'typescript',

    // Marca e desenvolvedor
    'aqua9',
    'jonathan simão',
    'template',

    // Categorias
    'fullstack',
    'web development',
    'frontend',
    'backend',
    'seo',
    'performance',
    'modern web',

    // Ferramentas de desenvolvimento
    'developer tools',
    'code quality',
    'testing',
    'storybook',
    'eslint',
    'prettier',
    'jest',

    // Tecnologias específicas
    'drizzleorm',
    'posthog',
    'sentry',
    'lefthook',
    'husky',
  ],

  // Configurações de tema para Open Graph
  theme: {
    primary: '#1e3a8a',
    secondary: '#3b82f6',
    accent: '#60a5fa',
    background: '#ffffff',
    text: '#1f2937',
  },

  // Configurações de localização
  locale: {
    language: 'pt-BR',
    region: 'BR',
    timezone: 'America/Sao_Paulo',
    currency: 'BRL',
  },
};

/**
 * Interface para configuração de SEO dinâmico
 *
 * Define a estrutura de dados para configurações de SEO
 * específicas de cada página ou rota.
 */
export interface DynamicSEOConfig {
  // Metadados básicos
  title: string;
  description?: string;
  keywords?: string[];
  image?: string;
  canonical?: string;

  // Tipo de conteúdo
  type?:
    | 'website'
    | 'article'
    | 'product'
    | 'profile'
    | 'book'
    | 'music.song'
    | 'music.album'
    | 'music.playlist'
    | 'music.radio_station'
    | 'video.movie'
    | 'video.episode'
    | 'video.tv_show'
    | 'video.other';

  // Informações do autor
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];

  // Configurações específicas do Open Graph
  openGraph?: {
    title?: string;
    description?: string;
    image?: string;
    type?: string;
    url?: string;
    siteName?: string;
    locale?: string;
    images?: Array<{
      url: string;
      width?: number;
      height?: number;
      alt?: string;
    }>;
  };

  // Configurações específicas do Twitter
  twitter?: {
    title?: string;
    description?: string;
    image?: string;
    card?: 'summary' | 'summary_large_image' | 'app' | 'player';
    creator?: string;
    site?: string;
  };

  // Configurações adicionais
  noindex?: boolean;
  nofollow?: boolean;
  priority?: number;
  changeFreq?:
    | 'always'
    | 'hourly'
    | 'daily'
    | 'weekly'
    | 'monthly'
    | 'yearly'
    | 'never';
}

/**
 * Configurações de SEO por rota
 *
 * Define metadados específicos para cada página/rota da aplicação.
 * Cada rota pode ter suas próprias configurações de SEO otimizadas.
 */
export const routeSEOConfig: Record<string, DynamicSEOConfig> = {
  // ===== PÁGINA INICIAL =====
  '/': {
    title: 'Aqua9 Boilerplate v2 - Next.js Profissional',
    description:
      'Boilerplate Next.js profissional da Aqua9 v2 para projetos internos. Template moderno com TypeScript, SEO otimizado e ferramentas de qualidade de código.',
    keywords: [
      'boilerplate',
      'nextjs',
      'react',
      'typescript',
      'aqua9',
      'template',
    ],
    type: 'website',
    image: '/og-home.svg',
    canonical: 'https://aqua9.com.br',
    priority: 1.0,
    changeFreq: 'weekly',
    openGraph: {
      title: 'Aqua9 Boilerplate v2 - Next.js Profissional',
      description: 'Template moderno com TypeScript e SEO otimizado',
      type: 'website',
      siteName: 'Aqua9 Boilerplate',
      images: [
        {
          url: '/og-home.svg',
          width: 1200,
          height: 630,
          alt: 'Aqua9 Boilerplate v2 - Next.js Profissional',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Aqua9 Boilerplate v2 - Next.js Profissional',
      description: 'Template moderno com TypeScript e SEO otimizado',
      image: '/og-home.svg',
      creator: '@aqua9dev',
      site: '@aqua9dev',
    },
  },

  // ===== PÁGINA SOBRE =====
  '/about': {
    title: 'Sobre - Aqua9 Boilerplate v2',
    description:
      'Conheça mais sobre o Aqua9 Boilerplate v2, desenvolvido por Jonathan Simão. Template profissional para projetos Next.js com foco em qualidade e performance.',
    keywords: [
      'sobre',
      'aqua9',
      'jonathan simão',
      'desenvolvedor',
      'template',
      'nextjs',
    ],
    type: 'website',
    image: '/og-about.svg',
    canonical: 'https://aqua9.com.br/about',
    priority: 0.8,
    changeFreq: 'monthly',
    openGraph: {
      title: 'Sobre - Aqua9 Boilerplate v2',
      description: 'Conheça mais sobre o projeto e o desenvolvedor',
      type: 'website',
      siteName: 'Aqua9 Boilerplate',
      images: [
        {
          url: '/og-about.svg',
          width: 1200,
          height: 630,
          alt: 'Sobre - Aqua9 Boilerplate v2',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Sobre - Aqua9 Boilerplate v2',
      description: 'Conheça mais sobre o projeto e o desenvolvedor',
      image: '/og-about.svg',
      creator: '@aqua9dev',
      site: '@aqua9dev',
    },
  },

  // ===== PÁGINA PORTFÓLIO =====
  '/portfolio': {
    title: 'Portfólio - Aqua9 Boilerplate v2',
    description:
      'Portfólio de projetos desenvolvidos com o Aqua9 Boilerplate v2. Exemplos de aplicações e sites profissionais com Next.js, TypeScript e SEO otimizado.',
    keywords: [
      'portfólio',
      'projetos',
      'aplicações',
      'sites',
      'exemplos',
      'nextjs',
      'typescript',
    ],
    type: 'website',
    image: '/og-portfolio.svg',
    canonical: 'https://aqua9.com.br/portfolio',
    priority: 0.9,
    changeFreq: 'weekly',
    openGraph: {
      title: 'Portfólio - Aqua9 Boilerplate v2',
      description: 'Projetos desenvolvidos com o boilerplate',
      type: 'website',
      siteName: 'Aqua9 Boilerplate',
      images: [
        {
          url: '/og-portfolio.svg',
          width: 1200,
          height: 630,
          alt: 'Portfólio - Aqua9 Boilerplate v2',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Portfólio - Aqua9 Boilerplate v2',
      description: 'Projetos desenvolvidos com o boilerplate',
      image: '/og-portfolio.svg',
      creator: '@aqua9dev',
      site: '@aqua9dev',
    },
  },

  // ===== PÁGINA DE PROJETO ESPECÍFICO (DINÂMICA) =====
  '/portfolio/[slug]': {
    title: 'Projeto {slug} - Aqua9 Boilerplate v2',
    description:
      'Detalhes do projeto {slug} desenvolvido com o Aqua9 Boilerplate v2. Tecnologias, funcionalidades e resultados obtidos.',
    keywords: [
      'projeto',
      'detalhes',
      'tecnologias',
      'funcionalidades',
      'resultados',
    ],
    type: 'article',
    image: '/og-project.svg',
    canonical: 'https://aqua9.com.br/portfolio/{slug}',
    priority: 0.8,
    changeFreq: 'monthly',
    openGraph: {
      title: 'Projeto {slug} - Aqua9 Boilerplate v2',
      description: 'Detalhes do projeto {slug}',
      type: 'article',
      siteName: 'Aqua9 Boilerplate',
      images: [
        {
          url: '/og-project.svg',
          width: 1200,
          height: 630,
          alt: 'Projeto {slug} - Aqua9 Boilerplate v2',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Projeto {slug} - Aqua9 Boilerplate v2',
      description: 'Detalhes do projeto {slug}',
      image: '/og-project.svg',
      creator: '@aqua9dev',
      site: '@aqua9dev',
    },
  },

  // ===== PÁGINA DE DOCUMENTAÇÃO =====
  '/docs': {
    title: 'Documentação - Aqua9 Boilerplate v2',
    description:
      'Documentação completa do Aqua9 Boilerplate v2. Guias, tutoriais e referências para usar o template em seus projetos.',
    keywords: ['documentação', 'guias', 'tutoriais', 'referência', 'api'],
    type: 'website',
    image: '/og-docs.svg',
    canonical: 'https://aqua9.com.br/docs',
    priority: 0.7,
    changeFreq: 'weekly',
    openGraph: {
      title: 'Documentação - Aqua9 Boilerplate v2',
      description: 'Guias e tutoriais do boilerplate',
      type: 'website',
      siteName: 'Aqua9 Boilerplate',
      images: [
        {
          url: '/og-docs.svg',
          width: 1200,
          height: 630,
          alt: 'Documentação - Aqua9 Boilerplate v2',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Documentação - Aqua9 Boilerplate v2',
      description: 'Guias e tutoriais do boilerplate',
      image: '/og-docs.svg',
      creator: '@aqua9dev',
      site: '@aqua9dev',
    },
  },

  // ===== PÁGINA DE CONTATO =====
  '/contact': {
    title: 'Contato - Aqua9 Boilerplate v2',
    description:
      'Entre em contato com a equipe Aqua9. Suporte, dúvidas e parcerias relacionadas ao Boilerplate v2.',
    keywords: ['contato', 'suporte', 'dúvidas', 'parcerias', 'aqua9'],
    type: 'website',
    image: '/og-contact.svg',
    canonical: 'https://aqua9.com.br/contact',
    priority: 0.6,
    changeFreq: 'monthly',
    openGraph: {
      title: 'Contato - Aqua9 Boilerplate v2',
      description: 'Entre em contato conosco',
      type: 'website',
      siteName: 'Aqua9 Boilerplate',
      images: [
        {
          url: '/og-contact.svg',
          width: 1200,
          height: 630,
          alt: 'Contato - Aqua9 Boilerplate v2',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Contato - Aqua9 Boilerplate v2',
      description: 'Entre em contato conosco',
      image: '/og-contact.svg',
      creator: '@aqua9dev',
      site: '@aqua9dev',
    },
  },
};

/**
 * Metadados padrão para todas as páginas
 *
 * Configuração completa de SEO que será aplicada em todas as páginas
 * da aplicação, incluindo Open Graph e Twitter Cards.
 *
 * Esta configuração serve como base para todas as páginas e pode ser
 * sobrescrita por configurações específicas de cada rota.
 */
export const defaultSEO: Metadata = {
  // Título da página com template dinâmico
  title: {
    default: 'Aqua9 Boilerplate v2 - Next.js Profissional | Jonathan Simão',
    template: '%s | Aqua9 Boilerplate v2',
  },

  // Descrição para SEO
  description: SEOConfig.project.description,

  // Palavras-chave para SEO
  keywords: SEOConfig.keywords,

  // Informações do autor
  authors: [{ name: SEOConfig.developer.name }],
  creator: SEOConfig.developer.name,
  publisher: 'Aqua9',

  // Configuração de detecção automática
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // URL base para metadados
  metadataBase: new URL(SEOConfig.project.url),

  // URLs alternativas
  alternates: {
    canonical: '/',
  },

  // Configuração para Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: SEOConfig.project.url,
    title: 'Boilerplate Aqua9 - Next.js Profissional',
    description: SEOConfig.project.description,
    siteName: 'Aqua9 Boilerplate',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Boilerplate Aqua9 - Next.js Profissional',
      },
    ],
  },

  // Configuração para compartilhamento no Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'Boilerplate Aqua9 - Next.js Profissional',
    description: SEOConfig.project.description,
    images: ['/og-image.svg'],
    creator: SEOConfig.developer.twitter,
    site: SEOConfig.developer.twitter,
  },

  // Configuração de viewport (removido - será migrado para viewport export)
  // viewport: 'width=device-width, initial-scale=1',
};

/**
 * Função para gerar metadados dinâmicos baseados na rota
 *
 * Gera metadados específicos para uma rota, combinando configurações
 * padrão com configurações específicas da rota.
 *
 * @param pathname - Caminho da rota (ex: '/about', '/portfolio/project-1')
 * @param dynamicData - Dados dinâmicos para substituir placeholders
 * @returns Metadados personalizados para a rota
 */
export function generateDynamicSEO(
  pathname: string,
  dynamicData?: Record<string, string>
): Metadata {
  // Busca configuração específica da rota
  const routeConfig = routeSEOConfig[pathname] || routeSEOConfig['/'];

  // Se não encontrar configuração exata, tenta encontrar padrão dinâmico
  let config = routeConfig;
  if (!routeConfig && pathname.includes('/')) {
    // Busca por padrões dinâmicos (ex: /portfolio/[slug])
    const dynamicPatterns = Object.keys(routeSEOConfig).filter(key =>
      key.includes('[')
    );
    for (const pattern of dynamicPatterns) {
      const regex = new RegExp(pattern.replace(/\[([^\]]+)\]/g, '([^/]+)'));
      if (regex.test(pathname)) {
        config = routeSEOConfig[pattern];
        break;
      }
    }
  }

  // Se não encontrou configuração, usa a padrão
  if (!config) {
    config = routeSEOConfig['/'];
  }

  // Substitui placeholders por dados dinâmicos
  let title = config.title;
  let description = config.description || SEOConfig.project.description;
  let canonical = config.canonical || `${SEOConfig.project.url}${pathname}`;

  if (dynamicData) {
    Object.entries(dynamicData).forEach(([key, value]) => {
      const placeholder = `{${key}}`;
      title = title.replace(placeholder, value);
      description = description.replace(placeholder, value);
      canonical = canonical.replace(placeholder, value);
    });
  }

  // Gera metadados combinando configurações padrão com específicas
  return {
    ...defaultSEO,
    title,
    description,
    keywords: config.keywords || SEOConfig.keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      ...defaultSEO.openGraph,
      title,
      description,
      url: canonical,
      images: config.image
        ? [
            {
              url: config.image,
              width: 1200,
              height: 630,
              alt: title,
            },
          ]
        : defaultSEO.openGraph?.images,
    },
    twitter: {
      ...defaultSEO.twitter,
      title,
      description,
      images: config.image ? [config.image] : defaultSEO.twitter?.images,
      card: config.twitter?.card || 'summary_large_image',
    },
    authors: config.author ? [{ name: config.author }] : defaultSEO.authors,
    other: {
      ...defaultSEO.other,
      ...(config.publishedTime && {
        'article:published_time': config.publishedTime,
      }),
      ...(config.modifiedTime && {
        'article:modified_time': config.modifiedTime,
      }),
      ...(config.section && { 'article:section': config.section }),
      ...(config.tags && { 'article:tag': config.tags.join(', ') }),
    } as Record<string, string>,
  };
}

/**
 * Função para gerar metadados específicos de página
 *
 * Permite criar metadados personalizados para páginas específicas,
 * mantendo a consistência com as configurações padrão.
 *
 * @param title - Título da página
 * @param description - Descrição da página (opcional)
 * @param keywords - Palavras-chave específicas (opcional)
 * @param image - Imagem específica da página (opcional)
 * @returns Metadados personalizados para a página
 */
export function generatePageSEO(
  title: string,
  description?: string,
  keywords?: string[],
  image?: string
): Metadata {
  return {
    ...defaultSEO,
    title,
    description: description || SEOConfig.project.description,
    keywords: keywords || SEOConfig.keywords,
    openGraph: {
      ...defaultSEO.openGraph,
      title,
      description: description || SEOConfig.project.description,
      images: image
        ? [{ url: image, width: 1200, height: 630, alt: title }]
        : defaultSEO.openGraph?.images,
    },
    twitter: {
      ...defaultSEO.twitter,
      title,
      description: description || SEOConfig.project.description,
      images: image ? [image] : defaultSEO.twitter?.images,
    },
  };
}

/**
 * Hook para SEO dinâmico em componentes
 *
 * Hook que pode ser usado em componentes para gerar metadados dinâmicos
 * baseados no estado ou props do componente.
 *
 * @param config - Configuração de SEO dinâmico
 * @returns Função para atualizar metadados
 */
export function useDynamicSEO(config: DynamicSEOConfig) {
  // Esta função seria implementada com next/head ou similar
  // Por enquanto, retorna a configuração para uso manual
  return {
    updateSEO: () => config,
    config,
  };
}

/**
 * Configuração para JSON-LD (Structured Data)
 *
 * Dados estruturados que ajudam os motores de busca a entender
 * melhor o conteúdo e contexto da aplicação.
 */
export const jsonLdConfig = {
  // Schema para SoftwareApplication
  softwareApplication: {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: SEOConfig.project.name,
    description: SEOConfig.project.description,
    url: SEOConfig.project.url,
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Web Browser',
    author: {
      '@type': 'Person',
      name: SEOConfig.developer.name,
      url: SEOConfig.developer.website,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Aqua9',
      url: SEOConfig.developer.website,
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'BRL',
    },
    softwareVersion: SEOConfig.project.version,
    dateCreated: '2024-01-01',
    dateModified: new Date().toISOString().split('T')[0],
    keywords: SEOConfig.keywords.join(', '),
  },

  // Schema para Organization
  organization: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Aqua9',
    url: SEOConfig.developer.website,
    logo: `${SEOConfig.developer.website}/logo.png`,
    sameAs: [
      `https://twitter.com/${SEOConfig.developer.twitter.replace('@', '')}`,
      'https://github.com/aqua9',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: SEOConfig.developer.email,
    },
  },

  // Schema para Person (Jonathan Simão)
  person: {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SEOConfig.developer.name,
    url: SEOConfig.developer.website,
    jobTitle: 'Full Stack Developer',
    worksFor: {
      '@type': 'Organization',
      name: 'Aqua9',
    },
    sameAs: [
      `https://twitter.com/${SEOConfig.developer.twitter.replace('@', '')}`,
      'https://github.com/jonathansimao',
      'https://linkedin.com/in/jonathansimao',
    ],
  },
};

/**
 * Configuração para sitemap dinâmico
 *
 * Define as páginas que devem ser incluídas no sitemap.xml
 * para ajudar os motores de busca a indexar o conteúdo.
 * Suporta geração dinâmica baseada em dados reais.
 */
export const sitemapConfig = {
  baseUrl: SEOConfig.project.url,

  // Páginas estáticas
  staticPages: [
    {
      url: '/',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: '/about',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: '/counter',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: '/portfolio',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ],

  // Função para gerar páginas dinâmicas
  generateDynamicPages: async (): Promise<
    Array<{
      url: string;
      lastModified: Date;
      changeFrequency:
        | 'always'
        | 'hourly'
        | 'daily'
        | 'weekly'
        | 'monthly'
        | 'yearly'
        | 'never';
      priority: number;
    }>
  > => {
    // Aqui você pode buscar dados de uma API ou banco de dados
    // para gerar páginas dinâmicas (ex: posts de blog, projetos, etc.)

    // Exemplo: projetos do portfólio
    const projects = [
      { slug: 'projeto-1', lastModified: new Date('2024-01-15') },
      { slug: 'projeto-2', lastModified: new Date('2024-01-20') },
      { slug: 'projeto-3', lastModified: new Date('2024-01-25') },
    ];

    return projects.map(project => ({
      url: `/portfolio/${project.slug}`,
      lastModified: project.lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }));
  },

  // Função para gerar sitemap completo
  generateSitemap: async () => {
    const staticPages = sitemapConfig.staticPages;
    const dynamicPages = await sitemapConfig.generateDynamicPages();

    return [...staticPages, ...dynamicPages];
  },
};

/**
 * Configuração para robots.txt
 *
 * Define as regras para bots de busca sobre quais páginas
 * podem ou não ser indexadas.
 */
export const robotsConfig = {
  userAgent: '*',
  allow: '/',
  disallow: ['/api/', '/_next/', '/admin/'],
  sitemap: `${SEOConfig.project.url}/sitemap.xml`,
  host: SEOConfig.project.url,
};
