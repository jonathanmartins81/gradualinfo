/**
 * Página Portfólio - Boilerplate Aqua9
 *
 * Esta página apresenta o portfólio de projetos desenvolvidos
 * com o Boilerplate Aqua9.
 *
 * Funcionalidades:
 * - SEO dinâmico configurado
 * - Lista de projetos
 * - Filtros por categoria
 * - Links para projetos
 */

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfólio - Aqua9 Boilerplate',
  description:
    'Explore nossos projetos e trabalhos realizados com as melhores tecnologias web',
  keywords: [
    'portfólio',
    'projetos',
    'desenvolvimento web',
    'Next.js',
    'React',
    'TypeScript',
  ],
  openGraph: {
    title: 'Portfólio - Aqua9 Boilerplate',
    description:
      'Explore nossos projetos e trabalhos realizados com as melhores tecnologias web',
    type: 'website',
    url: 'https://aqua9.com.br/portfolio',
    images: [
      {
        url: '/og-portfolio.svg',
        width: 1200,
        height: 630,
        alt: 'Portfólio Aqua9 Boilerplate',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfólio - Aqua9 Boilerplate',
    description:
      'Explore nossos projetos e trabalhos realizados com as melhores tecnologias web',
    images: ['/og-portfolio.svg'],
  },
};

// ===== DADOS MOCK =====
const projects = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description:
      'Plataforma completa de e-commerce com Next.js, TypeScript e Stripe',
    image: '/projects/ecommerce.svg',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS'],
    category: 'web',
    featured: true,
    link: '#',
  },
  {
    id: '2',
    title: 'Dashboard Analytics',
    description:
      'Dashboard de analytics com gráficos interativos e relatórios em tempo real',
    image: '/projects/dashboard.svg',
    technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
    category: 'web',
    featured: true,
    link: '#',
  },
  {
    id: '3',
    title: 'Mobile App',
    description: 'Aplicativo móvel nativo para iOS e Android com React Native',
    image: '/projects/mobile.svg',
    technologies: ['React Native', 'TypeScript', 'Firebase', 'Redux'],
    category: 'mobile',
    featured: false,
    link: '#',
  },
  {
    id: '4',
    title: 'Blog Platform',
    description: 'Plataforma de blog com CMS headless e SEO otimizado',
    image: '/projects/blog.svg',
    technologies: ['Next.js', 'Strapi', 'GraphQL', 'Vercel'],
    category: 'web',
    featured: false,
    link: '#',
  },
];

export default function PortfolioPage() {
  return (
    <div className='min-h-screen bg-white dark:bg-gray-50'>
      {/* Hero Section */}
      <section className='bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-20'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='text-center'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6'>
              Nosso Portfólio
            </h1>
            <p className='text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed'>
              Explore nossos projetos e trabalhos realizados com as melhores
              tecnologias web
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className='py-20'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4'>
              Projetos em Destaque
            </h2>
            <p className='text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto'>
              Conheça alguns dos nossos projetos mais importantes e inovadores
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-16'>
            {projects
              .filter(project => project.featured)
              .map(project => (
                <div
                  key={project.id}
                  className='bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300'
                >
                  <div className='aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center'>
                    <img
                      src={project.image}
                      alt={project.title}
                      className='w-32 h-32 object-contain'
                    />
                  </div>
                  <div className='p-6'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-gray-100 mb-2'>
                      {project.title}
                    </h3>
                    <p className='text-gray-600 dark:text-gray-400 mb-4'>
                      {project.description}
                    </p>
                    <div className='flex flex-wrap gap-2 mb-4'>
                      {project.technologies.map(tech => (
                        <span
                          key={tech}
                          className='px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full'
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      className='inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium'
                    >
                      Ver projeto
                      <svg
                        className='ml-2 w-4 h-4'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className='py-20 bg-gray-50 dark:bg-gray-900'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4'>
              Todos os Projetos
            </h2>
            <p className='text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto'>
              Uma visão completa de todos os nossos trabalhos e realizações
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {projects.map(project => (
              <div
                key={project.id}
                className='bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300'
              >
                <div className='aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center'>
                  <img
                    src={project.image}
                    alt={project.title}
                    className='w-24 h-24 object-contain'
                  />
                </div>
                <div className='p-6'>
                  <h3 className='text-lg font-bold text-gray-900 dark:text-gray-100 mb-2'>
                    {project.title}
                  </h3>
                  <p className='text-gray-600 dark:text-gray-400 mb-4 text-sm'>
                    {project.description}
                  </p>
                  <div className='flex flex-wrap gap-1 mb-4'>
                    {project.technologies.slice(0, 3).map(tech => (
                      <span
                        key={tech}
                        className='px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded'
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className='px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded'>
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  <a
                    href={project.link}
                    className='text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium'
                  >
                    Ver detalhes →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20'>
        <div className='max-w-4xl mx-auto px-6 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6'>
            Pronto para começar seu projeto?
          </h2>
          <p className='text-lg text-gray-600 dark:text-gray-400 mb-8'>
            Vamos transformar suas ideias em realidade com as melhores
            tecnologias e práticas
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <a
              href='/contact'
              className='bg-blue-600 dark:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 dark:hover:bg-blue-700 transition-colors'
            >
              Fale Conosco
            </a>
            <a
              href='/about'
              className='bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-8 py-3 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors'
            >
              Saiba Mais
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
