<div align="center">

<img src="public/img/logo-gh.svg" alt="Aqua9 Logo" width="300" height="64" />

# 🚀 Aqua9 Boilerplate - Next.js Profissional

**Template Next.js moderno otimizado para projetos profissionais pela Aqua9**

[![Build Status](https://github.com/aqua9/boilerplate_aqua9_v2/workflows/ci/badge.svg)](https://github.com/aqua9/boilerplate_aqua9_v2/actions)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Test Coverage](https://img.shields.io/badge/coverage-90%25-brightgreen?style=flat-square)](https://github.com/aqua9/boilerplate_aqua9_v2)
[![Code Quality](https://img.shields.io/badge/code%20quality-A%2B-brightgreen?style=flat-square)](https://github.com/aqua9/boilerplate_aqua9_v2)
[![Security](https://img.shields.io/badge/security-A%2B-brightgreen?style=flat-square)](https://github.com/aqua9/boilerplate_aqua9_v2)
[![E2E Tests](https://img.shields.io/badge/E2E%20tests-passing-brightgreen?style=flat-square)](https://github.com/aqua9/boilerplate_aqua9_v2)

**Desenvolvido por**: [Jonathan Simão](https://aqua9.com.br)
**Website**: [aqua9.com.br](https://aqua9.com.br)
**Versão**: 2.0.0

</div>

---

## 📋 Sobre o Projeto

Este é um boilerplate Next.js profissional v2 desenvolvido pela **Aqua9** para acelerar a criação de projetos web modernos. O template inclui as melhores práticas de desenvolvimento, ferramentas de qualidade de código, testes automatizados, otimização de SEO e configurações otimizadas para produção.

### ✨ **Principais Funcionalidades**

- ⚡ **Performance otimizada** com Next.js 15 e App Router
- 🎨 **Sistema de design** usando estilos inline e CSS modules
- 🔍 **Sistema SEO dinâmico** com Open Graph e Twitter Cards
- 📊 **Analytics completo** com PostHog e Sentry
- 🧪 **Testes automatizados** com Jest e React Testing Library
- 📚 **Documentação** via Storybook
- 🚀 **Pronto para deploy** no Vercel e outras plataformas
- 🎯 **Qualidade de código automatizada e padronizada**

## 🛠️ Stack Tecnológica

Este projeto utiliza uma stack moderna e robusta, cuidadosamente selecionada para qualidade, performance e escalabilidade.

### **🎯 Framework Principal**

| Tecnologia                                    | Versão | Descrição                            |
| --------------------------------------------- | ------ | ------------------------------------ |
| [Next.js](https://nextjs.org/)                | 15.x   | Framework React com App Router e SSR |
| [React](https://reactjs.org/)                 | 19.x   | Biblioteca JavaScript para UIs       |
| [TypeScript](https://www.typescriptlang.org/) | 5.x    | Tipagem estática para JavaScript     |

### **🔧 Desenvolvimento & Qualidade**

| Ferramenta                                           | Propósito                  | Configuração           | Funcionalidades                                                   |
| ---------------------------------------------------- | -------------------------- | ---------------------- | ----------------------------------------------------------------- |
| [ESLint](https://eslint.org/)                        | Linting & análise estática | Configuração estrita   | 🔍 Detecção de erros, 🎯 Melhores práticas, ⚡ Auto-correção      |
| [Prettier](https://prettier.io/)                     | Formatação de código       | Padrões consistentes   | 🎨 Auto-formatação, 📏 Estilo consistente, 🔄 Formatar ao salvar  |
| [EditorConfig](https://editorconfig.org/)            | Configurações do editor    | Workspace padronizado  | ⚙️ Config universal, 📝 Indentação consistente, 🌍 Cross-platform |
| [Lefthook](https://github.com/evilmartians/lefthook) | Git hooks                  | Qualidade automatizada | 🚀 Execução rápida, 🔧 Config flexível, 🎯 Checks pré-commit      |
| [Husky](https://typicode.github.io/husky/)           | Gerenciador de git hooks   | Automação pré-commit   | 🛡️ Gates de qualidade, 🧪 Forçar testes, 📋 Validação de commits  |

### **🧪 Testes & Documentação**

| Ferramenta                                               | Tipo                  | Descrição                              | Funcionalidades                                      |
| -------------------------------------------------------- | --------------------- | -------------------------------------- | ---------------------------------------------------- |
| [Vitest](https://vitest.dev/)                            | Testes unitários      | Framework de testes rápido e moderno   | ⚡ ESM nativo, 🔥 Hot reload, 📊 Cobertura           |
| [React Testing Library](https://testing-library.com/)    | Testes de componentes | Foca no comportamento do usuário       | 🎯 Centrado no usuário, 🧪 Acessível, 🔍 Queries     |
| [Playwright](https://playwright.dev/)                    | Testes E2E            | Automação cross-browser                | 🌐 Multi-browser, 📱 Mobile, 🎬 Gravação             |
| [@vitejs/plugin-react](https://vitejs.dev/)              | Suporte React         | Testes React confiáveis                | ⚛️ Suporte JSX, 🔧 Fast refresh, 📦 Bundling         |
| [Storybook](https://storybook.js.org/)                   | Documentação          | Desenvolvimento isolado de componentes | 📚 Docs interativos, 🎨 Testes visuais               |
| [@vitest/coverage-v8](https://vitest.dev/guide/coverage) | Cobertura             | Relatórios de cobertura de testes      | 📊 Relatórios detalhados, 🎯 Thresholds de cobertura |

### **🔍 SEO & Performance**

| Tecnologia                                                                             | Propósito          | Funcionalidades               |
| -------------------------------------------------------------------------------------- | ------------------ | ----------------------------- |
| [Dynamic SEO](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)   | Otimização SEO     | Open Graph, Twitter Cards     |
| [JSON-LD](https://schema.org/)                                                         | Dados Estruturados | Rich snippets, Schema.org     |
| [Sitemap](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap) | Indexação de Busca | Geração automática de sitemap |

### **📊 Analytics & Monitoramento**

| Serviço                                  | Funcionalidade            | Integração   |
| ---------------------------------------- | ------------------------- | ------------ |
| [PostHog](https://posthog.com/)          | Analytics & Feature Flags | Automática   |
| [Sentry](https://sentry.io/)             | Monitoramento de erros    | Tempo real   |
| [Better Stack](https://betterstack.com/) | Logs & Observabilidade    | Centralizada |

### **🔒 Segurança & Qualidade**

| Ferramenta                                           | Proteção                 | Benefício                        |
| ---------------------------------------------------- | ------------------------ | -------------------------------- |
| [Husky](https://typicode.github.io/husky/)           | Git hooks                | Automação de qualidade de código |
| [Lefthook](https://github.com/evilmartians/lefthook) | Gerenciador de git hooks | Workflows automatizados          |
| [Knip](https://github.com/webpro/knip)               | Análise de dependências  | Dependências limpas              |

## 🔍 Sistema SEO Dinâmico

O Boilerplate Aqua9 v2 inclui um sistema SEO dinâmico abrangente que otimiza automaticamente suas páginas para mecanismos de busca e compartilhamento em redes sociais.

### **✨ Funcionalidades SEO**

- 🔍 **Metadados dinâmicos** gerados baseados nas rotas
- 📱 **Open Graph** otimizado para redes sociais
- 🐦 **Twitter Cards** com configurações personalizadas
- 📊 **Dados estruturados JSON-LD** para rich snippets
- 🗺️ **Geração automática de sitemap**
- 🤖 **Configuração robots.txt**
- 🎯 **URLs canônicas** e meta tags
- 📈 **Otimização de performance** para Core Web Vitals

### **🛠️ Como Funciona**

O sistema SEO aplica automaticamente metadados otimizados a cada página baseado na configuração da rota:

```typescript
// SEO automático para cada rota
export const metadata: Metadata = generateDynamicSEO('/');

// SEO dinâmico para páginas dinâmicas
export async function generateMetadata({ params }) {
  return generateDynamicSEO(`/portfolio/${slug}`, {
    slug: project.title,
  });
}
```

### **📄 Configuração SEO**

Cada rota tem sua própria configuração SEO com:

- Títulos e descrições únicos
- Palavras-chave otimizadas
- Imagens para redes sociais
- Dados estruturados
- Prioridade e frequência de atualização

Para documentação detalhada, veja [SEO_DYNAMIC_SYSTEM.md](./SEO_DYNAMIC_SYSTEM.md).

## 🛡️ Gates de Qualidade & Forçar Testes

O Boilerplate Aqua9 v2 implementa **gates de qualidade obrigatórios** que **impedem commits** se qualquer teste falhar ou os padrões de qualidade não forem atendidos.

### **🚫 Sistema de Bloqueio de Commits**

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Tentativa de  │───▶│  Hook Pré-      │───▶│   Gates de      │
│   Git Commit    │    │   commit        │    │   Qualidade     │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                                │                       │
                                ▼                       ▼
                       ┌─────────────────┐    ┌─────────────────┐
                       │   Lint-staged   │    │   Suite de      │
                       │   (Formatação)  │    │   Testes        │
                       └─────────────────┘    └─────────────────┘
                                │                       │
                                ▼                       ▼
                       ┌─────────────────┐    ┌─────────────────┐
                       │   TypeScript    │    │   ESLint +      │
                       │   Type-check    │    │   Prettier      │
                       └─────────────────┘    └─────────────────┘
```

### **🔒 Verificações Obrigatórias**

#### **1. Lint-staged (Formatação)**

- ✅ **Auto-formatação** de arquivos antes do commit
- ✅ **Estilo de código consistente** em todo o projeto
- ✅ **Integração Prettier** para formatação
- ❌ **Bloqueia commit** se a formatação falhar

#### **2. TypeScript Type-check**

- ✅ **Verificação de tipos estáticos**
- ✅ **Detecção de erros em tempo de compilação**
- ✅ **Forçar segurança de tipos**
- ❌ **Bloqueia commit** se erros de tipo forem encontrados

#### **3. Suite de Testes (Vitest)**

- ✅ **Todos os testes devem passar**
- ✅ **Execução de testes unitários**
- ✅ **Validação de testes de componentes**
- ❌ **Bloqueia commit** se qualquer teste falhar

#### **4. Qualidade de Código (ESLint + Prettier)**

- ✅ **Conformidade com regras de linting**
- ✅ **Validação de estilo de código**
- ✅ **Forçar melhores práticas**
- ❌ **Bloqueia commit** se problemas de qualidade forem encontrados

### **🎯 Benefícios dos Gates de Qualidade**

#### **Para Desenvolvedores**

- 🛡️ **Impede código quebrado** de chegar ao repositório
- ⚡ **Feedback imediato** sobre problemas de qualidade
- 🎯 **Força padrões** automaticamente
- 📈 **Melhora a qualidade do código** ao longo do tempo

#### **Para Equipes**

- 🔒 **Qualidade consistente** em todas as contribuições
- 🚫 **Sem builds quebrados** no CI/CD
- 📊 **Padrões mensuráveis** forçados
- 🎯 **Reduz overhead** de code review

#### **Para o Projeto**

- 🛡️ **Codebase estável** com menos bugs
- 📈 **Estrutura de código** mantível
- 🚀 **Deployments confiáveis** sem problemas
- 💰 **Custos de manutenção** reduzidos

## 🎯 Qualidade de Código Automatizada

Este boilerplate implementa um sistema completo de qualidade de código garantindo **padronização automática** e **correção contínua** de todo o código no projeto, incluindo arquivos de teste.

### **🛠️ Ferramentas de Qualidade**

#### **Prettier**

- ✅ **Formatação automática de código**
- ✅ **Padrões consistentes** via `.prettierrc`
- ✅ **Configuração global** para espaçamento, aspas, ponto e vírgula
- ✅ **Integração com editor** para formatar ao salvar
- ✅ **Comando manual**: `npm run format`

#### **ESLint**

- ✅ **Análise estática de código** para JS/TS
- ✅ **Detecção de erros** e melhores práticas
- ✅ **Plugins especializados** para React, TypeScript
- ✅ **Configuração estrita** para máxima qualidade
- ✅ **Auto-correção:** `npm run lint:fix`

#### **EditorConfig**

- ✅ **Padronização de editores** em todos os sistemas
- ✅ **Configuração consistente** para indentação e EOLs
- ✅ **Suporte universal** para vários IDEs
- ✅ **Configuração automática** via `.editorconfig`

#### **Lefthook (Git Hooks)**

- ✅ **Qualidade automatizada** antes de cada commit
- ✅ **Execução automática** de lint/formatação
- ✅ **Verificações de tipo TypeScript**
- ✅ **Impede commits** de código não padronizado

### **🚀 Benefícios da Automação**

#### **Para Desenvolvedores**

- ⚡ **Zero configuração manual** necessária para formatação
- 🔄 **Correção automática** ao salvar mudanças
- 🚫 **Impossível** commitar código não padronizado
- 📈 **Produtividade aumentada** com menos overhead

#### **Para Equipes**

- 🎯 **Padrões consistentes** em todo o codebase
- 🔍 **Detecção precoce** de problemas de qualidade
- 🚀 **Onboarding simplificado** para novos devs
- 📊 **Métricas de qualidade** automatizadas

#### **Para o Projeto**

- 🛡️ **Prevenção de bugs** via análise estática
- 📝 **Código legível e bem estruturado**
- 🔧 **Mantibilidade aumentada**
- 🚀 **Performance otimizada** via melhores práticas

### **📋 Como Funciona na Prática**

1. **Durante o desenvolvimento:**
   - Editor auto-formata ao salvar
   - ESLint mostra erros em tempo real
   - TypeScript verifica tipos continuamente

2. **Antes do commit:**
   - Lefthook executa automaticamente tarefas de lint e formatação
   - Verificação de tipos TypeScript
   - Bloqueia commits com erros

3. **No CI/CD:**
   - Verificação de qualidade em pull requests
   - Relatórios de cobertura de testes
   - Análise de segurança automatizada

### **🔧 Configuração Personalizada**

Todas as ferramentas podem ser configuradas através destes arquivos:

- `.prettierrc` - Configurações do Prettier
- `.eslintrc.js` - Regras do ESLint
- `.editorconfig` - Configurações do editor
- `lefthook.yml` - Git hooks

## 🧪 Estratégia de Testes

O Boilerplate Aqua9 v2 implementa uma **pirâmide de testes** abrangente garantindo qualidade e confiabilidade do código em todos os níveis.

### **📊 Pirâmide de Testes**

```
    🎯 Testes E2E (Playwright)
         /     \
        /       \
   🔍 Testes de Integração
      /           \
     /             \
🧪 Testes Unitários (Vitest + RTL)
```

### **🎯 Tipos de Testes**

#### **🧪 Testes Unitários (Vitest + React Testing Library)**

- ✅ **Execução rápida** - Executa em milissegundos
- ✅ **Testes isolados** - Testa componentes individuais
- ✅ **Foco no comportamento do usuário** - Testa o que os usuários veem e fazem
- ✅ **Testes de acessibilidade** - Garante design inclusivo
- ✅ **Relatórios de cobertura** - Acompanha métricas de cobertura de testes

#### **🔍 Testes de Integração**

- ✅ **Interação entre componentes** - Testa relacionamentos de componentes
- ✅ **Integração com API** - Testa fluxo de dados e gerenciamento de estado
- ✅ **Fluxos de usuário** - Testa jornadas completas do usuário
- ✅ **Tratamento de erros** - Testa cenários de erro e casos extremos

#### **🎯 Testes End-to-End (Playwright)**

- ✅ **Testes cross-browser** - Chrome, Firefox, Safari, Edge
- ✅ **Testes mobile** - Validação de design responsivo
- ✅ **Cenários reais de usuário** - Fluxos completos de usuário
- ✅ **Regressão visual** - Comparação de screenshots
- ✅ **Testes de performance** - Tempo de carregamento e Core Web Vitals

### **🚀 Benefícios dos Testes**

#### **Para Desenvolvedores**

- ⚡ **Feedback rápido** - Resultados de teste imediatos
- 🔍 **Prevenção de bugs** - Detecta problemas cedo
- 🎯 **Confiança** - Refatoração e mudanças seguras
- 📚 **Documentação** - Testes como documentação viva

#### **Para Usuários**

- 🛡️ **Confiabilidade** - Aplicação estável e sem bugs
- ⚡ **Performance** - Experiência do usuário otimizada
- 🎯 **Usabilidade** - Fluxos de usuário testados
- 📱 **Acessibilidade** - Design inclusivo para todos os usuários

#### **Para o Negócio**

- 💰 **Redução de custos** - Menos bugs em produção
- 🚀 **Entrega mais rápida** - Deployments confiantes
- 📈 **Métricas de qualidade** - Padrões de qualidade mensuráveis
- 🎯 **Satisfação do usuário** - Experiência do usuário confiável

## 🚀 Começando

### **Pré-requisitos**

- Node.js 18+
- npm ou yarn
- Git

### **Instalação**

1. **Clone o repositório:**

```bash
git clone https://github.com/aqua9/boilerplate_aqua9_v2.git
cd boilerplate_aqua9_v2
```

2. **Instale as dependências:**

```bash
npm install
# ou
yarn install
```

3. **Configure as variáveis de ambiente:**

```bash
cp .env.example .env.local
```

4. **Inicie o servidor de desenvolvimento:**

```bash
npm run dev
# ou
yarn dev
```

5. **Abra [http://localhost:3000](http://localhost:3000)** no seu navegador para ver o resultado.

A página será recarregada conforme você edita os arquivos.

## 📋 Comandos Disponíveis

### **🚀 Desenvolvimento**

| Comando                 | Descrição                                  | Uso                   |
| ----------------------- | ------------------------------------------ | --------------------- |
| `npm run dev`           | Servidor de desenvolvimento                | `localhost:3000`      |
| `npm run dev:turbo`     | Servidor de desenvolvimento com Turbo      | `localhost:3000`      |
| `npm run build`         | Build de produção                          | Otimizado para deploy |
| `npm run build:analyze` | Build de produção com análise              | Análise de bundle     |
| `npm run start`         | Servidor de produção                       | Teste de build local  |
| `npm run start:prod`    | Servidor de produção (NODE_ENV=production) | Teste de produção     |

### **🔧 Qualidade de Código**

| Comando                     | Ação                          | Resultado              |
| --------------------------- | ----------------------------- | ---------------------- |
| `npm run lint`              | Análise estática              | Relatório de problemas |
| `npm run lint:fix`          | Auto-correção                 | Código limpo           |
| `npm run lint:strict`       | Análise estrita               | Zero avisos            |
| `npm run format`            | Formatação                    | Código consistente     |
| `npm run format:check`      | Verificação de formato        | Valida estilo          |
| `npm run type-check`        | Verificação TypeScript        | Validação de tipos     |
| `npm run type-check:strict` | TypeScript estrito            | Zero erros de tipo     |
| `npm run check-deps`        | Verificação de dependências   | Dependências limpas    |
| `npm run check-deps:fix`    | Auto-correção de dependências | Remove não utilizadas  |

### **🧪 Testes**

| Comando                       | Tipo     | Descrição                        | Ambiente        |
| ----------------------------- | -------- | -------------------------------- | --------------- |
| `npm run test`                | Unitário | Execução completa de testes      | Desenvolvimento |
| `npm run test:watch`          | Unitário | Modo desenvolvimento (watch)     | Desenvolvimento |
| `npm run test:ui`             | Unitário | Interface UI do Vitest           | Desenvolvimento |
| `npm run test:ci`             | Unitário | Testes sequenciais               | CI/CD           |
| `npm run test:coverage`       | Unitário | Relatório detalhado de cobertura | CI/CD           |
| `npm run test:coverage:html`  | Unitário | Relatório HTML de cobertura      | Desenvolvimento |
| `npm run test:coverage:badge` | Unitário | Badge JSON de cobertura          | CI/CD           |
| `npm run test:e2e`            | E2E      | Testes end-to-end do Playwright  | Desenvolvimento |
| `npm run test:e2e:ui`         | E2E      | Playwright com modo UI           | Desenvolvimento |
| `npm run test:e2e:ci`         | E2E      | Testes E2E para CI/CD            | CI/CD           |

### **📚 Documentação**

| Comando                   | Ambiente        | Porta            |
| ------------------------- | --------------- | ---------------- |
| `npm run storybook`       | Desenvolvimento | `localhost:6006` |
| `npm run build-storybook` | Produção        | Build estático   |

### **✅ Validação**

| Comando                     | Verificação           | Benefício                                    |
| --------------------------- | --------------------- | -------------------------------------------- |
| `npm run type-check`        | TypeScript            | Tipos corretos                               |
| `npm run type-check:strict` | TypeScript estrito    | Verificação estrita de tipos                 |
| `npm run lint:strict`       | ESLint estrito        | Zero avisos                                  |
| `npm run check-deps`        | Dependências          | Dependências limpas                          |
| `npm run check-deps:fix`    | Dependências          | Auto-correção de dependências não utilizadas |
| `npm run quality:strict`    | Todas as verificações | Qualidade máxima                             |

## 📚 Documentação do Projeto

### **📖 Arquivos de Documentação**

| Arquivo                                          | Descrição                      | Propósito                                           |
| ------------------------------------------------ | ------------------------------ | --------------------------------------------------- |
| [PACKAGE.md](./PACKAGE.md)                       | Documentação de dependências   | Guia completo para todas as dependências do projeto |
| [SEO_DYNAMIC_SYSTEM.md](./SEO_DYNAMIC_SYSTEM.md) | Guia do sistema SEO            | Guia abrangente de implementação SEO                |
| [CODE_QUALITY.md](./CODE_QUALITY.md)             | Padrões de qualidade de código | Diretrizes de qualidade e melhores práticas         |
| [COMMENTS_GUIDE.md](./COMMENTS_GUIDE.md)         | Padrões de comentários         | Diretrizes de documentação de código                |
| [DYNAMIC_SEO_GUIDE.md](./DYNAMIC_SEO_GUIDE.md)   | Implementação SEO              | Melhores práticas SEO e exemplos                    |
| [QUALITY_HOOKS.md](./QUALITY_HOOKS.md)           | Guia de git hooks              | Automação e workflows de qualidade                  |
| [SEO_OPTIMIZATION.md](./SEO_OPTIMIZATION.md)     | Otimização SEO                 | Estratégias e técnicas SEO                          |

### **🔧 Arquivos de Configuração**

| Arquivo            | Descrição                 | Propósito                           |
| ------------------ | ------------------------- | ----------------------------------- |
| `package.json`     | Configuração do projeto   | Dependências, scripts e metadados   |
| `tsconfig.json`    | Configuração TypeScript   | Opções do compilador e paths        |
| `.eslintrc.json`   | Configuração ESLint       | Regras de linting de código         |
| `.prettierrc.json` | Configuração Prettier     | Regras de formatação de código      |
| `jest.config.js`   | Configuração Jest         | Configuração do framework de testes |
| `lefthook.yml`     | Configuração de git hooks | Workflows automatizados             |

## 📚 Recursos & Documentação

### **📖 Documentação Oficial**

| Recurso        | Descrição                        | Link                                             |
| -------------- | -------------------------------- | ------------------------------------------------ |
| **Next.js**    | Framework React com App Router   | [Docs](https://nextjs.org/docs)                  |
| **React**      | Biblioteca JavaScript para UIs   | [Docs](https://react.dev/)                       |
| **TypeScript** | Tipagem estática para JavaScript | [Handbook](https://www.typescriptlang.org/docs/) |

### **🏢 Recursos da Aqua9**

| Recurso          | Descrição                   | Link                                                             |
| ---------------- | --------------------------- | ---------------------------------------------------------------- |
| **Site Oficial** | Visite nosso site           | [aqua9.com.br](https://aqua9.com.br)                             |
| **GitHub**       | Nossos projetos open-source | [github.com/aqua9](https://github.com/aqua9)                     |
| **Contato**      | Entre em contato            | [contato@aqua9.com.br](mailto:contato@aqua9.com.br)              |
| **LinkedIn**     | Siga-nos                    | [linkedin.com/company/aqua9](https://linkedin.com/company/aqua9) |

### **🛠️ Ferramentas Utilizadas**

| Ferramenta    | Categoria                   | Documentação                                     |
| ------------- | --------------------------- | ------------------------------------------------ |
| **Vitest**    | Framework de testes         | [Docs](https://vitest.dev/guide/)                |
| **Storybook** | Documentação de componentes | [Docs](https://storybook.js.org/docs)            |
| **PostHog**   | Analytics & feature flags   | [Docs](https://posthog.com/docs)                 |
| **Sentry**    | Monitoramento de erros      | [Docs](https://docs.sentry.io/)                  |
| **Husky**     | Git hooks                   | [Docs](https://typicode.github.io/husky/)        |
| **Lefthook**  | Gerenciador de git hooks    | [Docs](https://github.com/evilmartians/lefthook) |

## 🎯 **Melhorias Mais Recentes - v2.0.0**

### **📈 Cobertura de Testes Aprimorada**

#### **🧪 Suite de Testes Abrangente**

- ✅ **44 Testes Totais** - Cobertura extensa de testes em todos os componentes
- ✅ **85%+ de Cobertura** - Alta cobertura de testes garantindo qualidade de código
- ✅ **Testes de Componentes** - 11 testes para componente Main com cobertura completa de props
- ✅ **Testes de Páginas** - 9 testes cobrindo todas as páginas da aplicação
- ✅ **Testes de Utilitários** - 18 testes para utilitários SEO e casos extremos
- ✅ **Testes de Integração** - 10 testes para componente DynamicSEO
- ✅ **Testes de Dados Estruturados** - 10 testes para componente JsonLd

#### **🔧 Novos Scripts de Desenvolvimento**

- ✅ **`npm run test:ui`** - Interface UI do Vitest para melhor debugging
- ✅ **`npm run test:coverage:html`** - Relatórios HTML de cobertura
- ✅ **`npm run test:coverage:badge`** - Geração de badge de cobertura
- ✅ **`npm run lint:strict`** - Linting com zero avisos
- ✅ **`npm run type-check:strict`** - Verificação estrita de TypeScript
- ✅ **`npm run quality:strict`** - Aplicação máxima de qualidade
- ✅ **`npm run check-deps:fix`** - Auto-correção de dependências não utilizadas

#### **🚀 Otimizações de Performance**

- ✅ **Componente Next.js Image** - Carregamento otimizado de imagens
- ✅ **Carregamento Prioritário** - Imagens críticas carregam primeiro
- ✅ **Análise de Bundle** - `npm run build:analyze` para otimização
- ✅ **Modo Turbo** - `npm run dev:turbo` para desenvolvimento mais rápido

#### **📊 Aprimoramentos de Qualidade**

- ✅ **Hooks Pré-commit Aprimorados** - Gates de qualidade abrangentes
- ✅ **Testes em Modo Estrito** - Tolerância zero para problemas de qualidade
- ✅ **Gerenciamento Automatizado de Dependências** - Rastreamento limpo de dependências
- ✅ **Validação SEO** - Integração Lighthouse para verificações SEO

## 🚀 Deploy & Produção

### **☁️ Plataformas Recomendadas**

#### **Vercel (Recomendado)**

A forma mais fácil e otimizada de fazer deploy de apps Next.js.

```bash
# Deploy com Vercel CLI
npm i -g vercel
vercel

# Ou conecte seu repositório GitHub
# https://vercel.com/new
```

**Vantagens:**

- ⚡ Deploy automático a cada push
- 🔧 Zero configuração
- 📊 Analytics integrado
- 🌍 CDN global
- 🔒 SSL automático

#### **Outras Opções**

| Plataforma       | Tipo      | Recursos                    |
| ---------------- | --------- | --------------------------- |
| **Netlify**      | PaaS      | Suporte nativo Next.js      |
| **Railway**      | PaaS      | Deploy simples e rápido     |
| **AWS Amplify**  | Cloud     | Para projetos enterprise    |
| **Docker**       | Container | Para ambientes customizados |
| **DigitalOcean** | VPS       | Controle total do servidor  |

### **🔧 Configuração de Produção**

#### **Variáveis de Ambiente**

```bash
# .env.production
NEXT_PUBLIC_APP_URL=https://seu-dominio.com
NEXT_PUBLIC_POSTHOG_KEY=phc_...
SENTRY_DSN=https://...
```

#### **Otimizações Recomendadas**

- ✅ **Compressão**: Ativar Gzip/Brotli
- ✅ **Cache**: Headers otimizados
- ✅ **Imagens**: Otimização automática
- ✅ **Bundle**: Code splitting automático

## 🤝 Contribuindo

Contribuições são bem-vindas! Este projeto é mantido pela **Aqua9** e aceitamos contribuições da comunidade.

### **📋 Como Contribuir**

1. **Faça um fork do projeto**
2. **Crie uma branch** para sua feature (`git checkout -b feature/AmazingFeature`)
3. **Commit suas mudanças** (`git commit -m 'Add some AmazingFeature'`)
4. **Push para a branch** (`git push origin feature/AmazingFeature`)
5. **Abra um Pull Request**

### **📝 Diretrizes de Contribuição**

- ✅ **Código limpo e bem documentado**
- ✅ **Testes** para novas features
- ✅ **TypeScript** para tipagem adequada
- ✅ **Commits semânticos** seguindo Conventional Commits
- ✅ **Pull requests** com descrição clara

### **🐛 Reportando Bugs**

Se você encontrar um bug, por favor:

1. Verifique se já foi reportado
2. Use o template de issue
3. Inclua passos para reproduzir
4. Adicione screenshots se relevante

## 📝 Histórico de Versões

### **v2.0.0 - Atualização Principal**

#### **✨ Novas Funcionalidades**

- 🔍 **Sistema SEO Dinâmico** - Otimização SEO completa com Open Graph e Twitter Cards
- 📊 **Dados Estruturados JSON-LD** - Rich snippets e suporte Schema.org
- 🗺️ **Sitemap Automático** - Geração dinâmica de sitemap
- 🤖 **Robots.txt** - Geração configurável de robots.txt
- 📚 **Documentação Aprimorada** - PACKAGE.md e SEO_DYNAMIC_SYSTEM.md

#### **🔄 Mudanças Principais**

- 🎨 **Removido Tailwind CSS** - Substituído por estilos inline para melhor performance
- 🧩 **Removido styled-components** - Abordagem de styling simplificada
- ⚡ **Atualizado para React 19** - Últimas features e performance do React
- 🧪 **Mudança para Vitest** - Framework de testes rápido e moderno com suporte React
- 📦 **Dependências Atualizadas** - Todos os pacotes atualizados para versões mais recentes

#### **🚀 Melhorias de Performance**

- ⚡ **Tempos de Build Mais Rápidos** - Removido overhead de CSS-in-JS
- 📈 **Melhores Pontuações SEO** - Otimização SEO abrangente
- 🎯 **Core Web Vitals Melhorados** - Otimizado para métricas de performance
- 🔧 **Arquitetura Simplificada** - Codebase mais limpo e mantível

#### **📚 Documentação**

- 📖 **PACKAGE.md** - Documentação completa de dependências
- 🔍 **SEO_DYNAMIC_SYSTEM.md** - Guia abrangente de SEO
- 💬 **Comentários Aprimorados** - Documentação detalhada de código
- 🎯 **Exemplos de Uso** - Guias de implementação práticos

### **v1.0.0 - Lançamento Inicial**

- ✅ Next.js 15 com App Router
- ✅ TypeScript 5.x
- ✅ Configuração ESLint e Prettier
- ✅ Setup de testes Jest
- ✅ Documentação Storybook
- ✅ Git hooks com Lefthook
- ✅ Ferramentas de automação de qualidade

## 📄 Licença

Este projeto está licenciado sob a **Licença MIT** - veja o arquivo [LICENSE](LICENSE) para detalhes.

### **📋 Termos da Licença**

- ✅ **Uso comercial** permitido
- ✅ **Modificação** permitida
- ✅ **Distribuição** permitida
- ✅ **Uso privado** permitido
- ✅ **Sem garantia**

---

<div align="center">

**Desenvolvido com ❤️ pela [Aqua9](https://aqua9.com.br)**

[![Website](https://img.shields.io/badge/Website-aqua9.com.br-blue?style=flat-square)](https://aqua9.com.br)
[![Email](https://img.shields.io/badge/Email-contato@aqua9.com.br-red?style=flat-square)](mailto:contato@aqua9.com.br)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Aqua9-blue?style=flat-square&logo=linkedin)](https://linkedin.com/company/aqua9)

</div>
