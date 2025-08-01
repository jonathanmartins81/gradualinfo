# 🔧 Configuração do GitHub - Gradual Info

## 📋 Passos para Criar o Repositório

### 1. Acesse o GitHub
Abra seu navegador e vá para: https://github.com/jonathanmartins81

### 2. Crie o Novo Repositório
- Clique no botão **"New"** ou **"New repository"**
- Configure o repositório:

**Configurações Básicas:**
- **Repository name:** `gradualinfo`
- **Description:** `Website oficial da Gradual Info - Desenvolvido pela Aqua9`
- **Visibility:** Public ✅
- **Add a README file:** ❌ (já temos um)
- **Add .gitignore:** ❌ (já temos um)
- **Choose a license:** MIT License ✅

**Configurações Avançadas:**
- **Homepage:** `https://gradualinfo.com.br`
- **Topics:** `gradualinfo`, `gradual info`, `nextjs`, `react`, `typescript`, `aqua9`

### 3. Clique em "Create repository"

### 4. Após Criar o Repositório

Volte ao terminal e execute:

```bash
# Fazer push do código
git push -u origin master

# Verificar se foi enviado corretamente
git remote -v
git status
```

## 🚀 Alternativa: Usar GitHub CLI

Se preferir usar o GitHub CLI, você pode:

### 1. Fazer Login (Interativo)
```bash
gh auth login
```

### 2. Criar Repositório
```bash
gh repo create jonathanmartins81/gradualinfo --public --description "Website oficial da Gradual Info - Desenvolvido pela Aqua9" --homepage "https://gradualinfo.com.br" --source=. --remote=origin --push
```

### 3. Ou Usar Token de Acesso Pessoal

1. Vá para: https://github.com/settings/tokens
2. Clique em "Generate new token (classic)"
3. Configure:
   - **Note:** `gradualinfo-setup`
   - **Expiration:** 30 days
   - **Scopes:** `repo` (todos os repositórios)
4. Copie o token
5. Configure no terminal:
```bash
export GH_TOKEN=seu_token_aqui
gh repo create jonathanmartins81/gradualinfo --public --description "Website oficial da Gradual Info - Desenvolvido pela Aqua9" --homepage "https://gradualinfo.com.br" --source=. --remote=origin --push
```

## 📊 Status Atual

- ✅ Projeto configurado localmente
- ✅ 6 commits prontos para push
- ✅ Dependências instaladas
- ✅ Documentação criada
- 🔄 Aguardando criação do repositório no GitHub

## 🎯 Próximos Passos

1. ✅ Criar repositório no GitHub
2. 🔄 Fazer push do código
3. 🔄 Configurar GitHub Pages (opcional)
4. 🔄 Configurar Actions (automático)
5. 🔄 Configurar domínio gradualinfo.com.br

---

**Desenvolvido com ❤️ pela Aqua9** 