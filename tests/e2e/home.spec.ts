import { expect, test } from '@playwright/test';

test.describe('Página Inicial', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('deve carregar a página inicial corretamente', async ({ page }) => {
    // Verificar título da página
    await expect(page).toHaveTitle(/Aqua9 Boilerplate/);

    // Verificar se o logo está presente
    await expect(page.locator('img[alt="Aqua9 Logo"]')).toBeVisible();

    // Verificar se o título principal está presente
    await expect(page.getByRole('heading', { level: 1 })).toContainText(
      'Boilerplate Aqua9'
    );

    // Verificar se a descrição está presente
    await expect(page.getByText(/Template Next.js profissional/)).toBeVisible();
  });

  test('deve exibir tecnologias corretamente', async ({ page }) => {
    // Verificar se as tecnologias estão listadas
    await expect(page.getByText('Next.js')).toBeVisible();
    await expect(page.getByText('React')).toBeVisible();
    await expect(page.getByText('TypeScript')).toBeVisible();
  });

  test('deve ter navegação funcional', async ({ page }) => {
    // Verificar links de navegação
    const aboutLink = page.getByRole('link', { name: /sobre/i });
    const portfolioLink = page.getByRole('link', { name: /portfólio/i });

    await expect(aboutLink).toBeVisible();
    await expect(portfolioLink).toBeVisible();

    // Testar navegação para página sobre
    await aboutLink.click();
    await expect(page).toHaveURL(/.*about/);
    await expect(page).toHaveTitle(/Sobre/);
  });

  test('deve ser responsivo', async ({ page }) => {
    // Testar em diferentes tamanhos de tela
    const viewports = [
      { width: 1920, height: 1080 }, // Desktop
      { width: 768, height: 1024 }, // Tablet
      { width: 375, height: 667 }, // Mobile
    ];

    for (const viewport of viewports) {
      await page.setViewportSize(viewport);

      // Verificar se o conteúdo ainda está visível
      await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
      await expect(page.locator('img[alt="Aqua9 Logo"]')).toBeVisible();

      // Aguardar um pouco para verificar layout
      await page.waitForTimeout(500);
    }
  });

  test('deve ter metadados SEO corretos', async ({ page }) => {
    // Verificar meta tags importantes
    await expect(page.locator('meta[name="description"]')).toHaveAttribute(
      'content',
      /Template moderno/
    );
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
      'content',
      /Aqua9 Boilerplate/
    );
    await expect(page.locator('meta[property="og:type"]')).toHaveAttribute(
      'content',
      'website'
    );
  });

  test('deve ter acessibilidade básica', async ({ page }) => {
    // Verificar se há um heading principal
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();

    // Verificar se imagens têm alt text
    const images = page.locator('img');
    const count = await images.count();

    for (let i = 0; i < count; i++) {
      const alt = await images.nth(i).getAttribute('alt');
      expect(alt).toBeTruthy();
    }

    // Verificar se links têm texto descritivo
    const links = page.getByRole('link');
    const linkCount = await links.count();

    for (let i = 0; i < linkCount; i++) {
      const linkText = await links.nth(i).textContent();
      expect(linkText?.trim()).toBeTruthy();
    }
  });

  test('deve ter performance adequada', async ({ page }) => {
    // Medir tempo de carregamento
    const startTime = Date.now();

    await page.goto('/', { waitUntil: 'networkidle' });

    const loadTime = Date.now() - startTime;

    // Verificar se carregou em menos de 3 segundos
    expect(loadTime).toBeLessThan(3000);

    // Verificar Core Web Vitals básicos
    const performance = await page.evaluate(() => {
      return {
        loadTime:
          performance.timing.loadEventEnd - performance.timing.navigationStart,
        domContentLoaded:
          performance.timing.domContentLoadedEventEnd -
          performance.timing.navigationStart,
      };
    });

    expect(performance.loadTime).toBeLessThan(3000);
    expect(performance.domContentLoaded).toBeLessThan(1500);
  });
});
