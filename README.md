# 🚀 Aqua9 Boilerplate - Professional Next.js

<div align="center">

<img src="public/img/logo-gh.svg" alt="Aqua9 Logo" width="300" height="64" />

**Modern Next.js template optimized for professional projects by Aqua9**

[![Build Status](https://github.com/aqua9/boilerplate_aqua9_v2/workflows/ci/badge.svg)](https://github.com/aqua9/boilerplate_aqua9_v2/actions)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org/)

**Developed by**: [Jonathan Simão](https://aqua9.com.br)
**Website**: [aqua9.com.br](https://aqua9.com.br)
**Version**: 2.0.0

</div>

---

## 📋 About the Project

This is a professional Next.js boilerplate v2 developed by **Aqua9** to accelerate the creation of modern web projects. The template includes best development practices, code quality tools, automated testing, SEO optimization, and optimized production settings.

### ✨ **Main Features**

- ⚡ **Optimized performance** with Next.js 15 and App Router
- 🎨 **Design system** using inline styles and CSS modules
- 🔍 **Dynamic SEO system** with Open Graph and Twitter Cards
- 📊 **Complete analytics** with PostHog and Sentry
- 🧪 **Automated testing** with Jest and React Testing Library
- 📚 **Documentation** via Storybook
- 🚀 **Deploy ready** for Vercel and other platforms
- 🎯 **Automated, standardized code quality**

## 🛠️ Technology Stack

This project uses a modern, robust stack, carefully selected for quality, performance and scalability.

### **🎯 Core Framework**

| Technology                                    | Version | Description                             |
| --------------------------------------------- | ------- | --------------------------------------- |
| [Next.js](https://nextjs.org/)                | 15.x    | React framework with App Router and SSR |
| [React](https://reactjs.org/)                 | 19.x    | JavaScript library for UIs              |
| [TypeScript](https://www.typescriptlang.org/) | 5.x     | Static typing for JavaScript            |

### **🔧 Development & Quality**

| Tool                                                 | Purpose                   | Configuration          |
| ---------------------------------------------------- | ------------------------- | ---------------------- |
| [ESLint](https://eslint.org/)                        | Linting & static analysis | Strict configuration   |
| [Prettier](https://prettier.io/)                     | Code formatting           | Consistent standards   |
| [EditorConfig](https://editorconfig.org/)            | Editor settings           | Standardized workspace |
| [Lefthook](https://github.com/evilmartians/lefthook) | Git hooks                 | Automated code quality |

### **🧪 Testing & Documentation**

| Tool                                                  | Type            | Description                 |
| ----------------------------------------------------- | --------------- | --------------------------- |
| [Vitest](https://vitest.dev/)                         | Unit tests      | Fast, modern test framework |
| [React Testing Library](https://testing-library.com/) | Component tests | Focuses on user behavior    |
| [@vitejs/plugin-react](https://vitejs.dev/)           | React support   | Reliable React testing      |
| [Storybook](https://storybook.js.org/)                | Documentation   | Isolated components         |

### **🔍 SEO & Performance**

| Technology                                                                             | Purpose          | Features                     |
| -------------------------------------------------------------------------------------- | ---------------- | ---------------------------- |
| [Dynamic SEO](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)   | SEO Optimization | Open Graph, Twitter Cards    |
| [JSON-LD](https://schema.org/)                                                         | Structured Data  | Rich snippets, Schema.org    |
| [Sitemap](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap) | Search Indexing  | Automatic sitemap generation |

### **📊 Analytics & Monitoring**

| Service                                  | Functionality             | Integration |
| ---------------------------------------- | ------------------------- | ----------- |
| [PostHog](https://posthog.com/)          | Analytics & Feature Flags | Automatic   |
| [Sentry](https://sentry.io/)             | Error monitoring          | Real-time   |
| [Better Stack](https://betterstack.com/) | Logs & Observability      | Centralized |

### **🔒 Security & Quality**

| Tool                                                 | Protection          | Benefit                 |
| ---------------------------------------------------- | ------------------- | ----------------------- |
| [Husky](https://typicode.github.io/husky/)           | Git hooks           | Code quality automation |
| [Lefthook](https://github.com/evilmartians/lefthook) | Git hooks manager   | Automated workflows     |
| [Knip](https://github.com/webpro/knip)               | Dependency analysis | Clean dependencies      |

## 🔍 Dynamic SEO System

The Aqua9 Boilerplate v2 includes a comprehensive dynamic SEO system that automatically optimizes your pages for search engines and social media sharing.

### **✨ SEO Features**

- 🔍 **Dynamic metadata** generation based on routes
- 📱 **Open Graph** optimization for social media
- 🐦 **Twitter Cards** with custom configurations
- 📊 **JSON-LD structured data** for rich snippets
- 🗺️ **Automatic sitemap** generation
- 🤖 **Robots.txt** configuration
- 🎯 **Canonical URLs** and meta tags
- 📈 **Performance optimization** for Core Web Vitals

### **🛠️ How It Works**

The SEO system automatically applies optimized metadata to each page based on the route configuration:

```typescript
// Automatic SEO for each route
export const metadata: Metadata = generateDynamicSEO('/');

// Dynamic SEO for dynamic pages
export async function generateMetadata({ params }) {
  return generateDynamicSEO(`/portfolio/${slug}`, {
    slug: project.title,
  });
}
```

### **📄 SEO Configuration**

Each route has its own SEO configuration with:

- Unique titles and descriptions
- Optimized keywords
- Social media images
- Structured data
- Priority and update frequency

For detailed documentation, see [SEO_DYNAMIC_SYSTEM.md](./SEO_DYNAMIC_SYSTEM.md).

## 🎯 Automated Code Quality

This boilerplate implements a complete code quality system ensuring **automatic standardization** and **continuous correction** of all code in the project, including test files.

### **🛠️ Quality Tools**

#### **Prettier**

- ✅ **Automatic code formatting**
- ✅ **Consistent standards** via `.prettierrc`
- ✅ **Global config** for spacing, quotes, semicolons
- ✅ **Editor integration** for format on save
- ✅ **Manual command**: `npm run format`

#### **ESLint**

- ✅ **Static code analysis** for JS/TS
- ✅ **Error detection** and best practices
- ✅ **Specialized plugins** for React, TypeScript
- ✅ **Strict configuration** for maximum quality
- ✅ **Auto-fix:** `npm run lint:fix`

#### **EditorConfig**

- ✅ **Editor standardization** on all systems
- ✅ **Consistent config** for indents and EOLs
- ✅ **Universal support** for various IDEs
- ✅ **Automatic config** via `.editorconfig`

#### **Lefthook (Git Hooks)**

- ✅ **Automated quality** before each commit
- ✅ **Automatic lint/format execution**
- ✅ **TypeScript type checks**
- ✅ **Prevent commiting non-standard code**

### **🚀 Automation Benefits**

#### **For Developers**

- ⚡ **Zero manual configuration** needed for formatting
- 🔄 **Autosave correction** on file changes
- 🚫 **Impossible** to commit non-standard code
- 📈 **Increased productivity** with less overhead

#### **For Teams**

- 🎯 **Consistent standards** across the codebase
- 🔍 **Early detection** of quality issues
- 🚀 **Simplified onboarding** for new devs
- 📊 **Automated quality metrics**

#### **For the Project**

- 🛡️ **Bug prevention** via static analysis
- 📝 **Readable, well-structured code**
- 🔧 **Increased maintainability**
- 🚀 **Optimized performance** via best practices

### **📋 How It Works in Practice**

1. **During development:**
   - Editor auto-formats on save
   - ESLint shows errors in real-time
   - TypeScript checks types continuously

2. **Before commit:**
   - Lefthook auto-runs lint and format tasks
   - TypeScript type check
   - Blocks commits with errors

3. **In CI/CD:**
   - Quality verification on pull requests
   - Test coverage reports
   - Automated security analysis

### **🔧 Custom Configuration**

All tools can be configured through these files:

- `.prettierrc` - Prettier settings
- `.eslintrc.js` - ESLint rules
- `.editorconfig` - Editor configs
- `lefthook.yml` - Git hooks

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

| Command         | Description       | Usage                |
| --------------- | ----------------- | -------------------- |
| `npm run dev`   | Dev server        | `localhost:3000`     |
| `npm run build` | Production build  | Optimized for deploy |
| `npm run start` | Production server | Local build testing  |

### **🔧 Code Quality**

| Command                | Action          | Result          |
| ---------------------- | --------------- | --------------- |
| `npm run lint`         | Static analysis | Problem report  |
| `npm run lint:fix`     | Auto-fix        | Clean code      |
| `npm run format`       | Formatting      | Consistent code |
| `npm run format:check` | Format check    | Validates style |

### **🧪 Tests**

| Command                 | Type     | Description        |
| ----------------------- | -------- | ------------------ |
| `npm run test`          | Unit     | Full test run      |
| `npm run test:watch`    | Unit     | Dev mode (watch)   |
| `npm run test:ci`       | CI/CD    | Sequential testing |
| `npm run test:coverage` | Coverage | Detailed report    |

### **📚 Documentation**

| Command                   | Environment | Port             |
| ------------------------- | ----------- | ---------------- |
| `npm run storybook`       | Development | `localhost:6006` |
| `npm run build-storybook` | Production  | Static build     |

### **✅ Validation**

| Command              | Check        | Benefit            |
| -------------------- | ------------ | ------------------ |
| `npm run type-check` | TypeScript   | Correct types      |
| `npm run check-deps` | Dependencies | Clean dependencies |

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

| Tool          | Category                  | Documentation                                    |
| ------------- | ------------------------- | ------------------------------------------------ |
| **Vitest**    | Test framework            | [Docs](https://vitest.dev/guide/)                |
| **Storybook** | Component documentation   | [Docs](https://storybook.js.org/docs)            |
| **PostHog**   | Analytics & feature flags | [Docs](https://posthog.com/docs)                 |
| **Sentry**    | Error monitoring          | [Docs](https://docs.sentry.io/)                  |
| **Husky**     | Git hooks                 | [Docs](https://typicode.github.io/husky/)        |
| **Lefthook**  | Git hooks manager         | [Docs](https://github.com/evilmartians/lefthook) |

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
