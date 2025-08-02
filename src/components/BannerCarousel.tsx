'use client';

import { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function BannerCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const banners = [
    {
      id: 1,
      title: 'Flash Sale - Até 90% OFF',
      subtitle: 'Ofertas por tempo limitado',
      image: '/img/illustration.svg',
      color: 'from-red-500 to-pink-500',
      badge: '🔥 HOT'
    },
    {
      id: 2,
      title: 'Frete Grátis',
      subtitle: 'Em compras acima de R$ 99',
      image: '/img/illustration.svg',
      color: 'from-green-500 to-blue-500',
      badge: '🚚 GRÁTIS'
    },
    {
      id: 3,
      title: 'Novidades Chegaram',
      subtitle: 'Produtos exclusivos',
      image: '/img/illustration.svg',
      color: 'from-purple-500 to-indigo-500',
      badge: '✨ NOVO'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [banners.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <div className="relative bg-gray-50 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-xl">
          {/* Carousel Container */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {banners.map((banner) => (
              <div
                key={banner.id}
                className="w-full flex-shrink-0 relative"
              >
                <div className={`bg-gradient-to-r ${banner.color} text-white p-6 rounded-xl`}>
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-bold mr-3">
                          {banner.badge}
                        </span>
                      </div>
                      <h2 className="text-2xl font-bold mb-2">{banner.title}</h2>
                      <p className="text-lg opacity-90 mb-4">{banner.subtitle}</p>
                      <button className="bg-white text-orange-500 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                        Ver Ofertas
                      </button>
                    </div>
                    <div className="hidden md:block">
                      <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center">
                        <span className="text-4xl">🛍️</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-colors"
          >
            <FaChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-colors"
          >
            <FaChevronRight className="w-4 h-4" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${index === currentSlide ? 'bg-white' : 'bg-white/50'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
