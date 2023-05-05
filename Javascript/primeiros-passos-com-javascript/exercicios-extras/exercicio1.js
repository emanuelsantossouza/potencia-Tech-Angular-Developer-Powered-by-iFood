const { gets, print } = require('./funcoes-auxiliares1');

const media = gets();

if (media < 5) {
    print("Repovado");
} else if (media >= 5 && media < 7) {
    print("Recuperação");
} else {
    print("Aprovado")
}