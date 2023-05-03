
function addNumber(x: number, y:number) {
    return x+y
}

function addToHello(name: string): string{
    return `Hello ${name}`
}

let soma: number = addNumber(4, 5);


console.log(soma);
console.log(addToHello("Emanuel"));


//----------------------
// MultiTipos funções
function CalltoPhone(phone: number | string): string|number {
    return phone;
}


//----------------------
// Assincronas funções
async function getDabase(id: number): Promise<string|number> {
    return `id ${id}`;
}

