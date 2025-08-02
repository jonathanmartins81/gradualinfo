// ===== COMPONENTES SHOPEE =====
export { default as BannerCarousel } from './BannerCarousel';
export { default as BottomNav } from './BottomNav';
export { default as FlashSale } from './FlashSale';
export { default as HeaderShopee } from './HeaderShopee';
export { default as ProductCardShopee } from './ProductCardShopee';
export { default as ShopeeHome } from './ShopeeHome';

// ===== COMPONENTES FIXOS =====
export { default as FakeNotification } from './FakeNotification';
export { default as FixedBuyButton } from './FixedBuyButton';
export { default as FixedComponents } from './FixedComponents';

// ===== COMPONENTES DE SEO =====
export { JsonLd } from './JsonLd';

// ===== TIPOS =====
export interface ProductCardShopeeProps {
  product: {
    id: number;
    name: string;
    originalPrice: string;
    currentPrice: string;
    discount: string;
    badge?: string;
    image: string;
    sold: string;
    rating: number;
    reviews: number;
    freeShipping?: boolean;
    isNew?: boolean;
  };
}
