'use client';

import Image from 'next/image';
import {
  headerActions,
  headerBase,
  headerBreadcrumbs,
  headerContainer,
  headerContent,
  headerLogo,
  headerSizes,
  headerSubtitle,
  headerSubtitleHero,
  headerTitle,
  headerTitleDashboard,
  headerTitleHero,
  headerVariants,
} from './styles';
import { HeaderProps } from './types';

// Função utilitária para combinar classes CSS
const cn = (...classes: (string | boolean | undefined | null)[]) => {
  return classes.filter(Boolean).join(' ');
};

/**
 * Componente Header reutilizável e responsivo
 *
 * @example
 * ```tsx
 * <Header title="Página Principal" subtitle="Bem-vindo ao sistema">
 *   Conteúdo do header
 * </Header>
 *
 * <Header
 *   variant="hero"
 *   title="Título Hero"
 *   logo={{ src: "/logo.svg", alt: "Logo" }}
 * />
 * ```
 */
const Header = ({
  title,
  subtitle,
  variant = 'default',
  size = 'md',
  className,
  children,
  actions,
  breadcrumbs,
  logo,
}: HeaderProps) => {
  const getTitleClass = () => {
    switch (variant) {
      case 'hero':
        return headerTitleHero;
      case 'dashboard':
        return headerTitleDashboard;
      default:
        return headerTitle;
    }
  };

  const getSubtitleClass = () => {
    return variant === 'hero' ? headerSubtitleHero : headerSubtitle;
  };

  return (
    <header
      className={cn(
        headerBase,
        headerVariants[variant],
        headerSizes[size],
        className
      )}
    >
      <div className={headerContainer}>
        <div className={headerContent}>
          {logo && (
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width || 32}
              height={logo.height || 32}
              className={headerLogo}
            />
          )}

          <div>
            {breadcrumbs && (
              <div className={headerBreadcrumbs}>{breadcrumbs}</div>
            )}

            {title && <h1 className={getTitleClass()}>{title}</h1>}

            {subtitle && <p className={getSubtitleClass()}>{subtitle}</p>}

            {children}
          </div>
        </div>

        {actions && <div className={headerActions}>{actions}</div>}
      </div>
    </header>
  );
};

export default Header;
