'use client';

import { useEffect } from 'react';
import { DynamicSEOProps } from './types';
import {
  resetDocumentTitle,
  updateCanonicalUrl,
  updateDocumentTitle,
  updateMetaTag,
} from './utils';

/**
 * Componente DynamicSEO para gerenciamento dinâmico de meta tags
 *
 * @example
 * ```tsx
 * <DynamicSEO
 *   title="Página Principal"
 *   description="Descrição da página"
 *   keywords={['react', 'nextjs', 'typescript']}
 * />
 *
 * <DynamicSEO
 *   title="Artigo"
 *   description="Descrição do artigo"
 *   type="article"
 *   author="João Silva"
 *   publishedTime="2024-01-01"
 * />
 * ```
 */
export function DynamicSEO({
  title,
  description,
  keywords,
  image,
  type = 'website',
  canonical,
  author,
  publishedTime,
  modifiedTime,
  section,
  tags,
}: DynamicSEOProps) {
  useEffect(() => {
    updateDocumentTitle(title);

    updateMetaTag('description', description || '');
    updateMetaTag('keywords', keywords?.join(', ') || '');
    updateMetaTag('author', author || '');
    updateMetaTag('robots', 'index, follow');

    updateMetaTag('og:title', title);
    updateMetaTag('og:description', description || '');
    updateMetaTag('og:type', type);
    updateMetaTag('og:image', image || '');
    updateMetaTag('og:url', canonical || window.location.href);

    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description || '');
    updateMetaTag('twitter:image', image || '');

    if (type === 'article') {
      updateMetaTag('article:published_time', publishedTime || '');
      updateMetaTag('article:modified_time', modifiedTime || '');
      updateMetaTag('article:section', section || '');
      updateMetaTag('article:tag', tags?.join(', ') || '');
    }

    if (canonical) {
      updateCanonicalUrl(canonical);
    }

    return () => {
      resetDocumentTitle();
    };
  }, [
    title,
    description,
    keywords,
    image,
    type,
    canonical,
    author,
    publishedTime,
    modifiedTime,
    section,
    tags,
  ]);

  return null;
}

export default DynamicSEO;
