import { render, screen } from '@testing-library/react';
import { afterAll, afterEach, describe, expect, it, vi } from 'vitest';
import Error from './error';

// Mock do useEffect
vi.mock('react', async () => {
  const actual = await vi.importActual('react');
  return {
    ...actual,
    useEffect: vi.fn(callback => callback()),
  };
});

// Mock do console.error
const mockConsoleError = vi
  .spyOn(console, 'error')
  .mockImplementation(() => { });

describe('Error Page', () => {
  const mockError = {
    message: 'Test error message',
    digest: undefined,
  } as Error & { digest?: string };
  const mockReset = vi.fn();

  afterEach(() => {
    vi.clearAllMocks();
  });

  afterAll(() => {
    mockConsoleError.mockRestore();
  });

  it('should log error to console', () => {
    render(<Error error={mockError} reset={mockReset} />);
    expect(mockConsoleError).toHaveBeenCalledWith('Error:', mockError);
  });

  it('should render error page correctly', () => {
    render(<Error error={mockError} reset={mockReset} />);

    expect(screen.getByText('Ops! Algo deu errado')).toBeInTheDocument();
    expect(screen.getByText(/Ocorreu um erro inesperado/)).toBeInTheDocument();
    expect(screen.getByText('Tentar novamente')).toBeInTheDocument();
  });

  it('should display error digest if available', () => {
    const errorWithDigest = {
      ...mockError,
      digest: 'test-digest-123',
    };

    render(<Error error={errorWithDigest} reset={mockReset} />);

    expect(screen.getByText(/Erro ID: test-digest-123/)).toBeInTheDocument();
  });

  it('should have proper styling classes', () => {
    render(<Error error={mockError} reset={mockReset} />);

    // Verificar se o componente tem a estrutura básica
    const errorContainer = screen.getByText('Ops! Algo deu errado');
    expect(errorContainer).toBeInTheDocument();
    const container = errorContainer.closest('div');
    expect(container).toHaveClass('mb-8');
  });
});
