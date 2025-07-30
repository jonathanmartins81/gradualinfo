'use client';

import { DynamicSEOConfig } from '@/utils/SEO';
import { useEffect } from 'react';

interface DynamicSEOProps extends Partial<DynamicSEOConfig> {
  title: string;
  description?: string;
  keywords?: string[];
  image?: string;
  type?: 'website' | 'article' | 'product' | 'profile';
  canonical?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

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
    document.title = title;

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
      document.title = 'Boilerplate Aqua9 - Next.js Profissional';
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

function updateMetaTag(name: string, content: string) {
  if (!content) return;

  let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
  if (!meta) {
    meta = document.querySelector(
      `meta[property="${name}"]`
    ) as HTMLMetaElement;
  }

  if (!meta) {
    meta = document.createElement('meta');
    if (
      name.startsWith('og:') ||
      name.startsWith('twitter:') ||
      name.startsWith('article:')
    ) {
      meta.setAttribute('property', name);
    } else {
      meta.setAttribute('name', name);
    }
    document.head.appendChild(meta);
  }

  meta.setAttribute('content', content);
}

function updateCanonicalUrl(url: string) {
  let canonical = document.querySelector(
    'link[rel="canonical"]'
  ) as HTMLLinkElement;

  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }

  canonical.setAttribute('href', url);
}

export function useDynamicSEO(config: DynamicSEOConfig) {
  useEffect(() => {
    document.title = config.title;

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
