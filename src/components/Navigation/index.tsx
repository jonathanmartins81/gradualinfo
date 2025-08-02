'use client';

import { useTheme } from '@/contexts/ThemeContext';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

interface NavigationItem {
  label: string;
  href: string;
  description: string;
  category: 'pages' | 'components' | 'demos' | 'admin';
}

const navigationItems: NavigationItem[] = [
  // Menu limpo - sem páginas
];

const categoryLabels = {
  pages: 'Páginas',
  components: 'Componentes',
  demos: 'Outros Demonstração',
  admin: 'Administração',
};

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [imageError, setImageError] = useState(false);
  const { isDark } = useTheme();

  // Agrupar itens por categoria
  const groupedItems = navigationItems.reduce(
    (acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category].push(item);
      return acc;
    },
    {} as Record<string, NavigationItem[]>
  );

  const isActive = (href: string) => pathname === href;

  return (
    <nav className='bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 backdrop-blur-sm bg-white/95 dark:bg-gray-900/95'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-14 sm:h-16'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <Link
              href='/'
              className='flex items-center space-x-3 text-xl font-bold text-gray-900 dark:text-white'
            >
              {!imageError ? (
                <Image
                  src={isDark ? '/img/logo-dark.svg' : '/img/logo-light.svg'}
                  alt='Aqua9 Logo'
                  width={120}
                  height={32}
                  className='h-6 sm:h-8 w-auto transition-all duration-300'
                  priority
                  onError={() => setImageError(true)}
                />
              ) : (
                <span className='text-blue-600 dark:text-blue-400 text-lg sm:text-xl font-bold'>
                  🛍️ Gradual Info Shop
                </span>
              )}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            {/* Categorias */}
            {Object.entries(groupedItems).map(([category, items]) => (
              <div key={category} className='relative group'>
                <button
                  onClick={() => setActiveCategory(category)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${activeCategory === category
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                    }`}
                >
                  {categoryLabels[category as keyof typeof categoryLabels]}
                </button>

                {/* Dropdown */}
                <div className='absolute top-full left-0 mt-1 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50'>
                  <div className='py-2'>
                    {items.map(item => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`block px-4 py-2 text-sm transition-colors ${isActive(item.href)
                          ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                          : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700'
                          }`}
                      >
                        <div className='font-medium'>{item.label}</div>
                        <div className='text-xs text-gray-500 dark:text-gray-400 mt-1'>
                          {item.description}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden flex items-center space-x-4'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
            >
              <svg
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                {isOpen ? (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                ) : (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className='md:hidden animate-slide-in'>
            <div className='px-2 pt-2 pb-3 space-y-1 bg-gray-50/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-lg mt-2 border border-gray-200 dark:border-gray-700 shadow-lg'>
              {/* Categorias móveis */}
              {Object.entries(groupedItems).map(([category, items]) => (
                <div key={category} className='mb-4'>
                  <h3 className='px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider'>
                    {categoryLabels[category as keyof typeof categoryLabels]}
                  </h3>
                  {items.map(item => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive(item.href)
                        ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                        : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                        }`}
                    >
                      <div>{item.label}</div>
                      <div className='text-sm text-gray-500 dark:text-gray-400 mt-1'>
                        {item.description}
                      </div>
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
