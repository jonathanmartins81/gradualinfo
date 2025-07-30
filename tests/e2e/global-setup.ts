import { chromium, FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
  const { baseURL, storageState } = config.projects[0].use;

  // Setup global state (autenticação, cookies, etc.)
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Navegar para a página inicial e verificar se está funcionando
  await page.goto(baseURL!);

  // Aguardar carregamento da página
  await page.waitForLoadState('networkidle');

  // Verificar se a página carregou corretamente
  const title = await page.title();
  console.log(`✅ Página carregada: ${title}`);

  // Salvar estado global se necessário
  if (storageState) {
    await page.context().storageState({ path: storageState as string });
  }

  await browser.close();
}

export default globalSetup;
