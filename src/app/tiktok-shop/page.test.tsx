import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import TikTokShopPage from './page';

// Mock do framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
  },
}));

// Mock do react-icons/fa
vi.mock('react-icons/fa', () => ({
  FaShoppingCart: () => <div data-testid="shopping-cart-icon">🛒</div>,
  FaUser: () => <div data-testid="user-icon">👤</div>,
  FaTruck: () => <div data-testid="truck-icon">🚚</div>,
  FaStar: () => <div data-testid="star-icon">⭐</div>,
  FaHeadset: () => <div data-testid="headset-icon">🎧</div>,
  FaShieldAlt: () => <div data-testid="shield-icon">🛡️</div>,
  FaFire: () => <div data-testid="fire-icon">🔥</div>,
  FaClock: () => <div data-testid="clock-icon">⏰</div>,
  FaCheck: () => <div data-testid="check-icon">✅</div>,
}));

describe('TikTokShopPage', () => {
  it('should render the page title correctly', () => {
    render(<TikTokShopPage />);

    expect(screen.getByText('🛍️ TIKTOK SHOP')).toBeInTheDocument();
  });

  it('should render the hero section with promotion message', () => {
    render(<TikTokShopPage />);

    expect(screen.getByText('🔥 PROMOÇÃO EXPLOSIVA!')).toBeInTheDocument();
    expect(screen.getByText(/Produtos incríveis com até/)).toBeInTheDocument();
    expect(screen.getByText('70% OFF')).toBeInTheDocument();
  });

  it('should render the products section', () => {
    render(<TikTokShopPage />);

    expect(screen.getByText('🔥 PRODUTOS EM PROMOÇÃO')).toBeInTheDocument();
    expect(screen.getByText('Aproveite os melhores preços da internet!')).toBeInTheDocument();
  });

  it('should render product cards with correct information', () => {
    render(<TikTokShopPage />);

    // Verificar se os produtos estão sendo renderizados
    expect(screen.getByText('Blusa Cropped Estampada')).toBeInTheDocument();
    expect(screen.getByText('Calça Jeans Skinny')).toBeInTheDocument();
    expect(screen.getByText('Vestido Longo Floral')).toBeInTheDocument();
    expect(screen.getByText('Jaqueta de Couro Sintético')).toBeInTheDocument();
  });

  it('should render product badges', () => {
    render(<TikTokShopPage />);

    const hotBadges = screen.getAllByText('🔥 HOT');
    expect(hotBadges.length).toBeGreaterThan(0);
    expect(screen.getByText('⚡ FLASH')).toBeInTheDocument();
    expect(screen.getByText('💎 PREMIUM')).toBeInTheDocument();
    expect(screen.getByText('⭐ TOP')).toBeInTheDocument();
    expect(screen.getByText('🎯 DEAL')).toBeInTheDocument();
  });

  it('should render product prices and discounts', () => {
    render(<TikTokShopPage />);

    expect(screen.getByText('R$ 199,90')).toBeInTheDocument(); // Preço original
    expect(screen.getByText('R$ 89,90')).toBeInTheDocument(); // Preço atual
    expect(screen.getByText('55% OFF')).toBeInTheDocument(); // Desconto
  });

  it('should render features section', () => {
    render(<TikTokShopPage />);

    expect(screen.getByText('Entrega Rápida')).toBeInTheDocument();
    expect(screen.getByText('Qualidade Premium')).toBeInTheDocument();
    expect(screen.getByText('Suporte 24/7')).toBeInTheDocument();
    expect(screen.getByText('Compra Segura')).toBeInTheDocument();
  });

  it('should render testimonials section', () => {
    render(<TikTokShopPage />);

    expect(screen.getByText('💬 O QUE NOSSOS CLIENTES DIZEM')).toBeInTheDocument();
    expect(screen.getByText(/Produto de excelente qualidade/)).toBeInTheDocument();
    expect(screen.getByText(/Melhor compra que fiz esse ano/)).toBeInTheDocument();
    expect(screen.getByText(/Entrega super rápida/)).toBeInTheDocument();
  });

  it('should render CTA section', () => {
    render(<TikTokShopPage />);

    expect(screen.getByText('⏰ OFERTA POR TEMPO LIMITADO!')).toBeInTheDocument();
    expect(screen.getByText('Não perca essa oportunidade única')).toBeInTheDocument();
    expect(screen.getByText('GARANTIR MEU PRODUTO AGORA')).toBeInTheDocument();
  });

  it('should render footer information', () => {
    render(<TikTokShopPage />);

    expect(screen.getByText('INFORMAÇÕES')).toBeInTheDocument();
    expect(screen.getByText('ATENDIMENTO')).toBeInTheDocument();
    expect(screen.getByText('PAGAMENTO')).toBeInTheDocument();
    expect(screen.getByText('© 2024 TikTok Shop - Todos os direitos reservados')).toBeInTheDocument();
  });

  it('should render call to action buttons', () => {
    render(<TikTokShopPage />);

    const buyButtons = screen.getAllByText(/COMPRAR AGORA/);
    expect(buyButtons.length).toBeGreaterThan(0);

    expect(screen.getByText('VER TODOS OS PRODUTOS')).toBeInTheDocument();
    expect(screen.getByText('GARANTIR MEU PRODUTO AGORA')).toBeInTheDocument();
  });

  it('should render shipping information', () => {
    render(<TikTokShopPage />);

    expect(screen.getByText('Frete grátis para todo Brasil!')).toBeInTheDocument();
    expect(screen.getByText(/Frete grátis.*para compras acima de R\$ 199,90/)).toBeInTheDocument();
  });
});
