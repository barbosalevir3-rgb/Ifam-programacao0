let n = parseInt(prompt("Digite um numero"))
let soma = 0 
for(let i = 1; i <= n; i++){
  let numero = parseFloat(prompt(`Digite o numero${i}:`))
  soma + numero
}
if(soma>100){
  alert(` a soma dos numeros ${soma}, é maior que 100 <br>`)
}
