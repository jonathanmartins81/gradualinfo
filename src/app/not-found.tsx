import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Página não encontrada - Aqua9 Boilerplate v2',
  description:
    'A página que você está procurando não foi encontrada. Volte para a página inicial.',
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
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100'>
      <div className='max-w-md w-full mx-auto text-center px-4'>
        <div className='mb-8'>
          <h1 className='text-9xl font-bold text-slate-300 mb-4'>404</h1>
          <h2 className='text-2xl font-semibold text-slate-700 mb-4'>
            Página não encontrada
          </h2>
          <p className='text-slate-600 mb-8'>
            A página que você está procurando não existe ou foi movida.
          </p>
        </div>

        <div className='space-y-4'>
          <Link
            href='/'
            className='inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200'
          >
            Voltar para o início
          </Link>

          <div className='text-sm text-slate-500'>
            <p>Ou tente uma dessas páginas:</p>
            <div className='mt-2 space-x-4'>
              <Link href='/about' className='text-blue-600 hover:underline'>
                Sobre
              </Link>
              <Link href='/portfolio' className='text-blue-600 hover:underline'>
                Portfólio
              </Link>
            </div>
          </div>
        </div>

        <div className='mt-12 text-xs text-slate-400'>
          <p>Desenvolvido com ❤️ pela Aqua9</p>
        </div>
      </div>
    </div>
  );
}
