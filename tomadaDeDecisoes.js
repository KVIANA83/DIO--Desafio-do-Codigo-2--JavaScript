
// Solicita ao usuário que insira o nome do personagem:
const nomePersonagem = gets();

// Solicita ao usuário que escolha entre "Atacar" ou "Fugir":
const acaoEscolhida = gets();

// TODO: Implemente uma solução utilizando lógica de programação;
//TODO: Verifique a ação escolhida e exibir a mensagem correspondente:
if (acaoEscolhida === "Atacar") {
  console.log(`${nomePersonagem} escolheu Atacar!`)
} else if (acaoEscolhida === "Fugir") {
  console.log(`${nomePersonagem} escolheu Fugir!`);
} else {
  console.log("Tente novamente");
}

