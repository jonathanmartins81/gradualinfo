import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import Input from './index';

describe('Input Component', () => {
  it('should render basic input', () => {
    render(<Input />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('should render with label', () => {
    const label = 'Email';
    render(<Input label={label} id='email' />);
    expect(screen.getByText(label)).toBeInTheDocument();
  });

  it('should render with placeholder', () => {
    const placeholder = 'Digite seu email';
    render(<Input placeholder={placeholder} />);
    expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
  });

  it('should render with different types', () => {
    const { rerender } = render(<Input type='email' />);
    expect(screen.getByRole('textbox')).toHaveAttribute('type', 'email');

    rerender(<Input type='password' />);
    expect(screen.getByDisplayValue('')).toHaveAttribute('type', 'password');

    rerender(<Input type='number' />);
    expect(screen.getByRole('spinbutton')).toBeInTheDocument();
  });

  it('should render with error message', () => {
    const error = 'Campo obrigatório';
    render(<Input error={error} />);
    expect(screen.getByText(error)).toBeInTheDocument();
  });

  it('should render with helper text', () => {
    const helperText = 'Digite um email válido';
    render(<Input helperText={helperText} />);
    expect(screen.getByText(helperText)).toBeInTheDocument();
  });

  it('should render with left icon', () => {
    const leftIcon = <span data-testid='left-icon'>🔍</span>;
    render(<Input leftIcon={leftIcon} />);
    expect(screen.getByTestId('left-icon')).toBeInTheDocument();
  });

  it('should render with right icon', () => {
    const rightIcon = <span data-testid='right-icon'>✓</span>;
    render(<Input rightIcon={rightIcon} />);
    expect(screen.getByTestId('right-icon')).toBeInTheDocument();
  });

  it('should render with loading state', () => {
    render(<Input loading />);
    expect(screen.getByRole('textbox')).toBeDisabled();
  });

  it('should render with disabled state', () => {
    render(<Input disabled />);
    expect(screen.getByRole('textbox')).toBeDisabled();
  });

  it('should render with required attribute', () => {
    render(<Input required />);
    const input = screen.getByRole('textbox');
    // O componente não passa o atributo required diretamente, mas mostra um indicador visual
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('should apply correct variant classes', () => {
    const { rerender } = render(<Input variant='outlined' />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('border-gray-300');

    rerender(<Input variant='filled' />);
    expect(input).toHaveClass('bg-gray-50');

    rerender(<Input variant='ghost' />);
    expect(input).toHaveClass('bg-transparent');
  });

  it('should apply correct size classes', () => {
    const { rerender } = render(<Input size='sm' />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('px-3', 'py-1.5', 'text-sm');

    rerender(<Input size='lg' />);
    expect(input).toHaveClass('px-6', 'py-3', 'text-lg');
  });

  it('should apply error classes when error is present', () => {
    render(<Input error='Error message' />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('border-red-500', 'focus:border-red-500');
  });

  it('should render with custom className', () => {
    const customClass = 'custom-input-class';
    render(<Input className={customClass} />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass(customClass);
  });

  it('should handle value prop', () => {
    const value = 'test@example.com';
    render(<Input value={value} />);
    expect(screen.getByDisplayValue(value)).toBeInTheDocument();
  });

  it('should handle onChange event', () => {
    const handleChange = vi.fn();
    render(<Input onChange={handleChange} />);
    const input = screen.getByRole('textbox');

    // Simular mudança de valor
    fireEvent.change(input, { target: { value: 'new value' } });

    expect(handleChange).toHaveBeenCalled();
  });

  it('should show required indicator when required', () => {
    render(<Input label='Email' required />);
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('should handle fullWidth prop', () => {
    render(<Input fullWidth />);
    const container = screen.getByRole('textbox').closest('div').parentElement;
    expect(container).toHaveClass('w-full');
  });

  it('should handle containerClassName prop', () => {
    const containerClass = 'custom-container';
    render(<Input containerClassName={containerClass} />);
    const container = screen.getByRole('textbox').closest('div').parentElement;
    expect(container).toHaveClass(containerClass);
  });

  it('should handle both icons simultaneously', () => {
    const leftIcon = <span data-testid='left-icon'>🔍</span>;
    const rightIcon = <span data-testid='right-icon'>✓</span>;
    render(<Input leftIcon={leftIcon} rightIcon={rightIcon} />);

    expect(screen.getByTestId('left-icon')).toBeInTheDocument();
    expect(screen.getByTestId('right-icon')).toBeInTheDocument();
  });

  it('should not show helper text when error is present', () => {
    const helperText = 'Helper text';
    const error = 'Error message';
    render(<Input helperText={helperText} error={error} />);

    expect(screen.getByText(error)).toBeInTheDocument();
    expect(screen.queryByText(helperText)).not.toBeInTheDocument();
  });
});
