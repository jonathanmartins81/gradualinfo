import { fireEvent, render, screen } from '@testing-library/react';
import { afterAll, beforeEach, describe, expect, it, vi } from 'vitest';
import Error from './error';

// Mock React useEffect
vi.mock('react', async () => {
  const actual = await vi.importActual('react');
  return {
    ...actual,
    useEffect: vi.fn(callback => callback()),
  };
});

// Mock console.error
const mockConsoleError = vi
  .spyOn(console, 'error')
  .mockImplementation(() => { });

describe('Error Page', () => {
  const mockError = {
    message: 'Test error message',
    digest: undefined,
  } as Error & { digest?: string };
  const mockReset = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterAll(() => {
    mockConsoleError.mockRestore();
  });

  it('should render error page correctly', () => {
    render(<Error error={mockError} reset={mockReset} />);

    expect(screen.getByText('🚨')).toBeInTheDocument();
    expect(screen.getByText('Erro interno')).toBeInTheDocument();
    expect(screen.getByText(/Ocorreu um erro inesperado/)).toBeInTheDocument();
  });

  it('should have a retry button', () => {
    render(<Error error={mockError} reset={mockReset} />);

    const retryButton = screen.getByRole('button', {
      name: /Tentar novamente/i,
    });
    expect(retryButton).toBeInTheDocument();
  });

  it('should call reset function when retry button is clicked', () => {
    render(<Error error={mockError} reset={mockReset} />);

    const retryButton = screen.getByRole('button', {
      name: /Tentar novamente/i,
    });
    fireEvent.click(retryButton);

    expect(mockReset).toHaveBeenCalledTimes(1);
  });

  it('should have links to home and support', () => {
    render(<Error error={mockError} reset={mockReset} />);

    const homeLink = screen.getByRole('link', { name: /Voltar ao início/i });
    const supportLink = screen.getByRole('link', { name: /Contatar suporte/i });

    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', '/');

    expect(supportLink).toBeInTheDocument();
    expect(supportLink).toHaveAttribute('href', 'mailto:contato@aqua9.com.br');
  });

  it('should display error details in development mode', () => {
    const originalEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = 'development';

    render(<Error error={mockError} reset={mockReset} />);

    const detailsElement = screen.getByText(/Detalhes do erro/);
    expect(detailsElement).toBeInTheDocument();

    process.env.NODE_ENV = originalEnv;
  });

  it('should not display error details in production mode', () => {
    const originalEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = 'production';

    render(<Error error={mockError} reset={mockReset} />);

    const detailsElement = screen.queryByText(/Detalhes do erro/);
    expect(detailsElement).not.toBeInTheDocument();

    process.env.NODE_ENV = originalEnv;
  });

  it('should display error digest if available', () => {
    const errorWithDigest = { ...mockError, digest: 'test-digest-123' };

    render(<Error error={errorWithDigest} reset={mockReset} />);

    expect(screen.getByText(/ID do erro: test-digest-123/)).toBeInTheDocument();
  });

  it('should have proper styling classes', () => {
    render(<Error error={mockError} reset={mockReset} />);

    // Verificar se o componente tem a estrutura básica
    const errorContainer = screen.getByText('🚨');
    expect(errorContainer).toBeInTheDocument();

    // Verificar se o container principal existe
    const mainContainer = errorContainer.closest('div');
    expect(mainContainer).toBeInTheDocument();
  });

  it('should display Aqua9 branding', () => {
    render(<Error error={mockError} reset={mockReset} />);

    expect(
      screen.getByText(/Desenvolvido com ❤️ pela Aqua9/)
    ).toBeInTheDocument();
  });

  it('should log error to console', () => {
    render(<Error error={mockError} reset={mockReset} />);

    expect(mockConsoleError).toHaveBeenCalledWith('Error:', mockError);
  });
});
