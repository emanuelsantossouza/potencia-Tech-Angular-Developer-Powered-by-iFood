// Criando dois objetos e orintando eles a prototypes
const Pessoa = {
    genero: 'masculino'
}

const emanuel = {
    nome: 'Emanuel',
    idade: 17,
    __proto__:Pessoa // recebendo uma herança de Pessoa
}

console.log(emanuel.genero);


/---------------------------------------/

// Comparando Ambos os codigos são as mesma coisas
class Pessoas {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    falar() {
        console.log(`My name is ${this.nome}`);
    }
}

// Por debaixo dos panos a class se torna uma função
// construtora e o codigo de cima fica igual o debaixo
function Pessoas(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

Pessoas.prototype.falar = function () {
    console.log(`My name is ${this.nome}`);
}

const Carlos = new Pessoas('Ana', 14) // Instanciando e passando os valores

console.log(Ana);
Ana.falar();



