// JSON em formato de string
var jsonString = `{
  "usuarios": [
    {"nome": "Carlos", "email": "carlos@email.com"},
    {"nome": "Maria", "email": "maria@email.com"},
    {"nome": "João", "email": "joao@email.com"}
  ]
}`;

// Converter a string JSON em objeto JavaScript
var dados = JSON.parse(jsonString);

// Extrair todos os emails e juntar em uma string separada por vírgulas
var emails = dados.usuarios.map(function(usuario) {
  return usuario.email;
}).join(", ");
