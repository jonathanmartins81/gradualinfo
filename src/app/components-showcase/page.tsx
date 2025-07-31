'use client';

import { Button, Card, DynamicSEO, Footer, Header, Input, Modal } from '@/components';
import { useState } from 'react';

export default function ComponentsShowcasePage() {
  return (
    <>
      <DynamicSEO
        title='Showcase de Componentes'
        description='Demonstração completa de todos os componentes reutilizáveis do Aqua9 Boilerplate'
      />

      <div className='min-h-screen bg-gray-50 dark:bg-gray-900'>
        {/* Header */}
        <Header
          title='Showcase de Componentes'
          subtitle='Biblioteca completa de componentes reutilizáveis'
          variant='hero'
          size='lg'
          logo={{
            src: '/img/logo-light.svg',
            alt: 'Aqua9 Logo',
          }}
        />

        <div className='container-responsive py-8'>
          {/* Seção Button */}
          <section className='mb-16'>
            <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center'>
              Componente Button
            </h2>

            <div className='grid-responsive'>
              <Card title='Variantes' subtitle='Diferentes estilos de botão'>
                <div className='space-y-4'>
                  <Button variant='primary'>Primary</Button>
                  <Button variant='secondary'>Secondary</Button>
                  <Button variant='danger'>Danger</Button>
                  <Button variant='ghost'>Ghost</Button>
                  <Button variant='outline'>Outline</Button>
                </div>
              </Card>

              <Card title='Tamanhos' subtitle='Diferentes tamanhos disponíveis'>
                <div className='space-y-4'>
                  <Button size='sm'>Small</Button>
                  <Button size='md'>Medium</Button>
                  <Button size='lg'>Large</Button>
                </div>
              </Card>

              <Card title='Estados' subtitle='Estados especiais do botão'>
                <div className='space-y-4'>
                  <Button loading>Loading</Button>
                  <Button disabled>Disabled</Button>
                  <Button fullWidth>Full Width</Button>
                </div>
              </Card>

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
              <Card title='Variantes' subtitle='Diferentes estilos de card'>
                <p className='mb-4'>Este é um card padrão com título e subtítulo.</p>
                <Button size='sm'>Ação</Button>
              </Card>

              <Card
                title='Elevated'
                subtitle='Card com sombra'
                variant='elevated'
              >
                <p className='mb-4'>Card com estilo elevated e sombra.</p>
                <Button size='sm' variant='secondary'>Ação</Button>
              </Card>

              <Card
                title='Outlined'
                subtitle='Card com borda'
                variant='outlined'
              >
                <p className='mb-4'>Card com estilo outlined e borda.</p>
                <Button size='sm' variant='outline'>Ação</Button>
              </Card>

              <Card
                title='Filled'
                subtitle='Card preenchido'
                variant='filled'
              >
                <p className='mb-4'>Card com background preenchido.</p>
                <Button size='sm' variant='ghost'>Ação</Button>
              </Card>
            </div>
          </section>

          {/* Seção Input */}
          <section className='mb-16'>
            <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center'>
              Componente Input
            </h2>

            <div className='grid-responsive'>
              <Card title='Tipos Básicos' subtitle='Diferentes tipos de input'>
                <div className='space-y-4'>
                  <Input label='Texto' placeholder='Digite seu nome' />
                  <Input label='Email' type='email' placeholder='seu@email.com' />
                  <Input label='Senha' type='password' placeholder='Sua senha' />
                  <Input label='Número' type='number' placeholder='123' />
                </div>
              </Card>

              <Card title='Variantes' subtitle='Diferentes estilos de input'>
                <div className='space-y-4'>
                  <Input label='Default' placeholder='Estilo padrão' />
                  <Input label='Outlined' variant='outlined' placeholder='Com borda' />
                  <Input label='Filled' variant='filled' placeholder='Preenchido' />
                  <Input label='Ghost' variant='ghost' placeholder='Transparente' />
                </div>
              </Card>

              <Card title='Estados' subtitle='Estados especiais do input'>
                <div className='space-y-4'>
                  <Input label='Obrigatório' placeholder='Campo obrigatório' required />
                  <Input label='Desabilitado' placeholder='Campo desabilitado' disabled />
                  <Input label='Com erro' placeholder='Campo com erro' error='Este campo é obrigatório' />
                  <Input label='Com ajuda' placeholder='Campo com ajuda' helperText='Texto de ajuda' />
                </div>
              </Card>

              <Card title='Tamanhos' subtitle='Diferentes tamanhos de input'>
                <div className='space-y-4'>
                  <Input label='Small' size='sm' placeholder='Input pequeno' />
                  <Input label='Medium' size='md' placeholder='Input médio' />
                  <Input label='Large' size='lg' placeholder='Input grande' />
                </div>
              </Card>
            </div>
          </section>

          {/* Seção Modal */}
          <section className='mb-16'>
            <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center'>
              Componente Modal
            </h2>

            <div className='grid-responsive'>
              <Card title='Modal Simples' subtitle='Modal básico com título'>
                <ModalDemo />
              </Card>

              <Card title='Modal com Footer' subtitle='Modal com ações no rodapé'>
                <ModalWithFooterDemo />
              </Card>

              <Card title='Modal Grande' subtitle='Modal com tamanho grande'>
                <LargeModalDemo />
              </Card>

              <Card title='Modal Lateral' subtitle='Modal que abre pela lateral'>
                <SideModalDemo />
              </Card>
            </div>
          </section>

          {/* Seção Header */}
          <section className='mb-16'>
            <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center'>
              Componente Header
            </h2>

            <div className='space-y-8'>
              <Card title='Header Padrão' subtitle='Header com estilo padrão'>
                <Header
                  title='Página Principal'
                  subtitle='Bem-vindo ao sistema'
                />
              </Card>

              <Card title='Header Dashboard' subtitle='Header para painéis'>
                <Header
                  title='Dashboard'
                  subtitle='Painel de controle'
                  variant='dashboard'
                  breadcrumbs={<span>Home / Dashboard</span>}
                  actions={
                    <div className='flex gap-2'>
                      <Button size='sm' variant='ghost'>Cancelar</Button>
                      <Button size='sm'>Salvar</Button>
                    </div>
                  }
                />
              </Card>

              <Card title='Header Minimal' subtitle='Header minimalista'>
                <Header
                  title='Header Minimalista'
                  variant='minimal'
                  size='sm'
                />
              </Card>
            </div>
          </section>
        </div>

        {/* Footer */}
        <Footer
          variant='branded'
          size='lg'
          logo={{
            src: '/img/logo-light.svg',
            alt: 'Aqua9 Logo',
          }}
          sections={[
            {
              title: 'Produtos',
              links: [
                { label: 'Boilerplate', href: '/' },
                { label: 'Documentação', href: '/docs' },
                { label: 'Exemplos', href: '/examples' },
              ],
            },
            {
              title: 'Recursos',
              links: [
                { label: 'Componentes', href: '/components' },
                { label: 'Temas', href: '/themes' },
                { label: 'Utilitários', href: '/utils' },
              ],
            },
            {
              title: 'Suporte',
              links: [
                { label: 'FAQ', href: '/faq' },
                { label: 'Contato', href: '/contact' },
                { label: 'GitHub', href: 'https://github.com', external: true },
              ],
            },
          ]}
          socialLinks={[
            { label: 'GitHub', href: 'https://github.com' },
            { label: 'Twitter', href: 'https://twitter.com' },
            { label: 'LinkedIn', href: 'https://linkedin.com' },
          ]}
          showBackToTop
        />
      </div>
    </>
  );
}

// Componentes de demonstração dos modais
function ModalDemo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Abrir Modal</Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title='Modal Simples'
        subtitle='Este é um modal básico'
      >
        <p>Conteúdo do modal aqui. Clique fora ou pressione ESC para fechar.</p>
      </Modal>
    </>
  );
}

function ModalWithFooterDemo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Modal com Footer</Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title='Confirmação'
        subtitle='Deseja realmente executar esta ação?'
        footer={
          <div className='flex gap-2'>
            <Button variant='ghost' onClick={() => setIsOpen(false)}>
              Cancelar
            </Button>
            <Button onClick={() => setIsOpen(false)}>
              Confirmar
            </Button>
          </div>
        }
      >
        <p>Esta ação não pode ser desfeita. Tem certeza que deseja continuar?</p>
      </Modal>
    </>
  );
}

function LargeModalDemo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Modal Grande</Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title='Modal Grande'
        size='lg'
      >
        <div className='space-y-4'>
          <p>Este é um modal com tamanho grande, ideal para formulários ou conteúdo extenso.</p>
          <Input label='Nome' placeholder='Digite seu nome' />
          <Input label='Email' type='email' placeholder='seu@email.com' />
          <Input label='Mensagem' placeholder='Digite sua mensagem' />
        </div>
      </Modal>
    </>
  );
}

function SideModalDemo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Modal Lateral</Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title='Menu Lateral'
        variant='side'
        size='md'
      >
        <div className='space-y-4'>
          <p>Este é um modal que abre pela lateral, ideal para menus ou navegação.</p>
          <div className='space-y-2'>
            <Button variant='ghost' fullWidth>Início</Button>
            <Button variant='ghost' fullWidth>Perfil</Button>
            <Button variant='ghost' fullWidth>Configurações</Button>
            <Button variant='ghost' fullWidth>Sair</Button>
          </div>
        </div>
      </Modal>
    </>
  );
}
