import { ThemeProvider } from '@/contexts/ThemeContext';
import { PropsWithChildren } from 'react';

export function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider defaultMode="system">
      {children}
    </ThemeProvider>
  );
}
