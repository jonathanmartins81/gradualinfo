import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn:
    process.env.NEXT_PUBLIC_SENTRY_DSN ||
    'https://your-dsn@sentry.io/your-project',

  // Performance monitoring
  tracesSampleRate: 1.0,

  // Environment
  environment: process.env.NODE_ENV,

  // Release version
  release: process.env.NEXT_PUBLIC_APP_VERSION || '1.0.0',

  // Debug mode
  debug: process.env.NODE_ENV === 'development',

  // Before send function to filter events
  beforeSend(event, hint) {
    // Filter out certain errors
    if (event.exception && event.exception.values) {
      const exception = event.exception.values[0];

      // Don't send 404 errors
      if (exception.value && exception.value.includes('NEXT_NOT_FOUND')) {
        return null;
      }

      // Don't send certain API errors
      if (exception.value && exception.value.includes('fetch')) {
        return null;
      }
    }

    return event;
  },
});
