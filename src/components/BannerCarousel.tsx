'use client';

import { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function BannerCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const banners = [
    {
      id: 1,
      title: '🔥 FLASH SALE - Até 90% OFF',
      subtitle: 'Ofertas por tempo limitado - Não perca!',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=400&fit=crop&crop=center',
      color: 'from-red-500 to-pink-500',
      badge: '🔥 HOT'
    },
    {
      id: 2,
      title: '🚚 Frete Grátis para Todo Brasil',
      subtitle: 'Em compras acima de R$ 99 - Aproveite!',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop&crop=center',
      color: 'from-green-500 to-blue-500',
      badge: '🚚 GRÁTIS'
    },
    {
      id: 3,
      title: '✨ Novidades Exclusivas',
      subtitle: 'Produtos únicos que você só encontra aqui',
      image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&h=400&fit=crop&crop=center',
      color: 'from-purple-500 to-indigo-500',
      badge: '✨ NOVO'
    },
    {
      id: 4,
      title: '💎 Coleção Premium',
      subtitle: 'Produtos de alta qualidade com preços especiais',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=400&fit=crop&crop=center',
      color: 'from-orange-500 to-red-500',
      badge: '💎 PREMIUM'
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
                <div className={`relative bg-gradient-to-r ${banner.color} text-white p-6 rounded-xl overflow-hidden`}>
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src={banner.image}
                      alt={banner.title}
                      className="w-full h-full object-cover opacity-20"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  </div>
                  
                  {/* Content Overlay */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-bold mr-3">
                          {banner.badge}
                        </span>
                      </div>
                      <h2 className="text-2xl font-bold mb-2 drop-shadow-lg">{banner.title}</h2>
                      <p className="text-lg opacity-90 mb-4 drop-shadow-md">{banner.subtitle}</p>
                      <button className="bg-white text-orange-500 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg">
                        Ver Ofertas
                      </button>
                    </div>
                    <div className="hidden md:block">
                      <div className="w-32 h-32 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
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
