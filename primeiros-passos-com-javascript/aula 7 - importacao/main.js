// ---- Codigos Equivante -----
// const { nome } = pessoa;

// const nome = pessoa.nome



// print(gets());

// const pessoa = {
//   nome: "vitor",
// };

const { gets, print } = require("./funcoesAuxiliares");

const numeroSorteados = [];

for (let i = 0; i < 5; i++) {
  const numeroSorteado = gets();
  numeroSorteados.push(numeroSorteado);
}

let maiorValor = 0;

for (let i = 0; i < numeroSorteados.length; i++) {
  const numeroSorteado = numeroSorteados[i];
  if (numeroSorteado > maiorValor) {
    maiorValor = numeroSorteado;
  }
}

print(maiorValor);
