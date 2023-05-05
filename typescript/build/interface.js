"use strict";
const bot1 = {
    id: 1,
    name: "Carlinhos do Pineu",
};
const bot2 = {
    id: 5,
    name: "Carlinhos do Pineu",
    sayHello: function () {
        throw new Error("Function not implemented.");
    }
};
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return `Hello ${this.name}, Yo soy Emanuel, Tengo ${this.id}`;
    }
}
console.log(bot1);
console.log(bot2);
const p = new Pessoa(10, "Maria");
console.log(p.sayHello());
