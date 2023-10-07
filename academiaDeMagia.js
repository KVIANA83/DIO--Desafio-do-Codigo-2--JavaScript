// Solicita ao usuário o tipo de magia
const tipoMagia = gets();

// Solicita ao usuário a quantidade de vezes que a magia será usada
const quantidade = parseInt(gets());

// Crie uma função para retornar a mensagem correspondente ao tipo de magia
function obterMensagem(tipoMagia) {
  // Criamos um objeto 'mensagens' para mapear os tipos de magia para mensagens correspondentes.
  const mensagens = {
    ataque: "Usou magia de ataque!",
    cura: "Usou magia de cura!",
    defesa: "Usou magia de defesa!",
    invalido: "Tipo de magia inválido!"
  };

  // Aqui fica o retorno da função com a mensagem associada ao tipo de magia fornecido:
  return mensagens[tipoMagia] || mensagens.invalido;
}

// Obtem a mensagem correspondente ao tipo de magia
const mensagem = obterMensagem(tipoMagia);

// É impressa a mensagem a quantidade de vezes especificada:
for (let i = 0; i < quantidade; i++) {
  print(mensagem);
}


