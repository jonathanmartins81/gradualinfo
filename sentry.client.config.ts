import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn:
    process.env.NEXT_PUBLIC_SENTRY_DSN ||
    'https://your-dsn@sentry.io/your-project',

  // Performance monitoring
  tracesSampleRate: 1.0,

  // Session replay
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,

  // Environment
  environment: process.env.NODE_ENV,

  // Release version
  release: process.env.NEXT_PUBLIC_APP_VERSION || '1.0.0',

  // Debug mode
  debug: process.env.NODE_ENV === 'development',

  // Before send function to filter events
  beforeSend(event, hint) {
    // Filter out certain errors in development
    if (process.env.NODE_ENV === 'development') {
      // Don't send console errors in development
      if (event.exception && event.exception.values) {
        const exception = event.exception.values[0];
        if (exception.value && exception.value.includes('console.error')) {
          return null;
        }
      }
    }

    return event;
  },

  // Integrations
  integrations: [
    Sentry.replayIntegration({
      maskAllText: false,
      blockAllMedia: false,
    }),
  ],
});
