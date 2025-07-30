/**
 * Página de Demonstração - Tailwind CSS
 *
 * Esta página demonstra todas as funcionalidades do Tailwind CSS
 * implementado no boilerplate, incluindo componentes customizados,
 * animações, responsividade e design system.
 */

import { DynamicSEO } from '@/components';
import TailwindDemo from '@/components/TailwindDemo';
import { generateDynamicSEO } from '@/utils/SEO';
import type { Metadata } from 'next';

/**
 * Metadados específicos para a página de demonstração
 */
export const metadata: Metadata = generateDynamicSEO('/tailwind-demo');

/**
 * Componente TailwindDemoPage
 *
 * Renderiza a página de demonstração do Tailwind CSS.
 *
 * @returns Página de demonstração com SEO dinâmico
 */
export default function TailwindDemoPage() {
  return (
    <>
      {/* SEO dinâmico para esta página */}
      <DynamicSEO
        title='Tailwind CSS Demo - Boilerplate Aqua9'
        description='Demonstração das funcionalidades do Tailwind CSS implementado no boilerplate, incluindo componentes customizados, animações e design system.'
        keywords={[
          'tailwind',
          'css',
          'demo',
          'componentes',
          'animações',
          'design system',
          'boilerplate',
          'aqua9',
        ]}
        type='website'
        image='/og-image.svg'
        canonical='https://aqua9.com.br/tailwind-demo'
      />

      {/* Componente de demonstração */}
      <TailwindDemo />
    </>
  );
}
