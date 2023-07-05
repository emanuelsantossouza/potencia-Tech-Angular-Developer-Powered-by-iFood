/*  
    Diferentes formas de Invocar uma função.

    Possuimos 3 tipos:
    1- Forma direta, é a tradicional de Invocar a função e passar os parametro;
    2- Forma com apply, para entender esse jeito, primeiro é necessario entender que
    toda função é um objeto e com isso, podemos passar parametros por ele.

    Segundo detalhe sobre o apply, ele sempre vai ser usado para connctarmos uma função a 
    um obejto já existe e assim pedemos utilzar o contexto daquele objeto dentro da nossa função;

    É o que esta acontencendo ali, o primeiro argumento é o contexto que queremos inserir a função 
    e utilizamos os dados se necessario ou não. O segundo paramentro é da função que é pedido na assinatura dela.

    3- Forma com o call, O call é igual o apply, porem ele não é um array, mas variveis soltas e podemos passar um numero
    infinito de variaveis!!

    conclusão, ambas as formas tanto apply como call são necessario quando temos uma função e queremos utilizar o contexto de um objeto
    mas não podemos passar a função como um metodo desse objeto, por precisar dela em outro lugar, mas imaginando o cenário de precisar do contexto
    podemos usar essa duas forma apply e call que vão suprimir todas as nossas
*/
// Diferentes formas de invocar uma função

const Animais = {
    DonoDoAnimal: 'Emanuel'
}


function test(nomeAnimal, tipo, especie, mamifero, habitateNatural) {
    console.log(`Esse é o meu ${tipo}, o nome dele é ${nomeAnimal}, ele é da raça ${especie},
    ele é ${mamifero}, ele vive no ${habitateNatural} e eu sou o dono dele, meu nome é ${this.DonoDoAnimal} 
   // -------------------------------------------------------------------- //`);
}

// Forma Tradicional
test('Floquinho', 'cachorro', 'poodle', 'mamimfero', 'em casa');

// Forma com o Apply
test.apply(Animais, ['Floquinho', 'cachorro', 'poodle', 'mamimfero', 'em casa']);

// Forma com o Call
test.call(Animais, 'Floquinho', 'cachorro', 'poodle', 'mamimfero', 'em casa')