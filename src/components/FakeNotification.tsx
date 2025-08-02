'use client';

import { useEffect, useState } from 'react';
import { FaMapMarkerAlt, FaShoppingCart } from 'react-icons/fa';

const strings = [
  "Juliana acabou de comprar!",
  "Lucas comprou 2 peças!",
  "Compra aprovada de Vitória/ES!",
  "Maria clicou em COMPRAR AGORA!",
  "Bruno garantiu seu desconto!",
  "Ana comprou há 2 minutos!",
  "Pedido confirmado de São Paulo!",
  "Carlos aproveitou a oferta!",
  "Compra realizada de Belo Horizonte!",
  "Fernanda garantiu o frete grátis!",
];

export default function FakeNotification() {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState(strings[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessage(strings[Math.floor(Math.random() * strings.length)]);
      setShow(true);
      setTimeout(() => setShow(false), 5000);
    }, 17000);
    return () => clearInterval(interval);
  }, []);

  return show && (
    <div className="fake-notif">
      <FaShoppingCart className="inline mr-2 text-orange-500" />
      {message}
      <FaMapMarkerAlt className="inline ml-2 text-gray-400" />
    </div>
  );
}
