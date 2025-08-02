'use client';

import Link from 'next/link';
import { FaBell, FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa';
import SearchBar from './SearchBar';

export default function HeaderShopee() {
  return (
    <header className="bg-orange-500 sticky top-0 z-50 shadow-sm">
      {/* Top Bar - Promoção */}
      <div className="bg-orange-600 text-white py-2 text-center text-sm font-medium">
        🎉 Frete grátis em compras acima de R$ 99! Aproveite as ofertas
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="text-white text-2xl font-bold">🛍️</div>
              <div className="hidden sm:block">
                <img
                  src="/img/logo-dark.svg"
                  alt="Gradual Info Shop"
                  className="h-8 w-auto"
                  onError={(e) => {
                    // Fallback para texto se a imagem não carregar
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const textFallback = target.nextElementSibling as HTMLElement;
                    if (textFallback) {
                      textFallback.style.display = 'block';
                    }
                  }}
                />
                <span className="text-white text-xl font-bold" style={{ display: 'none' }}>
                  Gradual Info Shop
                </span>
              </div>
              <span className="text-white text-xl font-bold sm:hidden">
                Gradual Info Shop
              </span>
            </Link>
          </div>

          {/* Search Bar - Central */}
          <SearchBar />

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            {/* Desktop Icons */}
            <div className="hidden md:flex items-center space-x-6">
              <button className="text-white hover:text-orange-200 transition-colors p-2">
                <FaHeart className="w-5 h-5" />
              </button>
              <button className="text-white hover:text-orange-200 transition-colors p-2">
                <FaBell className="w-5 h-5" />
              </button>
              <button className="text-white hover:text-orange-200 transition-colors p-2 relative">
                <FaShoppingCart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  3
                </span>
              </button>
              <button className="text-white hover:text-orange-200 transition-colors p-2">
                <FaUser className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button className="text-white hover:text-orange-200 p-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Bar */}
      <div className="hidden md:block bg-white border-t border-orange-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-8 py-3 text-sm overflow-x-auto">
            <Link href="#" className="text-gray-700 hover:text-orange-500 transition-colors font-medium whitespace-nowrap">
              Moda Feminina
            </Link>
            <Link href="#" className="text-gray-700 hover:text-orange-500 transition-colors font-medium whitespace-nowrap">
              Eletrônicos
            </Link>
            <Link href="#" className="text-gray-700 hover:text-orange-500 transition-colors font-medium whitespace-nowrap">
              Casa & Jardim
            </Link>
            <Link href="#" className="text-gray-700 hover:text-orange-500 transition-colors font-medium whitespace-nowrap">
              Esportes
            </Link>
            <Link href="#" className="text-gray-700 hover:text-orange-500 transition-colors font-medium whitespace-nowrap">
              Beleza
            </Link>
            <Link href="#" className="text-gray-700 hover:text-orange-500 transition-colors font-medium whitespace-nowrap">
              Brinquedos
            </Link>
            <Link href="#" className="text-gray-700 hover:text-orange-500 transition-colors font-medium whitespace-nowrap">
              Automotivo
            </Link>
            <Link href="#" className="text-gray-700 hover:text-orange-500 transition-colors font-medium whitespace-nowrap">
              Livros
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
