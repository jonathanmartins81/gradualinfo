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

import { sitemapConfig } from '@/utils/SEO';
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
  try {
    // Gera sitemap completo usando a configuração dinâmica
    const sitemapData = await sitemapConfig.generateSitemap();

    // Converte para o formato esperado pelo Next.js
    return sitemapData.map(page => ({
      url: `${sitemapConfig.baseUrl}${page.url}`,
      lastModified: page.lastModified,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    }));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Erro ao gerar sitemap:', error);

    // Fallback: retorna apenas páginas estáticas em caso de erro
    return sitemapConfig.staticPages.map(page => ({
      url: `${sitemapConfig.baseUrl}${page.url}`,
      lastModified: page.lastModified,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    }));
  }
}
