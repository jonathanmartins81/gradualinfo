/**
 * Configuração do Lint Staged
 *
 * Este arquivo define quais comandos executar em arquivos alterados
 * antes de cada commit, garantindo qualidade do código.
 */

export default {
  // Arquivos TypeScript e JavaScript (excluindo testes E2E)
  '*.{js,jsx,ts,tsx}': files => {
    const e2eFiles = files.filter(file => !file.includes('tests/e2e'));
    if (e2eFiles.length === 0) return [];

    return [
      // Formatar código com Prettier
      'prettier --write',
      // Lintar e corrigir automaticamente
      'eslint --fix',
      // Executar testes relacionados aos arquivos alterados (apenas unitários, excluindo e2e)
      'vitest run --bail --findRelatedTests --passWithNoTests --exclude="tests/e2e/**"',
    ];
  },

  // Arquivos de configuração e outros
  '*.{json,md,yml,yaml}': [
    // Formatar arquivos de configuração
    'prettier --write',
  ],

  // Arquivos CSS e SCSS
  '*.{css,scss}': [
    // Formatar estilos
    'prettier --write',
  ],

  // Todos os arquivos (verificação final)
  '*': [
    // Verificar se não há erros de TypeScript
    () => 'npm run type-check',
    // Verificar dependências não utilizadas
    () => 'npm run check-deps',
  ],
};
