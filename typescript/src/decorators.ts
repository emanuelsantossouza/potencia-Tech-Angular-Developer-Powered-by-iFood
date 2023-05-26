// decorators
// Class Decorators
function ExibirNome(target: any): any{
    console.log(target)
}

@ExibirNome
class Funcionario{ }


function apiVerson(version: string) {
    return (target: any) => {
        Object.assign(target.prototype, { __version: version, __name: "Emanuel" });
    };
}

@apiVerson("1.01")
class Api{ }
const api = new Api();
console.log(api.__name)


// Atribute decorator

function minLength(Length:number) {
    return (target: any, key: string) => [
        console.log(key),
        console.log(target)
    ]
}


class ApiA {
    @minLength(3)
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const apiA = new ApiA("Produtos");
console.log(apiA.name)