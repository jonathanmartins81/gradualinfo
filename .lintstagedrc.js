/**
 * Configuração do Lint Staged
 *
 * Este arquivo define quais comandos executar em arquivos alterados
 * antes de cada commit, garantindo qualidade do código.
 */

module.exports = {
  // Arquivos TypeScript e JavaScript
  '*.{js,jsx,ts,tsx}': [
    // Formatar código com Prettier
    'prettier --write',
    // Lintar e corrigir automaticamente
    'eslint --fix',
    // Executar testes relacionados aos arquivos alterados
    'jest --bail --findRelatedTests --passWithNoTests',
  ],

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
