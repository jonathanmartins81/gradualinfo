/**
 * Página Sobre - Boilerplate Aqua9
 *
 * Esta página apresenta informações sobre o Boilerplate Aqua9
 * e o desenvolvedor Jonathan Simão.
 *
 * Funcionalidades:
 * - SEO dinâmico configurado
 * - Informações sobre o projeto
 * - Perfil do desenvolvedor
 * - Tecnologias utilizadas
 */

import { DynamicSEO } from '@/components/DynamicSEO';
import { generateDynamicSEO } from '@/utils/SEO';
import type { Metadata } from 'next';

/**
 * Metadados específicos para a página Sobre
 *
 * Configura SEO otimizado para esta página específica
 */
export const metadata: Metadata = generateDynamicSEO('/about');

/**
 * Componente AboutPage
 *
 * Renderiza a página sobre com informações do projeto e desenvolvedor.
 *
 * @returns Página sobre com SEO dinâmico
 */
export default function AboutPage() {
  return (
    <>
      {/* SEO dinâmico para esta página */}
      <DynamicSEO
        title='Sobre - Boilerplate Aqua9'
        description='Conheça mais sobre o Boilerplate Aqua9, desenvolvido por Jonathan Simão. Template profissional para projetos Next.js com TypeScript e SEO otimizado.'
        keywords={[
          'sobre',
          'aqua9',
          'jonathan simão',
          'desenvolvedor',
          'template',
          'nextjs',
        ]}
        type='website'
        image='/og-about.svg'
        canonical='https://aqua9.com.br/about'
      />

      {/* Conteúdo da página */}
      <div className='min-h-screen bg-gray-50 py-12'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          {/* Header */}
          <div className='text-center mb-12'>
            <h1 className='text-4xl font-bold text-gray-900 mb-4'>
              Sobre o Boilerplate Aqua9
            </h1>
            <p className='text-xl text-gray-600'>
              Template profissional para projetos Next.js
            </p>
          </div>

          {/* Seção do Projeto */}
          <div className='bg-white rounded-lg shadow-md p-8 mb-8'>
            <h2 className='text-2xl font-semibold text-gray-900 mb-4'>
              O Projeto
            </h2>
            <p className='text-gray-700 mb-4'>
              O Boilerplate Aqua9 é um template profissional desenvolvido para
              acelerar o desenvolvimento de projetos Next.js. Foi criado com
              foco em qualidade, performance e SEO otimizado.
            </p>
            <p className='text-gray-700'>
              Este boilerplate inclui todas as ferramentas e configurações
              necessárias para projetos modernos, desde desenvolvimento até
              produção.
            </p>
          </div>

          {/* Seção do Desenvolvedor */}
          <div className='bg-white rounded-lg shadow-md p-8 mb-8'>
            <h2 className='text-2xl font-semibold text-gray-900 mb-4'>
              Desenvolvedor
            </h2>
            <div className='flex items-center mb-4'>
              <div className='w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4'>
                JS
              </div>
              <div>
                <h3 className='text-xl font-semibold text-gray-900'>
                  Jonathan Simão
                </h3>
                <p className='text-gray-600'>Full Stack Developer</p>
              </div>
            </div>
            <p className='text-gray-700 mb-4'>
              Desenvolvedor apaixonado por criar soluções web modernas e
              eficientes. Especializado em React, Next.js, TypeScript e
              tecnologias relacionadas.
            </p>
            <div className='flex space-x-4'>
              <a
                href='https://aqua9.com.br'
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-600 hover:text-blue-800'
              >
                Website
              </a>
              <a
                href='https://github.com/jonathansimao'
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-600 hover:text-blue-800'
              >
                GitHub
              </a>
              <a
                href='https://linkedin.com/in/jonathansimao'
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-600 hover:text-blue-800'
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Seção de Tecnologias */}
          <div className='bg-white rounded-lg shadow-md p-8 mb-8'>
            <h2 className='text-2xl font-semibold text-gray-900 mb-4'>
              Tecnologias
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
              {[
                {
                  name: 'Next.js',
                  description: 'Framework React para produção',
                },
                { name: 'TypeScript', description: 'JavaScript tipado' },

                { name: 'Jest', description: 'Framework de testes' },
                {
                  name: 'Storybook',
                  description: 'Documentação de componentes',
                },
                { name: 'ESLint', description: 'Linting de código' },
                { name: 'Prettier', description: 'Formatação de código' },
                {
                  name: 'SEO Otimizado',
                  description: 'Metadados e structured data',
                },
              ].map(tech => (
                <div
                  key={tech.name}
                  className='border border-gray-200 rounded-lg p-4'
                >
                  <h3 className='font-semibold text-gray-900 mb-2'>
                    {tech.name}
                  </h3>
                  <p className='text-sm text-gray-600'>{tech.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Seção de Recursos */}
          <div className='bg-white rounded-lg shadow-md p-8'>
            <h2 className='text-2xl font-semibold text-gray-900 mb-4'>
              Recursos Incluídos
            </h2>
            <ul className='space-y-2 text-gray-700'>
              <li>• Configuração completa de SEO dinâmico</li>
              <li>• Sistema de componentes reutilizáveis</li>
              <li>• Testes automatizados com Jest</li>
              <li>• Documentação com Storybook</li>
              <li>• Qualidade de código com ESLint e Prettier</li>
              <li>• Sitemap e robots.txt automáticos</li>
              <li>• Structured Data (JSON-LD)</li>
              <li>• Open Graph e Twitter Cards</li>
              <li>• Configuração de VS Code</li>
              <li>• Git hooks com Lefthook</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
