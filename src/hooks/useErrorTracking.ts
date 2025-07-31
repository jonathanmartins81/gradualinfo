import * as Sentry from '@sentry/nextjs';
import { useCallback } from 'react';

interface ErrorContext {
  userId?: string;
  userEmail?: string;
  component?: string;
  action?: string;
  [key: string]: any;
}

/**
 * Hook para error tracking com Sentry
 *
 * @example
 * ```tsx
 * const { captureError, captureMessage, setUser } = useErrorTracking();
 *
 * // Capturar erro
 * captureError(new Error('Erro no login'), {
 *   component: 'LoginForm',
 *   action: 'submit'
 * });
 *
 * // Capturar mensagem
 * captureMessage('Usuário clicou no botão', 'info');
 *
 * // Definir usuário
 * setUser({ id: '123', email: 'user@example.com' });
 * ```
 */
export const useErrorTracking = () => {
  const captureError = useCallback((error: Error, context?: ErrorContext) => {
    if (context) {
      Sentry.setContext('component', context);
      Sentry.setContext('action', context.action);

      // Adicionar tags customizadas
      if (context.component) {
        Sentry.setTag('component', context.component);
      }
      if (context.action) {
        Sentry.setTag('action', context.action);
      }
    }

    Sentry.captureException(error);
  }, []);

  const captureMessage = useCallback(
    (
      message: string,
      level: Sentry.SeverityLevel = 'info',
      context?: ErrorContext
    ) => {
      if (context) {
        Sentry.setContext('component', context);
        Sentry.setContext('action', context.action);
      }

      Sentry.captureMessage(message, level);
    },
    []
  );

  const setUser = useCallback(
    (user: { id: string; email?: string; username?: string }) => {
      Sentry.setUser({
        id: user.id,
        email: user.email,
        username: user.username,
      });
    },
    []
  );

  const clearUser = useCallback(() => {
    Sentry.setUser(null);
  }, []);

  const addBreadcrumb = useCallback(
    (message: string, category: string, data?: Record<string, any>) => {
      Sentry.addBreadcrumb({
        message,
        category,
        data,
        level: 'info',
      });
    },
    []
  );

  const startTransaction = useCallback((name: string, operation: string) => {
    return Sentry.startTransaction({
      name,
      op: operation,
    });
  }, []);

  const setTag = useCallback((key: string, value: string) => {
    Sentry.setTag(key, value);
  }, []);

  const setContext = useCallback(
    (name: string, context: Record<string, any>) => {
      Sentry.setContext(name, context);
    },
    []
  );

  return {
    captureError,
    captureMessage,
    setUser,
    clearUser,
    addBreadcrumb,
    startTransaction,
    setTag,
    setContext,
  };
};
