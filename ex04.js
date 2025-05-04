// 04. Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada

const prompt = require('prompt-sync')();

let continuar = true;

while (continuar) {
  console.log("\nEscolha o número do seu anime favorito:");
  console.log("1 - Solo Leveling");
  console.log("2 - Demon Slayer");
  console.log("3 - Jujutsu Kaisen");
  console.log("0 - Sair");

  const opcao = Number(prompt("Opção: "));

  switch (opcao) {
    case 1:
      console.log("Você escolheu Solo Leveling.\n" +
        "Eu, que era fraco, agora sou forte. Quem você acha que está diante de você?");
      break;
    case 2:
      console.log("Você escolheu Demon Slayer.\n" +
        "Mesmo que eu perca meu caminho, continuarei caminhando. Enquanto meu coração bater, não desistirei.");
      break;
    case 3:
      console.log("Você escolheu Jujutsu Kaisen.\n" +
        "Ao proteger os fracos, você se torna forte. Isso é o que significa ser um feiticeiro jujutsu.");
      break;
    case 0:
      console.log("Até a próxima querido(a) otaku! xD");
      continuar = false;
      break;
    default:
      console.log("Opção inválida. Tente novamente.");
  }
}
