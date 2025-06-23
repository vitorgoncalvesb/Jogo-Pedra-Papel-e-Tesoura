let placarJogador = 0;
let placarComputador = 0;

function playGame(jogadaJogador) {
  const jogadaComputador = escolherJogadaComputador();

  let resultado = '';

  if (jogadaJogador === 'Tesoura') {
    if (jogadaComputador === 'Pedra') {
      resultado = 'Você perdeu!';
      placarComputador++;
    } else if (jogadaComputador === 'Papel') {
      resultado = 'Você venceu!';
      placarJogador++;
    } else {
      resultado = 'Empate!';
    }
  } else if (jogadaJogador === 'Papel') {
    if (jogadaComputador === 'Pedra') {
      resultado = 'Você venceu!';
      placarJogador++;
    } else if (jogadaComputador === 'Tesoura') {
      resultado = 'Você perdeu!';
      placarComputador++;
    } else {
      resultado = 'Empate!';
    }
  } else if (jogadaJogador === 'Pedra') {
    if (jogadaComputador === 'Tesoura') {
      resultado = 'Você venceu!';
      placarJogador++;
    } else if (jogadaComputador === 'Papel') {
      resultado = 'Você perdeu!';
      placarComputador++;
    } else {
      resultado = 'Empate!';
    }
  }

  alert(`Você escolheu ${jogadaJogador}. O computador escolheu ${jogadaComputador}. ${resultado}`);

  document.getElementById('placar-jogador').textContent = placarJogador;
  document.getElementById('placar-computador').textContent = placarComputador;
}

function escolherJogadaComputador() {
  const numeroAleatorio = Math.random();
  let jogada = '';

  if (numeroAleatorio < 1 / 3) {
    jogada = 'Pedra';
  } else if (numeroAleatorio < 2 / 3) {
    jogada = 'Papel';
  } else {
    jogada = 'Tesoura';
  }

  return jogada;
}
