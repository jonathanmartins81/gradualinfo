'use client';

import { useEffect } from 'react';

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  return (
    <html>
      <body>
        <div className='min-h-screen bg-white flex items-center justify-center p-4'>
          <div className='max-w-md w-full text-center'>
            <div className='mb-8'>
              <h1 className='text-4xl font-bold text-gray-900 mb-4'>
                Erro Crítico
              </h1>
              <p className='text-lg text-gray-600 mb-6'>
                Ocorreu um erro crítico na aplicação. Tente recarregar a página.
              </p>
            </div>

            {error.digest && (
              <div className='mb-6 p-4 bg-gray-100 rounded-lg'>
                <p className='text-sm text-gray-700'>
                  Erro ID: {error.digest}
                </p>
              </div>
            )}

            <div className='space-y-4'>
              <button
                onClick={reset}
                className='w-full bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors'
              >
                Tentar novamente
              </button>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
