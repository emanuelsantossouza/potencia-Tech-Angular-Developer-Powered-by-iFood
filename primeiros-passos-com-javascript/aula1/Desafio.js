// Faça um programa para calcular o valor de gasto de combustivel em uma viagem.

// Você tera 3 variáveis. Sendo elas:
// 1 - Preço do combustivel;
//    2 - Valor médio de combustivel do carro por KM;
// 3 - Distancia em KM de viagem;

// Imprima no console o valor que sera gasto de combustivel para realizar essa viagem.

const distancia = parseFloat(100);
const precoCombustivel = parseFloat(5.79);
const kmPorLitros = parseFloat(10);

const litrosGastos = distancia / kmPorLitros;
let valorGasto = (precoCombustivel * litrosGastos);
console.log(valorGasto.toFixed(2));