// Defina a função "combinandoNomesPokemons" que recebe um parâmetro chamado "palavra"
function combinandoNomesPokemons(palavra) {
  // Crie a variável "palavraPokemon" que concatena a "palavra" com "saur"
  var palavraPokemon = palavra + "saur";
  
  // Retorne a palavra gerada
  return palavraPokemon;
}

// Entrada da palavra usando a função "gets()":
var nomeEntrada = gets();

// Chamando a função "combinandoNomesPokemons" com o nome pokemon informado e armazenando o resultado na variável "palavraGerada":
var palavraGerada = combinandoNomesPokemons(nomeEntrada);

// Exibindo a palavra gerada usando a função "print":
print(palavraGerada);

