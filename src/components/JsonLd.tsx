import { jsonLdConfig } from '@/utils/SEO';

export function JsonLd() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdConfig.softwareApplication),
        }}
      />

      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdConfig.organization),
        }}
      />

      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdConfig.person),
        }}
      />

      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://gradualinfo.com.br',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Gradual Info',
                item: 'https://gradualinfo.com.br',
              },
            ],
          }),
        }}
      />

      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Gradual Info',
            url: 'https://gradualinfo.com.br',
            description:
              'Website oficial da Gradual Info - Empresa especializada em soluções de informação e tecnologia',
            author: {
              '@type': 'Person',
              name: 'Jonathan Simão',
              url: 'https://aqua9.com.br',
            },
            publisher: {
              '@type': 'Organization',
              name: 'Gradual Info',
              url: 'https://gradualinfo.com.br',
            },
            potentialAction: {
              '@type': 'SearchAction',
              target: {
                '@type': 'EntryPoint',
                urlTemplate:
                  'https://gradualinfo.com.br/search?q={search_term_string}',
              },
              'query-input': 'required name=search_term_string',
            },
          }),
        }}
      />
    </>
  );
}
