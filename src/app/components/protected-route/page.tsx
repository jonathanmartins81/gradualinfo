import { ProtectedRoute } from '@/components/ProtectedRoute';
import { generateDynamicSEO } from '@/utils/SEO';
import type { Metadata } from 'next';

export const metadata: Metadata = generateDynamicSEO(
  '/components/protected-route'
);

export default function ProtectedRouteDemoPage() {
  return (
    <div className='min-h-screen bg-white dark:bg-gray-50 py-12'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-16'>
          <h1 className='text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6'>
            Protected Route Component
          </h1>
          <p className='text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto'>
            Componente para proteção de rotas com autenticação e autorização
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16'>
          {/* Funcionalidades */}
          <div className='bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6'>
            <h2 className='text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4'>
              Funcionalidades
            </h2>
            <ul className='space-y-3 text-gray-700 dark:text-gray-300'>
              <li className='flex items-center'>
                <span className='text-green-500 mr-2'>✓</span>
                Verificação de autenticação
              </li>
              <li className='flex items-center'>
                <span className='text-green-500 mr-2'>✓</span>
                Controle de permissões
              </li>
              <li className='flex items-center'>
                <span className='text-green-500 mr-2'>✓</span>
                Redirecionamento automático
              </li>
              <li className='flex items-center'>
                <span className='text-green-500 mr-2'>✓</span>
                Loading states
              </li>
              <li className='flex items-center'>
                <span className='text-green-500 mr-2'>✓</span>
                Fallback components
              </li>
              <li className='flex items-center'>
                <span className='text-green-500 mr-2'>✓</span>
                Middleware integration
              </li>
            </ul>
          </div>

          {/* Uso */}
          <div className='bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6'>
            <h2 className='text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4'>
              Como Usar
            </h2>
            <div className='bg-gray-100 dark:bg-gray-700 rounded-lg p-4'>
              <pre className='text-sm text-gray-800 dark:text-gray-200 overflow-x-auto'>
                {`<ProtectedRoute
  requiredRole="admin"
  fallback={<LoginPrompt />}
  loading={<Spinner />}
>
  <AdminDashboard />
</ProtectedRoute>`}
              </pre>
            </div>
          </div>
        </div>

        {/* Exemplos */}
        <div className='bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8'>
          <h2 className='text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6'>
            Exemplos de Uso
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='border border-gray-200 dark:border-gray-600 rounded-lg p-4'>
              <h3 className='font-semibold text-gray-900 dark:text-gray-100 mb-2'>
                Rota Pública
              </h3>
              <p className='text-sm text-gray-600 dark:text-gray-400 mb-3'>
                Acesso permitido para todos os usuários
              </p>
              <div className='bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded p-3'>
                <p className='text-green-800 dark:text-green-200 text-sm'>
                  ✅ Acesso permitido
                </p>
              </div>
            </div>

            <div className='border border-gray-200 dark:border-gray-600 rounded-lg p-4'>
              <h3 className='font-semibold text-gray-900 dark:text-gray-100 mb-2'>
                Rota Protegida
              </h3>
              <p className='text-sm text-gray-600 dark:text-gray-400 mb-3'>
                Requer autenticação
              </p>
              <div className='bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded p-3'>
                <p className='text-yellow-800 dark:text-yellow-200 text-sm'>
                  🔒 Login necessário
                </p>
              </div>
            </div>

            <div className='border border-gray-200 dark:border-gray-600 rounded-lg p-4'>
              <h3 className='font-semibold text-gray-900 dark:text-gray-100 mb-2'>
                Rota Admin
              </h3>
              <p className='text-sm text-gray-600 dark:text-gray-400 mb-3'>
                Requer permissão de administrador
              </p>
              <div className='bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded p-3'>
                <p className='text-red-800 dark:text-red-200 text-sm'>
                  🚫 Acesso negado
                </p>
              </div>
            </div>

            <div className='border border-gray-200 dark:border-gray-600 rounded-lg p-4'>
              <h3 className='font-semibold text-gray-900 dark:text-gray-100 mb-2'>
                Rota com Role
              </h3>
              <p className='text-sm text-gray-600 dark:text-gray-400 mb-3'>
                Controle baseado em roles
              </p>
              <div className='bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded p-3'>
                <p className='text-blue-800 dark:text-blue-200 text-sm'>
                  👥 Verificação de perfil
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Configurações */}
        <div className='bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6'>
          <h2 className='text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6'>
            Configurações Disponíveis
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='space-y-4'>
              <div>
                <h3 className='font-semibold text-gray-900 dark:text-gray-100 mb-2'>
                  Props Principais
                </h3>
                <ul className='text-sm text-gray-600 dark:text-gray-400 space-y-1'>
                  <li>
                    • <code>requiredRole</code> - Role necessário
                  </li>
                  <li>
                    • <code>fallback</code> - Componente de fallback
                  </li>
                  <li>
                    • <code>loading</code> - Componente de loading
                  </li>
                  <li>
                    • <code>redirectTo</code> - URL de redirecionamento
                  </li>
                  <li>
                    • <code>children</code> - Conteúdo protegido
                  </li>
                </ul>
              </div>
            </div>

            <div className='space-y-4'>
              <div>
                <h3 className='font-semibold text-gray-900 dark:text-gray-100 mb-2'>
                  Estados de Acesso
                </h3>
                <ul className='text-sm text-gray-600 dark:text-gray-400 space-y-1'>
                  <li>
                    • <code>public</code> - Acesso público
                  </li>
                  <li>
                    • <code>authenticated</code> - Usuário logado
                  </li>
                  <li>
                    • <code>admin</code> - Administrador
                  </li>
                  <li>
                    • <code>moderator</code> - Moderador
                  </li>
                  <li>
                    • <code>custom</code> - Role personalizado
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Demo do componente */}
        <div className='bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mt-8'>
          <h2 className='text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6'>
            Demonstração
          </h2>

          <ProtectedRoute
            allowedRoles={['user', 'admin']}
            fallback={
              <div className='text-center py-8'>
                <p className='text-gray-600 dark:text-gray-400 mb-4'>
                  Esta área requer autenticação
                </p>
                <a
                  href='/login'
                  className='inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors'
                >
                  Fazer Login
                </a>
              </div>
            }
          >
            <div className='bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6'>
              <h3 className='text-lg font-semibold text-green-800 dark:text-green-200 mb-2'>
                Conteúdo Protegido
              </h3>
              <p className='text-green-700 dark:text-green-300'>
                Este conteúdo só é visível para usuários autenticados.
              </p>
            </div>
          </ProtectedRoute>
        </div>
      </div>
    </div>
  );
}
