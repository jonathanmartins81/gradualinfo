import '@testing-library/jest-dom/vitest';
import { describe, expect, it } from 'vitest';
import {
  SEOConfig,
  generateDynamicSEO,
  generatePageSEO,
  jsonLdConfig,
  routeSEOConfig,
  sitemapConfig,
} from './SEO';

describe('SEO Configuration', () => {
  it('should have correct developer information', () => {
    expect(SEOConfig.developer.name).toBe('Jonathan Simão');
    expect(SEOConfig.developer.email).toBe('contato@aqua9.com.br');
    expect(SEOConfig.developer.website).toBe('https://aqua9.com.br');
    expect(SEOConfig.developer.twitter).toBe('@aqua9dev');
  });

  it('should have correct project information', () => {
    expect(SEOConfig.project.name).toBe('Aqua9 Boilerplate v2');
    expect(SEOConfig.project.version).toBe('2.0.0');
    expect(SEOConfig.project.url).toBe('https://aqua9.com.br');
    expect(SEOConfig.project.repository).toBe(
      'https://github.com/aqua9/boilerplate_aqua9_v2'
    );
  });

  it('should have required keywords', () => {
    expect(SEOConfig.keywords).toContain('nextjs');
    expect(SEOConfig.keywords).toContain('react');
    expect(SEOConfig.keywords).toContain('typescript');
    expect(SEOConfig.keywords).toContain('aqua9');
  });
});

describe('generateDynamicSEO', () => {
  it('should generate metadata for home page', () => {
    const metadata = generateDynamicSEO('/');

    expect(metadata.title).toBe('Aqua9 Boilerplate v2 - Next.js Profissional');
    expect(metadata.description).toContain('Template moderno');
    expect(metadata.keywords).toContain('nextjs');
    expect(metadata.openGraph?.title).toBe(
      'Aqua9 Boilerplate v2 - Next.js Profissional'
    );
  });

  it('should generate metadata for about page', () => {
    const metadata = generateDynamicSEO('/about');

    expect(metadata.title).toBe('Sobre - Aqua9 Boilerplate v2');
    expect(metadata.alternates?.canonical).toBe('https://aqua9.com.br/about');
  });

  it('should generate metadata for portfolio page', () => {
    const metadata = generateDynamicSEO('/portfolio');

    expect(metadata.title).toBe('Portfólio - Aqua9 Boilerplate v2');
    expect(metadata.alternates?.canonical).toBe(
      'https://aqua9.com.br/portfolio'
    );
  });

  it('should generate metadata for dynamic portfolio item', () => {
    const metadata = generateDynamicSEO('/portfolio/test-project', {
      slug: 'test-project',
    });

    expect(metadata.title).toBe('Aqua9 Boilerplate v2 - Next.js Profissional');
    expect(metadata.openGraph?.url).toBe('https://aqua9.com.br');
  });
});

describe('generatePageSEO', () => {
  it('should generate page metadata with title and description', () => {
    const metadata = generatePageSEO('Test Page', 'Test description', [
      'test',
      'page',
    ]);

    expect(metadata.title).toBe('Test Page');
    expect(metadata.description).toBe('Test description');
    expect(metadata.keywords).toEqual(['test', 'page']);
  });

  it('should generate page metadata with default values', () => {
    const metadata = generatePageSEO('Test Page');

    expect(metadata.title).toBe('Test Page');
    expect(metadata.description).toBeDefined();
    expect(metadata.keywords).toBeDefined();
  });
});

describe('routeSEOConfig', () => {
  it('should have correct home page config', () => {
    const config = routeSEOConfig['/'];

    expect(config.title).toBe('Aqua9 Boilerplate v2 - Next.js Profissional');
    expect(config.canonical).toContain('https://aqua9.com.br');
  });

  it('should have correct about page config', () => {
    const config = routeSEOConfig['/about'];

    expect(config.title).toBe('Sobre - Aqua9 Boilerplate v2');
    expect(config.canonical).toBe('https://aqua9.com.br/about');
    expect(config.keywords).toContain('sobre');
    expect(config.keywords).toContain('aqua9');
  });

  it('should have correct portfolio page config', () => {
    const config = routeSEOConfig['/portfolio'];

    expect(config.title).toBe('Portfólio - Aqua9 Boilerplate v2');
    expect(config.canonical).toBe('https://aqua9.com.br/portfolio');
    expect(config.keywords).toContain('portfólio');
    expect(config.keywords).toContain('projetos');
  });

  it('should have correct dynamic portfolio config', () => {
    const config = routeSEOConfig['/portfolio/[slug]'];

    expect(config.title).toBe('Projeto {slug} - Aqua9 Boilerplate v2');
    expect(config.canonical).toBe('https://aqua9.com.br/portfolio/{slug}');
    expect(config.keywords).toContain('projeto');
    expect(config.keywords).toContain('detalhes');
  });
});

describe('jsonLdConfig', () => {
  it('should have correct software application config', () => {
    const config = jsonLdConfig.softwareApplication;

    expect(config['@type']).toBe('SoftwareApplication');
    expect(config.name).toBe('Aqua9 Boilerplate v2');
    expect(config.applicationCategory).toBe('DeveloperApplication');
    expect(config.operatingSystem).toBe('Web Browser');
  });

  it('should have correct organization config', () => {
    const config = jsonLdConfig.organization;

    expect(config['@type']).toBe('Organization');
    expect(config.name).toBe('Aqua9');
    expect(config.url).toBe('https://aqua9.com.br');
    expect(config.logo).toBe('https://aqua9.com.br/logo.png');
  });

  it('should have correct person config', () => {
    const config = jsonLdConfig.person;

    expect(config['@type']).toBe('Person');
    expect(config.name).toBe('Jonathan Simão');
    expect(config.url).toBe('https://aqua9.com.br');
    expect(config.jobTitle).toBe('Full Stack Developer');
  });
});

describe('sitemapConfig', () => {
  it('should have correct sitemap configuration', () => {
    expect(sitemapConfig.baseUrl).toBe('https://aqua9.com.br');
    expect(sitemapConfig.staticPages).toHaveLength(4);
  });

  it('should have correct priority and changeFreq for static pages', () => {
    const homePage = sitemapConfig.staticPages.find(page => page.url === '/');
    const aboutPage = sitemapConfig.staticPages.find(
      page => page.url === '/about'
    );
    const portfolioPage = sitemapConfig.staticPages.find(
      page => page.url === '/portfolio'
    );

    expect(homePage?.priority).toBe(1.0);
    expect(homePage?.changeFrequency).toBe('weekly');
    expect(aboutPage?.priority).toBe(0.8);
    expect(aboutPage?.changeFrequency).toBe('monthly');
    expect(portfolioPage?.priority).toBe(0.9);
    expect(portfolioPage?.changeFrequency).toBe('weekly');
  });

  it('should have generateDynamicPages function', () => {
    expect(typeof sitemapConfig.generateDynamicPages).toBe('function');
  });

  it('should have generateSitemap function', () => {
    expect(typeof sitemapConfig.generateSitemap).toBe('function');
  });
});

describe('SEO Edge Cases', () => {
  it('should handle empty route gracefully', () => {
    const metadata = generateDynamicSEO('');

    expect(metadata.title).toBeDefined();
    expect(metadata.description).toBeDefined();
  });

  it('should handle unknown route gracefully', () => {
    const metadata = generateDynamicSEO('/unknown-route');

    expect(metadata.title).toBeDefined();
    expect(metadata.description).toBeDefined();
  });

  it('should handle null parameters gracefully', () => {
    const metadata = generateDynamicSEO('/portfolio/test', undefined);

    expect(metadata.title).toBeDefined();
    expect(metadata.description).toBeDefined();
  });

  it('should generate metadata with custom parameters', () => {
    const metadata = generateDynamicSEO('/portfolio/custom-project', {
      slug: 'custom-project',
      title: 'Custom Project',
      description: 'Custom project description',
    });

    expect(metadata.title).toBeDefined();
    expect(metadata.description).toBeDefined();
  });
});

describe('routeSEOConfig', () => {
  it('should have correct about page config', () => {
    const config = routeSEOConfig['/about'];

    expect(config.title).toBe('Sobre - Aqua9 Boilerplate v2');
    expect(config.canonical).toContain('https://aqua9.com.br');
  });

  it('should have correct portfolio page config', () => {
    const config = routeSEOConfig['/portfolio'];

    expect(config.title).toBe('Portfólio - Aqua9 Boilerplate v2');
    expect(config.canonical).toContain('https://aqua9.com.br');
  });
});

describe('jsonLdConfig', () => {
  it('should have correct software application config', () => {
    const config = jsonLdConfig.softwareApplication;

    expect(config['@type']).toBe('SoftwareApplication');
    expect(config.name).toBe('Aqua9 Boilerplate v2');
    expect(config.applicationCategory).toBe('DeveloperApplication');
  });

  it('should have correct organization config', () => {
    const config = jsonLdConfig.organization;

    expect(config['@type']).toBe('Organization');
    expect(config.name).toBe('Aqua9');
    expect(config.url).toBe('https://aqua9.com.br');
    expect(config['@context']).toBe('https://schema.org');
  });

  it('should have correct person config', () => {
    const config = jsonLdConfig.person;

    expect(config['@type']).toBe('Person');
    expect(config.name).toBe('Jonathan Simão');
    expect(config['@context']).toBe('https://schema.org');
  });
});

describe('sitemapConfig', () => {
  it('should have correct base URL', () => {
    expect(sitemapConfig.baseUrl).toBe('https://aqua9.com.br');
  });

  it('should include static pages', () => {
    const staticPages = sitemapConfig.staticPages;
    expect(staticPages.some(page => page.url === '/')).toBe(true);
    expect(staticPages.some(page => page.url === '/about')).toBe(true);
    expect(staticPages.some(page => page.url === '/portfolio')).toBe(true);
  });

  it('should have correct home page properties', () => {
    const homePage = sitemapConfig.staticPages.find(page => page.url === '/');
    expect(homePage).toBeDefined();
    expect(homePage?.changeFrequency).toBe('weekly');
    expect(homePage?.priority).toBe(1.0);
  });
});
