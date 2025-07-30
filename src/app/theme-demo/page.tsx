import { DynamicSEO } from '@/components/DynamicSEO';
import ThemeSwitcher, { CompactThemeSwitcher, ThemeSwitcherWithMenu } from '@/components/ThemeSwitcher';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demonstração de Tema - Aqua9 Boilerplate v2',
  description: 'Demonstração do sistema de tema claro/escuro do Aqua9 Boilerplate',
};

export default function ThemeDemoPage() {
  return (
    <DynamicSEO
      title="Demonstração de Tema"
      description="Explore o sistema de tema claro/escuro do Aqua9 Boilerplate"
    >
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-500">
        {/* Header */}
        <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                🎨 Demonstração de Tema
              </h1>
              <div className="flex items-center gap-4">
                <ThemeSwitcherWithMenu />
                <CompactThemeSwitcher />
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-6 py-12">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Sistema de Tema Claro/Escuro
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
              Explore as diferentes variações do ThemeSwitcher e veja como o design se adapta
              automaticamente ao tema selecionado.
            </p>

            {/* Theme Switchers Demo */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  Padrão
                </h3>
                <ThemeSwitcher size="lg" variant="default" />
              </div>

              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  Minimal
                </h3>
                <ThemeSwitcher size="lg" variant="minimal" />
              </div>

              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  Outline
                </h3>
                <ThemeSwitcher size="lg" variant="outline" />
              </div>

              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  Compacto
                </h3>
                <CompactThemeSwitcher />
              </div>
            </div>
          </section>

          {/* Cards Demo */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Card 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/20 p-6 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  Design System
                </h3>
                <span className="text-2xl">🎨</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Sistema de design completo com temas claro e escuro, tipografia consistente
                e componentes reutilizáveis.
              </p>
              <div className="flex gap-2">
                <span className="badge-primary">React</span>
                <span className="badge-secondary">TypeScript</span>
                <span className="badge-accent">Tailwind</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/20 p-6 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  Performance
                </h3>
                <span className="text-2xl">⚡</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Otimizado para performance com transições suaves, lazy loading e
                renderização eficiente.
              </p>
              <div className="flex gap-2">
                <span className="badge-success">Fast</span>
                <span className="badge-info">Optimized</span>
                <span className="badge-warning">Modern</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/20 p-6 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  Acessibilidade
                </h3>
                <span className="text-2xl">♿</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Totalmente acessível com suporte a navegação por teclado,
                leitores de tela e contraste adequado.
              </p>
              <div className="flex gap-2">
                <span className="badge-gray">WCAG</span>
                <span className="badge-success">A11y</span>
                <span className="badge-info">ARIA</span>
              </div>
            </div>
          </section>

          {/* Form Demo */}
          <section className="max-w-2xl mx-auto mb-16">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/20 p-8 border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                Formulário de Exemplo
              </h3>

              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="input w-full"
                    placeholder="Digite seu nome"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="input w-full"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="input w-full resize-none"
                    placeholder="Digite sua mensagem..."
                  />
                </div>

                <div className="flex gap-4">
                  <button type="submit" className="btn-primary">
                    Enviar
                  </button>
                  <button type="button" className="btn-secondary">
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </section>

          {/* Color Palette Demo */}
          <section className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-8 text-center">
              Paleta de Cores
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {/* Primary Colors */}
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Primary</h4>
                <div className="space-y-1">
                  <div className="h-8 bg-primary-500 rounded"></div>
                  <div className="h-8 bg-primary-600 rounded"></div>
                  <div className="h-8 bg-primary-700 rounded"></div>
                </div>
              </div>

              {/* Secondary Colors */}
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Secondary</h4>
                <div className="space-y-1">
                  <div className="h-8 bg-secondary-500 rounded"></div>
                  <div className="h-8 bg-secondary-600 rounded"></div>
                  <div className="h-8 bg-secondary-700 rounded"></div>
                </div>
              </div>

              {/* Accent Colors */}
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Accent</h4>
                <div className="space-y-1">
                  <div className="h-8 bg-accent-500 rounded"></div>
                  <div className="h-8 bg-accent-600 rounded"></div>
                  <div className="h-8 bg-accent-700 rounded"></div>
                </div>
              </div>

              {/* Success Colors */}
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Success</h4>
                <div className="space-y-1">
                  <div className="h-8 bg-success-500 rounded"></div>
                  <div className="h-8 bg-success-600 rounded"></div>
                  <div className="h-8 bg-success-700 rounded"></div>
                </div>
              </div>

              {/* Warning Colors */}
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Warning</h4>
                <div className="space-y-1">
                  <div className="h-8 bg-warning-500 rounded"></div>
                  <div className="h-8 bg-warning-600 rounded"></div>
                  <div className="h-8 bg-warning-700 rounded"></div>
                </div>
              </div>

              {/* Error Colors */}
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Error</h4>
                <div className="space-y-1">
                  <div className="h-8 bg-error-500 rounded"></div>
                  <div className="h-8 bg-error-600 rounded"></div>
                  <div className="h-8 bg-error-700 rounded"></div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="text-center text-gray-600 dark:text-gray-400">
            <p className="mb-2">
              ✨ Sistema de tema desenvolvido com ❤️ pela Aqua9
            </p>
            <p className="text-sm">
              Transições suaves • Persistência automática • Detecção do sistema
            </p>
          </footer>
        </main>
      </div>
    </DynamicSEO>
  );
}
