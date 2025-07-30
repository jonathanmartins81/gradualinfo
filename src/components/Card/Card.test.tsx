import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Card from './index';

describe('Card Component', () => {
  it('should render card with default props', () => {
    render(<Card>Card content</Card>);

    const card = screen.getByText('Card content');
    expect(card).toBeInTheDocument();
    // Verificar o wrapper do card (o elemento pai que contém as classes do card)
    const cardWrapper = card.closest('div')?.parentElement;
    expect(cardWrapper).toHaveClass('bg-white');
  });

  it('should render card with title', () => {
    render(<Card title='Card Title'>Content</Card>);

    expect(screen.getByText('Card Title')).toBeInTheDocument();
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('should render card with subtitle', () => {
    render(
      <Card title='Title' subtitle='Subtitle'>
        Content
      </Card>
    );

    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Subtitle')).toBeInTheDocument();
  });

  it('should render card with different variants', () => {
    const { rerender } = render(<Card variant='elevated'>Elevated</Card>);
    const elevatedCard = screen
      .getByText('Elevated')
      .closest('div')?.parentElement;
    expect(elevatedCard).toHaveClass('shadow-lg');

    rerender(<Card variant='outlined'>Outlined</Card>);
    const outlinedCard = screen
      .getByText('Outlined')
      .closest('div')?.parentElement;
    expect(outlinedCard).toHaveClass('border-2');

    rerender(<Card variant='filled'>Filled</Card>);
    const filledCard = screen.getByText('Filled').closest('div')?.parentElement;
    expect(filledCard).toHaveClass('bg-gray-50');
  });

  it('should render card with different sizes', () => {
    const { rerender } = render(<Card size='sm'>Small</Card>);
    const smallCard = screen.getByText('Small').closest('div')?.parentElement;
    expect(smallCard).toHaveClass('p-4');

    rerender(<Card size='lg'>Large</Card>);
    const largeCard = screen.getByText('Large').closest('div')?.parentElement;
    expect(largeCard).toHaveClass('p-8');
  });

  it('should render card with image', () => {
    render(
      <Card
        image={{
          src: '/test-image.jpg',
          alt: 'Test image',
        }}
      >
        Content
      </Card>
    );

    const image = screen.getByAltText('Test image');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src');
  });

  it('should render card with footer', () => {
    render(<Card footer={<div>Footer content</div>}>Content</Card>);

    expect(screen.getByText('Footer content')).toBeInTheDocument();
  });

  it('should handle click events when onClick is provided', () => {
    const handleClick = vi.fn();
    render(<Card onClick={handleClick}>Clickable card</Card>);

    fireEvent.click(screen.getByText('Clickable card'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should render as button when onClick is provided', () => {
    render(<Card onClick={() => {}}>Clickable</Card>);

    const card = screen.getByText('Clickable').closest('button');
    expect(card).toBeInTheDocument();
  });

  it('should apply hoverable styles when hoverable is true', () => {
    render(<Card hoverable>Hoverable card</Card>);

    const card = screen
      .getByText('Hoverable card')
      .closest('div')?.parentElement;
    expect(card).toHaveClass('hover:shadow-md');
  });

  it('should render with custom className', () => {
    render(<Card className='custom-class'>Custom</Card>);

    const card = screen.getByText('Custom').closest('div')?.parentElement;
    expect(card).toHaveClass('custom-class');
  });

  it('should render header actions', () => {
    render(
      <Card title='Title' headerActions={<button>Action</button>}>
        Content
      </Card>
    );

    expect(screen.getByText('Action')).toBeInTheDocument();
  });
});
