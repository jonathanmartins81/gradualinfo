'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaHeart, FaHome, FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', icon: FaHome, label: 'Início' },
    { href: '/search', icon: FaSearch, label: 'Explorar' },
    { href: '/live', icon: FaHeart, label: 'Live' },
    { href: '/cart', icon: FaShoppingCart, label: 'Carrinho' },
    { href: '/profile', icon: FaUser, label: 'Perfil' },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${isActive
                  ? 'text-orange-500 bg-orange-50'
                  : 'text-gray-600 hover:text-orange-500'
                }`}
            >
              <Icon className={`w-5 h-5 mb-1 ${isActive ? 'text-orange-500' : ''}`} />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
