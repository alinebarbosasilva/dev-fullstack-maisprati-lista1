//15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.
//OBS: cada número é a soma dos dois anteriores

prompt = require('prompt-sync')();

let fibonacci = [0, 1];

for (let i = 2; i < 10; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]; 
}

console.log(`Os 10 primeiros números da sequência de Fibonacci são: ${fibonacci}`);

