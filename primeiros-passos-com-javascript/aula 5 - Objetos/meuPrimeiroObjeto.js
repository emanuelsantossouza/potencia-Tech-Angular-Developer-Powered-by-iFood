

const pessoa = {
    nome: "Emanuel",
    idade: 17,

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

pessoa.descrever();


const pessoa2 = {
  nome: "Emanuel",
  idade: 17,

  descrever: function () {
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
  },
};


pessoa2[`nome`] = "teste";
pessoa2.nome = "test"


pessoa2.descrever();