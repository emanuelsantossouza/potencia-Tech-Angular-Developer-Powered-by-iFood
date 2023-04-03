/* 1) Crie um programa que receba um número e imprama a sua tabuada!!! */

let numeroTabuada = 7;

function Tabuada(numeroTabuada) {
  for (i = 0; i <= 10; i++) {
    let conta = numeroTabuada * i;
    console.log(conta);
  }
}

Tabuada(numeroTabuada);
