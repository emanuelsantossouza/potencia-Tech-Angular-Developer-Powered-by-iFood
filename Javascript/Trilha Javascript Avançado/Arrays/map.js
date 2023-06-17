// Map
// Faz uma transformação de qualquer coisa em outra
class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

// retorna um objeto
const list = [new Pessoa("Emanuel"), new Pessoa("João"), new Pessoa("Pedro"), new Pessoa("Ayme") ];
console.log(list)

// Imagine que vc so quer os nomes... como fazer isso?

const novaListaApenasNomes = list.map((element, i) => {
    return `${i} - ${element.nome}`
} )

console.log(novaListaApenasNomes);