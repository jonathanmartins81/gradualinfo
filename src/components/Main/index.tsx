'use client';

import { useTheme } from '@/contexts/ThemeContext';
import Image from 'next/image';

interface MainProps {
  title?: string;
  description?: string;
  technologies?: string[];
}

export function Main({
  title = 'Boilerplate Aqua9',
  description = 'Template Next.js profissional com TypeScript e SEO otimizado',
  technologies = ['Next.js', 'React', 'TypeScript'],
}: MainProps) {
  const { isDark } = useTheme();

  // Selecionar logo baseado no tema
  const logoSrc = isDark ? '/img/logo-dark.svg' : '/img/logo-light.svg';

  return (
    <main className='relative flex flex-col items-center justify-center min-h-screen p-8 text-center bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-500'>

      <Image
        src={logoSrc}
        alt='Aqua9 Logo'
        width={120}
        height={64}
        className='mb-8 transition-all duration-300'
        priority
      />

      <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-gray-100 animate-fade-in transition-colors duration-300'>
        {title}
      </h1>

      <p className='text-lg md:text-xl mb-8 text-gray-700 dark:text-gray-200 max-w-2xl leading-relaxed animate-fade-in transition-colors duration-300'>
        {description}
      </p>

      <div className='flex flex-wrap gap-2 justify-center mb-12 animate-fade-in'>
        {technologies.map((tech, index) => (
          <span
            key={index}
            className='bg-gray-100 dark:bg-gray-800/30 backdrop-blur-sm border border-gray-200 dark:border-gray-600/30 text-gray-800 dark:text-gray-200 text-sm px-4 py-2 rounded-full transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700/40'
          >
            {tech}
          </span>
        ))}
      </div>

      <Image
        src='/img/illustration.svg'
        alt='Hero Illustration'
        width={300}
        height={200}
        className='opacity-80 dark:opacity-60 animate-bounce-in transition-all duration-300 filter dark:invert'
      />

      {/* Informações adicionais sobre o tema */}
      <div className='mt-8 text-sm text-gray-600 dark:text-gray-400 animate-fade-in'>
        <p>✨ Sistema de tema claro/escuro integrado</p>
        <p>🎨 Design system profissional</p>
        <p>⚡ Performance otimizada</p>
      </div>
    </main>
  );
}
