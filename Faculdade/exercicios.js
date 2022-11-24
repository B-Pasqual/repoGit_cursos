//! O programa deve escolher um número aleatório entre 1 e 100, informar para o usuário qual foi o número sorteado e também, se ele escolheu corretamente entre ser Par ou Ímpar.

/* let randomNumber = Math.floor(Math.random() * 100) + 1;
const escolha = prompt('O número será par ou impar ?');
const temp = randomNumber % 2 == 0 ? 'par' : 'impar';

temp == escolha
  ? alert(
      `Numero: ${randomNumber}\nÉ: ${temp}\nPalpite: ${escolha}\nParábens, você acertou!`
    )
  : alert(
      `Numero: ${randomNumber}\nÉ: ${temp}\nPalpite: ${escolha}\nQue pena, você errou!`
    ); */

// todo ou

/* let randomNumber = Math.floor(Math.random() * 100) + 1;
const escolha = prompt('O número será par ou impar ?');
const temp = randomNumber % 2 == 0 ? 'par' : 'impar';
temp == escolha ? alert('Você acertou!') : alert('Você errou!'); */

//! Pedra, papel ou tesoura

/* 0 - pedra
   1 - papel
   2 - tesoura */
/* 

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
 */

/* //! Passo a passo para fazer café, possibilidade de escolha em qual passo se deseja iniciar

let start = prompt(`Entre  1 e 8, de qual passo você deseja iniciar?`);

switch (start) {
  case '1':
    alert('[Passo 1] Primeiramente, coloque a água para ferver;');
  case '2':
    alert('[Passo 2] Enquanto isso, pegue o coador de café e o filtro;');
  case '3':
    alert(
      '[Passo 3] Coloque o filtro no coador e posicione o mesmo em cima da garrafa térmica;'
    );
  case '4':
    alert('[Passo 4] Adicione o pó de café no filtro;');
  case '5':
    alert(
      '[Passo 5] Então, quando a água estiver pronta, coloque ela aos poucos no no coador;'
    );
  case '6':
    alert('[Passo 6] Quando já tiver utilizado toda a água;');
  case '7':
    alert('[Passo 7] Seu café está pronto');
  case '8':
    alert(
      '[Passo 8] E se preferir, adicione o açúcar ou adoçante a gosto para finalizar.'
    );
    break;

  default:
    alert('Você digitou um valor inválido');

    //
}
 */

//!Exemplo do Leo com ternary operator

 let m1 = 0;
let m2 = 0;
let invalido = 0;
let vote;

while (true) {
  let vote = Number(prompt('Digite um número'));
  if (vote == 0) break;
  vote == 1
    ? m1++
    : vote == 2
    ? m2++
    : vote != 1 && vote != 2
    ? invalido++
    : '';
}

alert(`Votos: \n\nRobo: ${m1}\n Macaco: ${m2}\n Invalidos: ${invalido}`); */

/* while (vote != 0) {
  let vote = Number(prompt('Digite um número'));
  if (Number.isInteger(vote)) {
    vote == 1
      ? m1++
      : vote == 2
      ? m2++
      : vote != 1 && vote != 2
      ? invalido++
      : '';
  } else {
    break;
  }
}

console.log(m1);
console.log(m2);
console.log(invalido);
 */

//! Short circuiting  ---------------------------

/* let numero = prompt('Digite um número');
// let numero = Number(prompt('Digite um número'));
console.log(typeof numero == 'number' || alert('A variável não é um número'));
console.log(typeof numero);
 */
[quantidadeEstoque, price, valorDisponivel, valorTotal] = [5, 10, 200, 50];
console.log(
  valorDisponivel != 0 &&
    quantidadeEstoque != 0 &&
    valorTotal < valorDisponivel &&
    'Todas condições foram atendidas, continuando a compra...'
);
