import { useRouter } from 'next/navigation';
import { useCallback, useEffect } from 'react';

interface AnalyticsEvent {
  event: string;
  category?: string;
  action?: string;
  label?: string;
  value?: number;
  properties?: Record<string, any>;
}

interface PageView {
  path: string;
  title?: string;
  referrer?: string;
}

/**
 * Hook para analytics e monitoramento
 *
 * @example
 * ```tsx
 * const { trackEvent, trackPageView, trackError } = useAnalytics();
 *
 * // Track custom event
 * trackEvent('button_click', {
 *   category: 'engagement',
 *   action: 'click',
 *   label: 'cta_button'
 * });
 *
 * // Track page view
 * trackPageView('/dashboard', 'Dashboard Page');
 *
 * // Track error
 * trackError(new Error('API Error'), {
 *   component: 'UserProfile',
 *   action: 'fetch_data'
 * });
 * ```
 */
export const useAnalytics = () => {
  const router = useRouter();

  // Track custom events
  const trackEvent = useCallback(
    (event: string, properties?: Record<string, any>) => {
      try {
        // Google Analytics 4
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', event, properties);
        }

        // Custom analytics endpoint
        fetch('/api/analytics/event', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            event,
            properties,
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent,
            url: window.location.href,
          }),
        }).catch(console.error);

        // Console log in development
        if (process.env.NODE_ENV === 'development') {
          console.log('📊 Analytics Event:', { event, properties });
        }
      } catch (error) {
        console.error('Analytics error:', error);
      }
    },
    []
  );

  // Track page views
  const trackPageView = useCallback((path: string, title?: string) => {
    try {
      // Google Analytics 4
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
          page_path: path,
          page_title: title,
        });
      }

      // Custom analytics endpoint
      fetch('/api/analytics/pageview', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          path,
          title,
          timestamp: new Date().toISOString(),
          referrer: document.referrer,
          userAgent: navigator.userAgent,
        }),
      }).catch(console.error);

      // Console log in development
      if (process.env.NODE_ENV === 'development') {
        console.log('📊 Page View:', { path, title });
      }
    } catch (error) {
      console.error('Analytics error:', error);
    }
  }, []);

  // Track errors
  const trackError = useCallback(
    (error: Error, context?: Record<string, any>) => {
      try {
        // Google Analytics 4
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'exception', {
            description: error.message,
            fatal: false,
            ...context,
          });
        }

        // Custom analytics endpoint
        fetch('/api/analytics/error', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            error: {
              message: error.message,
              stack: error.stack,
              name: error.name,
            },
            context,
            timestamp: new Date().toISOString(),
            url: window.location.href,
            userAgent: navigator.userAgent,
          }),
        }).catch(console.error);

        // Console log in development
        if (process.env.NODE_ENV === 'development') {
          console.error('📊 Error Tracked:', { error: error.message, context });
        }
      } catch (analyticsError) {
        console.error('Analytics error:', analyticsError);
      }
    },
    []
  );

  // Track performance metrics
  const trackPerformance = useCallback(
    (metric: string, value: number, properties?: Record<string, any>) => {
      try {
        // Google Analytics 4
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'timing_complete', {
            name: metric,
            value: Math.round(value),
            ...properties,
          });
        }

        // Custom analytics endpoint
        fetch('/api/analytics/performance', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            metric,
            value,
            properties,
            timestamp: new Date().toISOString(),
            url: window.location.href,
          }),
        }).catch(console.error);

        // Console log in development
        if (process.env.NODE_ENV === 'development') {
          console.log('📊 Performance:', { metric, value, properties });
        }
      } catch (error) {
        console.error('Analytics error:', error);
      }
    },
    []
  );

  // Track user engagement
  const trackEngagement = useCallback(
    (action: string, properties?: Record<string, any>) => {
      trackEvent('engagement', {
        action,
        ...properties,
      });
    },
    [trackEvent]
  );

  // Track conversion
  const trackConversion = useCallback(
    (goal: string, value?: number, properties?: Record<string, any>) => {
      trackEvent('conversion', {
        goal,
        value,
        ...properties,
      });
    },
    [trackEvent]
  );

  // Auto-track page views on route change
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      trackPageView(url, document.title);
    };

    // Track initial page view
    if (typeof window !== 'undefined') {
      trackPageView(window.location.pathname, document.title);
    }

    // Listen for route changes
    router.events?.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events?.off('routeChangeComplete', handleRouteChange);
    };
  }, [router, trackPageView]);

  // Track performance metrics automatically
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Track Core Web Vitals
    const trackCoreWebVitals = () => {
      // First Contentful Paint
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver(list => {
          for (const entry of list.getEntries()) {
            if (entry.name === 'first-contentful-paint') {
              trackPerformance('FCP', entry.startTime);
            }
          }
        });
        observer.observe({ entryTypes: ['paint'] });
      }

      // Largest Contentful Paint
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver(list => {
          for (const entry of list.getEntries()) {
            trackPerformance('LCP', entry.startTime);
          }
        });
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
      }

      // First Input Delay
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver(list => {
          for (const entry of list.getEntries()) {
            trackPerformance('FID', entry.processingStart - entry.startTime);
          }
        });
        observer.observe({ entryTypes: ['first-input'] });
      }
    };

    trackCoreWebVitals();
  }, [trackPerformance]);

  return {
    trackEvent,
    trackPageView,
    trackError,
    trackPerformance,
    trackEngagement,
    trackConversion,
  };
};
