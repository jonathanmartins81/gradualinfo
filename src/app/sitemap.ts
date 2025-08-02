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

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://gradualinfo.com.br',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
  ];
}
