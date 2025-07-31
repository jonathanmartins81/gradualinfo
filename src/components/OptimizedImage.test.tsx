import { render, screen } from '@testing-library/react';
import React from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import OptimizedImage from './OptimizedImage';

// Mock do next/image
vi.mock('next/image', () => ({
  default: ({ src, alt, width, height, ...props }: any) => (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      data-testid='optimized-image'
      {...props}
    />
  ),
}));

describe('OptimizedImage Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render with basic props', () => {
    render(
      <OptimizedImage
        src='/test-image.jpg'
        alt='Test image'
        width={300}
        height={200}
      />
    );

    const image = screen.getByTestId('optimized-image');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/test-image.jpg');
    expect(image).toHaveAttribute('alt', 'Test image');
    expect(image).toHaveAttribute('width', '300');
    expect(image).toHaveAttribute('height', '200');
  });

  it('should render with default alt text when not provided', () => {
    render(<OptimizedImage src='/test-image.jpg' width={300} height={200} />);

    const image = screen.getByTestId('optimized-image');
    expect(image).toHaveAttribute('alt', 'Imagem otimizada');
  });

  it('should apply custom className', () => {
    const customClass = 'custom-image-class';
    render(
      <OptimizedImage
        src='/test-image.jpg'
        alt='Test image'
        width={300}
        height={200}
        className={customClass}
      />
    );

    const image = screen.getByTestId('optimized-image');
    expect(image).toHaveClass(customClass);
  });

  it('should apply priority prop', () => {
    render(
      <OptimizedImage
        src='/test-image.jpg'
        alt='Test image'
        width={300}
        height={200}
        priority
      />
    );

    const image = screen.getByTestId('optimized-image');
    expect(image).toHaveAttribute('priority');
  });

  it('should apply loading prop', () => {
    render(
      <OptimizedImage
        src='/test-image.jpg'
        alt='Test image'
        width={300}
        height={200}
        loading='lazy'
      />
    );

    const image = screen.getByTestId('optimized-image');
    expect(image).toHaveAttribute('loading', 'lazy');
  });

  it('should apply sizes prop', () => {
    const sizes = '(max-width: 768px) 100vw, 50vw';
    render(
      <OptimizedImage
        src='/test-image.jpg'
        alt='Test image'
        width={300}
        height={200}
        sizes={sizes}
      />
    );

    const image = screen.getByTestId('optimized-image');
    expect(image).toHaveAttribute('sizes', sizes);
  });

  it('should apply quality prop', () => {
    render(
      <OptimizedImage
        src='/test-image.jpg'
        alt='Test image'
        width={300}
        height={200}
        quality={85}
      />
    );

    const image = screen.getByTestId('optimized-image');
    expect(image).toHaveAttribute('quality', '85');
  });

  it('should apply placeholder prop', () => {
    render(
      <OptimizedImage
        src='/test-image.jpg'
        alt='Test image'
        width={300}
        height={200}
        placeholder='blur'
      />
    );

    const image = screen.getByTestId('optimized-image');
    expect(image).toHaveAttribute('placeholder', 'blur');
  });

  it('should apply blurDataURL prop', () => {
    const blurDataURL =
      'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=';
    render(
      <OptimizedImage
        src='/test-image.jpg'
        alt='Test image'
        width={300}
        height={200}
        placeholder='blur'
        blurDataURL={blurDataURL}
      />
    );

    const image = screen.getByTestId('optimized-image');
    expect(image).toHaveAttribute('blurDataURL', blurDataURL);
  });

  it('should apply fill prop', () => {
    render(<OptimizedImage src='/test-image.jpg' alt='Test image' fill />);

    const image = screen.getByTestId('optimized-image');
    expect(image).toHaveAttribute('fill');
  });

  it('should apply objectFit prop', () => {
    render(
      <OptimizedImage
        src='/test-image.jpg'
        alt='Test image'
        width={300}
        height={200}
        objectFit='cover'
      />
    );

    const image = screen.getByTestId('optimized-image');
    expect(image).toHaveStyle('object-fit: cover');
  });

  it('should apply objectPosition prop', () => {
    render(
      <OptimizedImage
        src='/test-image.jpg'
        alt='Test image'
        width={300}
        height={200}
        objectPosition='center'
      />
    );

    const image = screen.getByTestId('optimized-image');
    expect(image).toHaveStyle('object-position: center');
  });

  it('should apply onLoad callback', () => {
    const handleLoad = vi.fn();
    render(
      <OptimizedImage
        src='/test-image.jpg'
        alt='Test image'
        width={300}
        height={200}
        onLoad={handleLoad}
      />
    );

    const image = screen.getByTestId('optimized-image');
    image.dispatchEvent(new Event('load'));
    expect(handleLoad).toHaveBeenCalled();
  });

  it('should apply onError callback', () => {
    const handleError = vi.fn();
    render(
      <OptimizedImage
        src='/test-image.jpg'
        alt='Test image'
        width={300}
        height={200}
        onError={handleError}
      />
    );

    const image = screen.getByTestId('optimized-image');
    image.dispatchEvent(new Event('error'));
    expect(handleError).toHaveBeenCalled();
  });

  it('should handle missing src gracefully', () => {
    render(<OptimizedImage alt='Test image' width={300} height={200} />);

    const image = screen.getByTestId('optimized-image');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('alt', 'Test image');
  });

  it('should handle empty src', () => {
    render(<OptimizedImage src='' alt='Test image' width={300} height={200} />);

    const image = screen.getByTestId('optimized-image');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '');
  });

  it('should handle null src', () => {
    render(
      <OptimizedImage
        src={null as any}
        alt='Test image'
        width={300}
        height={200}
      />
    );

    const image = screen.getByTestId('optimized-image');
    expect(image).toBeInTheDocument();
  });

  it('should handle undefined src', () => {
    render(
      <OptimizedImage
        src={undefined as any}
        alt='Test image'
        width={300}
        height={200}
      />
    );

    const image = screen.getByTestId('optimized-image');
    expect(image).toBeInTheDocument();
  });

  it('should handle missing width and height when fill is true', () => {
    render(<OptimizedImage src='/test-image.jpg' alt='Test image' fill />);

    const image = screen.getByTestId('optimized-image');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('fill');
  });

  it('should handle zero width and height', () => {
    render(
      <OptimizedImage
        src='/test-image.jpg'
        alt='Test image'
        width={0}
        height={0}
      />
    );

    const image = screen.getByTestId('optimized-image');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('width', '0');
    expect(image).toHaveAttribute('height', '0');
  });

  it('should handle negative width and height', () => {
    render(
      <OptimizedImage
        src='/test-image.jpg'
        alt='Test image'
        width={-100}
        height={-50}
      />
    );

    const image = screen.getByTestId('optimized-image');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('width', '-100');
    expect(image).toHaveAttribute('height', '-50');
  });

  it('should apply multiple props simultaneously', () => {
    render(
      <OptimizedImage
        src='/test-image.jpg'
        alt='Test image'
        width={300}
        height={200}
        priority
        loading='lazy'
        quality={85}
        placeholder='blur'
        objectFit='cover'
        objectPosition='center'
        className='custom-class'
      />
    );

    const image = screen.getByTestId('optimized-image');
    expect(image).toHaveAttribute('src', '/test-image.jpg');
    expect(image).toHaveAttribute('alt', 'Test image');
    expect(image).toHaveAttribute('width', '300');
    expect(image).toHaveAttribute('height', '200');
    expect(image).toHaveAttribute('priority');
    expect(image).toHaveAttribute('loading', 'lazy');
    expect(image).toHaveAttribute('quality', '85');
    expect(image).toHaveAttribute('placeholder', 'blur');
    expect(image).toHaveClass('custom-class');
    expect(image).toHaveStyle('object-fit: cover');
    expect(image).toHaveStyle('object-position: center');
  });

  it('should handle external URLs', () => {
    render(
      <OptimizedImage
        src='https://example.com/image.jpg'
        alt='External image'
        width={300}
        height={200}
      />
    );

    const image = screen.getByTestId('optimized-image');
    expect(image).toHaveAttribute('src', 'https://example.com/image.jpg');
  });

  it('should handle data URLs', () => {
    const dataURL =
      'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=';
    render(
      <OptimizedImage
        src={dataURL}
        alt='Data URL image'
        width={300}
        height={200}
      />
    );

    const image = screen.getByTestId('optimized-image');
    expect(image).toHaveAttribute('src', dataURL);
  });

  it('should handle SVG images', () => {
    render(
      <OptimizedImage src='/icon.svg' alt='SVG icon' width={24} height={24} />
    );

    const image = screen.getByTestId('optimized-image');
    expect(image).toHaveAttribute('src', '/icon.svg');
  });

  it('should handle WebP images', () => {
    render(
      <OptimizedImage
        src='/image.webp'
        alt='WebP image'
        width={300}
        height={200}
      />
    );

    const image = screen.getByTestId('optimized-image');
    expect(image).toHaveAttribute('src', '/image.webp');
  });

  it('should handle AVIF images', () => {
    render(
      <OptimizedImage
        src='/image.avif'
        alt='AVIF image'
        width={300}
        height={200}
      />
    );

    const image = screen.getByTestId('optimized-image');
    expect(image).toHaveAttribute('src', '/image.avif');
  });
});
