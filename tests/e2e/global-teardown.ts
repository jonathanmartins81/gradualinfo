import { FullConfig } from '@playwright/test';

async function globalTeardown(config: FullConfig) {
  // Cleanup global state
  console.log('🧹 Limpeza global concluída');

  // Aqui você pode adicionar:
  // - Limpeza de dados de teste
  // - Logout de usuários
  // - Limpeza de arquivos temporários
  // - etc.
}

export default globalTeardown;
