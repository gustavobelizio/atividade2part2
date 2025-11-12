// Objeto de endereço
var endereco = {
  rua: "Av. Paulista",
  numero: 1000,
  cidade: "São Paulo",
  cep: "01310-100"
};

// Função que formata o endereço em uma string legível
function formatarEndereco(obj) {
  var resultado = `${obj.rua}, ${obj.numero} - ${obj.cidade} - CEP: ${obj.cep}`;
  return resultado;
}

// Exemplo de uso
var enderecoFormatado = formatarEndereco(endereco);
