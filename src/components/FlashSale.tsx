'use client';

import { useEffect, useState } from 'react';
import { FaClock, FaFire } from 'react-icons/fa';
import ProductCardShopee from './ProductCardShopee';

export default function FlashSale() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 30,
    seconds: 45
  });

  const flashSaleProducts = [
    {
      id: 1,
      name: "Blusa Cropped Estampada",
      originalPrice: "199,90",
      currentPrice: "89,90",
      discount: "55% OFF",
      badge: "🔥 HOT",
      image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&h=400&fit=crop&crop=center",
      sold: "2.5k",
      rating: 4.8,
      reviews: 156,
      freeShipping: true
    },
    {
      id: 2,
      name: "Calça Jeans Skinny",
      originalPrice: "249,90",
      currentPrice: "129,90",
      discount: "48% OFF",
      badge: "⚡ FLASH",
      image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=400&fit=crop&crop=center",
      sold: "1.8k",
      rating: 4.6,
      reviews: 89,
      freeShipping: true
    },
    {
      id: 3,
      name: "Vestido Longo Floral",
      originalPrice: "299,90",
      currentPrice: "149,90",
      discount: "50% OFF",
      badge: "💎 PREMIUM",
      image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&h=400&fit=crop&crop=center",
      sold: "3.2k",
      rating: 4.9,
      reviews: 234,
      freeShipping: true
    },
    {
      id: 4,
      name: "Jaqueta de Couro Sintético",
      originalPrice: "399,90",
      currentPrice: "199,90",
      discount: "50% OFF",
      badge: "⭐ TOP",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop&crop=center",
      sold: "1.2k",
      rating: 4.7,
      reviews: 67,
      freeShipping: true
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              // Reset timer when it reaches zero
              hours = 2;
              minutes = 30;
              seconds = 45;
            }
          }
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-8 bg-gradient-to-r from-red-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="bg-red-500 text-white p-2 rounded-full animate-pulse">
              <FaFire className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">🔥 FLASH SALE</h2>
              <p className="text-gray-600">Ofertas relâmpago que terminam em breve!</p>
            </div>
          </div>

          {/* Countdown Timer - Mais atrativo */}
          <div className="flex items-center space-x-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-lg shadow-lg">
            <FaClock className="text-white w-4 h-4" />
            <span className="text-sm font-medium">⚡ TERMINA EM:</span>
            <div className="flex space-x-1">
              <div className="bg-white text-red-500 px-2 py-1 rounded text-sm font-bold animate-pulse">
                {timeLeft.hours.toString().padStart(2, '0')}
              </div>
              <span className="text-white font-bold">:</span>
              <div className="bg-white text-red-500 px-2 py-1 rounded text-sm font-bold animate-pulse">
                {timeLeft.minutes.toString().padStart(2, '0')}
              </div>
              <span className="text-white font-bold">:</span>
              <div className="bg-white text-red-500 px-2 py-1 rounded text-sm font-bold animate-pulse">
                {timeLeft.seconds.toString().padStart(2, '0')}
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {flashSaleProducts.map((product) => (
            <ProductCardShopee key={product.id} product={product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <button className="bg-red-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-600 transition-colors">
            Ver Todas as Ofertas
          </button>
        </div>
      </div>
    </section>
  );
}
