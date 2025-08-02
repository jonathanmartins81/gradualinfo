'use client';

import { motion } from 'framer-motion';
import { FaClock, FaFire, FaHeadset, FaShieldAlt, FaStar, FaTruck } from 'react-icons/fa';

export function Main() {
  const products = [
    {
      id: 1,
      name: "Blusa Cropped Estampada",
      originalPrice: "199,90",
      currentPrice: "89,90",
      discount: "55% OFF",
      badge: "🔥 HOT",
      image: "/img/illustration.svg"
    },
    {
      id: 2,
      name: "Calça Jeans Skinny",
      originalPrice: "249,90",
      currentPrice: "129,90",
      discount: "48% OFF",
      badge: "⚡ FLASH",
      image: "/img/illustration.svg"
    },
    {
      id: 3,
      name: "Vestido Longo Floral",
      originalPrice: "299,90",
      currentPrice: "149,90",
      discount: "50% OFF",
      badge: "💎 PREMIUM",
      image: "/img/illustration.svg"
    },
    {
      id: 4,
      name: "Jaqueta de Couro Sintético",
      originalPrice: "399,90",
      currentPrice: "199,90",
      discount: "50% OFF",
      badge: "⭐ TOP",
      image: "/img/illustration.svg"
    },
    {
      id: 5,
      name: "Tênis Esportivo",
      originalPrice: "350,00",
      currentPrice: "189,90",
      discount: "46% OFF",
      badge: "🎯 DEAL",
      image: "/img/illustration.svg"
    },
    {
      id: 6,
      name: "Bolsa Transversal",
      originalPrice: "180,00",
      currentPrice: "99,90",
      discount: "45% OFF",
      badge: "🔥 HOT",
      image: "/img/illustration.svg"
    }
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
      rating: 5
    },
    {
      text: "Melhor compra que fiz esse ano! O atendimento foi incrível e o produto superou minhas expectativas.",
      author: "Carlos Oliveira",
      rating: 5
    },
    {
      text: "Entrega super rápida e produto muito bonito! Já estou indicando para todas as minhas amigas.",
      author: "Mariana Santos",
      rating: 5
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-6xl font-bold mb-6">
              🔥 PROMOÇÃO EXPLOSIVA!
            </h1>
            <p className="text-xl sm:text-2xl mb-8 opacity-90">
              Produtos incríveis com até <span className="font-bold">70% OFF</span>
            </p>
            <div className="flex items-center justify-center space-x-4 mb-8">
              <FaClock className="w-6 h-6" />
              <span className="text-lg">Oferta por tempo limitado!</span>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              COMPRAR AGORA
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              🔥 PRODUTOS EM PROMOÇÃO
            </h2>
            <p className="text-gray-600 text-lg">
              Aproveite os melhores preços da internet!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <div className="relative">
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                        {product.badge}
                      </span>
                    </div>
                    <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-gray-400 text-4xl">👕</div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-gray-400 line-through text-sm">R$ {product.originalPrice}</span>
                        <span className="text-2xl font-bold text-red-600">R$ {product.currentPrice}</span>
                      </div>
                      <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                        {product.discount}
                      </span>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-red-500 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-red-600 hover:to-pink-700 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      COMPRAR AGORA
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              VER TODOS OS PRODUTOS
            </motion.button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-gradient-to-r from-red-500 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              💬 O QUE NOSSOS CLIENTES DIZEM
            </h2>
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
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-300 w-4 h-4" />
                  ))}
                </div>
                <p className="italic mb-4 text-lg">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="font-semibold">- {testimonial.author}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-500 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              ⏰ OFERTA POR TEMPO LIMITADO!
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Não perca essa oportunidade única
            </p>
            <div className="flex items-center justify-center space-x-4 mb-8">
              <FaFire className="w-6 h-6" />
              <span className="text-lg">Frete grátis para todo Brasil!</span>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              GARANTIR MEU PRODUTO AGORA
            </motion.button>
            <p className="mt-6 text-lg">
              <strong>Frete grátis</strong> para compras acima de R$ 199,90
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-red-500 mb-4">INFORMAÇÕES</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-red-500 transition-colors">Sobre Nós</a></li>
                <li><a href="#" className="text-gray-300 hover:text-red-500 transition-colors">Contato</a></li>
                <li><a href="#" className="text-gray-300 hover:text-red-500 transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="text-gray-300 hover:text-red-500 transition-colors">Termos de Uso</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-red-500 mb-4">ATENDIMENTO</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Segunda a Sexta: 8h às 18h</li>
                <li>Sábados: 9h às 13h</li>
                <li>contato@gradualinfoshop.com.br</li>
                <li>(11) 99999-9999</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-red-500 mb-4">PAGAMENTO</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Cartão de Crédito</li>
                <li>PIX</li>
                <li>Boleto Bancário</li>
                <li>Parcelamento em até 12x</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400">© 2024 Gradual Info Shop - Todos os direitos reservados</p>
            <p className="text-gray-400 text-sm mt-2">CNPJ: 00.000.000/0000-00</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
