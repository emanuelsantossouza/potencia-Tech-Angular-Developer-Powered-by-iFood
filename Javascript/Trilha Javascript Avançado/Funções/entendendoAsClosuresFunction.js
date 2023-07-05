/*
    As Closures functions são funções normais, 
    Porem, no retorno delas podemos 'salvar' informações
    e manipularmos da forma que quisermos
*/

// Clousres 
function soma(x) {
    return function (y) {
        return x + y
    }
}

// com Arrow functions tambem funciona
function multiplicao(y) {
    return (x) => {
        return y*x
    }
}

console.log("Com Função Declarativa: " + soma(4)(9));
console.log("Com Arrow Function: " + multiplicao(14)(4));