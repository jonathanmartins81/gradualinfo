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
    icon: [
      { url: '/favicon.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.png',
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
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.png" />
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
