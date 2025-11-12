// JSON em formato de string
var produtosJSON = `{
  "produtos": [
    {"nome": "Mouse", "preco": 25.90},
    {"nome": "Teclado", "preco": 89.90},
    {"nome": "Monitor", "preco": 450.00},
    {"nome": "Cabo USB", "preco": 15.00}
  ]
}`;

// Função que retorna nomes dos produtos com preço acima de R$ 50
function produtosAcimaDe50(jsonString) {
  var dados = JSON.parse(jsonString);
  var nomes = dados.produtos
    .filter(function(produto) {
      return produto.preco > 50;
    })
    .map(function(produto) {
      return produto.nome;
    });
  return nomes;
}

// Exemplo de uso
var resultado = produtosAcimaDe50(produtosJSON);
