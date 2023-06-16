/* Function Declaration
    // Detalhes:
    // A Funcão Declarativa, que é declarada apartir do function sofre o hosting
*/
// Caso Chamemos a função expressio aqui em cima não ia funcionar, mas teremos um erro... por ela não sofreo hosting
nomeDaFuncaoDeclrativa();
nomeDaFuncaoExpression();


function nomeDaFuncaoDeclrativa() {
    console.log('Nome da função declarativa')
}

/* Function Expression
    // Detalhes: 
    // A Funcão Expression, que é declarada apartir de uma variavel não sofre o hosting
*/
const nomeDaFuncaoExpression = function () {
    console.log('nomeDaFuncaoExpression');
}

nomeDaFuncaoDeclrativa();
nomeDaFuncaoExpression();