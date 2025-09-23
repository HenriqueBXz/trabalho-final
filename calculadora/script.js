let tela = document.getElementById('tela');

function adicionar(valor) {
  tela.value += valor;
}

function limpar() {
  tela.value = '';
}

function apagar() {
  tela.value = tela.value.slice(0, -1);
}

function calcular() {
  try {
    tela.value = eval(tela.value);
  } catch {
    tela.value = 'Erro';
  }
}
