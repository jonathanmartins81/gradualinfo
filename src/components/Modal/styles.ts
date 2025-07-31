import { ModalSize, ModalVariant } from './types';

// Tamanhos do modal
export const modalSizes: Record<ModalSize, string> = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  full: 'max-w-full mx-4',
};

// Variantes do modal
export const modalVariants: Record<ModalVariant, string> = {
  default: 'items-center justify-center',
  centered: 'items-center justify-center',
  bottom: 'items-end justify-center',
  side: 'items-center justify-end',
};

// Classes base do overlay
export const modalOverlay =
  'fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex transition-opacity duration-300';

// Classes para o container do modal
export const modalContainer =
  'relative bg-white dark:bg-gray-800 rounded-lg shadow-xl transition-all duration-300 transform';

// Classes para o header
export const modalHeader =
  'flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700';

export const modalTitle = 'text-lg font-semibold text-gray-900 dark:text-white';

export const modalSubtitle = 'text-sm text-gray-600 dark:text-gray-400 mt-1';

// Classes para o conteúdo
export const modalContent = 'p-6';

// Classes para o footer
export const modalFooter =
  'flex items-center justify-end space-x-3 p-6 border-t border-gray-200 dark:border-gray-700';

// Classes para o botão de fechar
export const modalCloseButton =
  'p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors';

// Classes para ações do header
export const modalHeaderActions = 'flex items-center space-x-2';

// Classes específicas para variantes
export const modalBottom = 'w-full max-h-[90vh] rounded-t-lg rounded-b-none';

export const modalSide = 'h-full max-w-md rounded-l-lg rounded-r-none';

// Classes para animações
export const modalEnter = 'opacity-0 scale-95';

export const modalEnterActive = 'opacity-100 scale-100';

export const modalExit = 'opacity-100 scale-100';

export const modalExitActive = 'opacity-0 scale-95';

// Classes para overlay
export const overlayEnter = 'opacity-0';

export const overlayEnterActive = 'opacity-100';

export const overlayExit = 'opacity-100';

export const overlayExitActive = 'opacity-0';
