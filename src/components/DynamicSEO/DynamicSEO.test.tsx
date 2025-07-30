import { render } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import DynamicSEO from './index';

// Mock do DOM
const mockDocument = {
  title: '',
  head: {
    appendChild: vi.fn(),
    querySelector: vi.fn(),
  },
  querySelector: vi.fn(),
};

const mockMetaElement = {
  setAttribute: vi.fn(),
  getAttribute: vi.fn(),
};

const mockLinkElement = {
  setAttribute: vi.fn(),
  getAttribute: vi.fn(),
};

// Mock global document
Object.defineProperty(globalThis, 'document', {
  value: mockDocument,
  writable: true,
});

// Mock global window
Object.defineProperty(globalThis, 'window', {
  value: {
    location: {
      href: 'http://localhost:3000',
    },
  },
  writable: true,
});

describe('DynamicSEO Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockDocument.title = '';
    mockDocument.querySelector.mockReturnValue(null);
    mockDocument.head.querySelector.mockReturnValue(null);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should render without crashing', () => {
    const { container } = render(
      <DynamicSEO title='Test Page' description='Test description' />
    );
    expect(container.firstChild).toBeNull();
  });

  it('should update document title', () => {
    render(<DynamicSEO title='New Title' />);
    expect(mockDocument.title).toBe('New Title');
  });

  it('should create meta tags for basic SEO', () => {
    const mockCreateElement = vi.fn().mockReturnValue(mockMetaElement);
    Object.defineProperty(globalThis.document, 'createElement', {
      value: mockCreateElement,
      writable: true,
    });

    render(
      <DynamicSEO
        title='Test Page'
        description='Test description'
        keywords={['test', 'seo']}
      />
    );

    expect(mockCreateElement).toHaveBeenCalledWith('meta');
  });

  it('should handle article type with additional meta tags', () => {
    const mockCreateElement = vi.fn().mockReturnValue(mockMetaElement);
    Object.defineProperty(globalThis.document, 'createElement', {
      value: mockCreateElement,
      writable: true,
    });

    render(
      <DynamicSEO
        title='Article Title'
        description='Article description'
        type='article'
        author='John Doe'
        publishedTime='2024-01-01'
        section='Technology'
        tags={['react', 'nextjs']}
      />
    );

    expect(mockCreateElement).toHaveBeenCalledWith('meta');
  });

  it('should handle canonical URL', () => {
    const mockCreateElement = vi.fn().mockReturnValue(mockLinkElement);
    Object.defineProperty(globalThis.document, 'createElement', {
      value: mockCreateElement,
      writable: true,
    });

    render(
      <DynamicSEO title='Test Page' canonical='https://example.com/test' />
    );

    expect(mockCreateElement).toHaveBeenCalledWith('link');
  });

  it('should handle Open Graph meta tags', () => {
    const mockCreateElement = vi.fn().mockReturnValue(mockMetaElement);
    Object.defineProperty(globalThis.document, 'createElement', {
      value: mockCreateElement,
      writable: true,
    });

    render(
      <DynamicSEO
        title='Test Page'
        description='Test description'
        image='https://example.com/image.jpg'
        type='website'
      />
    );

    expect(mockCreateElement).toHaveBeenCalledWith('meta');
  });

  it('should handle Twitter Card meta tags', () => {
    const mockCreateElement = vi.fn().mockReturnValue(mockMetaElement);
    Object.defineProperty(globalThis.document, 'createElement', {
      value: mockCreateElement,
      writable: true,
    });

    render(
      <DynamicSEO
        title='Test Page'
        description='Test description'
        image='https://example.com/image.jpg'
      />
    );

    expect(mockCreateElement).toHaveBeenCalledWith('meta');
  });

  it('should reset title on unmount', () => {
    const { unmount } = render(<DynamicSEO title='Test Page' />);

    expect(mockDocument.title).toBe('Test Page');

    unmount();

    expect(mockDocument.title).toBe('Boilerplate Aqua9 - Next.js Profissional');
  });
});
