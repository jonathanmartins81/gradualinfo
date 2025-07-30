'use client';

import { useAuth } from '@/hooks/useAuth';
import { useEffect } from 'react';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredPermissions?: string[];
  allowedRoles?: string[];
  fallback?: React.ReactNode;
  redirectTo?: string;
}

export function ProtectedRoute({
  children,
  requiredPermissions,
  allowedRoles,
  fallback,
  redirectTo = '/unauthorized',
}: ProtectedRouteProps) {
  const { user, isLoading, isAuthenticated, hasAllPermissions, hasAnyRole } =
    useAuth();

  useEffect(() => {
    if (isLoading) return;

    if (!isAuthenticated) {
      window.location.href = '/login';
      return;
    }

    if (requiredPermissions && !hasAllPermissions(requiredPermissions)) {
      window.location.href = redirectTo;
      return;
    }

    if (allowedRoles && !hasAnyRole(allowedRoles)) {
      window.location.href = redirectTo;
      return;
    }
  }, [
    isLoading,
    isAuthenticated,
    requiredPermissions,
    allowedRoles,
    hasAllPermissions,
    hasAnyRole,
    redirectTo,
  ]);

  // Mostrar loading enquanto verifica autenticação
  if (isLoading) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <div className='text-center'>
          <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto'></div>
          <p className='mt-4 text-gray-600'>Verificando permissões...</p>
        </div>
      </div>
    );
  }

  // Verificar se usuário está autenticado
  if (!isAuthenticated) {
    return (
      fallback || (
        <div className='min-h-screen flex items-center justify-center'>
          <div className='text-center'>
            <p className='text-red-600'>Redirecionando para login...</p>
          </div>
        </div>
      )
    );
  }

  // Verificar permissões
  if (requiredPermissions && !hasAllPermissions(requiredPermissions)) {
    return (
      fallback || (
        <div className='min-h-screen flex items-center justify-center'>
          <div className='text-center'>
            <p className='text-red-600'>Permissões insuficientes...</p>
          </div>
        </div>
      )
    );
  }

  // Verificar roles
  if (allowedRoles && !hasAnyRole(allowedRoles)) {
    return (
      fallback || (
        <div className='min-h-screen flex items-center justify-center'>
          <div className='text-center'>
            <p className='text-red-600'>Acesso negado...</p>
          </div>
        </div>
      )
    );
  }

  // Renderizar conteúdo protegido
  return <>{children}</>;
}

// Componentes específicos para diferentes níveis de acesso
export function AdminRoute({
  children,
  fallback,
}: {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}) {
  return (
    <ProtectedRoute
      allowedRoles={['admin']}
      fallback={fallback}
      redirectTo='/unauthorized'
    >
      {children}
    </ProtectedRoute>
  );
}

export function ModeratorRoute({
  children,
  fallback,
}: {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}) {
  return (
    <ProtectedRoute
      allowedRoles={['admin', 'moderator']}
      fallback={fallback}
      redirectTo='/unauthorized'
    >
      {children}
    </ProtectedRoute>
  );
}

export function UserRoute({
  children,
  fallback,
}: {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}) {
  return (
    <ProtectedRoute
      allowedRoles={['admin', 'moderator', 'user']}
      fallback={fallback}
      redirectTo='/login'
    >
      {children}
    </ProtectedRoute>
  );
}

export function PostReadRoute({
  children,
  fallback,
}: {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}) {
  return (
    <ProtectedRoute
      requiredPermissions={['read:posts']}
      fallback={fallback}
      redirectTo='/unauthorized'
    >
      {children}
    </ProtectedRoute>
  );
}

export function PostWriteRoute({
  children,
  fallback,
}: {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}) {
  return (
    <ProtectedRoute
      requiredPermissions={['write:posts']}
      fallback={fallback}
      redirectTo='/unauthorized'
    >
      {children}
    </ProtectedRoute>
  );
}

export function UserManagementRoute({
  children,
  fallback,
}: {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}) {
  return (
    <ProtectedRoute
      requiredPermissions={['read:users']}
      allowedRoles={['admin', 'moderator']}
      fallback={fallback}
      redirectTo='/unauthorized'
    >
      {children}
    </ProtectedRoute>
  );
}
