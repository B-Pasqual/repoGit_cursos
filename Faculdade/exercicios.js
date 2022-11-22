//! O programa deve escolher um número aleatório entre 1 e 100, informar para o usuário qual foi o número sorteado e também, se ele escolheu corretamente entre ser Par ou Ímpar.

/*  let randomNumber = Math.floor(Math.random() * 100) + 1;
const escolha = prompt('O número será par ou impar ?');
const temp = randomNumber % 2 == 0 ? 'par' : 'impar';

temp == escolha
  ? alert(
      `Numero: ${randomNumber}\nÉ: ${temp}\nPalpite: ${escolha}\nParábens, você acertou!`
    )
  : alert(
      `Numero: ${randomNumber}\nÉ: ${temp}\nPalpite: ${escolha}\nQue pena, você errou!`
    );

// todo ou

let randomNumber = Math.floor(Math.random() * 100) + 1;
const escolha = prompt('O número será par ou impar ?');
const temp = randomNumber % 2 == 0 ? 'par' : 'impar';
temp == escolha ? alert('Você acertou!') : alert('Você errou!'); */

//! Pedra, papel ou tesoura

/* 0 - pedra
   1 - papel
   2 - tesoura */
let jogador = Number(
  prompt(
    `Escolha um número correspondente:\nPedra [0]\n Papel [1]\n Tesoura [2]`
  )
);
const possibilidades = ['pedra', 'papel', 'tesoura'];
let computador = Math.floor(Math.random() * 3);
let escolhas = `(Jogador): ${possibilidades[jogador]} x ${possibilidades[computador]} (Computador): `;

if (computador == jogador) {
  alert(`${escolhas}
  Empatou!`);
} else if (jogador == 0 && computador == 1) {
  alert(`${escolhas}
  Você perdeu! `);
} else if (jogador == 0 && computador == 2) {
  alert(`${escolhas}
  Você ganhou!`);
} else if (jogador == 1 && computador == 0) {
  alert(`${escolhas}
  Você ganhou!`);
} else if (jogador == 1 && computador == 2) {
  alert(`${escolhas}
  Você perdeu!`);
} else if (jogador == 2 && computador == 0) {
  alert(`${escolhas}
  Você perdeu!`);
} else if (jogador == 2 && computador == 1) {
  alert(`${escolhas}
  Você ganhou!`);
}
