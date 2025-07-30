import { DynamicSEO } from '@/components/DynamicSEO';
import { generateDynamicSEO } from '@/utils/SEO';
import type { Metadata } from 'next';

export const metadata: Metadata = generateDynamicSEO('/components/dynamic-seo');

export default function DynamicSEODemoPage() {
  return (
    <>
      <DynamicSEO
        title="Dynamic SEO Component - Aqua9 Boilerplate"
        description="Demonstração do componente DynamicSEO com funcionalidades de SEO dinâmico"
        keywords={['seo', 'dynamic', 'component', 'next.js', 'aqua9']}
        type="website"
        image="/og-image.svg"
        canonical="https://aqua9.com.br/components/dynamic-seo"
      />

      <div className="min-h-screen bg-white dark:bg-gray-50 py-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Dynamic SEO Component
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Componente para gerenciamento dinâmico de SEO com suporte a metadados,
              Open Graph, Twitter Cards e dados estruturados
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
                  Metadados dinâmicos
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Open Graph tags
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Twitter Cards
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Dados estruturados JSON-LD
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Canonical URLs
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Meta robots
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
                  {`<DynamicSEO
  title="Título da Página"
  description="Descrição da página"
  keywords={['palavra', 'chave']}
  type="website"
  image="/og-image.jpg"
  canonical="https://site.com/pagina"
/>`}
                </pre>
              </div>
            </div>
          </div>

          {/* Exemplos */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Exemplos de Uso
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Página Simples
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Configuração básica com título e descrição
                </p>
              </div>

              <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Página com Imagem
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Incluindo imagem para redes sociais
                </p>
              </div>

              <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Página de Produto
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Com dados estruturados para e-commerce
                </p>
              </div>

              <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Página de Blog
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Com autor, data e tempo de leitura
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
