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
                item: 'https://aqua9.com.br',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Boilerplate Aqua9',
                item: 'https://aqua9.com.br',
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
            name: 'Boilerplate Aqua9',
            url: 'https://aqua9.com.br',
            description:
              'Boilerplate Next.js profissional da Aqua9 para projetos internos',
            author: {
              '@type': 'Person',
              name: 'Jonathan Simão',
              url: 'https://aqua9.com.br',
            },
            publisher: {
              '@type': 'Organization',
              name: 'Aqua9',
              url: 'https://aqua9.com.br',
            },
            potentialAction: {
              '@type': 'SearchAction',
              target: {
                '@type': 'EntryPoint',
                urlTemplate:
                  'https://aqua9.com.br/search?q={search_term_string}',
              },
              'query-input': 'required name=search_term_string',
            },
          }),
        }}
      />
    </>
  );
}
