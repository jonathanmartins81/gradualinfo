/**
 * Sistema de SEO Dinâmico - Gradual Info
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
 * @version 1.0.0
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
    name: 'Gradual Info',
    description:
      'Website oficial da Gradual Info - Empresa especializada em soluções de informação e tecnologia. Desenvolvido pela Aqua9 com foco em qualidade e inovação.',
    version: '1.0.0',
    url: 'https://gradualinfo.com.br',
    repository: 'https://github.com/jonathanmartins81/gradualinfo',
    license: 'MIT',
    category: 'Information Technology',
  },

  // Palavras-chave otimizadas para SEO
  keywords: [
    // Marca principal
    'gradualinfo',
    'gradual info',
    'gradual',
    'info',

    // Categorias de negócio
    'tecnologia',
    'informação',
    'soluções',
    'inovação',
    'digital',
    'transformação digital',

    // Serviços
    'consultoria',
    'desenvolvimento',
    'sistemas',
    'software',
    'aplicações',
    'web',
    'mobile',

    // Localização
    'brasil',
    'são paulo',
    'sp',
    'brasileiro',

    // Tecnologias
    'nextjs',
    'react',
    'typescript',
    'javascript',
    'nodejs',
    'python',
    'java',

    // Desenvolvedor
    'aqua9',
    'jonathan simão',
    'desenvolvimento web',
    'programação',

    // Qualidade
    'qualidade',
    'performance',
    'segurança',
    'moderno',
    'profissional',
  ],

  // Cores da bandeira brasileira
  theme: {
    primary: '#009c3b', // Verde da bandeira
    secondary: '#ffdf00', // Amarelo da bandeira
    accent: '#002776', // Azul da bandeira
    white: '#ffffff',
  },
};

/**
 * Interface para configuração de SEO dinâmico
 *
 * Define a estrutura de dados para configurações de SEO
 * específicas de cada rota da aplicação.
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
    title: 'Gradual Info - Soluções em Tecnologia e Informação',
    description:
      'Website oficial da Gradual Info - Empresa especializada em soluções de informação e tecnologia. Desenvolvido pela Aqua9 com foco em qualidade e inovação.',
    keywords: [
      'gradualinfo',
      'gradual info',
      'tecnologia',
      'informação',
      'soluções',
      'inovação',
      'brasil',
      'são paulo',
    ],
    type: 'website',
    image: '/og-home.svg',
    canonical: 'https://gradualinfo.com.br',
    priority: 1.0,
    changeFreq: 'weekly',
    openGraph: {
      title: 'Gradual Info - Soluções em Tecnologia e Informação',
      description:
        'Empresa especializada em soluções de informação e tecnologia',
      type: 'website',
      siteName: 'Gradual Info',
      images: [
        {
          url: '/og-home.svg',
          width: 1200,
          height: 630,
          alt: 'Gradual Info - Soluções em Tecnologia e Informação',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Gradual Info - Soluções em Tecnologia e Informação',
      description:
        'Empresa especializada em soluções de informação e tecnologia',
      image: '/og-home.svg',
      creator: '@gradualinfo',
      site: '@gradualinfo',
    },
  },

  // ===== PÁGINA SOBRE =====
  '/about': {
    title: 'Sobre - Gradual Info',
    description:
      'Conheça mais sobre a Gradual Info - Empresa especializada em soluções de informação e tecnologia. Nossa missão é transformar dados em insights valiosos.',
    keywords: [
      'sobre',
      'gradualinfo',
      'gradual info',
      'empresa',
      'tecnologia',
      'informação',
      'missão',
      'valores',
    ],
    type: 'website',
    image: '/og-about.svg',
    canonical: 'https://gradualinfo.com.br/about',
    priority: 0.8,
    changeFreq: 'monthly',
    openGraph: {
      title: 'Sobre - Gradual Info',
      description: 'Conheça mais sobre nossa empresa e missão',
      type: 'website',
      siteName: 'Gradual Info',
      images: [
        {
          url: '/og-about.svg',
          width: 1200,
          height: 630,
          alt: 'Sobre - Gradual Info',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Sobre - Gradual Info',
      description: 'Conheça mais sobre nossa empresa e missão',
      image: '/og-about.svg',
      creator: '@gradualinfo',
      site: '@gradualinfo',
    },
  },

  // ===== PÁGINA SERVIÇOS =====
  '/services': {
    title: 'Serviços - Gradual Info',
    description:
      'Conheça nossos serviços de tecnologia e informação. Desenvolvimento de sistemas, consultoria em TI, soluções personalizadas para sua empresa.',
    keywords: [
      'serviços',
      'tecnologia',
      'desenvolvimento',
      'consultoria',
      'soluções',
      'sistemas',
      'software',
    ],
    type: 'website',
    image: '/og-services.svg',
    canonical: 'https://gradualinfo.com.br/services',
    priority: 0.9,
    changeFreq: 'weekly',
    openGraph: {
      title: 'Serviços - Gradual Info',
      description: 'Soluções em tecnologia e informação',
      type: 'website',
      siteName: 'Gradual Info',
      images: [
        {
          url: '/og-services.svg',
          width: 1200,
          height: 630,
          alt: 'Serviços - Gradual Info',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Serviços - Gradual Info',
      description: 'Soluções em tecnologia e informação',
      image: '/og-services.svg',
      creator: '@gradualinfo',
      site: '@gradualinfo',
    },
  },

  // ===== PÁGINA EQUIPE =====
  '/team': {
    title: 'Equipe - Gradual Info',
    description:
      'Conheça nossa equipe de profissionais especializados em tecnologia e informação. Especialistas qualificados para transformar suas ideias em realidade.',
    keywords: [
      'equipe',
      'profissionais',
      'especialistas',
      'qualificados',
      'tecnologia',
      'desenvolvimento',
    ],
    type: 'website',
    image: '/og-team.svg',
    canonical: 'https://gradualinfo.com.br/team',
    priority: 0.7,
    changeFreq: 'monthly',
    openGraph: {
      title: 'Equipe - Gradual Info',
      description: 'Profissionais especializados em tecnologia',
      type: 'website',
      siteName: 'Gradual Info',
      images: [
        {
          url: '/og-team.svg',
          width: 1200,
          height: 630,
          alt: 'Equipe - Gradual Info',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Equipe - Gradual Info',
      description: 'Profissionais especializados em tecnologia',
      image: '/og-team.svg',
      creator: '@gradualinfo',
      site: '@gradualinfo',
    },
  },

  // ===== PÁGINA TECNOLOGIA =====
  '/technology': {
    title: 'Tecnologia - Gradual Info',
    description:
      'Conheça as tecnologias que utilizamos para desenvolver soluções inovadoras. Stack moderna e ferramentas de ponta para projetos de qualidade.',
    keywords: [
      'tecnologia',
      'stack',
      'ferramentas',
      'inovações',
      'desenvolvimento',
      'programação',
    ],
    type: 'website',
    image: '/og-technology.svg',
    canonical: 'https://gradualinfo.com.br/technology',
    priority: 0.8,
    changeFreq: 'monthly',
    openGraph: {
      title: 'Tecnologia - Gradual Info',
      description: 'Stack moderna e ferramentas de ponta',
      type: 'website',
      siteName: 'Gradual Info',
      images: [
        {
          url: '/og-technology.svg',
          width: 1200,
          height: 630,
          alt: 'Tecnologia - Gradual Info',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Tecnologia - Gradual Info',
      description: 'Stack moderna e ferramentas de ponta',
      image: '/og-technology.svg',
      creator: '@gradualinfo',
      site: '@gradualinfo',
    },
  },

  // ===== PÁGINA BLOG =====
  '/blog': {
    title: 'Blog - Gradual Info',
    description:
      'Blog da Gradual Info com artigos sobre tecnologia, inovação e tendências do mercado. Conteúdo atualizado sobre desenvolvimento e soluções digitais.',
    keywords: [
      'blog',
      'artigos',
      'tecnologia',
      'inovação',
      'tendências',
      'desenvolvimento',
    ],
    type: 'website',
    image: '/og-blog.svg',
    canonical: 'https://gradualinfo.com.br/blog',
    priority: 0.7,
    changeFreq: 'weekly',
    openGraph: {
      title: 'Blog - Gradual Info',
      description: 'Artigos sobre tecnologia e inovação',
      type: 'website',
      siteName: 'Gradual Info',
      images: [
        {
          url: '/og-blog.svg',
          width: 1200,
          height: 630,
          alt: 'Blog - Gradual Info',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Blog - Gradual Info',
      description: 'Artigos sobre tecnologia e inovação',
      image: '/og-blog.svg',
      creator: '@gradualinfo',
      site: '@gradualinfo',
    },
  },

  // ===== PÁGINA CONTATO =====
  '/contact': {
    title: 'Contato - Gradual Info',
    description:
      'Entre em contato com a Gradual Info. Solicite um orçamento, tire suas dúvidas ou agende uma reunião para discutir seu projeto.',
    keywords: [
      'contato',
      'orçamento',
      'dúvidas',
      'reunião',
      'projeto',
      'consultoria',
    ],
    type: 'website',
    image: '/og-contact.svg',
    canonical: 'https://gradualinfo.com.br/contact',
    priority: 0.6,
    changeFreq: 'monthly',
    openGraph: {
      title: 'Contato - Gradual Info',
      description: 'Entre em contato conosco',
      type: 'website',
      siteName: 'Gradual Info',
      images: [
        {
          url: '/og-contact.svg',
          width: 1200,
          height: 630,
          alt: 'Contato - Gradual Info',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Contato - Gradual Info',
      description: 'Entre em contato conosco',
      image: '/og-contact.svg',
      creator: '@gradualinfo',
      site: '@gradualinfo',
    },
  },

  // ===== PÁGINA CARREIRAS =====
  '/careers': {
    title: 'Carreiras - Gradual Info',
    description:
      'Junte-se à nossa equipe! Oportunidades de carreira na Gradual Info. Trabalhe com tecnologia de ponta e faça parte de projetos inovadores.',
    keywords: [
      'carreiras',
      'vagas',
      'oportunidades',
      'trabalho',
      'tecnologia',
      'inovação',
    ],
    type: 'website',
    image: '/og-careers.svg',
    canonical: 'https://gradualinfo.com.br/careers',
    priority: 0.6,
    changeFreq: 'weekly',
    openGraph: {
      title: 'Carreiras - Gradual Info',
      description: 'Oportunidades de carreira',
      type: 'website',
      siteName: 'Gradual Info',
      images: [
        {
          url: '/og-careers.svg',
          width: 1200,
          height: 630,
          alt: 'Carreiras - Gradual Info',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Carreiras - Gradual Info',
      description: 'Oportunidades de carreira',
      image: '/og-careers.svg',
      creator: '@gradualinfo',
      site: '@gradualinfo',
    },
  },

  // ===== PÁGINAS DINÂMICAS =====
  '/cases/[slug]': {
    title: 'Caso de Uso {slug} - Gradual Info',
    description:
      'Conheça os detalhes deste caso de uso desenvolvido pela Gradual Info. Tecnologias utilizadas, desafios superados e resultados alcançados.',
    keywords: [
      'caso de uso',
      'detalhes',
      'tecnologias',
      'soluções',
      'resultados',
      'projeto',
    ],
    type: 'website',
    image: '/og-case.svg',
    canonical: 'https://gradualinfo.com.br/cases/{slug}',
    priority: 0.8,
    changeFreq: 'monthly',
    openGraph: {
      title: 'Caso de Uso {slug} - Gradual Info',
      description: 'Detalhes do projeto e tecnologias utilizadas',
      type: 'website',
      siteName: 'Gradual Info',
      images: [
        {
          url: '/og-case.svg',
          width: 1200,
          height: 630,
          alt: 'Caso de Uso {slug} - Gradual Info',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Caso de Uso {slug} - Gradual Info',
      description: 'Detalhes do projeto e tecnologias utilizadas',
      image: '/og-case.svg',
      creator: '@gradualinfo',
      site: '@gradualinfo',
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
    default: 'Gradual Info - Soluções em Tecnologia e Informação',
    template: '%s | Gradual Info',
  },

  // Descrição para SEO
  description: SEOConfig.project.description,

  // Palavras-chave para SEO
  keywords: SEOConfig.keywords,

  // Informações do autor
  authors: [{ name: SEOConfig.developer.name }],
  creator: SEOConfig.developer.name,
  publisher: 'Gradual Info',

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
    title: 'Gradual Info - Soluções em Tecnologia e Informação',
    description: SEOConfig.project.description,
    siteName: 'Gradual Info',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Gradual Info - Soluções em Tecnologia e Informação',
      },
    ],
  },

  // Configuração para compartilhamento no Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'Gradual Info - Soluções em Tecnologia e Informação',
    description: SEOConfig.project.description,
    images: ['/og-image.svg'],
    creator: '@gradualinfo',
    site: '@gradualinfo',
  },
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
    const dynamicPatterns = Object.keys(routeSEOConfig).filter(
      key => key.includes('[') && key.includes(']')
    );

    for (const pattern of dynamicPatterns) {
      const regex = new RegExp(pattern.replace(/\[([^\]]+)\]/g, '([^/]+)'));
      if (regex.test(pathname)) {
        config = routeSEOConfig[pattern];
        break;
      }
    }
  }

  // Se ainda não encontrou, usa configuração padrão
  if (!config) {
    config = routeSEOConfig['/'];
  }

  // Substitui placeholders com dados dinâmicos
  let title = config.title;
  let description = config.description;
  let canonical = config.canonical;

  if (dynamicData) {
    Object.entries(dynamicData).forEach(([key, value]) => {
      const placeholder = `{${key}}`;
      title = title?.replace(new RegExp(placeholder, 'g'), value);
      description = description?.replace(new RegExp(placeholder, 'g'), value);
      canonical = canonical?.replace(new RegExp(placeholder, 'g'), value);
    });
  }

  // Constrói metadados combinando configuração padrão com específica
  const metadata: Metadata = {
    ...defaultSEO,
    title: title || defaultSEO.title,
    description: description || defaultSEO.description,
    keywords: config.keywords || defaultSEO.keywords,
    alternates: {
      canonical: canonical || pathname,
    },
    openGraph: {
      ...defaultSEO.openGraph,
      title: title || defaultSEO.openGraph?.title,
      description: description || defaultSEO.openGraph?.description,
      url: `${SEOConfig.project.url}${pathname}`,
      images: config.openGraph?.images || defaultSEO.openGraph?.images,
    },
    twitter: {
      ...defaultSEO.twitter,
      title: title || defaultSEO.twitter?.title,
      description: description || defaultSEO.twitter?.description,
      images: config.twitter?.image
        ? [config.twitter.image]
        : defaultSEO.twitter?.images,
    },
  };

  return metadata;
}

/**
 * Função para gerar metadados simples para uma página
 *
 * Versão simplificada para páginas que não precisam de configuração
 * complexa de SEO dinâmico.
 *
 * @param title - Título da página
 * @param description - Descrição da página (opcional)
 * @param keywords - Palavras-chave (opcional)
 * @param image - Imagem para Open Graph (opcional)
 * @returns Metadados básicos para a página
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
    description: description || defaultSEO.description,
    keywords: keywords || defaultSEO.keywords,
    openGraph: {
      ...defaultSEO.openGraph,
      title,
      description: description || defaultSEO.openGraph?.description,
      images: image
        ? [{ url: image, width: 1200, height: 630, alt: title }]
        : defaultSEO.openGraph?.images,
    },
    twitter: {
      ...defaultSEO.twitter,
      title,
      description: description || defaultSEO.twitter?.description,
      images: image ? [image] : defaultSEO.twitter?.images,
    },
  };
}

/**
 * Hook para usar SEO dinâmico em componentes React
 *
 * Hook personalizado que facilita o uso de configurações de SEO
 * dinâmicas em componentes React.
 *
 * @param config - Configuração de SEO dinâmico
 * @returns Objeto com metadados prontos para uso
 */
export function useDynamicSEO(config: DynamicSEOConfig) {
  return generatePageSEO(
    config.title,
    config.description,
    config.keywords,
    config.image
  );
}

/**
 * Configuração para JSON-LD (Dados Estruturados)
 *
 * Define os dados estruturados que serão incluídos nas páginas
 * para melhorar a compreensão dos motores de busca.
 */
export const jsonLdConfig = {
  // Schema para aplicação de software
  softwareApplication: {
    '@type': 'SoftwareApplication',
    name: SEOConfig.project.name,
    description: SEOConfig.project.description,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web Browser',
    url: SEOConfig.project.url,
    version: SEOConfig.project.version,
    publisher: {
      '@type': 'Organization',
      name: 'Gradual Info',
      url: SEOConfig.project.url,
    },
    author: {
      '@type': 'Person',
      name: SEOConfig.developer.name,
      email: SEOConfig.developer.email,
      url: SEOConfig.developer.website,
    },
  },

  // Schema para organização
  organization: {
    '@type': 'Organization',
    name: 'Gradual Info',
    url: SEOConfig.project.url,
    logo: `${SEOConfig.project.url}/logo.png`,
    description: SEOConfig.project.description,
    sameAs: [
      'https://twitter.com/gradualinfo',
      'https://linkedin.com/company/gradualinfo',
      'https://github.com/jonathanmartins81/gradualinfo',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'contato@gradualinfo.com.br',
      availableLanguage: 'Portuguese',
    },
  },

  // Schema para pessoa (desenvolvedor)
  person: {
    '@type': 'Person',
    name: SEOConfig.developer.name,
    email: SEOConfig.developer.email,
    url: SEOConfig.developer.website,
    jobTitle: 'Desenvolvedor Full Stack',
    worksFor: {
      '@type': 'Organization',
      name: 'Gradual Info',
    },
    sameAs: [
      SEOConfig.developer.twitter,
      SEOConfig.developer.linkedin,
      SEOConfig.developer.github,
    ],
  },
};

/**
 * Configuração para sitemap
 *
 * Define as configurações para geração do sitemap.xml
 * dinâmico da aplicação.
 */
export const sitemapConfig = {
  // Páginas estáticas
  staticPages: [
    {
      url: '/',
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: '/about',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: '/services',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: '/team',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: '/technology',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: '/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: '/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: '/careers',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
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

    // Exemplo: casos de uso
    const cases = [
      { slug: 'caso-1', lastModified: new Date('2024-01-15') },
      { slug: 'caso-2', lastModified: new Date('2024-01-20') },
      { slug: 'caso-3', lastModified: new Date('2024-01-25') },
    ];

    return cases.map(caseItem => ({
      url: `/cases/${caseItem.slug}`,
      lastModified: caseItem.lastModified,
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
