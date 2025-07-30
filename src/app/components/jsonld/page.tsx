import { JsonLd } from '@/components/JsonLd';
import { generateDynamicSEO } from '@/utils/SEO';
import type { Metadata } from 'next';

export const metadata: Metadata = generateDynamicSEO('/components/jsonld');

export default function JsonLdDemoPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            JsonLd Component
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Componente para dados estruturados JSON-LD com suporte a Schema.org
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Funcionalidades */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Tipos de Dados Suportados
            </h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">🔧</span>
                SoftwareApplication
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">🏢</span>
                Organization
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">👤</span>
                Person
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">🌐</span>
                Website
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">🍞</span>
                BreadcrumbList
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">📝</span>
                Article
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
                {`<JsonLd
  data={[
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Aqua9 Boilerplate",
      "description": "Next.js boilerplate"
    }
  ]}
/>`}
              </pre>
            </div>
          </div>
        </div>

        {/* Exemplos */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Exemplos de Dados Estruturados
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Software Application
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Para aplicações e software
              </p>
              <div className="bg-gray-100 dark:bg-gray-700 rounded p-2">
                <code className="text-xs text-gray-800 dark:text-gray-200">
                  @type: SoftwareApplication
                </code>
              </div>
            </div>

            <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Organization
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Para empresas e organizações
              </p>
              <div className="bg-gray-100 dark:bg-gray-700 rounded p-2">
                <code className="text-xs text-gray-800 dark:text-gray-200">
                  @type: Organization
                </code>
              </div>
            </div>

            <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Person
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Para pessoas e autores
              </p>
              <div className="bg-gray-100 dark:bg-gray-700 rounded p-2">
                <code className="text-xs text-gray-800 dark:text-gray-200">
                  @type: Person
                </code>
              </div>
            </div>

            <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                BreadcrumbList
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Para navegação breadcrumb
              </p>
              <div className="bg-gray-100 dark:bg-gray-700 rounded p-2">
                <code className="text-xs text-gray-800 dark:text-gray-200">
                  @type: BreadcrumbList
                </code>
              </div>
            </div>
          </div>
        </div>

        {/* JsonLd Component */}
        <JsonLd />
      </div>
    </div>
  );
}
