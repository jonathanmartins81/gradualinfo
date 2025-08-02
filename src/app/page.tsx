import { Main } from '@/components/Main';
import { generateDynamicSEO } from '@/utils/SEO';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...generateDynamicSEO('/'),
  title: 'Gradual Info Shop - Promoção Explosiva! Até 70% OFF',
  description: '🔥 PROMOÇÃO ESPECIAL: Produtos incríveis com até 70% OFF! Frete grátis em compras acima de R$ 99. Entrega rápida e compra 100% segura. Aproveite agora!',
  keywords: 'promoção, oferta, desconto, frete grátis, compra online, loja virtual, vendas, produtos',
  openGraph: {
    title: 'Gradual Info Shop - Promoção Explosiva! Até 70% OFF',
    description: '🔥 PROMOÇÃO ESPECIAL: Produtos incríveis com até 70% OFF! Frete grátis em compras acima de R$ 99.',
    type: 'website',
  },
};

export default function Home() {
  return <Main />;
}
