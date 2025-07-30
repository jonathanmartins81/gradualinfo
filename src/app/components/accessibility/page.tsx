import {
  AccessibilityProvider,
  useAccessibility,
} from '@/components/AccessibilityProvider';
import { generateDynamicSEO } from '@/utils/SEO';
import type { Metadata } from 'next';

export const metadata: Metadata = generateDynamicSEO(
  '/components/accessibility'
);

function AccessibilityDemo() {
  const {
    highContrast,
    fontSize,
    reducedMotion,
    setHighContrast,
    setFontSize,
    setReducedMotion,
  } = useAccessibility();

  return (
    <div className='min-h-screen bg-white dark:bg-gray-50 py-12'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-16'>
          <h1 className='text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6'>
            Accessibility Settings
          </h1>
          <p className='text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto'>
            Configurações de acessibilidade para melhorar a experiência de todos
            os usuários
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
                Alto contraste
              </li>
              <li className='flex items-center'>
                <span className='text-green-500 mr-2'>✓</span>
                Tamanho de fonte ajustável
              </li>
              <li className='flex items-center'>
                <span className='text-green-500 mr-2'>✓</span>
                Redução de movimento
              </li>
              <li className='flex items-center'>
                <span className='text-green-500 mr-2'>✓</span>
                Persistência de configurações
              </li>
              <li className='flex items-center'>
                <span className='text-green-500 mr-2'>✓</span>
                Suporte a leitores de tela
              </li>
              <li className='flex items-center'>
                <span className='text-green-500 mr-2'>✓</span>
                Navegação por teclado
              </li>
            </ul>
          </div>

          {/* Controles */}
          <div className='bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6'>
            <h2 className='text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4'>
              Controles de Acessibilidade
            </h2>

            <div className='space-y-6'>
              {/* Alto Contraste */}
              <div className='flex items-center justify-between'>
                <div>
                  <h3 className='font-semibold text-gray-900 dark:text-gray-100'>
                    Alto Contraste
                  </h3>
                  <p className='text-sm text-gray-600 dark:text-gray-400'>
                    Melhora a visibilidade do conteúdo
                  </p>
                </div>
                <button
                  onClick={() => setHighContrast(!highContrast)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    highContrast
                      ? 'bg-blue-600'
                      : 'bg-gray-200 dark:bg-gray-600'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      highContrast ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Tamanho da Fonte */}
              <div>
                <h3 className='font-semibold text-gray-900 dark:text-gray-100 mb-2'>
                  Tamanho da Fonte
                </h3>
                <div className='flex space-x-2'>
                  {(['small', 'medium', 'large'] as const).map(size => (
                    <button
                      key={size}
                      onClick={() => setFontSize(size)}
                      className={`px-3 py-1 text-xs rounded-md transition-colors ${
                        fontSize === size
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                    >
                      {size === 'small'
                        ? 'Pequeno'
                        : size === 'medium'
                          ? 'Médio'
                          : 'Grande'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Redução de Movimento */}
              <div className='flex items-center justify-between'>
                <div>
                  <h3 className='font-semibold text-gray-900 dark:text-gray-100'>
                    Redução de Movimento
                  </h3>
                  <p className='text-sm text-gray-600 dark:text-gray-400'>
                    Reduz animações e transições
                  </p>
                </div>
                <button
                  onClick={() => setReducedMotion(!reducedMotion)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    reducedMotion
                      ? 'bg-blue-600'
                      : 'bg-gray-200 dark:bg-gray-600'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      reducedMotion ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Demonstração */}
        <div className='bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8'>
          <h2 className='text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6'>
            Demonstração dos Efeitos
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='border border-gray-200 dark:border-gray-600 rounded-lg p-4'>
              <h3 className='font-semibold text-gray-900 dark:text-gray-100 mb-3'>
                Texto de Exemplo
              </h3>
              <p className='text-gray-700 dark:text-gray-300 mb-2'>
                Este texto demonstra o tamanho da fonte atual.
              </p>
              <p className='text-sm text-gray-600 dark:text-gray-400'>
                O alto contraste afeta as cores de fundo e texto.
              </p>
            </div>

            <div className='border border-gray-200 dark:border-gray-600 rounded-lg p-4'>
              <h3 className='font-semibold text-gray-900 dark:text-gray-100 mb-3'>
                Elemento Animado
              </h3>
              <div className='w-16 h-16 bg-blue-500 rounded-lg animate-pulse flex items-center justify-center'>
                <span className='text-white font-bold'>A</span>
              </div>
              <p className='text-sm text-gray-600 dark:text-gray-400 mt-2'>
                A redução de movimento afeta esta animação.
              </p>
            </div>
          </div>
        </div>

        {/* Informações */}
        <div className='bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6'>
          <h2 className='text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6'>
            Informações sobre Acessibilidade
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='space-y-4'>
              <div>
                <h3 className='font-semibold text-gray-900 dark:text-gray-100 mb-2'>
                  Padrões Seguidos
                </h3>
                <ul className='text-sm text-gray-600 dark:text-gray-400 space-y-1'>
                  <li>• WCAG 2.1 AA</li>
                  <li>• Section 508</li>
                  <li>• ARIA Guidelines</li>
                  <li>• Semantic HTML</li>
                </ul>
              </div>
            </div>

            <div className='space-y-4'>
              <div>
                <h3 className='font-semibold text-gray-900 dark:text-gray-100 mb-2'>
                  Recursos Suportados
                </h3>
                <ul className='text-sm text-gray-600 dark:text-gray-400 space-y-1'>
                  <li>• Leitores de tela</li>
                  <li>• Navegação por teclado</li>
                  <li>• Zoom do navegador</li>
                  <li>• Preferências do sistema</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AccessibilityDemoPage() {
  return (
    <AccessibilityProvider>
      <AccessibilityDemo />
    </AccessibilityProvider>
  );
}
