/* Refatorando o Código e Tornando-o mais CleanCode*/

function calculandoImc(altura, peso) {
  return peso / Math.pow(altura, 2);
}

function classificacaoIMC(imc) {
  if (imc < 18.5) {
      return 'Abaixo do peso';
  } else if (imc >= 18 && imc < 25) {
    return 'Peso normal';
  } else if (imc >= 25 && imc < 30) {
    return 'Acima do peso';
  } else if (imc >= 30 && imc < 41) {
    return 'Obeso';
  } else {
    return 'Obesidade Grave';
  }
}

function main() {
  const peso = 75;
    const altura = 1.76;
    
  const imc = calculandoImc(peso, altura);
  console.log(classificacaoIMC(imc));
}

main();
