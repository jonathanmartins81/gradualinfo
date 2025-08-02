'use client';

import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Sobre a GradualInfo */}
          <div>
            <h3 className="text-lg font-semibold mb-4">SOBRE A GRADUALINFO</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/sobre" className="text-gray-300 hover:text-white transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/carreiras" className="text-gray-300 hover:text-white transition-colors">
                  Carreiras
                </Link>
              </li>
              <li>
                <Link href="/privacidade" className="text-gray-300 hover:text-white transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/termos" className="text-gray-300 hover:text-white transition-colors">
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>

          {/* Atendimento ao Cliente */}
          <div>
            <h3 className="text-lg font-semibold mb-4">ATENDIMENTO AO CLIENTE</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/ajuda" className="text-gray-300 hover:text-white transition-colors">
                  Central de Ajuda
                </Link>
              </li>
              <li>
                <Link href="/como-comprar" className="text-gray-300 hover:text-white transition-colors">
                  Como Comprar
                </Link>
              </li>
              <li>
                <Link href="/devolucao" className="text-gray-300 hover:text-white transition-colors">
                  Devolução e Reembolso
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-300 hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Pagamento */}
          <div>
            <h3 className="text-lg font-semibold mb-4">PAGAMENTO</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/pagamento/cartao" className="text-gray-300 hover:text-white transition-colors">
                  Cartão de Crédito
                </Link>
              </li>
              <li>
                <Link href="/pagamento/boleto" className="text-gray-300 hover:text-white transition-colors">
                  Boleto Bancário
                </Link>
              </li>
              <li>
                <Link href="/pagamento/pix" className="text-gray-300 hover:text-white transition-colors">
                  PIX
                </Link>
              </li>
              <li>
                <Link href="/pagamento/parcelamento" className="text-gray-300 hover:text-white transition-colors">
                  Parcelamento
                </Link>
              </li>
            </ul>
          </div>

          {/* Entrega */}
          <div>
            <h3 className="text-lg font-semibold mb-4">ENTREGA</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/frete-gratis" className="text-gray-300 hover:text-white transition-colors">
                  Frete Grátis
                </Link>
              </li>
              <li>
                <Link href="/rastreamento" className="text-gray-300 hover:text-white transition-colors">
                  Acompanhar Pedido
                </Link>
              </li>
              <li>
                <Link href="/trocas" className="text-gray-300 hover:text-white transition-colors">
                  Trocas e Devoluções
                </Link>
              </li>
              <li>
                <Link href="/prazo-entrega" className="text-gray-300 hover:text-white transition-colors">
                  Prazo de Entrega
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Redes Sociais */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-semibold mb-2">Siga-nos nas redes sociais</h4>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com/gradualinfo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FaFacebook className="w-6 h-6" />
                </a>
                <a
                  href="https://instagram.com/gradualinfo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FaInstagram className="w-6 h-6" />
                </a>
                <a
                  href="https://twitter.com/gradualinfo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FaTwitter className="w-6 h-6" />
                </a>
                <a
                  href="https://youtube.com/gradualinfo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FaYoutube className="w-6 h-6" />
                </a>
                <a
                  href="https://wa.me/5599999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FaWhatsapp className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div className="w-full md:w-auto">
              <h4 className="text-lg font-semibold mb-2">Receba ofertas exclusivas</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-l-lg focus:outline-none focus:border-orange-500"
                />
                <button className="px-4 py-2 bg-orange-500 text-white rounded-r-lg hover:bg-orange-600 transition-colors">
                  Inscrever
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-950 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-400">
                © {currentYear} GradualInfo. Todos os direitos reservados.
              </p>
              <p className="text-gray-500 text-sm">
                CNPJ: 00.000.000/0000-00 | IE: 000.000.000.000
              </p>
            </div>

            <div className="flex space-x-6 text-sm">
              <Link href="/mapa-site" className="text-gray-400 hover:text-white transition-colors">
                Mapa do Site
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">
                Política de Cookies
              </Link>
              <Link href="/lgpd" className="text-gray-400 hover:text-white transition-colors">
                LGPD
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
