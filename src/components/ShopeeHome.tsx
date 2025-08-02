'use client';

import { motion } from 'framer-motion';
import { FaGift, FaPercent, FaShieldAlt, FaTruck } from 'react-icons/fa';
import BannerCarousel from './BannerCarousel';
import FlashSale from './FlashSale';
import ProductCardShopee from './ProductCardShopee';

export default function ShopeeHome() {
  const categories = [
    { name: "Moda Feminina", icon: "👗", count: "15.2k" },
    { name: "Eletrônicos", icon: "📱", count: "8.9k" },
    { name: "Casa & Jardim", icon: "🏠", count: "12.4k" },
    { name: "Esportes", icon: "⚽", count: "6.7k" },
    { name: "Beleza", icon: "💄", count: "9.8k" },
    { name: "Brinquedos", icon: "🎮", count: "4.3k" },
    { name: "Automotivo", icon: "🚗", count: "3.1k" },
    { name: "Livros", icon: "📚", count: "7.6k" }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Blusa Cropped Estampada",
      originalPrice: "199,90",
      currentPrice: "89,90",
      discount: "55% OFF",
      badge: "🔥 HOT",
      image: "/img/illustration.svg",
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
      image: "/img/illustration.svg",
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
      image: "/img/illustration.svg",
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
      image: "/img/illustration.svg",
      sold: "1.2k",
      rating: 4.7,
      reviews: 67,
      freeShipping: true
    },
    {
      id: 5,
      name: "Tênis Esportivo",
      originalPrice: "350,00",
      currentPrice: "189,90",
      discount: "46% OFF",
      badge: "🎯 DEAL",
      image: "/img/illustration.svg",
      sold: "4.1k",
      rating: 4.8,
      reviews: 312,
      freeShipping: true
    },
    {
      id: 6,
      name: "Bolsa Transversal",
      originalPrice: "180,00",
      currentPrice: "99,90",
      discount: "45% OFF",
      badge: "🔥 HOT",
      image: "/img/illustration.svg",
      sold: "2.9k",
      rating: 4.5,
      reviews: 178,
      freeShipping: true
    }
  ];

  const features = [
    {
      icon: <FaTruck />,
      title: "Entrega Expressa",
      description: "Receba em até 3 dias úteis para todo Brasil"
    },
    {
      icon: <FaPercent />,
      title: "Melhores Preços",
      description: "Garantimos os menores preços do mercado"
    },
    {
      icon: <FaShieldAlt />,
      title: "Compra Segura",
      description: "Pagamento 100% protegido e aprovado"
    },
    {
      icon: <FaGift />,
      title: "Frete Grátis",
      description: "Em compras acima de R$ 99"
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50 pb-20 md:pb-0">
      {/* Banner Carousel */}
      <BannerCarousel />

      {/* Categories */}
      <section className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-4">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                className="text-center group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-gray-100 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-2 group-hover:bg-orange-100 transition-colors">
                  <span className="text-xl sm:text-2xl">{category.icon}</span>
                </div>
                <h3 className="text-xs sm:text-sm font-medium text-gray-900 mb-1">{category.name}</h3>
                <p className="text-xs text-gray-500">{category.count}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Flash Sale */}
      <FlashSale />

      {/* Featured Products */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Produtos em Destaque</h2>
              <p className="text-gray-600">Os produtos mais vendidos com os melhores preços!</p>
            </div>
            <button className="text-orange-500 font-semibold hover:text-orange-600 transition-colors">
              Ver todos →
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {featuredProducts.map((product) => (
              <ProductCardShopee key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Por que escolher a Gradual Info Shop?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-orange-600 text-xl">{feature.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Não perca as melhores ofertas!</h2>
            <p className="text-xl mb-8 opacity-90">Cadastre-se e receba ofertas exclusivas em primeira mão</p>
            <div className="flex items-center justify-center space-x-4 mb-8">
              <FaGift className="w-6 h-6" />
              <span className="text-lg">Frete grátis para todo Brasil!</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                🛍️ Começar a Comprar
              </button>
              <button className="bg-black text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                📱 Baixar App
              </button>
            </div>
            <p className="mt-6 text-lg">
              <strong>Frete grátis</strong> para compras acima de R$ 99,90
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
