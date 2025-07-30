# 📦 PACKAGE.md - Aqua9 Boilerplate v2

Este arquivo documenta todas as dependências do projeto `package.json` com comentários detalhados sobre o propósito e uso de cada biblioteca.

## 🎯 Dependências de Produção

### **Core Framework**

```json
{
  "next": "^15.4.4", // Framework React com App Router e SSR
  "react": "^19.1.0", // Biblioteca JavaScript para interfaces
  "react-dom": "^19.1.0" // Renderização React para web
}
```

### **TypeScript & Tipos**

```json
{
  "typescript": "^5.8.3", // Linguagem tipada para JavaScript
  "@types/node": "^24.1.0", // Tipos para Node.js
  "@types/react": "^19.1.8", // Tipos para React
  "@types/react-dom": "^19.1.6" // Tipos para React DOM
}
```

### **Configuração Next.js**

```json
{
  "eslint-config-next": "^15.4.4" // Configuração ESLint para Next.js
}
```

## 🛠️ Dependências de Desenvolvimento

### **Testing Framework**

```json
{
  "vitest": "^3.2.4", // Framework de testes moderno e rápido
  "@vitejs/plugin-react": "^4.3.4", // Suporte ao React no Vitest
  "jsdom": "^25.0.1", // Simula ambiente DOM para testes
  "@testing-library/react": "^16.3.0", // Utilitários para testar React
  "@testing-library/dom": "^10.1.0", // Utilitários para testes baseados no DOM
  "vite-tsconfig-paths": "^5.2.2", // Suporte a aliases TypeScript no Vitest
  "@testing-library/jest-dom": "^6.6.3", // Matchers customizados para testes
  "@testing-library/user-event": "^14.6.1", // Simulação de eventos do usuário
  "@vitest/coverage-v8": "^3.2.4" // Relatórios de cobertura de código
}
```

### **Code Quality & Linting**

```json
{
  "eslint": "^9.32.0", // Linter para JavaScript/TypeScript
  "@typescript-eslint/eslint-plugin": "^8.38.0", // Plugin ESLint para TypeScript
  "@typescript-eslint/parser": "^8.38.0", // Parser TypeScript para ESLint
  "eslint-config-prettier": "^10.1.8", // Integração ESLint + Prettier
  "eslint-plugin-react": "^7.37.5", // Regras ESLint para React
  "eslint-plugin-storybook": "^0.6.13", // Regras ESLint para Storybook
  "prettier": "^3.6.2" // Formatador de código
}
```

### **Documentation & Storybook**

```json
{
  "storybook": "^8.6.14", // Documentação de componentes
  "@storybook/addon-essentials": "^8.6.14", // Addons essenciais do Storybook
  "@storybook/addon-interactions": "^8.6.14", // Testes de interação
  "@storybook/addon-links": "^8.6.14", // Navegação entre stories
  "@storybook/addon-onboarding": "^8.6.14", // Tutorial interativo
  "@storybook/blocks": "^8.6.14", // Blocos de documentação
  "@storybook/nextjs": "^8.6.14", // Integração Next.js
  "@storybook/react": "^8.6.14", // Renderizador React
  "@storybook/testing-library": "^0.2.0" // Integração Testing Library
}
```

### **Build & Transpilation**

```json
{
  // Vitest usa Vite internamente para transpilação rápida
  // Não são necessárias dependências adicionais de transpilação
}
```

### **Git Hooks & Code Quality Automation**

```json
{
  "husky": "^9.1.7", // Git hooks para automação
  "lefthook": "^1.12.2", // Gerenciador de Git hooks
  "lint-staged": "^16.1.2" // Lint apenas arquivos staged
}
```

### **Code Generation & Templates**

```json
{
  "plop": "^4.0.1" // Gerador de código e templates
}
```

### **Dependency Analysis**

```json
{
  "knip": "^5.62.0" // Análise de dependências não utilizadas
}
```

## 📋 Scripts Disponíveis

### **Desenvolvimento**

```json
{
  "dev": "next dev", // Servidor de desenvolvimento
  "build": "next build", // Build de produção
  "start": "next start" // Servidor de produção
}
```

### **Testes**

```json
{
  "test": "vitest", // Executa todos os testes
  "test:watch": "vitest --watch", // Modo watch para desenvolvimento
  "test:ci": "vitest run --coverage", // Modo CI com cobertura
  "test:coverage": "vitest run --coverage" // Relatório de cobertura
}
```

### **Qualidade de Código**

```json
{
  "lint": "next lint", // Análise estática com ESLint
  "lint:fix": "next lint --fix", // Correção automática de problemas
  "format": "prettier --write .", // Formatação de código
  "format:check": "prettier --check .", // Verificação de formatação
  "type-check": "tsc --noEmit", // Verificação de tipos TypeScript
  "check-deps": "knip", // Análise de dependências
  "quality": "npm run lint && npm run format:check && npm run type-check",
  "quality:full": "npm run quality && npm run check-deps && npm run test:ci"
}
```

### **Documentação**

```json
{
  "storybook": "storybook dev -p 6006", // Servidor Storybook
  "build-storybook": "storybook build" // Build estático do Storybook
}
```

### **Automação**

```json
{
  "prepare": "lefthook install", // Instala Git hooks
  "generate": "npx plop --plopfile generators/plopfile.js" // Geração de código
}
```

## 🔧 Configurações Especiais

### **Vitest Configuration**

```typescript
// vitest.config.ts
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: 'jsdom',
    setupFiles: './.vitest/setup.ts',
    globals: true,
    css: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
    },
  },
});
```

### **Browserslist**

```json
{
  "browserslist": [
    ">0.3%", // Navegadores com mais de 0.3% de uso
    "not dead", // Exclui navegadores descontinuados
    "not op_mini all" // Exclui Opera Mini
  ]
}
```

### **Engines**

```json
{
  "engines": {
    "node": ">=18.0.0", // Versão mínima do Node.js
    "npm": ">=8.0.0" // Versão mínima do npm
  }
}
```

## 📊 Análise de Dependências

### **Dependências Principais**

- **Next.js 15**: Framework React com App Router
- **React 19**: Biblioteca de UI mais recente
- **TypeScript 5.8**: Tipagem estática avançada

### **Ferramentas de Qualidade**

- **ESLint 9**: Linting com configuração estrita
- **Prettier 3.6**: Formatação consistente
- **Vitest 3.2**: Framework de testes moderno e rápido

### **Automação**

- **Husky 9**: Git hooks
- **Lefthook**: Gerenciamento de hooks
- **Lint-staged**: Lint apenas arquivos modificados

### **Documentação**

- **Storybook 8.6**: Documentação de componentes
- **Plop**: Geração de código

## 🚀 Benefícios da Stack

### **Performance**

- Vite para transpilação ultra-rápida
- Next.js com otimizações automáticas
- Vitest com execução paralela nativa

### **Vantagens do Vitest**

- **Velocidade**: Transpilação instantânea com Vite
- **Compatibilidade**: API compatível com Jest
- **React Support**: Suporte nativo ao React via @vitejs/plugin-react
- **TypeScript**: Suporte completo a TypeScript e aliases
- **Coverage**: Relatórios de cobertura integrados
- **Watch Mode**: Modo watch inteligente e rápido
- **Parallel Execution**: Execução paralela nativa
- **ESM Support**: Suporte completo a módulos ES

### **Qualidade**

- TypeScript para tipagem estática
- ESLint com regras estritas
- Prettier para formatação consistente
- Testes automatizados

### **Desenvolvimento**

- Hot reload com Next.js
- Storybook para desenvolvimento de componentes
- Git hooks para automação
- Vitest com watch mode inteligente

### **Manutenibilidade**

- Código tipado com TypeScript
- Padrões consistentes com ESLint/Prettier
- Documentação com Storybook
- Testes rápidos e confiáveis com Vitest

## 📝 Notas de Versão

### **v2.0.0 - Atualizações Principais**

- Removido Tailwind CSS e styled-components
- Atualizado para Next.js 15
- Atualizado para React 19
- Migrado de Jest para Vitest
- Melhorado sistema de SEO dinâmico
- Adicionado comentários detalhados

### **Dependências Removidas**

- `styled-components`: Substituído por estilos inline
- `jest-styled-components`: Não mais necessário
- `tailwindcss`: Removido completamente
- `jest`: Substituído por Vitest
- `jest-environment-jsdom`: Substituído por jsdom
- `@swc/jest`: Substituído por Vite nativo
- `@types/jest`: Não mais necessário (tipos incluídos no Vitest)
- `babel-jest`: Substituído por transpilação Vite nativa

---

**Desenvolvido por**: [Jonathan Simão](https://aqua9.com.br)
**Versão**: 2.0.0
**Última atualização**: 2024-01-01
