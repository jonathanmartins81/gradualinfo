<div align="center">

<img src="public/img/logo-gh.svg" alt="Aqua9 Logo" width="300" height="64" />

[![Next.js](https://img.shields.io/badge/Next.js-15.4.5-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.2.0-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3.3-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.0-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11.0.0-purple?style=flat-square&logo=framer)](https://www.framer.com/motion/)

[![Shopee Clone](https://img.shields.io/badge/Shopee%20Clone-100%25-orange?style=flat-square)](https://github.com/jonathanmartins81/gradualinfo)
[![Mobile First](https://img.shields.io/badge/Mobile%20First-Responsive-green?style=flat-square)](https://github.com/jonathanmartins81/gradualinfo)
[![Conversion Focused](https://img.shields.io/badge/Conversion%20Focused-Optimized-red?style=flat-square)](https://github.com/jonathanmartins81/gradualinfo)

</div>

# 🛍️ Gradual Info Shop - Shopee Clone

> **Website oficial da Gradual Info Shop** - Clone completo da Shopee Brasil com foco em conversão e vendas. Desenvolvido pela **Aqua9** com design moderno, mobile-first e elementos de conversão otimizados.

---

## 🎯 **Características Principais**

### **🛍️ Shopee Clone Completo**

- ✅ **Header fixo** com busca centralizada
- ✅ **Bottom navigation** mobile-first
- ✅ **Carrossel de banners** promocionais
- ✅ **Flash sale** com contador regressivo
- ✅ **Cards de produtos** estilo Shopee
- ✅ **Categorias** em grid responsivo
- ✅ **Elementos de conversão** otimizados

### **📱 Mobile-First Design**

- ✅ **Responsivo** em todos os dispositivos
- ✅ **Touch-friendly** interfaces
- ✅ **Performance** otimizada
- ✅ **Animações** suaves com Framer Motion
- ✅ **Microinterações** atrativas

### **🚀 Performance Otimizada**

- ✅ **Next.js 15** com App Router
- ✅ **TypeScript** para type safety
- ✅ **Tailwind CSS** para styling
- ✅ **Framer Motion** para animações
- ✅ **Lazy loading** e code splitting
- ✅ **SEO otimizado** com metadata dinâmico

### **🎨 Design System Shopee**

- ✅ **Cores oficiais** da Shopee
- ✅ **Tipografia** hierárquica
- ✅ **Espaçamentos** consistentes
- ✅ **Componentes** reutilizáveis
- ✅ **Gradientes** e efeitos visuais

---

## 🏗️ **Arquitetura do Projeto**

### **📁 Estrutura de Pastas**

```
src/
├── app/                    # App Router (Next.js 15)
│   ├── api/               # API Routes
│   ├── layout.tsx         # Layout raiz com HeaderShopee
│   └── page.tsx           # Página inicial (ShopeeHome)
├── components/            # Componentes Shopee
│   ├── HeaderShopee.tsx   # Header fixo estilo Shopee
│   ├── BottomNav.tsx      # Navegação inferior mobile
│   ├── BannerCarousel.tsx # Carrossel de banners
│   ├── ProductCardShopee.tsx # Cards de produtos
│   ├── FlashSale.tsx      # Seção de ofertas relâmpago
│   ├── ShopeeHome.tsx     # Página principal
│   ├── FixedComponents.tsx # Componentes fixos
│   └── JsonLd.tsx         # SEO estruturado
├── hooks/                 # Custom hooks
├── lib/                   # Bibliotecas e configurações
├── styles/                # Estilos e design system
├── types/                 # Definições TypeScript
└── utils/                 # Utilitários gerais
```

### **🎯 Componentes Principais**

#### **HeaderShopee**
- Header fixo com logo e busca
- Barra de categorias horizontal
- Ícones de navegação (favoritos, carrinho, perfil)

#### **BottomNav**
- Navegação inferior para mobile
- Ícones grandes com labels
- Estados ativos destacados

#### **BannerCarousel**
- Carrossel automático de banners
- Navegação com setas e dots
- Gradientes coloridos atrativos

#### **ProductCardShopee**
- Cards de produtos estilo Shopee
- Badges dinâmicos (HOT, FLASH, etc.)
- Preços e avaliações destacados
- Microanimações com Framer Motion

#### **FlashSale**
- Seção de ofertas relâmpago
- Contador regressivo em tempo real
- Grid de produtos em destaque

#### **ShopeeHome**
- Página principal completa
- Integração de todos os componentes
- Layout responsivo otimizado

---

## 🚀 **Como Executar**

### **Pré-requisitos**
- Node.js 18+ 
- npm ou yarn

### **Instalação**
```bash
# Clone o repositório
git clone https://github.com/jonathanmartins81/gradualinfo.git

# Entre no diretório
cd gradualinfo

# Instale as dependências
npm install

# Execute em desenvolvimento
npm run dev
```

### **Scripts Disponíveis**
```bash
npm run dev          # Desenvolvimento
npm run build        # Build de produção
npm run start        # Servidor de produção
npm run lint         # Verificar código
npm run type-check   # Verificar tipos
```

---

## 🎨 **Design System**

### **Cores Principais**
- **Laranja Shopee:** `#ff5722`
- **Branco:** `#ffffff`
- **Cinza claro:** `#f8fafc`
- **Vermelho:** `#ef4444`
- **Verde:** `#22c55e`

### **Tipografia**
- **Títulos:** Inter, sans-serif
- **Corpo:** Inter, sans-serif
- **Hierarquia:** H1-H6 bem definida

### **Espaçamentos**
- **Grid:** 4px base
- **Padding:** 16px, 24px, 32px
- **Margin:** 8px, 16px, 24px, 32px

---

## 📱 **Responsividade**

### **Breakpoints**
- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

### **Grid System**
- **Mobile:** 2 colunas
- **Tablet:** 3-4 colunas
- **Desktop:** 4-6 colunas

---

## 🔧 **Tecnologias Utilizadas**

- **Framework:** Next.js 15
- **Linguagem:** TypeScript
- **Styling:** Tailwind CSS
- **Animações:** Framer Motion
- **Ícones:** React Icons
- **Deploy:** Vercel

---

## 📊 **Performance**

- **Lighthouse Score:** 95+
- **Core Web Vitals:** Otimizados
- **First Contentful Paint:** < 1.5s
- **Largest Contentful Paint:** < 2.5s
- **Cumulative Layout Shift:** < 0.1

---

## 🤝 **Contribuição**

1. Fork o projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

---

## 📄 **Licença**

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👨‍💻 **Desenvolvido por**

**Jonathan Simão** - [@aqua9dev](https://twitter.com/aqua9dev)

**Aqua9** - Soluções em Tecnologia e Informação

---

<div align="center">

**⭐ Se este projeto te ajudou, considere dar uma estrela!**

[![GitHub stars](https://img.shields.io/github/stars/jonathanmartins81/gradualinfo?style=social)](https://github.com/jonathanmartins81/gradualinfo)

</div>
