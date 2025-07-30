'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  role: string;
  permissions: string[];
}

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const token =
        typeof window !== 'undefined'
          ? localStorage.getItem('authToken')
          : null;

      if (!token) {
        router.push('/login');
        return;
      }

      try {
        const response = await fetch('/api/auth/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Token inválido');
        }

        const userData = await response.json();
        setUser(userData);
      } catch {
        setError('Erro na autenticação');
        if (typeof window !== 'undefined') {
          localStorage.removeItem('authToken');
        }
        router.push('/login');
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('authToken');
    }
    router.push('/login');
  };

  if (isLoading) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <div className='text-center'>
          <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto'></div>
          <p className='mt-4 text-gray-600'>Carregando...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <div className='text-center'>
          <p className='text-red-600'>{error}</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Header */}
      <header className='bg-white shadow-sm border-b'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-16'>
            <div className='flex items-center'>
              <h1 className='text-xl font-semibold text-gray-900'>Dashboard</h1>
            </div>
            <div className='flex items-center space-x-4'>
              <span className='text-sm text-gray-700'>Olá, {user.name}</span>
              <button
                onClick={handleLogout}
                className='bg-red-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-700 transition-colors'
              >
                Sair
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
        <div className='px-4 py-6 sm:px-0'>
          {/* User Info Card */}
          <div className='bg-white overflow-hidden shadow rounded-lg mb-6'>
            <div className='px-4 py-5 sm:p-6'>
              <h3 className='text-lg leading-6 font-medium text-gray-900 mb-4'>
                Informações do Usuário
              </h3>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div>
                  <dt className='text-sm font-medium text-gray-500'>Nome</dt>
                  <dd className='mt-1 text-sm text-gray-900'>{user.name}</dd>
                </div>
                <div>
                  <dt className='text-sm font-medium text-gray-500'>Email</dt>
                  <dd className='mt-1 text-sm text-gray-900'>{user.email}</dd>
                </div>
                <div>
                  <dt className='text-sm font-medium text-gray-500'>Função</dt>
                  <dd className='mt-1 text-sm text-gray-900 capitalize'>
                    {user.role}
                  </dd>
                </div>
                <div>
                  <dt className='text-sm font-medium text-gray-500'>ID</dt>
                  <dd className='mt-1 text-sm text-gray-900 font-mono'>
                    {user.id}
                  </dd>
                </div>
              </div>
            </div>
          </div>

          {/* Permissions Card */}
          <div className='bg-white overflow-hidden shadow rounded-lg mb-6'>
            <div className='px-4 py-5 sm:p-6'>
              <h3 className='text-lg leading-6 font-medium text-gray-900 mb-4'>
                Permissões
              </h3>
              <div className='flex flex-wrap gap-2'>
                {user.permissions.map(permission => (
                  <span
                    key={permission}
                    className='inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800'
                  >
                    {permission}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className='bg-white overflow-hidden shadow rounded-lg'>
            <div className='px-4 py-5 sm:p-6'>
              <h3 className='text-lg leading-6 font-medium text-gray-900 mb-4'>
                Ações Rápidas
              </h3>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {user.role === 'admin' && (
                  <Link
                    href='/admin'
                    className='block p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors'
                  >
                    <h4 className='font-medium text-gray-900'>Painel Admin</h4>
                    <p className='text-sm text-gray-600 mt-1'>
                      Gerenciar usuários e configurações
                    </p>
                  </Link>
                )}

                {user.permissions.includes('read:posts') && (
                  <Link
                    href='/posts'
                    className='block p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors'
                  >
                    <h4 className='font-medium text-gray-900'>Ver Posts</h4>
                    <p className='text-sm text-gray-600 mt-1'>
                      Visualizar conteúdo publicado
                    </p>
                  </Link>
                )}

                {user.permissions.includes('write:posts') && (
                  <Link
                    href='/posts/new'
                    className='block p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors'
                  >
                    <h4 className='font-medium text-gray-900'>Criar Post</h4>
                    <p className='text-sm text-gray-600 mt-1'>
                      Publicar novo conteúdo
                    </p>
                  </Link>
                )}

                <Link
                  href='/profile'
                  className='block p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors'
                >
                  <h4 className='font-medium text-gray-900'>Perfil</h4>
                  <p className='text-sm text-gray-600 mt-1'>
                    Editar informações pessoais
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
