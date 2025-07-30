import { MetadataRoute } from 'next';

/**
 * Robots.txt dinâmico para SEO
 * Configura as regras de indexação para crawlers
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl =
    process.env.NEXT_PUBLIC_APP_URL || 'https://aqua9-boilerplate.vercel.app';

  // Configurações baseadas no ambiente
  const isProduction = process.env.NODE_ENV === 'production';

  if (isProduction) {
    // Configuração para produção - permitir indexação
    return {
      rules: [
        {
          userAgent: '*',
          allow: ['/', '/about', '/portfolio', '/contact', '/blog', '/docs'],
          disallow: [
            '/api/',
            '/admin/',
            '/dashboard/',
            '/login',
            '/register',
            '/_next/',
            '/private/',
            '/*.json',
            '/*.xml',
          ],
        },
        {
          userAgent: 'Googlebot',
          allow: '/',
          disallow: ['/api/', '/admin/', '/dashboard/', '/login', '/register'],
        },
        {
          userAgent: 'Bingbot',
          allow: '/',
          disallow: ['/api/', '/admin/', '/dashboard/', '/login', '/register'],
        },
      ],
      sitemap: `${baseUrl}/sitemap.xml`,
      host: baseUrl,
    };
  } else {
    // Configuração para desenvolvimento - bloquear indexação
    return {
      rules: [
        {
          userAgent: '*',
          disallow: '/',
        },
      ],
      sitemap: `${baseUrl}/sitemap.xml`,
      host: baseUrl,
    };
  }
}
