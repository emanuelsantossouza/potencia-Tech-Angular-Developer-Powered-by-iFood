// Faça um programa para calcular o valor de uma viagem.

// Você terá 5 variáveis, Sendo elas:
//     1 - Preço do etanol;
//     2 - Preco da gasolina;
//     3 - O tipo de combustivel que está no seu carro;
//     4 - Gasto, médio de combustivel do carro por KM;
//     5 - Distáncia em Km da viagem;

// Imprima no console o valor que será gasto para realizar esta viagem.

const precoDEtanol = 5.79;
const precoDGasolina = 6.66;
let tipoDCombustivel = 'Gasolina';
let gastoMedioPorKM = 10;
const distanciaEmKM = 100;

const LitrosConsumidos = (distanciaEmKM / gastoMedioPorKM);

if (tipoDCombustivel === "Etanol") {
    
    let valorGasto = LitrosConsumidos * precoDEtanol;
    console.log(`O valor gato foi de ${valorGasto}`);
} else {
    valorGasto = LitrosConsumidos * precoDEtanol;
    console.log(`O valor gasto foi de ${precoDGasolina}`);
}