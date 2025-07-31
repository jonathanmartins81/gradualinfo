import type { Meta, StoryObj } from '@storybook/react';
import Button from '../Button';
import Header from './index';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'minimal', 'hero', 'dashboard'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Página Principal',
    subtitle: 'Bem-vindo ao sistema',
  },
};

export const WithLogo: Story = {
  args: {
    title: 'Aqua9 Boilerplate',
    subtitle: 'Template Next.js profissional',
    logo: {
      src: '/img/logo-light.svg',
      alt: 'Aqua9 Logo',
    },
  },
};

export const Hero: Story = {
  args: {
    title: 'Hero Header',
    subtitle: 'Uma experiência incrível espera por você',
    variant: 'hero',
    size: 'lg',
  },
};

export const Dashboard: Story = {
  args: {
    title: 'Dashboard',
    subtitle: 'Painel de controle',
    variant: 'dashboard',
    breadcrumbs: <span>Home / Dashboard</span>,
  },
};

export const WithActions: Story = {
  args: {
    title: 'Página com Ações',
    subtitle: 'Ações disponíveis no header',
    actions: (
      <div className="flex gap-2">
        <Button size="sm" variant="ghost">Cancelar</Button>
        <Button size="sm">Salvar</Button>
      </div>
    ),
  },
};

export const Minimal: Story = {
  args: {
    title: 'Header Minimalista',
    variant: 'minimal',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    title: 'Header Grande',
    subtitle: 'Com mais espaço e destaque',
    size: 'lg',
  },
};
