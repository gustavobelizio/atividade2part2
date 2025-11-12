// JSON em formato de string
var pedidosJSON = `{
  "pedidos": [
    {"id": 1, "cliente": "Fernanda", "total": 120.50, "status": "entregue"},
    {"id": 2, "cliente": "Roberto", "total": 89.90, "status": "processando"},
    {"id": 3, "cliente": "Carla", "total": 45.30, "status": "entregue"}
  ]
}`;

// Função que gera o resumo dos pedidos
function resumoPedidos(jsonString) {
  var dados = JSON.parse(jsonString);
  var entregues = 0;
  var processando = 0;
  var total = 0;

  dados.pedidos.forEach(function(pedido) {
    total += pedido.total;
    if (pedido.status === "entregue") {
      entregues++;
    } else if (pedido.status === "processando") {
      processando++;
    }
  });

  var resultado = `${entregues} pedidos entregues, ${processando} em processamento. Valor total: R$ ${total.toFixed(2).replace('.', ',')}`;
  return resultado;
}

// Exemplo de uso
var resumo = resumoPedidos(pedidosJSON);
