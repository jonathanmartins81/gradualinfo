import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Acesso Negado - Aqua9 Boilerplate v2',
  description:
    'Você não tem permissão para acessar esta página. Entre em contato com o administrador se acredita que isso é um erro.',
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: 'Acesso Negado - Aqua9 Boilerplate v2',
    description: 'Você não tem permissão para acessar esta página.',
    type: 'website',
    images: ['/og-image.svg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Acesso Negado - Aqua9 Boilerplate v2',
    description: 'Você não tem permissão para acessar esta página.',
    images: ['/og-image.svg'],
  },
};

export default function UnauthorizedPage() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-orange-100'>
      <div className='max-w-md w-full mx-auto text-center px-4'>
        <div className='mb-8'>
          <h1 className='text-9xl font-bold text-orange-300 mb-4'>403</h1>
          <h2 className='text-2xl font-semibold text-orange-700 mb-4'>
            Acesso Negado
          </h2>
          <p className='text-orange-600 mb-8'>
            Você não tem permissão para acessar esta página. Entre em contato
            com o administrador se acredita que isso é um erro.
          </p>
        </div>

        <div className='space-y-4'>
          <Link
            href='/'
            className='inline-block bg-orange-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-700 transition-colors duration-200'
          >
            Voltar para o início
          </Link>

          <div className='text-sm text-orange-500'>
            <p>Ou tente uma dessas páginas:</p>
            <div className='mt-2 space-x-4'>
              <Link href='/about' className='text-orange-600 hover:underline'>
                Sobre
              </Link>
              <Link
                href='/portfolio'
                className='text-orange-600 hover:underline'
              >
                Portfólio
              </Link>
            </div>
          </div>
        </div>

        <div className='mt-12 text-xs text-orange-400'>
          <p>Desenvolvido com ❤️ pela Aqua9</p>
        </div>
      </div>
    </div>
  );
}
