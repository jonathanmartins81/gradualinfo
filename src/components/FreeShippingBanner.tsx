'use client';

import { FaGift, FaShieldAlt, FaTruck } from 'react-icons/fa';

export default function FreeShippingBanner() {
  return (
    <div className="bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-center space-x-6 text-sm font-medium">
        <div className="flex items-center space-x-2">
          <FaTruck className="w-4 h-4" />
          <span>🚚 FRETE GRÁTIS para todo Brasil</span>
        </div>
        <div className="hidden sm:flex items-center space-x-2">
          <FaGift className="w-4 h-4" />
          <span>🎁 Presente em compras acima de R$ 99</span>
        </div>
        <div className="hidden md:flex items-center space-x-2">
          <FaShieldAlt className="w-4 h-4" />
          <span>🔒 Compra 100% segura</span>
        </div>
      </div>
    </div>
  );
}
