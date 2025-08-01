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

  // Configurações de tema para Open Graph (Cores da Bandeira Brasileira)
  theme: {
    primary: '#009c3b', // Verde da bandeira
    secondary: '#ffdf00', // Amarelo da bandeira
    accent: '#002776', // Azul da bandeira
    background: '#ffffff', // Branco
    text: '#1f2937', // Cinza escuro
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
      'Conheça nossos serviços em tecnologia e informação. Desenvolvimento de sistemas, consultoria, análise de dados e soluções personalizadas para sua empresa.',
    keywords: [
      'serviços',
      'tecnologia',
      'informação',
      'desenvolvimento',
      'consultoria',
      'análise de dados',
      'sistemas',
      'soluções',
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

  // ===== PÁGINA DE CASO DE USO ESPECÍFICO (DINÂMICA) =====
  '/cases/[slug]': {
    title: 'Caso de Uso {slug} - Gradual Info',
    description:
      'Detalhes do caso de uso {slug} desenvolvido pela Gradual Info. Soluções, tecnologias utilizadas e resultados obtidos para nossos clientes.',
    keywords: [
      'caso de uso',
      'detalhes',
      'tecnologias',
      'soluções',
      'resultados',
      'clientes',
    ],
    type: 'article',
    image: '/og-case.svg',
    canonical: 'https://gradualinfo.com.br/cases/{slug}',
    priority: 0.8,
    changeFreq: 'monthly',
    openGraph: {
      title: 'Caso de Uso {slug} - Gradual Info',
      description: 'Detalhes do caso de uso {slug}',
      type: 'article',
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
      description: 'Detalhes do caso de uso {slug}',
      image: '/og-case.svg',
      creator: '@gradualinfo',
      site: '@gradualinfo',
    },
  },

  // ===== PÁGINA DE BLOG =====
  '/blog': {
    title: 'Blog - Gradual Info',
    description:
      'Blog da Gradual Info com artigos sobre tecnologia, inovação e tendências do mercado. Insights e análises sobre transformação digital.',
    keywords: [
      'blog',
      'artigos',
      'tecnologia',
      'inovação',
      'tendências',
      'insights',
      'análises',
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

  // ===== PÁGINA DE CONTATO =====
  '/contact': {
    title: 'Contato - Gradual Info',
    description:
      'Entre em contato com a Gradual Info. Solicite orçamentos, tire dúvidas sobre nossos serviços ou agende uma reunião.',
    keywords: [
      'contato',
      'orçamento',
      'dúvidas',
      'reunião',
      'gradualinfo',
      'gradual info',
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

  // ===== PÁGINA DE EQUIPE =====
  '/team': {
    title: 'Equipe - Gradual Info',
    description:
      'Conheça nossa equipe de especialistas em tecnologia e informação. Profissionais qualificados e experientes para transformar sua empresa.',
    keywords: ['equipe', 'profissionais', 'especialistas', 'tecnologia', 'informação', 'qualificados'],
    type: 'website',
    image: '/og-team.svg',
    canonical: 'https://gradualinfo.com.br/team',
    priority: 0.7,
    changeFreq: 'monthly',
    openGraph: {
      title: 'Equipe - Gradual Info',
      description: 'Nossa equipe de especialistas',
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
      description: 'Nossa equipe de especialistas',
      image: '/og-team.svg',
      creator: '@gradualinfo',
      site: '@gradualinfo',
    },
  },

  // ===== PÁGINA DE TECNOLOGIA =====
  '/technology': {
    title: 'Tecnologia - Gradual Info',
    description:
      'Conheça as tecnologias que utilizamos para desenvolver soluções inovadoras. Stack moderna e ferramentas de ponta para seu projeto.',
    keywords: ['tecnologia', 'stack', 'ferramentas', 'inovações', 'desenvolvimento', 'soluções'],
    type: 'website',
    image: '/og-technology.svg',
    canonical: 'https://gradualinfo.com.br/technology',
    priority: 0.8,
    changeFreq: 'monthly',
    openGraph: {
      title: 'Tecnologia - Gradual Info',
      description: 'Nossa stack de tecnologias',
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
      description: 'Nossa stack de tecnologias',
      image: '/og-technology.svg',
      creator: '@gradualinfo',
      site: '@gradualinfo',
    },
  },

  // ===== PÁGINA DE CARREIRAS =====
  '/careers': {
    title: 'Carreiras - Gradual Info',
    description:
      'Junte-se à nossa equipe! Oportunidades de carreira na Gradual Info. Trabalhe com tecnologia de ponta e faça parte de projetos inovadores.',
    keywords: ['carreiras', 'vagas', 'oportunidades', 'trabalho', 'tecnologia', 'inovação'],
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
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web Browser',
    author: {
      '@type': 'Person',
      name: SEOConfig.developer.name,
      url: SEOConfig.developer.website,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Gradual Info',
      url: SEOConfig.project.url,
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
    name: 'Gradual Info',
    url: SEOConfig.project.url,
    logo: `${SEOConfig.project.url}/logo.png`,
    sameAs: [
      'https://twitter.com/gradualinfo',
      'https://linkedin.com/company/gradualinfo',
      'https://github.com/jonathanmartins81/gradualinfo',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'contato@gradualinfo.com.br',
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
      name: 'Gradual Info',
    },
    sameAs: [
      'https://twitter.com/aqua9dev',
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
