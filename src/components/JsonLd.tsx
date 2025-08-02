export function JsonLd() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Gradual Info Shop',
            url: 'https://gradualinfo.com.br',
            description: 'Clone completo da Shopee Brasil com foco em conversão e vendas',
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
          }),
        }}
      />
    </>
  );
}
