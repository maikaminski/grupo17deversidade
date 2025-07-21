const age = 17;

if (age >= 18) {
  console.log("Você é maior de idade!");
} else {
  console.log("Você é menor de idade!");
}

const hour = 14;

if (hour < 12) {
  console.log("Bom dia");
} else if (hour < 18) {
  console.log("Boa tarde");
} else {
  console.log("Boa noite");
}

const isWeekend = false;
const isHoliday = true;

if (isWeekend || isHoliday) {
  console.log("Não precisa trabalhar hoje");
} else {
  console.log("Dia de trabalho");
}

console.log("\n=== DESAFIOS ===\n");

// desafio a) Sistema de classificação de notas
function classificarNota(nota) {
  if (nota < 0 || nota > 100) {
    return "Nota inválida";
  } else if (nota >= 0 && nota <= 59) {
    return "F";
  } else if (nota >= 60 && nota <= 69) {
    return "D";
  } else if (nota >= 70 && nota <= 79) {
    return "C";
  } else if (nota >= 80 && nota <= 89) {
    return "B";
  } else if (nota >= 90 && nota <= 100) {
    return "A";
  }
}

// testando o sistema de classificação de notas
console.log("a) Sistema de classificação de notas:");
console.log(`Nota 95: ${classificarNota(95)}`); // A
console.log(`Nota 85: ${classificarNota(85)}`); // B
console.log(`Nota 75: ${classificarNota(75)}`); // C
console.log(`Nota 65: ${classificarNota(65)}`); // D
console.log(`Nota 45: ${classificarNota(45)}`); // F

// desafio b) Verificar se um número é par ou ímpar
function verificarParImpar(numero) {
  if (numero % 2 === 0) {
    return "Par";
  } else {
    return "Ímpar";
  }
}

console.log("\nb) Verificação de números pares e ímpares:");
console.log(`Número 10: ${verificarParImpar(10)}`);
console.log(`Número 7: ${verificarParImpar(7)}`);
console.log(`Número 0: ${verificarParImpar(0)}`);
console.log(`Número -3: ${verificarParImpar(-3)}`);

// Desafio c) Verificação que diga se uma pessoa pode dirigir
function podeDigirir(idade, temHabilitacao) {
  if (idade >= 18 && temHabilitacao) {
    return "Pode dirigir";
  } else if (idade < 18) {
    return "Não pode dirigir - precisa ser maior de idade";
  } else if (!temHabilitacao) {
    return "Não pode dirigir - precisa ter habilitação";
  }
}

console.log("\nc) Verificação para dirigir:");
console.log(`Idade 25, tem habilitação: ${podeDigirir(25, true)}`);
console.log(`Idade 16, tem habilitação: ${podeDigirir(16, true)}`);
console.log(`Idade 20, sem habilitação: ${podeDigirir(20, false)}`);
console.log(`Idade 17, sem habilitação: ${podeDigirir(17, false)}`); 
