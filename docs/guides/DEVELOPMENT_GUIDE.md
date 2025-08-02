# 🛠️ Guia de Desenvolvimento - Gradual Info

Este guia consolidado reúne as melhores práticas de desenvolvimento, qualidade de código e padrões para o projeto **Gradual Info**.

## 📋 Índice

- [Padrões de Código](#padrões-de-código)
- [Git Hooks e Qualidade](#git-hooks-e-qualidade)
- [Comentários e Documentação](#comentários-e-documentação)
- [Estrutura de Pacotes](#estrutura-de-pacotes)
- [Scripts de Desenvolvimento](#scripts-de-desenvolvimento)
- [Boas Práticas](#boas-práticas)

---

## 🎯 Padrões de Código

### **TypeScript**

```typescript
// ✅ Bom - Tipagem explícita
interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

const getUser = async (id: string): Promise<User | null> => {
  // implementação
};

// ❌ Ruim - Tipagem implícita
const getUser = async id => {
  // implementação
};
```

### **React Components**

```typescript
// ✅ Bom - Componente funcional com TypeScript
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  disabled = false,
  ...props
}) => {
  return (
    <button
      className={`btn btn-${variant} btn-${size}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
```

### **Naming Conventions**

```typescript
// ✅ Bom - Nomes descritivos
const getUserById = async (userId: string) => {};
const isUserAuthenticated = (user: User) => {};
const handleFormSubmit = (event: FormEvent) => {};

// ❌ Ruim - Nomes genéricos
const get = async (id: string) => {};
const check = (user: User) => {};
const submit = (event: FormEvent) => {};
```

---

## 🔧 Git Hooks e Qualidade

### **Lefthook Configuration**

```yaml
# lefthook.yml
pre-commit:
  parallel: true
  commands:
    lint:
      glob: '*.{js,jsx,ts,tsx}'
      run: npm run lint
    type-check:
      glob: '*.{ts,tsx}'
      run: npm run type-check
    test:
      glob: '*.{test,spec}.{js,jsx,ts,tsx}'
      run: npm run test:staged

pre-push:
  commands:
    test:all:
      run: npm run test
    build:
      run: npm run build
```

### **ESLint Configuration**

```javascript
// eslint.config.js
module.exports = {
  extends: [
    'next/core-web-vitals',
    '@typescript-eslint/recommended',
    'prettier',
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/explicit-function-return-type': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
```

### **Prettier Configuration**

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false
}
```

---

## 📝 Comentários e Documentação

### **JSDoc para Funções**

````typescript
/**
 * Autentica um usuário com email e senha
 * @param email - Email do usuário
 * @param password - Senha do usuário
 * @returns Promise com dados do usuário autenticado
 * @throws {AuthError} Se as credenciais forem inválidas
 * @example
 * ```typescript
 * const user = await authenticateUser('user@example.com', 'password123');
 * console.log(user.name); // 'John Doe'
 * ```
 */
export const authenticateUser = async (
  email: string,
  password: string
): Promise<User> => {
  // implementação
};
````

### **Comentários de Código**

```typescript
// ✅ Bom - Comentários explicativos
// Calcula o preço com desconto baseado no tipo de usuário
const calculateDiscountedPrice = (
  basePrice: number,
  userType: UserType
): number => {
  const discountRate = userType === 'premium' ? 0.15 : 0.05;
  return basePrice * (1 - discountRate);
};

// ❌ Ruim - Comentários óbvios
// Multiplica o preço por 0.85
const price = basePrice * 0.85;
```

### **Documentação de Componentes**

````typescript
/**
 * Componente de botão reutilizável com múltiplas variantes
 *
 * @component
 * @example
 * ```tsx
 * <Button variant="primary" size="lg" onClick={handleClick}>
 *   Clique aqui
 * </Button>
 * ```
 */
interface ButtonProps {
  /** Conteúdo do botão */
  children: React.ReactNode;
  /** Variante visual do botão */
  variant?: 'primary' | 'secondary' | 'danger';
  /** Tamanho do botão */
  size?: 'sm' | 'md' | 'lg';
  /** Função chamada ao clicar */
  onClick?: () => void;
  /** Se o botão está desabilitado */
  disabled?: boolean;
}
````

---

## 📦 Estrutura de Pacotes

### **Package.json Organizado**

```json
{
  "name": "gradualinfo-website",
  "version": "1.0.0",
  "description": "Website oficial da Gradual Info",
  "keywords": ["gradual", "info", "website", "nextjs", "react"],
  "author": "Jonathan Simão <jonathan@aqua9.com.br>",
  "license": "MIT",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "lint:fix": "next lint --fix",
    "type-check": "tsc --noEmit",
    "test": "vitest",
    "test:watch": "vitest --watch",
    "test:coverage": "vitest --coverage",
    "test:e2e": "playwright test",
    "format": "prettier --write .",
    "generate:component": "plop component",
    "generate:page": "plop page"
  },
  "dependencies": {
    "next": "^15.4.5",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "typescript": "^5.3.3",
    "tailwindcss": "^3.4.0",
    "vitest": "^1.2.0",
    "playwright": "^1.40.0"
  }
}
```

### **Dependências Organizadas**

```json
{
  "dependencies": {
    // Framework e Runtime
    "next": "^15.4.5",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",

    // UI e Styling
    "tailwindcss": "^3.4.0",
    "clsx": "^2.0.0",

    // Autenticação e Segurança
    "jsonwebtoken": "^9.0.0",
    "bcryptjs": "^2.4.3",

    // Utilitários
    "date-fns": "^2.30.0",
    "zod": "^3.22.0"
  },
  "devDependencies": {
    // TypeScript
    "typescript": "^5.3.3",
    "@types/node": "^20.0.0",
    "@types/react": "^18.2.0",

    // Linting e Formatação
    "eslint": "^8.0.0",
    "prettier": "^3.0.0",
    "@typescript-eslint/eslint-plugin": "^6.0.0",

    // Testes
    "vitest": "^1.2.0",
    "@testing-library/react": "^14.0.0",
    "playwright": "^1.40.0",

    // Git Hooks
    "lefthook": "^1.0.0",
    "husky": "^8.0.0"
  }
}
```

---

## 🚀 Scripts de Desenvolvimento

### **Scripts Essenciais**

```bash
# Desenvolvimento
npm run dev          # Servidor de desenvolvimento
npm run build        # Build de produção
npm run start        # Servidor de produção

# Qualidade de Código
npm run lint         # Verifica linting
npm run lint:fix     # Corrige problemas de linting
npm run format       # Formata código
npm run type-check   # Verifica tipos TypeScript

# Testes
npm run test         # Executa todos os testes
npm run test:watch   # Testes em modo watch
npm run test:coverage # Testes com cobertura
npm run test:e2e     # Testes E2E

# Geração de Código
npm run generate:component  # Gera novo componente
npm run generate:page       # Gera nova página
npm run generate:hook       # Gera novo hook
npm run generate:util       # Gera nova utilidade
```

### **Scripts Personalizados**

```bash
# Análise de Performance
npm run analyze      # Analisa bundle size
npm run lighthouse   # Executa testes de performance

# Deploy
npm run deploy:staging    # Deploy para staging
npm run deploy:production # Deploy para produção

# Manutenção
npm run clean        # Limpa arquivos temporários
npm run update:deps  # Atualiza dependências
npm run audit:fix    # Corrige vulnerabilidades
```

---

## ✅ Boas Práticas

### **Performance**

```typescript
// ✅ Bom - Lazy loading
const LazyComponent = lazy(() => import('./LazyComponent'));

// ✅ Bom - Memoização
const ExpensiveComponent = memo(({ data }) => {
  return <div>{expensiveCalculation(data)}</div>;
});

// ✅ Bom - Debounce
const debouncedSearch = useMemo(
  () => debounce(searchFunction, 300),
  []
);
```

### **Segurança**

```typescript
// ✅ Bom - Validação de entrada
const userInput = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  age: z.number().min(18),
});

// ✅ Bom - Sanitização
const sanitizedInput = DOMPurify.sanitize(userInput);

// ✅ Bom - Escape de dados
const safeHtml = escapeHtml(userGeneratedContent);
```

### **Acessibilidade**

```typescript
// ✅ Bom - ARIA labels
<button aria-label="Fechar modal" onClick={closeModal}>
  <XIcon />
</button>

// ✅ Bom - Navegação por teclado
<div role="button" tabIndex={0} onKeyDown={handleKeyDown}>
  Conteúdo clicável
</div>

// ✅ Bom - Contraste adequado
<div className="text-gray-900 bg-white">Texto legível</div>
```

### **Error Handling**

```typescript
// ✅ Bom - Error boundaries
class ErrorBoundary extends Component {
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    logError(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback />;
    }
    return this.props.children;
  }
}

// ✅ Bom - Try-catch em async
const fetchData = async () => {
  try {
    const response = await api.get('/data');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
    throw new CustomError('Falha na requisição');
  }
};
```

---

## 📚 Recursos Adicionais

### **Documentação Oficial**

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

### **Ferramentas Recomendadas**

- [ESLint](https://eslint.org) - Linting de código
- [Prettier](https://prettier.io) - Formatação de código
- [Vitest](https://vitest.dev) - Framework de testes
- [Playwright](https://playwright.dev) - Testes E2E

### **Extensões VS Code**

- TypeScript Importer
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- GitLens
- Error Lens

---

## 📞 Suporte

Para dúvidas sobre desenvolvimento:

- **Desenvolvedor:** Jonathan Simão (Aqua9)
- **Email:** jonathan@aqua9.com.br
- **Website:** https://aqua9.com.br

---

_Última atualização: 02/08/2025_
_Versão: 1.0_
