import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';

interface AnimatedCardProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'outlined' | 'glass';
  hoverEffect?: 'lift' | 'scale' | 'glow' | 'tilt';
  interactive?: boolean;
  loading?: boolean;
  className?: string;
  onClick?: () => void;
  image?: string;
  title?: string;
  subtitle?: string;
  actions?: React.ReactNode;
}

/**
 * Card com micro-interações e animações
 *
 * @example
 * ```tsx
 * <AnimatedCard
 *   variant="elevated"
 *   hoverEffect="lift"
 *   interactive
 *   image="/image.jpg"
 *   title="Título do Card"
 *   subtitle="Subtítulo"
 * >
 *   Conteúdo do card
 * </AnimatedCard>
 * ```
 */
const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  variant = 'default',
  hoverEffect = 'lift',
  interactive = false,
  loading = false,
  className = '',
  onClick,
  image,
  title,
  subtitle,
  actions,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const baseClasses =
    'relative overflow-hidden transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2';

  const variantClasses = {
    default:
      'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700',
    elevated: 'bg-white dark:bg-gray-800 shadow-md hover:shadow-lg',
    outlined: 'bg-transparent border-2 border-gray-300 dark:border-gray-600',
    glass:
      'bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-white/20 dark:border-gray-700/20',
  };

  const hoverEffects = {
    lift: 'hover:-translate-y-2 hover:shadow-xl',
    scale: 'hover:scale-105',
    glow: 'hover:shadow-lg hover:shadow-primary-500/25',
    tilt: 'hover:rotate-1',
  };

  const interactiveClasses = interactive ? 'cursor-pointer' : '';
  const roundedClasses = 'rounded-lg';

  const combinedClasses = [
    baseClasses,
    variantClasses[variant],
    hoverEffects[hoverEffect],
    interactiveClasses,
    roundedClasses,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    hover: hoverEffect === 'tilt' ? { rotate: 1 } : {},
  };

  const handleClick = () => {
    if (interactive && onClick) {
      onClick();
    }
  };

  return (
    <motion.div
      className={combinedClasses}
      variants={cardVariants}
      initial='initial'
      animate='animate'
      whileHover='hover'
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={handleClick}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30,
      }}
    >
      {/* Loading Overlay */}
      <AnimatePresence>
        {loading && (
          <motion.div
            className='absolute inset-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm z-10 flex items-center justify-center'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className='w-8 h-8 border-2 border-primary-600 border-t-transparent rounded-full'
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Image */}
      {image && (
        <motion.div
          className='relative h-48 overflow-hidden'
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={image}
            alt={title || 'Card image'}
            className='w-full h-full object-cover'
          />
          <motion.div
            className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent'
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      )}

      {/* Content */}
      <div className='p-6'>
        {/* Header */}
        {(title || subtitle) && (
          <div className='mb-4'>
            {title && (
              <motion.h3
                className='text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1'
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                {title}
              </motion.h3>
            )}
            {subtitle && (
              <motion.p
                className='text-sm text-gray-600 dark:text-gray-400'
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        )}

        {/* Body */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {children}
        </motion.div>

        {/* Actions */}
        {actions && (
          <motion.div
            className='mt-4 pt-4 border-t border-gray-200 dark:border-gray-700'
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {actions}
          </motion.div>
        )}
      </div>

      {/* Hover Effect Overlay */}
      {interactive && (
        <motion.div
          className='absolute inset-0 bg-primary-500/5 rounded-lg pointer-events-none'
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.div>
  );
};

export default AnimatedCard;
