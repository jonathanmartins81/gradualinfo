'use client';

import { useTheme } from '@/contexts/ThemeContext';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FaBars, FaBell, FaHeart, FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';

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
  const [searchQuery, setSearchQuery] = useState('');

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
    <nav className='bg-orange-500 sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Top Bar - Promoção */}
        <div className='bg-orange-600 text-white py-2 text-center text-sm font-medium'>
          🎉 Frete grátis em compras acima de R$ 99! Aproveite as ofertas
        </div>

        {/* Main Navigation */}
        <div className='flex items-center justify-between h-16'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <Link
              href='/'
              className='flex items-center space-x-3 text-xl font-bold text-white'
            >
              {!imageError ? (
                <Image
                  src={isDark ? '/img/logo-dark.svg' : '/img/logo-light.svg'}
                  alt='Gradual Info Shop Logo'
                  width={120}
                  height={32}
                  className='h-8 w-auto transition-all duration-300'
                  priority
                  onError={() => setImageError(true)}
                />
              ) : (
                <span className='text-white text-xl font-bold'>
                  🛍️ Gradual Info Shop
                </span>
              )}
            </Link>
          </div>

          {/* Search Bar - Estilo Shopee */}
          <div className='flex-1 max-w-2xl mx-8'>
            <div className='relative'>
              <div className='flex items-center bg-gray-100 rounded-full px-4 py-2'>
                <FaSearch className='text-gray-400 w-4 h-4 mr-3' />
                <input
                  type='text'
                  placeholder='O que você está procurando?'
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className='flex-1 bg-transparent text-gray-900 placeholder-gray-500 focus:outline-none text-sm'
                />
                <button className='bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium hover:bg-orange-600 transition-colors'>
                  Buscar
                </button>
              </div>
            </div>
          </div>

          {/* Right Side Icons */}
          <div className='flex items-center space-x-4'>
            {/* Desktop Navigation */}
            <div className='hidden md:flex items-center space-x-6'>
              <button className='text-white hover:text-orange-200 transition-colors p-2'>
                <FaHeart className='w-5 h-5' />
              </button>
              <button className='text-white hover:text-orange-200 transition-colors p-2'>
                <FaBell className='w-5 h-5' />
              </button>
              <button className='text-white hover:text-orange-200 transition-colors p-2 relative'>
                <FaShoppingCart className='w-5 h-5' />
                <span className='absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center'>
                  3
                </span>
              </button>
              <button className='text-white hover:text-orange-200 transition-colors p-2'>
                <FaUser className='w-5 h-5' />
              </button>
            </div>

            {/* Mobile menu button */}
            <div className='md:hidden'>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className='text-white hover:text-orange-200 p-2'
              >
                <FaBars className='w-5 h-5' />
              </button>
            </div>
          </div>
        </div>

        {/* Categories Bar */}
        <div className='hidden md:block bg-white border-t border-orange-400'>
          <div className='flex items-center space-x-8 py-3 text-sm'>
            <Link href='#' className='text-gray-700 hover:text-orange-500 transition-colors font-medium'>
              Moda Feminina
            </Link>
            <Link href='#' className='text-gray-700 hover:text-orange-500 transition-colors font-medium'>
              Eletrônicos
            </Link>
            <Link href='#' className='text-gray-700 hover:text-orange-500 transition-colors font-medium'>
              Casa & Jardim
            </Link>
            <Link href='#' className='text-gray-700 hover:text-orange-500 transition-colors font-medium'>
              Esportes
            </Link>
            <Link href='#' className='text-gray-700 hover:text-orange-500 transition-colors font-medium'>
              Beleza
            </Link>
            <Link href='#' className='text-gray-700 hover:text-orange-500 transition-colors font-medium'>
              Brinquedos
            </Link>
            <Link href='#' className='text-gray-700 hover:text-orange-500 transition-colors font-medium'>
              Automotivo
            </Link>
            <Link href='#' className='text-gray-700 hover:text-orange-500 transition-colors font-medium'>
              Livros
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className='md:hidden bg-white border-t border-orange-400'>
          <div className='px-4 py-3 space-y-3'>
            <div className='flex items-center space-x-4'>
              <button className='text-gray-700 hover:text-orange-500 transition-colors p-2'>
                <FaHeart className='w-5 h-5' />
              </button>
              <button className='text-gray-700 hover:text-orange-500 transition-colors p-2'>
                <FaBell className='w-5 h-5' />
              </button>
              <button className='text-gray-700 hover:text-orange-500 transition-colors p-2 relative'>
                <FaShoppingCart className='w-5 h-5' />
                <span className='absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center'>
                  3
                </span>
              </button>
              <button className='text-gray-700 hover:text-orange-500 transition-colors p-2'>
                <FaUser className='w-5 h-5' />
              </button>
            </div>

            {/* Mobile Categories */}
            <div className='grid grid-cols-2 gap-2 pt-3 border-t border-gray-200'>
              <Link href='#' className='text-gray-700 hover:text-orange-500 transition-colors text-sm py-2'>
                Moda Feminina
              </Link>
              <Link href='#' className='text-gray-700 hover:text-orange-500 transition-colors text-sm py-2'>
                Eletrônicos
              </Link>
              <Link href='#' className='text-gray-700 hover:text-orange-500 transition-colors text-sm py-2'>
                Casa & Jardim
              </Link>
              <Link href='#' className='text-gray-700 hover:text-orange-500 transition-colors text-sm py-2'>
                Esportes
              </Link>
              <Link href='#' className='text-gray-700 hover:text-orange-500 transition-colors text-sm py-2'>
                Beleza
              </Link>
              <Link href='#' className='text-gray-700 hover:text-orange-500 transition-colors text-sm py-2'>
                Brinquedos
              </Link>
              <Link href='#' className='text-gray-700 hover:text-orange-500 transition-colors text-sm py-2'>
                Automotivo
              </Link>
              <Link href='#' className='text-gray-700 hover:text-orange-500 transition-colors text-sm py-2'>
                Livros
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
