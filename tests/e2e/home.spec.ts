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

    // Verificar se o theme switcher está presente (indicador de tema dark)
    await expect(page.locator('[data-testid="theme-switcher"]')).toBeVisible();

    // Verificar se mostra que o tema dark está ativo
    await expect(page.locator('[data-testid="theme-switcher"]')).toContainText(
      'Dark'
    );
  });

  test('should have theme indicator', async ({ page }) => {
    await page.goto('/');

    // Verificar se o theme switcher está presente como indicador
    await expect(page.locator('[data-testid="theme-switcher"]')).toBeVisible();

    // Verificar se tem o ícone de lua (tema dark)
    await expect(
      page.locator('[data-testid="theme-switcher"] svg')
    ).toBeVisible();

    // Verificar se mostra "Dark" como texto
    await expect(page.locator('[data-testid="theme-switcher"]')).toContainText(
      'Dark'
    );
  });

  test('should have dark theme applied', async ({ page }) => {
    await page.goto('/');

    // Verificar se a classe dark está aplicada no documento
    await expect(page.locator('html')).toHaveClass(/dark/);

    // Verificar se o atributo data-theme está definido como dark
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  });
});
