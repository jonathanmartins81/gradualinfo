import React from 'react';

interface SkeletonProps {
  variant?: 'text' | 'circular' | 'rectangular' | 'rounded';
  width?: string | number;
  height?: string | number;
  className?: string;
  animation?: 'pulse' | 'wave' | 'none';
}

/**
 * Componente Skeleton para loading states
 *
 * @example
 * ```tsx
 * <Skeleton variant="text" width="100%" height="20px" />
 * <Skeleton variant="circular" width={40} height={40} />
 * <Skeleton variant="rectangular" width={200} height={100} />
 * ```
 */
const Skeleton: React.FC<SkeletonProps> = ({
  variant = 'text',
  width,
  height,
  className = '',
  animation = 'pulse',
}) => {
  const baseClasses = 'bg-gray-200 dark:bg-gray-700';

  const animationClasses = {
    pulse: 'animate-pulse',
    wave: 'animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700',
    none: '',
  };

  const variantClasses = {
    text: 'rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-none',
    rounded: 'rounded-lg',
  };

  const combinedClasses = [
    baseClasses,
    animationClasses[animation],
    variantClasses[variant],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const style: React.CSSProperties = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
  };

  return <div className={combinedClasses} style={style} />;
};

/**
 * Componente Skeleton para texto
 */
export const SkeletonText: React.FC<{
  lines?: number;
  className?: string;
}> = ({ lines = 1, className = '' }) => {
  return (
    <div className={`space-y-2 ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <Skeleton
          key={index}
          variant='text'
          width={index === lines - 1 ? '60%' : '100%'}
          height='16px'
        />
      ))}
    </div>
  );
};

/**
 * Componente Skeleton para card
 */
export const SkeletonCard: React.FC<{
  className?: string;
}> = ({ className = '' }) => {
  return (
    <div
      className={`p-4 border border-gray-200 dark:border-gray-700 rounded-lg ${className}`}
    >
      <div className='flex items-center space-x-4 mb-4'>
        <Skeleton variant='circular' width={40} height={40} />
        <div className='flex-1'>
          <Skeleton variant='text' width='60%' height='16px' className='mb-2' />
          <Skeleton variant='text' width='40%' height='12px' />
        </div>
      </div>
      <Skeleton
        variant='rectangular'
        width='100%'
        height={120}
        className='mb-4'
      />
      <div className='space-y-2'>
        <Skeleton variant='text' width='100%' height='14px' />
        <Skeleton variant='text' width='80%' height='14px' />
        <Skeleton variant='text' width='60%' height='14px' />
      </div>
    </div>
  );
};

/**
 * Componente Skeleton para lista
 */
export const SkeletonList: React.FC<{
  items?: number;
  className?: string;
}> = ({ items = 5, className = '' }) => {
  return (
    <div className={`space-y-3 ${className}`}>
      {Array.from({ length: items }).map((_, index) => (
        <div
          key={index}
          className='flex items-center space-x-3 p-3 border border-gray-200 dark:border-gray-700 rounded-lg'
        >
          <Skeleton variant='circular' width={32} height={32} />
          <div className='flex-1'>
            <Skeleton
              variant='text'
              width='70%'
              height='14px'
              className='mb-1'
            />
            <Skeleton variant='text' width='50%' height='12px' />
          </div>
        </div>
      ))}
    </div>
  );
};

/**
 * Componente Skeleton para tabela
 */
export const SkeletonTable: React.FC<{
  rows?: number;
  columns?: number;
  className?: string;
}> = ({ rows = 5, columns = 4, className = '' }) => {
  return (
    <div
      className={`overflow-hidden border border-gray-200 dark:border-gray-700 rounded-lg ${className}`}
    >
      {/* Header */}
      <div className='bg-gray-50 dark:bg-gray-800 px-4 py-3 border-b border-gray-200 dark:border-gray-700'>
        <div className='flex space-x-4'>
          {Array.from({ length: columns }).map((_, index) => (
            <Skeleton
              key={index}
              variant='text'
              width={`${100 / columns}%`}
              height='16px'
            />
          ))}
        </div>
      </div>

      {/* Rows */}
      <div className='divide-y divide-gray-200 dark:divide-gray-700'>
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <div key={rowIndex} className='px-4 py-3'>
            <div className='flex space-x-4'>
              {Array.from({ length: columns }).map((_, colIndex) => (
                <Skeleton
                  key={colIndex}
                  variant='text'
                  width={`${100 / columns}%`}
                  height='14px'
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skeleton;
