import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  role: string;
  permissions: string[];
  isActive: boolean;
}

interface AuthState {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  error: string | null;
}

export function useAuth() {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isLoading: true,
    isAuthenticated: false,
    error: null,
  });

  const router = useRouter();

  // Verificar autenticação
  const checkAuth = useCallback(async () => {
    const token =
      typeof window !== 'undefined' ? localStorage.getItem('authToken') : null;

    if (!token) {
      setAuthState({
        user: null,
        isLoading: false,
        isAuthenticated: false,
        error: null,
      });
      return;
    }

    try {
      const response = await fetch('/api/auth/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Token inválido');
      }

      const userData = await response.json();

      setAuthState({
        user: userData,
        isLoading: false,
        isAuthenticated: true,
        error: null,
      });
    } catch {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('authToken');
      }
      setAuthState({
        user: null,
        isLoading: false,
        isAuthenticated: false,
        error: 'Erro na autenticação',
      });
    }
  }, []);

  // Login
  const login = useCallback(async (email: string, password: string) => {
    setAuthState(prev => ({ ...prev, isLoading: true, error: null }));

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Erro no login');
      }

      if (typeof window !== 'undefined') {
        localStorage.setItem('authToken', data.token);
      }

      setAuthState({
        user: data.user,
        isLoading: false,
        isAuthenticated: true,
        error: null,
      });

      return { success: true };
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Erro desconhecido';
      setAuthState(prev => ({
        ...prev,
        isLoading: false,
        error: errorMessage,
      }));
      return { success: false, error: errorMessage };
    }
  }, []);

  // Logout
  const logout = useCallback(() => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('authToken');
    }
    setAuthState({
      user: null,
      isLoading: false,
      isAuthenticated: false,
      error: null,
    });
    router.push('/login');
  }, [router]);

  // Verificar permissão
  const hasPermission = useCallback(
    (permission: string) => {
      if (!authState.user) return false;
      return authState.user.permissions.includes(permission);
    },
    [authState.user]
  );

  // Verificar role
  const hasRole = useCallback(
    (role: string) => {
      if (!authState.user) return false;
      return authState.user.role === role;
    },
    [authState.user]
  );

  // Verificar múltiplas permissões
  const hasAnyPermission = useCallback(
    (permissions: string[]) => {
      if (!authState.user) return false;
      return permissions.some(permission =>
        authState.user!.permissions.includes(permission)
      );
    },
    [authState.user]
  );

  // Verificar todas as permissões
  const hasAllPermissions = useCallback(
    (permissions: string[]) => {
      if (!authState.user) return false;
      return permissions.every(permission =>
        authState.user!.permissions.includes(permission)
      );
    },
    [authState.user]
  );

  // Verificar múltiplos roles
  const hasAnyRole = useCallback(
    (roles: string[]) => {
      if (!authState.user) return false;
      return roles.includes(authState.user.role);
    },
    [authState.user]
  );

  // Proteger rota
  const protectRoute = useCallback(
    (requiredPermissions?: string[], allowedRoles?: string[]) => {
      if (authState.isLoading) return;

      if (!authState.isAuthenticated) {
        router.push('/login');
        return;
      }

      if (requiredPermissions && !hasAllPermissions(requiredPermissions)) {
        router.push('/unauthorized');
        return;
      }

      if (allowedRoles && !hasAnyRole(allowedRoles)) {
        router.push('/unauthorized');
        return;
      }
    },
    [authState, router, hasAllPermissions, hasAnyRole]
  );

  // Atualizar usuário
  const updateUser = useCallback(
    (userData: Partial<User>) => {
      if (authState.user) {
        setAuthState(prev => ({
          ...prev,
          user: { ...prev.user!, ...userData },
        }));
      }
    },
    [authState.user]
  );

  // Verificar autenticação na inicialização
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return {
    // Estado
    user: authState.user,
    isLoading: authState.isLoading,
    isAuthenticated: authState.isAuthenticated,
    error: authState.error,

    // Ações
    login,
    logout,
    checkAuth,
    updateUser,

    // Verificações
    hasPermission,
    hasRole,
    hasAnyPermission,
    hasAllPermissions,
    hasAnyRole,

    // Proteção
    protectRoute,
  };
}
