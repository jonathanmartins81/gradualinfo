import { DynamicSEOConfig } from '@/utils/SEO';

export interface DynamicSEOProps extends Partial<DynamicSEOConfig> {
  title: string;
  description?: string;
  keywords?: string[];
  image?: string;
  type?: 'website' | 'article' | 'product' | 'profile';
  canonical?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

export interface UseDynamicSEOReturn {
  updateSEO: (newConfig: Partial<DynamicSEOConfig>) => void;
  config: DynamicSEOConfig;
}
