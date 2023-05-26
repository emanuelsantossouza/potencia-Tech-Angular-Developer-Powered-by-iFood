//Generics
// Sem o Generics

function concatArray(...itens: any[]): any[] {
    return new Array().concat(...itens);
}

const numArray = concatArray([1, 4], [3]);
const stgArray = concatArray(["felipe", "goku"], ["vegeta"]);
// Aqui estamos quebranco a nossa regra de negocio. Estamos passando uma string
// em um array de apenaas numero!!!!
numArray.push("Saitama");

console.log(numArray);
console.log(stgArray);


// Com Generics
function concatArrayComGeneric<T>(...itens: T[]): T[] {
    return new Array().concat(...itens);
}

const numeArray = concatArrayComGeneric<number[]>([1, 4], [3]);
const strgArray = concatArrayComGeneric<string[]>(["felipe", "goku"], ["vegeta"]);
//Aqui O problema lá de cima já esta resolvido. Porque com o <T> no array, ele deixa
// em aberto a tipagem e podemos declarar na cons o tipo que vamos receber!!!!
// numeArray.push("Saitama");

console.log(numArray);
console.log(stgArray);