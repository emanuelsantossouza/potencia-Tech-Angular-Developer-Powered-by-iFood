/*
    Crie uma classe para representar pessoas.
    para cada pessoa teremos os atributos nome, peso e altura.
    As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));

    Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de açtura e peça ao josé para dizer o 
    valor do seu IMC;
*/

class Pessoas {
  nome;
  peso;
  altura;
  classificaIMC;

  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }

  Imc() {
    return this.peso / (this.altura * this.altura);
  }

    classificarIMC() {
      const imc = this.Imc();
    if (imc < 18.5) {
      return ("Abaixo do peso");
    } else if (imc >= 18 && imc < 25) {
      return ("Peso normal");
    } else if (imc >= 25 && imc < 30) {
      return ("Acima do peso");
    } else if (imc >= 30 && imc < 41) {
      return ("Obeso");
    } else {
      return ("Obesidade Grave");
    }
  }
}

const emanuel = new Pessoas("Emanuel", 75, 1.8);
console.log(
  `${emanuel.nome}, O teu IMC é de ${emanuel.Imc()}. Você está ${emanuel.classificarIMC()}`
);

const ayme = new Pessoas("Aymê", 52, 1.68);
console.log(`${ayme.nome}, O teu IMC é de ${ayme.Imc()}. Você está ${ayme.classificarIMC()}`);
