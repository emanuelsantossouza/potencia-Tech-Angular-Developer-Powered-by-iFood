// Criar uma lista de alunos com 4 propriedades
// A 4ª propriedade deve ser a nota do aluno com o nome da materia
// {materia: 'nome', nota: '??'}
// 3 alunos, com 3 materias e suas notas
// imprimir usando o FOR

let Alunos = [{ nome: "Emanuel", idade: 10, materia: ["LP", "Math", "Desenvolvimento de Sistemas"], nota: [10, 5, 7] },
            { nome: "Maria", idade: 14, materia: ["Math", "LP", "Desenvolvimento de Sistemas"], nota: [10, 6, 8] },
            { nome: "Maria Aparecida", idade: 14, materia: ["Desenvolvimento de Sistemas", "LP", "Math"], nota: [10, 7, 9] }]

for (let alunoNome of Alunos) {
    console.log(alunoNome[`nome`], alunoNome[`materia`], alunoNome[`nota`]);

}