import { render, screen } from '@testing-library/react';
import React from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import ProtectedRoute from './ProtectedRoute';

// Mock do hook useAuth
const mockUseAuth = vi.fn();
vi.mock('../hooks/useAuth', () => ({
  useAuth: () => mockUseAuth(),
}));

// Mock do componente de redirecionamento
const MockRedirect = ({ to }: { to: string }) => (
  <div data-testid='redirect' data-to={to} />
);

// Mock do Next.js router
const mockRouter = {
  push: vi.fn(),
  replace: vi.fn(),
  pathname: '/protected',
  query: {},
};

vi.mock('next/navigation', () => ({
  useRouter: () => mockRouter,
  redirect: (to: string) => <MockRedirect to={to} />,
}));

describe('ProtectedRoute Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render children when user is authenticated', () => {
    mockUseAuth.mockReturnValue({
      user: { id: '1', email: 'test@example.com', role: 'user' },
      isAuthenticated: true,
      isLoading: false,
    });

    render(
      <ProtectedRoute>
        <div data-testid='protected-content'>Protected Content</div>
      </ProtectedRoute>
    );

    expect(screen.getByTestId('protected-content')).toBeInTheDocument();
    expect(screen.queryByTestId('redirect')).not.toBeInTheDocument();
  });

  it('should redirect to login when user is not authenticated', () => {
    mockUseAuth.mockReturnValue({
      user: null,
      isAuthenticated: false,
      isLoading: false,
    });

    render(
      <ProtectedRoute>
        <div data-testid='protected-content'>Protected Content</div>
      </ProtectedRoute>
    );

    expect(screen.queryByTestId('protected-content')).not.toBeInTheDocument();
    expect(screen.getByTestId('redirect')).toBeInTheDocument();
    expect(screen.getByTestId('redirect')).toHaveAttribute('data-to', '/login');
  });

  it('should show loading state when authentication is loading', () => {
    mockUseAuth.mockReturnValue({
      user: null,
      isAuthenticated: false,
      isLoading: true,
    });

    render(
      <ProtectedRoute>
        <div data-testid='protected-content'>Protected Content</div>
      </ProtectedRoute>
    );

    expect(screen.getByText('Carregando...')).toBeInTheDocument();
    expect(screen.queryByTestId('protected-content')).not.toBeInTheDocument();
  });

  it('should redirect to custom redirect path when provided', () => {
    mockUseAuth.mockReturnValue({
      user: null,
      isAuthenticated: false,
      isLoading: false,
    });

    render(
      <ProtectedRoute redirectTo='/custom-login'>
        <div data-testid='protected-content'>Protected Content</div>
      </ProtectedRoute>
    );

    expect(screen.getByTestId('redirect')).toHaveAttribute(
      'data-to',
      '/custom-login'
    );
  });

  it('should check for specific roles when requiredRole is provided', () => {
    mockUseAuth.mockReturnValue({
      user: { id: '1', email: 'test@example.com', role: 'user' },
      isAuthenticated: true,
      isLoading: false,
    });

    render(
      <ProtectedRoute requiredRole='admin'>
        <div data-testid='protected-content'>Admin Content</div>
      </ProtectedRoute>
    );

    // User with 'user' role should not access admin content
    expect(screen.queryByTestId('protected-content')).not.toBeInTheDocument();
    expect(screen.getByTestId('redirect')).toHaveAttribute(
      'data-to',
      '/unauthorized'
    );
  });

  it('should allow access when user has required role', () => {
    mockUseAuth.mockReturnValue({
      user: { id: '1', email: 'admin@example.com', role: 'admin' },
      isAuthenticated: true,
      isLoading: false,
    });

    render(
      <ProtectedRoute requiredRole='admin'>
        <div data-testid='protected-content'>Admin Content</div>
      </ProtectedRoute>
    );

    expect(screen.getByTestId('protected-content')).toBeInTheDocument();
  });

  it('should check for multiple roles when requiredRoles array is provided', () => {
    mockUseAuth.mockReturnValue({
      user: { id: '1', email: 'moderator@example.com', role: 'moderator' },
      isAuthenticated: true,
      isLoading: false,
    });

    render(
      <ProtectedRoute requiredRoles={['admin', 'moderator']}>
        <div data-testid='protected-content'>Moderator Content</div>
      </ProtectedRoute>
    );

    expect(screen.getByTestId('protected-content')).toBeInTheDocument();
  });

  it('should deny access when user does not have any required role', () => {
    mockUseAuth.mockReturnValue({
      user: { id: '1', email: 'user@example.com', role: 'user' },
      isAuthenticated: true,
      isLoading: false,
    });

    render(
      <ProtectedRoute requiredRoles={['admin', 'moderator']}>
        <div data-testid='protected-content'>Protected Content</div>
      </ProtectedRoute>
    );

    expect(screen.queryByTestId('protected-content')).not.toBeInTheDocument();
    expect(screen.getByTestId('redirect')).toHaveAttribute(
      'data-to',
      '/unauthorized'
    );
  });

  it('should handle user without role property', () => {
    mockUseAuth.mockReturnValue({
      user: { id: '1', email: 'test@example.com' },
      isAuthenticated: true,
      isLoading: false,
    });

    render(
      <ProtectedRoute requiredRole='admin'>
        <div data-testid='protected-content'>Protected Content</div>
      </ProtectedRoute>
    );

    expect(screen.queryByTestId('protected-content')).not.toBeInTheDocument();
    expect(screen.getByTestId('redirect')).toHaveAttribute(
      'data-to',
      '/unauthorized'
    );
  });

  it('should handle null user gracefully', () => {
    mockUseAuth.mockReturnValue({
      user: null,
      isAuthenticated: false,
      isLoading: false,
    });

    render(
      <ProtectedRoute requiredRole='admin'>
        <div data-testid='protected-content'>Protected Content</div>
      </ProtectedRoute>
    );

    expect(screen.queryByTestId('protected-content')).not.toBeInTheDocument();
    expect(screen.getByTestId('redirect')).toHaveAttribute('data-to', '/login');
  });

  it('should handle undefined user gracefully', () => {
    mockUseAuth.mockReturnValue({
      user: undefined,
      isAuthenticated: false,
      isLoading: false,
    });

    render(
      <ProtectedRoute requiredRole='admin'>
        <div data-testid='protected-content'>Protected Content</div>
      </ProtectedRoute>
    );

    expect(screen.queryByTestId('protected-content')).not.toBeInTheDocument();
    expect(screen.getByTestId('redirect')).toHaveAttribute('data-to', '/login');
  });

  it('should prioritize requiredRoles over requiredRole', () => {
    mockUseAuth.mockReturnValue({
      user: { id: '1', email: 'admin@example.com', role: 'admin' },
      isAuthenticated: true,
      isLoading: false,
    });

    render(
      <ProtectedRoute
        requiredRole='user'
        requiredRoles={['moderator', 'editor']}
      >
        <div data-testid='protected-content'>Protected Content</div>
      </ProtectedRoute>
    );

    // Should use requiredRoles (moderator, editor) instead of requiredRole (user)
    expect(screen.queryByTestId('protected-content')).not.toBeInTheDocument();
    expect(screen.getByTestId('redirect')).toHaveAttribute(
      'data-to',
      '/unauthorized'
    );
  });

  it('should handle case-insensitive role comparison', () => {
    mockUseAuth.mockReturnValue({
      user: { id: '1', email: 'admin@example.com', role: 'ADMIN' },
      isAuthenticated: true,
      isLoading: false,
    });

    render(
      <ProtectedRoute requiredRole='admin'>
        <div data-testid='protected-content'>Admin Content</div>
      </ProtectedRoute>
    );

    expect(screen.getByTestId('protected-content')).toBeInTheDocument();
  });

  it('should handle empty requiredRoles array', () => {
    mockUseAuth.mockReturnValue({
      user: { id: '1', email: 'test@example.com', role: 'user' },
      isAuthenticated: true,
      isLoading: false,
    });

    render(
      <ProtectedRoute requiredRoles={[]}>
        <div data-testid='protected-content'>Protected Content</div>
      </ProtectedRoute>
    );

    expect(screen.getByTestId('protected-content')).toBeInTheDocument();
  });

  it('should handle custom unauthorized redirect path', () => {
    mockUseAuth.mockReturnValue({
      user: { id: '1', email: 'user@example.com', role: 'user' },
      isAuthenticated: true,
      isLoading: false,
    });

    render(
      <ProtectedRoute
        requiredRole='admin'
        unauthorizedRedirectTo='/custom-unauthorized'
      >
        <div data-testid='protected-content'>Protected Content</div>
      </ProtectedRoute>
    );

    expect(screen.getByTestId('redirect')).toHaveAttribute(
      'data-to',
      '/custom-unauthorized'
    );
  });

  it('should handle custom loading component', () => {
    mockUseAuth.mockReturnValue({
      user: null,
      isAuthenticated: false,
      isLoading: true,
    });

    const CustomLoading = () => (
      <div data-testid='custom-loading'>Custom Loading...</div>
    );

    render(
      <ProtectedRoute loadingComponent={<CustomLoading />}>
        <div data-testid='protected-content'>Protected Content</div>
      </ProtectedRoute>
    );

    expect(screen.getByTestId('custom-loading')).toBeInTheDocument();
    expect(screen.queryByText('Carregando...')).not.toBeInTheDocument();
  });

  it('should handle fallback component when access is denied', () => {
    mockUseAuth.mockReturnValue({
      user: { id: '1', email: 'user@example.com', role: 'user' },
      isAuthenticated: true,
      isLoading: false,
    });

    const FallbackComponent = () => (
      <div data-testid='fallback'>Access Denied</div>
    );

    render(
      <ProtectedRoute requiredRole='admin' fallback={<FallbackComponent />}>
        <div data-testid='protected-content'>Protected Content</div>
      </ProtectedRoute>
    );

    expect(screen.getByTestId('fallback')).toBeInTheDocument();
    expect(screen.queryByTestId('protected-content')).not.toBeInTheDocument();
  });

  it('should handle complex role hierarchies', () => {
    // Test with admin role (should have access to everything)
    mockUseAuth.mockReturnValue({
      user: { id: '1', email: 'admin@example.com', role: 'admin' },
      isAuthenticated: true,
      isLoading: false,
    });

    const { rerender } = render(
      <ProtectedRoute requiredRoles={['user', 'moderator', 'admin']}>
        <div data-testid='protected-content'>Admin Content</div>
      </ProtectedRoute>
    );

    expect(screen.getByTestId('protected-content')).toBeInTheDocument();

    // Test with moderator role
    mockUseAuth.mockReturnValue({
      user: { id: '2', email: 'moderator@example.com', role: 'moderator' },
      isAuthenticated: true,
      isLoading: false,
    });

    rerender(
      <ProtectedRoute requiredRoles={['user', 'moderator', 'admin']}>
        <div data-testid='protected-content'>Moderator Content</div>
      </ProtectedRoute>
    );

    expect(screen.getByTestId('protected-content')).toBeInTheDocument();

    // Test with user role
    mockUseAuth.mockReturnValue({
      user: { id: '3', email: 'user@example.com', role: 'user' },
      isAuthenticated: true,
      isLoading: false,
    });

    rerender(
      <ProtectedRoute requiredRoles={['user', 'moderator', 'admin']}>
        <div data-testid='protected-content'>User Content</div>
      </ProtectedRoute>
    );

    expect(screen.getByTestId('protected-content')).toBeInTheDocument();
  });
});
