import { Main } from '@/components/Main';
import { generateDynamicSEO } from '@/utils/SEO';
import { Metadata } from 'next';

export const metadata: Metadata = generateDynamicSEO('/');

export default function Home() {
  return <Main />;
}
