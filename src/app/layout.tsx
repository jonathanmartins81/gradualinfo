import BottomNav from '@/components/BottomNav';
import FixedComponents from '@/components/FixedComponents';
import HeaderShopee from '@/components/HeaderShopee';
import { JsonLd } from '@/components/JsonLd';
import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'Gradual Info Shop - Shopee Clone',
  description: 'Clone completo da Shopee Brasil com foco em conversão e vendas',
  keywords: 'shopee, clone, ecommerce, vendas, produtos, ofertas',
  icons: {
    icon: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt-BR'>
      <head>
        <JsonLd />
      </head>
      <body className='font-sans'>
        <Providers>
          <HeaderShopee />
          {children}
          <BottomNav />
          <FixedComponents />
        </Providers>
      </body>
    </html>
  );
}
