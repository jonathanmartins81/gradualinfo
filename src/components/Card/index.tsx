'use client';

// Função utilitária para combinar classes CSS
const cn = (...classes: (string | boolean | undefined | null)[]) => {
  return classes.filter(Boolean).join(' ');
};
import Image from 'next/image';
import {
  cardBase,
  cardContent,
  cardFooter,
  cardHeader,
  cardHoverable,
  cardImage,
  cardSizes,
  cardSubtitle,
  cardTitle,
  cardVariants,
} from './styles';
import { CardProps } from './types';

/**
 * Componente Card reutilizável e responsivo
 *
 * @example
 * ```tsx
 * <Card title="Título" subtitle="Subtítulo">
 *   Conteúdo do card
 * </Card>
 *
 * <Card variant="elevated" hoverable image={{ src: "/img.jpg", alt: "Imagem" }}>
 *   Card com imagem
 * </Card>
 * ```
 */
const Card = ({
  children,
  title,
  subtitle,
  variant = 'default',
  size = 'md',
  className,
  headerActions,
  footer,
  image,
  onClick,
  hoverable = false,
}: CardProps) => {
  const CardWrapper = onClick ? 'button' : 'div';

  return (
    <CardWrapper
      className={cn(
        cardBase,
        cardVariants[variant],
        cardSizes[size],
        hoverable && cardHoverable,
        className
      )}
      onClick={onClick}
      type={onClick ? 'button' : undefined}
    >
      {image && (
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width || 400}
          height={image.height || 200}
          className={cardImage}
        />
      )}

      {(title || headerActions) && (
        <div className={cardHeader}>
          <div>
            {title && <h3 className={cardTitle}>{title}</h3>}
            {subtitle && <p className={cardSubtitle}>{subtitle}</p>}
          </div>
          {headerActions && <div>{headerActions}</div>}
        </div>
      )}

      <div className={cardContent}>{children}</div>

      {footer && <div className={cardFooter}>{footer}</div>}
    </CardWrapper>
  );
};

export default Card;
