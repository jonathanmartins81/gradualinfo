// ===== COMPONENTES PRINCIPAIS =====
export { default as Button } from './Button';
export { default as Card } from './Card';
export { Main } from './Main';
export { default as Navigation } from './Navigation';

// ===== COMPONENTES DE TEMA =====
export { AccessibilityProvider } from './AccessibilityProvider';
export { default as ThemeSwitcher } from './ThemeSwitcher';

// ===== COMPONENTES DE SEO =====
export { default as DynamicSEO } from './DynamicSEO';
export { useDynamicSEO } from './DynamicSEO/hooks';
export { JsonLd } from './JsonLd';

// ===== COMPONENTES DE IMAGEM =====
export { default as OptimizedImage } from './OptimizedImage';

// ===== COMPONENTES DE SEGURANÇA =====
export { ProtectedRoute } from './ProtectedRoute';

// ===== COMPONENTES DE DEMONSTRAÇÃO =====
export { default as TailwindDemo } from './TailwindDemo';

// ===== TIPOS =====
export type { ButtonProps } from './Button/types';
export type { CardProps } from './Card/types';
export type { DynamicSEOProps, UseDynamicSEOReturn } from './DynamicSEO/types';
