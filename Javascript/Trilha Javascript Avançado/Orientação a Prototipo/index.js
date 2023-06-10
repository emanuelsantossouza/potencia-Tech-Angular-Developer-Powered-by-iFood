function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

Pessoa.prototype.falar = function () {
    console.log(`Meu nome é: ${this.nome}`);
}

const pai = new Pessoa('Benedito', 54)
pai.falar()


///-------------------------////
// Chamando com o call, ele utilizar um objeto como base e adiciona a função construtora

const mae = {
    genero: 'Feminino',
    isMarried: false,
}


Pessoa.call(mae, 'Emilia', 49);

console.log(mae);


//-----------------------------///
// Bricando com os Prototypes


String.prototype.toElang = function () {
    return `Emanuel é ${this}`;
}

console.log('Lindo'.toElang());