// script.js

// Função para adicionar números e operadores ao display
function adicionarValor(valor) {
  document.getElementById('display').value += valor;
}

// Função para limpar o display
function limparDisplay() {
  document.getElementById('display').value = '';
}

// Função para calcular o resultado
function calcularResultado() {
  const display = document.getElementById('display');
  try {
    // Avalia a expressão matemática no display
    display.value = eval(display.value);
  } catch (e) {
    // Em caso de erro na avaliação (como uma expressão inválida), exibe "Erro"
    display.value = 'Erro';
  }
}
