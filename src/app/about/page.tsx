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

import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sobre - Aqua9 Boilerplate v2',
  description:
    'Conheça mais sobre o Aqua9 Boilerplate v2, um template Next.js profissional com TypeScript e SEO otimizado.',
  openGraph: {
    title: 'Sobre - Aqua9 Boilerplate v2',
    description:
      'Conheça mais sobre o Aqua9 Boilerplate v2, um template Next.js profissional com TypeScript e SEO otimizado.',
    type: 'website',
    images: ['/og-image.svg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sobre - Aqua9 Boilerplate v2',
    description:
      'Conheça mais sobre o Aqua9 Boilerplate v2, um template Next.js profissional com TypeScript e SEO otimizado.',
    images: ['/og-image.svg'],
  },
};

export default function AboutPage() {
  const features = [
    {
      title: 'Next.js 14',
      description:
        'Framework React com App Router, Server Components e otimizações automáticas.',
      icon: '⚡',
    },
    {
      title: 'TypeScript',
      description:
        'Tipagem estática para maior segurança e melhor experiência de desenvolvimento.',
      icon: '🔒',
    },
    {
      title: 'SEO Otimizado',
      description:
        'Meta tags dinâmicas, sitemap.xml, robots.txt e Open Graph configurados.',
      icon: '🎯',
    },
    {
      title: 'Tailwind CSS',
      description:
        'Framework CSS utilitário para desenvolvimento rápido e responsivo.',
      icon: '🎨',
    },
    {
      title: 'Testes Automatizados',
      description: 'Vitest para testes unitários e Playwright para testes E2E.',
      icon: '🧪',
    },
    {
      title: 'Segurança',
      description:
        'Middleware de segurança, autenticação JWT e proteção contra ataques.',
      icon: '🛡️',
    },
  ];

  const team = [
    {
      name: 'João Silva',
      role: 'Desenvolvedor Full Stack',
      avatar: '/img/avatar-1.jpg',
      bio: 'Especialista em React, Next.js e TypeScript com mais de 5 anos de experiência.',
    },
    {
      name: 'Maria Santos',
      role: 'UX/UI Designer',
      avatar: '/img/avatar-2.jpg',
      bio: 'Designer apaixonada por criar experiências digitais intuitivas e acessíveis.',
    },
    {
      name: 'Pedro Costa',
      role: 'DevOps Engineer',
      avatar: '/img/avatar-3.jpg',
      bio: 'Especialista em infraestrutura, CI/CD e otimização de performance.',
    },
  ];

  return (
    <div className='min-h-screen bg-white dark:bg-gray-50'>
      {/* Hero Section */}
      <section className='py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800'>
        <div className='container mx-auto px-6 text-center'>
          <h1 className='text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6'>
            Sobre o Aqua9 Boilerplate
          </h1>
          <p className='text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8'>
            Um template Next.js profissional desenvolvido para acelerar o
            desenvolvimento de aplicações web modernas, com foco em performance,
            SEO e experiência do usuário.
          </p>
          <div className='flex flex-wrap justify-center gap-4'>
            <Link
              href='/portfolio'
              className='bg-blue-600 dark:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 dark:hover:bg-blue-700 transition-colors'
            >
              Ver Portfólio
            </Link>
            <Link
              href='/contact'
              className='bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-8 py-3 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors'
            >
              Entre em Contato
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-20'>
        <div className='container mx-auto px-6'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6'>
              Por que escolher o Aqua9?
            </h2>
            <p className='text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto'>
              Desenvolvido com as melhores práticas e tecnologias modernas para
              oferecer uma base sólida para seus projetos.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {features.map((feature, index) => (
              <div
                key={index}
                className='bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/20 p-8 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow'
              >
                <div className='w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center text-2xl mb-6'>
                  {feature.icon}
                </div>
                <h3 className='text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4'>
                  {feature.title}
                </h3>
                <p className='text-gray-700 dark:text-gray-400'>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='py-20 bg-gray-50 dark:bg-gray-900'>
        <div className='container mx-auto px-6'>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-8 text-center'>
            <div>
              <div className='text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2'>
                100+
              </div>
              <div className='text-gray-700 dark:text-gray-300'>
                Projetos Entregues
              </div>
            </div>
            <div>
              <div className='text-4xl font-bold text-green-600 dark:text-green-400 mb-2'>
                50+
              </div>
              <div className='text-gray-700 dark:text-gray-300'>
                Clientes Satisfeitos
              </div>
            </div>
            <div>
              <div className='text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2'>
                5+
              </div>
              <div className='text-gray-700 dark:text-gray-300'>
                Anos de Experiência
              </div>
            </div>
            <div>
              <div className='text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2'>
                24/7
              </div>
              <div className='text-gray-700 dark:text-gray-300'>
                Suporte Técnico
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className='py-20'>
        <div className='container mx-auto px-6'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6'>
              Nossa Equipe
            </h2>
            <p className='text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto'>
              Profissionais experientes e apaixonados por tecnologia,
              comprometidos em entregar soluções de qualidade.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {team.map((member, index) => (
              <div
                key={index}
                className='bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/20 p-8 border border-gray-200 dark:border-gray-700 text-center'
              >
                <div className='w-20 h-20 bg-blue-600 dark:bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4 mx-auto mb-6'>
                  {member.name.charAt(0)}
                </div>
                <h3 className='text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2'>
                  {member.name}
                </h3>
                <p className='text-blue-600 dark:text-blue-400 font-medium mb-4'>
                  {member.role}
                </p>
                <p className='text-gray-700 dark:text-gray-400'>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-br from-blue-600 to-indigo-700 dark:from-gray-800 dark:to-gray-900'>
        <div className='container mx-auto px-6 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold text-white mb-6'>
            Pronto para começar?
          </h2>
          <p className='text-xl text-blue-100 dark:text-gray-300 max-w-2xl mx-auto mb-8'>
            Entre em contato conosco e descubra como podemos ajudar a
            transformar suas ideias em realidade.
          </p>
          <Link
            href='/contact'
            className='bg-white dark:bg-gray-800 text-blue-600 dark:text-gray-100 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors'
          >
            Fale Conosco
          </Link>
        </div>
      </section>
    </div>
  );
}
