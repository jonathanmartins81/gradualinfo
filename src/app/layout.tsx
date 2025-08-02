import FixedComponents from '@/components/FixedComponents';
import { JsonLd } from '@/components/JsonLd';
import Navigation from '@/components/Navigation';
import { generateDynamicSEO } from '@/utils/SEO';
import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Providers } from './providers';

export const metadata: Metadata = generateDynamicSEO('/');

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
          <Navigation />
          {children}
          <FixedComponents />
        </Providers>
      </body>
    </html>
  );
}
