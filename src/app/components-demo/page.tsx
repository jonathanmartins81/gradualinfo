import { Button, Card, DynamicSEO } from '@/components';
import { generateDynamicSEO } from '@/utils/SEO';
import type { Metadata } from 'next';

export const metadata: Metadata = generateDynamicSEO('components-demo');

export default function ComponentsDemoPage() {
  return (
    <>
      <DynamicSEO
        title='Demonstração de Componentes'
        description='Explore os componentes reutilizáveis do Aqua9 Boilerplate'
      />

      <div className='min-h-screen bg-gray-50 dark:bg-gray-900 py-8'>
        <div className='container-responsive'>
          {/* Header */}
          <div className='text-center mb-12'>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4'>
              Componentes Reutilizáveis
            </h1>
            <p className='text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto'>
              Explore nossa biblioteca de componentes seguindo as melhores
              práticas de design system
            </p>
          </div>

          {/* Seção Button */}
          <section className='mb-16'>
            <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center'>
              Componente Button
            </h2>

            <div className='grid-responsive'>
              {/* Variantes */}
              <Card title='Variantes' subtitle='Diferentes estilos de botão'>
                <div className='space-y-4'>
                  <Button variant='primary'>Primary</Button>
                  <Button variant='secondary'>Secondary</Button>
                  <Button variant='danger'>Danger</Button>
                  <Button variant='ghost'>Ghost</Button>
                  <Button variant='outline'>Outline</Button>
                </div>
              </Card>

              {/* Tamanhos */}
              <Card title='Tamanhos' subtitle='Diferentes tamanhos disponíveis'>
                <div className='space-y-4'>
                  <Button size='sm'>Small</Button>
                  <Button size='md'>Medium</Button>
                  <Button size='lg'>Large</Button>
                </div>
              </Card>

              {/* Estados */}
              <Card title='Estados' subtitle='Estados especiais do botão'>
                <div className='space-y-4'>
                  <Button loading>Loading</Button>
                  <Button disabled>Disabled</Button>
                  <Button fullWidth>Full Width</Button>
                </div>
              </Card>

              {/* Com ícones */}
              <Card title='Com Ícones' subtitle='Botões com ícones'>
                <div className='space-y-4'>
                  <Button icon='🚀' iconPosition='left'>
                    Com ícone à esquerda
                  </Button>
                  <Button icon='⭐' iconPosition='right'>
                    Com ícone à direita
                  </Button>
                </div>
              </Card>
            </div>
          </section>

          {/* Seção Card */}
          <section className='mb-16'>
            <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center'>
              Componente Card
            </h2>

            <div className='grid-responsive'>
              {/* Variantes */}
              <Card title='Variantes' subtitle='Diferentes estilos de card'>
                <p className='mb-4'>
                  Este é um card padrão com título e subtítulo.
                </p>
                <Button size='sm'>Ação</Button>
              </Card>

              <Card
                title='Elevated'
                subtitle='Card com sombra'
                variant='elevated'
              >
                <p className='mb-4'>Card com estilo elevated e sombra.</p>
                <Button size='sm' variant='secondary'>
                  Ação
                </Button>
              </Card>

              <Card
                title='Outlined'
                subtitle='Card com borda'
                variant='outlined'
              >
                <p className='mb-4'>Card com estilo outlined e borda.</p>
                <Button size='sm' variant='outline'>
                  Ação
                </Button>
              </Card>

              <Card title='Filled' subtitle='Card preenchido' variant='filled'>
                <p className='mb-4'>Card com background preenchido.</p>
                <Button size='sm' variant='ghost'>
                  Ação
                </Button>
              </Card>
            </div>
          </section>

          {/* Seção Tamanhos */}
          <section className='mb-16'>
            <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center'>
              Tamanhos de Card
            </h2>

            <div className='grid-responsive'>
              <Card title='Small' size='sm'>
                <p>Card pequeno com menos padding.</p>
              </Card>

              <Card title='Medium' size='md'>
                <p>Card médio com padding padrão.</p>
              </Card>

              <Card title='Large' size='lg'>
                <p>Card grande com mais padding.</p>
              </Card>
            </div>
          </section>

          {/* Seção Interativa */}
          <section className='mb-16'>
            <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center'>
              Cards Interativos
            </h2>

            <div className='grid-responsive'>
              <Card title='Hoverable' subtitle='Passe o mouse' hoverable>
                <p>Este card tem efeitos de hover. Passe o mouse sobre ele!</p>
              </Card>

              <Card
                title='Clickable'
                subtitle='Clique aqui'
                hoverable
                onClick={() => window.alert('Card clicado!')}
              >
                <p>Este card é clicável. Clique para ver uma ação!</p>
              </Card>

              <Card
                title='Com Imagem'
                subtitle='Card com imagem'
                image={{
                  src: '/img/illustration.svg',
                  alt: 'Ilustração do card',
                }}
              >
                <p>Este card inclui uma imagem no topo.</p>
              </Card>

              <Card
                title='Com Footer'
                subtitle='Card com rodapé'
                footer={
                  <div className='flex justify-between items-center'>
                    <span className='text-sm text-gray-500'>
                      Última atualização: 2 horas atrás
                    </span>
                    <Button size='sm'>Ver detalhes</Button>
                  </div>
                }
              >
                <p>Este card tem um rodapé com informações adicionais.</p>
              </Card>
            </div>
          </section>

          {/* Seção Header Actions */}
          <section className='mb-16'>
            <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center'>
              Cards com Ações no Header
            </h2>

            <div className='grid-responsive'>
              <Card
                title='Com Ações'
                subtitle='Ações no cabeçalho'
                headerActions={
                  <div className='flex gap-2'>
                    <Button size='sm' variant='ghost'>
                      Editar
                    </Button>
                    <Button size='sm' variant='danger'>
                      Excluir
                    </Button>
                  </div>
                }
              >
                <p>Este card tem botões de ação no cabeçalho.</p>
              </Card>

              <Card
                title='Com Menu'
                subtitle='Menu de opções'
                headerActions={
                  <Button size='sm' variant='ghost'>
                    ⋮
                  </Button>
                }
              >
                <p>Este card tem um menu de opções no cabeçalho.</p>
              </Card>
            </div>
          </section>

          {/* Footer */}
          <div className='text-center text-gray-600 dark:text-gray-400'>
            <p className='text-lg'>
              ✨ Todos os componentes seguem o padrão de design system do Aqua9
            </p>
            <p className='text-sm mt-2'>
              Responsivos, acessíveis e reutilizáveis
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
