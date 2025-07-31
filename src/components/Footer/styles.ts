import { FooterSize, FooterVariant } from './types';

// Variantes do footer
export const footerVariants: Record<FooterVariant, string> = {
  default:
    'bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700',
  minimal: 'bg-gray-50 dark:bg-gray-800',
  dark: 'bg-gray-900 text-white',
  branded: 'bg-gradient-to-r from-cyan-600 to-indigo-600 text-white',
};

// Tamanhos do footer
export const footerSizes: Record<FooterSize, string> = {
  sm: 'py-4 px-4',
  md: 'py-8 px-6',
  lg: 'py-12 px-8',
};

// Classes base do footer
export const footerBase = 'w-full transition-all duration-300';

// Classes para o container principal
export const footerContainer = 'max-w-7xl mx-auto';

// Classes para o conteúdo principal
export const footerContent =
  'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8';

// Classes para seções
export const footerSection = 'space-y-4';

export const footerSectionTitle =
  'text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wide';

export const footerSectionTitleDark =
  'text-sm font-semibold text-white uppercase tracking-wide';

export const footerSectionTitleBranded =
  'text-sm font-semibold text-cyan-100 uppercase tracking-wide';

// Classes para links
export const footerLinks = 'space-y-2';

export const footerLink =
  'text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors';

export const footerLinkDark =
  'text-sm text-gray-300 hover:text-white transition-colors';

export const footerLinkBranded =
  'text-sm text-cyan-100 hover:text-white transition-colors';

// Classes para o rodapé inferior
export const footerBottom =
  'mt-8 pt-8 border-t border-gray-200 dark:border-gray-700';

export const footerBottomDark = 'mt-8 pt-8 border-t border-gray-700';

export const footerBottomBranded = 'mt-8 pt-8 border-t border-cyan-500/30';

// Classes para copyright
export const footerCopyright =
  'text-sm text-gray-500 dark:text-gray-400 text-center';

export const footerCopyrightDark = 'text-sm text-gray-400 text-center';

export const footerCopyrightBranded = 'text-sm text-cyan-100 text-center';

// Classes para logo
export const footerLogo = 'h-8 w-auto';

// Classes para links sociais
export const footerSocial = 'flex space-x-4';

// Classes para botão back to top
export const backToTopButton =
  'fixed bottom-4 right-4 bg-cyan-600 text-white p-2 rounded-full shadow-lg hover:bg-cyan-700 transition-colors';
