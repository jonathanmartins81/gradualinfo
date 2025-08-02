'use client';

import { motion } from 'framer-motion';
import { FaHeart, FaShoppingCart, FaStar } from 'react-icons/fa';

interface ProductCardShopeeProps {
  product: {
    id: number;
    name: string;
    originalPrice: string;
    currentPrice: string;
    discount: string;
    badge?: string;
    image: string;
    sold: string;
    rating: number;
    reviews: number;
    freeShipping?: boolean;
    isNew?: boolean;
  };
}

export default function ProductCardShopee({ product }: ProductCardShopeeProps) {
  const handleAddToCart = () => {
    // Animação de confete ou feedback visual
    // console.log('Adicionado ao carrinho:', product.name);
  };

  const handleFavorite = () => {
    // console.log('Adicionado aos favoritos:', product.name);
  };

  return (
    <motion.div
      className="group bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer"
      whileHover={{ y: -4 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Product Image */}
      <div className="relative">
        {/* Badges */}
        <div className="absolute top-2 left-2 z-10 flex flex-col gap-1">
          {product.badge && (
            <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
              {product.badge}
            </span>
          )}
          {product.freeShipping && (
            <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
              🚚 Grátis
            </span>
          )}
          {product.isNew && (
            <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold">
              ✨ Novo
            </span>
          )}
        </div>

        {/* Favorite Button */}
        <button
          onClick={handleFavorite}
          className="absolute top-2 right-2 z-10 bg-white/80 hover:bg-white p-2 rounded-full transition-colors"
        >
          <FaHeart className="w-4 h-4 text-gray-600 hover:text-red-500 transition-colors" />
        </button>

        {/* Product Image - Maior e mais atrativa */}
        <div className="relative h-56 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            onError={(e) => {
              // Fallback para ícone se a imagem não carregar
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const fallback = target.parentElement?.querySelector('.image-fallback') as HTMLElement;
              if (fallback) {
                fallback.style.display = 'flex';
              }
            }}
          />
          <div className="image-fallback absolute inset-0 flex items-center justify-center" style={{ display: 'none' }}>
            <div className="text-gray-400 text-4xl">👕</div>
          </div>

          {/* Overlay de "COMPRAR AGORA" no hover */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
            <button className="bg-red-500 text-white px-6 py-3 rounded-lg font-bold text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 hover:bg-red-600">
              COMPRAR AGORA
            </button>
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        {/* Product Name */}
        <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors">
          {product.name}
        </h3>

        {/* Prices - Mais destacados */}
        <div className="mb-3">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-baseline space-x-2">
              <span className="text-2xl font-bold text-red-500">R$ {product.currentPrice}</span>
              <span className="text-sm text-gray-400 line-through">R$ {product.originalPrice}</span>
            </div>
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
              {product.discount}
            </span>
          </div>

          {/* Elementos de urgência */}
          <div className="flex items-center justify-between text-xs text-gray-600">
            <span className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
              {Math.floor(Math.random() * 50) + 10} pessoas compraram hoje
            </span>
            <span className="text-orange-600 font-semibold">
              Apenas {Math.floor(Math.random() * 20) + 3} em estoque
            </span>
          </div>
        </div>

        {/* Rating and Sold */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                />
              ))}
            </div>
            <span className="text-xs text-gray-600">({product.reviews})</span>
          </div>
          <span className="text-xs text-gray-500">{product.sold} vendidos</span>
        </div>

        {/* Add to Cart Button */}
        <motion.button
          onClick={handleAddToCart}
          className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition-colors flex items-center justify-center space-x-2"
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.02 }}
        >
          <FaShoppingCart className="w-4 h-4" />
          <span>Adicionar</span>
        </motion.button>
      </div>
    </motion.div>
  );
}
