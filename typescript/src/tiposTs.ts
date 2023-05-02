// Tipos Primitivos: string, number, boolean

let ligado: boolean;
let nome: string = 'Emanuel';
let idade: number = 40;
let altura: number = 1.90;
//-------------------------------


// Tipos Especiais: Null, Undefined
let nulo: null = null;
let indefinido: undefined = undefined;
//-------------------------------


// Tipos abrangentes
let voide: void;
let retornoView: any = false;
//---------------------------



// Tipos Objecto
// Sem previsibilidade
let objeto: Object = {
    name: "Emanuel",
    sobrenome: "Santos",
    idade: 14,
}

// Com previsibilidade
type ProdutosLoja = {
    nome: string;
    preco: number;
    unidae: number;
}

let myProduct: ProdutosLoja = {
    nome: "camisa",
    preco: 20,
    unidae: 1,
}
//--------------------------------

//array
//----- Duas Formas de declarar o Vetor
let dados1: string[] = ["Felipe", "Emanuel", "Adrino"];
let dados2: Array<string> = ["Felipe", "Emanuel", "Adrino"];

//------- multiplos dados
let info: (string | number)[] = ["emanuel", 13, "souza", 20];


// Tuplas
// ---- A ordem precisa ser seguida corretamente!!!
let boleto: [string, number, null] = ["Agua", 25.53, null];


// Datas
let datas: Date = new Date("05-20-2020 20:00");
console.log(datas.toString());



