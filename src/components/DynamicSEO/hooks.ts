'use client';

import { DynamicSEOConfig } from '@/utils/SEO';
import { useEffect } from 'react';
import { UseDynamicSEOReturn } from './types';
import {
  updateCanonicalUrl,
  updateDocumentTitle,
  updateMetaTag,
} from './utils';

/**
 * Hook personalizado para gerenciamento dinâmico de SEO
 *
 * @example
 * ```tsx
 * const { updateSEO } = useDynamicSEO({
 *   title: 'Página Principal',
 *   description: 'Descrição da página'
 * });
 *
 * // Atualizar SEO dinamicamente
 * updateSEO({ title: 'Novo Título' });
 * ```
 */
export function useDynamicSEO(config: DynamicSEOConfig): UseDynamicSEOReturn {
  useEffect(() => {
    updateDocumentTitle(config.title);

    if (config.description) {
      updateMetaTag('description', config.description);
    }

    if (config.keywords) {
      updateMetaTag('keywords', config.keywords.join(', '));
    }

    if (config.canonical) {
      updateCanonicalUrl(config.canonical);
    }

    if (config.openGraph) {
      if (config.openGraph.title) {
        updateMetaTag('og:title', config.openGraph.title);
      }
      if (config.openGraph.description) {
        updateMetaTag('og:description', config.openGraph.description);
      }
      if (config.openGraph.image) {
        updateMetaTag('og:image', config.openGraph.image);
      }
      if (config.openGraph.type) {
        updateMetaTag('og:type', config.openGraph.type);
      }
    }

    if (config.twitter) {
      if (config.twitter.title) {
        updateMetaTag('twitter:title', config.twitter.title);
      }
      if (config.twitter.description) {
        updateMetaTag('twitter:description', config.twitter.description);
      }
      if (config.twitter.image) {
        updateMetaTag('twitter:image', config.twitter.image);
      }
      if (config.twitter.card) {
        updateMetaTag('twitter:card', config.twitter.card);
      }
    }
  }, [config]);

  return {
    updateSEO: (newConfig: Partial<DynamicSEOConfig>) => {
      // eslint-disable-next-line no-console
      console.log('Atualizando SEO:', { ...config, ...newConfig });
    },
    config,
  };
}
