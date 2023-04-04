/* 2) Crie um programa que seja capaz de percorrer uma lista de um número 
e imprama cada número pár que for encontrado.
*/

const listaDNumero = [1, 2, 3, 4, 5,];

for (i = 0; i < listaDNumero.length; i++){

    // Mais codigo e mais facil
    if (listaDNumero[i] === 2 || listaDNumero[i] === 4 || listaDNumero[i] ===6 || listaDNumero[i] === 8) {
        console.log(listaDNumero[i]);    
    }
    
    // Menos codigos e mais dificil -- Prcisa entende o contexto
    if (listaDNumero[i] % 2 === 0 ) {
      console.log(listaDNumero[i]);
    }
}