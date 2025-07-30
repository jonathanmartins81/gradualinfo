/**
 * Página Dinâmica de Projeto - Boilerplate Aqua9
 *
 * Esta página renderiza detalhes de um projeto específico
 * baseado no slug da URL.
 *
 * Funcionalidades:
 * - SEO dinâmico baseado no projeto
 * - Dados do projeto carregados dinamicamente
 * - URLs canônicas específicas
 * - Structured data para projetos
 */

import { DynamicSEO } from '@/components';
import { generateDynamicSEO } from '@/utils/SEO';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

/**
 * Interface para projeto detalhado
 */
interface ProjectDetails {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  category: string;
  technologies: string[];
  url?: string;
  github?: string;
  featured: boolean;
  publishedDate: string;
  updatedDate: string;
  author: string;
  tags: string[];
  features: string[];
  challenges: string[];
  solutions: string[];
}

/**
 * Dados dos projetos (simulando API)
 */
const projectsData: Record<string, ProjectDetails> = {
  'ecommerce-platform': {
    slug: 'ecommerce-platform',
    title: 'E-commerce Platform',
    description:
      'Plataforma completa de e-commerce com Next.js, TypeScript e Stripe.',
    longDescription:
      'Uma plataforma de e-commerce moderna e escalável desenvolvida com as melhores práticas de desenvolvimento web. O projeto inclui sistema de pagamentos, gestão de produtos, carrinho de compras e painel administrativo.',
    image: '/projects/ecommerce.svg',
    category: 'E-commerce',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Prisma'],
    url: 'https://ecommerce-example.com',
    github: 'https://github.com/aqua9/ecommerce-platform',
    featured: true,
    publishedDate: '2024-01-15',
    updatedDate: '2024-01-20',
    author: 'Jonathan Simão',
    tags: ['e-commerce', 'nextjs', 'typescript', 'stripe', 'fullstack'],
    features: [
      'Sistema de pagamentos integrado com Stripe',
      'Gestão completa de produtos e categorias',
      'Carrinho de compras persistente',
      'Painel administrativo responsivo',
      'SEO otimizado para produtos',
      'Sistema de avaliações e reviews',
    ],
    challenges: [
      'Integração complexa com múltiplas APIs de pagamento',
      'Otimização de performance para grandes catálogos',
      'Implementação de sistema de busca avançado',
    ],
    solutions: [
      'Arquitetura modular com microserviços',
      'Implementação de cache Redis para performance',
      'Sistema de busca com Elasticsearch',
    ],
  },
  'dashboard-admin': {
    slug: 'dashboard-admin',
    title: 'Dashboard Administrativo',
    description:
      'Dashboard moderno para administração de sistemas empresariais.',
    longDescription:
      'Dashboard administrativo completo desenvolvido para empresas que precisam gerenciar múltiplos sistemas e dados em uma interface unificada. Inclui gráficos interativos, relatórios em tempo real e gestão de usuários.',
    image: '/projects/dashboard.svg',
    category: 'Dashboard',
    technologies: [
      'React',
      'TypeScript',
      'Chart.js',
      'Material-UI',
      'Node.js',
      'MongoDB',
    ],
    url: 'https://dashboard-example.com',
    github: 'https://github.com/aqua9/dashboard-admin',
    featured: true,
    publishedDate: '2024-01-10',
    updatedDate: '2024-01-18',
    author: 'Jonathan Simão',
    tags: ['dashboard', 'admin', 'react', 'typescript', 'analytics'],
    features: [
      'Gráficos interativos com Chart.js',
      'Relatórios em tempo real',
      'Gestão de usuários e permissões',
      'Sistema de notificações',
      'Exportação de dados em múltiplos formatos',
      'Interface responsiva e acessível',
    ],
    challenges: [
      'Processamento de grandes volumes de dados',
      'Sincronização em tempo real entre usuários',
      'Implementação de sistema de permissões granular',
    ],
    solutions: [
      'WebSockets para atualizações em tempo real',
      'Paginação e lazy loading para performance',
      'Sistema de roles e permissions baseado em JWT',
    ],
  },
};

/**
 * Gera metadados dinâmicos para a página do projeto
 *
 * @param params - Parâmetros da rota (slug do projeto)
 * @returns Metadados específicos do projeto
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData[slug];

  if (!project) {
    return {
      title: 'Projeto não encontrado',
      description: 'O projeto solicitado não foi encontrado.',
    };
  }

  return generateDynamicSEO(`/portfolio/${slug}`, {
    slug: project.title,
  });
}

/**
 * Gera rotas estáticas para todos os projetos
 *
 * @returns Array de slugs dos projetos
 */
export async function generateStaticParams() {
  return Object.keys(projectsData).map(slug => ({
    slug,
  }));
}

/**
 * Componente ProjectPage
 *
 * Renderiza a página detalhada de um projeto específico.
 *
 * @param params - Parâmetros da rota (slug do projeto)
 * @returns Página do projeto com SEO dinâmico
 */
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectsData[slug];

  if (!project) {
    notFound();
  }

  return (
    <>
      {/* SEO dinâmico para esta página */}
      <DynamicSEO
        title={`${project.title} - Boilerplate Aqua9`}
        description={project.description}
        keywords={[...project.tags, 'projeto', 'portfolio', 'desenvolvimento']}
        type='article'
        image={project.image}
        canonical={`https://aqua9.com.br/portfolio/${project.slug}`}
        author={project.author}
        publishedTime={project.publishedDate}
        modifiedTime={project.updatedDate}
        section={project.category}
        tags={project.tags}
      />

      {/* Conteúdo da página */}
      <div className='min-h-screen bg-gray-50 py-12'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          {/* Header do projeto */}
          <div className='bg-white rounded-lg shadow-md p-8 mb-8'>
            <div className='flex items-center justify-between mb-4'>
              <div>
                <span className='bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full'>
                  {project.category}
                </span>
                {project.featured && (
                  <span className='ml-2 bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full'>
                    Destaque
                  </span>
                )}
              </div>
              <div className='text-sm text-gray-500'>
                <div>
                  Publicado:{' '}
                  {new Date(project.publishedDate).toLocaleDateString('pt-BR')}
                </div>
                <div>
                  Atualizado:{' '}
                  {new Date(project.updatedDate).toLocaleDateString('pt-BR')}
                </div>
              </div>
            </div>

            <h1 className='text-3xl font-bold text-gray-900 mb-4'>
              {project.title}
            </h1>

            <p className='text-lg text-gray-600 mb-6'>
              {project.longDescription}
            </p>

            {/* Tecnologias */}
            <div className='mb-6'>
              <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                Tecnologias Utilizadas
              </h3>
              <div className='flex flex-wrap gap-2'>
                {project.technologies.map(tech => (
                  <span
                    key={tech}
                    className='bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className='flex space-x-4'>
              {project.url && (
                <a
                  href={project.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700'
                >
                  Ver Projeto
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200'
                >
                  Ver Código
                </a>
              )}
            </div>
          </div>

          {/* Detalhes do projeto */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {/* Funcionalidades */}
            <div className='bg-white rounded-lg shadow-md p-6'>
              <h2 className='text-xl font-semibold text-gray-900 mb-4'>
                Funcionalidades
              </h2>
              <ul className='space-y-2'>
                {project.features.map((feature, index) => (
                  <li key={index} className='flex items-start'>
                    <span className='text-green-500 mr-2'>✓</span>
                    <span className='text-gray-700'>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Desafios e Soluções */}
            <div className='bg-white rounded-lg shadow-md p-6'>
              <h2 className='text-xl font-semibold text-gray-900 mb-4'>
                Desafios e Soluções
              </h2>

              <div className='mb-4'>
                <h3 className='text-lg font-medium text-gray-900 mb-2'>
                  Desafios
                </h3>
                <ul className='space-y-1'>
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className='flex items-start'>
                      <span className='text-red-500 mr-2'>⚠</span>
                      <span className='text-gray-700 text-sm'>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className='text-lg font-medium text-gray-900 mb-2'>
                  Soluções
                </h3>
                <ul className='space-y-1'>
                  {project.solutions.map((solution, index) => (
                    <li key={index} className='flex items-start'>
                      <span className='text-blue-500 mr-2'>💡</span>
                      <span className='text-gray-700 text-sm'>{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className='bg-white rounded-lg shadow-md p-6 mt-8'>
            <h2 className='text-xl font-semibold text-gray-900 mb-4'>Tags</h2>
            <div className='flex flex-wrap gap-2'>
              {project.tags.map(tag => (
                <span
                  key={tag}
                  className='bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full'
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
