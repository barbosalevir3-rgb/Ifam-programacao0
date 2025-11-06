let n = parseInt(prompt("Quantas disciplinas você teve?"));
let soma = 0;

for (let i = 1; i <= n; i++) {
  let nota = parseFloat(prompt(`Digite a nota da disciplina ${i}:`));
  soma += nota;
}

let media = soma / n;

if (media >= 6) {
  alert(`Média: ${media.toFixed(2)}\nSituação: Aprovado de módulo `);
} else {
  alert(`Média: ${media.toFixed(2)}\nSituação: Reprovado de módulo `);
}
