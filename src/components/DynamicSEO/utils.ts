/**
 * Utilitários para manipulação de meta tags SEO
 */

export function updateMetaTag(name: string, content: string) {
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

export function updateCanonicalUrl(url: string) {
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

export function updateDocumentTitle(title: string) {
  document.title = title;
}

export function resetDocumentTitle() {
  document.title = 'Boilerplate Aqua9 - Next.js Profissional';
}
