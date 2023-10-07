// Lê a jogada do personagem:
var jogadaPersonagem = parseInt(gets());

// Lê a jogada do monstro:
var jogadaMonstro = parseInt(gets());

// Implemente a função para realizar o combate e retornar o resultado:
function resultado(jogadaPersonagem, jogadaMonstro) {
  // Implemente uma estrutura condicional if/else para verificar a jogada do personagem e a jogada do monstro:
  if (jogadaPersonagem > jogadaMonstro) {
    return "Você venceu a batalha!";
  } else if (jogadaPersonagem === jogadaMonstro) {
    return "Foi um empate!";
  } else {
    return "Você perdeu a batalha!";
  }
}

// Chame a função para realizar o combate e armazene o resultado:
var resultadoCombate = resultado(jogadaPersonagem, jogadaMonstro);

// Exiba o resultado:
print(resultadoCombate);


