/* 
    1 - Crie uma classe para representar carros.
    os carros possuem uma marca, uma cor e um gasto medio de combústivel por
    kilometros rodados.

    Crie um método que dado a quantidade de quilometros e o preço de combustivel
    nós de o valor gasto em reais para realizar este percurso.
*/

class Carros {
    marca;
    cor;
    gastoMedioDCombustivelPorKM;

    constructor(marca, cor, gastoMedioDCombustivelPorKM) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioDCombustivelPorKM = gastoMedioDCombustivelPorKM;
    }

    gastoPorViagemPorPercurso(distanciaEmKm, precoCombustivel) {
        return distanciaEmKm * this.gastoMedioDCombustivelPorKM * precoCombustivel;
    }
}

const camaro = new Carros("Amarelo", "volvagem", (1 / 12));
console.log(camaro.gastoPorViagemPorPercurso(70, 5).toFixed(2));

const lamborghini = new Carros("Vermelho", "Ferrari", (5 / 10));
console.log(lamborghini.gastoPorViagemPorPercurso(70,20))