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

export default function AdminPage() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('authToken');

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

        // Verificar se é admin
        if (userData.role !== 'admin') {
          router.push('/unauthorized');
          return;
        }

        setUser(userData);
      } catch (err) {
        setError('Erro na autenticação');
        localStorage.removeItem('authToken');
        router.push('/login');
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    router.push('/login');
  };

  if (isLoading) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <div className='text-center'>
          <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto'></div>
          <p className='mt-4 text-gray-600'>Verificando permissões...</p>
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
      <header className='bg-red-600 shadow-sm'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-16'>
            <div className='flex items-center'>
              <h1 className='text-xl font-semibold text-white'>
                Painel Administrativo
              </h1>
            </div>
            <div className='flex items-center space-x-4'>
              <span className='text-sm text-red-100'>Admin: {user.name}</span>
              <Link
                href='/dashboard'
                className='text-red-100 hover:text-white text-sm'
              >
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className='bg-red-700 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-800 transition-colors'
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
          {/* Welcome Card */}
          <div className='bg-white overflow-hidden shadow rounded-lg mb-6'>
            <div className='px-4 py-5 sm:p-6'>
              <h3 className='text-lg leading-6 font-medium text-gray-900 mb-4'>
                Bem-vindo ao Painel Administrativo
              </h3>
              <p className='text-gray-600'>
                Você tem acesso total ao sistema. Use com responsabilidade.
              </p>
            </div>
          </div>

          {/* Admin Actions */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {/* User Management */}
            <div className='bg-white overflow-hidden shadow rounded-lg'>
              <div className='px-4 py-5 sm:p-6'>
                <h4 className='text-lg font-medium text-gray-900 mb-4'>
                  Gerenciamento de Usuários
                </h4>
                <div className='space-y-3'>
                  <Link
                    href='/admin/users'
                    className='block w-full text-left px-4 py-2 border border-gray-300 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors'
                  >
                    Ver Todos os Usuários
                  </Link>
                  <Link
                    href='/admin/users/new'
                    className='block w-full text-left px-4 py-2 border border-gray-300 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors'
                  >
                    Criar Novo Usuário
                  </Link>
                  <Link
                    href='/admin/users/roles'
                    className='block w-full text-left px-4 py-2 border border-gray-300 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors'
                  >
                    Gerenciar Roles
                  </Link>
                </div>
              </div>
            </div>

            {/* Content Management */}
            <div className='bg-white overflow-hidden shadow rounded-lg'>
              <div className='px-4 py-5 sm:p-6'>
                <h4 className='text-lg font-medium text-gray-900 mb-4'>
                  Gerenciamento de Conteúdo
                </h4>
                <div className='space-y-3'>
                  <Link
                    href='/admin/posts'
                    className='block w-full text-left px-4 py-2 border border-gray-300 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors'
                  >
                    Gerenciar Posts
                  </Link>
                  <Link
                    href='/admin/comments'
                    className='block w-full text-left px-4 py-2 border border-gray-300 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors'
                  >
                    Moderar Comentários
                  </Link>
                  <Link
                    href='/admin/media'
                    className='block w-full text-left px-4 py-2 border border-gray-300 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors'
                  >
                    Gerenciar Mídia
                  </Link>
                </div>
              </div>
            </div>

            {/* System Settings */}
            <div className='bg-white overflow-hidden shadow rounded-lg'>
              <div className='px-4 py-5 sm:p-6'>
                <h4 className='text-lg font-medium text-gray-900 mb-4'>
                  Configurações do Sistema
                </h4>
                <div className='space-y-3'>
                  <Link
                    href='/admin/settings'
                    className='block w-full text-left px-4 py-2 border border-gray-300 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors'
                  >
                    Configurações Gerais
                  </Link>
                  <Link
                    href='/admin/security'
                    className='block w-full text-left px-4 py-2 border border-gray-300 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors'
                  >
                    Configurações de Segurança
                  </Link>
                  <Link
                    href='/admin/logs'
                    className='block w-full text-left px-4 py-2 border border-gray-300 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors'
                  >
                    Logs do Sistema
                  </Link>
                </div>
              </div>
            </div>

            {/* Analytics */}
            <div className='bg-white overflow-hidden shadow rounded-lg'>
              <div className='px-4 py-5 sm:p-6'>
                <h4 className='text-lg font-medium text-gray-900 mb-4'>
                  Analytics e Relatórios
                </h4>
                <div className='space-y-3'>
                  <Link
                    href='/admin/analytics'
                    className='block w-full text-left px-4 py-2 border border-gray-300 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors'
                  >
                    Dashboard Analytics
                  </Link>
                  <Link
                    href='/admin/reports'
                    className='block w-full text-left px-4 py-2 border border-gray-300 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors'
                  >
                    Relatórios
                  </Link>
                  <Link
                    href='/admin/backups'
                    className='block w-full text-left px-4 py-2 border border-gray-300 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors'
                  >
                    Backups
                  </Link>
                </div>
              </div>
            </div>

            {/* Security */}
            <div className='bg-white overflow-hidden shadow rounded-lg'>
              <div className='px-4 py-5 sm:p-6'>
                <h4 className='text-lg font-medium text-gray-900 mb-4'>
                  Segurança
                </h4>
                <div className='space-y-3'>
                  <Link
                    href='/admin/security/audit'
                    className='block w-full text-left px-4 py-2 border border-gray-300 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors'
                  >
                    Auditoria de Segurança
                  </Link>
                  <Link
                    href='/admin/security/threats'
                    className='block w-full text-left px-4 py-2 border border-gray-300 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors'
                  >
                    Ameaças Detectadas
                  </Link>
                  <Link
                    href='/admin/security/ips'
                    className='block w-full text-left px-4 py-2 border border-gray-300 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors'
                  >
                    IPs Bloqueados
                  </Link>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className='bg-white overflow-hidden shadow rounded-lg'>
              <div className='px-4 py-5 sm:p-6'>
                <h4 className='text-lg font-medium text-gray-900 mb-4'>
                  Estatísticas Rápidas
                </h4>
                <div className='space-y-4'>
                  <div className='flex justify-between'>
                    <span className='text-gray-600'>Usuários Ativos:</span>
                    <span className='font-semibold'>1,234</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-gray-600'>Posts Publicados:</span>
                    <span className='font-semibold'>567</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-gray-600'>Comentários:</span>
                    <span className='font-semibold'>890</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-gray-600'>Acessos Hoje:</span>
                    <span className='font-semibold'>12,345</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
