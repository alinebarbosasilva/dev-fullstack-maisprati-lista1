//14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.
// OBS: O fatorial de um número é a multiplicação dele pelos números menores que ele até 1

prompt = require('prompt-sync')();

let numero = Number(prompt("Digite um número para calcular o fatorial:"));

let fatorial = 1;
let contador = numero;

while (contador > 1) {
  fatorial *= contador;
  contador--;
}

console.log(`O fatorial de ${numero} é ${fatorial}`);
