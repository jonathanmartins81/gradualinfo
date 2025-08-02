import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import Page100K from './page';

// Mock do framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    button: ({ children, ...props }: any) => (
      <button {...props}>{children}</button>
    ),
  },
}));

// Mock do ThemeContext
vi.mock('@/contexts/ThemeContext', () => ({
  useTheme: () => ({
    isDark: false,
    toggleTheme: vi.fn(),
  }),
}));

// Mock do utils/cache
vi.mock('@/utils/cache', () => ({
  cn: (...classes: any[]) => classes.filter(Boolean).join(' '),
}));

describe('Page100K', () => {
  it('should render the page title correctly', () => {
    render(<Page100K />);

    expect(screen.getByText('100K')).toBeInTheDocument();
    expect(screen.getByText('COLEÇÃO ESPECIAL')).toBeInTheDocument();
  });

  it('should render the freight banner', () => {
    render(<Page100K />);

    expect(
      screen.getByText(/FRETE GRÁTIS À PARTIR DE R\$299 REAIS/)
    ).toBeInTheDocument();
  });

  it('should render the hero section with call to action', () => {
    render(<Page100K />);

    expect(
      screen.getByText(
        'Descubra nossa coleção exclusiva com produtos selecionados especialmente para você!'
      )
    ).toBeInTheDocument();
    expect(screen.getByText('EXPLORAR COLEÇÃO')).toBeInTheDocument();
  });

  it('should render products section', () => {
    render(<Page100K />);

    expect(screen.getByText('PRODUTOS EM DESTAQUE')).toBeInTheDocument();
    expect(
      screen.getByText('Os produtos mais vendidos da nossa coleção 100K')
    ).toBeInTheDocument();
  });

  it('should render product cards with correct information', () => {
    render(<Page100K />);

    // Verificar se os produtos estão sendo renderizados
    expect(screen.getByText('Blazer Preto Sem Botões')).toBeInTheDocument();
    expect(
      screen.getByText('Vestido Amarelo de Manga Curta')
    ).toBeInTheDocument();
    expect(screen.getByText('Calça Jeans Cintura Alta')).toBeInTheDocument();

    // Verificar preços
    expect(screen.getByText('R$ 320,00')).toBeInTheDocument();
    expect(screen.getByText('R$ 169,00')).toBeInTheDocument();
    expect(screen.getByText('R$ 250,00')).toBeInTheDocument();
  });

  it('should render benefits section', () => {
    render(<Page100K />);

    expect(screen.getByText('Frete Grátis')).toBeInTheDocument();
    expect(screen.getByText('Troca Fácil')).toBeInTheDocument();
    expect(screen.getByText('Qualidade Premium')).toBeInTheDocument();

    expect(
      screen.getByText('Para compras acima de R$ 299')
    ).toBeInTheDocument();
    expect(
      screen.getByText('30 dias para troca ou devolução')
    ).toBeInTheDocument();
    expect(
      screen.getByText('Produtos selecionados com carinho')
    ).toBeInTheDocument();
  });

  it('should render final CTA section', () => {
    render(<Page100K />);

    expect(
      screen.getByText('NÃO PERCA AS OFERTAS ESPECIAIS!')
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        'Cadastre-se e receba ofertas exclusivas da coleção 100K'
      )
    ).toBeInTheDocument();
    expect(screen.getByText('CADASTRAR-SE AGORA')).toBeInTheDocument();
  });

  it('should render buy buttons for all products', () => {
    render(<Page100K />);

    const buyButtons = screen.getAllByText('COMPRAR AGORA');
    expect(buyButtons).toHaveLength(6); // 6 produtos
  });

  it('should render product badges', () => {
    render(<Page100K />);

    const hotBadges = screen.getAllByText('🔥 HOT');
    expect(hotBadges.length).toBeGreaterThan(0);
    expect(screen.getByText('⚡ FLASH')).toBeInTheDocument();
    expect(screen.getByText('💎 PREMIUM')).toBeInTheDocument();
    expect(screen.getByText('⭐ TOP')).toBeInTheDocument();
    expect(screen.getByText('🎯 DEAL')).toBeInTheDocument();
  });

  it('should have proper accessibility attributes', () => {
    render(<Page100K />);

    // Verificar se os botões têm role apropriado
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThan(0);

    // Verificar se os headings estão na hierarquia correta
    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1).toBeInTheDocument();

    const h2s = screen.getAllByRole('heading', { level: 2 });
    expect(h2s.length).toBeGreaterThan(0);
  });
});
