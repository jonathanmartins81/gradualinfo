import { act, renderHook } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { useAuth } from './useAuth';

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

// Mock do fetch
global.fetch = vi.fn();

describe('useAuth Hook', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorageMock.getItem.mockReturnValue(null);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should initialize with default state', () => {
    const { result } = renderHook(() => useAuth());

    expect(result.current.user).toBeNull();
    expect(result.current.isAuthenticated).toBe(false);
    expect(result.current.isLoading).toBe(false);
    expect(typeof result.current.login).toBe('function');
    expect(typeof result.current.logout).toBe('function');
    expect(typeof result.current.register).toBe('function');
  });

  it('should load user from localStorage on mount', () => {
    const mockUser = { id: '1', email: 'test@example.com', role: 'user' };
    localStorageMock.getItem.mockReturnValue(JSON.stringify(mockUser));

    const { result } = renderHook(() => useAuth());

    expect(result.current.user).toEqual(mockUser);
    expect(result.current.isAuthenticated).toBe(true);
  });

  it('should handle invalid localStorage data gracefully', () => {
    localStorageMock.getItem.mockReturnValue('invalid-json');

    const { result } = renderHook(() => useAuth());

    expect(result.current.user).toBeNull();
    expect(result.current.isAuthenticated).toBe(false);
  });

  it('should handle localStorage errors gracefully', () => {
    localStorageMock.getItem.mockImplementation(() => {
      throw new Error('localStorage error');
    });

    const { result } = renderHook(() => useAuth());

    expect(result.current.user).toBeNull();
    expect(result.current.isAuthenticated).toBe(false);
  });

  it('should login successfully', async () => {
    const mockUser = { id: '1', email: 'test@example.com', role: 'user' };
    const mockResponse = {
      ok: true,
      json: () => Promise.resolve({ user: mockUser, token: 'mock-token' }),
    };
    (fetch as any).mockResolvedValue(mockResponse);

    const { result } = renderHook(() => useAuth());

    await act(async () => {
      await result.current.login('test@example.com', 'password');
    });

    expect(result.current.user).toEqual(mockUser);
    expect(result.current.isAuthenticated).toBe(true);
    expect(result.current.isLoading).toBe(false);
    expect(localStorageMock.setItem).toHaveBeenCalledWith(
      'token',
      'mock-token'
    );
    expect(localStorageMock.setItem).toHaveBeenCalledWith(
      'user',
      JSON.stringify(mockUser)
    );
  });

  it('should handle login errors', async () => {
    const mockResponse = {
      ok: false,
      status: 401,
      json: () => Promise.resolve({ error: 'Invalid credentials' }),
    };
    (fetch as any).mockResolvedValue(mockResponse);

    const { result } = renderHook(() => useAuth());

    await act(async () => {
      await result.current.login('test@example.com', 'wrong-password');
    });

    expect(result.current.user).toBeNull();
    expect(result.current.isAuthenticated).toBe(false);
    expect(result.current.isLoading).toBe(false);
  });

  it('should handle network errors during login', async () => {
    (fetch as any).mockRejectedValue(new Error('Network error'));

    const { result } = renderHook(() => useAuth());

    await act(async () => {
      await result.current.login('test@example.com', 'password');
    });

    expect(result.current.user).toBeNull();
    expect(result.current.isAuthenticated).toBe(false);
    expect(result.current.isLoading).toBe(false);
  });

  it('should logout successfully', async () => {
    const mockUser = { id: '1', email: 'test@example.com', role: 'user' };
    localStorageMock.getItem.mockReturnValue(JSON.stringify(mockUser));

    const { result } = renderHook(() => useAuth());

    // Primeiro fazer login
    expect(result.current.user).toEqual(mockUser);
    expect(result.current.isAuthenticated).toBe(true);

    // Depois fazer logout
    await act(async () => {
      await result.current.logout();
    });

    expect(result.current.user).toBeNull();
    expect(result.current.isAuthenticated).toBe(false);
    expect(localStorageMock.removeItem).toHaveBeenCalledWith('token');
    expect(localStorageMock.removeItem).toHaveBeenCalledWith('user');
  });

  it('should register successfully', async () => {
    const mockUser = { id: '1', email: 'new@example.com', role: 'user' };
    const mockResponse = {
      ok: true,
      json: () => Promise.resolve({ user: mockUser, token: 'mock-token' }),
    };
    (fetch as any).mockResolvedValue(mockResponse);

    const { result } = renderHook(() => useAuth());

    await act(async () => {
      await result.current.register('new@example.com', 'password', 'John Doe');
    });

    expect(result.current.user).toEqual(mockUser);
    expect(result.current.isAuthenticated).toBe(true);
    expect(result.current.isLoading).toBe(false);
    expect(localStorageMock.setItem).toHaveBeenCalledWith(
      'token',
      'mock-token'
    );
    expect(localStorageMock.setItem).toHaveBeenCalledWith(
      'user',
      JSON.stringify(mockUser)
    );
  });

  it('should handle registration errors', async () => {
    const mockResponse = {
      ok: false,
      status: 409,
      json: () => Promise.resolve({ error: 'User already exists' }),
    };
    (fetch as any).mockResolvedValue(mockResponse);

    const { result } = renderHook(() => useAuth());

    await act(async () => {
      await result.current.register(
        'existing@example.com',
        'password',
        'John Doe'
      );
    });

    expect(result.current.user).toBeNull();
    expect(result.current.isAuthenticated).toBe(false);
    expect(result.current.isLoading).toBe(false);
  });

  it('should handle network errors during registration', async () => {
    (fetch as any).mockRejectedValue(new Error('Network error'));

    const { result } = renderHook(() => useAuth());

    await act(async () => {
      await result.current.register('new@example.com', 'password', 'John Doe');
    });

    expect(result.current.user).toBeNull();
    expect(result.current.isAuthenticated).toBe(false);
    expect(result.current.isLoading).toBe(false);
  });

  it('should set loading state during authentication', async () => {
    const mockResponse = {
      ok: true,
      json: () => Promise.resolve({ user: {}, token: 'mock-token' }),
    };
    (fetch as any).mockResolvedValue(mockResponse);

    const { result } = renderHook(() => useAuth());

    // Verificar estado inicial
    expect(result.current.isLoading).toBe(false);

    // Iniciar login
    const loginPromise = act(async () => {
      await result.current.login('test@example.com', 'password');
    });

    // Verificar se loading foi ativado
    expect(result.current.isLoading).toBe(true);

    // Aguardar conclusão
    await loginPromise;

    // Verificar se loading foi desativado
    expect(result.current.isLoading).toBe(false);
  });

  it('should handle empty credentials', async () => {
    const { result } = renderHook(() => useAuth());

    await act(async () => {
      await result.current.login('', '');
    });

    expect(result.current.user).toBeNull();
    expect(result.current.isAuthenticated).toBe(false);
  });

  it('should handle null credentials', async () => {
    const { result } = renderHook(() => useAuth());

    await act(async () => {
      await result.current.login(null as any, null as any);
    });

    expect(result.current.user).toBeNull();
    expect(result.current.isAuthenticated).toBe(false);
  });

  it('should handle localStorage setItem errors during login', async () => {
    const mockUser = { id: '1', email: 'test@example.com', role: 'user' };
    const mockResponse = {
      ok: true,
      json: () => Promise.resolve({ user: mockUser, token: 'mock-token' }),
    };
    (fetch as any).mockResolvedValue(mockResponse);
    localStorageMock.setItem.mockImplementation(() => {
      throw new Error('localStorage setItem error');
    });

    const { result } = renderHook(() => useAuth());

    await act(async () => {
      await result.current.login('test@example.com', 'password');
    });

    // Deve ainda funcionar mesmo com erro no localStorage
    expect(result.current.user).toEqual(mockUser);
    expect(result.current.isAuthenticated).toBe(true);
  });

  it('should handle localStorage removeItem errors during logout', async () => {
    localStorageMock.removeItem.mockImplementation(() => {
      throw new Error('localStorage removeItem error');
    });

    const { result } = renderHook(() => useAuth());

    await act(async () => {
      await result.current.logout();
    });

    // Deve ainda funcionar mesmo com erro no localStorage
    expect(result.current.user).toBeNull();
    expect(result.current.isAuthenticated).toBe(false);
  });

  it('should handle multiple rapid login attempts', async () => {
    const mockResponse = {
      ok: true,
      json: () => Promise.resolve({ user: {}, token: 'mock-token' }),
    };
    (fetch as any).mockResolvedValue(mockResponse);

    const { result } = renderHook(() => useAuth());

    // Múltiplas tentativas de login
    await act(async () => {
      await Promise.all([
        result.current.login('test1@example.com', 'password1'),
        result.current.login('test2@example.com', 'password2'),
        result.current.login('test3@example.com', 'password3'),
      ]);
    });

    // Deve ter feito múltiplas chamadas
    expect(fetch).toHaveBeenCalledTimes(3);
  });
});
