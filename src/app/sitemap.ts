/**
 * Sitemap Dinâmico
 *
 * Este arquivo gera o sitemap.xml dinamicamente para o Boilerplate Aqua9.
 * Combina páginas estáticas com páginas dinâmicas geradas a partir de dados.
 *
 * Funcionalidades:
 * - Páginas estáticas predefinidas
 * - Páginas dinâmicas baseadas em dados
 * - Configuração de prioridade e frequência
 * - URLs canônicas otimizadas
 *
 * O sitemap é gerado automaticamente pelo Next.js e inclui:
 * - Páginas estáticas do projeto
 * - Páginas dinâmicas (projetos, posts, etc.)
 * - Configurações de SEO por página
 */

import { MetadataRoute } from 'next';

/**
 * Sitemap dinâmico para SEO
 * Gera automaticamente o sitemap.xml baseado nas rotas da aplicação
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_APP_URL || 'https://gradualinfo.com.br';

  // Rotas estáticas principais
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/team`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/technology`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ];

  // Rotas dinâmicas (exemplo: posts do blog)
  const dynamicRoutes = [
    // Aqui você pode adicionar rotas dinâmicas baseadas em dados
    // Por exemplo, posts do blog, casos de uso, etc.
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/careers`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    },
  ];

  // Rotas de API (não incluídas no sitemap)
  const apiRoutes = [
    // Rotas de API não devem ser incluídas no sitemap
  ];

  // Rotas protegidas (não incluídas no sitemap)
  const protectedRoutes = [
    // Rotas que requerem autenticação não devem ser incluídas
    // /dashboard, /admin, /profile, etc.
  ];

  // Combinar todas as rotas públicas
  const allRoutes = [...staticRoutes, ...dynamicRoutes];

  // Filtrar rotas baseado no ambiente
  if (process.env.NODE_ENV === 'production') {
    // Em produção, incluir apenas rotas públicas
    return allRoutes;
  } else {
    // Em desenvolvimento, incluir rotas de teste
    return [
      ...allRoutes,
      {
        url: `${baseUrl}/test`,
        lastModified: new Date(),
        changeFrequency: 'never' as const,
        priority: 0.1,
      },
    ];
  }
}
