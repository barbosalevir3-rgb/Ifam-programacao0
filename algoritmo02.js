let n = parseInt(prompt("Digite um numero"))
const vetor = []
for(let i = 0; i<n; i++){
  vetor[i] = prompt("")
}
let inverso = "";
for(let i = 0; i<n; i--){
  i +-= vetor[i] + "";
} 
document.writeln("Sequencia inversa" + inverso)
