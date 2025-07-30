# 🤝 Guia de Contribuição - Aqua9 Boilerplate v2

Obrigado por considerar contribuir com o **Aqua9 Boilerplate v2**! Este documento fornece diretrizes e informações para contribuições.

## 📋 Índice

- [Como Contribuir](#como-contribuir)
- [Configuração do Ambiente](#configuração-do-ambiente)
- [Padrões de Código](#padrões-de-código)
- [Processo de Pull Request](#processo-de-pull-request)
- [Reportando Bugs](#reportando-bugs)
- [Sugerindo Melhorias](#sugerindo-melhorias)
- [Código de Conduta](#código-de-conduta)

---

## 🚀 Como Contribuir

### Tipos de Contribuição

- 🐛 **Bug Fixes**: Correções de bugs e problemas
- ✨ **Features**: Novas funcionalidades
- 📚 **Documentação**: Melhorias na documentação
- 🎨 **UI/UX**: Melhorias de interface e experiência
- ⚡ **Performance**: Otimizações de performance
- 🔒 **Segurança**: Melhorias de segurança
- 🧪 **Testes**: Adição ou melhoria de testes

### Antes de Começar

1. **Verifique se já existe uma issue** relacionada ao que você quer fazer
2. **Leia a documentação** do projeto
3. **Familiarize-se** com a estrutura do código
4. **Siga os padrões** estabelecidos

---

## ⚙️ Configuração do Ambiente

### Pré-requisitos

- Node.js 18+
- npm 8+ ou yarn
- Git

### Setup Local

```bash
# 1. Clone o repositório
git clone https://github.com/aqua9/boilerplate_aqua9_v2.git
cd boilerplate_aqua9_v2

# 2. Instale as dependências
npm install

# 3. Configure as variáveis de ambiente
cp .env.example .env.local

# 4. Execute os testes
npm run test

# 5. Inicie o servidor de desenvolvimento
npm run dev
```

### Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Servidor de desenvolvimento
npm run build        # Build de produção
npm run start        # Servidor de produção

# Testes
npm run test         # Executa todos os testes
npm run test:watch   # Testes em modo watch
npm run test:coverage # Testes com cobertura

# Qualidade de Código
npm run lint         # ESLint
npm run lint:fix     # ESLint com auto-fix
npm run format       # Prettier
npm run type-check   # Verificação de tipos

# Git Hooks
npm run prepare      # Configura git hooks
```

---

## 📝 Padrões de Código

### Estrutura do Projeto

```
src/
├── app/              # App Router (Next.js 13+)
│   ├── (routes)/     # Rotas organizadas
│   ├── api/          # API Routes
│   └── globals.css   # Estilos globais
├── components/       # Componentes React
│   ├── ui/          # Componentes base
│   └── features/    # Componentes específicos
├── lib/             # Bibliotecas e configurações
├── styles/          # Sistema de design
├── types/           # Definições TypeScript
└── utils/           # Utilitários
```

### Convenções de Nomenclatura

#### Arquivos e Pastas

- **Componentes**: PascalCase (`UserProfile.tsx`)
- **Hooks**: camelCase com prefixo `use` (`useLocalStorage.ts`)
- **Utilitários**: camelCase (`formatDate.ts`)
- **Tipos**: PascalCase (`UserTypes.ts`)
- **Constantes**: UPPER_SNAKE_CASE (`API_ENDPOINTS.ts`)

#### Variáveis e Funções

```typescript
// ✅ Correto
const userName = 'John';
const getUserData = () => {};
const isAuthenticated = true;

// ❌ Incorreto
const user_name = 'John';
const get_user_data = () => {};
const IsAuthenticated = true;
```

### Padrões de Código

#### TypeScript

```typescript
// ✅ Use interfaces para objetos
interface User {
  id: string;
  name: string;
  email: string;
}

// ✅ Use type para unions e primitivos
type Status = 'loading' | 'success' | 'error';
type UserId = string;

// ✅ Use generics quando apropriado
function createApiClient<T>(baseUrl: string): ApiClient<T> {
  // ...
}
```

#### React Components

```typescript
// ✅ Use function components
export default function UserProfile({ user }: UserProfileProps) {
  return <div>{user.name}</div>;
}

// ✅ Use arrow functions para componentes pequenos
const UserAvatar = ({ src, alt }: UserAvatarProps) => (
  <img src={src} alt={alt} className="rounded-full" />
);

// ✅ Use destructuring para props
interface ButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
}
```

#### CSS/Tailwind

```typescript
// ✅ Use classes Tailwind organizadas
const buttonClasses = [
  'px-4',
  'py-2',
  'rounded-lg',
  'font-medium',
  'transition-colors',
  'duration-200',
  variant === 'primary'
    ? 'bg-blue-600 text-white'
    : 'bg-gray-200 text-gray-800',
].join(' ');

// ✅ Use CSS modules para estilos complexos
import styles from './UserProfile.module.css';
```

### Testes

#### Estrutura de Testes

```typescript
// ✅ Organize testes por funcionalidade
describe('UserProfile Component', () => {
  describe('when user is authenticated', () => {
    it('should display user information', () => {
      // ...
    });
  });

  describe('when user is not authenticated', () => {
    it('should show login button', () => {
      // ...
    });
  });
});
```

#### Padrões de Teste

```typescript
// ✅ Use descrições claras
it('should update user name when form is submitted', () => {
  // ...
});

// ✅ Use data-testid para elementos sem texto
<button data-testid="submit-button">Submit</button>

// ✅ Teste comportamentos, não implementação
expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
```

---

## 🔄 Processo de Pull Request

### 1. Preparação

```bash
# 1. Crie uma branch a partir da main
git checkout main
git pull origin main
git checkout -b feature/nova-funcionalidade

# 2. Faça suas alterações
# 3. Execute os testes
npm run test
npm run lint
npm run type-check

# 4. Commit suas alterações
git add .
git commit -m "feat: adiciona nova funcionalidade"
```

### 2. Convenções de Commit

Use o padrão [Conventional Commits](https://www.conventionalcommits.org/):

```bash
# Tipos de commit
feat:     nova funcionalidade
fix:      correção de bug
docs:     documentação
style:    formatação (espaços, ponto e vírgula, etc.)
refactor: refatoração de código
test:     adição ou correção de testes
chore:    tarefas de manutenção

# Exemplos
feat: adiciona sistema de autenticação
fix: corrige erro de validação no formulário
docs: atualiza README com novas instruções
test: adiciona testes para componente UserProfile
```

### 3. Criando o Pull Request

1. **Título**: Descreva brevemente a mudança
2. **Descrição**: Explique o que foi feito e por quê
3. **Issue**: Referencie a issue relacionada (se houver)
4. **Checklist**: Marque os itens completados

#### Template de Pull Request

```markdown
## 📝 Descrição

Breve descrição das mudanças realizadas.

## 🔗 Issue Relacionada

Closes #123

## ✅ Checklist

- [ ] Código segue os padrões do projeto
- [ ] Testes foram adicionados/atualizados
- [ ] Documentação foi atualizada
- [ ] Build passa sem erros
- [ ] Lint passa sem warnings

## 🧪 Como Testar

1. Clone a branch
2. Execute `npm install`
3. Execute `npm run dev`
4. Teste a funcionalidade

## 📸 Screenshots (se aplicável)

Adicione screenshots das mudanças visuais.

## 🔍 Revisão

- [ ] Código foi revisado
- [ ] Testes foram executados
- [ ] Funcionalidade foi testada
```

### 4. Revisão

- **Code Review**: Todas as mudanças são revisadas
- **CI/CD**: Builds e testes devem passar
- **Aprovação**: Pelo menos 1 aprovação é necessária

---

## 🐛 Reportando Bugs

### Antes de Reportar

1. **Verifique se já existe uma issue** similar
2. **Teste em diferentes navegadores** (se aplicável)
3. **Reproduza o bug** consistentemente
4. **Verifique a versão** do projeto

### Template de Bug Report

```markdown
## 🐛 Descrição do Bug

Descrição clara e concisa do bug.

## 🔄 Passos para Reproduzir

1. Vá para '...'
2. Clique em '...'
3. Role até '...'
4. Veja o erro

## ✅ Comportamento Esperado

O que deveria acontecer.

## ❌ Comportamento Atual

O que está acontecendo.

## 📸 Screenshots

Adicione screenshots se aplicável.

## 💻 Ambiente

- OS: [ex: Windows 10, macOS 12]
- Navegador: [ex: Chrome 120, Firefox 119]
- Versão: [ex: 2.0.0]

## 📋 Informações Adicionais

Qualquer informação adicional sobre o problema.
```

---

## 💡 Sugerindo Melhorias

### Template de Feature Request

```markdown
## 💡 Descrição da Melhoria

Descrição clara da funcionalidade desejada.

## 🎯 Problema que Resolve

Explicação do problema que esta melhoria resolveria.

## 💭 Solução Proposta

Descrição da solução proposta.

## 🔄 Alternativas Consideradas

Outras soluções que foram consideradas.

## 📋 Informações Adicionais

Qualquer informação adicional.
```

---

## 📚 Documentação

### Padrões de Documentação

- **README**: Documentação principal do projeto
- **JSDoc**: Documentação de funções e classes
- **Storybook**: Documentação de componentes
- **Guias**: Documentação específica de funcionalidades

### Exemplo de JSDoc

````typescript
/**
 * Calcula a idade baseada na data de nascimento
 *
 * @param birthDate - Data de nascimento
 * @returns Idade em anos
 *
 * @example
 * ```typescript
 * const age = calculateAge(new Date('1990-01-01'));
 * console.log(age); // 34
 * ```
 */
export function calculateAge(birthDate: Date): number {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
}
````

---

## 🤝 Código de Conduta

### Nossos Padrões

- **Respeito**: Trate todos com respeito
- **Inclusão**: Seja inclusivo e acolhedor
- **Colaboração**: Trabalhe em equipe
- **Construtividade**: Seja construtivo nas críticas

### Comportamento Inaceitável

- Linguagem ofensiva ou discriminatória
- Assédio ou bullying
- Spam ou conteúdo irrelevante
- Violação de privacidade

### Como Reportar

Se você testemunhar ou sofrer comportamento inaceitável:

1. **Contate a equipe** via email ou GitHub
2. **Forneça detalhes** específicos do incidente
3. **Mantenha confidencialidade** durante a investigação

---

## 🏆 Reconhecimento

### Contribuidores

- **Contribuidores** são listados no README
- **Mantenedores** são reconhecidos no perfil
- **Agradecimentos** especiais para contribuições significativas

### Badges

- **Contribuidor**: Para contribuições regulares
- **Mantenedor**: Para contribuições significativas
- **Especialista**: Para expertise em áreas específicas

---

## 📞 Suporte

### Canais de Comunicação

- **Issues**: Para bugs e melhorias
- **Discussions**: Para perguntas e discussões
- **Email**: contato@aqua9.com.br

### Recursos Úteis

- [Documentação do Next.js](https://nextjs.org/docs)
- [Guia do TypeScript](https://www.typescriptlang.org/docs)
- [Documentação do Tailwind CSS](https://tailwindcss.com/docs)

---

## 🎉 Obrigado!

Obrigado por contribuir com o **Aqua9 Boilerplate v2**! Suas contribuições ajudam a tornar este projeto melhor para toda a comunidade.

**Desenvolvido com ❤️ pela Aqua9**
