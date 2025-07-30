#!/bin/bash

echo "🧪 Testando Projeto Boilerplate Aqua9 v2"
echo "========================================"

# 1. Verificar dependências
echo "📦 Verificando dependências..."
npm list --depth=0 > /dev/null 2>&1
if [ $? -eq 0 ]; then
    echo "✅ Dependências OK"
else
    echo "❌ Problema com dependências"
fi

# 2. Verificar linting
echo "🔍 Verificando linting..."
npx eslint src/ --ext .ts,.tsx --max-warnings=0 > /dev/null 2>&1
if [ $? -eq 0 ]; then
    echo "✅ Linting OK"
else
    echo "❌ Problemas de linting encontrados"
fi

# 3. Verificar TypeScript
echo "📝 Verificando TypeScript..."
npx tsc --noEmit > /dev/null 2>&1
if [ $? -eq 0 ]; then
    echo "✅ TypeScript OK"
else
    echo "❌ Problemas de TypeScript encontrados"
fi

# 4. Verificar formatação
echo "🎨 Verificando formatação..."
npx prettier --check . > /dev/null 2>&1
if [ $? -eq 0 ]; then
    echo "✅ Formatação OK"
else
    echo "❌ Problemas de formatação encontrados"
fi

# 5. Testar build
echo "🏗️ Testando build..."
timeout 30s npm run build > /dev/null 2>&1
if [ $? -eq 0 ]; then
    echo "✅ Build OK"
else
    echo "❌ Problema no build"
fi

echo "========================================"
echo "🎯 Teste concluído!"
