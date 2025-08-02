import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '../contexts/ThemeContext';
import ThemeSwitcher from './ThemeSwitcher';

const meta: Meta<typeof ThemeSwitcher> = {
  title: 'Components/ThemeSwitcher',
  component: ThemeSwitcher,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'O ThemeSwitcher mostra que o tema dark está ativo.',
      },
    },
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
  parameters: {
    docs: {
      description: {
        story: 'Versão pequena do indicador de tema dark.',
      },
    },
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
  },
  parameters: {
    docs: {
      description: {
        story: 'Versão grande do indicador de tema dark.',
      },
    },
  },
};

export const Minimal: Story = {
  args: {
    variant: 'minimal',
  },
  parameters: {
    docs: {
      description: {
        story: 'Variante minimal do indicador de tema dark.',
      },
    },
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
  },
  parameters: {
    docs: {
      description: {
        story: 'Variante outline do indicador de tema dark.',
      },
    },
  },
};

export const WithoutAnimation: Story = {
  args: {
    animated: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Indicador de tema dark sem animações.',
      },
    },
  },
};
