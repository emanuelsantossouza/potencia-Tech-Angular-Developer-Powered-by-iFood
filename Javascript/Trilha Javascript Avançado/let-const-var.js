// O var faz o escopo
if (true) {
    var var1 = 10;
}

console.log(var1)


// com funções não funciona!!!
// O hoisting não se aplicaa em funções
function teste1() {
    var var2 = 10;
}

teste1()

console.log(var2);