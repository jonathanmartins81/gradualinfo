import type { Meta, StoryObj } from '@storybook/react';
import Button from '../Button';
import Card from './index';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'elevated', 'outlined', 'filled'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    hoverable: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'This is a basic card with some content.',
  },
};

export const WithTitle: Story = {
  args: {
    title: 'Card Title',
    children: 'This card has a title and some content.',
  },
};

export const WithTitleAndSubtitle: Story = {
  args: {
    title: 'Card Title',
    subtitle: 'Card subtitle',
    children: 'This card has both title and subtitle.',
  },
};

export const Elevated: Story = {
  args: {
    title: 'Elevated Card',
    variant: 'elevated',
    children: 'This card has elevated styling with shadow.',
  },
};

export const Outlined: Story = {
  args: {
    title: 'Outlined Card',
    variant: 'outlined',
    children: 'This card has outlined styling.',
  },
};

export const Filled: Story = {
  args: {
    title: 'Filled Card',
    variant: 'filled',
    children: 'This card has filled background styling.',
  },
};

export const Small: Story = {
  args: {
    title: 'Small Card',
    size: 'sm',
    children: 'This is a small card.',
  },
};

export const Large: Story = {
  args: {
    title: 'Large Card',
    size: 'lg',
    children: 'This is a large card with more padding.',
  },
};

export const WithImage: Story = {
  args: {
    title: 'Card with Image',
    image: {
      src: '/img/illustration.svg',
      alt: 'Card illustration',
    },
    children: 'This card includes an image at the top.',
  },
};

export const WithFooter: Story = {
  args: {
    title: 'Card with Footer',
    children: 'This card has a footer section.',
    footer: (
      <div className='flex justify-between items-center'>
        <span className='text-sm text-gray-500'>Last updated: 2 hours ago</span>
        <Button size='sm'>View Details</Button>
      </div>
    ),
  },
};

export const WithHeaderActions: Story = {
  args: {
    title: 'Card with Actions',
    headerActions: (
      <div className='flex gap-2'>
        <Button size='sm' variant='ghost'>
          Edit
        </Button>
        <Button size='sm' variant='danger'>
          Delete
        </Button>
      </div>
    ),
    children: 'This card has action buttons in the header.',
  },
};

export const Hoverable: Story = {
  args: {
    title: 'Hoverable Card',
    hoverable: true,
    children: 'This card has hover effects. Try hovering over it!',
  },
};

export const Clickable: Story = {
  args: {
    title: 'Clickable Card',
    hoverable: true,
    onClick: () => window.alert('Card clicked!'),
    children: 'This card is clickable. Click to see an alert!',
  },
};
