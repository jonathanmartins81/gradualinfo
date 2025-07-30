import type { Meta, StoryObj } from '@storybook/react';
import DynamicSEO from './index';

const meta: Meta<typeof DynamicSEO> = {
  title: 'Components/DynamicSEO',
  component: DynamicSEO,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'Título da página',
    },
    description: {
      control: { type: 'text' },
      description: 'Descrição da página',
    },
    type: {
      control: { type: 'select' },
      options: ['website', 'article', 'product', 'profile'],
      description: 'Tipo de conteúdo',
    },
    keywords: {
      control: { type: 'object' },
      description: 'Palavras-chave',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Página Principal',
    description: 'Descrição da página principal',
  },
};

export const WithKeywords: Story = {
  args: {
    title: 'Página com Keywords',
    description: 'Página com palavras-chave definidas',
    keywords: ['react', 'nextjs', 'typescript', 'tailwind'],
  },
};

export const Article: Story = {
  args: {
    title: 'Artigo de Blog',
    description: 'Descrição do artigo de blog',
    type: 'article',
    author: 'João Silva',
    publishedTime: '2024-01-15T10:00:00Z',
    modifiedTime: '2024-01-16T14:30:00Z',
    section: 'Tecnologia',
    tags: ['react', 'nextjs', 'frontend'],
  },
};

export const WithImage: Story = {
  args: {
    title: 'Página com Imagem',
    description: 'Página com imagem para Open Graph',
    image: 'https://example.com/og-image.jpg',
  },
};

export const Product: Story = {
  args: {
    title: 'Produto - Aqua9 Boilerplate',
    description: 'Template Next.js profissional com TypeScript',
    type: 'product',
    image: 'https://example.com/product-image.jpg',
  },
};

export const Profile: Story = {
  args: {
    title: 'Perfil - João Silva',
    description: 'Perfil profissional de João Silva',
    type: 'profile',
    author: 'João Silva',
  },
};

export const WithCanonical: Story = {
  args: {
    title: 'Página com URL Canônica',
    description: 'Página com URL canônica definida',
    canonical: 'https://example.com/canonical-page',
  },
};
