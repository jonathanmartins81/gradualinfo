import { HeaderSize, HeaderVariant } from './types';

// Variantes do header
export const headerVariants: Record<HeaderVariant, string> = {
  default:
    'bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700',
  minimal: 'bg-transparent',
  hero: 'bg-gradient-to-r from-cyan-600 to-indigo-600 text-white',
  dashboard:
    'bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700',
};

// Tamanhos do header
export const headerSizes: Record<HeaderSize, string> = {
  sm: 'py-3 px-4',
  md: 'py-4 px-6',
  lg: 'py-6 px-8',
};

// Classes base do header
export const headerBase = 'w-full transition-all duration-300';

// Classes para o container principal
export const headerContainer = 'flex items-center justify-between';

// Classes para o conteúdo principal
export const headerContent = 'flex items-center space-x-4';

// Classes para o título
export const headerTitle =
  'text-lg font-semibold text-gray-900 dark:text-white';

export const headerTitleHero = 'text-2xl font-bold text-white';

export const headerTitleDashboard =
  'text-xl font-semibold text-gray-900 dark:text-white';

// Classes para o subtítulo
export const headerSubtitle = 'text-sm text-gray-600 dark:text-gray-400 mt-1';

export const headerSubtitleHero = 'text-base text-cyan-100 mt-2';

// Classes para ações
export const headerActions = 'flex items-center space-x-3';

// Classes para breadcrumbs
export const headerBreadcrumbs =
  'text-sm text-gray-500 dark:text-gray-400 mb-2';

// Classes para logo
export const headerLogo = 'h-8 w-auto';
