import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Modal from './index';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      control: { type: 'boolean' },
    },
    onClose: {
      action: 'closed',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl', 'full'],
    },
    closeOnOverlayClick: {
      control: { type: 'boolean' },
    },
    closeOnEscape: {
      control: { type: 'boolean' },
    },
    showCloseButton: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Componente wrapper para demonstrar o modal
const ModalWrapper = ({ children, ...props }: Record<string, unknown>) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700'
      >
        Abrir Modal
      </button>
      <Modal {...props} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {children}
      </Modal>
    </div>
  );
};

export const Default: Story = {
  render: args => (
    <ModalWrapper {...args}>
      <div className='p-6'>
        <h2 className='text-xl font-semibold mb-4'>Modal Padrão</h2>
        <p className='text-gray-600 mb-4'>
          Este é um modal padrão com conteúdo simples.
        </p>
        <button className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700'>
          Ação
        </button>
      </div>
    </ModalWrapper>
  ),
};

export const Small: Story = {
  render: args => (
    <ModalWrapper {...args} size='sm'>
      <div className='p-4'>
        <h3 className='text-lg font-semibold mb-2'>Modal Pequeno</h3>
        <p className='text-gray-600'>Modal com tamanho pequeno.</p>
      </div>
    </ModalWrapper>
  ),
};

export const Large: Story = {
  render: args => (
    <ModalWrapper {...args} size='lg'>
      <div className='p-8'>
        <h2 className='text-2xl font-semibold mb-6'>Modal Grande</h2>
        <p className='text-gray-600 mb-6'>
          Este modal tem um tamanho maior para acomodar mais conteúdo.
        </p>
        <div className='grid grid-cols-2 gap-4'>
          <div className='p-4 bg-gray-100 rounded'>
            <h4 className='font-semibold mb-2'>Seção 1</h4>
            <p className='text-sm text-gray-600'>Conteúdo da primeira seção.</p>
          </div>
          <div className='p-4 bg-gray-100 rounded'>
            <h4 className='font-semibold mb-2'>Seção 2</h4>
            <p className='text-sm text-gray-600'>Conteúdo da segunda seção.</p>
          </div>
        </div>
      </div>
    </ModalWrapper>
  ),
};

export const FullScreen: Story = {
  render: args => (
    <ModalWrapper {...args} size='full'>
      <div className='p-8 h-full flex flex-col'>
        <h2 className='text-3xl font-semibold mb-6'>Modal Tela Cheia</h2>
        <div className='flex-1 bg-gray-100 rounded p-6'>
          <p className='text-gray-600 mb-4'>
            Este modal ocupa toda a tela, ideal para formulários complexos ou
            visualizações detalhadas.
          </p>
          <div className='grid grid-cols-3 gap-4'>
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className='p-4 bg-white rounded shadow'>
                <h4 className='font-semibold mb-2'>Item {i + 1}</h4>
                <p className='text-sm text-gray-600'>
                  Descrição do item {i + 1}.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ModalWrapper>
  ),
};

export const WithoutCloseButton: Story = {
  render: args => (
    <ModalWrapper {...args} showCloseButton={false}>
      <div className='p-6'>
        <h2 className='text-xl font-semibold mb-4'>Sem Botão de Fechar</h2>
        <p className='text-gray-600 mb-4'>
          Este modal não tem botão de fechar visível. Use ESC ou clique fora
          para fechar.
        </p>
        <button className='px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700'>
          Fechar Modal
        </button>
      </div>
    </ModalWrapper>
  ),
};

export const FormModal: Story = {
  render: args => (
    <ModalWrapper {...args} size='md'>
      <div className='p-6'>
        <h2 className='text-xl font-semibold mb-4'>Formulário</h2>
        <form className='space-y-4'>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>
              Nome
            </label>
            <input
              type='text'
              className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='Digite seu nome'
            />
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>
              Email
            </label>
            <input
              type='email'
              className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='seu@email.com'
            />
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>
              Mensagem
            </label>
            <textarea
              className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
              rows={3}
              placeholder='Digite sua mensagem'
            />
          </div>
          <div className='flex justify-end space-x-3 pt-4'>
            <button
              type='button'
              className='px-4 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-50'
            >
              Cancelar
            </button>
            <button
              type='submit'
              className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700'
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </ModalWrapper>
  ),
};

export const ConfirmationModal: Story = {
  render: args => (
    <ModalWrapper {...args} size='sm'>
      <div className='p-6 text-center'>
        <div className='mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4'>
          <svg
            className='h-6 w-6 text-red-600'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z'
            />
          </svg>
        </div>
        <h3 className='text-lg font-medium text-gray-900 mb-2'>
          Confirmar Exclusão
        </h3>
        <p className='text-sm text-gray-500 mb-6'>
          Tem certeza que deseja excluir este item? Esta ação não pode ser
          desfeita.
        </p>
        <div className='flex justify-center space-x-3'>
          <button className='px-4 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-50'>
            Cancelar
          </button>
          <button className='px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700'>
            Excluir
          </button>
        </div>
      </div>
    </ModalWrapper>
  ),
};

export const LoadingModal: Story = {
  render: args => (
    <ModalWrapper {...args} size='sm'>
      <div className='p-6 text-center'>
        <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4'></div>
        <h3 className='text-lg font-medium text-gray-900 mb-2'>
          Carregando...
        </h3>
        <p className='text-sm text-gray-500'>
          Por favor, aguarde enquanto processamos sua solicitação.
        </p>
      </div>
    </ModalWrapper>
  ),
};

export const CustomOverlay: Story = {
  render: args => (
    <ModalWrapper {...args} className='bg-black bg-opacity-75'>
      <div className='p-6 bg-white rounded-lg shadow-xl'>
        <h2 className='text-xl font-semibold mb-4'>
          Modal com Overlay Customizado
        </h2>
        <p className='text-gray-600'>
          Este modal tem um overlay com opacidade customizada.
        </p>
      </div>
    </ModalWrapper>
  ),
};
