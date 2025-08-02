import { expect, test } from '@playwright/test';

test.describe('Home Page E2E Tests', () => {
  test('should load home page successfully', async ({ page }) => {
    // Navegar para a página inicial
    await page.goto('/');

    // Verificar se a página carregou
    await expect(page).toHaveTitle(/Gradual Info/);

    // Verificar se o conteúdo principal está presente
    await expect(page.locator('h1')).toContainText('Boilerplate Aqua9');

    // Verificar se as tecnologias estão listadas
    await expect(page.locator('text=React')).toBeVisible();
    await expect(page.locator('text=TypeScript')).toBeVisible();
    await expect(page.locator('text=Next.js')).toBeVisible();
  });

  test('should have proper navigation', async ({ page }) => {
    await page.goto('/');

    // Verificar se a navegação está presente
    await expect(page.locator('nav')).toBeVisible();

    // Verificar se o logo está presente
    await expect(page.locator('nav img[alt="Aqua9 Logo"]')).toBeVisible();
  });

  test('should have dark theme applied', async ({ page }) => {
    await page.goto('/');

    // Verificar se a classe dark está aplicada no documento
    await expect(page.locator('html')).toHaveClass(/dark/);

    // Verificar se o atributo data-theme está definido como dark
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  });
});
