'use client';

import { FaFire, FaStar, FaTruck, FaUsers } from 'react-icons/fa';
import ProductCardShopee from './ProductCardShopee';

export default function BestSellers() {
  const bestSellers = [
    {
      id: 7,
      name: "Conjunto Esportivo Premium",
      originalPrice: "299,90",
      currentPrice: "149,90",
      discount: "50% OFF",
      badge: "🔥 MAIS VENDIDO",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=center",
      sold: "8.2k",
      rating: 4.9,
      reviews: 1247,
      freeShipping: true,
      isNew: false
    },
    {
      id: 8,
      name: "Relógio Smartwatch",
      originalPrice: "599,90",
      currentPrice: "299,90",
      discount: "50% OFF",
      badge: "⚡ OFERTA",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&crop=center",
      sold: "5.7k",
      rating: 4.8,
      reviews: 892,
      freeShipping: true,
      isNew: false
    },
    {
      id: 9,
      name: "Fone de Ouvido Bluetooth",
      originalPrice: "199,90",
      currentPrice: "89,90",
      discount: "55% OFF",
      badge: "💎 PREMIUM",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop&crop=center",
      sold: "12.3k",
      rating: 4.7,
      reviews: 2156,
      freeShipping: true,
      isNew: false
    },
    {
      id: 10,
      name: "Perfume Feminino",
      originalPrice: "399,90",
      currentPrice: "199,90",
      discount: "50% OFF",
      badge: "⭐ TOP",
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop&crop=center",
      sold: "3.8k",
      rating: 4.9,
      reviews: 567,
      freeShipping: true,
      isNew: false
    }
  ];

  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <FaFire className="text-red-500 w-6 h-6" />
            <h2 className="text-3xl font-bold text-gray-900">🔥 MAIS VENDIDOS</h2>
            <FaFire className="text-red-500 w-6 h-6" />
          </div>
          <p className="text-gray-600 text-lg">Os produtos que nossos clientes mais amam!</p>

          {/* Elementos de confiança */}
          <div className="flex items-center justify-center space-x-6 mt-4 text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <FaUsers className="text-green-500" />
              <span>+50.000 clientes satisfeitos</span>
            </div>
            <div className="flex items-center space-x-1">
              <FaStar className="text-yellow-500" />
              <span>4.8/5 avaliação média</span>
            </div>
            <div className="flex items-center space-x-1">
              <FaTruck className="text-blue-500" />
              <span>Entrega em 24h</span>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {bestSellers.map((product) => (
            <ProductCardShopee key={product.id} product={product} />
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-8">
          <button className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            🛍️ VER TODOS OS MAIS VENDIDOS
          </button>
        </div>
      </div>
    </section>
  );
}
