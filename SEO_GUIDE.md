# 🔍 Guia Completo de SEO - Gradual Info

Este guia consolidado reúne todas as estratégias e implementações de SEO para o projeto **Gradual Info**, incluindo SEO dinâmico e otimizações específicas.

## 📋 Índice

- [Visão Geral do SEO](#visão-geral-do-seo)
- [SEO Dinâmico](#seo-dinâmico)
- [Otimizações Técnicas](#otimizações-técnicas)
- [Estratégias de Conteúdo](#estratégias-de-conteúdo)
- [Implementação Prática](#implementação-prática)
- [Monitoramento e Analytics](#monitoramento-e-analytics)

---

## 🎯 Visão Geral do SEO

### **Objetivos do SEO para Gradual Info**

- 🎯 **Posicionamento orgânico** em busca por "gradual info"
- 📈 **Aumento de tráfego** qualificado
- 💼 **Conversão de leads** para serviços
- 🌐 **Presença digital** profissional
- 📱 **Experiência mobile** otimizada

### **Palavras-chave Principais**

```typescript
const KEYWORDS = {
  primary: [
    'gradual info',
    'gradualinfo',
    'gradual info empresa',
    'gradual info serviços',
  ],
  secondary: [
    'gradual info contato',
    'gradual info sobre',
    'gradual info portfolio',
    'gradual info projetos',
  ],
  longTail: [
    'gradual info desenvolvimento web',
    'gradual info consultoria',
    'gradual info tecnologia',
    'gradual info soluções',
  ],
};
```

---

## 🚀 SEO Dinâmico

### **Componente DynamicSEO**

```typescript
interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
}

export const DynamicSEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = [],
  image = '/og-image.svg',
  url,
  type = 'website',
  publishedTime,
  modifiedTime,
  author = 'Gradual Info'
}) => {
  const fullTitle = `${title} | Gradual Info`;
  const fullUrl = url ? `https://gradualinfo.com.br${url}` : 'https://gradualinfo.com.br';
  const fullImage = image.startsWith('http') ? image : `https://gradualinfo.com.br${image}`;

  return (
    <Head>
      {/* Meta Tags Básicas */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Gradual Info" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Gradual Info",
            "url": "https://gradualinfo.com.br",
            "logo": "https://gradualinfo.com.br/img/logo-light.svg",
            "description": "Empresa de tecnologia e consultoria",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "BR"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service"
            }
          })
        }}
      />
    </Head>
  );
};
```

### **Implementação por Página**

```typescript
// Página Inicial
<DynamicSEO
  title="Gradual Info - Tecnologia e Consultoria"
  description="Gradual Info é uma empresa especializada em tecnologia e consultoria, oferecendo soluções inovadoras para seu negócio."
  keywords={['gradual info', 'tecnologia', 'consultoria', 'soluções']}
  image="/og-home.svg"
/>

// Página Sobre
<DynamicSEO
  title="Sobre Nós - Gradual Info"
  description="Conheça a história, missão e valores da Gradual Info. Nossa equipe de especialistas está pronta para transformar seu negócio."
  keywords={['gradual info sobre', 'história', 'missão', 'valores']}
  image="/og-about.svg"
  type="profile"
/>

// Página Portfolio
<DynamicSEO
  title="Portfolio - Gradual Info"
  description="Explore nossos projetos e cases de sucesso. Veja como a Gradual Info tem ajudado empresas a alcançarem seus objetivos."
  keywords={['gradual info portfolio', 'projetos', 'cases', 'sucesso']}
  image="/og-portfolio.svg"
  type="article"
/>
```

---

## ⚡ Otimizações Técnicas

### **Performance e Core Web Vitals**

```typescript
// next.config.js
const nextConfig = {
  // Otimização de imagens
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Compressão e otimização
  compress: true,
  poweredByHeader: false,

  // Headers de segurança e performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};
```

### **Sitemap Dinâmico**

```typescript
// app/sitemap.ts
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://gradualinfo.com.br';

  // Páginas estáticas
  const staticPages = ['', '/about', '/portfolio', '/contact', '/services'].map(
    route => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1 : 0.8,
    })
  );

  // Páginas dinâmicas (portfolio items)
  const portfolioItems = await getPortfolioItems();
  const dynamicPages = portfolioItems.map(item => ({
    url: `${baseUrl}/portfolio/${item.slug}`,
    lastModified: new Date(item.updatedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...dynamicPages];
}
```

### **Robots.txt Otimizado**

```typescript
// app/robots.ts
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/api/', '/_next/', '/private/'],
    },
    sitemap: 'https://gradualinfo.com.br/sitemap.xml',
  };
}
```

---

## 📝 Estratégias de Conteúdo

### **Estrutura de URLs SEO-Friendly**

```typescript
// URLs otimizadas
const URL_STRUCTURE = {
  home: '/',
  about: '/sobre',
  services: '/servicos',
  portfolio: '/portfolio',
  contact: '/contato',
  blog: '/blog',
  caseStudy: '/portfolio/:slug',
  serviceDetail: '/servicos/:service',
};

// Exemplos de URLs
// ✅ Bom: /portfolio/ecommerce-platform
// ❌ Ruim: /portfolio/123
// ✅ Bom: /servicos/desenvolvimento-web
// ❌ Ruim: /services/web-dev
```

### **Conteúdo Estruturado**

```typescript
// Schema.org para empresa
const OrganizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Gradual Info',
  alternateName: 'GradualInfo',
  url: 'https://gradualinfo.com.br',
  logo: 'https://gradualinfo.com.br/img/logo-light.svg',
  description:
    'Empresa de tecnologia e consultoria especializada em soluções digitais',
  foundingDate: '2024',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'BR',
    addressRegion: 'São Paulo',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'contato@gradualinfo.com.br',
    availableLanguage: 'Portuguese',
  },
  sameAs: [
    'https://linkedin.com/company/gradualinfo',
    'https://github.com/gradualinfo',
  ],
};

// Schema.org para serviços
const ServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Desenvolvimento Web',
  description: 'Desenvolvimento de websites e aplicações web modernas',
  provider: {
    '@type': 'Organization',
    name: 'Gradual Info',
  },
  areaServed: 'BR',
  serviceType: 'Web Development',
};
```

---

## 🛠️ Implementação Prática

### **Hooks de SEO**

```typescript
// hooks/useSEO.ts
export const useSEO = (pageData: PageSEOData) => {
  const { title, description, keywords, image, url } = pageData;

  useEffect(() => {
    // Atualizar título da página
    document.title = title;

    // Atualizar meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    // Atualizar meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords.join(', '));
    }

    // Atualizar Open Graph
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }

    const ogDescription = document.querySelector(
      'meta[property="og:description"]'
    );
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }

    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage && image) {
      ogImage.setAttribute('content', image);
    }

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl && url) {
      ogUrl.setAttribute('content', url);
    }
  }, [title, description, keywords, image, url]);
};
```

### **Utilitários de SEO**

```typescript
// utils/seo.ts
export const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
};

export const truncateDescription = (
  text: string,
  maxLength: number = 160
): string => {
  if (text.length <= maxLength) return text;

  const truncated = text.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');

  return lastSpace > 0
    ? truncated.substring(0, lastSpace) + '...'
    : truncated + '...';
};

export const generateCanonicalUrl = (path: string): string => {
  const baseUrl = 'https://gradualinfo.com.br';
  return `${baseUrl}${path}`;
};

export const validateSEOData = (data: SEOData): boolean => {
  const { title, description } = data;

  if (!title || title.length < 10 || title.length > 60) {
    console.warn('SEO: Título deve ter entre 10 e 60 caracteres');
    return false;
  }

  if (!description || description.length < 50 || description.length > 160) {
    console.warn('SEO: Descrição deve ter entre 50 e 160 caracteres');
    return false;
  }

  return true;
};
```

---

## 📊 Monitoramento e Analytics

### **Google Analytics 4**

```typescript
// lib/analytics.ts
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_location: url,
    });
  }
};

export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Hook para tracking automático
export const usePageTracking = () => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageview(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
};
```

### **Search Console**

```typescript
// Componente para verificação do Search Console
export const SearchConsoleVerification = () => {
  return (
    <Head>
      <meta
        name="google-site-verification"
        content="SEU_CODIGO_DE_VERIFICACAO"
      />
    </Head>
  );
};
```

### **Métricas de Performance**

```typescript
// hooks/usePerformance.ts
export const usePerformance = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Core Web Vitals
      const observer = new PerformanceObserver(list => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            console.log('LCP:', entry.startTime);
          }
          if (entry.entryType === 'first-input') {
            console.log('FID:', entry.processingStart - entry.startTime);
          }
        }
      });

      observer.observe({
        entryTypes: ['largest-contentful-paint', 'first-input'],
      });

      return () => observer.disconnect();
    }
  }, []);
};
```

---

## 🎯 Checklist de SEO

### **Técnico**

- [ ] URLs amigáveis implementadas
- [ ] Sitemap.xml gerado dinamicamente
- [ ] Robots.txt configurado
- [ ] Meta tags otimizadas
- [ ] Schema.org implementado
- [ ] Core Web Vitals otimizados
- [ ] Mobile-first design
- [ ] HTTPS implementado
- [ ] Compressão ativada
- [ ] Cache configurado

### **Conteúdo**

- [ ] Títulos únicos e descritivos
- [ ] Meta descriptions otimizadas
- [ ] Palavras-chave estrategicamente posicionadas
- [ ] Conteúdo original e relevante
- [ ] Imagens com alt text
- [ ] Links internos otimizados
- [ ] Estrutura de headings (H1-H6)
- [ ] Rich snippets implementados

### **Monitoramento**

- [ ] Google Analytics configurado
- [ ] Search Console conectado
- [ ] Core Web Vitals monitorados
- [ ] Relatórios de performance
- [ ] Análise de palavras-chave
- [ ] Monitoramento de rankings
- [ ] Análise de tráfego orgânico

---

## 📚 Recursos Adicionais

### **Ferramentas Recomendadas**

- [Google Search Console](https://search.google.com/search-console)
- [Google Analytics](https://analytics.google.com)
- [PageSpeed Insights](https://pagespeed.web.dev)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Schema.org Validator](https://validator.schema.org)

### **Documentação**

- [Next.js SEO](https://nextjs.org/learn/seo/introduction-to-seo)
- [Google SEO Guide](https://developers.google.com/search/docs)
- [Schema.org](https://schema.org)

---

## 📞 Suporte

Para dúvidas sobre SEO:

- **Desenvolvedor:** Jonathan Simão (Aqua9)
- **Email:** jonathan@aqua9.com.br
- **Website:** https://aqua9.com.br

---

_Última atualização: 02/08/2025_
_Versão: 1.0_
