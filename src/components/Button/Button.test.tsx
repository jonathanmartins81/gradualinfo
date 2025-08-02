import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Button from './index';

describe('Button Component', () => {
  it('should render button with default props', () => {
    render(<Button>Click me</Button>);

    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-primary-600');
  });

  it('should render button with different variants', () => {
    const { rerender } = render(<Button variant='secondary'>Secondary</Button>);
    expect(screen.getByRole('button')).toHaveClass('bg-gray-600');

    rerender(<Button variant='danger'>Danger</Button>);
    expect(screen.getByRole('button')).toHaveClass('bg-red-600');

    rerender(<Button variant='ghost'>Ghost</Button>);
    expect(screen.getByRole('button')).toHaveClass('text-gray-700');
  });

  it('should render button with different sizes', () => {
    const { rerender } = render(<Button size='sm'>Small</Button>);
    expect(screen.getByRole('button')).toHaveClass('px-3 py-1.5 text-sm');

    rerender(<Button size='lg'>Large</Button>);
    expect(screen.getByRole('button')).toHaveClass('px-6 py-3 text-lg');
  });

  it('should show loading state', () => {
    render(<Button loading>Loading</Button>);

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveClass('cursor-wait');
    expect(button.querySelector('svg')).toBeInTheDocument();
  });

  it('should handle click events', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should be disabled when loading', () => {
    const handleClick = vi.fn();
    render(
      <Button loading onClick={handleClick}>
        Loading
      </Button>
    );

    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('should render with full width', () => {
    render(<Button fullWidth>Full Width</Button>);
    expect(screen.getByRole('button')).toHaveClass('w-full');
  });

  it('should render with custom className', () => {
    render(<Button className='custom-class'>Custom</Button>);
    expect(screen.getByRole('button')).toHaveClass('custom-class');
  });
});
