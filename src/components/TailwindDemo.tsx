'use client';

export default function TailwindDemo() {
  return (
    <div className='min-h-screen bg-white dark:bg-gray-50 py-12'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-16'>
          <h1 className='text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6'>
            Tailwind CSS Demo
          </h1>
          <p className='text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto'>
            Explore as funcionalidades do Tailwind CSS implementadas no Aqua9
            Boilerplate
          </p>
        </div>

        {/* Colors Section */}
        <section className='mb-16'>
          <h2 className='text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center'>
            Paleta de Cores
          </h2>
          <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4'>
            {/* Primary Colors */}
            <div className='text-center'>
              <div className='w-full h-20 bg-blue-600 rounded-lg mb-2'></div>
              <p className='text-sm font-medium text-gray-900 dark:text-gray-100'>
                Primary
              </p>
              <p className='text-xs text-gray-600 dark:text-gray-400'>
                blue-600
              </p>
            </div>
            <div className='text-center'>
              <div className='w-full h-20 bg-blue-500 rounded-lg mb-2'></div>
              <p className='text-sm font-medium text-gray-900 dark:text-gray-100'>
                Primary Light
              </p>
              <p className='text-xs text-gray-600 dark:text-gray-400'>
                blue-500
              </p>
            </div>
            <div className='text-center'>
              <div className='w-full h-20 bg-blue-700 rounded-lg mb-2'></div>
              <p className='text-sm font-medium text-gray-900 dark:text-gray-100'>
                Primary Dark
              </p>
              <p className='text-xs text-gray-600 dark:text-gray-400'>
                blue-700
              </p>
            </div>

            {/* Secondary Colors */}
            <div className='text-center'>
              <div className='w-full h-20 bg-purple-600 rounded-lg mb-2'></div>
              <p className='text-sm font-medium text-gray-900 dark:text-gray-100'>
                Secondary
              </p>
              <p className='text-xs text-gray-600 dark:text-gray-400'>
                purple-600
              </p>
            </div>
            <div className='text-center'>
              <div className='w-full h-20 bg-purple-500 rounded-lg mb-2'></div>
              <p className='text-sm font-medium text-gray-900 dark:text-gray-100'>
                Secondary Light
              </p>
              <p className='text-xs text-gray-600 dark:text-gray-400'>
                purple-500
              </p>
            </div>
            <div className='text-center'>
              <div className='w-full h-20 bg-purple-700 rounded-lg mb-2'></div>
              <p className='text-sm font-medium text-gray-900 dark:text-gray-100'>
                Secondary Dark
              </p>
              <p className='text-xs text-gray-600 dark:text-gray-400'>
                purple-700
              </p>
            </div>
          </div>
        </section>

        {/* Typography Section */}
        <section className='mb-16'>
          <h2 className='text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center'>
            Tipografia
          </h2>
          <div className='space-y-4'>
            <h1 className='text-4xl font-bold text-gray-900 dark:text-gray-100'>
              Heading 1 - Título Principal
            </h1>
            <h2 className='text-3xl font-semibold text-gray-900 dark:text-gray-100'>
              Heading 2 - Subtítulo
            </h2>
            <h3 className='text-2xl font-medium text-gray-900 dark:text-gray-100'>
              Heading 3 - Seção
            </h3>
            <h4 className='text-xl font-medium text-gray-900 dark:text-gray-100'>
              Heading 4 - Subseção
            </h4>
            <p className='text-lg text-gray-700 dark:text-gray-300'>
              Parágrafo grande - Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <p className='text-base text-gray-700 dark:text-gray-300'>
              Parágrafo normal - Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
            <p className='text-sm text-gray-600 dark:text-gray-400'>
              Texto pequeno - Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </section>

        {/* Buttons Section */}
        <section className='mb-16'>
          <h2 className='text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center'>
            Botões
          </h2>
          <div className='flex flex-wrap gap-4 justify-center'>
            <button className='bg-blue-600 dark:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 dark:hover:bg-blue-700 transition-colors'>
              Botão Primário
            </button>
            <button className='bg-purple-600 dark:bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 dark:hover:bg-purple-700 transition-colors'>
              Botão Secundário
            </button>
            <button className='bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors'>
              Botão Terciário
            </button>
            <button className='border-2 border-blue-600 dark:border-blue-600 text-blue-600 dark:text-blue-400 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors'>
              Botão Outline
            </button>
          </div>
        </section>

        {/* Cards Section */}
        <section className='mb-16'>
          <h2 className='text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center'>
            Cards
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/20 p-6 border border-gray-200 dark:border-gray-700'>
              <h3 className='text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4'>
                Card Básico
              </h3>
              <p className='text-gray-700 dark:text-gray-400 mb-4'>
                Este é um exemplo de card básico com sombra e borda.
              </p>
              <button className='bg-blue-600 dark:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 dark:hover:bg-blue-700 transition-colors'>
                Ação
              </button>
            </div>

            <div className='bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/20 p-6 border border-gray-200 dark:border-gray-700'>
              <h3 className='text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4'>
                Card com Ícone
              </h3>
              <div className='w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mb-4'>
                <span className='text-2xl'>🎨</span>
              </div>
              <p className='text-gray-700 dark:text-gray-400 mb-4'>
                Card com ícone e conteúdo adicional.
              </p>
              <button className='bg-purple-600 dark:bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700 dark:hover:bg-purple-700 transition-colors'>
                Ver Mais
              </button>
            </div>

            <div className='bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/20 p-6 border border-gray-200 dark:border-gray-700'>
              <h3 className='text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4'>
                Card Estatística
              </h3>
              <div className='text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2'>
                1,234
              </div>
              <p className='text-gray-700 dark:text-gray-400 mb-4'>
                Usuários ativos este mês
              </p>
              <div className='flex items-center text-green-600 dark:text-green-400 text-sm'>
                <span>↗</span>
                <span className='ml-1'>+12%</span>
              </div>
            </div>
          </div>
        </section>

        {/* Gradients Section */}
        <section className='mb-16'>
          <h2 className='text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center'>
            Gradientes
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='gradient-primary p-6 rounded-lg text-white text-center'>
              <h3 className='text-xl font-semibold mb-2'>Gradiente Primário</h3>
              <p>bg-gradient-to-r from-blue-600 to-blue-800</p>
            </div>
            <div className='gradient-secondary p-6 rounded-lg text-white text-center'>
              <h3 className='text-xl font-semibold mb-2'>
                Gradiente Secundário
              </h3>
              <p>bg-gradient-to-r from-purple-600 to-purple-800</p>
            </div>
            <div className='gradient-accent p-6 rounded-lg text-white text-center'>
              <h3 className='text-xl font-semibold mb-2'>Gradiente Accent</h3>
              <p>bg-gradient-to-r from-cyan-500 to-blue-500</p>
            </div>
          </div>
        </section>

        {/* Forms Section */}
        <section className='mb-16'>
          <h2 className='text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center'>
            Formulários
          </h2>
          <div className='max-w-md mx-auto'>
            <form className='space-y-6'>
              <div>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'
                >
                  Nome
                </label>
                <input
                  type='text'
                  id='name'
                  className='w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100'
                  placeholder='Digite seu nome'
                />
              </div>
              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'
                >
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  className='w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100'
                  placeholder='Digite seu email'
                />
              </div>
              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'
                >
                  Mensagem
                </label>
                <textarea
                  id='message'
                  rows={4}
                  className='w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100'
                  placeholder='Digite sua mensagem'
                ></textarea>
              </div>
              <button
                type='submit'
                className='w-full bg-blue-600 dark:bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 dark:hover:bg-blue-700 transition-colors'
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </section>

        {/* Alerts Section */}
        <section className='mb-16'>
          <h2 className='text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center'>
            Alertas
          </h2>
          <div className='space-y-4 max-w-2xl mx-auto'>
            <div className='bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4'>
              <div className='flex'>
                <div className='flex-shrink-0'>
                  <span className='text-green-600 dark:text-green-400'>✓</span>
                </div>
                <div className='ml-3'>
                  <p className='text-sm font-medium text-green-800 dark:text-green-200'>
                    Sucesso!
                  </p>
                  <p className='text-sm text-green-700 dark:text-green-300 mt-1'>
                    Operação realizada com sucesso.
                  </p>
                </div>
              </div>
            </div>

            <div className='bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4'>
              <div className='flex'>
                <div className='flex-shrink-0'>
                  <span className='text-yellow-600 dark:text-yellow-400'>
                    ⚠
                  </span>
                </div>
                <div className='ml-3'>
                  <p className='text-sm font-medium text-yellow-800 dark:text-yellow-200'>
                    Atenção
                  </p>
                  <p className='text-sm text-yellow-700 dark:text-yellow-300 mt-1'>
                    Esta ação requer confirmação.
                  </p>
                </div>
              </div>
            </div>

            <div className='bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4'>
              <div className='flex'>
                <div className='flex-shrink-0'>
                  <span className='text-red-600 dark:text-red-400'>✕</span>
                </div>
                <div className='ml-3'>
                  <p className='text-sm font-medium text-red-800 dark:text-red-200'>
                    Erro
                  </p>
                  <p className='text-sm text-red-700 dark:text-red-300 mt-1'>
                    Ocorreu um erro. Tente novamente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
