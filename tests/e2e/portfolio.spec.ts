import { expect, test } from '@playwright/test';

test.describe('Página de Portfólio', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/portfolio');
  });

  test('deve carregar a página de portfólio corretamente', async ({ page }) => {
    // Verificar título da página
    await expect(page).toHaveTitle(/Portfólio/);

    // Verificar se o título principal está presente
    await expect(page.getByRole('heading', { level: 1 })).toContainText(
      'Portfólio'
    );

    // Verificar se a descrição está presente
    await expect(page.getByText(/projetos desenvolvidos/)).toBeVisible();
  });

  test('deve exibir projetos corretamente', async ({ page }) => {
    // Verificar se os projetos estão sendo exibidos
    const projectCards = page.locator('[data-testid="project-card"]');
    await expect(projectCards).toHaveCount(4); // 4 projetos definidos

    // Verificar se cada projeto tem informações básicas
    for (let i = 0; i < 4; i++) {
      const card = projectCards.nth(i);
      await expect(card.locator('h3')).toBeVisible(); // Título do projeto
      await expect(card.locator('p')).toBeVisible(); // Descrição
      await expect(card.locator('img')).toBeVisible(); // Imagem
    }
  });

  test('deve exibir projeto em destaque', async ({ page }) => {
    // Verificar se há projeto em destaque
    const featuredProject = page.locator('[data-testid="featured-project"]');
    await expect(featuredProject).toBeVisible();

    // Verificar se tem badge de destaque
    await expect(featuredProject.locator('.featured-badge')).toBeVisible();
  });

  test('deve ter filtros funcionais', async ({ page }) => {
    // Verificar se os filtros estão presentes
    const filterButtons = page.locator('[data-testid="filter-button"]');
    await expect(filterButtons).toHaveCount(4); // Todos, Dashboard, Blog, Mobile

    // Testar filtro "Todos"
    await filterButtons.first().click();
    await expect(page.locator('[data-testid="project-card"]')).toHaveCount(4);

    // Testar filtro "Dashboard"
    await filterButtons.nth(1).click();
    const dashboardProjects = page.locator('[data-testid="project-card"]');
    await expect(dashboardProjects).toHaveCount(1);

    // Verificar se o projeto filtrado é realmente do tipo Dashboard
    const projectCategory = dashboardProjects
      .first()
      .locator('[data-testid="project-category"]');
    await expect(projectCategory).toContainText('Dashboard');
  });

  test('deve ter navegação para detalhes do projeto', async ({ page }) => {
    // Clicar no primeiro projeto
    const firstProject = page.locator('[data-testid="project-card"]').first();
    await firstProject.click();

    // Verificar se navegou para a página de detalhes
    await expect(page).toHaveURL(/\/portfolio\/[^\/]+/);

    // Verificar se a página de detalhes carregou
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  });

  test('deve ter links externos funcionais', async ({ page }) => {
    // Verificar se os projetos têm links externos
    const projectCards = page.locator('[data-testid="project-card"]');

    for (let i = 0; i < 4; i++) {
      const card = projectCards.nth(i);
      const externalLink = card.locator('a[href^="http"]');

      if ((await externalLink.count()) > 0) {
        await expect(externalLink).toHaveAttribute('target', '_blank');
        await expect(externalLink).toHaveAttribute(
          'rel',
          'noopener noreferrer'
        );
      }
    }
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

      // Verificar se o grid de projetos se adapta
      const projectCards = page.locator('[data-testid="project-card"]');
      await expect(projectCards).toBeVisible();

      // Verificar se os filtros ainda estão acessíveis
      const filterButtons = page.locator('[data-testid="filter-button"]');
      await expect(filterButtons).toBeVisible();

      await page.waitForTimeout(500);
    }
  });

  test('deve ter acessibilidade adequada', async ({ page }) => {
    // Verificar se há heading principal
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();

    // Verificar se os cards têm roles apropriados
    const projectCards = page.locator('[data-testid="project-card"]');
    await expect(projectCards).toHaveCount(4);

    // Verificar se os filtros são acessíveis por teclado
    const filterButtons = page.locator('[data-testid="filter-button"]');
    for (let i = 0; i < (await filterButtons.count()); i++) {
      await expect(filterButtons.nth(i)).toBeVisible();
      await expect(filterButtons.nth(i)).toHaveAttribute('role', 'button');
    }

    // Verificar se imagens têm alt text
    const images = page.locator('img');
    const count = await images.count();

    for (let i = 0; i < count; i++) {
      const alt = await images.nth(i).getAttribute('alt');
      expect(alt).toBeTruthy();
    }
  });

  test('deve ter performance adequada', async ({ page }) => {
    // Medir tempo de carregamento
    const startTime = Date.now();

    await page.goto('/portfolio', { waitUntil: 'networkidle' });

    const loadTime = Date.now() - startTime;

    // Verificar se carregou em menos de 3 segundos
    expect(loadTime).toBeLessThan(3000);

    // Verificar se as imagens carregaram
    const images = page.locator('img');
    for (let i = 0; i < (await images.count()); i++) {
      await expect(images.nth(i)).toBeVisible();
    }
  });

  test('deve ter metadados SEO corretos', async ({ page }) => {
    // Verificar meta tags específicas do portfólio
    await expect(page.locator('meta[name="description"]')).toHaveAttribute(
      'content',
      /Portfólio/
    );
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
      'content',
      /Portfólio/
    );
    await expect(page.locator('meta[property="og:type"]')).toHaveAttribute(
      'content',
      'website'
    );
  });
});
