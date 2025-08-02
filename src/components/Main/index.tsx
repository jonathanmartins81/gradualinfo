'use client';

import { motion } from 'framer-motion';
import { FaClock, FaFire, FaGift, FaHeadset, FaHeart, FaPercent, FaSearch, FaShieldAlt, FaShippingFast, FaShoppingCart, FaStar, FaTruck } from 'react-icons/fa';

export function Main() {
  const products = [
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
      reviews: 156
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
      reviews: 89
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
      reviews: 234
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
      reviews: 67
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
      reviews: 312
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
      reviews: 178
    }
  ];

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

  const features = [
    {
      icon: <FaTruck />,
      title: "Entrega Rápida",
      description: "Receba em até 3 dias úteis"
    },
    {
      icon: <FaStar />,
      title: "Qualidade Premium",
      description: "Produtos de alta qualidade garantidos"
    },
    {
      icon: <FaHeadset />,
      title: "Suporte 24/7",
      description: "Atendimento especializado"
    },
    {
      icon: <FaShieldAlt />,
      title: "Compra Segura",
      description: "Pagamento 100% protegido"
    }
  ];

  const testimonials = [
    {
      text: "Produto de excelente qualidade! Chegou antes do previsto e exatamente como na foto. Recomendo demais!",
      author: "Ana Silva",
      rating: 5,
      avatar: "👩‍💼"
    },
    {
      text: "Melhor compra que fiz esse ano! O atendimento foi incrível e o produto superou minhas expectativas.",
      author: "Carlos Oliveira",
      rating: 5,
      avatar: "👨‍💻"
    },
    {
      text: "Entrega super rápida e produto muito bonito! Já estou indicando para todas as minhas amigas.",
      author: "Mariana Santos",
      rating: 5,
      avatar: "👩‍🎨"
    }
  ];

  const brands = [
    { name: "Nike", logo: "NIKE" },
    { name: "Adidas", logo: "ADIDAS" },
    { name: "Apple", logo: "APPLE" },
    { name: "Samsung", logo: "SAMSUNG" },
    { name: "Sony", logo: "SONY" },
    { name: "LG", logo: "LG" }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Banner de Promoção Superior */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center space-x-4 text-sm">
          <FaGift className="w-4 h-4" />
          <span className="font-semibold">🎉 PROMOÇÃO ESPECIAL: Frete grátis em compras acima de R$ 99!</span>
          <FaClock className="w-4 h-4" />
        </div>
      </div>

      {/* Hero Section - Estilo Shopee */}
      <section className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-6xl font-bold mb-6">
                🛍️ Gradual Info Shop
              </h1>
              <p className="text-xl sm:text-2xl mb-8 opacity-90">
                A melhor loja online do Brasil com <span className="font-bold">milhões de produtos</span> e os melhores preços!
              </p>
              <div className="flex items-center space-x-6 mb-8">
                <div className="flex items-center space-x-2">
                  <FaShippingFast className="w-5 h-5" />
                  <span>Entrega Rápida</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaPercent className="w-5 h-5" />
                  <span>Até 90% OFF</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaShieldAlt className="w-5 h-5" />
                  <span>Compra Segura</span>
                </div>
              </div>
              <div className="relative">
                <div className="flex items-center bg-white rounded-full p-2 shadow-lg">
                  <FaSearch className="w-5 h-5 text-gray-400 ml-3" />
                  <input
                    type="text"
                    placeholder="O que você está procurando?"
                    className="flex-1 px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none"
                  />
                  <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors">
                    Buscar
                  </button>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="text-6xl mb-4">📱</div>
                <h3 className="text-2xl font-bold mb-2">Baixe nosso App</h3>
                <p className="text-lg opacity-90 mb-6">Compre ainda mais rápido e ganhe cupons exclusivos!</p>
                <div className="space-y-3">
                  <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                    📱 App Store
                  </button>
                  <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                    🤖 Google Play
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categorias - Estilo Shopee */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Categorias Populares</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                className="text-center group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 group-hover:bg-orange-100 transition-colors">
                  <span className="text-2xl">{category.icon}</span>
                </div>
                <h3 className="text-sm font-medium text-gray-900 mb-1">{category.name}</h3>
                <p className="text-xs text-gray-500">{category.count} produtos</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase - Melhorado */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                🔥 Produtos em Destaque
              </h2>
              <p className="text-gray-600">
                Os produtos mais vendidos com os melhores preços!
              </p>
            </div>
            <button className="text-orange-500 font-semibold hover:text-orange-600 transition-colors">
              Ver todos →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                className="group bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative">
                  <div className="absolute top-2 left-2 z-10">
                    <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      {product.badge}
                    </span>
                  </div>
                  <div className="absolute top-2 right-2 z-10">
                    <button className="bg-white/80 hover:bg-white p-2 rounded-full transition-colors">
                      <FaHeart className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                  <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-gray-400 text-4xl">👕</div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors">
                    {product.name}
                  </h3>

                  {/* Preços */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-orange-500">R$ {product.currentPrice}</span>
                      <span className="text-sm text-gray-400 line-through">R$ {product.originalPrice}</span>
                    </div>
                    <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                      {product.discount}
                    </span>
                  </div>

                  {/* Avaliações */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} />
                        ))}
                      </div>
                      <span className="text-xs text-gray-600">({product.reviews})</span>
                    </div>
                    <span className="text-xs text-gray-500">{product.sold} vendidos</span>
                  </div>

                  {/* Botão de Comprar */}
                  <button className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition-colors flex items-center justify-center space-x-2">
                    <FaShoppingCart className="w-4 h-4" />
                    <span>Comprar Agora</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Marcas */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Marcas em Destaque</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {brands.map((brand, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-2xl font-bold text-gray-700">{brand.logo}</div>
                <p className="text-sm text-gray-600 mt-2">{brand.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Por que escolher a Gradual Info Shop?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-orange-600 text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              💬 O que nossos clientes dizem
            </h2>
            <p className="text-xl opacity-90">Milhões de clientes satisfeitos em todo o Brasil</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{testimonial.avatar}</div>
                  <div>
                    <div className="flex items-center mb-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-300 w-4 h-4" />
                      ))}
                    </div>
                    <div className="font-semibold">{testimonial.author}</div>
                  </div>
                </div>
                <p className="italic mb-4 text-lg">&ldquo;{testimonial.text}&rdquo;</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              ⏰ Não perca as melhores ofertas!
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Cadastre-se e receba ofertas exclusivas em primeira mão
            </p>
            <div className="flex items-center justify-center space-x-4 mb-8">
              <FaFire className="w-6 h-6" />
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

      {/* Footer - Estilo Shopee */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Footer */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
            <div className="md:col-span-2">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Gradual Info Shop</h3>
              <p className="text-gray-600 mb-4 text-sm">
                A melhor loja online do Brasil com milhões de produtos e os melhores preços!
              </p>
              <div className="flex space-x-3">
                <button className="bg-black text-white px-4 py-2 rounded text-sm font-medium hover:bg-gray-800 transition-colors">
                  📱 App Store
                </button>
                <button className="bg-green-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-green-700 transition-colors">
                  🤖 Google Play
                </button>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">Categorias</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">Moda Feminina</a></li>
                <li><a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">Eletrônicos</a></li>
                <li><a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">Casa & Jardim</a></li>
                <li><a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">Esportes</a></li>
                <li><a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">Beleza</a></li>
                <li><a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">Brinquedos</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">Atendimento</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Central de Ajuda</li>
                <li>Fale Conosco</li>
                <li>Segunda a Sexta: 8h às 18h</li>
                <li>Sábados: 9h às 13h</li>
                <li>contato@gradualinfoshop.com.br</li>
                <li>(11) 99999-9999</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">Pagamento</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Cartão de Crédito</li>
                <li>PIX</li>
                <li>Boleto Bancário</li>
                <li>Parcelamento em até 12x</li>
                <li>Cartão de Débito</li>
                <li>Transferência Bancária</li>
              </ul>
            </div>
          </div>

          {/* Middle Footer - Social Links */}
          <div className="border-t border-gray-200 pt-8 mb-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex space-x-6">
                <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors text-sm">
                  Sobre Nós
                </a>
                <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors text-sm">
                  Política de Privacidade
                </a>
                <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors text-sm">
                  Termos de Uso
                </a>
                <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors text-sm">
                  Trabalhe Conosco
                </a>
                <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors text-sm">
                  Blog
                </a>
              </div>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
                  <span className="text-xl">📘</span>
                </a>
                <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
                  <span className="text-xl">📷</span>
                </a>
                <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
                  <span className="text-xl">🐦</span>
                </a>
                <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
                  <span className="text-xl">📺</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-200 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-gray-600 text-sm">© 2024 Gradual Info Shop - Todos os direitos reservados</p>
                <p className="text-gray-500 text-xs mt-1">CNPJ: 00.000.000/0000-00</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-gray-500">Formas de Pagamento:</span>
                  <div className="flex space-x-1">
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">💳</span>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">📱</span>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">🏦</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
