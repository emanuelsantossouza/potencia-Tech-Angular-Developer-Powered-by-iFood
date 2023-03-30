


const alunos = ["João", " Vitor", "Mariana"];

alunos.push('Emanuel'); // Adiciona

alunos.pop(); // Apaga o ultimo

alunos.shift(); // apaga o primeiro

console.log(alunos.length);


const notas = [];
let conta = 0;
notas.push(10);
notas.push(9);
notas.push(8);
notas.push(7);
notas.push(10);

for (n = 0; n < notas.length; n++){
    conta++;
    notas[n] + notas[conta]
}

console.log(media());

function media() {
    return notas.length / conta;
}


