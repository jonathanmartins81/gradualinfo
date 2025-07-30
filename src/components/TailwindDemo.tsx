/**
 * Componente de Demonstração - Tailwind CSS
 *
 * Este componente demonstra as funcionalidades do Tailwind CSS
 * implementado no boilerplate, incluindo componentes customizados,
 * animações, responsividade e design system.
 */

import { useState } from 'react';

interface TailwindDemoProps {
  title?: string;
}

export function TailwindDemo({ title = 'Tailwind CSS Demo' }: TailwindDemoProps) {
  const [activeTab, setActiveTab] = useState('buttons');
  const [isVisible, setIsVisible] = useState(true);

  const tabs = [
    { id: 'buttons', label: 'Botões', icon: '🔘' },
    { id: 'cards', label: 'Cards', icon: '🃏' },
    { id: 'forms', label: 'Formulários', icon: '📝' },
    { id: 'animations', label: 'Animações', icon: '✨' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="responsive-heading font-bold text-gradient-primary mb-4">
            {title}
          </h1>
          <p className="responsive-text text-gray-600 max-w-2xl mx-auto">
            Demonstração das funcionalidades do Tailwind CSS implementado no boilerplate,
            incluindo componentes customizados, animações e design system.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`btn ${activeTab === tab.id
                ? 'btn-primary'
                : 'btn-outline'
                }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="animate-fade-in">
          {activeTab === 'buttons' && (
            <div className="space-y-8">
              <div className="card p-8">
                <h2 className="text-2xl font-semibold mb-6">Botões</h2>
                <div className="flex flex-wrap gap-4">
                  <button className="btn-primary">Botão Primário</button>
                  <button className="btn-secondary">Botão Secundário</button>
                  <button className="btn-accent">Botão Accent</button>
                  <button className="btn-outline">Botão Outline</button>
                  <button className="btn-ghost">Botão Ghost</button>
                </div>
                <div className="flex flex-wrap gap-4 mt-4">
                  <button className="btn-primary btn-sm">Pequeno</button>
                  <button className="btn-primary">Normal</button>
                  <button className="btn-primary btn-lg">Grande</button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'cards' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="card-interactive p-6">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex-center mb-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Design System</h3>
                <p className="text-gray-600 mb-4">
                  Paleta de cores consistente e componentes reutilizáveis.
                </p>
                <div className="flex gap-2">
                  <span className="badge-primary">Design</span>
                  <span className="badge-secondary">Sistema</span>
                </div>
              </div>

              <div className="card-hover p-6">
                <div className="w-12 h-12 bg-secondary-100 rounded-lg flex-center mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Performance</h3>
                <p className="text-gray-600 mb-4">
                  Otimizado para velocidade e eficiência.
                </p>
                <div className="flex gap-2">
                  <span className="badge-success">Rápido</span>
                  <span className="badge-info">Eficiente</span>
                </div>
              </div>

              <div className="card p-6">
                <div className="w-12 h-12 bg-accent-100 rounded-lg flex-center mb-4">
                  <span className="text-2xl">🔧</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Customizável</h3>
                <p className="text-gray-600 mb-4">
                  Fácil de personalizar e adaptar.
                </p>
                <div className="flex gap-2">
                  <span className="badge-warning">Flexível</span>
                  <span className="badge-gray">Adaptável</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'forms' && (
            <div className="max-w-2xl mx-auto">
              <div className="card p-8">
                <h2 className="text-2xl font-semibold mb-6">Formulário de Exemplo</h2>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nome
                    </label>
                    <input
                      type="text"
                      className="input"
                      placeholder="Digite seu nome"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="input"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mensagem
                    </label>
                    <textarea
                      className="input resize-none"
                      rows={4}
                      placeholder="Digite sua mensagem..."
                    />
                  </div>

                  <div className="flex gap-4">
                    <button type="submit" className="btn-primary">
                      Enviar
                    </button>
                    <button type="button" className="btn-outline">
                      Cancelar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {activeTab === 'animations' && (
            <div className="space-y-8">
              <div className="card p-8">
                <h2 className="text-2xl font-semibold mb-6">Animações</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <button
                      onClick={() => setIsVisible(!isVisible)}
                      className="btn-primary mb-4"
                    >
                      Toggle Animação
                    </button>
                    {isVisible && (
                      <div className="animate-bounce-in p-6 bg-primary-50 rounded-lg">
                        <span className="text-4xl">🎉</span>
                        <p className="mt-2 text-primary-700">Animação Bounce</p>
                      </div>
                    )}
                  </div>

                  <div className="text-center">
                    <div className="animate-pulse-slow p-6 bg-secondary-50 rounded-lg">
                      <span className="text-4xl">💫</span>
                      <p className="mt-2 text-secondary-700">Pulse Lento</p>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="animate-scale-in p-6 bg-accent-50 rounded-lg">
                      <span className="text-4xl">✨</span>
                      <p className="mt-2 text-accent-700">Scale In</p>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="animate-fade-in p-6 bg-warning-50 rounded-lg">
                      <span className="text-4xl">🌟</span>
                      <p className="mt-2 text-warning-700">Fade In</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card p-8">
                <h3 className="text-xl font-semibold mb-4">Gradientes</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="gradient-primary p-6 rounded-lg text-white text-center">
                    <span className="text-2xl">🔵</span>
                    <p className="mt-2">Primário</p>
                  </div>
                  <div className="gradient-secondary p-6 rounded-lg text-white text-center">
                    <span className="text-2xl">🟢</span>
                    <p className="mt-2">Secundário</p>
                  </div>
                  <div className="gradient-accent p-6 rounded-lg text-white text-center">
                    <span className="text-2xl">🟣</span>
                    <p className="mt-2">Accent</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <div className="alert-info">
            <p className="font-medium">💡 Dica:</p>
            <p className="text-sm mt-1">
              Todos os estilos são aplicados usando classes utilitárias do Tailwind CSS.
              Verifique o código fonte para ver como cada elemento foi estilizado.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
