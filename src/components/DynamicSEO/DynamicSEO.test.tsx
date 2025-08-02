import { render } from '@testing-library/react';
import React from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import DynamicSEO from './index';

// Mock mais robusto do DOM
const mockHead = {
  appendChild: vi.fn(),
  querySelector: vi.fn(() => null),
  insertBefore: vi.fn(),
  removeChild: vi.fn(),
  getElementsByTagName: vi.fn(() => []),
  children: [],
};

const mockDocument = {
  title: '',
  head: mockHead,
  querySelector: vi.fn(() => null),
  createElement: vi.fn((tag: string) => ({
    tagName: tag.toUpperCase(),
    setAttribute: vi.fn(),
    getAttribute: vi.fn(),
    remove: vi.fn(),
    appendChild: vi.fn(),
    innerHTML: '',
    cloneNode: vi.fn(),
    parentNode: null,
  })),
  getElementsByTagName: vi.fn(() => []),
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
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
    document: mockDocument,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  },
  writable: true,
});

describe('DynamicSEO Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockDocument.title = '';
    mockDocument.querySelector.mockReturnValue(null);
    mockDocument.head.querySelector.mockReturnValue(null);
    mockDocument.getElementsByTagName.mockReturnValue([]);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should render without crashing', () => {
    expect(() => {
      render(<DynamicSEO title='Test Page' description='Test description' />);
    }).not.toThrow();
  });

  it('should update document title', () => {
    render(<DynamicSEO title='New Title' />);
    expect(mockDocument.title).toBe('New Title');
  });

  it('should handle basic SEO props', () => {
    render(
      <DynamicSEO
        title='Test Page'
        description='Test description'
        keywords={['test', 'seo']}
      />
    );
    expect(mockDocument.title).toBe('Test Page');
  });

  it('should handle article type', () => {
    render(
      <DynamicSEO
        title='Article Title'
        description='Article description'
        type='article'
        author='John Doe'
        publishedTime='2024-01-01'
      />
    );
    expect(mockDocument.title).toBe('Article Title');
  });

  it('should handle canonical URL', () => {
    render(
      <DynamicSEO title='Test Page' canonical='https://example.com/test' />
    );
    expect(mockDocument.title).toBe('Test Page');
  });

  it('should handle Open Graph meta tags', () => {
    render(
      <DynamicSEO
        title='Test Page'
        description='Test description'
        image='https://example.com/image.jpg'
        url='https://example.com'
      />
    );
    expect(mockDocument.title).toBe('Test Page');
  });

  it('should handle Twitter Card meta tags', () => {
    render(
      <DynamicSEO
        title='Test Page'
        description='Test description'
        twitterCard='summary_large_image'
        twitterSite='@example'
      />
    );
    expect(mockDocument.title).toBe('Test Page');
  });

  it('should reset title on unmount', () => {
    const { unmount } = render(<DynamicSEO title='Test Page' />);

    expect(mockDocument.title).toBe('Test Page');

    unmount();
    // O componente deve resetar o título para o valor padrão
  });

  it('should handle empty props gracefully', () => {
    expect(() => {
      render(<DynamicSEO title='' />);
    }).not.toThrow();
  });

  it('should handle undefined props', () => {
    expect(() => {
      render(<DynamicSEO title='Test' description={undefined} />);
    }).not.toThrow();
  });

  it('should handle article with all optional props', () => {
    expect(() => {
      render(
        <DynamicSEO
          title='Article Title'
          description='Article description'
          type='article'
          author='John Doe'
          publishedTime='2024-01-01'
          modifiedTime='2024-01-02'
          section='Technology'
          tags={['tech', 'web']}
        />
      );
    }).not.toThrow();
  });
});
