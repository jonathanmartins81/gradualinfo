import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Acesso não autorizado - Aqua9 Boilerplate v2',
  description: 'Você não tem permissão para acessar esta página.',
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: 'Acesso não autorizado - Aqua9 Boilerplate v2',
    description: 'Você não tem permissão para acessar esta página.',
    type: 'website',
    images: ['/og-image.svg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Acesso não autorizado - Aqua9 Boilerplate v2',
    description: 'Você não tem permissão para acessar esta página.',
    images: ['/og-image.svg'],
  },
};

export default function Unauthorized() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-white dark:bg-gradient-to-br dark:from-orange-50 dark:to-orange-100'>
      <div className='text-center'>
        <div className='mb-8'>
          <div className='w-24 h-24 mx-auto mb-6 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center'>
            <svg
              className='w-12 h-12 text-orange-600 dark:text-orange-400'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
              />
            </svg>
          </div>
          <h1 className='text-4xl font-bold text-gray-900 dark:text-orange-900 mb-4'>
            Acesso não autorizado
          </h1>
          <p className='text-lg text-gray-700 dark:text-orange-700 mb-8 max-w-md mx-auto'>
            Você não tem permissão para acessar esta página. Faça login ou entre
            em contato com o administrador.
          </p>
        </div>

        <div className='space-y-4'>
          <Link
            href='/login'
            className='inline-block bg-orange-600 dark:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-700 dark:hover:bg-orange-700 transition-colors duration-200'
          >
            Fazer login
          </Link>

          <div className='text-sm text-gray-600 dark:text-orange-600'>
            <p>Código de erro: 403</p>
          </div>
        </div>
      </div>
    </div>
  );
}
