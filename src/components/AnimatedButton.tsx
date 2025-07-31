import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';

interface AnimatedButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  ripple?: boolean;
  hoverEffect?: 'scale' | 'lift' | 'glow' | 'slide';
}

/**
 * Botão com micro-interações e animações
 *
 * @example
 * ```tsx
 * <AnimatedButton
 *   variant="primary"
 *   hoverEffect="scale"
 *   ripple
 *   onClick={() => console.log('Clicked!')}
 * >
 *   Clique aqui
 * </AnimatedButton>
 * ```
 */
const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  fullWidth = false,
  icon,
  onClick,
  className = '',
  ripple = true,
  hoverEffect = 'scale',
}) => {
  const [isPressed, setIsPressed] = useState(false);
  const [ripples, setRipples] = useState<
    Array<{ id: number; x: number; y: number }>
  >([]);

  const baseClasses =
    'relative inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden';

  const variantClasses = {
    primary:
      'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500 shadow-soft hover:shadow-medium',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
    ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
    outline:
      'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 focus:ring-primary-500',
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const hoverEffects = {
    scale: 'hover:scale-105 active:scale-95',
    lift: 'hover:-translate-y-1 hover:shadow-lg active:translate-y-0',
    glow: 'hover:shadow-lg hover:shadow-primary-500/25',
    slide: 'hover:translate-x-1 active:-translate-x-1',
  };

  const combinedClasses = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    hoverEffects[hoverEffect],
    fullWidth && 'w-full',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || loading) return;

    // Criar efeito ripple
    if (ripple) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const id = Date.now();

      setRipples(prev => [...prev, { id, x, y }]);

      // Remover ripple após animação
      setTimeout(() => {
        setRipples(prev => prev.filter(ripple => ripple.id !== id));
      }, 600);
    }

    // Animar pressionamento
    setIsPressed(true);
    setTimeout(() => setIsPressed(false), 150);

    onClick?.();
  };

  return (
    <motion.button
      className={combinedClasses}
      disabled={disabled || loading}
      onClick={handleClick}
      whileTap={{ scale: 0.95 }}
      animate={{
        scale: isPressed ? 0.95 : 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 17,
      }}
    >
      {/* Efeito Ripple */}
      <AnimatePresence>
        {ripples.map(ripple => (
          <motion.span
            key={ripple.id}
            className='absolute bg-white/30 rounded-full pointer-events-none'
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 4, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              left: ripple.x,
              top: ripple.y,
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}
      </AnimatePresence>

      {/* Loading Spinner */}
      {loading && (
        <motion.div
          className='absolute inset-0 flex items-center justify-center bg-inherit rounded-lg'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className='w-5 h-5 border-2 border-white/30 border-t-white rounded-full'
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          />
        </motion.div>
      )}

      {/* Conteúdo */}
      <motion.div
        className='flex items-center space-x-2'
        animate={{ opacity: loading ? 0 : 1 }}
      >
        {icon && <span className='text-lg'>{icon}</span>}
        <span>{children}</span>
      </motion.div>
    </motion.button>
  );
};

export default AnimatedButton;
