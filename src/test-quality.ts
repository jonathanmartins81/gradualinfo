// Arquivo com problemas de qualidade para demonstrar bloqueio
const test = "string sem ponto e vírgula" // ESLint vai reclamar da falta de ponto e vírgula

function badFunction() {
  // Função com problemas de qualidade
  let x = 1
  let y = 2
  return x + y // Retorno sem ponto e vírgula
}

// Variável não utilizada
const unusedVariable = "isso vai gerar warning"

// Console.log em produção (problema de qualidade)
console.log("debug info")

export default test
