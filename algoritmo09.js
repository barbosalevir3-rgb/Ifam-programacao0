let quantidade = parseInt(prompt("Digite um numero"))
let impares = 0
const numeros = []

for(let i = 0; i<quantidade; i++){
  numeros[i] = prompt("")
  if(numeros[i] % 2==0)
  impares++
  else
  resultado++
}
document.writeln(`<br>Numeros iformados</br><br>`)
for(let i = 0; i<quantidade; i++){
  document.writeln(numeros[i])
}
document.writeln(`<br>Quantidade de impares: ${impares}<br>resultado:
${resultado}`) 
