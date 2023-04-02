const alunos = ["João", " Vitor", "Mariana"];

alunos.push('Emanuel'); // Adiciona

alunos.pop(); // Apaga o ultimo

alunos.shift(); // apaga o primeiro

console.log(alunos.length);



// Soma a Media
const notas = [];
let conta = 0;
notas.push(10);
notas.push(9);
notas.push(8);
notas.push(7);
notas.push(10);

for (let i = 0; i < notas.length; i++){
    const nota = notas[1];
    conta = conta + nota;
}

console.log(conta)
console.log(media());

function media() {
    return conta / notas.length;
}


