import type { MetadataRoute } from 'next';
import { robotsConfig } from '@/utils/SEO';

/**
 * Gera o arquivo robots.txt
 *
 * O robots.txt é um arquivo que instrui os bots de busca
 * sobre quais páginas podem ou não ser indexadas
 *
 * Acessível em: /robots.txt
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: robotsConfig.userAgent,
        allow: robotsConfig.allow,
        disallow: robotsConfig.disallow,
      },
    ],
    sitemap: robotsConfig.sitemap,
    host: robotsConfig.host,
  };
}
