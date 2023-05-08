// hoisting sempre vai jogar a variaveel pra cima
// Mas apenas a sua declaração, não a sua atribuição "VAlor"

teste1();
teste2();

function teste2() {
    console.log("teste2");
}

var teste1 = function teste1() {
    console.log("teste1");
}

