'use client';

import { Metadata } from 'next';
import { useEffect } from 'react';

export const metadata: Metadata = {
  title: 'Erro do Servidor - Aqua9 Boilerplate v2',
  description:
    'Ocorreu um erro interno no servidor. Nossa equipe foi notificada e está trabalhando para resolver o problema.',
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: 'Erro do Servidor - Aqua9 Boilerplate v2',
    description: 'Ocorreu um erro interno no servidor.',
    type: 'website',
    images: ['/og-image.svg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Erro do Servidor - Aqua9 Boilerplate v2',
    description: 'Ocorreu um erro interno no servidor.',
    images: ['/og-image.svg'],
  },
};

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    // Log do erro para monitoramento
    console.error('Global Error:', error);
  }, [error]);

  return (
    <html lang='pt-BR'>
      <body>
        <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-red-100'>
          <div className='max-w-md w-full mx-auto text-center px-4'>
            <div className='mb-8'>
              <div className='text-6xl mb-4'>💥</div>
              <h1 className='text-3xl font-bold text-red-700 mb-4'>
                Erro do Servidor
              </h1>
              <p className='text-red-600 mb-4'>
                Ocorreu um erro interno no servidor. Nossa equipe foi
                notificada.
              </p>
              {process.env.NODE_ENV === 'development' && (
                <details className='text-left bg-red-50 p-4 rounded-lg mb-4'>
                  <summary className='cursor-pointer font-medium text-red-700 mb-2'>
                    Detalhes do erro (desenvolvimento)
                  </summary>
                  <pre className='text-xs text-red-600 overflow-auto'>
                    {error.message}
                    {error.digest && `\nDigest: ${error.digest}`}
                  </pre>
                </details>
              )}
            </div>

            <div className='space-y-4'>
              <button
                onClick={reset}
                className='inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors duration-200'
              >
                Tentar novamente
              </button>

              <div className='text-sm text-red-500'>
                <p>Se o problema persistir:</p>
                <div className='mt-2 space-x-4'>
                  <a href='/' className='text-red-600 hover:underline'>
                    Voltar ao início
                  </a>
                  <a
                    href='mailto:contato@aqua9.com.br'
                    className='text-red-600 hover:underline'
                  >
                    Contatar suporte
                  </a>
                </div>
              </div>
            </div>

            <div className='mt-12 text-xs text-red-400'>
              <p>Desenvolvido com ❤️ pela Aqua9</p>
              {error.digest && (
                <p className='mt-1'>ID do erro: {error.digest}</p>
              )}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
