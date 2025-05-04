//08. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.

const prompt = require('prompt-sync')();

const valor1 = Number(prompt("Digite o primeiro valor: "));
const valor2 = Number(prompt("Digite o segundo valor: "));

let menor, maior;

if (valor1 < valor2) {
    menor = valor1;
    maior = valor2;
}
else {
    menor = valor2;
    maior = valor1;
}

if(menor !== maior){
  console.log(`Os valores em ordem crescente são: ${menor} e ${maior}`);
}else{
  console.log(`Digite valores diferentes.`)
}
