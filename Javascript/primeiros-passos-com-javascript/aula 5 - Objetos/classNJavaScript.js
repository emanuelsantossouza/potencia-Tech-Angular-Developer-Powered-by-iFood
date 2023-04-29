class Pessoa {
    nome;
    idade;
    anoDNacismento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade
        this.anoDNacismento = 2022 - idade; 
    }

    descreva() {
        console.log(`Me chamo ${this.nome} e tenho ${this.idade}`);
    }
}

const emanuel = new Pessoa("emanuel", 15);
const mario = new Pessoa("Jessica", 13);

console.log(emanuel, mario)
