'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Simular chamada de API
      const simulateApiCall = () => {
        return new Promise((resolve, reject) => {
          if (typeof window !== 'undefined') {
            const timer = window.setTimeout(() => {
              if (email === 'admin@example.com' && password === 'password') {
                resolve({ success: true, user: { email, role: 'admin' } });
              } else {
                reject(new Error('Credenciais inválidas'));
              }
            }, 1000);

            return () => window.clearTimeout(timer);
          }
        });
      };

      const result = await simulateApiCall();

      // Simular login bem-sucedido
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('user', JSON.stringify(result));
      }

      router.push('/dashboard');
    } catch {
      setError('Email ou senha incorretos');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='min-h-screen bg-white dark:bg-gradient-to-br dark:from-blue-50 dark:to-indigo-100 flex items-center justify-center p-4'>
      <div className='max-w-md w-full'>
        <div className='bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8'>
          <div className='text-center mb-8'>
            <h1 className='text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2'>
              Entrar
            </h1>
            <p className='text-gray-600 dark:text-gray-400'>
              Acesse sua conta para continuar
            </p>
          </div>

          {error && (
            <div className='mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg'>
              <p className='text-red-600 dark:text-red-400 text-sm'>{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className='space-y-6'>
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'
              >
                Email
              </label>
              <input
                id='email'
                type='email'
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className='w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 transition-colors'
                placeholder='seu@email.com'
              />
            </div>

            <div>
              <label
                htmlFor='password'
                className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'
              >
                Senha
              </label>
              <input
                id='password'
                type='password'
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                className='w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 transition-colors'
                placeholder='••••••••'
              />
            </div>

            <div className='flex items-center justify-between'>
              <div className='flex items-center'>
                <input
                  id='remember'
                  type='checkbox'
                  className='h-4 w-4 text-blue-600 dark:text-blue-400 focus:ring-blue-500 dark:focus:ring-blue-400 border-gray-300 dark:border-gray-600 rounded'
                />
                <label
                  htmlFor='remember'
                  className='ml-2 block text-sm text-gray-700 dark:text-gray-300'
                >
                  Lembrar de mim
                </label>
              </div>
              <a
                href='#'
                className='text-sm text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300'
              >
                Esqueceu a senha?
              </a>
            </div>

            <button
              type='submit'
              disabled={loading}
              className='w-full bg-blue-600 dark:bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
            >
              {loading ? (
                <div className='flex items-center justify-center'>
                  <div className='animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2'></div>
                  Entrando...
                </div>
              ) : (
                'Entrar'
              )}
            </button>
          </form>

          <div className='mt-6 text-center'>
            <p className='text-sm text-gray-600 dark:text-gray-400'>
              Não tem uma conta?{' '}
              <a
                href='#'
                className='text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 font-medium'
              >
                Cadastre-se
              </a>
            </p>
          </div>

          <div className='mt-8 pt-6 border-t border-gray-200 dark:border-gray-700'>
            <p className='text-xs text-gray-500 dark:text-gray-400 text-center'>
              Para fins de demonstração, use:
              <br />
              <strong>Email:</strong> admin@example.com
              <br />
              <strong>Senha:</strong> password
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
