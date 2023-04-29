// Funcão: Meun nome é....
function sayMyName(name) {
    console.log(`Your name is: ` + name);
}

sayMyName("Joao");
sayMyName("Marcos");

//Função: O quadrado de qualquer número
function quadrado(valor) {
    return valor * valor
    
}
const quadradoDeQualquerNUmero = quadrado(100);
console.log(quadradoDeQualquerNUmero)


//Função: Juros
function incrementarJuros(valor, percentualJuros) {
    const valorDAcrecimo = (percentualJuros / 100) * valor;
    return (valor + valorDAcrecimo);
}
const valorProduto = incrementarJuros(1000, 100);
console.log(valorProduto);
