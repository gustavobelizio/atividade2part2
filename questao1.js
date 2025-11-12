// Objeto original
var usuario = {
  nome: "Ana Silva",
  idade: 30,
  habilidades: ["JavaScript", "React", "Node.js"],
  ativo: true
};

// Converter o objeto para uma string JSON
var jsonString = JSON.stringify(usuario);

// Converter a string JSON de volta para um objeto JavaScript
var usuarioRecuperado = JSON.parse(jsonString);
