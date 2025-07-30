import { CardSize, CardVariant } from './types';

// Variantes do card baseadas nos tokens do theme.ts
export const cardVariants: Record<CardVariant, string> = {
  default:
    'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700',
  elevated: 'bg-white dark:bg-gray-800 shadow-lg border-0',
  outlined: 'bg-transparent border-2 border-gray-300 dark:border-gray-600',
  filled: 'bg-gray-50 dark:bg-gray-900 border-0',
};

// Tamanhos do card
export const cardSizes: Record<CardSize, string> = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

// Classes base do card
export const cardBase = 'rounded-lg transition-all duration-300';

// Classes para hover
export const cardHoverable =
  'hover:shadow-md hover:-translate-y-1 cursor-pointer';

// Classes para header
export const cardHeader = 'flex items-center justify-between mb-4';

export const cardTitle = 'text-lg font-semibold text-gray-900 dark:text-white';

export const cardSubtitle = 'text-sm text-gray-600 dark:text-gray-400 mt-1';

// Classes para conteúdo
export const cardContent = 'text-gray-700 dark:text-gray-300';

// Classes para footer
export const cardFooter =
  'mt-4 pt-4 border-t border-gray-200 dark:border-gray-700';

// Classes para imagem
export const cardImage = 'w-full h-48 object-cover rounded-t-lg mb-4';
