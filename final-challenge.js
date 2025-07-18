// Desafio final - integrando todos os conceitos

// Dados de alunos
const alunos = [
  { nome: "João", idade: 20, notas: [85, 90, 78] },
  { nome: "Maria", idade: 19, notas: [92, 95, 89] },
  { nome: "Pedro", idade: 21, notas: [70, 65, 80] },
  { nome: "Ana", idade: 18, notas: [60, 75, 68] },
  { nome: "Carlos", idade: 22, notas: [90, 88, 92] },
];

function calcularMedia(notas) {
  const soma = notas.reduce((total, nota) => total + nota, 0);
  return soma / notas.length;
}

function estaAprovado(media) {
  return media >= 70;
}

console.log("=== RELATÓRIO DE APROVAÇÃO ===\n");

alunos.forEach((aluno) => {
  const media = calcularMedia(aluno.notas);
  const aprovado = estaAprovado(media);
  const situacao = aprovado ? "APROVADO" : "REPROVADO";

  console.log(`Aluno: ${aluno.nome}`);
  console.log(`Média: ${media.toFixed(2)}`);
  console.log(`Status: ${situacao}`);
  console.log("\n");
});
