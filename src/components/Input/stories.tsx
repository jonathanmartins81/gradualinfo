import type { Meta, StoryObj } from '@storybook/react';
import Input from './index';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'filled', 'outlined'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
    },
    required: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    loading: {
      control: { type: 'boolean' },
    },
    fullWidth: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Digite algo...',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Email',
    placeholder: 'seu@email.com',
    type: 'email',
  },
};

export const Required: Story = {
  args: {
    label: 'Nome',
    placeholder: 'Seu nome',
    required: true,
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    placeholder: 'seu@email.com',
    type: 'email',
    error: 'Email inválido',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Senha',
    placeholder: '••••••••',
    type: 'password',
    helperText: 'Mínimo 8 caracteres',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Campo Desabilitado',
    placeholder: 'Não pode editar',
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    label: 'Carregando',
    placeholder: 'Aguarde...',
    loading: true,
  },
};

export const Small: Story = {
  args: {
    label: 'Pequeno',
    placeholder: 'Input pequeno',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    label: 'Grande',
    placeholder: 'Input grande',
    size: 'lg',
  },
};

export const Filled: Story = {
  args: {
    label: 'Preenchido',
    placeholder: 'Variante filled',
    variant: 'filled',
  },
};

export const Outlined: Story = {
  args: {
    label: 'Contornado',
    placeholder: 'Variante outlined',
    variant: 'outlined',
  },
};

export const WithLeftIcon: Story = {
  args: {
    label: 'Com Ícone Esquerdo',
    placeholder: 'Digite seu email',
    leftIcon: <span>📧</span>,
  },
};

export const WithRightIcon: Story = {
  args: {
    label: 'Com Ícone Direito',
    placeholder: 'Digite sua senha',
    type: 'password',
    rightIcon: <span>👁️</span>,
  },
};

export const WithBothIcons: Story = {
  args: {
    label: 'Com Ambos os Ícones',
    placeholder: 'Digite algo',
    leftIcon: <span>🔍</span>,
    rightIcon: <span>✓</span>,
  },
};

export const FullWidth: Story = {
  args: {
    label: 'Largura Completa',
    placeholder: 'Ocupa toda a largura',
    fullWidth: true,
  },
};

export const CustomClassName: Story = {
  args: {
    label: 'Classe Customizada',
    placeholder: 'Com estilo personalizado',
    className: 'border-2 border-blue-500',
  },
};

export const ContainerClassName: Story = {
  args: {
    label: 'Container Customizado',
    placeholder: 'Container com estilo',
    containerClassName: 'bg-gray-100 p-4 rounded-lg',
  },
};

export const Email: Story = {
  args: {
    label: 'Email',
    placeholder: 'seu@email.com',
    type: 'email',
    required: true,
  },
};

export const Password: Story = {
  args: {
    label: 'Senha',
    placeholder: '••••••••',
    type: 'password',
    required: true,
  },
};

export const Number: Story = {
  args: {
    label: 'Número',
    placeholder: '123',
    type: 'number',
  },
};

export const Tel: Story = {
  args: {
    label: 'Telefone',
    placeholder: '(11) 99999-9999',
    type: 'tel',
  },
};

export const Url: Story = {
  args: {
    label: 'URL',
    placeholder: 'https://exemplo.com',
    type: 'url',
  },
};
