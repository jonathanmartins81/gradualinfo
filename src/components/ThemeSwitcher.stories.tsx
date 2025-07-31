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
};

export const WithCustomLabel: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'O ThemeSwitcher alterna automaticamente entre os temas light, dark e system.',
      },
    },
  },
};

export const InDarkMode: Story = {
  args: {},
  decorators: [
    Story => (
      <ThemeProvider defaultMode='dark'>
        <div className='dark'>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export const InLightMode: Story = {
  args: {},
  decorators: [
    Story => (
      <ThemeProvider defaultMode='light'>
        <div className='light'>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export const SystemMode: Story = {
  args: {},
  decorators: [
    Story => (
      <ThemeProvider defaultMode='system'>
        <Story />
      </ThemeProvider>
    ),
  ],
};
