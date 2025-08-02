'use client';

import { motion } from 'framer-motion';

interface MainProps {
  title?: string;
  description?: string;
  technologies?: string[];
}

export function Main({
  title = '100K',
  description = 'COLEÇÃO ESPECIAL',
}: MainProps) {

  const products = [
    {
      id: 1,
      name: "Blazer Preto Sem Botões",
      originalPrice: "350,00",
      currentPrice: "320,00",
      image: "/img/illustration.svg",
      badge: "🔥 HOT"
    },
    {
      id: 2,
      name: "Vestido Amarelo de Manga Curta",
      originalPrice: "200,00",
      currentPrice: "169,00",
      image: "/img/illustration.svg",
      badge: "⚡ FLASH"
    },
    {
      id: 3,
      name: "Calça Jeans Cintura Alta",
      originalPrice: "280,00",
      currentPrice: "250,00",
      image: "/img/illustration.svg",
      badge: "💎 PREMIUM"
    },
    {
      id: 4,
      name: "Vestido Longo Rosa de Manguinha",
      originalPrice: "200,00",
      currentPrice: "189,00",
      image: "/img/illustration.svg",
      badge: "⭐ TOP"
    },
    {
      id: 5,
      name: "Casaco de Tricô Cinza",
      originalPrice: "200,00",
      currentPrice: "189,00",
      image: "/img/illustration.svg",
      badge: "🎯 DEAL"
    },
    {
      id: 6,
      name: "Vestido Longo de Listras Rosa",
      originalPrice: "200,00",
      currentPrice: "149,00",
      image: "/img/illustration.svg",
      badge: "🔥 HOT"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-cyan-50 dark:from-gray-900 dark:via-purple-900 dark:to-cyan-900">
      {/* Banner de Frete Grátis */}
      <div className="bg-black text-white text-center py-3 font-bold text-sm sm:text-base">
        🚚 FRETE GRÁTIS À PARTIR DE R$299 REAIS
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                {title}
              </span>
              <br />
              <span className="text-2xl sm:text-4xl">{description}</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Descubra nossa coleção exclusiva com produtos selecionados especialmente para você!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              EXPLORAR COLEÇÃO
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Produtos em Destaque */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            PRODUTOS EM DESTAQUE
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Os produtos mais vendidos da nossa coleção 100K
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
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
                <div className="relative">
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                      {product.badge}
                    </span>
                  </div>
                  <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-gray-400 dark:text-gray-500 text-4xl">👗</div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-400 line-through text-sm">R$ {product.originalPrice}</span>
                      <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">R$ {product.currentPrice}</span>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    COMPRAR AGORA
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Seção de Benefícios */}
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gradient-to-r from-pink-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🚚</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Frete Grátis</h3>
              <p className="text-gray-600 dark:text-gray-300">Para compras acima de R$ 299</p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-gradient-to-r from-purple-500 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🔄</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Troca Fácil</h3>
              <p className="text-gray-600 dark:text-gray-300">30 dias para troca ou devolução</p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-gradient-to-r from-cyan-500 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">💎</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Qualidade Premium</h3>
              <p className="text-gray-600 dark:text-gray-300">Produtos selecionados com carinho</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            NÃO PERCA AS OFERTAS ESPECIAIS!
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Cadastre-se e receba ofertas exclusivas da coleção 100K
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            CADASTRAR-SE AGORA
          </motion.button>
        </div>
      </section>
    </main>
  );
}
