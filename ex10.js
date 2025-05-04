//10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
const prompt = require('prompt-sync')();

let numero = Number(prompt("Informe um número inteiro: "));

if (numero % 1 === 0) {
    console.log(`O número ${numero} é inteiro. Será exibido 10 vezes:\n`);
    for(let i = 0; i < 10; i++){
      console.log(`${i +1} - ${numero}`)
    }

} else {
    console.log("O número informado não é inteiro.");
}
