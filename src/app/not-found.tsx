import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Página não encontrada - Aqua9 Boilerplate v2',
  description: 'A página que você está procurando não foi encontrada.',
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: 'Página não encontrada - Aqua9 Boilerplate v2',
    description: 'A página que você está procurando não foi encontrada.',
    type: 'website',
    images: ['/og-image.svg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Página não encontrada - Aqua9 Boilerplate v2',
    description: 'A página que você está procurando não foi encontrada.',
    images: ['/og-image.svg'],
  },
};

export default function NotFound() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-white dark:bg-gradient-to-br dark:from-slate-50 dark:to-slate-100'>
      <div className='text-center'>
        <div className='mb-8'>
          <div className='w-24 h-24 mx-auto mb-6 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center'>
            <svg
              className='w-12 h-12 text-blue-600 dark:text-blue-400'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33'
              />
            </svg>
          </div>
          <h1 className='text-4xl font-bold text-gray-900 dark:text-blue-900 mb-4'>
            Página não encontrada
          </h1>
          <p className='text-lg text-gray-700 dark:text-blue-700 mb-8 max-w-md mx-auto'>
            A página que você está procurando não existe ou foi movida para
            outro endereço.
          </p>
        </div>

        <div className='space-y-4'>
          <Link
            href='/'
            className='inline-block bg-blue-600 dark:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 dark:hover:bg-blue-700 transition-colors duration-200'
          >
            Voltar ao início
          </Link>

          <div className='text-sm text-gray-600 dark:text-blue-600'>
            <p>Código de erro: 404</p>
          </div>
        </div>
      </div>
    </div>
  );
}
