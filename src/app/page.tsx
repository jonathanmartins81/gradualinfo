import { generateDynamicSEO } from '@/utils/SEO';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = generateDynamicSEO('/');

export default function Home() {
  // Redirecionar para a página 100K como página principal
  redirect('/100k');
}
