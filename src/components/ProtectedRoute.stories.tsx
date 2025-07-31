import type { Meta, StoryObj } from '@storybook/react';
import ProtectedRoute from './ProtectedRoute';

// Mock do useAuth para as stories
const MockAuthProvider = ({
  children,
  user = null,
  isAuthenticated = false,
  isLoading = false,
}: any) => {
  // Mock do contexto de autenticação
  const mockAuth = {
    user,
    isAuthenticated,
    isLoading,
    login: () => {},
    logout: () => {},
    register: () => {},
  };

  return <div data-testid='auth-provider'>{children}</div>;
};

const meta: Meta<typeof ProtectedRoute> = {
  title: 'Components/ProtectedRoute',
  component: ProtectedRoute,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    requiredRole: {
      control: { type: 'text' },
    },
    requiredRoles: {
      control: { type: 'object' },
    },
    redirectPath: {
      control: { type: 'text' },
    },
    unauthorizedRedirectPath: {
      control: { type: 'text' },
    },
  },
  decorators: [
    (Story, context) => {
      const { user, isAuthenticated, isLoading } = context.args;
      return (
        <MockAuthProvider
          user={user}
          isAuthenticated={isAuthenticated}
          isLoading={isLoading}
        >
          <Story />
        </MockAuthProvider>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

const ProtectedContent = () => (
  <div className='p-6 bg-green-100 border border-green-300 rounded-lg'>
    <h3 className='text-lg font-semibold text-green-800 mb-2'>
      Conteúdo Protegido
    </h3>
    <p className='text-green-700'>
      Este conteúdo só é visível para usuários autenticados.
    </p>
  </div>
);

export const AuthenticatedUser: Story = {
  args: {
    children: <ProtectedContent />,
    user: { id: '1', email: 'user@example.com', role: 'user' },
    isAuthenticated: true,
    isLoading: false,
  },
};

export const UnauthenticatedUser: Story = {
  args: {
    children: <ProtectedContent />,
    user: null,
    isAuthenticated: false,
    isLoading: false,
  },
};

export const LoadingState: Story = {
  args: {
    children: <ProtectedContent />,
    user: null,
    isAuthenticated: false,
    isLoading: true,
  },
};

export const WithRequiredRole: Story = {
  args: {
    children: <ProtectedContent />,
    requiredRole: 'admin',
    user: { id: '1', email: 'admin@example.com', role: 'admin' },
    isAuthenticated: true,
    isLoading: false,
  },
};

export const WithRequiredRoles: Story = {
  args: {
    children: <ProtectedContent />,
    requiredRoles: ['admin', 'moderator'],
    user: { id: '1', email: 'moderator@example.com', role: 'moderator' },
    isAuthenticated: true,
    isLoading: false,
  },
};

export const InsufficientRole: Story = {
  args: {
    children: <ProtectedContent />,
    requiredRole: 'admin',
    user: { id: '1', email: 'user@example.com', role: 'user' },
    isAuthenticated: true,
    isLoading: false,
  },
};

export const CustomRedirectPath: Story = {
  args: {
    children: <ProtectedContent />,
    redirectPath: '/custom-login',
    user: null,
    isAuthenticated: false,
    isLoading: false,
  },
};

export const CustomUnauthorizedRedirect: Story = {
  args: {
    children: <ProtectedContent />,
    unauthorizedRedirectPath: '/access-denied',
    requiredRole: 'admin',
    user: { id: '1', email: 'user@example.com', role: 'user' },
    isAuthenticated: true,
    isLoading: false,
  },
};

export const CustomLoadingComponent: Story = {
  args: {
    children: <ProtectedContent />,
    loadingComponent: (
      <div className='p-6 bg-blue-100 border border-blue-300 rounded-lg'>
        <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto'></div>
        <p className='text-blue-700 mt-2 text-center'>
          Verificando permissões...
        </p>
      </div>
    ),
    user: null,
    isAuthenticated: false,
    isLoading: true,
  },
};

export const CustomFallbackComponent: Story = {
  args: {
    children: <ProtectedContent />,
    fallbackComponent: (
      <div className='p-6 bg-red-100 border border-red-300 rounded-lg'>
        <h3 className='text-lg font-semibold text-red-800 mb-2'>
          Acesso Negado
        </h3>
        <p className='text-red-700'>
          Você não tem permissão para acessar este conteúdo.
        </p>
        <button className='mt-3 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700'>
          Voltar
        </button>
      </div>
    ),
    requiredRole: 'admin',
    user: { id: '1', email: 'user@example.com', role: 'user' },
    isAuthenticated: true,
    isLoading: false,
  },
};

export const UserWithoutRole: Story = {
  args: {
    children: <ProtectedContent />,
    requiredRole: 'admin',
    user: { id: '1', email: 'user@example.com' }, // Sem role
    isAuthenticated: true,
    isLoading: false,
  },
};

export const NullUser: Story = {
  args: {
    children: <ProtectedContent />,
    requiredRole: 'admin',
    user: null,
    isAuthenticated: true, // Inconsistente, mas para teste
    isLoading: false,
  },
};

export const ComplexRoleHierarchy: Story = {
  args: {
    children: <ProtectedContent />,
    requiredRoles: ['super-admin', 'admin', 'manager'],
    user: { id: '1', email: 'manager@example.com', role: 'manager' },
    isAuthenticated: true,
    isLoading: false,
  },
};
