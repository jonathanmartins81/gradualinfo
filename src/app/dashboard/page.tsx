'use client';

import { useEffect, useState } from 'react';

// ===== TIPOS =====
interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: string;
  lastLogin: string;
}

interface Post {
  id: string;
  title: string;
  excerpt: string;
  status: string;
  createdAt: string;
  views: number;
}

// ===== DADOS MOCK =====
const mockUser: User = {
  id: '1',
  name: 'João Silva',
  email: 'joao@example.com',
  avatar: '/avatar.jpg',
  role: 'user',
  lastLogin: '2024-01-15T10:30:00Z',
};

const mockPosts: Post[] = [
  {
    id: '1',
    title: 'Como configurar o Next.js',
    excerpt: 'Guia completo para configurar um projeto Next.js do zero...',
    status: 'publicado',
    createdAt: '2024-01-15',
    views: 1250,
  },
  {
    id: '2',
    title: 'Melhores práticas de TypeScript',
    excerpt: 'Dicas e truques para escrever código TypeScript mais limpo...',
    status: 'rascunho',
    createdAt: '2024-01-20',
    views: 0,
  },
  {
    id: '3',
    title: 'Otimização de performance',
    excerpt:
      'Técnicas avançadas para melhorar a performance da sua aplicação...',
    status: 'publicado',
    createdAt: '2024-01-25',
    views: 890,
  },
];

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular carregamento de dados
    const loadData = () => {
      if (typeof window !== 'undefined') {
        const timer = window.setTimeout(() => {
          setUser(mockUser);
          setPosts(mockPosts);
          setLoading(false);
        }, 1000);

        return () => window.clearTimeout(timer);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div className='min-h-screen bg-white dark:bg-gray-50 flex items-center justify-center'>
        <div className='text-center'>
          <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4'></div>
          <p className='text-gray-600 dark:text-gray-400'>Carregando...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className='min-h-screen bg-white dark:bg-gray-50 flex items-center justify-center'>
        <div className='text-center'>
          <p className='text-gray-600 dark:text-gray-400'>
            Usuário não encontrado
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-white dark:bg-gray-50 p-6'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div className='mb-8'>
          <h1 className='text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2'>
            Meu Dashboard
          </h1>
          <p className='text-gray-600 dark:text-gray-400'>
            Bem-vindo de volta, {user.name}!
          </p>
        </div>

        {/* User Info */}
        <div className='bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-8'>
          <div className='flex items-center space-x-4'>
            <div className='w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center'>
              <span className='text-2xl font-bold text-gray-600 dark:text-gray-400'>
                {user.name.charAt(0)}
              </span>
            </div>
            <div>
              <h2 className='text-xl font-semibold text-gray-900 dark:text-gray-100'>
                {user.name}
              </h2>
              <p className='text-gray-600 dark:text-gray-400'>{user.email}</p>
              <p className='text-sm text-gray-500 dark:text-gray-500'>
                Último login:{' '}
                {new Date(user.lastLogin).toLocaleDateString('pt-BR')}
              </p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
          <div className='bg-white dark:bg-gray-800 rounded-lg shadow p-6'>
            <div className='flex items-center'>
              <div className='p-2 bg-blue-100 dark:bg-blue-900 rounded-lg'>
                <svg
                  className='w-6 h-6 text-blue-600 dark:text-blue-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 6v6m0 0v6m0-6h6m-6 0H6'
                  />
                </svg>
              </div>
              <div className='ml-4'>
                <h3 className='text-lg font-semibold text-gray-900 dark:text-gray-100'>
                  Novo Post
                </h3>
                <p className='text-sm text-gray-600 dark:text-gray-400'>
                  Criar um novo artigo
                </p>
              </div>
            </div>
          </div>

          <div className='bg-white dark:bg-gray-800 rounded-lg shadow p-6'>
            <div className='flex items-center'>
              <div className='p-2 bg-green-100 dark:bg-green-900 rounded-lg'>
                <svg
                  className='w-6 h-6 text-green-600 dark:text-green-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                  />
                </svg>
              </div>
              <div className='ml-4'>
                <h3 className='text-lg font-semibold text-gray-900 dark:text-gray-100'>
                  Meus Posts
                </h3>
                <p className='text-sm text-gray-600 dark:text-gray-400'>
                  Ver todos os artigos
                </p>
              </div>
            </div>
          </div>

          <div className='bg-white dark:bg-gray-800 rounded-lg shadow p-6'>
            <div className='flex items-center'>
              <div className='p-2 bg-purple-100 dark:bg-purple-900 rounded-lg'>
                <svg
                  className='w-6 h-6 text-purple-600 dark:text-purple-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                  />
                </svg>
              </div>
              <div className='ml-4'>
                <h3 className='text-lg font-semibold text-gray-900 dark:text-gray-100'>
                  Perfil
                </h3>
                <p className='text-sm text-gray-600 dark:text-gray-400'>
                  Editar informações
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Posts */}
        <div className='bg-white dark:bg-gray-800 rounded-lg shadow'>
          <div className='px-6 py-4 border-b border-gray-200 dark:border-gray-700'>
            <h2 className='text-lg font-semibold text-gray-900 dark:text-gray-100'>
              Meus Posts Recentes
            </h2>
          </div>
          <div className='divide-y divide-gray-200 dark:divide-gray-700'>
            {posts.map(post => (
              <div key={post.id} className='p-6'>
                <div className='flex items-center justify-between'>
                  <div className='flex-1'>
                    <h3 className='text-lg font-medium text-gray-900 dark:text-gray-100 mb-2'>
                      {post.title}
                    </h3>
                    <p className='text-gray-600 dark:text-gray-400 mb-2'>
                      {post.excerpt}
                    </p>
                    <div className='flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-500'>
                      <span>{post.createdAt}</span>
                      <span>•</span>
                      <span>{post.views} visualizações</span>
                      <span>•</span>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          post.status === 'publicado'
                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                            : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                        }`}
                      >
                        {post.status}
                      </span>
                    </div>
                  </div>
                  <div className='ml-4'>
                    <button className='text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium'>
                      Editar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
