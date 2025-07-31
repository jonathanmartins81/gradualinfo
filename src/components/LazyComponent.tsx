import React, { ComponentType, Suspense, lazy } from 'react';

interface LazyComponentProps {
  component: () => Promise<{ default: ComponentType<any> }>;
  fallback?: React.ReactNode;
  props?: Record<string, any>;
}

/**
 * Componente para lazy loading de componentes pesados
 *
 * @example
 * ```tsx
 * <LazyComponent
 *   component={() => import('./HeavyComponent')}
 *   fallback={<div>Carregando...</div>}
 *   props={{ title: 'Exemplo' }}
 * />
 * ```
 */
const LazyComponent: React.FC<LazyComponentProps> = ({
  component,
  fallback = (
    <div className='flex items-center justify-center p-8'>
      <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600'></div>
      <span className='ml-2 text-gray-600'>Carregando...</span>
    </div>
  ),
  props = {},
}) => {
  const LazyLoadedComponent = lazy(component);

  return (
    <Suspense fallback={fallback}>
      <LazyLoadedComponent {...props} />
    </Suspense>
  );
};

export default LazyComponent;
