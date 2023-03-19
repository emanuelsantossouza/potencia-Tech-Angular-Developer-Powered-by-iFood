const numero = 0;

iseNumeroPar = (numero % 2) == 0; /* Comparação de valores, mas independente do tipo */
iseNumeroPar = (numero % 2) === 0; //Comparação depente do tipo e valores
console.log(iseNumeroPar);


if (iseNumeroPar) {
    console.log("é par");
} else {
    console.log("não é par");
}



isNumeroDivisivelPor5 = (numero % 5) === 0; /* Comparação depente do tipo e valores*/
console.log(isNumeroDivisivelPor5);


if (numero === 0) {
    console.log("O numero é invalido");
} else if (isNumeroDivisivelPor5 === 0){
    console.log("Sim");
} else {
    console.log("Não")
}