import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';
import { JsonLd } from './JsonLd';

describe('JsonLd Component', () => {
  it('should render without crashing', () => {
    const { container } = render(<JsonLd />);
    expect(container.firstChild).toBeTruthy();
  });

  it('should render multiple script tags with JSON-LD data', () => {
    const { container } = render(<JsonLd />);
    const scripts = container.querySelectorAll(
      'script[type="application/ld+json"]'
    );

    // Deve renderizar 5 scripts: softwareApplication, organization, person, breadcrumb, website
    expect(scripts).toHaveLength(5);
  });

  it('should render software application JSON-LD', () => {
    const { container } = render(<JsonLd />);
    const scripts = container.querySelectorAll(
      'script[type="application/ld+json"]'
    );

    const softwareScript = scripts[0];
    const jsonData = JSON.parse(softwareScript.innerHTML);

    expect(jsonData['@type']).toBe('SoftwareApplication');
    expect(jsonData.name).toBe('Aqua9 Boilerplate v2');
    expect(jsonData.applicationCategory).toBe('DeveloperApplication');
  });

  it('should render organization JSON-LD', () => {
    const { container } = render(<JsonLd />);
    const scripts = container.querySelectorAll(
      'script[type="application/ld+json"]'
    );

    const orgScript = scripts[1];
    const jsonData = JSON.parse(orgScript.innerHTML);

    expect(jsonData['@type']).toBe('Organization');
    expect(jsonData.name).toBe('Aqua9');
    expect(jsonData.url).toBe('https://aqua9.com.br');
  });

  it('should render person JSON-LD', () => {
    const { container } = render(<JsonLd />);
    const scripts = container.querySelectorAll(
      'script[type="application/ld+json"]'
    );

    const personScript = scripts[2];
    const jsonData = JSON.parse(personScript.innerHTML);

    expect(jsonData['@type']).toBe('Person');
    expect(jsonData.name).toBe('Jonathan Simão');
    expect(jsonData.url).toBe('https://aqua9.com.br');
  });

  it('should render breadcrumb JSON-LD', () => {
    const { container } = render(<JsonLd />);
    const scripts = container.querySelectorAll(
      'script[type="application/ld+json"]'
    );

    const breadcrumbScript = scripts[3];
    const jsonData = JSON.parse(breadcrumbScript.innerHTML);

    expect(jsonData['@type']).toBe('BreadcrumbList');
    expect(jsonData.itemListElement).toHaveLength(2);
    expect(jsonData.itemListElement[0].name).toBe('Home');
    expect(jsonData.itemListElement[1].name).toBe('Boilerplate Aqua9');
  });

  it('should render website JSON-LD', () => {
    const { container } = render(<JsonLd />);
    const scripts = container.querySelectorAll(
      'script[type="application/ld+json"]'
    );

    const websiteScript = scripts[4];
    const jsonData = JSON.parse(websiteScript.innerHTML);

    expect(jsonData['@type']).toBe('WebSite');
    expect(jsonData.name).toBe('Boilerplate Aqua9');
    expect(jsonData.url).toBe('https://aqua9.com.br');
    expect(jsonData.potentialAction['@type']).toBe('SearchAction');
  });

  it('should have valid JSON structure in all scripts', () => {
    const { container } = render(<JsonLd />);
    const scripts = container.querySelectorAll(
      'script[type="application/ld+json"]'
    );

    scripts.forEach(script => {
      expect(() => {
        JSON.parse(script.innerHTML);
      }).not.toThrow();
    });
  });

  it('should include required schema.org context', () => {
    const { container } = render(<JsonLd />);
    const scripts = container.querySelectorAll(
      'script[type="application/ld+json"]'
    );

    // Verificar se pelo menos alguns scripts têm o contexto schema.org
    let hasSchemaContext = false;
    scripts.forEach(script => {
      const jsonData = JSON.parse(script.innerHTML);
      if (jsonData['@context'] === 'https://schema.org') {
        hasSchemaContext = true;
      }
    });

    expect(hasSchemaContext).toBe(true);
  });

  it('should have proper script attributes', () => {
    const { container } = render(<JsonLd />);
    const scripts = container.querySelectorAll(
      'script[type="application/ld+json"]'
    );

    scripts.forEach(script => {
      expect(script.getAttribute('type')).toBe('application/ld+json');
      expect(script.innerHTML).toBeTruthy();
    });
  });
});
