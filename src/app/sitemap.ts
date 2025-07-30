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
 * Gera o sitemap.xml dinamicamente
 *
 * Combina páginas estáticas com páginas dinâmicas
 * para criar um sitemap completo e otimizado.
 *
 * @returns Array de entradas do sitemap
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://aqua9.com.br';
  const currentDate = new Date();

  try {
    // Páginas estáticas
    const staticPages = [
      {
        url: baseUrl,
        lastModified: currentDate,
        changeFrequency: 'weekly' as const,
        priority: 1,
      },
      {
        url: `${baseUrl}/about`,
        lastModified: currentDate,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      },
      {
        url: `${baseUrl}/portfolio`,
        lastModified: currentDate,
        changeFrequency: 'weekly' as const,
        priority: 0.9,
      },
    ];

    // Páginas dinâmicas de projetos
    const projects = [
      {
        slug: 'ecommerce',
        title: 'E-Commerce Platform',
        updatedAt: new Date('2024-03-15'),
      },
      {
        slug: 'dashboard',
        title: 'Analytics Dashboard',
        updatedAt: new Date('2024-03-10'),
      },
      {
        slug: 'blog',
        title: 'Tech Blog Platform',
        updatedAt: new Date('2024-03-05'),
      },
      {
        slug: 'mobile',
        title: 'Mobile Task Manager',
        updatedAt: new Date('2024-03-01'),
      },
    ];

    const projectPages = projects.map(project => ({
      url: `${baseUrl}/portfolio/${project.slug}`,
      lastModified: project.updatedAt,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));

    return [...staticPages, ...projectPages];
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Erro ao gerar sitemap:', error);

    // Fallback: retorna apenas páginas estáticas em caso de erro
    return [
      {
        url: baseUrl,
        lastModified: currentDate,
        changeFrequency: 'weekly' as const,
        priority: 1,
      },
      {
        url: `${baseUrl}/about`,
        lastModified: currentDate,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      },
      {
        url: `${baseUrl}/portfolio`,
        lastModified: currentDate,
        changeFrequency: 'weekly' as const,
        priority: 0.9,
      },
    ];
  }
}
