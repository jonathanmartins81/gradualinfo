# 🚀 Aqua9 Boilerplate - Next.js Profissional

<div align="center">

<img src="public/img/logo-gh.svg" alt="Aqua9 Logo" width="300" height="64" />

**Template Next.js moderno otimizado para projetos profissionais pela Aqua9**

[![Build Status](https://github.com/aqua9/boilerplate_aqua9_v2/workflows/ci/badge.svg)](https://github.com/aqua9/boilerplate_aqua9_v2/actions)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org/)

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

| Tecnologia                                    | Versão | Descrição                             |
| --------------------------------------------- | ------ | ------------------------------------- |
| [Next.js](https://nextjs.org/)                | 15.x   | Framework React com App Router e SSR |
| [React](https://reactjs.org/)                 | 19.x   | Biblioteca JavaScript para UIs       |
| [TypeScript](https://www.typescriptlang.org/) | 5.x    | Tipagem estática para JavaScript     |

### **🔧 Desenvolvimento & Qualidade**

| Ferramenta                                           | Propósito                 | Configuração           | Funcionalidades                                                   |
| ---------------------------------------------------- | ------------------------- | ---------------------- | ----------------------------------------------------------------- |
| [ESLint](https://eslint.org/)                        | Linting & análise estática | Configuração estrita   | 🔍 Detecção de erros, 🎯 Melhores práticas, ⚡ Auto-correção      |
| [Prettier](https://prettier.io/)                     | Formatação de código      | Padrões consistentes   | 🎨 Auto-formatação, 📏 Estilo consistente, 🔄 Formatar ao salvar  |
| [EditorConfig](https://editorconfig.org/)            | Configurações do editor   | Workspace padronizado  | ⚙️ Config universal, 📝 Indentação consistente, 🌍 Cross-platform |
| [Lefthook](https://github.com/evilmartians/lefthook) | Git hooks                 | Qualidade automatizada | 🚀 Execução rápida, 🔧 Config flexível, 🎯 Checks pré-commit      |
| [Husky](https://typicode.github.io/husky/)           | Gerenciador de git hooks  | Automação pré-commit   | 🛡️ Gates de qualidade, 🧪 Forçar testes, 📋 Validação de commits |

### **🧪 Testes & Documentação**

| Ferramenta                                               | Tipo            | Descrição                      | Funcionalidades                               |
| -------------------------------------------------------- | --------------- | ------------------------------ | -------------------------------------------- |
| [Vitest](https://vitest.dev/)                            | Testes unitários | Framework de testes rápido e moderno | ⚡ ESM nativo, 🔥 Hot reload, 📊 Cobertura    |
| [React Testing Library](https://testing-library.com/)    | Testes de componentes | Foca no comportamento do usuário | 🎯 Centrado no usuário, 🧪 Acessível, 🔍 Queries |
| [Playwright](https://playwright.dev/)                    | Testes E2E      | Automação cross-browser        | 🌐 Multi-browser, 📱 Mobile, 🎬 Gravação     |
| [@vitejs/plugin-react](https://vitejs.dev/)              | Suporte React   | Testes React confiáveis        | ⚛️ Suporte JSX, 🔧 Fast refresh, 📦 Bundling |
| [Storybook](https://storybook.js.org/)                   | Documentação    | Desenvolvimento isolado de componentes | 📚 Docs interativos, 🎨 Testes visuais       |
| [@vitest/coverage-v8](https://vitest.dev/guide/coverage) | Cobertura       | Relatórios de cobertura de testes | 📊 Relatórios detalhados, 🎯 Thresholds de cobertura |

### **🔍 SEO & Performance**

| Tecnologia                                                                             | Propósito        | Funcionalidades              |
| -------------------------------------------------------------------------------------- | ---------------- | ---------------------------- |
| [Dynamic SEO](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)   | Otimização SEO   | Open Graph, Twitter Cards    |
| [JSON-LD](https://schema.org/)                                                         | Dados Estruturados | Rich snippets, Schema.org    |
| [Sitemap](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap) | Indexação de Busca | Geração automática de sitemap |

### **📊 Analytics & Monitoramento**

| Serviço                                  | Funcionalidade            | Integração |
| ---------------------------------------- | ------------------------- | ---------- |
| [PostHog](https://posthog.com/)          | Analytics & Feature Flags | Automática |
| [Sentry](https://sentry.io/)             | Monitoramento de erros    | Tempo real |
| [Better Stack](https://betterstack.com/) | Logs & Observabilidade    | Centralizada |

### **🔒 Segurança & Qualidade**

| Ferramenta                                             | Proteção           | Benefício               |
| ------------------------------------------------------ | ------------------ | ----------------------- |
| [Husky](https://typicode.github.io/husky/)             | Git hooks          | Automação de qualidade de código |
| [Lefthook](https://github.com/evilmartians/lefthook)   | Gerenciador de git hooks | Workflows automatizados |
| [Knip](https://github.com/webpro/knip)                 | Análise de dependências | Dependências limpas     |

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

#### **🔍 Integration Tests**

- ✅ **Component interaction** - Test component relationships
- ✅ **API integration** - Test data flow and state management
- ✅ **User workflows** - Test complete user journeys
- ✅ **Error handling** - Test error scenarios and edge cases

#### **🎯 End-to-End Tests (Playwright)**

- ✅ **Cross-browser testing** - Chrome, Firefox, Safari, Edge
- ✅ **Mobile testing** - Responsive design validation
- ✅ **Real user scenarios** - Complete user workflows
- ✅ **Visual regression** - Screenshot comparison
- ✅ **Performance testing** - Load time and Core Web Vitals

### **🚀 Testing Benefits**

#### **For Developers**

- ⚡ **Fast feedback** - Immediate test results
- 🔍 **Bug prevention** - Catch issues early
- 🎯 **Confidence** - Safe refactoring and changes
- 📚 **Documentation** - Tests as living documentation

#### **For Users**

- 🛡️ **Reliability** - Stable, bug-free application
- ⚡ **Performance** - Optimized user experience
- 🎯 **Usability** - Tested user workflows
- 📱 **Accessibility** - Inclusive design for all users

#### **For Business**

- 💰 **Cost reduction** - Fewer bugs in production
- 🚀 **Faster delivery** - Confident deployments
- 📈 **Quality metrics** - Measurable quality standards
- 🎯 **User satisfaction** - Reliable user experience

## 🚀 Getting Started

### **Prerequisites**

- Node.js 18+
- npm or yarn
- Git

### **Installation**

1. **Clone the repository:**

```bash
git clone https://github.com/aqua9/boilerplate_aqua9_v2.git
cd boilerplate_aqua9_v2
```

2. **Install dependencies:**

```bash
npm install
# or
yarn install
```

3. **Configure environment variables:**

```bash
cp .env.example .env.local
```

4. **Start the dev server:**

```bash
npm run dev
# or
yarn dev
```

5. **Open [http://localhost:3000](http://localhost:3000)** in your browser to see the result.

The page will reload as you edit files.

## 📋 Available Commands

### **🚀 Development**

| Command                 | Description                             | Usage                |
| ----------------------- | --------------------------------------- | -------------------- |
| `npm run dev`           | Dev server                              | `localhost:3000`     |
| `npm run dev:turbo`     | Dev server with Turbo                   | `localhost:3000`     |
| `npm run build`         | Production build                        | Optimized for deploy |
| `npm run build:analyze` | Production build with analysis          | Bundle analysis      |
| `npm run start`         | Production server                       | Local build testing  |
| `npm run start:prod`    | Production server (NODE_ENV=production) | Production testing   |

### **🔧 Code Quality**

| Command                     | Action            | Result           |
| --------------------------- | ----------------- | ---------------- |
| `npm run lint`              | Static analysis   | Problem report   |
| `npm run lint:fix`          | Auto-fix          | Clean code       |
| `npm run lint:strict`       | Strict analysis   | Zero warnings    |
| `npm run format`            | Formatting        | Consistent code  |
| `npm run format:check`      | Format check      | Validates style  |
| `npm run type-check`        | TypeScript check  | Type validation  |
| `npm run type-check:strict` | Strict TypeScript | Zero type errors |
| `npm run check-deps`        | Dependency check  | Clean deps       |
| `npm run check-deps:fix`    | Auto-fix deps     | Remove unused    |

### **🧪 Tests**

| Command                       | Type | Description                 | Environment |
| ----------------------------- | ---- | --------------------------- | ----------- |
| `npm run test`                | Unit | Full test run               | Development |
| `npm run test:watch`          | Unit | Dev mode (watch)            | Development |
| `npm run test:ui`             | Unit | Vitest UI interface         | Development |
| `npm run test:ci`             | Unit | Sequential testing          | CI/CD       |
| `npm run test:coverage`       | Unit | Detailed coverage report    | CI/CD       |
| `npm run test:coverage:html`  | Unit | HTML coverage report        | Development |
| `npm run test:coverage:badge` | Unit | Coverage badge JSON         | CI/CD       |
| `npm run test:e2e`            | E2E  | Playwright end-to-end tests | Development |
| `npm run test:e2e:ui`         | E2E  | Playwright with UI mode     | Development |
| `npm run test:e2e:ci`         | E2E  | E2E tests for CI/CD         | CI/CD       |

### **📚 Documentation**

| Command                   | Environment | Port             |
| ------------------------- | ----------- | ---------------- |
| `npm run storybook`       | Development | `localhost:6006` |
| `npm run build-storybook` | Production  | Static build     |

### **✅ Validation**

| Command                     | Check             | Benefit              |
| --------------------------- | ----------------- | -------------------- |
| `npm run type-check`        | TypeScript        | Correct types        |
| `npm run type-check:strict` | TypeScript strict | Strict type checking |
| `npm run lint:strict`       | ESLint strict     | Zero warnings        |
| `npm run check-deps`        | Dependencies      | Clean dependencies   |
| `npm run check-deps:fix`    | Dependencies      | Auto-fix unused deps |
| `npm run quality:strict`    | All checks        | Maximum quality      |

## 📚 Project Documentation

### **📖 Documentation Files**

| File                                             | Description              | Purpose                                    |
| ------------------------------------------------ | ------------------------ | ------------------------------------------ |
| [PACKAGE.md](./PACKAGE.md)                       | Dependency documentation | Complete guide to all project dependencies |
| [SEO_DYNAMIC_SYSTEM.md](./SEO_DYNAMIC_SYSTEM.md) | SEO system guide         | Comprehensive SEO implementation guide     |
| [CODE_QUALITY.md](./CODE_QUALITY.md)             | Code quality standards   | Quality guidelines and best practices      |
| [COMMENTS_GUIDE.md](./COMMENTS_GUIDE.md)         | Commenting standards     | Code documentation guidelines              |
| [DYNAMIC_SEO_GUIDE.md](./DYNAMIC_SEO_GUIDE.md)   | SEO implementation       | SEO best practices and examples            |
| [QUALITY_HOOKS.md](./QUALITY_HOOKS.md)           | Git hooks guide          | Automation and quality workflows           |
| [SEO_OPTIMIZATION.md](./SEO_OPTIMIZATION.md)     | SEO optimization         | SEO strategies and techniques              |

### **🔧 Configuration Files**

| File               | Description              | Purpose                             |
| ------------------ | ------------------------ | ----------------------------------- |
| `package.json`     | Project configuration    | Dependencies, scripts, and metadata |
| `tsconfig.json`    | TypeScript configuration | Compiler options and paths          |
| `.eslintrc.json`   | ESLint configuration     | Code linting rules                  |
| `.prettierrc.json` | Prettier configuration   | Code formatting rules               |
| `jest.config.js`   | Jest configuration       | Testing framework setup             |
| `lefthook.yml`     | Git hooks configuration  | Automated workflows                 |

## 📚 Resources & Documentation

### **📖 Official Documentation**

| Resource       | Description                     | Link                                             |
| -------------- | ------------------------------- | ------------------------------------------------ |
| **Next.js**    | React framework with App Router | [Docs](https://nextjs.org/docs)                  |
| **React**      | JavaScript library for UIs      | [Docs](https://react.dev/)                       |
| **TypeScript** | Static typing for JavaScript    | [Handbook](https://www.typescriptlang.org/docs/) |

### **🏢 Aqua9 Resources**

| Resource          | Description              | Link                                                             |
| ----------------- | ------------------------ | ---------------------------------------------------------------- |
| **Official Site** | Visit our site           | [aqua9.com.br](https://aqua9.com.br)                             |
| **GitHub**        | Our open-source projects | [github.com/aqua9](https://github.com/aqua9)                     |
| **Contact**       | Get in touch             | [contato@aqua9.com.br](mailto:contato@aqua9.com.br)              |
| **LinkedIn**      | Follow us                | [linkedin.com/company/aqua9](https://linkedin.com/company/aqua9) |

### **🛠️ Used Tools**

| Tool          | Category                  | Documentation                         |
| ------------- | ------------------------- | ------------------------------------- |
| **Vitest**    | Test framework            | [Docs](https://vitest.dev/guide/)     |
| **Storybook** | Component documentation   | [Docs](https://storybook.js.org/docs) |
| **PostHog**   | Analytics & feature flags | [Docs](https://posthog.com/docs)      |

## 🎯 **Latest Improvements - v2.0.0**

### **📈 Enhanced Test Coverage**

#### **🧪 Comprehensive Testing Suite**

- ✅ **44 Total Tests** - Extensive test coverage across all components
- ✅ **85%+ Coverage** - High test coverage ensuring code quality
- ✅ **Component Tests** - 11 tests for Main component with full prop coverage
- ✅ **Page Tests** - 9 tests covering all application pages
- ✅ **Utility Tests** - 18 tests for SEO utilities and edge cases
- ✅ **Integration Tests** - 10 tests for DynamicSEO component
- ✅ **Structured Data Tests** - 10 tests for JsonLd component

#### **🔧 New Development Scripts**

- ✅ **`npm run test:ui`** - Vitest UI interface for better debugging
- ✅ **`npm run test:coverage:html`** - HTML coverage reports
- ✅ **`npm run test:coverage:badge`** - Coverage badge generation
- ✅ **`npm run lint:strict`** - Zero-warning linting
- ✅ **`npm run type-check:strict`** - Strict TypeScript checking
- ✅ **`npm run quality:strict`** - Maximum quality enforcement
- ✅ **`npm run check-deps:fix`** - Auto-fix unused dependencies

#### **🚀 Performance Optimizations**

- ✅ **Next.js Image Component** - Optimized image loading
- ✅ **Priority Loading** - Critical images load first
- ✅ **Bundle Analysis** - `npm run build:analyze` for optimization
- ✅ **Turbo Mode** - `npm run dev:turbo` for faster development

#### **📊 Quality Enhancements**

- ✅ **Enhanced Pre-commit Hooks** - Comprehensive quality gates
- ✅ **Strict Mode Testing** - Zero-tolerance for quality issues
- ✅ **Automated Dependency Management** - Clean dependency tracking
- ✅ **SEO Validation** - Lighthouse integration for SEO checks
  | **Sentry** | Error monitoring | [Docs](https://docs.sentry.io/) |
  | **Husky** | Git hooks | [Docs](https://typicode.github.io/husky/) |
  | **Lefthook** | Git hooks manager | [Docs](https://github.com/evilmartians/lefthook) |

## 🚀 Deploy & Production

### **☁️ Recommended Platforms**

#### **Vercel (Recommended)**

The easiest, most optimized way to deploy Next.js apps.

```bash
# Deploy with Vercel CLI
npm i -g vercel
vercel

# Or connect your GitHub repository
# https://vercel.com/new
```

**Advantages:**

- ⚡ Auto deploy on every push
- 🔧 Zero configuration
- 📊 Built-in analytics
- 🌍 Global CDN
- 🔒 Automatic SSL

#### **Other Options**

| Platform         | Type      | Features                |
| ---------------- | --------- | ----------------------- |
| **Netlify**      | PaaS      | Native Next.js support  |
| **Railway**      | PaaS      | Simple, fast deploy     |
| **AWS Amplify**  | Cloud     | For enterprise projects |
| **Docker**       | Container | For custom environments |
| **DigitalOcean** | VPS       | Full server control     |

### **🔧 Production Configuration**

#### **Environment Variables**

```bash
# .env.production
NEXT_PUBLIC_APP_URL=https://your-domain.com
NEXT_PUBLIC_POSTHOG_KEY=phc_...
SENTRY_DSN=https://...
```

#### **Recommended Optimizations**

- ✅ **Compression**: Enable Gzip/Brotli
- ✅ **Caching**: Optimized headers
- ✅ **Images**: Automatic optimization
- ✅ **Bundle**: Automatic code splitting

## 🤝 Contributing

Contributions are welcome! This project is maintained by **Aqua9** and we accept community contributions.

### **📋 How to Contribute**

1. **Fork the project**
2. **Create a branch** for your feature (`git checkout -b feature/AmazingFeature`)
3. **Commit your changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

### **📝 Contribution Guidelines**

- ✅ **Clean, well-documented code**
- ✅ **Tests** for new features
- ✅ **TypeScript** for proper typing
- ✅ **Semantic commits** following Conventional Commits
- ✅ **Pull requests** with clear description

### **🐛 Reporting Bugs**

If you encounter a bug, please:

1. Check if it's already reported
2. Use the issue template
3. Include steps to reproduce
4. Add screenshots if relevant

## 📝 Version History

### **v2.0.0 - Major Update**

#### **✨ New Features**

- 🔍 **Dynamic SEO System** - Complete SEO optimization with Open Graph and Twitter Cards
- 📊 **JSON-LD Structured Data** - Rich snippets and Schema.org support
- 🗺️ **Automatic Sitemap** - Dynamic sitemap generation
- 🤖 **Robots.txt** - Configurable robots.txt generation
- 📚 **Enhanced Documentation** - PACKAGE.md and SEO_DYNAMIC_SYSTEM.md

#### **🔄 Major Changes**

- 🎨 **Removed Tailwind CSS** - Replaced with inline styles for better performance
- 🧩 **Removed styled-components** - Simplified styling approach
- ⚡ **Updated to React 19** - Latest React features and performance
- 🧪 **Switched to Vitest** - Fast, modern testing framework with React support
- 📦 **Updated Dependencies** - All packages updated to latest versions

#### **🚀 Performance Improvements**

- ⚡ **Faster Build Times** - Removed CSS-in-JS overhead
- 📈 **Better SEO Scores** - Comprehensive SEO optimization
- 🎯 **Improved Core Web Vitals** - Optimized for performance metrics
- 🔧 **Simplified Architecture** - Cleaner, more maintainable codebase

#### **📚 Documentation**

- 📖 **PACKAGE.md** - Complete dependency documentation
- 🔍 **SEO_DYNAMIC_SYSTEM.md** - Comprehensive SEO guide
- 💬 **Enhanced Comments** - Detailed code documentation
- 🎯 **Usage Examples** - Practical implementation guides

### **v1.0.0 - Initial Release**

- ✅ Next.js 15 with App Router
- ✅ TypeScript 5.x
- ✅ ESLint and Prettier configuration
- ✅ Jest testing setup
- ✅ Storybook documentation
- ✅ Git hooks with Lefthook
- ✅ Quality automation tools

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### **📋 License Terms**

- ✅ **Commercial use** allowed
- ✅ **Modification** allowed
- ✅ **Distribution** allowed
- ✅ **Private use** allowed
- ✅ **No warranty**

---

<div align="center">

**Developed with ❤️ by [Aqua9](https://aqua9.com.br)**

[![Website](https://img.shields.io/badge/Website-aqua9.com.br-blue?style=flat-square)](https://aqua9.com.br)
[![Email](https://img.shields.io/badge/Email-contato@aqua9.com.br-red?style=flat-square)](mailto:contato@aqua9.com.br)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Aqua9-blue?style=flat-square&logo=linkedin)](https://linkedin.com/company/aqua9)

</div>
