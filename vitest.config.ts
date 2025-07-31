import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: 'jsdom',
    setupFiles: './.vitest/setup.ts',
    globals: true,
    css: true,
    exclude: [
      '**/node_modules/**',
      '**/tests/e2e/**',
      '**/playwright-report/**',
      '**/test-results/**',
    ],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        '.next/',
        'coverage/',
        '**/*.d.ts',
        '**/*.config.*',
        '**/stories/**',
        '**/*.stories.*',
        '**/__snapshots__/**',
        '**/*.snap',
        '**/setupTests.*',
        '**/.vitest/**',
        '**/generators/**',
        '**/public/**',
        '**/src/types/**',
        '**/src/app/layout.tsx',
        '**/src/app/providers.tsx',
        '**/src/app/robots.ts',
        '**/src/app/sitemap.ts',
        '**/tests/e2e/**',
        '**/playwright-report/**',
        '**/test-results/**',
      ],
    },
  },
});
