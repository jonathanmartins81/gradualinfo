import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Hook para debounce de funções
 * @param func - Função a ser debounced
 * @param delay - Delay em milissegundos
 * @returns Função debounced
 */
export const useDebounce = <T extends (...args: any[]) => any>(
  func: T,
  delay: number
): T => {
  const timeoutRef = useRef<NodeJS.Timeout>();

  return useCallback(
    (...args: Parameters<T>) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => func(...args), delay);
    },
    [func, delay]
  ) as T;
};

/**
 * Hook para throttle de funções
 * @param func - Função a ser throttled
 * @param delay - Delay em milissegundos
 * @returns Função throttled
 */
export const useThrottle = <T extends (...args: any[]) => any>(
  func: T,
  delay: number
): T => {
  const lastRun = useRef<number>(0);

  return useCallback(
    (...args: Parameters<T>) => {
      const now = Date.now();
      if (now - lastRun.current >= delay) {
        func(...args);
        lastRun.current = now;
      }
    },
    [func, delay]
  ) as T;
};

/**
 * Hook para detectar se o elemento está visível na viewport
 * @param options - Opções do IntersectionObserver
 * @returns [ref, isVisible]
 */
export const useIntersectionObserver = (
  options: IntersectionObserverInit = {}
) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [options]);

  return [ref, isVisible] as const;
};

/**
 * Hook para medir performance de renderização
 * @param componentName - Nome do componente
 * @returns Função para marcar fim da renderização
 */
export const usePerformanceMonitor = (componentName: string) => {
  const startTime = useRef<number>(performance.now());

  useEffect(() => {
    const endTime = performance.now();
    const duration = endTime - startTime.current;

    if (duration > 16) {
      // Mais de 16ms (60fps)
      console.warn(
        `⚠️ Performance: ${componentName} levou ${duration.toFixed(2)}ms para renderizar`
      );
    }

    return () => {
      startTime.current = performance.now();
    };
  });
};

/**
 * Hook para memoização de valores caros
 * @param factory - Função que cria o valor
 * @param deps - Dependências
 * @returns Valor memoizado
 */
export const useMemoizedValue = <T>(
  factory: () => T,
  deps: React.DependencyList
): T => {
  const valueRef = useRef<T>();
  const depsRef = useRef<React.DependencyList>();

  if (
    !valueRef.current ||
    !depsRef.current ||
    deps.length !== depsRef.current.length ||
    deps.some((dep, index) => dep !== depsRef.current![index])
  ) {
    valueRef.current = factory();
    depsRef.current = deps;
  }

  return valueRef.current;
};

/**
 * Hook para otimizar re-renderizações com useCallback
 * @param callback - Função a ser memoizada
 * @param deps - Dependências
 * @returns Função memoizada
 */
export const useStableCallback = <T extends (...args: any[]) => any>(
  callback: T,
  deps: React.DependencyList = []
): T => {
  return useCallback(callback, deps);
};

/**
 * Hook para detectar mudanças de tamanho da janela
 * @returns Dimensões da janela
 */
export const useWindowSize = () => {
  const [size, setSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = useThrottle(() => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }, 100);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
};

/**
 * Hook para detectar se o dispositivo está online
 * @returns Status de conectividade
 */
export const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(
    typeof navigator !== 'undefined' ? navigator.onLine : true
  );

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return isOnline;
};
