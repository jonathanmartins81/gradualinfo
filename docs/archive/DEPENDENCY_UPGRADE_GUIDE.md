# 🔧 Guia de Upgrade de Dependências - Aqua9 Boilerplate v2

Este guia fornece instruções detalhadas para atualizar dependências do projeto de forma segura e controlada.

## 📋 Índice

- [Verificação de Dependências](#verificação-de-dependências)
- [Tipos de Updates](#tipos-de-updates)
- [Processo de Upgrade](#processo-de-upgrade)
- [Dependências Críticas](#dependências-críticas)
- [Rollback](#rollback)
- [Checklist de Segurança](#checklist-de-segurança)

---

## 🔍 Verificação de Dependências

### **Comandos Úteis**

```bash
# Verificar dependências desatualizadas
npm outdated

# Verificar vulnerabilidades
npm audit

# Verificar dependências não utilizadas
npm run check-deps

# Verificar licenças
npx license-checker --summary
```

### **Ferramentas Recomendadas**

- **npm-check-updates**: Para atualizações automáticas
- **npm audit**: Para verificação de segurança
- **Snyk**: Para análise avançada de vulnerabilidades
- **license-checker**: Para verificação de licenças

---

## 📦 Tipos de Updates

### **1. Patch Updates (x.y.z → x.y.z+1)**

- **Segurança**: Geralmente seguros
- **Processo**: Atualização automática
- **Teste**: Testes básicos

```bash
npm update
```

### **2. Minor Updates (x.y.z → x.y+1.0)**

- **Segurança**: Geralmente seguros
- **Processo**: Revisão manual
- **Teste**: Testes completos

```bash
npx npm-check-updates --target minor
```

### **3. Major Updates (x.y.z → x+1.0.0)**

- **Segurança**: Requer atenção especial
- **Processo**: Revisão detalhada
- **Teste**: Testes extensivos

```bash
npx npm-check-updates --target major
```

---

## 🔄 Processo de Upgrade

### **1. Preparação**

```bash
# 1. Criar branch para upgrade
git checkout -b chore/upgrade-dependencies

# 2. Verificar estado atual
npm outdated
npm audit

# 3. Fazer backup do package.json
cp package.json package.json.backup
```

### **2. Atualização Gradual**

```bash
# 1. Atualizar patches primeiro
npm update

# 2. Verificar minor updates
npx npm-check-updates --target minor

# 3. Aplicar minor updates seletivamente
npm install package-name@latest

# 4. Testar após cada atualização
npm run test
npm run build
```

### **3. Major Updates**

```bash
# 1. Identificar major updates
npx npm-check-updates --target major

# 2. Atualizar uma dependência por vez
npm install package-name@latest

# 3. Verificar breaking changes
npm run test
npm run lint
npm run type-check

# 4. Corrigir problemas encontrados
# 5. Testar novamente
```

### **4. Verificação Final**

```bash
# 1. Executar todos os testes
npm run test:ci
npm run test:e2e

# 2. Verificar build de produção
npm run build

# 3. Verificar segurança
npm audit
npx snyk test

# 4. Verificar licenças
npx license-checker --summary
```

---

## ⚠️ Dependências Críticas

### **Next.js**

```bash
# Verificar compatibilidade
npm ls next

# Atualizar com cuidado
npm install next@latest

# Verificar breaking changes
# https://nextjs.org/docs/upgrading
```

### **React**

```bash
# Atualizar React e React-DOM juntos
npm install react@latest react-dom@latest

# Verificar compatibilidade com Next.js
npm run build
```

### **TypeScript**

```bash
# Atualizar TypeScript
npm install typescript@latest

# Verificar configuração
npm run type-check
```

### **ESLint e Prettier**

```bash
# Atualizar ferramentas de qualidade
npm install eslint@latest prettier@latest

# Verificar configurações
npm run lint
npm run format:check
```

---

## 🔙 Rollback

### **Rollback Rápido**

```bash
# 1. Restaurar package.json
cp package.json.backup package.json

# 2. Remover node_modules e package-lock.json
rm -rf node_modules package-lock.json

# 3. Reinstalar dependências
npm install

# 4. Testar
npm run test
```

### **Rollback Seletivo**

```bash
# Reverter dependência específica
npm install package-name@previous-version

# Verificar compatibilidade
npm ls package-name
```

---

## ✅ Checklist de Segurança

### **Antes do Upgrade**

- [ ] Backup do projeto criado
- [ ] Branch separada para upgrade
- [ ] Documentação de breaking changes lida
- [ ] Testes atuais passando
- [ ] Build de produção funcionando

### **Durante o Upgrade**

- [ ] Atualização gradual (uma dependência por vez)
- [ ] Testes executados após cada atualização
- [ ] Build verificado após cada atualização
- [ ] Lint e type-check passando
- [ ] Problemas documentados

### **Após o Upgrade**

- [ ] Todos os testes passando
- [ ] Build de produção funcionando
- [ ] Testes E2E executados
- [ ] Verificação de segurança realizada
- [ ] Licenças verificadas
- [ ] Documentação atualizada
- [ ] PR criado com descrição detalhada

---

## 🚨 Problemas Comuns

### **1. Conflitos de Versão**

```bash
# Resolver conflitos
npm ls package-name
npm dedupe
```

### **2. Breaking Changes**

```bash
# Verificar changelog
# https://github.com/package-name/releases

# Aplicar migrações necessárias
# Seguir guia de migração oficial
```

### **3. Vulnerabilidades**

```bash
# Verificar vulnerabilidades
npm audit

# Aplicar fixes automáticos
npm audit fix

# Verificar fixes manuais
npm audit fix --force
```

---

## 📊 Monitoramento

### **Automação**

- **Dependabot**: Atualizações automáticas
- **GitHub Actions**: Verificação de segurança
- **Snyk**: Monitoramento contínuo

### **Relatórios**

```bash
# Gerar relatório de dependências
npm ls --depth=0 > dependencies-report.txt

# Gerar relatório de segurança
npm audit --json > security-report.json

# Gerar relatório de licenças
npx license-checker --json > license-report.json
```

---

## 🎯 Boas Práticas

### **1. Atualização Regular**

- Verificar dependências semanalmente
- Aplicar patches automaticamente
- Revisar minor updates mensalmente
- Planejar major updates trimestralmente

### **2. Testes Abrangentes**

- Testes unitários
- Testes de integração
- Testes E2E
- Testes de performance
- Testes de acessibilidade

### **3. Documentação**

- Registrar breaking changes
- Documentar migrações
- Atualizar README
- Manter changelog

---

## 📞 Suporte

### **Recursos Úteis**

- [npm outdated](https://docs.npmjs.com/cli/v8/commands/npm-outdated)
- [npm audit](https://docs.npmjs.com/cli/v8/commands/npm-audit)
- [npm-check-updates](https://github.com/raineorshine/npm-check-updates)
- [Snyk](https://snyk.io/)

### **Contato**

- **Issues**: [GitHub Issues](https://github.com/aqua9/boilerplate_aqua9_v2/issues)
- **Email**: contato@aqua9.com.br
- **Documentação**: [README.md](./README.md)

---

**Desenvolvido por:** Jonathan Simão
**Empresa:** Aqua9
**Última atualização:** $(date)
