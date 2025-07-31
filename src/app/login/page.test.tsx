import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import LoginPage from './page';

// Mock do useRouter
const mockPush = vi.fn();
vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

// Mock do window.setTimeout e window.clearTimeout
Object.defineProperty(window, 'setTimeout', {
  value: vi.fn(),
  writable: true,
});

Object.defineProperty(window, 'clearTimeout', {
  value: vi.fn(),
  writable: true,
});

// Mock do localStorage
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
};
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

describe('Login Page', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorageMock.setItem.mockClear();
    mockPush.mockClear();
  });

  it('should render login form', () => {
    render(<LoginPage />);

    expect(screen.getByText('Entrar')).toBeInTheDocument();
    expect(
      screen.getByText('Acesse sua conta para continuar')
    ).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Senha')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /entrar/i })).toBeInTheDocument();
  });

  it('should handle form submission with valid credentials', async () => {
    // Mock do setTimeout para simular API call
    const mockSetTimeout = vi.fn().mockImplementation(callback => {
      callback();
      return 1;
    });
    Object.defineProperty(window, 'setTimeout', {
      value: mockSetTimeout,
      writable: true,
    });

    render(<LoginPage />);

    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Senha');
    const submitButton = screen.getByRole('button', { name: /entrar/i });

    fireEvent.change(emailInput, { target: { value: 'admin@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith('/dashboard');
    });
  });

  it('should show loading state during submission', async () => {
    // Mock do setTimeout para não executar imediatamente
    const mockSetTimeout = vi.fn().mockImplementation(() => 1);
    Object.defineProperty(window, 'setTimeout', {
      value: mockSetTimeout,
      writable: true,
    });

    render(<LoginPage />);

    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Senha');
    const submitButton = screen.getByRole('button', { name: /entrar/i });

    fireEvent.change(emailInput, { target: { value: 'admin@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });
    fireEvent.click(submitButton);

    expect(submitButton).toBeDisabled();
    expect(submitButton).toHaveTextContent('Entrando...');
  });

  it('should show error message on login failure', async () => {
    // Mock do setTimeout para simular API call com erro
    const mockSetTimeout = vi.fn().mockImplementation(callback => {
      callback();
      return 1;
    });
    Object.defineProperty(window, 'setTimeout', {
      value: mockSetTimeout,
      writable: true,
    });

    render(<LoginPage />);

    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Senha');
    const submitButton = screen.getByRole('button', { name: /entrar/i });

    fireEvent.change(emailInput, { target: { value: 'wrong@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'wrongpassword' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText('Email ou senha incorretos')).toBeInTheDocument();
    });
  });

  it('should validate required fields', async () => {
    render(<LoginPage />);

    const submitButton = screen.getByRole('button', { name: /entrar/i });
    fireEvent.click(submitButton);

    // Verificar se os campos required estão presentes
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Senha');

    expect(emailInput).toHaveAttribute('required');
    expect(passwordInput).toHaveAttribute('required');
  });

  it('should validate email format', async () => {
    render(<LoginPage />);

    const emailInput = screen.getByLabelText('Email');
    expect(emailInput).toHaveAttribute('type', 'email');
  });

  it('should handle email input changes', () => {
    render(<LoginPage />);

    const emailInput = screen.getByLabelText('Email');
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });

    expect(emailInput).toHaveValue('test@example.com');
  });

  it('should handle password input changes', () => {
    render(<LoginPage />);

    const passwordInput = screen.getByLabelText('Senha');
    fireEvent.change(passwordInput, { target: { value: 'newpassword' } });

    expect(passwordInput).toHaveValue('newpassword');
  });

  it('should clear error message on new submission', async () => {
    // Primeiro, causar um erro
    const mockSetTimeout = vi.fn().mockImplementation(callback => {
      callback();
      return 1;
    });
    Object.defineProperty(window, 'setTimeout', {
      value: mockSetTimeout,
      writable: true,
    });

    render(<LoginPage />);

    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Senha');
    const submitButton = screen.getByRole('button', { name: /entrar/i });

    // Primeira tentativa com credenciais erradas
    fireEvent.change(emailInput, { target: { value: 'wrong@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'wrongpassword' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText('Email ou senha incorretos')).toBeInTheDocument();
    });

    // Segunda tentativa com credenciais corretas
    fireEvent.change(emailInput, { target: { value: 'admin@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(
        screen.queryByText('Email ou senha incorretos')
      ).not.toBeInTheDocument();
    });
  });

  it('should handle empty input values', () => {
    render(<LoginPage />);

    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Senha');

    expect(emailInput).toHaveValue('');
    expect(passwordInput).toHaveValue('');
  });

  it('should handle whitespace-only input', () => {
    render(<LoginPage />);

    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Senha');

    fireEvent.change(emailInput, { target: { value: '   ' } });
    fireEvent.change(passwordInput, { target: { value: '   ' } });

    expect(emailInput).toHaveValue('   ');
    expect(passwordInput).toHaveValue('   ');
  });

  it('should handle special characters in email', () => {
    render(<LoginPage />);

    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Senha');
    const submitButton = screen.getByRole('button', { name: /entrar/i });

    fireEvent.change(emailInput, { target: { value: 'test+tag@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(submitButton);

    expect(emailInput).toHaveValue('test+tag@example.com');
  });

  it('should handle long email addresses', () => {
    render(<LoginPage />);

    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Senha');
    const submitButton = screen.getByRole('button', { name: /entrar/i });

    const longEmail = 'a'.repeat(50) + '@' + 'b'.repeat(50) + '.com';
    fireEvent.change(emailInput, { target: { value: longEmail } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(submitButton);

    expect(emailInput).toHaveValue(longEmail);
  });

  it('should handle special characters in password', () => {
    render(<LoginPage />);

    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Senha');
    const submitButton = screen.getByRole('button', { name: /entrar/i });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'p@ssw0rd!@#$%' } });
    fireEvent.click(submitButton);

    expect(passwordInput).toHaveValue('p@ssw0rd!@#$%');
  });

  it('should display demo credentials', () => {
    render(<LoginPage />);

    expect(screen.getByText('admin@example.com')).toBeInTheDocument();
    expect(screen.getByText('password')).toBeInTheDocument();
  });

  it('should have proper form structure', () => {
    render(<LoginPage />);

    const form = screen.getByRole('form');
    expect(form).toBeInTheDocument();

    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Senha');

    expect(form).toContainElement(emailInput);
    expect(form).toContainElement(passwordInput);
  });

  it('should have proper accessibility attributes', () => {
    render(<LoginPage />);

    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Senha');
    const submitButton = screen.getByRole('button', { name: /entrar/i });

    expect(emailInput).toHaveAttribute('id', 'email');
    expect(passwordInput).toHaveAttribute('id', 'password');
    expect(submitButton).toHaveAttribute('type', 'submit');
  });
});
