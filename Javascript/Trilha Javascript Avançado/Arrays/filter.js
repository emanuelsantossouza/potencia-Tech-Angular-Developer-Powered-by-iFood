const list = [0, 1, , 2, 3, 4, 5, 6, 7, 8, 9, 10];
// filter, é a nossa função de julgamento
// ele funciona da seguiente forma, é passado uma condição para o filter e
// de acordo com a condição é retornado um resultado e é criado uma nova lista
const novaListaFilter = list.filter((element, i, listRef) => {
    return (element % 2 === 0)
})

console.log(novaListaFilter);




const listNomes = ['Paulo', 'João', 'Fernando'];

nomesComJ = listNomes.filter((element) => element.includes('a'));

console.log(nomesComJ);