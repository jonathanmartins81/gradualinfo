import { OptimizedImage } from '@/components/OptimizedImage';
import { generateDynamicSEO } from '@/utils/SEO';
import type { Metadata } from 'next';

export const metadata: Metadata = generateDynamicSEO('/components/optimized-image');

export default function OptimizedImageDemoPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Optimized Image Component
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Componente de imagem otimizada com lazy loading, placeholders e responsividade
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Funcionalidades */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Funcionalidades
            </h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Lazy loading automático
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Placeholder blur
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Responsividade automática
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Otimização de formato
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Fallback para erro
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Suporte a WebP/AVIF
              </li>
            </ul>
          </div>

          {/* Uso */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Como Usar
            </h2>
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
              <pre className="text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
                {`<OptimizedImage
  src="/img/example.jpg"
  alt="Descrição da imagem"
  width={400}
  height={300}
  priority={false}
  placeholder="blur"
/>`}
              </pre>
            </div>
          </div>
        </div>

        {/* Exemplos */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Exemplos de Uso
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Imagem Responsiva
              </h3>
              <OptimizedImage
                src="/img/illustration.svg"
                alt="Ilustração responsiva"
                width={300}
                height={200}
                className="w-full h-auto rounded-lg"
              />
            </div>

            <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Imagem com Placeholder
              </h3>
              <OptimizedImage
                src="/img/logo-light.svg"
                alt="Logo com placeholder"
                width={200}
                height={100}
                placeholder="blur"
                className="w-full h-auto rounded-lg"
              />
            </div>

            <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Imagem Prioritária
              </h3>
              <OptimizedImage
                src="/img/logo-dark.svg"
                alt="Logo prioritária"
                width={150}
                height={75}
                priority={true}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Configurações */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Configurações Disponíveis
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Props Principais
                </h3>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• <code>src</code> - URL da imagem</li>
                  <li>• <code>alt</code> - Texto alternativo</li>
                  <li>• <code>width</code> - Largura da imagem</li>
                  <li>• <code>height</code> - Altura da imagem</li>
                  <li>• <code>priority</code> - Carregamento prioritário</li>
                  <li>• <code>placeholder</code> - Tipo de placeholder</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Tipos de Placeholder
                </h3>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• <code>blur</code> - Efeito blur</li>
                  <li>• <code>empty</code> - Sem placeholder</li>
                  <li>• <code>data</code> - Base64 data URL</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
