'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface Category {
  id: number;
  name: string;
  icon: string;
  count: string;
  href: string;
}

export default function CategorySlider() {
  const categories: Category[] = [
    { id: 1, name: 'Smartphones', icon: '📱', count: '2.5k', href: '/categoria/smartphones' },
    { id: 2, name: 'Notebooks', icon: '💻', count: '1.8k', href: '/categoria/notebooks' },
    { id: 3, name: 'Moda', icon: '👕', count: '15.2k', href: '/categoria/moda' },
    { id: 4, name: 'Beleza', icon: '💄', count: '9.8k', href: '/categoria/beleza' },
    { id: 5, name: 'Casa', icon: '🏠', count: '12.4k', href: '/categoria/casa' },
    { id: 6, name: 'Esportes', icon: '⚽', count: '6.7k', href: '/categoria/esportes' },
    { id: 7, name: 'Livros', icon: '📚', count: '7.6k', href: '/categoria/livros' },
    { id: 8, name: 'Games', icon: '🎮', count: '4.3k', href: '/categoria/games' },
    { id: 9, name: 'Automotivo', icon: '🚗', count: '3.1k', href: '/categoria/automotivo' },
    { id: 10, name: 'Brinquedos', icon: '🧸', count: '5.2k', href: '/categoria/brinquedos' },
  ];

  return (
    <section className="py-6 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-5 sm:grid-cols-8 lg:grid-cols-10 gap-4">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              className="text-center group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Link href={category.href} className="block">
                <div className="bg-gray-100 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-2 group-hover:bg-orange-100 transition-colors">
                  <span className="text-xl sm:text-2xl">{category.icon}</span>
                </div>
                <h3 className="text-xs sm:text-sm font-medium text-gray-900 mb-1 group-hover:text-orange-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-xs text-gray-500">{category.count}</p>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Ver todas as categorias */}
        <div className="text-center mt-6">
          <Link
            href="/categorias"
            className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium text-sm transition-colors"
          >
            Ver todas as categorias
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
