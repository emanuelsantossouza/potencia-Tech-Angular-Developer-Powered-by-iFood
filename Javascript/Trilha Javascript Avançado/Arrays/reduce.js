// Reduce a um unico resultado, são dois valore o preview o current

const list = [1, 2, 2, 4, 3, 1, 3, 1, 2, 2, 2, 4, 5];
const IdUsuarios = [0]

// Algoritmo que check array 

const resultado = list.reduce((idCliente, idClienteExistente) => {
    if (idCliente == idClienteExistente && idCliente == IdUsuarios[0]) {
        console.log(idCliente);
        IdUsuarios.filter((value = idCliente, i) => {
            IdUsuarios.shift(i);
            IdUsuarios.unshift(idCliente);
        });
        return idCliente; // Retorna o valor em caso de igualdade

    } else if (IdUsuarios[0] == idCliente) {
        IdUsuarios.shift();
        IdUsuarios.unshift(idCliente);
        return idClienteExistente; // Retorna o valor em caso de diferença
    } else if (IdUsuarios) {
        IdUsuarios.filter((value, i) => {
            if (value == idCliente) {
                IdUsuarios.splice(i, 1);
            }
            // Retorna o valor em caso de diferença
        });
        IdUsuarios.unshift(idCliente);
        return idClienteExistente;
    } 
});

console.log(resultado); // Imprime o resultado final


// const somaDetodosNumeros = list.reduce((previous, currents) => {
//     console.log(previous,currents)
//     return previous + currents
// })

// console.log(somaDetodosNumeros);


