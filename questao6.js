// Função que tenta converter string para JSON sem usar try/catch
function parseJSONSafe(jsonString) {
  var resultado = null;

  // Verifica se a string começa com { ou [ e termina com } ou ]
  if ((jsonString.trim().startsWith("{") && jsonString.trim().endsWith("}")) ||
      (jsonString.trim().startsWith("[") && jsonString.trim().endsWith("]"))) {
    resultado = JSON.parse(jsonString);
  }

  return resultado;
}

// Teste com JSON inválido
var jsonInvalido = '{nome: "João", "idade": 30}'; // Falta aspas em "nome"
var resultado = parseJSONSafe(jsonInvalido);
