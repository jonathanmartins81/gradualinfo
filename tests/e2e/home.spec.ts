import { expect, test } from '@playwright/test';

test.describe('Home Page E2E Tests', () => {
  test('should load home page successfully', async ({ page }) => {
    // Navegar para a página inicial
    await page.goto('/');

    // Verificar se a página carregou
    await expect(page).toHaveTitle(/Aqua9 Boilerplate/);

    // Verificar se o conteúdo principal está presente
    await expect(page.locator('h1')).toContainText('Boilerplate Aqua9');

    // Verificar se as tecnologias estão listadas
    await expect(page.locator('text=React')).toBeVisible();
    await expect(page.locator('text=TypeScript')).toBeVisible();
    await expect(page.locator('text=Next.js')).toBeVisible();
  });

  test('should have proper navigation', async ({ page }) => {
    await page.goto('/');

    // Verificar se o theme switcher está presente (navegação de tema)
    await expect(page.locator('[data-testid="theme-switcher"]')).toBeVisible();
  });

  test('should have theme switcher', async ({ page }) => {
    await page.goto('/');

    // Verificar se o theme switcher está presente
    await expect(page.locator('[data-testid="theme-switcher"]')).toBeVisible();
  });
});
