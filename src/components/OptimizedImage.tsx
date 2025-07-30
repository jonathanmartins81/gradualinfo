import Image from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  sizes?: string;
  quality?: number;
  fill?: boolean;
  style?: React.CSSProperties;
  onLoad?: () => void;
  onError?: () => void;
}

/**
 * Componente de imagem otimizado
 *
 * Wrapper para next/image com configurações otimizadas para performance
 * e acessibilidade.
 */
export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  placeholder = 'empty',
  blurDataURL,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  quality = 75,
  fill = false,
  style,
  onLoad,
  onError,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
    onError?.();
  };

  // Fallback para erro de carregamento
  if (hasError) {
    return (
      <div
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={{
          width: width || '100%',
          height: height || '200px',
          ...style,
        }}
      >
        <span className='text-gray-500 text-sm'>Erro ao carregar imagem</span>
      </div>
    );
  }

  return (
    <div
      className={`relative ${isLoading ? 'animate-pulse bg-gray-200' : ''} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        className={`transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        priority={priority}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        sizes={sizes}
        quality={quality}
        fill={fill}
        style={style}
        onLoad={handleLoad}
        onError={handleError}
        // Configurações de acessibilidade
        loading={priority ? 'eager' : 'lazy'}
        decoding='async'
      />

      {/* Loading skeleton */}
      {isLoading && (
        <div className='absolute inset-0 bg-gray-200 animate-pulse' />
      )}
    </div>
  );
}

/**
 * Hook para otimização de imagens
 */
export function useImageOptimization() {
  const generateBlurDataURL = (width: number, height: number) => {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');

    if (ctx) {
      ctx.fillStyle = '#f3f4f6';
      ctx.fillRect(0, 0, width, height);
    }

    return canvas.toDataURL();
  };

  const getImageDimensions = (
    src: string
  ): Promise<{ width: number; height: number }> => {
    return new Promise((resolve, reject) => {
      const img = new window.Image();
      img.onload = () => {
        resolve({ width: img.width, height: img.height });
      };
      img.onerror = reject;
      img.src = src;
    });
  };

  return {
    generateBlurDataURL,
    getImageDimensions,
  };
}

export default OptimizedImage;
