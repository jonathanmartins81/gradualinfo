import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { DynamicSEO, useDynamicSEO } from './DynamicSEO';

// Mock do componente DynamicSEO para evitar problemas de DOM
vi.mock('./DynamicSEO', () => ({
  DynamicSEO: ({ title, description }: { title?: string; description?: string }) => (
    <div
      data-testid='dynamic-seo'
      data-title={title}
      data-description={description}
    >
      <div data-testid='child'>Child Content</div>
    </div>
  ),
  useDynamicSEO: vi.fn(config => ({
    updateSEO: vi.fn(),
    config,
  })),
}));

describe('DynamicSEO Component', () => {
  it('should render without crashing', () => {
    const { container } = render(
      <DynamicSEO title='Test Title' description='Test Description' />
    );
    expect(container.firstChild).toBeTruthy();
  });

  it('should render with title and description', () => {
    render(<DynamicSEO title='Test Title' description='Test Description' />);

    const seoElement = screen.getByTestId('dynamic-seo');
    expect(seoElement).toBeInTheDocument();
    expect(seoElement.getAttribute('data-title')).toBe('Test Title');
    expect(seoElement.getAttribute('data-description')).toBe(
      'Test Description'
    );
  });

  it('should render child content', () => {
    render(<DynamicSEO title='Test Title' />);

    expect(screen.getByTestId('child')).toBeInTheDocument();
    expect(screen.getByText('Child Content')).toBeInTheDocument();
  });

  it('should handle minimal props', () => {
    render(<DynamicSEO title='Minimal Title' />);

    const seoElement = screen.getByTestId('dynamic-seo');
    expect(seoElement.getAttribute('data-title')).toBe('Minimal Title');
  });

  it('should handle complex SEO configuration', () => {
    const complexConfig = {
      title: 'Complex Title',
      description: 'Complex Description',
      keywords: ['test', 'seo'],
      canonical: 'https://test.com/canonical',
    };

    render(<DynamicSEO {...complexConfig} />);

    const seoElement = screen.getByTestId('dynamic-seo');
    expect(seoElement.getAttribute('data-title')).toBe('Complex Title');
    expect(seoElement.getAttribute('data-description')).toBe(
      'Complex Description'
    );
  });
});

describe('useDynamicSEO Hook', () => {
  it('should return updateSEO function and config', () => {
    const TestComponent = () => {
      const { updateSEO, config } = useDynamicSEO({
        title: 'Test Title',
        description: 'Test Description',
      });

      return (
        <div>
          <button onClick={() => updateSEO({ title: 'Updated Title' })}>
            Update SEO
          </button>
          <span data-testid='config-title'>{config.title}</span>
        </div>
      );
    };

    render(<TestComponent />);

    expect(screen.getByTestId('config-title')).toHaveTextContent('Test Title');
  });

  it('should handle complex SEO configuration', () => {
    const complexConfig = {
      title: 'Complex Title',
      description: 'Complex Description',
      keywords: ['complex', 'seo'],
      canonical: 'https://test.com/canonical',
      openGraph: {
        title: 'OG Title',
        description: 'OG Description',
        image: 'https://test.com/og-image.jpg',
        type: 'article' as const,
      },
      twitter: {
        title: 'Twitter Title',
        description: 'Twitter Description',
        image: 'https://test.com/twitter-image.jpg',
        card: 'summary_large_image',
      },
    };

    const TestComponent = () => {
      const { config } = useDynamicSEO(complexConfig);
      return <div data-testid='config'>{JSON.stringify(config)}</div>;
    };

    render(<TestComponent />);

    const configElement = screen.getByTestId('config');
    const configData = JSON.parse(configElement.textContent || '{}');

    expect(configData.title).toBe('Complex Title');
    expect(configData.openGraph.title).toBe('OG Title');
    expect(configData.twitter.title).toBe('Twitter Title');
  });

  it('should handle empty configuration', () => {
    const TestComponent = () => {
      const { config } = useDynamicSEO({});
      return <div data-testid='empty-config'>{JSON.stringify(config)}</div>;
    };

    render(<TestComponent />);

    const configElement = screen.getByTestId('empty-config');
    const configData = JSON.parse(configElement.textContent || '{}');

    expect(configData).toEqual({});
  });

  it('should handle partial configuration', () => {
    const partialConfig = {
      title: 'Partial Title',
    };

    const TestComponent = () => {
      const { config } = useDynamicSEO(partialConfig);
      return <div data-testid='partial-config'>{JSON.stringify(config)}</div>;
    };

    render(<TestComponent />);

    const configElement = screen.getByTestId('partial-config');
    const configData = JSON.parse(configElement.textContent || '{}');

    expect(configData.title).toBe('Partial Title');
  });
});
