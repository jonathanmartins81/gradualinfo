'use client';

import { FaFire, FaShoppingCart } from 'react-icons/fa';

export default function FixedBuyButton() {
  const handleClick = () => {
    // Abrir WhatsApp ou checkout
    window.open('https://wa.me/5599999999999?text=Tenho+interesse+em+comprar+agora!', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed-buy-btn"
      aria-label="Comprar agora - Botão fixo"
    >
      <FaFire className="mr-2" />
      GARANTIR AGORA
      <FaShoppingCart className="ml-2" />
    </button>
  );
}
