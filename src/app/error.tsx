'use client';

import { useEffect } from 'react';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log do erro apenas no cliente
    if (typeof window !== 'undefined') {
      console.error('Error:', error);
    }
  }, [error]);

  return (
    <div className='min-h-screen bg-white dark:bg-gradient-to-br dark:from-red-50 dark:to-red-100 flex items-center justify-center p-4'>
      <div className='max-w-md w-full text-center'>
        <div className='mb-8'>
          <h1 className='text-4xl font-bold text-gray-900 dark:text-red-900 mb-4'>
            Ops! Algo deu errado
          </h1>
          <p className='text-lg text-gray-600 dark:text-red-800 mb-6'>
            Ocorreu um erro inesperado. Tente novamente.
          </p>
        </div>

        {error.digest && (
          <div className='mb-6 p-4 bg-gray-100 dark:bg-red-200 rounded-lg'>
            <p className='text-sm text-gray-700 dark:text-red-900'>
              Erro ID: {error.digest}
            </p>
          </div>
        )}

        <div className='space-y-4'>
          <button
            onClick={reset}
            className='w-full bg-blue-600 dark:bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 dark:hover:bg-red-700 transition-colors'
          >
            Tentar novamente
          </button>
        </div>
      </div>
    </div>
  );
}
