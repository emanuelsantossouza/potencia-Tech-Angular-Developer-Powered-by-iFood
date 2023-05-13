/*

    boolean
    null
    undefined
    number
    string
    synbol
*/


// object

let x = 10 


// converção | converção forçcada
console.log(19 - '10')
console.log(19 + '10')

// comparação 
console.log(10 == '10'); // desconsidera o tipo
console.log(10 === '10'); // considera o tipo






// undefined -- não existente
const xy = { nome: undefined };
console.log(JSON.stringify(x));

// null -- ausencia de valor. a variavel existe, mais não a valor



// Obejtos

const xv = {
    nome: "Emanuel",
    idade: 17
}

xv[`nome`] = 'Santos'

console.log(xv.nome)
console.log(xv['nome'])
