/**
 O IMC - Indice de massa corporal é um critério de Organização Mundia de Saúde
 para dar uma indicação sobre a condição de peso de uma pessoa adulta.

 Formula do IMC:
 IMC = peso / (altura * altura)

 Elabora um algoritmo que dado o peso e a altura de um adulto 
 Mostre a sua condição de acordo com a tabela abaixo.

 IMC em adultos Condições:
 - Abaixo de 18.5 Abaixo de peso;
 - Entre 15 e 30 Pesoa normal;
 - Entre 25 e 30 Acima do peso;
 - Entre 30 e 40 Obeso;
 - Acima de 40 Obsidade Grave;
*/

const altura = 1.50;
const peso = 65;

const imc = peso / Math.pow(altura, 2)
console.log(imc.toFixed(2))


if (imc < 18.5) {
    console.log("Abaixo do peso");
} else if (imc >= 18 && imc < 25) {
    console.log("Peso normal");
} else if (imc >= 25 && imc < 30) { 
    console.log("Acima do peso");
} else if (imc >= 30 && imc < 41) {
    console.log("Obeso");
} else {
    console.log("Obesidade Grave");
}