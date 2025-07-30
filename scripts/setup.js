#!/usr/bin/env node

/**
 * Script de Setup Interativo - Aqua9 Boilerplate v2
 *
 * Este script facilita o onboarding inicial do projeto,
 * configurando automaticamente o ambiente de desenvolvimento.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const readline = require('readline');

// Cores para output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
};

// Interface de leitura
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Funções utilitárias
const log = (message, color = 'reset') => {
  console.log(`${colors[color]}${message}${colors.reset}`);
};

const question = query => {
  return new Promise(resolve => {
    rl.question(query, resolve);
  });
};

const execCommand = (command, options = {}) => {
  try {
    execSync(command, { stdio: 'inherit', ...options });
    return true;
  } catch (error) {
    log(`❌ Erro ao executar: ${command}`, 'red');
    return false;
  }
};

const checkFileExists = filePath => {
  return fs.existsSync(path.join(process.cwd(), filePath));
};

const createEnvFile = answers => {
  const envContent = `# ===== CONFIGURAÇÕES DA APLICAÇÃO =====
NEXT_PUBLIC_APP_URL=${answers.appUrl}
NEXT_PUBLIC_APP_NAME=${answers.appName}

# ===== AUTENTICAÇÃO =====
JWT_SECRET=${answers.jwtSecret}

# ===== BANCO DE DADOS =====
DATABASE_URL=${answers.databaseUrl}

# ===== EMAIL =====
SMTP_HOST=${answers.smtpHost}
SMTP_PORT=${answers.smtpPort}
SMTP_USER=${answers.smtpUser}
SMTP_PASS=${answers.smtpPass}

# ===== SERVIÇOS EXTERNOS =====
GOOGLE_CLIENT_ID=${answers.googleClientId}
GOOGLE_CLIENT_SECRET=${answers.googleClientSecret}

# ===== MONITORAMENTO =====
SENTRY_DSN=${answers.sentryDsn}
NEXT_PUBLIC_GA_ID=${answers.gaId}

# ===== AMBIENTE =====
NODE_ENV=development
`;

  fs.writeFileSync('.env.local', envContent);
  log('✅ Arquivo .env.local criado com sucesso!', 'green');
};

const updatePackageJson = answers => {
  const packagePath = path.join(process.cwd(), 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));

  // Atualizar informações do projeto
  packageJson.name = answers.projectName;
  packageJson.description = answers.projectDescription;
  packageJson.author = answers.authorName;
  packageJson.repository = {
    type: 'git',
    url: answers.repositoryUrl,
  };

  fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2));
  log('✅ package.json atualizado com sucesso!', 'green');
};

const installDependencies = async () => {
  log('\n📦 Instalando dependências...', 'blue');

  if (execCommand('npm install')) {
    log('✅ Dependências instaladas com sucesso!', 'green');
  } else {
    log('❌ Erro ao instalar dependências', 'red');
    return false;
  }

  log('\n🔧 Instalando dependências de desenvolvimento...', 'blue');
  if (
    execCommand(
      'npm install --save-dev @types/node @types/react @types/react-dom'
    )
  ) {
    log('✅ Dependências de desenvolvimento instaladas!', 'green');
  }

  return true;
};

const setupGit = async () => {
  log('\n🔧 Configurando Git...', 'blue');

  if (!checkFileExists('.git')) {
    if (execCommand('git init')) {
      log('✅ Repositório Git inicializado!', 'green');
    }
  }

  if (execCommand('git add .')) {
    log('✅ Arquivos adicionados ao Git!', 'green');
  }

  if (execCommand('git commit -m "feat: setup inicial do projeto"')) {
    log('✅ Commit inicial realizado!', 'green');
  }
};

const runQualityChecks = async () => {
  log('\n🔍 Executando verificações de qualidade...', 'blue');

  const checks = [
    { name: 'ESLint', command: 'npm run lint' },
    { name: 'TypeScript', command: 'npm run type-check' },
    { name: 'Prettier', command: 'npm run format:check' },
  ];

  for (const check of checks) {
    log(`\n🔍 Executando ${check.name}...`, 'cyan');
    if (execCommand(check.command)) {
      log(`✅ ${check.name} passou!`, 'green');
    } else {
      log(`⚠️  ${check.name} encontrou problemas`, 'yellow');
    }
  }
};

const showNextSteps = answers => {
  log('\n🎉 Setup concluído com sucesso!', 'green');
  log('\n📋 Próximos passos:', 'bright');

  console.log(`
${colors.cyan}1.${colors.reset} Inicie o servidor de desenvolvimento:
   ${colors.yellow}npm run dev${colors.reset}

${colors.cyan}2.${colors.reset} Acesse a aplicação:
   ${colors.yellow}http://localhost:3000${colors.reset}

${colors.cyan}3.${colors.reset} Execute os testes:
   ${colors.yellow}npm run test${colors.reset}

${colors.cyan}4.${colors.reset} Verifique a qualidade do código:
   ${colors.yellow}npm run quality${colors.reset}

${colors.cyan}5.${colors.reset} Acesse a documentação:
   ${colors.yellow}README.md${colors.reset}

${colors.cyan}6.${colors.reset} Configure o deploy:
   ${colors.yellow}npm run vercel:deploy${colors.reset}

${colors.bright}📚 Recursos úteis:${colors.reset}
• ${colors.blue}SECURITY_GUIDE.md${colors.reset} - Guia de segurança
• ${colors.blue}CONTRIBUTING.md${colors.reset} - Como contribuir
• ${colors.blue}IMPROVEMENTS_ROADMAP.md${colors.reset} - Roadmap de melhorias

${colors.bright}🔧 Scripts disponíveis:${colors.reset}
• ${colors.yellow}npm run dev${colors.reset} - Desenvolvimento
• ${colors.yellow}npm run build${colors.reset} - Build de produção
• ${colors.yellow}npm run test${colors.reset} - Testes unitários
• ${colors.yellow}npm run test:e2e${colors.reset} - Testes E2E
• ${colors.yellow}npm run quality${colors.reset} - Verificação de qualidade
• ${colors.yellow}npm run security${colors.reset} - Auditoria de segurança

${colors.bright}🚀 Boa sorte com seu projeto!${colors.reset}
  `);
};

// Função principal
const main = async () => {
  log('\n🚀 Aqua9 Boilerplate v2 - Setup Interativo', 'bright');
  log('=' * 50, 'blue');

  try {
    // Coletar informações do projeto
    log('\n📝 Configuração do Projeto', 'bright');

    const answers = {
      projectName:
        (await question(`${colors.cyan}Nome do projeto:${colors.reset} `)) ||
        'my-aqua9-app',
      projectDescription:
        (await question(
          `${colors.cyan}Descrição do projeto:${colors.reset} `
        )) || 'Aplicação Next.js com Aqua9 Boilerplate',
      authorName:
        (await question(`${colors.cyan}Seu nome:${colors.reset} `)) ||
        'Desenvolvedor',
      repositoryUrl:
        (await question(
          `${colors.cyan}URL do repositório (opcional):${colors.reset} `
        )) || '',
      appName:
        (await question(`${colors.cyan}Nome da aplicação:${colors.reset} `)) ||
        'Aqua9 App',
      appUrl:
        (await question(`${colors.cyan}URL da aplicação:${colors.reset} `)) ||
        'http://localhost:3000',
      jwtSecret:
        (await question(
          `${colors.cyan}JWT Secret (deixe vazio para gerar):${colors.reset} `
        )) || require('crypto').randomBytes(32).toString('hex'),
      databaseUrl:
        (await question(
          `${colors.cyan}URL do banco de dados (opcional):${colors.reset} `
        )) || '',
      smtpHost:
        (await question(
          `${colors.cyan}SMTP Host (opcional):${colors.reset} `
        )) || '',
      smtpPort:
        (await question(
          `${colors.cyan}SMTP Port (opcional):${colors.reset} `
        )) || '587',
      smtpUser:
        (await question(
          `${colors.cyan}SMTP User (opcional):${colors.reset} `
        )) || '',
      smtpPass:
        (await question(
          `${colors.cyan}SMTP Pass (opcional):${colors.reset} `
        )) || '',
      googleClientId:
        (await question(
          `${colors.cyan}Google Client ID (opcional):${colors.reset} `
        )) || '',
      googleClientSecret:
        (await question(
          `${colors.cyan}Google Client Secret (opcional):${colors.reset} `
        )) || '',
      sentryDsn:
        (await question(
          `${colors.cyan}Sentry DSN (opcional):${colors.reset} `
        )) || '',
      gaId:
        (await question(
          `${colors.cyan}Google Analytics ID (opcional):${colors.reset} `
        )) || '',
    };

    // Criar arquivo de ambiente
    log('\n🔧 Criando arquivo de ambiente...', 'blue');
    createEnvFile(answers);

    // Atualizar package.json
    log('\n📦 Atualizando package.json...', 'blue');
    updatePackageJson(answers);

    // Instalar dependências
    const depsInstalled = await installDependencies();
    if (!depsInstalled) {
      log('\n❌ Falha na instalação das dependências', 'red');
      process.exit(1);
    }

    // Configurar Git
    await setupGit();

    // Executar verificações de qualidade
    await runQualityChecks();

    // Mostrar próximos passos
    showNextSteps(answers);
  } catch (error) {
    log(`\n❌ Erro durante o setup: ${error.message}`, 'red');
    process.exit(1);
  } finally {
    rl.close();
  }
};

// Executar se chamado diretamente
if (require.main === module) {
  main();
}

module.exports = { main };
