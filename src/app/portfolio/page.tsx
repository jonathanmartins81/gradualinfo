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

import { DynamicSEO } from '@/components/DynamicSEO';
import { generateDynamicSEO } from '@/utils/SEO';
import type { Metadata } from 'next';

/**
 * Metadados específicos para a página Portfólio
 *
 * Configura SEO otimizado para esta página específica
 */
export const metadata: Metadata = generateDynamicSEO('/portfolio');

/**
 * Interface para projeto do portfólio
 */
interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  url?: string;
  github?: string;
  featured: boolean;
}

/**
 * Dados dos projetos (simulando API)
 */
const projects: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'E-commerce Platform',
    description:
      'Plataforma completa de e-commerce com Next.js, TypeScript e Stripe.',
    image: '/projects/ecommerce.jpg',
    category: 'E-commerce',
    technologies: ['Next.js', 'TypeScript', 'Stripe'],
    url: 'https://ecommerce-example.com',
    github: 'https://github.com/aqua9/ecommerce-platform',
    featured: true,
  },
  {
    id: 'dashboard-admin',
    title: 'Dashboard Administrativo',
    description:
      'Dashboard moderno para administração de sistemas empresariais.',
    image: '/projects/dashboard.jpg',
    category: 'Dashboard',
    technologies: ['React', 'TypeScript', 'Chart.js', 'Material-UI'],
    url: 'https://dashboard-example.com',
    github: 'https://github.com/aqua9/dashboard-admin',
    featured: true,
  },
  {
    id: 'blog-platform',
    title: 'Plataforma de Blog',
    description: 'Sistema de blog com CMS integrado e SEO otimizado.',
    image: '/projects/blog.jpg',
    category: 'Blog',
    technologies: ['Next.js', 'Contentful', 'SEO'],
    url: 'https://blog-example.com',
    github: 'https://github.com/aqua9/blog-platform',
    featured: false,
  },
  {
    id: 'mobile-app',
    title: 'Aplicativo Mobile',
    description: 'Aplicativo mobile híbrido com React Native.',
    image: '/projects/mobile.jpg',
    category: 'Mobile',
    technologies: ['React Native', 'TypeScript', 'Expo', 'Firebase'],
    url: 'https://mobile-example.com',
    github: 'https://github.com/aqua9/mobile-app',
    featured: false,
  },
];

/**
 * Componente PortfolioPage
 *
 * Renderiza a página de portfólio com lista de projetos.
 *
 * @returns Página de portfólio com SEO dinâmico
 */
export default function PortfolioPage() {
  return (
    <>
      {/* SEO dinâmico para esta página */}
      <DynamicSEO
        title='Portfólio - Boilerplate Aqua9'
        description='Portfólio de projetos desenvolvidos com o Boilerplate Aqua9. Exemplos de aplicações e sites profissionais com Next.js, TypeScript e SEO otimizado.'
        keywords={[
          'portfólio',
          'projetos',
          'aplicações',
          'sites',
          'exemplos',
          'nextjs',
          'typescript',
        ]}
        type='website'
        image='/og-portfolio.png'
        canonical='https://aqua9.com.br/portfolio'
      />

      {/* Conteúdo da página */}
      <div className='min-h-screen bg-gray-50 py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          {/* Header */}
          <div className='text-center mb-12'>
            <h1 className='text-4xl font-bold text-gray-900 mb-4'>
              Portfólio de Projetos
            </h1>
            <p className='text-xl text-gray-600'>
              Projetos desenvolvidos com o Boilerplate Aqua9
            </p>
          </div>

          {/* Projetos em Destaque */}
          <div className='mb-12'>
            <h2 className='text-2xl font-semibold text-gray-900 mb-6'>
              Projetos em Destaque
            </h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
              {projects
                .filter(project => project.featured)
                .map(project => (
                  <ProjectCard key={project.id} project={project} featured />
                ))}
            </div>
          </div>

          {/* Todos os Projetos */}
          <div>
            <h2 className='text-2xl font-semibold text-gray-900 mb-6'>
              Todos os Projetos
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {projects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/**
 * Componente ProjectCard
 *
 * Renderiza um card de projeto individual.
 *
 * @param project - Dados do projeto
 * @param featured - Se é um projeto em destaque
 * @returns Card do projeto
 */
function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden ${featured ? 'lg:col-span-1' : ''}`}
    >
      {/* Imagem do projeto */}
      <div className='h-48 bg-gray-200 flex items-center justify-center'>
        <div className='text-gray-500 text-center'>
          <div className='text-4xl mb-2'>📱</div>
          <p className='text-sm'>{project.title}</p>
        </div>
      </div>

      {/* Conteúdo do projeto */}
      <div className='p-6'>
        <div className='flex items-center justify-between mb-2'>
          <h3 className='text-xl font-semibold text-gray-900'>
            {project.title}
          </h3>
          {project.featured && (
            <span className='bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded'>
              Destaque
            </span>
          )}
        </div>

        <p className='text-gray-600 mb-4'>{project.description}</p>

        {/* Categoria */}
        <div className='mb-4'>
          <span className='bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded'>
            {project.category}
          </span>
        </div>

        {/* Tecnologias */}
        <div className='mb-4'>
          <div className='flex flex-wrap gap-1'>
            {project.technologies.map(tech => (
              <span
                key={tech}
                className='bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded'
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className='flex space-x-2'>
          {project.url && (
            <a
              href={project.url}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700'
            >
              Ver Projeto
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200'
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
