// Interfaces x Types

type robot = {
    id: number | string;
    name: string;
};

interface robot2{
    readonly id: number | string;
    name: string;
    sayHello(): string;
}

const bot1: robot = {
    id: 1,
    name: "Carlinhos do Pineu",
};

const bot2: robot2 = {
    id: 5,
    name: "Carlinhos do Pineu",
    sayHello: function (): string {
        throw new Error("Function not implemented.");
    }
};

class Pessoa implements robot2{
    id: string | number;
    name: string;
    constructor(id: string | number, name: string) {
        this.id = id;
        this.name = name
    }

    sayHello(): string {
        return `Hello ${this.name}, Yo soy Emanuel, Tengo ${this.id}`
    }
}

console.log(bot1);
console.log(bot2);

const p = new Pessoa(10, "Maria")
console.log(p.sayHello())