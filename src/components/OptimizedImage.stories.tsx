import type { Meta, StoryObj } from '@storybook/react';
import OptimizedImage from './OptimizedImage';

const meta: Meta<typeof OptimizedImage> = {
  title: 'Components/OptimizedImage',
  component: OptimizedImage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    priority: {
      control: { type: 'boolean' },
    },
    loading: {
      control: { type: 'select' },
      options: ['lazy', 'eager'],
    },
    quality: {
      control: { type: 'range', min: 1, max: 100, step: 1 },
    },
    objectFit: {
      control: { type: 'select' },
      options: ['contain', 'cover', 'fill', 'none', 'scale-down'],
    },
    objectPosition: {
      control: { type: 'select' },
      options: ['center', 'top', 'bottom', 'left', 'right'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: 'https://via.placeholder.com/400x300',
    alt: 'Imagem de exemplo',
    width: 400,
    height: 300,
  },
};

export const WithPriority: Story = {
  args: {
    src: 'https://via.placeholder.com/400x300',
    alt: 'Imagem prioritária',
    width: 400,
    height: 300,
    priority: true,
  },
};

export const LazyLoading: Story = {
  args: {
    src: 'https://via.placeholder.com/400x300',
    alt: 'Imagem com lazy loading',
    width: 400,
    height: 300,
    loading: 'lazy',
  },
};

export const HighQuality: Story = {
  args: {
    src: 'https://via.placeholder.com/400x300',
    alt: 'Imagem de alta qualidade',
    width: 400,
    height: 300,
    quality: 100,
  },
};

export const LowQuality: Story = {
  args: {
    src: 'https://via.placeholder.com/400x300',
    alt: 'Imagem de baixa qualidade',
    width: 400,
    height: 300,
    quality: 30,
  },
};

export const WithSizes: Story = {
  args: {
    src: 'https://via.placeholder.com/400x300',
    alt: 'Imagem responsiva',
    width: 400,
    height: 300,
    sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  },
};

export const WithPlaceholder: Story = {
  args: {
    src: 'https://via.placeholder.com/400x300',
    alt: 'Imagem com placeholder',
    width: 400,
    height: 300,
    placeholder: 'blur',
    blurDataURL:
      'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=',
  },
};

export const WithCustomClassName: Story = {
  args: {
    src: 'https://via.placeholder.com/400x300',
    alt: 'Imagem com classe customizada',
    width: 400,
    height: 300,
    className: 'rounded-lg shadow-lg',
  },
};

export const CoverFit: Story = {
  args: {
    src: 'https://via.placeholder.com/400x300',
    alt: 'Imagem com object-fit cover',
    width: 400,
    height: 300,
    objectFit: 'cover',
  },
};

export const ContainFit: Story = {
  args: {
    src: 'https://via.placeholder.com/400x300',
    alt: 'Imagem com object-fit contain',
    width: 400,
    height: 300,
    objectFit: 'contain',
  },
};

export const FillMode: Story = {
  args: {
    src: 'https://via.placeholder.com/400x300',
    alt: 'Imagem em modo fill',
    fill: true,
    className: 'relative w-96 h-64',
  },
};

export const WithOnLoad: Story = {
  args: {
    src: 'https://via.placeholder.com/400x300',
    alt: 'Imagem com onLoad',
    width: 400,
    height: 300,
    onLoad: () => console.log('Imagem carregada!'),
  },
};

export const WithOnError: Story = {
  args: {
    src: 'https://invalid-url.com/image.jpg',
    alt: 'Imagem com erro',
    width: 400,
    height: 300,
    onError: () => console.log('Erro ao carregar imagem!'),
  },
};

export const Responsive: Story = {
  args: {
    src: 'https://via.placeholder.com/400x300',
    alt: 'Imagem responsiva',
    width: 400,
    height: 300,
    className: 'w-full h-auto max-w-md',
  },
};

export const Circular: Story = {
  args: {
    src: 'https://via.placeholder.com/200x200',
    alt: 'Imagem circular',
    width: 200,
    height: 200,
    className: 'rounded-full',
  },
};

export const WithCaption: Story = {
  args: {
    src: 'https://via.placeholder.com/400x300',
    alt: 'Imagem com legenda',
    width: 400,
    height: 300,
  },
  render: args => (
    <figure>
      <OptimizedImage {...args} />
      <figcaption className='mt-2 text-sm text-gray-600 text-center'>
        Legenda da imagem
      </figcaption>
    </figure>
  ),
};
